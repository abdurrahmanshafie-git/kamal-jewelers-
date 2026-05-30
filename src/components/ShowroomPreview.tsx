import { motion } from 'motion/react';
import { LayoutGrid, Camera, Eye } from 'lucide-react';

export default function ShowroomPreview() {
  const showroomImages = [
    {
      url: "/src/assets/images/showroom.webp",
      label: "I. THE BRIDAL CONSULTATION CHAMBER"
    },
    {
      url: "/src/assets/images/craftsmanship.webp",
      label: "II. THE ATELIER WORKBENCH"
    },
    {
      url: "/src/assets/images/hero.webp",
      label: "III. THE GOLD ARCHIVE CABINET"
    },
    {
      url: "/src/assets/images/bridal.webp",
      label: "IV. AUSPICIOUS PRESENTATION SUITE"
    }
  ];

  return (
    <section id="showroom-gallery" className="py-36 sm:py-48 lg:py-56 bg-[#030303] text-white relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        
        {/* EDITORIAL HEADING */}
        <div className="max-w-2xl mb-24 sm:mb-32 text-left">
          <p className="font-mono text-xs tracking-[0.4em] text-white/40 uppercase mb-6">
            CHAPTER VIII &bull; SHOWROOM PREVIEW
          </p>
          <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-none">
            An Architectural <br />
            <span className="font-serif italic font-light text-white/70">Sanctuary</span>
          </h2>
          <p className="text-xs sm:text-[14px] text-white/50 leading-relaxed font-sans font-light tracking-wide pt-4 max-w-sm">
            Our physical boutique on the Matale Road (A9), Akurana, is a quiet space carefully structured for the slow curation of forever heirlooms.
          </p>
        </div>

        {/* ASYMMETRICAL LARGE PORTRAIT SPREADS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-14 items-start">
          
          {/* Main Large Image - Left 7 columns */}
          <div className="md:col-span-7 space-y-4">
            <div className="relative aspect-[4/5] bg-[#0a0a0a] border border-white/5 overflow-hidden group">
              <img
                src={showroomImages[0].url}
                alt="New Kamal Jewellers private bridal salon presentation room interior design"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05] group-hover:scale-102 transition-all duration-[3000ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <div className="absolute top-6 left-6 font-mono text-[9px] tracking-widest text-white/30 uppercase">
                MAIN SHOWROOM AREA &bull; SRI LANKA
              </div>
            </div>
            <p className="text-left font-mono text-[10px] tracking-[0.25em] text-white/45 uppercase pt-2">
              {showroomImages[0].label}
            </p>
          </div>

          {/* Staggered Secondary Images on the Right - Right 5 columns */}
          <div className="md:col-span-5 md:pt-24 space-y-16">
            
            {/* Image 2 */}
            <div className="space-y-4 text-left">
              <div className="relative aspect-[4/3] bg-[#0a0a0a] border border-white/5 overflow-hidden group">
                <img
                  src={showroomImages[1].url}
                  alt="Traditional Sri Lankan goldsmith workbench filigree making"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05] group-hover:scale-102 transition-all duration-[2000ms]"
                />
              </div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/45 uppercase">
                {showroomImages[1].label}
              </p>
            </div>

            {/* Image 3 */}
            <div className="space-y-4 text-left">
              <div className="relative aspect-[4/3] bg-[#0a0a0a] border border-white/5 overflow-hidden group">
                <img
                  src={showroomImages[2].url}
                  alt="High contrast luxury gold showroom archive detail"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05] group-hover:scale-102 transition-all duration-[2000ms]"
                />
              </div>
              <p className="font-mono text-[10px] tracking-[0.25em] text-white/45 uppercase">
                {showroomImages[2].label}
              </p>
            </div>

          </div>

        </div>

        {/* Dynamic single column wide landscape image at bottom to finish spread */}
        <div className="mt-24 space-y-4 text-left">
          <div className="relative aspect-[21/9] w-full bg-[#0a0a0a] border border-white/5 overflow-hidden group">
            <img
              src={showroomImages[3].url}
              alt="Bespoke luxury presentation setup inside showroom lounge"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05] group-hover:scale-102 transition-all duration-[3000ms]"
            />
          </div>
          <p className="font-mono text-[10px] tracking-[0.25em] text-white/45 uppercase pt-2">
            {showroomImages[3].label}
          </p>
        </div>

      </div>
    </section>
  );
}
