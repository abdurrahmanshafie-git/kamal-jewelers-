import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Sparkles, Phone, ArrowRight, ChevronRight, MapPin, Award, Heart } from 'lucide-react';
import { ShowroomAppointment } from '../types';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (appointment: ShowroomAppointment) => void;
}

export default function AppointmentModal({ isOpen, onClose, onSuccess }: AppointmentModalProps) {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [showroomLocation, setShowroomLocation] = useState<'Akurana Showroom (Main)' | 'Online Virtual'>('Akurana Showroom (Main)');
  const [specialRequests, setSpecialRequests] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<string>('');
  
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const experiences = [
    { title: "Showroom Visit", description: "Guided tour through our latest signature collections.", value: "Showroom Visit" },
    { title: "Bridal Consultation", description: "Specialized session for bespoke bridal sets and high-carat curation.", value: "Bridal Consultation" },
    { title: "Custom Jewellery Consultation", description: "Collaborate with our designers to bring your unique vision to life.", value: "Custom Jewellery" }
  ];

  const times = [
    "Morning (10:00 AM - 12:00 PM)",
    "Afternoon (01:00 PM - 03:00 PM)",
    "Late Afternoon (03:30 PM - 05:30 PM)",
    "Evening (05:30 PM - 06:30 PM)"
  ];

  const handleNext = () => setStep(s => Math.min(s + 1, 3));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !date || !timeSlot || !serviceType) return;

    const appointment: ShowroomAppointment = {
      fullName,
      email,
      phone,
      date,
      timeSlot,
      serviceType,
      showroomLocation,
      specialRequests: specialRequests || undefined
    };

    // Store in localStorage & memory
    const randId = `NKJ-${Math.floor(100000 + Math.random() * 900000)}`;
    setGeneratedTicket(randId);
    
    // Track submissions in localStorage
    localStorage.setItem('nk_appointment_active', JSON.stringify({ ...appointment, ticketId: randId }));
    
    setFormSubmitted(true);
    setTimeout(() => {
      onSuccess(appointment);
    }, 1200);
  };

  const currentYear = new Date().getFullYear();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="appointment-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#030303]/98 backdrop-blur-xl flex items-center justify-center p-0 sm:p-6 overflow-y-auto"
        >
          {/* Close click boundary */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            id="appointment-modal-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-luxury-black sm:border border-white/10 w-full sm:w-[92vw] sm:max-w-2xl h-full sm:h-auto sm:max-h-[88dvh] relative text-white shadow-2xl z-10 flex flex-col overflow-hidden"
          >
            {/* Elegant Luxury Accents */}
            <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent pointer-events-none z-40" />
            
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all z-50 backdrop-blur-md"
              aria-label="Close consultation"
            >
              <X className="w-5 h-5" />
            </motion.button>

            <div className="flex-1 overflow-y-auto px-6 py-10 sm:p-14 custom-scrollbar">
              
              {!formSubmitted ? (
                 <div className="space-y-10 sm:space-y-14">
                  
                  {/* Luxury Introduction Section */}
                  <div className="text-center space-y-5">
                    <div className="flex items-center justify-center gap-2.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-500/40" />
                      <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.4em] text-gold-500/80 uppercase">Personal Advisor</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-serif text-[28px] sm:text-5xl font-light tracking-tight leading-[1.1]">
                        Reserve A <br className="sm:hidden" /> Private Visit
                      </h3>
                      <p className="text-[13px] sm:text-[14px] text-white/40 max-w-sm mx-auto leading-relaxed font-sans font-light">
                        Experience personalized guidance from our jewellery specialists in a relaxed environment.
                      </p>
                    </div>
                  </div>

                  {/* Step Indicators - Luxury Labels */}
                  <div className="flex justify-center items-center gap-5 sm:gap-10 max-w-md mx-auto">
                    {[
                      { id: 1, label: "Experience" },
                      { id: 2, label: "Details" },
                      { id: 3, label: "Schedule" }
                    ].map((s) => (
                      <div key={s.id} className="flex flex-col items-center gap-1.5">
                        <span className={`font-mono text-[8.5px] tracking-widest uppercase transition-all duration-700 ${step === s.id ? 'text-gold-400 opacity-100' : 'text-white/20'}`}>
                          0{s.id}
                        </span>
                        <div className={`w-1 h-1 rounded-full transition-all duration-700 ${step >= s.id ? 'bg-gold-500 scale-110 shadow-[0_0_8px_rgba(197,160,89,0.4)]' : 'bg-white/10'}`} />
                        <span className={`hidden sm:block font-sans text-[10px] tracking-widest uppercase transition-all duration-700 ${step === s.id ? 'text-white opacity-40' : 'text-white/10'}`}>
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Form Steps */}
                  <div className="min-h-[360px] sm:min-h-[380px]">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-6"
                        >
                          <div className="space-y-5">
                            <label className="text-[10px] font-mono tracking-[0.3em] uppercase text-gold-500/50 block text-center mb-6">
                              Select Your Experience
                            </label>
                            <div className="grid grid-cols-1 gap-4">
                              {experiences.map((exp) => (
                                <button
                                  key={exp.value}
                                  onClick={() => setServiceType(exp.value)}
                                  className={`w-full text-left min-h-[76px] sm:min-h-[90px] p-4 sm:p-6 border transition-all duration-700 group relative ${
                                    serviceType === exp.value 
                                      ? 'border-gold-500/40 bg-gold-500/5 shadow-[0_10px_25px_rgba(197,160,89,0.06)]' 
                                      : 'border-white/5 bg-white/[0.01] hover:border-white/20'
                                  }`}
                                >
                                  <div className="flex justify-between items-center h-full">
                                    <div className="space-y-0.5">
                                      <h4 className={`text-[14px] sm:text-[15px] font-sans tracking-wide transition-colors ${serviceType === exp.value ? 'text-gold-200' : 'text-white/80'}`}>
                                        {exp.title}
                                      </h4>
                                      <p className="text-[10.5px] sm:text-[11px] text-white/20 font-light leading-relaxed max-w-[240px] group-hover:text-white/30 transition-colors">
                                        {exp.description}
                                      </p>
                                    </div>
                                    <ChevronRight className={`w-4.5 h-4.5 transition-all duration-700 ${serviceType === exp.value ? 'text-gold-500 opacity-100 translate-x-1' : 'text-white/5 opacity-0'}`} />
                                  </div>
                                </button>
                              ))}
                            </div>

                            {serviceType && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="pt-8"
                              >
                                <button
                                  onClick={handleNext}
                                  className="w-full bg-white text-black py-4 sm:py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-gold-50 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                                >
                                  Continue <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                              </motion.div>
                            )}
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-6"
                        >
                          <div className="space-y-7">
                            <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-gold-500/50 block text-center mb-6">
                              Guest Details
                            </label>
                            <div className="space-y-6">
                              <div className="group space-y-1">
                                <label className="text-[9px] uppercase tracking-[0.25em] text-white/20 block transition-colors group-focus-within:text-gold-500/60">Full Name</label>
                                <input
                                  type="text"
                                  placeholder="E.g. James Sterling"
                                  value={fullName}
                                  onChange={(e) => setFullName(e.target.value)}
                                  className="w-full bg-transparent border-b border-white/5 py-3 text-[14px] tracking-wide outline-none focus:border-gold-500/40 transition-all placeholder:text-white/5"
                                />
                              </div>
                              <div className="group space-y-1">
                                <label className="text-[9px] uppercase tracking-[0.25em] text-white/20 block transition-colors group-focus-within:text-gold-500/60">Email Address</label>
                                <input
                                  type="email"
                                  placeholder="E.g. james@example.com"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="w-full bg-transparent border-b border-white/5 py-3 text-[14px] tracking-wide outline-none focus:border-gold-500/40 transition-all placeholder:text-white/5"
                                />
                              </div>
                              <div className="group space-y-1">
                                <label className="text-[9px] uppercase tracking-[0.25em] text-white/20 block transition-colors group-focus-within:text-gold-500/60">WhatsApp / Mobile</label>
                                <input
                                  type="tel"
                                  placeholder="E.g. +94 77 000 0000"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  className="w-full bg-transparent border-b border-white/5 py-3 text-[14px] tracking-wide outline-none focus:border-gold-500/40 transition-all placeholder:text-white/5"
                                />
                              </div>
                            </div>
                            <div className="pt-6 flex flex-col gap-3">
                              <button
                                onClick={handleNext}
                                disabled={!fullName || !email || !phone}
                                className="w-full bg-white text-black py-4 text-[10.5px] font-bold uppercase tracking-[0.35em] hover:bg-gold-50 active:scale-[0.98] transition-all disabled:opacity-20 disabled:cursor-not-allowed"
                              >
                                Continue To Schedule
                              </button>
                              <button onClick={handleBack} className="w-full py-2 text-[9px] text-white/20 uppercase tracking-[0.3em] hover:text-white/60 transition-colors">
                                &larr; Back
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 15 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -15 }}
                          transition={{ duration: 0.5 }}
                          className="space-y-6"
                        >
                          <div className="space-y-7 text-center">
                            <label className="text-[10px] font-mono tracking-[0.4em] uppercase text-gold-500/50 block text-center mb-6">
                              Schedule Visit
                            </label>
                            
                            <div className="grid grid-cols-1 gap-7">
                              <div className="space-y-3">
                                <label className="text-[9px] uppercase tracking-[0.25em] text-white/20 block">Select Preferred Date</label>
                                <input
                                  type="date"
                                  min={`${currentYear}-01-01`}
                                  value={date}
                                  onChange={(e) => setDate(e.target.value)}
                                  className="w-full bg-white/[0.02] border border-white/5 px-4 py-3 text-sm tracking-widest outline-none focus:border-gold-500/40 transition-all rounded-none uppercase appearance-none"
                                />
                              </div>

                              <div className="space-y-3">
                                <label className="text-[9px] uppercase tracking-[0.25em] text-white/20 block">Preferred Time Session</label>
                                <div className="grid grid-cols-2 gap-2.5">
                                  {times.map((t) => (
                                    <button
                                      key={t}
                                      onClick={() => setTimeSlot(t)}
                                      className={`py-3 text-[9.5px] uppercase tracking-[0.1em] border transition-all duration-500 ${
                                        timeSlot === t 
                                          ? 'border-gold-500 text-gold-300 bg-gold-400/10' 
                                          : 'border-white/5 text-white/30 hover:border-white/20'
                                      }`}
                                    >
                                      {t.split(' (')[0]}
                                    </button>
                                  ))}
                                </div>
                              </div>

                              <div className="space-y-3">
                                <label className="text-[9px] uppercase tracking-[0.25em] text-white/20 block">Special Preferences</label>
                                <textarea
                                  placeholder="Mention specific interests..."
                                  rows={1}
                                  value={specialRequests}
                                  onChange={(e) => setSpecialRequests(e.target.value)}
                                  className="w-full bg-white/[0.02] border border-white/5 p-4 text-[13px] tracking-wide outline-none focus:border-gold-500/40 transition-all resize-none font-sans font-light"
                                />
                              </div>
                            </div>

                            <div className="pt-6 flex flex-col gap-3">
                              <button
                                onClick={handleSubmit}
                                disabled={!date || !timeSlot}
                                className="w-full bg-gold-gradient text-black py-4 text-[10.5px] font-bold uppercase tracking-[0.35em] hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-20 shadow-xl shadow-gold-900/10"
                              >
                                Confirm Consultation
                              </button>
                              <button onClick={handleBack} className="w-full py-2 text-[9px] text-white/20 uppercase tracking-[0.3em] hover:text-white/60 transition-colors">
                                &larr; Back To Details
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Trust Indicators Footer */}
                  <div className="pt-10 border-t border-white/5 pb-2 sm:pb-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
                      {[
                        { label: "Established 1979", icon: <Award className="w-3.5 h-3.5" /> },
                        { label: "Bespoke Guidance", icon: <Sparkles className="w-3.5 h-3.5" /> },
                        { label: "Bridal Specialists", icon: <Heart className="w-3.5 h-3.5" /> },
                        { label: "Akurana Showroom", icon: <MapPin className="w-3.5 h-3.5" /> }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2.5 opacity-20 hover:opacity-40 transition-opacity">
                          <div className="text-gold-500">{item.icon}</div>
                          <span className="text-[7.5px] sm:text-[8px] uppercase tracking-[0.25em] text-center font-mono">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ) : (
                <motion.div
                  id="appointment-success-container"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6 text-center space-y-6"
                >
                  
                  {/* VIP Salon Ticket Slip Visual */}
                  <div className="bg-[#0a0a0a] p-5 sm:p-8 border border-white/5 relative overflow-hidden text-left space-y-6 mx-auto max-w-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="absolute top-0 right-0 p-4 bg-gold-500/5 text-[50px] font-serif font-light text-gold-500/5 select-none pointer-events-none">
                      VIP
                    </div>

                    <div className="text-center pb-6 border-b border-white/5">
                      <span className="font-serif text-[18px] font-light tracking-[0.15em] text-white uppercase">
                        New Kamal
                      </span>
                      <span className="block font-mono text-[7.5px] tracking-[0.4em] text-gold-500/50 uppercase mt-1.5">
                        Est. 1979 &bull; Sri Lanka
                      </span>
                    </div>

                    <div className="space-y-3.5 pt-1 text-[10.5px]">
                      <div className="flex justify-between items-center">
                        <span className="text-white/20 font-mono uppercase tracking-widest text-[8.5px]">Passport ID</span>
                        <span className="text-gold-400 font-mono font-medium tracking-widest">{generatedTicket}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/20 font-mono uppercase tracking-widest text-[8.5px]">Client Name</span>
                        <span className="text-white font-light tracking-wide">{fullName}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/20 font-mono uppercase tracking-widest text-[8.5px]">Consultation</span>
                        <span className="text-white font-light tracking-wide">{serviceType}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/20 font-mono uppercase tracking-widest text-[8.5px]">Reserved Date</span>
                        <span className="text-white font-mono">{date}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/20 font-mono uppercase tracking-widest text-[8.5px]">Session</span>
                        <span className="text-white font-light">{timeSlot.split(' (')[0]}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/5 text-[8.5px] text-center text-gold-500/30 font-mono tracking-[0.2em]">
                      <p>PRESENT AT THE SHOWROOM ENTRANCE</p>
                    </div>

                  </div>

                  <div className="space-y-5 pt-3">
                    <div className="space-y-1.5">
                      <h4 className="font-serif text-2xl font-light tracking-tight text-white">Consultation Confirmed</h4>
                      <p className="text-[12px] text-white/20 leading-relaxed font-sans font-light max-w-xs mx-auto">
                        Your private visit has been reserved. A confirmation detail has been dispatched to your email address.
                      </p>
                    </div>
                    
                    <button
                      onClick={onClose}
                      className="text-[9px] uppercase tracking-[0.3em] font-mono text-gold-500/50 hover:text-gold-500 transition-all pt-2 group shrink-0"
                    >
                      <span className="inline-block transition-transform group-hover:-translate-x-1 mr-2">&larr;</span> Return To Collection
                    </button>
                  </div>

                </motion.div>
              )}

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
