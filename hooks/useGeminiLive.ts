import { useState, useRef, useCallback } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';
import { ConnectionState, AudioMetrics } from '../types';
import { base64ToBytes, float32ToInt16PCM, decodeAudioData, arrayBufferToBase64 } from '../services/audioUtils';

const MODEL_NAME = 'gemini-2.5-flash-native-audio-preview-09-2025';

export const useGeminiLive = () => {
  const [connectionState, setConnectionState] = useState<ConnectionState>(ConnectionState.DISCONNECTED);
  const [audioMetrics, setAudioMetrics] = useState<AudioMetrics>({ inputLevel: 0, outputLevel: 0 });
  
  const inputContextRef = useRef<AudioContext | null>(null);
  const outputContextRef = useRef<AudioContext | null>(null);
  const inputSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const outputSourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  
  const sessionRef = useRef<Promise<any> | null>(null);
  const nextStartTimeRef = useRef<number>(0);

  const disconnect = useCallback(async () => {
    console.log('Disconnecting...');
    setConnectionState(ConnectionState.DISCONNECTED);

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    if (inputSourceRef.current) {
      inputSourceRef.current.disconnect();
      inputSourceRef.current = null;
    }
    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    outputSourcesRef.current.forEach(source => {
      try { source.stop(); } catch (e) {}
    });
    outputSourcesRef.current.clear();

    if (inputContextRef.current?.state !== 'closed') {
      await inputContextRef.current?.close();
    }
    if (outputContextRef.current?.state !== 'closed') {
      await outputContextRef.current?.close();
    }
    
    inputContextRef.current = null;
    outputContextRef.current = null;
    sessionRef.current = null;
    // Reset audio metrics
    setAudioMetrics({ inputLevel: 0, outputLevel: 0 });
  }, []);

  const connect = useCallback(async () => {
    if (!process.env.API_KEY) {
      alert("API_KEY is missing in environment variables.");
      return;
    }

    await disconnect();

    try {
      setConnectionState(ConnectionState.CONNECTING);
      nextStartTimeRef.current = 0;

      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      inputContextRef.current = new AudioContextClass({ sampleRate: 16000 });
      outputContextRef.current = new AudioContextClass({ sampleRate: 24000 });

      // Resume contexts if suspended (browser autoplay policy)
      if (inputContextRef.current.state === 'suspended') await inputContextRef.current.resume();
      if (outputContextRef.current.state === 'suspended') await outputContextRef.current.resume();

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const callbacks = {
        onopen: async () => {
          console.log('Gemini Live Connection Opened');
          setConnectionState(ConnectionState.CONNECTED);
          
          if (!inputContextRef.current || !streamRef.current) return;
          
          const source = inputContextRef.current.createMediaStreamSource(streamRef.current);
          inputSourceRef.current = source;
          
          const processor = inputContextRef.current.createScriptProcessor(4096, 1, 1);
          processorRef.current = processor;
          
          processor.onaudioprocess = (e) => {
            if (!sessionRef.current) return;

            const inputData = e.inputBuffer.getChannelData(0);
            
            // RMS Calculation for Visuals
            let sum = 0;
            for (let i = 0; i < inputData.length; i++) {
              sum += inputData[i] * inputData[i];
            }
            const rms = Math.sqrt(sum / inputData.length);
            setAudioMetrics(prev => ({ ...prev, inputLevel: Math.min(1, rms * 8) })); // Increased sensitivity for visuals

            const pcmData = float32ToInt16PCM(inputData);
            const base64Data = arrayBufferToBase64(pcmData);
            
            sessionRef.current.then((session: any) => {
                session.sendRealtimeInput({
                    media: {
                        mimeType: 'audio/pcm;rate=16000',
                        data: base64Data
                    }
                });
            }).catch((err: any) => {
                console.error("Error sending audio, likely connection dropped:", err);
            });
          };

          source.connect(processor);
          processor.connect(inputContextRef.current.destination);
        },
        onmessage: async (message: LiveServerMessage) => {
          const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
          
          if (base64Audio && outputContextRef.current) {
            try {
                const ctx = outputContextRef.current;
                const audioBytes = base64ToBytes(base64Audio);
                const audioBuffer = await decodeAudioData(audioBytes, ctx, 24000, 1);

                nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                
                const source = ctx.createBufferSource();
                source.buffer = audioBuffer;
                
                const gainNode = ctx.createGain();
                gainNode.gain.value = 1.0; 
                
                source.connect(gainNode);
                gainNode.connect(ctx.destination);
                
                source.start(nextStartTimeRef.current);
                nextStartTimeRef.current += audioBuffer.duration;
                
                outputSourcesRef.current.add(source);
                source.onended = () => {
                    outputSourcesRef.current.delete(source);
                };
                
                // Trigger output visualizer
                setAudioMetrics(prev => ({ ...prev, outputLevel: 0.8 }));
                // Small timeout to decay visualizer
                setTimeout(() => {
                    setAudioMetrics(prev => ({ ...prev, outputLevel: 0 }));
                }, audioBuffer.duration * 1000);

            } catch (e) {
                console.error("Failed to decode or play audio:", e);
            }
          }

          const interrupted = message.serverContent?.interrupted;
          if (interrupted) {
             console.log("Interrupted by user");
             outputSourcesRef.current.forEach(src => {
                 try { src.stop(); } catch(e) {}
             });
             outputSourcesRef.current.clear();
             nextStartTimeRef.current = 0;
          }
        },
        onclose: () => {
          console.log('Connection closed');
          setConnectionState(ConnectionState.DISCONNECTED);
          disconnect();
        },
        onerror: (err: any) => {
          console.error('Connection error', err);
          setConnectionState(ConnectionState.ERROR);
          disconnect();
        }
      };

      const config = {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } }
        },
        // Enable Google Search Grounding
        tools: [{ googleSearch: {} }],
        systemInstruction: "You are Nebula, a futuristic AI for Techcora. You have access to Google Search for real-time information. Use it when the user asks about current events, news, or specific data. Be concise, professional, and deep-tech oriented in your tone.",
      };

      const sessionPromise = ai.live.connect({
        model: MODEL_NAME,
        callbacks,
        config
      });
      
      sessionRef.current = sessionPromise;
      
      sessionPromise.catch(err => {
         console.error("Failed to establish session:", err);
         setConnectionState(ConnectionState.ERROR);
         disconnect();
      });

    } catch (error) {
      console.error("Failed to connect:", error);
      setConnectionState(ConnectionState.ERROR);
      disconnect();
    }
  }, [disconnect]);

  return {
    connect,
    disconnect,
    connectionState,
    audioMetrics
  };
};