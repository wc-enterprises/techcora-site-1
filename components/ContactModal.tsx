import React, { useState, useEffect } from 'react';
import { Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal: React.FC<Props> = ({ title, isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container - Scrollable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full h-full md:h-auto md:max-h-[90vh] max-w-3xl bg-black border-0 md:border border-white/10 overflow-hidden flex flex-col md:m-4"
          >
            {/* Fixed Header */}
            <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-6 border-b border-white/10 bg-black sticky top-0 z-10">
              <div>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-display font-bold uppercase tracking-wider md:tracking-widest text-white">
                  {title || 'Contact Us'}
                </h2>
                <p className="text-slate-400 text-sm mt-1 md:mt-2">Let's build the future together</p>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-1 overflow-y-auto">
              <form onSubmit={handleSubmit} className="px-4 md:px-8 py-6 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
                  <div>
                    <label className="block text-[10px] md:text-xs font-display uppercase tracking-widest text-slate-500 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-techcora-dark border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white text-sm md:text-base placeholder-slate-600 focus:border-techcora-orange focus:outline-none rounded-sm"
                      placeholder="Enter your full name..."
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-display uppercase tracking-widest text-slate-500 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-techcora-dark border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white text-sm md:text-base placeholder-slate-600 focus:border-techcora-orange focus:outline-none rounded-sm"
                      placeholder="Enter your email address..."
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-display uppercase tracking-widest text-slate-500 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-techcora-dark border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white text-sm md:text-base placeholder-slate-600 focus:border-techcora-orange focus:outline-none rounded-sm"
                      placeholder="Enter your company name..."
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] md:text-xs font-display uppercase tracking-widest text-slate-500 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-techcora-dark border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white text-sm md:text-base placeholder-slate-600 focus:border-techcora-orange focus:outline-none rounded-sm"
                      placeholder="e.g. +91 98765 43210"
                    />
                  </div>
                </div>

                <div className="mb-6 md:mb-8">
                  <label className="block text-[10px] md:text-xs font-display uppercase tracking-widest text-slate-500 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-techcora-dark border border-white/10 px-3 md:px-4 py-2.5 md:py-3 text-white text-sm md:text-base placeholder-slate-600 focus:border-techcora-orange focus:outline-none resize-none rounded-sm"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>

                {/* Fixed Submit Area */}
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="w-full px-6 md:px-10 py-3 md:py-4 bg-techcora-orange text-white font-display font-bold uppercase tracking-wider md:tracking-widest text-sm hover:bg-orange-500 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full md:hidden px-6 py-3 border border-white/20 text-white font-display font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-all duration-300"
                  >
                    Cancel
                  </button>

                  <p className="text-[10px] text-slate-500 uppercase tracking-widest text-center md:text-left">
                    We respect your privacy. Your information will be kept confidential.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
