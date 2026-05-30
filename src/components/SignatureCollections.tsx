import { motion } from 'motion/react';
import { bridal, gemstone, hero, ring, weddingBands } from '../imageAssets';

interface SignatureCollectionsProps {
  onCollectionSelect: (id: string) => void;
}

export default function SignatureCollections({ onCollectionSelect }: SignatureCollectionsProps) {
  const imagePaths = {
    bridal: bridal,
    ring: ring,
    gold: hero,
    gemstone: gemstone,
    wedding: weddingBands
  };

  const collections = [
    {
      id: "col-1",
      title: "Bridal Couture",
      sub: "THE AUSPICIOUS ENSEMBLES",
      desc: "Traditional 22k gold masterpieces handcrafted to celebrate generational heritage and union.",
      image: imagePaths.bridal,
      alignment: "items-start",
      offset: ""
    },
    {
      id: "col-2",
      title: "Handcrafted Diamonds",
      sub: "CERTIFIED MASTERWORKS",
      desc: "Exceptional stones selected for absolute brilliance, individually set in refined gold and platinum.",
      image: imagePaths.ring,
      alignment: "items-end",
      offset: "lg:pt-32"
    },
    {
      id: "col-3",
      title: "Gold Filigree",
      sub: "THE ART OF GOLD",
      desc: "Delicate wirework shaped by master craftsmen in our Akurana workshop since 1979.",
      image: imagePaths.gold,
      alignment: "items-start",
      offset: ""
    },
    {
      id: "col-4",
      title: "Rare Gemstones",
      sub: "NATIVE SPLENDOUR",
      desc: "Luminous sapphires and precious stones unearthed directly from Sri Lanka's historic gemstone valleys.",
      image: imagePaths.gemstone,
      alignment: "items-end",
      offset: "lg:pt-32"
    },
    {
      id: "col-5",
      title: "Wedding Bands",
      sub: "ETERNAL UNIONS",
      desc: "Minimal, elegant bands crafted from solid gold to symbolize continuous and lasting commitment.",
      image: imagePaths.wedding,
      alignment: "items-start",
      offset: "lg:col-span-12 max-w-4xl mx-auto"
    }
  ];

  return (
    <section id="collections" className="py-24 sm:py-48 lg:py-64 bg-[#030303] text-white relative overflow-hidden border-b border-white/[0.03]">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 lg:px-20">
        
        {/* Editorial Title */}
        <div className="max-w-4xl mb-32 sm:mb-48 text-left">
          <p className="font-mono text-[9px] tracking-[0.5em] text-[#A68F6B] uppercase mb-8">
            CHAPTER III &bull; SIGNATURE COLLECTIONS
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,7vw,6.5rem)] font-light tracking-tight leading-[1.05] text-white uppercase">
            Curated Indexes <br />
            <span className="italic text-white font-light lowercase">of beautiful weight.</span>
          </h2>
        </div>

        {/* Magazine-Style Offset Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-24 gap-y-40 xl:gap-x-32">
          {collections.slice(0, 4).map((col, index) => (
            <div
              key={col.id}
              onClick={() => onCollectionSelect(col.id)}
              className={`flex flex-col space-y-10 cursor-pointer group ${col.offset}`}
            >
              <div className="relative aspect-[3/4.2] w-full bg-[#080808] border border-white/[0.02] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.7] group-hover:brightness-[0.9] group-hover:scale-102 transition-all duration-[2400ms] ease-[0.16, 1, 0.3, 1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-10 left-10 overflow-hidden">
                  <motion.span 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="font-mono text-[9px] tracking-[0.4em] text-white/40 uppercase block"
                  >
                    NK ATELIER EDITION
                  </motion.span>
                </div>
              </div>

              <div className="space-y-6 pt-2 text-left">
                <span className="font-mono text-[10px] tracking-[0.4em] text-gold-500/60 uppercase block">
                  {col.sub}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
                  {col.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] text-white/40 leading-relaxed font-sans font-light tracking-wide max-w-md editorial-max-width">
                  {col.desc}
                </p>
                <div className="pt-4">
                  <span className="inline-block text-white/60 group-hover:text-gold-400 text-[10px] font-mono tracking-[0.5em] uppercase pb-2 border-b border-white/10 transition-all duration-700">
                    DISCOVER INDEX
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Full-Spread Collection 5 */}
        <div className="mt-48 pt-32 border-t border-white/[0.03]">
          {collections.slice(4).map((col) => (
            <div
              key={col.id}
              onClick={() => onCollectionSelect(col.id)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24 items-center cursor-pointer group"
            >
              <div className="lg:col-span-8 relative aspect-[16/9] w-full bg-[#080808] border border-white/[0.02] overflow-hidden">
                <img
                  src={col.image}
                  alt={col.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.75] group-hover:brightness-[1] group-hover:scale-102 transition-all duration-[2400ms] ease-[0.16, 1, 0.3, 1]"
                />
              </div>
              <div className="lg:col-span-4 space-y-8 text-left">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] tracking-[0.4em] text-gold-500/60 uppercase block">
                    {col.sub}
                  </span>
                  <h3 className="font-serif text-4xl sm:text-5xl font-light text-white uppercase tracking-tight">
                    {col.title}
                  </h3>
                  <p className="text-[15px] sm:text-[16px] text-white/40 leading-relaxed font-light tracking-wide italic editorial-max-width">
                    {col.desc}
                  </p>
                </div>
                <div className="pt-4">
                  <span className="inline-block text-white/60 group-hover:text-gold-400 text-[10px] font-mono tracking-[0.5em] uppercase pb-2 border-b border-white/10 transition-all duration-700">
                    DISCOVER THE COUPLING
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
