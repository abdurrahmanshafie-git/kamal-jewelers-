import { motion } from 'motion/react';

export default function TrustLegacySection() {
  const points = [
    {
      metric: "1979",
      label: "Since Establishment",
      heading: "Established 1979",
      text: "Preserving the art of traditional Sri Lankan jewellery for over four decades from our Akurana forge."
    },
    {
      metric: "HEIR",
      label: "Family Owned",
      heading: "A Legacy Of Trust",
      text: "Passed through generations, our legacy is built on direct familial accountability and artisanal secrets."
    },
    {
      metric: "ELITE",
      label: "Personalized Service",
      heading: "Crafted Around You",
      text: "Every commission is a private dialogue, ensuring your vision is captured with absolute material precision."
    }
  ];

  return (
    <section id="legacy" className="py-24 sm:py-48 lg:py-64 bg-[#030303] text-white relative overflow-hidden border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* CHAPTER HEADING */}
        <div className="max-w-4xl mb-40 text-left">
          <p className="font-mono text-[9px] tracking-[0.5em] text-[#A68F6B] uppercase mb-8">
            CHAPTER VII &bull; TRUST & LEGACY
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,7vw,6.5rem)] font-light tracking-tight leading-[1.05] text-white uppercase">
            A Continuous Code <br />
            <span className="italic text-white font-light lowercase">of absolute devotion.</span>
          </h2>
        </div>

        {/* METRIC ROWS */}
        <div className="space-y-64 sm:space-y-80">
          {points.map((pt, index) => (
            <div 
              key={index} 
              className="relative flex flex-col md:flex-row items-center min-h-[300px]"
            >
              {/* Massive background word - Far Left and vertically centered */}
              <div className="absolute -left-[10%] lg:-left-[15%] top-1/2 -translate-y-1/2 z-0 pointer-events-none hidden md:block">
                <span className="font-serif text-[clamp(10rem,25vw,32rem)] font-extralight leading-none tracking-tighter text-[#151515] opacity-[0.15] select-none uppercase">
                  {pt.metric}
                </span>
              </div>

              {/* Main Content Pillar - Pushed to the right for clear separation */}
              <div className="md:ml-auto md:w-5/12 space-y-8 relative z-10 text-left">
                <div className="space-y-4">
                  <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">
                    {pt.label}
                  </span>
                  <h3 className="font-serif text-4xl sm:text-6xl text-white font-light uppercase tracking-tight leading-[1.1]">
                    {pt.heading}
                  </h3>
                </div>
                
                <div className="relative pt-4">
                  <div className="absolute -inset-10 bg-black/80 blur-[80px] -z-10" />
                  <p className="text-[15px] sm:text-[17px] text-white/40 leading-relaxed font-sans font-light tracking-wide max-w-sm editorial-max-width line-clamp-4">
                    {pt.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
