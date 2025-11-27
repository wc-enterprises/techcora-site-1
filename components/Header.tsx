import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  onOpenContact?: (title: string) => void;
};

const navItems = [
  { label: 'Vision', href: '#vision' },
  { label: 'Mission', href: '#mission' },
  { label: 'Core Values', href: '#features' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

const Header: React.FC<Props> = ({ onOpenContact }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
          {/* Techcora Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-4 cursor-pointer">
            <img
              src="/assets/tc-logo1.png"
              alt="Techcora Logo"
              className="h-10 md:h-16 w-auto"
            />
            <span className="text-lg md:text-2xl font-display font-bold tracking-[0.15em] md:tracking-[0.25em] text-white uppercase">
              TECHCORA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium uppercase tracking-[0.15em] text-white/90 hover:text-techcora-orange transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Menu Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <button
              className="hidden md:flex items-center justify-center px-4 md:px-5 py-2 border border-techcora-orange text-techcora-orange text-[11px] md:text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-techcora-orange hover:text-white transition-all duration-300 rounded-sm"
              onClick={() => onOpenContact?.('Partner With Us')}
            >
              Partner With Us
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-white hover:text-techcora-orange transition-colors p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 right-0 h-full w-[280px] md:w-[320px] bg-black border-l border-techcora-orange/30 z-50 lg:hidden"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10">
                <span className="text-sm font-display font-bold tracking-[0.2em] text-techcora-orange uppercase">
                  Menu
                </span>
                <button
                  onClick={closeMenu}
                  className="text-white hover:text-techcora-orange transition-colors p-1"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="p-4 md:p-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 py-4 border-b border-white/5 text-white hover:text-techcora-orange transition-colors group"
                  >
                    <span className="w-2 h-2 bg-techcora-orange/50 rotate-45 group-hover:bg-techcora-orange transition-colors"></span>
                    <span className="text-sm font-display font-medium uppercase tracking-[0.15em]">
                      {item.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              {/* CTA in Mobile Menu */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 border-t border-white/10">
                <button
                  className="w-full py-3 bg-techcora-orange text-black text-[12px] font-display font-bold uppercase tracking-[0.15em] hover:bg-orange-500 transition-colors"
                  onClick={() => {
                    onOpenContact?.('Partner With Us');
                    closeMenu();
                  }}
                >
                  Partner With Us
                </button>

                {/* Social/Brand */}
                <div className="mt-6 text-center">
                  <p className="text-[10px] text-slate-600 uppercase tracking-[0.2em]">
                    © 2025 Techcora
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
