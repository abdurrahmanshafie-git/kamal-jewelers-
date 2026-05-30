import { motion } from 'motion/react';
import { bridal } from '../imageAssets';

interface BridalSectionProps {
  onBookClick: () => void;
}

export default function BridalSection({ onBookClick }: BridalSectionProps) {
  const bridalImage = bridal;

  return (
    <section id="bridal-experience" className="py-24 sm:py-48 lg:py-64 bg-[#030303] text-white relative overflow-hidden border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* ASYMMETRICAL COLUMN SPREAD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24 items-center">
          
          {/* Aesthetic Photographic Panel - Left 7 Columns */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[4/5] bg-[#0a0a0a] border border-white/[0.02] overflow-hidden group">
              <img
                src={bridalImage}
                alt="Traditional Sri Lankan bridal seven layers jewellery set in gold"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] transition-transform duration-[3000ms] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-10 left-10 text-left space-y-2">
                <span className="font-mono text-[9px] tracking-[0.5em] text-gold-500/50 uppercase block">THE AUSPICIOUS ENSEMBLES</span>
                <p className="font-serif text-[26px] text-white font-light uppercase tracking-tight">
                  The Historic Seven-Tier Set
                </p>
              </div>
            </div>
          </div>

          {/* Copy Panel - Right 5 Columns */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">
              CHAPTER V &bull; THE BRIDAL SERVICE
            </span>
            
            <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-[1.05]">
              A Private <br />
              <span className="italic text-white font-light lowercase">Sacred Custom</span>
            </h2>
            
            <div className="space-y-6 text-[15px] sm:text-[16px] text-white/40 leading-relaxed font-sans font-light tracking-wide editorial-max-width">
              <p>
                Experience a private dialogue in our Akurana showroom, where tradition meets personalized artistry.
              </p>
              <p>
                Collaborate with our master goldsmiths to design traditional Kandyan ensembles or modern bridal sets, handcrafted with absolute material precision and familial trust.
              </p>
            </div>

            <div className="pt-10 grid grid-cols-2 gap-10 text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase border-t border-white/[0.03]">
              <div className="space-y-2">
                <span className="block text-white text-[20px] font-serif tracking-normal">Discreet</span>
                <span className="text-[10px] block text-white/30 lowercase font-serif italic">private suite styling</span>
              </div>
              <div className="space-y-2">
                <span className="block text-white text-[20px] font-serif tracking-normal">Custom Fit</span>
                <span className="text-[10px] block text-white/30 lowercase font-serif italic">tailored weight balancing</span>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onBookClick}
                className="text-white/60 hover:text-gold-400 text-[10px] font-mono tracking-[0.4em] uppercase pb-2 border-b border-white/10 transition-all duration-700 cursor-pointer"
              >
                REQUEST BRIDAL SALON ENTRY &rarr;
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
