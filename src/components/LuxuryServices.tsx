import { motion } from 'motion/react';

interface LuxuryServicesProps {
  onBookClick: () => void;
}

export default function LuxuryServices({ onBookClick }: LuxuryServicesProps) {
  const services = [
    {
      num: "01",
      title: "The Bespoke Gold Atelier",
      description: "Collaborate directly with our master sketch artists and guild goldsmiths in. We translate your emotional vision into physical 3D blueprints, custom-fitting each piece to perfect proportion."
    },
    {
      num: "02",
      title: "Bridal Suite Coordinations",
      description: "Private styling consultations in our quiet Akurana lounge. We coordinate gold weights, detailing, and custom settings to harmonize flawlessly with traditional Kandyan or contemporary silhouettes."
    },
    {
      num: "03",
      title: "Purity-Assured Gold Exchange",
      description: "Transparent, secure valuation and refinement of family possessions. Utilizing precision digital scanners, we assure fair daily market value for gold trading and heirloom upgrades."
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-48 lg:py-64 bg-[#030303] text-white relative overflow-hidden border-b border-white/[0.03]">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* ASYMMETRICAL MAGAZINE INDEX LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-32 items-start">
          
          {/* LEFT COLUMN: Large Typography + Confident Copy */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-40">
            <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">THE PATRON CHARTER</span>
            
            <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-[1.05]">
              Services of <br />
              <span className="italic text-white font-light lowercase">Uncompromised Care</span>
            </h2>
            
            <p className="text-[15px] sm:text-[16px] text-white/30 leading-relaxed font-sans font-light tracking-wide pt-4 max-w-sm editorial-max-width line-clamp-4">
              We operate on deep-rooted familial trust. Beyond refined gold, we offer custom-fit design consultations, transparent exchanges, and private coordinate styling sessions.
            </p>

            <div className="pt-8">
              <button
                onClick={onBookClick}
                className="text-white/60 hover:text-gold-400 text-[10px] font-mono tracking-[0.4em] uppercase pb-2 border-b border-white/10 transition-all duration-700 cursor-pointer"
              >
                REQUEST ENTRY &rarr;
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Asymmetrical, minimalist list (no cards, no icons) */}
          <div className="lg:col-span-7 space-y-24 sm:space-y-32 lg:pl-16">
            {services.map((item, index) => (
              <div 
                key={item.num} 
                className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start group"
              >
                {/* Large elegant num */}
                <span className="font-serif text-5xl text-white/10 font-light select-none group-hover:text-gold-500/20 transition-colors duration-700">
                  {item.num}
                </span>

                <div className="space-y-4 flex-1 text-left">
                  <h3 className="font-serif text-[26px] text-white uppercase tracking-wider font-light">
                    {item.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-white/[0.05]" />
                  <p className="text-[15px] sm:text-[16px] text-white/40 leading-relaxed font-sans font-light tracking-wide editorial-max-width">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
