import React, { useEffect, useState } from 'react';
import { Send, Mail, MapPin, Phone, Linkedin, Twitter, Github } from 'lucide-react';

type Props = {
  title?: string;
  initialSubject?: string;
};

const ContactForm: React.FC<Props> = ({ title, initialSubject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  useEffect(() => {
    if (initialSubject && initialSubject !== formData.subject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

  return (
    <section id="contact" className="py-32 bg-techcora-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-techcora-orange/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-techcora-orange font-display font-bold tracking-widest uppercase text-sm mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-none mb-6">
            {title ? (
              <span className="text-white">{title}</span>
            ) : (
              <>Contact <span className="text-techcora-orange">Us</span></>
            )}
          </h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto">
            Have a question, partnership inquiry, or want to join our mission? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Info Cards */}
            <div className="bg-black border border-white/10 p-6 hover:border-techcora-orange/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-techcora-orange/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-techcora-orange" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-1">Email Us</h4>
                  <p className="text-slate-400 text-sm">contact@techcora.com</p>
                  <p className="text-slate-400 text-sm">careers@techcora.com</p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-white/10 p-6 hover:border-techcora-orange/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-techcora-orange/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-techcora-orange" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-1">Location</h4>
                  <p className="text-slate-400 text-sm">Bangalore, India</p>
                  <p className="text-slate-400 text-sm">Innovation Hub</p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-white/10 p-6 hover:border-techcora-orange/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-techcora-orange/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-techcora-orange" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white mb-1">Call Us</h4>
                  <p className="text-slate-400 text-sm">+91 (XXX) XXX-XXXX</p>
                  <p className="text-slate-400 text-sm">Mon - Fri, 9am - 6pm IST</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-slate-500 font-display uppercase tracking-widest mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-techcora-orange hover:text-white hover:border-techcora-orange transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-techcora-orange hover:text-white hover:border-techcora-orange transition-all duration-300">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-techcora-orange hover:text-white hover:border-techcora-orange transition-all duration-300">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-black border border-white/10 p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-xs font-display uppercase tracking-widest text-slate-500 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-techcora-dark border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-techcora-orange focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-display uppercase tracking-widest text-slate-500 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-techcora-dark border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-techcora-orange focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-6">
                <label className="block text-xs font-display uppercase tracking-widest text-slate-500 mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-techcora-dark border border-white/10 px-4 py-3 text-white focus:border-techcora-orange focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership</option>
                  <option value="careers">Careers</option>
                  <option value="investment">Investment</option>
                  <option value="media">Media & Press</option>
                </select>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block text-xs font-display uppercase tracking-widest text-slate-500 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-techcora-dark border border-white/10 px-4 py-3 text-white placeholder-slate-600 focus:border-techcora-orange focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-techcora-orange text-white font-display font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
