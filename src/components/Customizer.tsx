import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Check, Send, RotateCcw, Award, Globe, HelpCircle } from 'lucide-react';
import { CustomJewelleryInquiry } from '../types';
import PageHeader from './PageHeader';

interface CustomizerProps {
  onNavigate?: (page: string) => void;
}

export default function Customizer({ onNavigate }: CustomizerProps) {
  const [structure, setStructure] = useState('Classic Halo Ring');
  const [metal, setMetal] = useState('22k Yellow Gold (Ceylon Traditional)');
  const [gemstone, setGemstone] = useState('Royal Ceylon Blue Sapphire');
  const [gemCut, setGemCut] = useState('Cushion Cut');
  const [carat, setCarat] = useState(2.5);

  // Form states for inquiry
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Luxurious jewelry bases
  const structures = [
    { name: 'Classic Halo Ring', icon: '💍', baseCost: 1500 },
    { name: 'Royal Bridal Choker', icon: '👑', baseCost: 8500 },
    { name: 'Princess Solitaire Pendant', icon: '💎', baseCost: 1200 },
    { name: 'Heritage Filigree Bangle', icon: '✨', baseCost: 3200 }
  ];

  // Elite precious metals
  const metals = [
    { name: '22k Yellow Gold (Ceylon Traditional)', purity: '91.6% Pure Gold', multiplier: 1.2 },
    { name: 'Platinum 950 Imperial', purity: '95% Pure Platinum', multiplier: 1.6 },
    { name: '18k Warm Rose Gold', purity: '75% Fine Gold & Alloys', multiplier: 1.0 }
  ];

  // Gems - highlight the famous Ceylon Blue Sapphire
  const gemstones = [
    { name: 'Royal Ceylon Blue Sapphire', origin: 'Ratnapura premium mines', caratRate: 2400, color: 'bg-indigo-700 shadow-indigo-600/30' },
    { name: 'Pure D-Flawless Diamond', origin: 'GIA laser certificated', caratRate: 4800, color: 'bg-white/80 shadow-white/30' },
    { name: 'Royal Burmese Ruby', origin: 'Mogok pigeon-blood grade', caratRate: 3100, color: 'bg-red-700 shadow-red-600/30' },
    { name: 'Deep Colombian Emerald', origin: 'Chivor glowing green', caratRate: 2800, color: 'bg-emerald-700 shadow-emerald-600/30' }
  ];

  const cuts = ['Cushion Cut', 'Round Brilliant', 'Emerald Cut', 'Pear Droplet'];

  // Calculate dynamic pricing
  const calculateTotal = () => {
    const selectedStructure = structures.find(s => s.name === structure) || structures[0];
    const selectedMetal = metals.find(m => m.name === metal) || metals[0];
    const selectedGem = gemstones.find(g => g.name === gemstone) || gemstones[0];

    const basePrice = selectedStructure.baseCost * selectedMetal.multiplier;
    const gemPrice = carat * selectedGem.caratRate;
    return Math.round(basePrice + gemPrice);
  };

  const handleReset = () => {
    setStructure('Classic Halo Ring');
    setMetal('22k Yellow Gold (Ceylon Traditional)');
    setGemstone('Royal Ceylon Blue Sapphire');
    setGemCut('Cushion Cut');
    setCarat(2.5);
    setSubmitted(false);
  };

  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    // Simulate luxury inquiry saving
    const inquiry: CustomJewelleryInquiry = {
      gemstone,
      metal,
      caratWeight: carat,
      settingStyle: `${gemCut} ${structure}`,
      contactName: name,
      contactPhone: phone,
      notes: notes || undefined
    };

    localStorage.setItem('bespokeInquiry', JSON.stringify(inquiry));
    setSubmitted(true);
  };

  const selectedGemData = gemstones.find(g => g.name === gemstone) || gemstones[0];

  return (
    <div id="bespoke-atelier-view" className="bg-luxury-black min-h-screen">
      <PageHeader onBack={() => onNavigate?.('home')} />
      
      <section id="customizer" className="py-24 sm:py-32 bg-luxury-black text-white relative overflow-hidden border-b border-gold-600/10">
        
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-950/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span className="font-mono text-xs tracking-[0.3em] text-gold-500 uppercase">L'Atelier de Création</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-tight text-white mb-6">
            Bespoke <span className="italic text-gold-300">Atelier Experience</span>
          </h2>

          <p className="text-sm sm:text-base text-gold-100/60 font-light max-w-xl mx-auto leading-relaxed">
            Configure your absolute digital masterpiece. Witness the fusion of legendary Ratnapura gemstones, certified precious metals, and centuries of Sri Lankan goldsmithing heritage.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Customizer Playground (Left 7 Columns) */}
          <div className="lg:col-span-7 space-y-8 bg-luxury-gray/35 border border-gold-700/10 p-6 sm:p-10 backdrop-blur-md">
            
            {/* Step 1: Base Structure */}
            <div className="space-y-3.5">
              <label id="lbl-atelier-step-1" className="text-xs uppercase tracking-[0.2em] text-gold-500 font-mono flex justify-between">
                <span>01. Select Artpiece Structure</span>
                <span className="text-white/40 italic">{structure}</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {structures.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setStructure(item.name)}
                    className={`p-4 text-left border flex items-center justify-between transition-all duration-300 ${
                      structure === item.name
                        ? 'border-gold-500 bg-gold-600/5 text-gold-300 shadow-md shadow-gold-700/5'
                        : 'border-white/5 bg-luxury-black/40 text-white/70 hover:border-white/15'
                    }`}
                  >
                    <span className="text-sm font-sans font-medium tracking-wide">{item.name}</span>
                    <span className="text-xl sm:text-2xl">{item.icon}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Metal Finish */}
            <div className="space-y-3.5">
              <label id="lbl-atelier-step-2" className="text-xs uppercase tracking-[0.2em] text-gold-500 font-mono flex justify-between">
                <span>02. Choose Precious Metal</span>
                <span className="text-white/40 italic">22k Gold guaranteed by Kamal Standard</span>
              </label>
              <div className="space-y-2.5">
                {metals.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setMetal(item.name)}
                    className={`w-full p-4 text-left border flex items-center justify-between transition-all duration-300 ${
                      metal === item.name
                        ? 'border-gold-500 bg-gold-600/5 text-gold-300'
                        : 'border-white/5 bg-luxury-black/40 text-white/60 hover:border-white/10'
                    }`}
                  >
                    <div>
                      <span className="block text-sm font-sans font-medium tracking-wide">{item.name}</span>
                      <span className="block text-[11px] text-white/40 mt-0.5">{item.purity}</span>
                    </div>
                    {metal === item.name && <Check className="w-4 h-4 text-gold-500" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Sapphire & Gemstones */}
            <div className="space-y-3.5">
              <label id="lbl-atelier-step-3" className="text-xs uppercase tracking-[0.2em] text-gold-500 font-mono flex justify-between">
                <span>03. Select Royal Gemstone</span>
                <span className="text-white/40 italic">{selectedGemData.origin}</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                {gemstones.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setGemstone(item.name)}
                    className={`p-4 text-left border flex flex-col justify-between h-24 transition-all duration-300 ${
                      gemstone === item.name
                        ? 'border-gold-500 bg-gold-600/5'
                        : 'border-white/5 bg-luxury-black/40 hover:border-white/10'
                    }`}
                  >
                    <div className="flex gap-2 items-center">
                      <div className={`w-3.5 h-3.5 rounded-full ${item.color} animate-pulse shadow-lg`} />
                      <span className="text-[10px] sm:text-xs text-white/40 font-mono truncate max-w-[120px]">
                        {item.name.includes("Sapphire") ? "Ceylon Elite" : "Luxury grade"}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-serif font-bold text-white tracking-wide leading-tight">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Gem Cut & Carat Weight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-[0.2em] text-gold-500 font-mono block">
                  04. Gemstone Facet Cut
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {cuts.map((c) => (
                    <button
                      key={c}
                      onClick={() => setGemCut(c)}
                      className={`py-2 px-3 text-center text-xs font-mono transition-all duration-300 ${
                        gemCut === c
                          ? 'bg-gold-500 text-luxury-black border border-gold-400 font-semibold'
                          : 'bg-luxury-black/50 border border-white/5 text-white/50 hover:text-white hover:border-white/15'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs uppercase tracking-[0.2em] text-gold-500 font-mono">
                    05. Gemweight (Carat)
                  </span>
                  <span className="text-xl font-serif font-bold tracking-wide text-white">
                    {carat.toFixed(1)} ct
                  </span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5.0"
                  step="0.1"
                  value={carat}
                  onChange={(e) => setCarat(parseFloat(e.target.value))}
                  className="w-full h-1 bg-luxury-black rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-[9px] font-mono text-white/30">
                  <span>0.5 Carat (Dainty)</span>
                  <span>5.0 Carat (Imperial Royalty)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Luxury Preview Card & Quote Form (Right 5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Live Refraction View Cover */}
            <div className="bg-luxury-gray border border-gold-500/20 shadow-2xl relative overflow-hidden group">
              
              {/* Shimmer light effects simulating precious jewels */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/5 to-luxury-black pointer-events-none" />
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-gold-400/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

              {/* Display Core */}
              <div className="p-8 pb-12 text-center relative z-10 space-y-6">
                
                <span className="text-[10px] tracking-[0.3em] font-mono text-gold-500/80 uppercase block border border-gold-500/20 px-3 py-1.5 w-max mx-auto bg-luxury-black/50 backdrop-blur-md">
                  LIVE ATELIER SPECIFICATION
                </span>

                {/* Simulated Jewel Visual Representation */}
                <div className="w-36 h-36 mx-auto relative flex items-center justify-center bg-black/60 rounded-full border border-gold-600/15 p-2 shadow-inner">
                  {/* Dynamic glow base */}
                  <div className={`absolute w-24 h-24 rounded-full filter blur-[25px] opacity-25 transition-all duration-700 ${
                    gemstone.includes("Sapphire") ? "bg-blue-600" :
                    gemstone.includes("Diamond") ? "bg-white" :
                    gemstone.includes("Ruby") ? "bg-red-600" : "bg-emerald-600"
                  }`} />
                  
                  {/* Glowing refractive jewel */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="relative text-5xl cursor-pointer"
                  >
                    💍
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold tracking-wide text-white">
                    {carat.toFixed(1)} ct {gemCut} {structure}
                  </h3>
                  <p className="text-xs text-gold-200/70 font-mono tracking-wider">
                    {metal}
                  </p>
                </div>

                {/* Pricing Indicator */}
                <div className="pt-5 border-t border-white/5 space-y-1">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 block">Estimated Luxury Value</span>
                  <div className="text-3xl sm:text-4xl font-serif text-gold-300 font-bold tracking-wide text-gold-gradient">
                    ${calculateTotal().toLocaleString()}
                  </div>
                  <span className="text-[10px] text-white/30 tracking-wide block">Includes certified GIA grading & private fitting salon styling</span>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-xs text-gold-100/50 font-sans italic">
                  <Award className="w-4 h-4 text-gold-500" /> Lifetime Sri Lankan Assayed Hallmark & GIA Registry ID
                </div>
              </div>
            </div>

            {/* Quote Submission Form */}
            <div className="bg-luxury-gray/40 border border-gold-700/10 p-6 sm:p-8 relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="customizer-form"
                    onSubmit={handleInquirySubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <h4 className="font-serif text-lg text-white font-medium tracking-wide">
                      Apply for Private Commission
                    </h4>
                    <p className="text-xs text-white/50 leading-relaxed font-sans">
                      Our elite master designer will review your choices and respond with raw sketches and direct diamond certificate alternatives within 3 private showroom hours.
                    </p>

                    <div className="space-y-3 pt-2">
                      <input
                        type="text"
                        required
                        placeholder="Your Full Name (VIP Representative)"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-luxury-black/60 border border-white/10 focus:border-gold-500 p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-gold-500/20"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Private Telephone Number (WhatsApp Preferred)"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-luxury-black/60 border border-white/10 focus:border-gold-500 p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-gold-500/20"
                      />
                      <textarea
                        placeholder="Specify custom instructions (e.g. laser neck carvings, bespoke wedding initials, gift casing specifications...)"
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-luxury-black/60 border border-white/10 focus:border-gold-500 p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-gold-500/20 resize-none font-sans"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold-gradient py-3 text-luxury-black font-semibold text-xs uppercase tracking-[0.2em] font-sans flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit Atelier Registry Request
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="customizer-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-5"
                  >
                    <div className="w-12 h-12 bg-gold-600/20 rounded-full border border-gold-500 flex items-center justify-center mx-auto text-gold-300">
                      <Check className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-xl font-bold tracking-wide text-white">Commission Initiated</h4>
                      <p className="text-xs text-gold-100/60 leading-relaxed font-sans max-w-xs mx-auto">
                        Honorable <strong>{name}</strong>, your custom creation configuration is successfully lodged into our Royal Secretarial Registry. An expert luxury liaison will initiate private contact.
                      </p>
                    </div>

                    <button
                      onClick={handleReset}
                      className="text-xs uppercase tracking-[0.34em] font-mono text-gold-500 hover:text-white transition-colors pt-2 block mx-auto flex items-center gap-2"
                    >
                      <RotateCcw className="w-3.5 h-3.5" /> Craft Another Creation
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
        </div>
      </section>
    </div>
  );
}
