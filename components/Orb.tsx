import React from 'react';
import { motion } from 'framer-motion';

const TechcoraOrb: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center h-[320px] sm:h-[360px] md:h-[400px] lg:h-[480px] xl:h-[520px] w-full">

      {/* Circuit Board Pattern - Background */}
      <svg className="absolute w-[300px] sm:w-[340px] md:w-[380px] lg:w-[440px] xl:w-[480px] h-[300px] sm:h-[340px] md:h-[380px] lg:h-[440px] xl:h-[480px] opacity-30" viewBox="0 0 200 200">
        {/* Horizontal circuit lines */}
        <motion.line x1="0" y1="50" x2="60" y2="50" stroke="rgba(255,107,0,0.4)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
        <motion.line x1="140" y1="50" x2="200" y2="50" stroke="rgba(255,107,0,0.4)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }} />
        <motion.line x1="0" y1="150" x2="60" y2="150" stroke="rgba(255,107,0,0.4)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1 }} />
        <motion.line x1="140" y1="150" x2="200" y2="150" stroke="rgba(255,107,0,0.4)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.5 }} />

        {/* Vertical circuit lines */}
        <motion.line x1="50" y1="0" x2="50" y2="60" stroke="rgba(255,107,0,0.4)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.3 }} />
        <motion.line x1="150" y1="0" x2="150" y2="60" stroke="rgba(255,107,0,0.4)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.8 }} />
        <motion.line x1="50" y1="140" x2="50" y2="200" stroke="rgba(255,107,0,0.4)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.3 }} />
        <motion.line x1="150" y1="140" x2="150" y2="200" stroke="rgba(255,107,0,0.4)" strokeWidth="0.5"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 1.8 }} />

        {/* Circuit nodes */}
        <motion.circle cx="50" cy="50" r="2" fill="#ff6b00" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <motion.circle cx="150" cy="50" r="2" fill="#ff6b00" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }} />
        <motion.circle cx="50" cy="150" r="2" fill="#ff6b00" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1 }} />
        <motion.circle cx="150" cy="150" r="2" fill="#ff6b00" animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }} />
      </svg>

      {/* Outer Tech Ring */}
      <motion.div
        className="absolute w-[240px] sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[420px] h-[240px] sm:h-[280px] md:h-[320px] lg:h-[380px] xl:h-[420px] rounded-full border border-techcora-orange/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {/* Orbital nodes - like electrons/data points */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-techcora-orange rounded-full shadow-lg shadow-techcora-orange/50" />
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2 h-2 bg-white/80 rounded-full" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-techcora-orange/60 rounded-full" />
      </motion.div>

      {/* Middle Ring - Counter rotation */}
      <motion.div
        className="absolute w-[180px] sm:w-[210px] md:w-[240px] lg:w-[290px] xl:w-[320px] h-[180px] sm:h-[210px] md:h-[240px] lg:h-[290px] xl:h-[320px] rounded-full border border-dashed border-white/10"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Inner Pulse Ring */}
      <motion.div
        className="absolute w-[140px] sm:w-[165px] md:w-[190px] lg:w-[230px] xl:w-[260px] h-[140px] sm:h-[165px] md:h-[190px] lg:h-[230px] xl:h-[260px] rounded-full border-2 border-techcora-orange/30"
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Core Glow */}
      <div
        className="absolute w-[120px] sm:w-[140px] md:w-[160px] lg:w-[190px] xl:w-[210px] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[190px] xl:h-[210px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,0,0.2) 0%, transparent 70%)',
        }}
      />

      {/* Gear/Cog Icon - Robotics indicator */}
      <motion.div
        className="absolute w-[260px] sm:w-[300px] md:w-[340px] lg:w-[400px] xl:w-[440px] h-[260px] sm:h-[300px] md:h-[340px] lg:h-[400px] xl:h-[440px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <path
            d="M50 15 L53 15 L54 10 L58 10 L59 15 L62 16 L65 12 L68 14 L66 18 L68 21 L73 20 L74 24 L70 26 L70 29 L75 31 L74 35 L69 34 L67 37 L70 41 L67 44 L63 41 L60 43 L61 48 L57 49 L55 44 L52 44 L50 49 L46 48 L47 43 L44 41 L40 44 L37 41 L40 37 L38 34 L33 35 L32 31 L37 29 L37 26 L32 24 L33 20 L38 21 L40 18 L38 14 L41 12 L44 16 L47 15 L48 10 L52 10 L53 15 Z"
            fill="none"
            stroke="rgba(255,107,0,0.5)"
            strokeWidth="0.3"
          />
        </svg>
      </motion.div>

      {/* Logo Container */}
      <motion.div
        className="relative z-10 w-[100px] sm:w-[120px] md:w-[140px] lg:w-[170px] xl:w-[190px] h-[100px] sm:h-[120px] md:h-[140px] lg:h-[170px] xl:h-[190px] flex items-center justify-center"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Logo */}
        <div
          className="w-full h-full rounded-full overflow-hidden"
          style={{
            maskImage: 'radial-gradient(circle, black 50%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 70%)',
          }}
        >
          <img
            src="/assets/tc-logo.png"
            alt="Techcora"
            className="w-full h-full object-contain scale-[1.5]"
          />
        </div>
      </motion.div>

      {/* Data Stream Particles */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-techcora-orange rounded-full"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * 90 * Math.PI / 180) * 150],
            y: [0, Math.sin(i * 90 * Math.PI / 180) * 150],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Bottom Label */}
      <div className="absolute bottom-2 md:bottom-4 flex flex-col items-center gap-1">
        <div className="flex items-center gap-3">
          <motion.div
            className="w-1.5 h-1.5 bg-techcora-orange rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-[11px] md:text-xs text-white/70 font-display tracking-[0.3em] uppercase font-bold">
            LITS
          </span>
          <motion.div
            className="w-1.5 h-1.5 bg-techcora-orange rounded-full"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TechcoraOrb;
