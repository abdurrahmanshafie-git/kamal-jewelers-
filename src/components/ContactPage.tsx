import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, Check, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from './PageHeader';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Private Collection Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Simulate sending luxury secure inquiry
    setSubmitted(true);
  };

  return (
    <div id="contact-page-view" className="bg-[#030303] min-h-screen text-white pb-32 font-sans overflow-x-hidden">
      
      <PageHeader onBack={() => onNavigate('home')} />

      {/* Editorial Header */}
      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto py-24 sm:py-32 lg:py-48 text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <Mail className="w-4 h-4 text-gold-500/60" />
          <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">DIRECT ENQUIRIES</span>
        </div>
        
        <h1 className="text-[clamp(2.5rem,8vw,7.5rem)] font-serif font-light tracking-tight text-white uppercase leading-[1.05]">
          Consultation & <br />
          <span className="italic text-white font-light lowercase">Contact</span>
        </h1>
        
        <p className="text-[15px] sm:text-[17px] font-sans font-light tracking-wide text-white/40 max-w-xl mx-auto leading-relaxed pt-4 italic">
          Direct lines to our Akurana showroom. Reach out via email, phone, or WhatsApp, and we will get back to you promptly to support your journey.
        </p>
      </section>

      {/* Main Two Column Contact & Form Layout */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-stretch">
        
        {/* Contact details - Left */}
        <div className="lg:col-span-12 xl:col-span-5 bg-[#060606] border border-white/[0.03] p-10 sm:p-16 flex flex-col justify-between space-y-12">
          
          <div className="space-y-10">
            <span className="text-[10px] tracking-[0.4em] font-mono text-[#A68F6B] uppercase block">OUR STOREFRONT</span>
            <div className="space-y-4">
              <h2 className="font-serif text-[32px] sm:text-[42px] font-light tracking-tight text-white uppercase">Establish Connection</h2>
              <div className="w-10 h-[1px] bg-white/[0.05]" />
            </div>
            
            <div className="space-y-8">
              <div className="p-8 border border-white/[0.05] bg-white/[0.01] space-y-6">
                <img
                  src="/src/assets/images/logo.webp"
                  alt="New Kamal Jewellers Logo"
                  className="h-12 w-auto opacity-90"
                />
                <div className="space-y-2">
                  <span className="text-white font-sans text-lg font-light tracking-wide block">New Kamal Jewellers</span>
                  <span className="text-white/30 block font-sans text-[14px] leading-relaxed">280/1 Matale Road (A9),<br />Akurana 20850, Sri Lanka</span>
                  <div className="pt-4 flex flex-col gap-2">
                    <a href="tel:+94812300446" className="text-white hover:text-gold-400 font-mono text-[14px] tracking-widest transition-colors duration-500">+94 81 230 0446</a>
                    <a href="mailto:newkamaljewellers@gmail.com" className="text-gold-500/60 hover:text-white font-sans text-[14px] transition-colors duration-500">newkamaljewellers@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="p-8 border border-white/[0.03] bg-white/[0.01] space-y-4">
                <span className="text-white/20 text-[10px] font-mono tracking-[0.4em] uppercase block">Business Hours</span>
                <div className="space-y-2">
                  <span className="text-white/40 block font-sans text-[14px]">Monday – Saturday</span>
                  <span className="text-white font-sans text-[18px] font-light block">09:30 AM – 06:30 PM</span>
                  <span className="text-rose-500/40 block font-mono text-[10px] tracking-widest mt-4 uppercase">Sundays: Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 space-y-4">
            <span className="text-[10px] tracking-widest font-mono text-gold-500 uppercase block">DIRECT CONSULTATION</span>
            <p className="text-xs text-white/50 leading-relaxed font-light">
              Connect directly with our family members and customer advisors to discuss customized gold designs or booking updates.
            </p>
            <a
              href="https://wa.me/94728866851"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border border-emerald-500/20 hover:border-emerald-400 text-emerald-400 text-xs font-mono uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-600/5 transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" /> Direct Whatsapp Chat
            </a>
          </div>

        </div>

        {/* Encrypted Inquiry Form - Right */}
        <div className="lg:col-span-12 xl:col-span-7 bg-[#060606] border border-white/[0.03] p-10 sm:p-16">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="contact-form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-10 text-left"
              >
                <div className="space-y-4 text-left">
                  <span className="text-[10px] font-mono text-[#A68F6B] uppercase tracking-[0.4em] block">ONLINE CONSULTATION</span>
                  <h2 className="font-serif text-[32px] sm:text-[42px] font-light text-white uppercase tracking-tight">Send Direct Message</h2>
                  <div className="w-10 h-[1px] bg-white/[0.05]" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase block">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Fathima Rizna"
                      className="w-full bg-[#030303] border border-white/[0.05] px-6 py-4 text-[14px] tracking-wide focus:border-gold-500/50 focus:outline-none transition-all duration-700 text-white placeholder-white/10"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase block">Email Address</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@email.com"
                      className="w-full bg-[#030303] border border-white/[0.05] px-6 py-4 text-[14px] tracking-wide focus:border-gold-500/50 focus:outline-none transition-all duration-700 text-white placeholder-white/10"
                    />
                  </div>
                </div>

                <div className="space-y-3 text-left">
                  <label className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase block">Inquiry Type</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-[#030303] border border-white/[0.05] px-6 py-4 text-[14px] tracking-wide focus:border-gold-500/50 focus:outline-none transition-all duration-700 text-white appearance-none"
                  >
                    <option value="Private Collection Inquiry">Custom Jewellery Design</option>
                    <option value="Bridal Couture Complete Fitting">Bridal Jewellery Collection</option>
                    <option value="Gemstone Gold Fitting">Gold & Gemstone Fitting</option>
                    <option value="General Inquiry">General Consultation Inquiry</option>
                  </select>
                </div>

                <div className="space-y-3 text-left">
                  <label className="text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase block">Your Message</label>
                  <textarea
                    rows={8}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your design preferences, gold karat requirements, or coordinate checking in detail..."
                    className="w-full bg-[#030303] border border-white/[0.05] px-6 py-4 text-[14px] tracking-wide focus:border-gold-500/50 focus:outline-none transition-all duration-700 text-white placeholder-white/10 resize-none"
                  />
                </div>

                <div className="pt-4 text-left">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-white hover:bg-gold-500 text-black py-5 px-16 text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-700 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Message
                  </button>
                </div>

              </motion.form>
            ) : (
              <motion.div
                key="contact-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-24 text-center space-y-10"
              >
                <div className="w-20 h-20 rounded-full bg-gold-500/[0.02] border border-gold-500/30 flex items-center justify-center mx-auto text-gold-400">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-[32px] sm:text-[42px] font-light text-white uppercase tracking-tight">Message Sent</h3>
                  <div className="w-12 h-[1px] bg-white/[0.05] mx-auto" />
                  <p className="text-[15px] sm:text-[16px] text-white/30 max-w-sm mx-auto leading-relaxed font-sans font-light tracking-wide italic">
                    Thank you, {name}. Your inquiry has been sent to our family showroom advisors. We will review your message and reach out to you within one business day.
                  </p>
                </div>
                <div className="pt-8 text-center">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-12 py-4 border border-white/10 hover:border-white/30 text-white/40 hover:text-white text-[10px] font-mono uppercase tracking-[0.4em] bg-transparent transition-all duration-700 cursor-pointer"
                  >
                    New Message
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </section>

      {/* Google Map Embed Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 mb-24">
        <div className="border border-gold-700/10 p-2 bg-luxury-gray">
          <div className="relative h-96 w-full filter grayscale invert contrast-125 opacity-80 hover:opacity-100 transition-opacity duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.426210214872!2d80.61358316335195!3d7.369796853612739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36097d627cdbf%3A0xf58e2ee5e167c132!2sAkurana%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1717030000000!5m2!1sen!2slk"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="pt-4 pb-2 px-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs font-mono text-white/40 gap-2">
            <span>📍 NEW KAMAL JEWELLERS • 280/1 MATALE ROAD (A9), AKURANA 20850, SRI LANKA</span>
            <a 
              href="https://maps.google.com/?q=New+Kamal+Jewellers+Akurana+Sri+Lanka" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gold-300 hover:text-white underline"
            >
              Open in Google Maps &rarr;
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
