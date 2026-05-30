import { motion } from 'motion/react';
import { craftsmanship } from '../imageAssets';

export default function JewelleryExperience() {
  return (
    <section id="experience" className="py-24 sm:py-48 lg:py-64 bg-[#030303] text-white relative overflow-hidden border-b border-white/[0.03]">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* ONE REFIND, CONFIDENT EDITORIAL BLOCK WITH ASYMMETRICAL COLUMN WEIGHTS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24 items-center">
          
          {/* Aesthetic narrative block (Left 5 Columns) - Confident, minimalist copy */}
          <div className="lg:col-span-6 space-y-8">
            <span className="text-[10px] font-mono tracking-[0.4em] text-white/40 uppercase block">THE ATELIER DISCIPLINE</span>
            
            <h3 className="font-serif text-[clamp(2.2rem,5vw,4.5rem)] text-white font-light leading-[1.1] uppercase">
              The Pure Art of <br />
              <span className="italic text-white font-light lowercase">Kandyan Filigree</span>
            </h3>
            
            <div className="space-y-6 text-[15px] sm:text-[16px] text-white/40 leading-relaxed font-sans font-light tracking-wide editorial-max-width">
              <p>
                Generations of regional mastery concentrate in each soldering point. Melting certified pure 22-carat gold compounds, our master artisans shape, refine, and pull precious filaments to craft traditional patterns completely by hand.
              </p>
              <p>
                This painstaking process is not a trade; it is a choreography. Each creation captures not just the fire of natural Ceylon sapphires, but the permanent narrative of your family's beautiful union.
              </p>
            </div>

            {/* Micro details with huge space */}
            <div className="pt-10 grid grid-cols-2 gap-12 text-[10px] font-mono tracking-[0.4em] uppercase border-t border-white/[0.03]">
              <div className="space-y-2">
                <span className="text-white font-serif text-[24px] tracking-normal">120+ Hrs</span>
                <span className="text-white/20 text-[10px] uppercase block">Refining per creation</span>
              </div>
              <div className="space-y-2">
                <span className="text-white font-serif text-[24px] tracking-normal">Assured 916</span>
                <span className="text-white/20 text-[10px] uppercase block">Sri lankan gold assay</span>
              </div>
            </div>
          </div>

          {/* Majestic Full-frame Image backdrop (Right 6 Columns) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] bg-[#0a0a0a] border border-white/[0.02] overflow-hidden group">
              <img
                src={craftsmanship}
                alt="Artisan engraving traditional Sri Lankan jewelry gold filigree detailed carving"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] transition-transform duration-[3000ms] ease-[0.16, 1, 0.3, 1] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase bg-black/40 px-5 py-3.5 border border-white/5 backdrop-blur-md">
                <span>ATELIER FLOOR SNAPSHOT</span>
                <span>AKURANA, SRI LANKA</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
