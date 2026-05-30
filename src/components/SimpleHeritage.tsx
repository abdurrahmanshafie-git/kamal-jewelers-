import { motion } from 'motion/react';

export default function SimpleHeritage() {
  return (
    <section id="heritage" className="py-24 sm:py-40 bg-[#030303] text-white relative overflow-hidden border-b border-white/[0.03] text-center">
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        <div className="space-y-6">
          <p className="font-mono text-[9px] tracking-[0.6em] text-gold-500/40 uppercase">
            A Mastership of Forty Years
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] font-light tracking-tight text-white uppercase leading-none">
            Established <br className="sm:hidden" /> <span className="italic">1979</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 sm:gap-12 max-w-4xl mx-auto pt-8">
          <div className="space-y-3 group">
            <span className="font-serif text-[28px] text-white/90 font-light tracking-wide transition-colors duration-700 group-hover:text-gold-400">Family Heritage</span>
            <div className="w-6 h-[1px] bg-gold-500/20 mx-auto" />
            <p className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase font-light">Generational Custodians</p>
          </div>
          <div className="space-y-3 group">
            <span className="font-serif text-[28px] text-white/90 font-light tracking-wide transition-colors duration-700 group-hover:text-gold-400">Akurana</span>
            <div className="w-6 h-[1px] bg-gold-500/20 mx-auto" />
            <p className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase font-light">Sri Lanka Roots</p>
          </div>
          <div className="space-y-3 group">
            <span className="font-serif text-[28px] text-white/90 font-light tracking-wide transition-colors duration-700 group-hover:text-gold-400">Bespoke Mastery</span>
            <div className="w-6 h-[1px] bg-gold-500/20 mx-auto" />
            <p className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase font-light">Handcrafted Selection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
