import { ChevronRight, ArrowRight } from "lucide-react";
import React, { useCallback, useState } from "react";
import ContactModal from "./components/ContactModal";
import Features from "./components/Features";
import Header from "./components/Header";
import LITSReveal from "./components/LITSReveal";
import Mission from "./components/Mission";
import TechcoraOrb from "./components/Orb";
import Projects from "./components/Projects";
import Vision from "./components/Vision";

const App: React.FC = () => {
  const [contactTitle, setContactTitle] = useState<string | undefined>(
    undefined
  );
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = useCallback((title: string) => {
    setContactTitle(title);
    setIsContactOpen(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-techcora-orange selection:text-white font-sans">
      <Header onOpenContact={(t) => openContact(t)} />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 md:pt-24 lg:pt-16 overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-black">
            {/* Large Gradient Glow - top right */}
            <div className="absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[700px] h-[300px] md:h-[500px] lg:h-[700px] bg-techcora-orange/10 blur-[180px] rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-6 py-6 md:py-4 lg:py-0 w-full relative z-10 flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-6 lg:gap-8 items-center">
            {/* Left: Text Content */}
            <div className="text-center md:text-left">
              <LITSReveal />

              <p className="text-xs sm:text-sm md:text-sm lg:text-base text-slate-400 font-normal mb-6 md:mb-8 lg:mb-10 max-w-sm md:max-w-xs lg:max-w-md mx-auto md:mx-0 leading-relaxed">
                Building a group of world-changing companies in{" "}
                <strong className="text-white font-semibold">
                  Softwares, Robotics, Rockets, and Energy
                </strong>
                . Restoring historic greatness through deep tech.
              </p>

              <div className="flex flex-col gap-3 max-w-[220px] md:max-w-[240px] lg:max-w-xs mx-auto md:mx-0">
                <a
                  href="#projects"
                  className="group w-full px-4 md:px-5 lg:px-6 py-2.5 md:py-3 lg:py-4 border border-white/40 text-white font-display font-bold uppercase tracking-[0.1em] text-xs md:text-sm hover:bg-techcora-orange hover:border-techcora-orange hover:text-white transition-all duration-300 rounded flex items-center justify-center gap-2"
                >
                  Our Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>

            <div className="flex justify-center relative w-full">
                <TechcoraOrb />
            </div>
          </div>
        </section>

        {/* Industry Strip */}
        <div className="border-y border-white/10 bg-techcora-dark">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-between items-center gap-4 md:gap-0">
              {["Softwares", "Robotics", "Rockets", "Energy"].map(
                (industry) => (
                  <div
                    key={industry}
                    className="flex items-center gap-2 text-slate-400 uppercase font-display tracking-widest text-xs md:text-sm hover:text-techcora-orange transition-colors cursor-default"
                  >
                    <span className="w-1.5 h-1.5 bg-techcora-orange rotate-45"></span>
                    {industry}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <Vision />

        <Mission />

        <Features />

        <Projects />

        {/* Contact/Footer Section */}
        <section
          id="contact"
          className="relative py-16 md:py-32 px-4 md:px-6 bg-black border-t border-white/10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 md:mb-8 uppercase">
              Join the <span className="text-techcora-orange">Revolution</span>
            </h2>
            <p className="text-slate-400 mb-8 md:mb-12 max-w-xl mx-auto text-sm md:text-lg">
              We are looking for the best engineers and individuals to create
              world-class products at lightning speeds.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <div
                className="group border border-white/10 p-6 md:p-8 hover:border-techcora-orange transition-colors cursor-pointer bg-techcora-dark"
                onClick={() => openContact("Apply Now")}
              >
                <h3 className="font-display font-bold text-lg md:text-xl mb-2">Careers</h3>
                <div className="flex items-center justify-center md:justify-start text-techcora-orange uppercase text-xs tracking-widest font-bold gap-2">
                  Apply Now{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <div
                className="group border border-white/10 p-6 md:p-8 hover:border-techcora-orange transition-colors cursor-pointer bg-techcora-dark"
                onClick={() => openContact("Contact Us")}
              >
                <h3 className="font-display font-bold text-lg md:text-xl mb-2">
                  Investors
                </h3>
                <div className="flex items-center justify-center md:justify-start text-techcora-orange uppercase text-xs tracking-widest font-bold gap-2">
                  Contact Us{" "}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <footer className="max-w-7xl mx-auto mt-16 md:mt-24 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs text-slate-600 uppercase tracking-widest">
            <p>© 2025 Techcora. All rights reserved.</p>
            <div className="flex gap-6 md:gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-techcora-orange">
                Privacy
              </a>
              <a href="#" className="hover:text-techcora-orange">
                Legal
              </a>
              <a href="#" className="hover:text-techcora-orange">
                Brand
              </a>
            </div>
          </footer>
        </section>
      </main>
      <ContactModal
        title={contactTitle}
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
};

export default App;
