import { useState, useEffect } from 'react';
import { ArrowUpRight, Compass, ShieldCheck, HelpCircle, Star } from 'lucide-react';
import { MasterpieceItem } from '../types';
import PageHeader from './PageHeader';
import { bridal, gemstone, goldSmelt, hero, ring, weddingBands } from '../imageAssets';

interface CollectionDetailPageProps {
  collectionId: string;
  onNavigate: (page: string) => void;
  onProductClick: (product: MasterpieceItem) => void;
  onBookClick: () => void;
}

export default function CollectionDetailPage({ collectionId, onNavigate, onProductClick, onBookClick }: CollectionDetailPageProps) {
  // Back to top on mount or when collection changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [collectionId]);

  // Premium narrative campaign database
  const campaigns: Record<string, {
    id: string;
    title: string;
    chapter: string;
    subTitle: string;
    tagline: string;
    essay: string;
    quote: string;
    citation: string;
    image: string;
    inspiration: {
      title: string;
      text: string;
      quote: string;
    };
    craftsmanship: {
      title: string;
      desc: string;
      metric: string;
      metricLabel: string;
    };
    items: {
      id: string;
      name: string;
      desc: string;
      metal: string;
      weight: string;
      image: string;
      purity: string;
      specs: { metal: string; weight: string; gems: string };
    }[];
  }> = {
    'col-1': {
      id: 'col-1',
      title: 'Bridal Elegance',
      chapter: 'CAMPAIGN I',
      subTitle: 'THE AUSPICIOUS SEVEN-TIER ENSEMBLES',
      tagline: 'Architectural 22k gold necklaces shaped to capture generations of familial grace.',
      essay: 'Operating under rigorous historical criteria, each wedding assemblage represents a continuous multi-layered choreography. The traditional Kandyan Seven Chains are forged not as separate ornaments, but as a singular aesthetic landscape that aligns with the bride’s precise silhouette. Every link is calibrated to absorb the dynamic weight of the sacred wedding morning.',
      quote: '“To wear the seven traditional layers is to carry the physical, unbreakable rhythm of ancestors into a modern union.”',
      citation: 'NK SPECIFICATION ARCHIVE &bull; REF 01',
      image: bridal,
      inspiration: {
        title: "Kandyan Royal Regalia",
        text: "The geometry of our bridal chokers is inherited from the historic archives of the Hill Country. Each petal motif is individually drafted, resisting modern commercial shortcuts to preserve the authentic heavy look favored by provincial rulers since the late 18th century.",
        quote: "Handcrafted under natural light inside our regional Akurana studio."
      },
      craftsmanship: {
        title: "The Auspicious Alignment",
        desc: "Each chain is processed separately using certified 22-carat gold, hand-soldered point-by-point to ensure flexible motion along the chest. It is a process requiring over 140 continuous hours of concentration.",
        metric: "140 hrs",
        metricLabel: "OF SINGLE-COURT GOLD SMELTING"
      },
      items: [
        {
          id: 'mast-3',
          name: 'The Ratnapura Golden Bloom Choker',
          desc: 'An imposing traditional centerpiece. Concentric gold filigree petals radiate in perfect symmetry, carrying a historical weight polished to a deep velvet shine.',
          metal: '22k Pure Yellow Gold',
          weight: '112.5 Grams Assay Gold',
          image: bridal,
          purity: '22k Pure Sri Lankan Assay Gold',
          specs: { metal: '22k Pure Yellow Gold', weight: '112.5 Grams Assay Gold', gems: 'Gold filigree work' }
        },
        {
          id: 'mast-4',
          name: 'The Dynasty Emerald Solitaire',
          desc: 'A striking Colombian emerald hand-framed by a double-braided continuous yellow gold border, finished with classic hand-hammered textures.',
          metal: '22k Traditional Gold',
          weight: '6.2ct Emerald, 22g Gold',
          image: goldSmelt,
          purity: '22k Traditional Gold / Certified Colombian Gem',
          specs: { metal: '22k Traditional Gold', weight: '6.2ct Emerald, 22g Gold', gems: 'Rare Colombian Gem' }
        }
      ]
    },
    'col-2': {
      id: 'col-2',
      title: 'Diamond Creations',
      chapter: 'CAMPAIGN II',
      subTitle: 'THE CELESTIAL SOLID STATE RINGS',
      tagline: 'Internationally certified brilliants held in low-profile platinum claws.',
      essay: 'We reject the chaotic distribution of generic stones. Our diamonds represent the absolute maximum of geometric cuts—specifically Antwerp triple-excellent shapes selected for explosive fire. These brilliants are mounted in silent, minimal frameworks that expose the diamond to natural light, turning crystalline mathematics into intense fire.',
      quote: '“True luxury lies not in the size of the stone, but in the speed with which it translates low-source light into structural color.”',
      citation: 'GIA CERTIFIED ARCHIVE &bull; REF 02',
      image: ring,
      inspiration: {
        title: "Antwerp Precision Principles",
        text: "The setting claws are sculpted individually out of raw platinum bullion. Rather than using pre-cast templates, we mount each stone under high-magnification lens structures, assuring lifelong retention and flawless table-facets alignment.",
        quote: "No two diamonds sharing similar refraction weight are ever placed side-by-side."
      },
      craftsmanship: {
        title: "Cold Platinum Working",
        desc: "Because platinum resistance is incredibly high, our master setters hand-shape the claws to achieve a flush, non-snagging profile. It is the gold standard of high-jewellery mechanics.",
        metric: "0.01mm",
        metricLabel: "CLAW-TO-FACET FITTING SEPARATION"
      },
      items: [
        {
          id: 'mast-1',
          name: 'The Sovereign Ceylon Sapphire Ring',
          desc: 'A rare royal-blue cushion-cut Sri Lankan sapphire flanked by brilliant-cut diamonds inside a custom-etched cold-forged platinum frame.',
          metal: 'Platinum 950 Imperial',
          weight: '8.5ct Sapphire, 1.4ct Dia',
          image: gemstone,
          purity: 'Platinum 950 Imperial / GIA Certified',
          specs: { metal: 'Platinum 950', weight: '8.5ct Sapphire, 1.4ct Dia', gems: 'Unheated Sapphire' }
        },
        {
          id: 'mast-2',
          name: 'The Empress Queen Diamond Tiara',
          desc: 'A structural white gold lattice holding pear and marquise cut diamonds, designed to mirror natural crown arrays under ceremonial lighting.',
          metal: '18k Imperial White Gold',
          weight: '44.8 Carats Total Diamond',
          image: hero,
          purity: '18k Imperial White Gold / GIA Triple Excellent',
          specs: { metal: '18k Solid White Gold', weight: '44.8 Carats Total Diamond', gems: 'Intense Flawless diamonds' }
        }
      ]
    },
    'col-3': {
      id: 'col-3',
      title: 'Signature Gold',
      chapter: 'CAMPAIGN III',
      subTitle: 'THE PURE 916 FILIGREE CABINETS',
      tagline: 'Exquisite 22-carat gold wirework shaped entirely by artistic memory.',
      essay: 'We believe gold carries its own language. Our 22k pure Sri Lankan gold is hammered, drawn down into hair-thin wire filaments, and coiled into traditional patterns inside our Akurana studio. This is a manual art requiring intense patience, preserving a forty-five-year legacy of uncompromised material weight.',
      quote: '“Memory is our finest tool. In reproducing ancient filigree, the hands remember what the digital machine can never feel.”',
      citation: 'AKURANA SMITHY STANDARD &bull; REF 03',
      image: hero,
      inspiration: {
        title: "The Pure 916 Standard",
        text: "We reject the dilution of yellow gold with cheaper copper alloys. Every piece retains the deep, warm, almost velvet yellow weight that is the defining marker of timeless South Asian heirloom gold.",
        quote: "Assayed and sealed under official national hallmark parameters."
      },
      craftsmanship: {
        title: "Hand-Drawn Filaments",
        desc: "Each individual line in the filigree pattern must be matched for symmetry by eye. The goldsmith melts the metal and draws it down through diminishing dye-holes to achieve perfect filament diameter.",
        metric: "0.2mm",
        metricLabel: "GOLD FILAMENT HAIR SIZES"
      },
      items: [
        {
          id: 'mast-3',
          name: 'The Ratnapura Golden Bloom Choker',
          desc: 'A breathtaking demonstration of traditional Galle filigree petal-shaping, built entirely with 916 assayed yellow gold.',
          metal: '22k Pure Yellow Gold',
          weight: '112.5 Grams Assay Gold',
          image: bridal,
          purity: '22k Pure Sri Lankan Assay Gold',
          specs: { metal: '22k Pure Yellow Gold', weight: '112.5 Grams Assay Gold', gems: 'Gold filigree work' }
        }
      ]
    },
    'col-4': {
      id: 'col-4',
      title: 'Gemstone Treasures',
      chapter: 'CAMPAIGN IV',
      subTitle: 'DEPHTS OF UNHEATED CEYLON MINERALS',
      tagline: 'Sovereign Ratnapura sapphires selected for pristine, natural saturation.',
      essay: 'We maintain direct channels to regional mine sites in Ratnapura. Focusing heavily on rare, unheated cornflower and royal-blue Ceylon sapphires, we select stones that hold natural volcanic saturated colors without artificial heat modifications.',
      quote: '“A gemstone is a geological diary. To artificially heat it is to erase the natural story written millions of years ago in the earth’s crust.”',
      citation: 'RATNAPURA MINE OUTPOST &bull; REF 04',
      image: gemstone,
      inspiration: {
        title: "Ratnapura Saturated Hues",
        text: "Our experts select unheated gems representing only the top 1% of color saturation. Each raw crystal is cut with asymmetrical step-facets to enhance natural refraction without diminishing the original carat size.",
        quote: "Sourced directly inside the alluvial gravel channels of the island."
      },
      craftsmanship: {
        title: "Asymmetrical Step-Cutting",
        desc: "Standard lapidaries cut gems to fit uniform settings. We do the opposite: we shape a unique setting to cradle the gemstone's natural volcanic shape, maximizing geological presence.",
        metric: "100%",
        metricLabel: "UNHEATED AND GEOLOGICALLY PURE STATUS"
      },
      items: [
        {
          id: 'mast-1',
          name: 'The Sovereign Ceylon Sapphire Ring',
          desc: 'A gorgeous cushion royal blue sapphire mounted on platinum, flanked by two highly refractive triangular diamonds.',
          metal: 'Platinum 950 Imperial',
          weight: '8.5ct Sapphire, 1.4ct Dia',
          image: gemstone,
          purity: 'Platinum 950 Imperial / GIA Certified',
          specs: { metal: 'Platinum 950', weight: '8.5ct Sapphire, 1.4ct Dia', gems: 'Unheated Sapphire' }
        }
      ]
    },
    'col-5': {
      id: 'col-5',
      title: 'Wedding Bands',
      chapter: 'CAMPAIGN V',
      subTitle: 'THE UNBROKEN CONTINUOUS MOLDS',
      tagline: 'Undecorated bands forged of single-pour precious compounds.',
      essay: 'A marriage band has no starting point and no termination. Inside our quiet Akurana workshop, each ring represents a single, continuous pour of liquid metal—platinum, yellow gold or white gold. Highly balanced, weighted, and designed to sit flush against the skin for decades.',
      quote: '“Simplicity is the most difficult achievement. Without decorative filigree to distract the eye, the finish of the metal must be flawless.”',
      citation: 'SINGLE POUR REGISTRY &bull; REF 05',
      image: weddingBands,
      inspiration: {
        title: "The Circle of Solitude",
        text: "Each ring is forged from a unified metal billet. By avoiding structural solder seams, we produce bands that retain perfect circular balance, remaining resilient to the abrasive friction of daily life across decades.",
        quote: "Polished to a velvet mirror-surface by hand using natural leather buffs."
      },
      craftsmanship: {
        title: "Continuous Mold Casting",
        desc: "Each couple's rings are cast inside the same localized furnace heat, binding their material origin together in a silent, permanent elemental lineage.",
        metric: "0 joints",
        metricLabel: "COMPLETELY SEAMLESS HEIRLOOM ANATOMY"
      },
      items: [
        {
          id: 'mast-5',
          name: 'The Sovereign Seamless Bands',
          desc: 'Thick, continuous-pour platinum bands featuring comfort-fit inner profiling and a hand-polished matte oyster skin finish.',
          metal: 'Platinum 950',
          weight: '18.4 Grams Solid Platinum',
          image: weddingBands,
          purity: 'Platinum 950 Seamless Standard',
          specs: { metal: 'Platinum 950', weight: '18.4g Platinum', gems: 'None' }
        }
      ]
    }
  };

  const currentCamp = campaigns[collectionId] || campaigns['col-1'];

  return (
    <div id="campaign-detail-document-view" className="bg-[#030303] text-white min-h-screen relative overflow-hidden font-sans pb-24 text-left">
      
      {/* Dynamic Background Spotting */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none" />

      <PageHeader onBack={() => onNavigate('collections')} />

      {/* 1. CINEMATIC FULL-SCREEN LANDSCAPE HERO */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full bg-[#0a0a0a] border border-white/5 overflow-hidden group">
          <img
            src={currentCamp.image}
            alt={`${currentCamp.title} editorial campaign header`}
            referrerPolicy="referrer"
            className="w-full h-full object-cover filter brightness-[0.55] contrast-[1.05] transition-transform duration-[3000ms] group-hover:scale-101"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-90" />
          
          <div className="absolute bottom-8 left-6 sm:left-12 space-y-2">
            <span className="font-mono text-[9px] tracking-[0.35em] text-[#A68F6B] uppercase block">ORIGIN SEAL ARTIFACT</span>
            <p className="font-serif text-xl sm:text-3xl text-white font-light uppercase tracking-wide">
              {currentCamp.subTitle}
            </p>
          </div>

          <div className="absolute top-8 right-8 font-mono text-[9px] text-white/25 uppercase tracking-widest">
            {currentCamp.citation}
          </div>
        </div>
      </section>

      {/* 2. THE EDITORIAL NARRATIVE (COLLECTION ESSAY) */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24 items-start pb-20 border-b border-white/5">
          
          {/* Main Titles */}
          <div className="lg:col-span-8 space-y-6">
            <span className="font-mono text-[9px] tracking-[0.45em] text-white/40 uppercase block">THE MANIFESTO</span>
            <h1 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-white uppercase leading-none">
              {currentCamp.title}
            </h1>
            <p className="text-xl sm:text-2xl font-serif italic font-light text-white/70 tracking-wide pt-2">
              {currentCamp.tagline}
            </p>
          </div>

          {/* Deep Essay Paragraphs */}
          <div className="lg:col-span-4 space-y-6 lg:pt-16">
            <p className="text-xs sm:text-[14px] text-white/50 leading-relaxed font-sans font-light tracking-wide">
              {currentCamp.essay}
            </p>
            <p className="font-serif text-xs sm:text-[14px] italic text-[#A68F6B] leading-relaxed font-light">
              {currentCamp.quote}
            </p>
          </div>

        </div>
      </section>

      {/* 3. CRAFTSMANSHIP & STAT METRICS SECTION */}
      <section className="py-24 sm:py-36 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24 items-center">
          
          {/* Massive Metric Block */}
          <div className="lg:col-span-4 text-left">
            <span className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase block mb-2">PRECISION PROOF</span>
            <span className="font-serif text-[clamp(4.5rem,10vw,8.5rem)] font-light leading-none tracking-tighter text-white/10 block select-none">
              {currentCamp.craftsmanship.metric}
            </span>
            <p className="font-mono text-[9px] tracking-widest text-[#A68F6B] uppercase pt-2">
              {currentCamp.craftsmanship.metricLabel}
            </p>
          </div>

          {/* Explanation Text */}
          <div className="lg:col-span-8 space-y-6 lg:pl-12">
            <span className="font-mono text-[10px] tracking-[0.35em] text-white/40 uppercase block">
              THE WORKSHOP CHRONICLE
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-white uppercase tracking-tight">
              {currentCamp.craftsmanship.title}
            </h3>
            <p className="text-xs sm:text-[14.5px] text-white/50 leading-relaxed font-sans font-light tracking-wide">
              {currentCamp.craftsmanship.desc}
            </p>
          </div>

        </div>
      </section>

      {/* 4. INSPIRATION & GEOLOGY SEGMENT */}
      <section className="py-12 sm:py-16 bg-[#020202] border-y border-white/5 text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <span className="font-mono text-[9px] tracking-[0.45em] text-white/40 uppercase block">
            GEOLOGICAL INSPIRATION
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-light text-white uppercase tracking-tight">
            {currentCamp.inspiration.title}
          </h3>
          <p className="text-xs sm:text-[15px] text-white/50 leading-relaxed font-sans font-light tracking-wide max-w-2xl mx-auto">
            {currentCamp.inspiration.text}
          </p>
          <div className="w-12 h-[1px] bg-white/15 mx-auto" />
          <p className="font-serif text-xs italic text-[#A68F6B] font-light">
            {currentCamp.inspiration.quote}
          </p>
        </div>
      </section>

      {/* 5. MASTERPIECE DOSSIERS (EDITORIAL LAYOUT - NO CARDS) */}
      <section className="py-36 sm:py-48 lg:py-56 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="max-w-2xl mb-24 sm:mb-32 text-left">
          <span className="font-mono text-[10px] tracking-[0.45em] text-white/40 uppercase block mb-4">THE DIRECTORY</span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-white uppercase leading-none">
            Featured <br />
            <span className="font-serif italic font-light text-white/70">Masterpieces</span>
          </h2>
        </div>

        {/* Alternate Column Storytelling Rows */}
        <div className="space-y-36 sm:space-y-56">
          {currentCamp.items.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div 
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24 items-center"
              >
                {/* Photo box */}
                <div className={`lg:col-span-7 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] bg-[#0a0a0a] border border-white/5 overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.05] group-hover:scale-102 transition-transform duration-[3000ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
                    
                    <span className="absolute bottom-6 left-6 font-mono text-[9px] tracking-[0.25em] text-white/30 uppercase">
                      NK ARCHIVE &bull; RECORD No. 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className={`lg:col-span-5 ${isLeft ? 'lg:order-2' : 'lg:order-1'} space-y-6 text-left lg:px-6`}>
                  <span className="font-mono text-[10px] tracking-[0.35em] text-white/40 uppercase block">
                    {item.purity}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-white uppercase tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-[14px] text-white/50 leading-relaxed font-sans font-light tracking-wide">
                    {item.desc}
                  </p>

                  <div className="pt-4 border-t border-white/10 space-y-3 font-mono text-[11px] text-white/40">
                    <div className="flex justify-between">
                      <span className="tracking-widest uppercase">NET WEIGHT</span>
                      <strong className="text-white font-medium">{item.specs.weight}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="tracking-widest uppercase">ALLOY COMPOSITION</span>
                      <strong className="text-white font-medium">{item.specs.metal}</strong>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={() => onProductClick(item as any)}
                      className="inline-flex items-center gap-2 text-white hover:text-[#A68F6B] text-[10px] font-mono tracking-[0.35em] uppercase pb-2 border-b border-white/20 transition-all cursor-pointer"
                    >
                      <span>VIEW FULL ART HISTORICAL DOSSIER</span> <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. RELATED CAMPAIGNS BAR */}
      <section className="py-12 sm:py-16 border-t border-white/5 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12">
          <div className="text-left">
            <span className="font-mono text-[9px] tracking-[0.45em] text-white/40 uppercase block">THE SYSTEM ARCHIVE</span>
            <h3 className="font-serif text-2xl text-white uppercase tracking-tight">Alternate Campaigns</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {Object.values(campaigns).filter(c => c.id !== collectionId).slice(0, 4).map((c) => (
            <div
              key={c.id}
              onClick={() => onNavigate(`collection-detail:${c.id}`)}
              className="group cursor-pointer space-y-4 text-left"
            >
              <div className="relative aspect-[4/3] bg-[#0a0a0a] border border-white/5 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-[0.7] group-hover:scale-102 transition-all duration-[1500ms]"
                />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[9px] tracking-[0.25em] text-white/40 uppercase block">
                  {c.chapter}
                </span>
                <p className="font-serif text-sm text-white uppercase tracking-wider group-hover:text-[#A68F6B] transition-colors">
                  {c.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. PRIVATE CONSULTATION CTA */}
      <section className="py-24 sm:py-36 bg-[#030303] text-center relative overflow-hidden mt-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
          
          <div className="space-y-6">
            <span className="font-mono text-xs tracking-[0.45em] text-white/40 uppercase block">
              PRIVATE REGISTRY
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-none">
              Consult the <br />
              <span className="font-serif italic font-light text-white/70">Atelier Goldsmiths</span>
            </h2>
            <p className="text-xs sm:text-[14.5px] text-white/50 leading-relaxed font-sans font-light tracking-wide max-w-xl mx-auto pt-2">
              We welcome families inside our private consulting chamber in Akurana. Collaborate with the craftsmen to configure and balance your gold weights in an state of absolute hospitality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 max-w-md mx-auto">
            <button
              onClick={onBookClick}
              className="w-full sm:w-auto px-8 py-4 bg-white text-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white/80 transition-colors font-sans cursor-pointer"
            >
              REQUEST ENTRY ARRANGEMENTS
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white text-[10px] tracking-[0.3em] uppercase font-mono hover:bg-white/5 transition-all text-center cursor-pointer"
            >
              DIALING DIRECTORY
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
