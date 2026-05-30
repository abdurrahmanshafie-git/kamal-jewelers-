import { motion } from 'motion/react';
import { Clock, MapPin, Sparkles, Heart } from 'lucide-react';
import PageHeader from './PageHeader';

interface AboutPageProps {
  onBookClick: () => void;
  onNavigate: (page: string) => void;
}

export default function AboutPage({ onBookClick, onNavigate }: AboutPageProps) {
  const imagePaths = {
    hero: "/src/assets/images/hero.webp",
    bridal: "/src/assets/images/bridal.webp",
    ring: "/src/assets/images/ring.webp",
    showroom: "/src/assets/images/showroom.webp",
    craftsmanship: "/src/assets/images/craftsmanship.webp"
  };

  const timelineChapters = [
    {
      year: "1979",
      num: "SEC I.",
      title: "The Akurana Private Forge",
      subtitle: "THE ORIGINAL DEVOTION",
      description: "Under the quiet shadow of the Kandyan hills, New Kamal Jewellers began as an intimate family atelier in Akurana. We did not set out to build a commercial empire; we set out to craft individual gold pieces so pure and heavy they would naturally become family heirlooms."
    },
    {
      year: "1994",
      num: "SEC II.",
      title: "Resilience & The Unbroken Seal",
      subtitle: "THE TRIAL OF FAITH",
      description: "Through economic transformations and regional complexities of the late-20th century, our family held fast to the furnace in Akurana. We refused the chemical shortcuts and dilutions adopted by commercial manufacturers, establishing our name as an unalterable standard of 22k purity."
    },
    {
      year: "2012",
      num: "SEC III.",
      title: "The Brilliants & High Sovereignties",
      subtitle: "THE RECTILINEAR SHIFT",
      description: "Under second-generation curation, we expanded our design vocabulary. Infusing traditional filigree structures with GIA-certified high-refraction diamonds and unheated Ratnapura blue sapphires, we transformed regional gold into globally collected high-jeweller masterpieces."
    },
    {
      year: "Present",
      num: "SEC IV.",
      title: "A Continuous Family Lineage",
      subtitle: "FORTY-FIVE YEARS OF TRUTH",
      description: "Operating from our flagship boutique, we continue to weigh every gram of Sri Lankan gold in full view of families. Today, we stand not as a store, but as an irreplaceable sanctuary of trust, where daughters return with their mothers' necklaces to be styled for their own marriages."
    }
  ];

  return (
    <div id="about-documentary-view" className="bg-[#030303] text-white min-h-screen relative overflow-hidden font-sans">
      
      <PageHeader onBack={() => onNavigate('home')} />

      {/* 1. OPENING STATEMENT */}
      <section className="py-20 sm:py-32 lg:py-40 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24 items-start">
          
          <div className="lg:col-span-8 space-y-12">
            <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">
              EST. 1979 &bull; MAISON AKURANA
            </span>
            
            <h1 className="font-serif text-[clamp(2.5rem,7vw,6.5rem)] font-light tracking-tight leading-[1.05] text-white uppercase text-left">
              The silent <br />
              <span className="italic text-white font-light lowercase">cooling of raw</span> <br />
              liquid gold.
            </h1>
          </div>

          <div className="lg:col-span-4 lg:pt-24 space-y-8 text-left">
            <p className="text-[15px] sm:text-[17px] text-white/50 leading-relaxed font-serif italic font-light tracking-wide">
              "We do not build for the season. Every piece is calculated to absorb memories of its first wedding morning, to be released only when passed to a granddaughter."
            </p>
            <div className="w-12 h-[1px] bg-gold-500/30" />
          </div>

        </div>
      </section>

      {/* CINEMATIC SPREAD */}
      <section className="relative aspect-[16/6] w-full bg-[#0a0a0a] border-y border-white/[0.03] overflow-hidden group">
        <img
          src={imagePaths.craftsmanship}
          alt="Artisanal Mastery"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover filter brightness-[0.4] contrast-[1.1] transition-transform duration-[2s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303] opacity-60" />
      </section>

      {/* 2. CHRONOLOGY */}
      <section className="py-32 sm:py-48 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 sm:gap-32">
          <div className="lg:col-span-4 space-y-6">
             <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">OUR ROOTS</span>
             <h2 className="text-4xl font-serif text-white uppercase tracking-tight leading-tight">The Legacy of <br/> Unyielding Hands</h2>
             <p className="text-[14px] text-white/30 font-light leading-relaxed max-w-xs">
               Tracing four decades of artisanal preservation in the Kandyan hills.
             </p>
          </div>
          <div className="lg:col-span-8 space-y-32">
            {timelineChapters.map((ch) => (
              <div key={ch.year} className="space-y-6 max-w-2xl group">
                <div className="flex items-center gap-8">
                  <span className="font-serif text-[42px] text-white/10 group-hover:text-gold-500/20 transition-colors duration-700">{ch.year}</span>
                  <div className="h-[1px] flex-1 bg-white/[0.04]" />
                  <span className="font-mono text-[9px] tracking-[0.4em] text-white/10 uppercase">{ch.num}</span>
                </div>
                <div className="space-y-4 pt-2">
                  <h3 className="font-serif text-[26px] text-white/90 uppercase tracking-wider font-light">{ch.title}</h3>
                  <p className="text-[15px] sm:text-[16px] text-white/40 leading-relaxed font-light editorial-max-width">{ch.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FINAL CALL */}
      <section className="py-24 sm:py-40 text-center bg-[#050505] relative overflow-hidden border-t border-white/[0.03]">
        <div className="max-w-4xl mx-auto px-6 space-y-16 relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-6xxl font-serif font-light tracking-tight text-white uppercase leading-none">
              Request Your <br />
              <span className="font-serif italic font-light text-white/60">Consultation</span>
            </h2>
            <p className="text-[14px] sm:text-[16px] text-white/40 max-w-xl mx-auto leading-relaxed font-light tracking-wide uppercase font-mono tracking-[0.2em]">
              Experience the physical weight of 22k gold firsthand in our private Akurana showroom.
            </p>
          </div>
          <button
            onClick={onBookClick}
            className="px-16 py-6 bg-white text-black text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-gold-500 hover:text-white transition-all duration-700 cursor-pointer shadow-2xl"
          >
            Schedule Private Visit
          </button>
        </div>
      </section>
    </div>
  );
}
