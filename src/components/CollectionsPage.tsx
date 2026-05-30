import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Star, Anchor } from 'lucide-react';
import PageHeader from './PageHeader';
import { bridal, craftsmanship, gemstone, hero, ring, weddingBands } from '../imageAssets';

interface CollectionsPageProps {
  onNavigate: (page: string) => void;
  onBookClick: () => void;
  onCollectionSelect: (id: string) => void;
}

export default function CollectionsPage({ onNavigate, onBookClick, onCollectionSelect }: CollectionsPageProps) {
  const campaigns = [
    {
      id: "col-1", // Maps to bridal
      title: "Bridal Elegance",
      chapter: "CHAPTER I",
      subTitle: "THE AUSPICIOUS ASSEMBLAGES",
      tagline: "Architectural 22k gold ensembles designed to structure centuries of familial history on the sacred day.",
      description: "Under the supervision of regional artisans in our Akurana workshop, bridal sets are forged as continuous structural statements. Each of the traditional Kandyan seven layers is calculated to carry exact symbolic weight, balancing the legacy of generations with absolute physical grace.",
      image: bridal,
      layout: "full-width",
      citation: "NK ATELIER &bull; SRI LANKA TRADITIONAL"
    },
    {
      id: "col-3", // Maps to gold
      title: "Signature Gold",
      chapter: "CHAPTER II",
      subTitle: "THE PURE 916 FILIGREE",
      tagline: "Delicate gold wirework shaped entirely by memory inside our regional Akurana workshop.",
      description: "Made without digital printers or machine molds. The gold is purified, drawn into filaments thinner than silk, and hand-coiled into intricate historical patterns. It is an art form driven entirely by memory, coordination, and patience, preserving a forty-five-year-old local standard.",
      image: hero,
      layout: "split-left",
      citation: "ASSAY OFFICE CERTIFIED &bull; 22 CARAT"
    },
    {
      id: "col-2", // Maps to diamonds
      title: "Diamond Creations",
      chapter: "CHAPTER III",
      subTitle: "REFRACTIVE ABSOLUTES",
      tagline: "Internationally certified stones selected for celestial fire, hand-set into raw platinum grids.",
      description: "We collect only GIA-certified brilliants of exceptional clarity. Mounted in low-profile, custom-sculpted white gold or raw platinum claw arrangements, each diamond is aligned to capture maximum light return, turning mathematical cut perfection into human fire.",
      image: ring,
      layout: "split-right",
      citation: "ANTWERP ORIGINAL &bull; GIA REGISTERED"
    },
    {
      id: "col-4", // Maps to gemstones
      title: "Gemstone Collection",
      chapter: "CHAPTER IV",
      subTitle: "DEPHTS OF SEVERE SATURATION",
      tagline: "Sovereign royal-blue padparadscha and cornflower sapphires unearthed directly from local valleys.",
      description: "Directly sourced from the volcanic gravels of Ratnapura. We isolate natural sapphires representing the absolute peak of color depth—cornflower blues, deep royals, and peach padparadschas—keeping them raw and unheated to retain geological authenticity.",
      image: gemstone, // high-end sapphire gemstone visual
      layout: "full-width",
      citation: "CEYLON GEOLOGICAL INC &bull; UNHEATED ORIGINAL"
    },
    {
      id: "col-5", // Maps to wedding rings
      title: "Wedding Rings",
      chapter: "CHAPTER V",
      subTitle: "SOUNDLESS COMMITMENTS",
      tagline: "Undecorated bands crafted from continuous, single-pour platinum and gold compounds.",
      description: "A ring holds no beginning and no termination. Crafted inside a quiet, isolated chamber of the forge, each band represents a single, uninterrupted pour of liquid metal. Symmetrical, balanced, and perfectly weighted for day-to-day carrying.",
      image: weddingBands,
      layout: "split-left",
      citation: "UNBROKEN MOLD &bull; INDIVIDUAL CUSTOM FIT"
    },
    {
      id: "custom-jewellery", // Maps to customizer
      title: "Bespoke Jewellery",
      chapter: "CHAPTER VI",
      subTitle: "INDIVIDUAL ARCHITECTURAL BLUEPRINTS",
      tagline: "Collaborate directly with design goldsmiths to formulate unique physical legacies.",
      description: "We open our archives to you. By combining the interactive weight customizer with face-to-face designer meetings, we draft individual templates. There are no duplicates; your item exists exactly once across history, carrying only your family's personal coordinates.",
      image: craftsmanship,
      layout: "split-right",
      citation: "BESPOKE COMMISSION &bull; AKURANA WORKSHOP"
    }
  ];

  return (
    <div id="collections-campaigns-view" className="bg-[#030303] text-white min-h-screen relative overflow-hidden font-sans pb-24">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02),transparent_70%)] pointer-events-none" />

      <PageHeader onBack={() => onNavigate('home')} />

      {/* EDITORIAL HERO HEADER */}
      <section className="pt-10 pb-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-4xl text-left space-y-4">
          <p className="font-mono text-[9px] tracking-[0.4em] text-[#A68F6B] uppercase">
            IMPERIAL CAMPAIGNS
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,5.5rem)] font-light tracking-tight leading-[1] text-white uppercase">
            Chapters of <br />
            <span className="italic font-serif-luxury text-white/70 font-light lowercase">sensory permanence.</span>
          </h1>
          <p className="text-xs sm:text-[14px] text-white/40 leading-relaxed font-sans font-light tracking-wide max-w-lg pt-2">
            Historical documents showcasing raw material weight, meticulous handcraft, and family legacy.
          </p>
        </div>
      </section>

      {/* CAMPAIGN DOCUMENTS */}
      <div className="space-y-32 sm:space-y-48">
        {campaigns.map((camp, index) => {
          return (
            <div 
              key={camp.id} 
              id={`campaign-section-${camp.id}`}
              className="relative"
            >
              {/* Campaign Identifier Line */}
              <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 mb-10 flex items-center justify-between text-[11px] font-mono text-white/40 border-b border-white/5 pb-4">
                <span>{camp.chapter} &bull; COMPOSITION</span>
                <span className="tracking-widest">{camp.subTitle}</span>
              </div>

              {camp.layout === 'full-width' && (
                <div className="space-y-12">
                  {/* Full screen cinematic visual */}
                  <div className="w-full aspect-[21/9] sm:aspect-[24/10] bg-[#080808] border-y border-white/5 relative overflow-hidden group">
                    <img
                      src={camp.image}
                      alt={`${camp.title} luxury campaign high definition photograph`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.05] group-hover:scale-101 transition-transform duration-[3000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-6 left-6 sm:left-12 font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase">
                      {camp.citation}
                    </div>
                  </div>

                  {/* Poetic description spread underneath */}
                  <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-16 text-left">
                      <div className="lg:col-span-6 space-y-4">
                        <h3 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-tight">
                          {camp.title}
                        </h3>
                        <p className="font-sans text-xs sm:text-[14.5px] text-white/50 leading-relaxed font-light tracking-wide">
                          {camp.tagline}
                        </p>
                      </div>
                      <div className="lg:col-span-6 space-y-6 lg:pt-3">
                        <p className="text-xs sm:text-[13.5px] text-white/40 leading-relaxed font-sans font-light">
                          {camp.description}
                        </p>
                        <div className="pt-2">
                          {camp.id === 'custom-jewellery' ? (
                            <button
                              onClick={() => {
                                onNavigate('custom-jewellery');
                              }}
                              className="text-white hover:text-[#A68F6B] text-[10px] font-mono tracking-[0.35em] uppercase pb-1 border-b border-white/20 transition-colors cursor-pointer"
                            >
                              LAUNCH INTERACTIVE BLUEPRINT &rarr;
                            </button>
                          ) : (
                            <button
                              onClick={() => {
                                onCollectionSelect(camp.id);
                              }}
                              className="text-white hover:text-[#A68F6B] text-[10px] font-mono tracking-[0.35em] uppercase pb-1 border-b border-white/20 transition-colors cursor-pointer"
                            >
                              DISCOVER THE CAMPAIGN INDEX &rarr;
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {camp.layout === 'split-left' && (
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-center">
                    
                    {/* Visual left */}
                    <div className="lg:col-span-7">
                      <div className="relative aspect-[3/4] bg-[#080808] border border-white/5 overflow-hidden group">
                        <img
                          src={camp.image}
                          alt={`${camp.title} campaign portrait visual`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05] group-hover:scale-101 transition-transform duration-[3000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />
                        <span className="absolute bottom-6 left-6 font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">
                          {camp.citation}
                        </span>
                      </div>
                    </div>

                    {/* Content right */}
                    <div className="lg:col-span-5 space-y-6 text-left">
                      <span className="font-mono text-[9px] tracking-[0.4em] text-[#A68F6B] uppercase block">
                        THE ARTISANAL CHRONICLE
                      </span>
                      <h3 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-tight">
                        {camp.title}
                      </h3>
                      <p className="text-xs sm:text-[14.5px] text-white/50 leading-relaxed font-sans font-light tracking-wide">
                        {camp.tagline}
                      </p>
                      <p className="text-xs sm:text-[13.5px] text-white/40 leading-relaxed font-sans font-light">
                        {camp.description}
                      </p>
                      <div className="pt-4">
                        {camp.id === 'custom-jewellery' ? (
                          <button
                            onClick={() => {
                              onNavigate('custom-jewellery');
                            }}
                            className="text-white hover:text-[#A68F6B] text-[10px] font-mono tracking-[0.35em] uppercase pb-1 border-b border-white/20 transition-colors cursor-pointer"
                          >
                            LAUNCH ATELIER SERVICE &rarr;
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              onCollectionSelect(camp.id);
                            }}
                            className="text-white hover:text-[#A68F6B] text-[10px] font-mono tracking-[0.35em] uppercase pb-1 border-b border-white/20 transition-colors cursor-pointer"
                          >
                            INTERIOR ARCHIVES &rarr;
                          </button>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {camp.layout === 'split-right' && (
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-center">
                    
                    {/* Content left */}
                    <div className="lg:col-span-5 space-y-6 text-left lg:order-1 order-2">
                      <span className="font-mono text-[9px] tracking-[0.4em] text-[#A68F6B] uppercase block">
                        THE ARCHITECTURAL PROOF
                      </span>
                      <h3 className="font-serif text-3xl sm:text-5xl font-light text-white uppercase tracking-tight">
                        {camp.title}
                      </h3>
                      <p className="text-xs sm:text-[14.5px] text-white/50 leading-relaxed font-sans font-light tracking-wide">
                        {camp.tagline}
                      </p>
                      <p className="text-xs sm:text-[13.5px] text-white/40 leading-relaxed font-sans font-light">
                        {camp.description}
                      </p>
                      <div className="pt-4">
                        {camp.id === 'custom-jewellery' ? (
                          <button
                            onClick={() => {
                              onNavigate('custom-jewellery');
                            }}
                            className="text-white hover:text-[#A68F6B] text-[10px] font-mono tracking-[0.35em] uppercase pb-1 border-b border-white/20 transition-colors cursor-pointer"
                          >
                            LAUNCH INTERACTIVE CUSTOMIZER &rarr;
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              onCollectionSelect(camp.id);
                            }}
                            className="text-white hover:text-[#A68F6B] text-[10px] font-mono tracking-[0.35em] uppercase pb-1 border-b border-white/20 transition-colors cursor-pointer"
                          >
                            VIEW ENTIRE COMPILATION &rarr;
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Visual right */}
                    <div className="lg:col-span-7 lg:order-2 order-1">
                      <div className="relative aspect-[3/4] bg-[#080808] border border-white/5 overflow-hidden group">
                        <img
                          src={camp.image}
                          alt={`${camp.title} campaign portrait visual`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05] group-hover:scale-101 transition-transform duration-[3000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />
                        <span className="absolute bottom-6 left-6 font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">
                          {camp.citation}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* FOOTER CALL TO ACTION */}
      <section className="py-32 sm:py-48 text-center bg-[#030303] relative overflow-hidden mt-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
          
          <div className="space-y-6">
            <span className="font-mono text-xs tracking-[0.45em] text-white/40 uppercase block">
              RESERVED COMMISSIONS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-none">
              Inscribe Your <br />
              <span className="font-serif italic font-light text-white/70">Akurana Token</span>
            </h2>
            <p className="text-xs sm:text-[14.5px] text-white/50 leading-relaxed font-sans font-light tracking-wide max-w-xl mx-auto pt-2">
              Whether you are preparing a traditional Kandyan necklace array or a bespoke engagement diamond, your design begins with a physical appointment. Our consultation chambers are fully private.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 max-w-md mx-auto">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/80 transition-colors font-sans cursor-pointer"
            >
              BOOK PRIVATE CONSULTATION &rarr;
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white text-[10px] tracking-[0.3em] uppercase font-mono hover:bg-white/5 transition-all text-center cursor-pointer"
            >
              SALON CONTACT CODES
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
