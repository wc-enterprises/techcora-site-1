import React from 'react';
import { Sparkles, Users, ShieldCheck, TrendingUp } from 'lucide-react';

const missionCards = [
  { title: "Innovation First", icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" /> },
  { title: "Client Success", icon: <Users className="w-5 h-5 md:w-6 md:h-6" /> },
  { title: "Quality Assurance", icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" /> },
  { title: "Sustainable Growth", icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" /> }
];

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 mb-12 md:mb-16">
          {/* Left - Title */}
          <div className="max-w-2xl">
            <span className="text-techcora-orange font-display font-bold tracking-[0.3em] uppercase text-xs mb-4 md:mb-6 block">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-black uppercase leading-[1.1] text-white">
              Build The Best Team
            </h2>
          </div>

          {/* Right - Description */}
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md md:pl-8 border-l-2 border-techcora-orange pl-4">
            To build the best team of engineers and individuals, creating world class products at lightening speed. We're not just building tech — we're building a legacy.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {missionCards.map((card, index) => (
            <div
              key={index}
              className="bg-techcora-dark p-6 md:p-8 lg:p-10 flex flex-col hover:bg-black transition-colors group"
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

export default Mission;
