import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = [
  { letter: 'L', rest: 'ead' },
  { letter: 'I', rest: 'ndia' },
  { letter: 'T', rest: 'o' },
  { letter: 'S', rest: 'upremacy' },
];

const LITSReveal: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsInteractive(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return (
    <div className="mb-4 md:mb-6 lg:mb-8" onClick={() => setHoveredIndex(null)}>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-black leading-[0.95] uppercase tracking-wider">
        <span className="inline-flex">
          {words.map((word, index) => (
            <motion.span
              key={index}
              className="inline-flex cursor-pointer"
              onMouseEnter={() => isInteractive && setHoveredIndex(index)}
              onMouseLeave={() => isInteractive && setHoveredIndex(null)}
              onClick={(e) => {
                e.stopPropagation();
                if (isInteractive) setHoveredIndex(hoveredIndex === index ? null : index);
              }}
            >
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r from-white to-techcora-orange transition-opacity ${
                  hoveredIndex !== null && hoveredIndex !== index ? 'opacity-30' : 'opacity-100'
                }`}
              >
                {word.letter}
              </span>

              <motion.span
                className="overflow-hidden hidden lg:inline-block text-transparent bg-clip-text bg-gradient-to-r from-techcora-orange/80 to-techcora-orange/60"
                initial={{ width: 0, opacity: 0 }}
                animate={{
                  width: hoveredIndex === index ? 'auto' : 0,
                  opacity: hoveredIndex === index ? 1 : 0,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {word.rest}
              </motion.span>
            </motion.span>
          ))}
        </span>
      </h1>

      <p className="mt-2 text-sm sm:text-base md:text-lg font-display uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-techcora-orange lg:hidden">
        Lead India To Supremacy
      </p>

      <motion.p
        className="mt-2 hidden lg:flex text-[10px] md:text-xs text-slate-500 uppercase tracking-widest items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredIndex === null ? 0.6 : 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          →
        </motion.span>
        Hover letters
      </motion.p>
    </div>
  );
};

export default LITSReveal;
