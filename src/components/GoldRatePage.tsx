import { useState, useMemo, useEffect, FormEvent } from 'react';
import {
  ShieldCheck,
  ChevronUp,
  ChevronDown,
  Check,
  ArrowRight,
  Info,
  RefreshCw,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from './PageHeader';

interface GoldRatePageProps {
  onBookClick: () => void;
  onNavigate?: (page: string) => void;
}

interface RateTrend {
  perGram: number;
  perSovereign: number;
  change: string;
  up: boolean;
  color: string;
}

interface HistoricalNode {
  date: string;
  val: number;
}

export default function GoldRatePage({ onBookClick, onNavigate }: GoldRatePageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [base24k, setBase24k] = useState(28550);
  const [base22k, setBase22k] = useState(26170);
  const [base18k, setBase18k] = useState(21410);
  const [tickCounter, setTickCounter] = useState(0);

  useEffect(() => {
    const tickInterval = setInterval(() => {
      const changeAmount = Math.floor(Math.random() * 20) - 8;
      if (changeAmount === 0) return;
      setTickCounter(prev => prev + 1);
      setBase24k(prev => prev + changeAmount);
      setBase22k(prev => Math.floor((prev + changeAmount * 0.916)));
      setBase18k(prev => Math.floor((prev + changeAmount * 0.75)));
    }, 5000);
    return () => clearInterval(tickInterval);
  }, []);

  const goldRates: Record<'24k' | '22k' | '18k', RateTrend> = useMemo(() => {
    return {
      "24k": { perGram: base24k, perSovereign: base24k * 8, change: "+0.18%", up: true, color: "#DFBA73" },
      "22k": { perGram: base22k, perSovereign: base22k * 8, change: "-0.05%", up: false, color: "#A68F6B" },
      "18k": { perGram: base18k, perSovereign: base18k * 8, change: "+0.62%", up: true, color: "#BEA18C" }
    };
  }, [base24k, base22k, base18k]);

  const [activeCarat, setActiveCarat] = useState<'24k' | '22k' | '18k'>('22k');

  return (
    <div id="gold-rate-dashboard-view" className="bg-[#030303] text-white min-h-screen relative overflow-hidden font-sans pb-32 text-left">
      <PageHeader onBack={() => onNavigate && onNavigate('home')} />

      {/* 1. HEADER */}
      <section className="pt-20 pb-24 max-w-7xl mx-auto px-6 sm:px-12 text-center space-y-10">
        <div className="flex items-center justify-center gap-3">
          <Activity className="w-3.5 h-3.5 text-[#A68F6B] opacity-50" />
          <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">
            INDICES LEDGER &bull; LIVE FEED
          </span>
        </div>
        
        <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light tracking-tight text-white uppercase leading-[1.1]">
          Market <br />
          <span className="italic text-white/50 lowercase">Transparency</span>
        </h1>
        
        <p className="text-[15px] sm:text-[17px] text-white/30 max-w-xl mx-auto leading-relaxed font-sans font-light tracking-wide pt-4 italic editorial-max-width">
          Continuous physical market indices calculated in Sri Lankan Rupees. We bypass retail markups to provide raw architectural value.
        </p>
      </section>

      {/* 2. LIVE TICKERS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
        {(Object.keys(goldRates) as Array<'24k' | '22k' | '18k'>).map((carat, index) => {
          const r = goldRates[carat];
          const isSelected = activeCarat === carat;
          
          return (
            <motion.div
              key={carat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              onClick={() => setActiveCarat(carat)}
              className={`p-12 border transition-all duration-700 relative overflow-hidden group cursor-pointer ${isSelected ? 'border-[#A68F6B] bg-white/[0.02]' : 'border-white/[0.03] bg-transparent hover:border-white/10'}`}
            >
              <div className="flex justify-between items-start mb-16">
                <h3 className="font-serif text-3xl font-light text-white uppercase italic">
                  {carat} Gold
                </h3>
                <span className={`text-[10px] font-mono px-3 py-1.5 flex items-center gap-1.5 border ${r.up ? 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5' : 'border-rose-500/20 text-rose-400 bg-rose-500/5'}`}>
                  {r.change}
                </span>
              </div>

              <div className="space-y-8">
                <div className="flex justify-between items-baseline">
                  <span className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-mono">Per Gram</span>
                  <span className="text-3xl font-serif text-white tracking-widest leading-none font-light">
                    {r.perGram.toLocaleString()} <span className="text-[14px] text-white/20 uppercase font-sans tracking-widest ml-2">LKR</span>
                  </span>
                </div>
                <div className="flex justify-between items-baseline pt-8 border-t border-white/[0.05]">
                  <span className="text-[10px] text-white/20 uppercase tracking-[0.4em] font-mono">Sovereign</span>
                  <span className="text-3xl font-serif text-[#A68F6B] tracking-widest leading-none font-light">
                    {r.perSovereign.toLocaleString()} <span className="text-[14px] text-gold-500/20 uppercase font-sans tracking-widest ml-2">LKR</span>
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* 3. EXPERT COUNSEL */}
      <section className="py-24 max-w-4xl mx-auto px-6 sm:px-12 text-left bg-[#050505] border-y border-white/5">
        <div className="space-y-16">
          <div className="space-y-6">
            <span className="font-mono text-[9px] tracking-[0.4em] text-[#A68F6B] uppercase">EXPERT COUNSEL</span>
            <h2 className="text-4xl font-serif text-white uppercase tracking-tight leading-none">The 916 Standard of <br /><span className="italic text-white/60">Sri Lankan Craft</span></h2>
            <p className="text-[14px] text-white/40 leading-relaxed font-light max-w-2xl">
              We exclusively forge in 22k Gold (916 purity) to balance absolute physical brilliance with the structural integrity required for multi-generational wear.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-white/5 pt-12">
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-white uppercase tracking-widest">Rate Guarantee</h3>
              <p className="text-[13px] text-white/30 leading-relaxed font-light">
                Secure current indices for your bridal commission by placing a secured deposit at our Akurana salon.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-serif text-lg text-white uppercase tracking-widest">Authentic Assay</h3>
              <p className="text-[13px] text-white/30 leading-relaxed font-light">
                Every piece holds three hallmarks: the Family House Sigil, the 916 Purity stamp, and the Legal Assay mark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FINAL CALL */}
      <section className="py-32 sm:py-48 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
          <div className="space-y-6">
            <h2 className="text-5xl sm:text-7xl font-serif font-light tracking-tight text-white uppercase leading-none">
              Inquire at <br />
              <span className="font-serif italic font-light text-white/70 text-4xl sm:text-5xl">the Akurana Atelier</span>
            </h2>
            <p className="text-[14px] text-white/40 max-w-lg mx-auto leading-relaxed">
              For volume valuations or heritage trade-ins, speak directly with our Akurana vault specialists.
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="px-12 py-5 bg-white text-black text-[10px] tracking-[0.4em] uppercase font-bold hover:bg-[#A68F6B] hover:text-white transition-all cursor-pointer"
          >
            Book Private Appraisal &rarr;
          </button>
        </div>
      </section>
    </div>
  );
}
