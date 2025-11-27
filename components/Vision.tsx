import React from 'react';
import { Globe, Cpu, Lightbulb, Rocket } from 'lucide-react';

const visionCards = [
  { title: "Global Impact", icon: <Globe className="w-5 h-5 md:w-6 md:h-6" /> },
  { title: "Technology Leadership", icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" /> },
  { title: "Industry Innovation", icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" /> },
  { title: "Future Ready", icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" /> }
];

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-16 md:py-24 bg-techcora-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 mb-12 md:mb-16">
          {/* Left - Title */}
          <div className="max-w-2xl">
            <span className="text-techcora-orange font-display font-bold tracking-[0.3em] uppercase text-xs mb-4 md:mb-6 block">
              Our Vision
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase leading-[1.1]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-techcora-orange">LITS</span>
            </h2>
          </div>

          {/* Right - Description */}
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md md:pl-8 border-l-2 border-techcora-orange pl-4">
            <strong className="text-white">LITS</strong> — Lead India To Supremacy. Creating groundbreaking products at the cutting edge of technology. We aim to uplift India's greatness, restore its historic legacy by extending our innovations to solve global challenges.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {visionCards.map((card, index) => (
            <div
              key={index}
              className="bg-black p-6 md:p-8 lg:p-10 flex flex-col hover:bg-techcora-dark transition-colors group"
            >
              {/* Icon */}
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 flex items-center justify-center mb-6 md:mb-8 group-hover:bg-techcora-orange transition-colors duration-300 text-techcora-orange group-hover:text-black">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-base md:text-lg lg:text-xl text-white uppercase tracking-wide leading-tight">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
