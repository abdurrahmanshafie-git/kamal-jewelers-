import { useState, useRef, MouseEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Heart, ShieldCheck, Award, MessageCircle, Phone, Sparkles, ZoomIn, ZoomOut, Compass, FileText, Anchor } from 'lucide-react';
import { MasterpieceItem } from '../types';
import PageHeader from './PageHeader';

interface ProductDetailPageProps {
  product: MasterpieceItem;
  onNavigate: (page: string) => void;
  onBookClick: () => void;
  onProductClick?: (product: MasterpieceItem) => void;
}

export default function ProductDetailPage({ product, onNavigate, onBookClick, onProductClick }: ProductDetailPageProps) {
  const [loved, setLoved] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [zoomScale, setZoomScale] = useState(2.5);
  const [isZooming, setIsZooming] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: '0% 0%', transform: 'scale(1)' });
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setActiveImageIndex(0);
  }, [product.id]);

  // Supplementary high-definition photo assets representing luxury magazine spreads
  const productSupplementaryImages: Record<string, string[]> = {
    'mast-1': [
      '/src/assets/images/gemstone.webp', // Royal Blue Crystal
      '/src/assets/images/ring.webp', // Diamond Facet Macro
      '/src/assets/images/craftsmanship.webp' // Forge Drafting Blueprint
    ],
    'mast-2': [
      '/src/assets/images/hero.webp', // Main Queen Lattice
      '/src/assets/images/showroom.webp', // Premium Velvet Display Case
      '/src/assets/images/wedding_bands.webp' // Royal Ring Set Detail
    ],
    'mast-3': [
      '/src/assets/images/bridal.webp', // Grand Traditional Choker
      '/src/assets/images/craftsmanship.webp', // Artisan Hammer wirework Closeup
      '/src/assets/images/gold_smelt.webp' // Heavy raw gold smelt focus
    ],
    'mast-4': [
      '/src/assets/images/gold_smelt.webp', // Big Solitaire Close
      '/src/assets/images/hero.webp', // Gold filigree micro joints
      '/src/assets/images/showroom.webp' // Studio fitting room view
    ]
  };

  // Pre-configured rich documentary logs for each masterpiece
  const productChronicles: Record<string, {
    chronology: string;
    narrativeTitle: string;
    narrativeBody: string;
    provenance: string;
    goldsmithHours: string;
    forgeTemperature: string;
    assayRegistryCode: string;
  }> = {
    'mast-1': {
      chronology: 'FOUNDRY ARCHIVE &bull; REF NO. NK-0925',
      narrativeTitle: 'The Cold-Plated Blue Sovereign',
      narrativeBody: 'Discovered in the secondary gravel matrices of the Ratnapura valley, the central sapphire represents geological stillness of almost unmeasurable age. It holds a classic cornflower blue, entirely untouched by heat treatments or clarifying modifications. Placed in a high-profile structural frame crafted from raw platinum ingots, this piece mimics the royal ornaments delivered to Kandy in the late 18th century, but with Belgian geometric cut precision.',
      provenance: 'Alluvial Beds of Ratnapura, Kandy Region',
      goldsmithHours: '86 Hours',
      forgeTemperature: '1,770 °C (Platinum Smelt)',
      assayRegistryCode: 'NK-LK-PLAT-0925'
    },
    'mast-2': {
      chronology: 'FOUNDRY ARCHIVE &bull; REF NO. NK-1844',
      narrativeTitle: 'The Cascading Dynasty Crown',
      narrativeBody: 'Formulated to reflect the crown regalia of historic Hill Country principalities. Over forty-four carats of brilliant-cut diamonds are mounted on a seamless white gold trellis. Every single joint has been micro-brazed under professional magnification to eliminate visual supports, giving the impression that light floats directly over the wearer’s silhouette. It is an unmatchable masterpiece reserved for high royal events.',
      provenance: 'Antwerp Consolidated GIA Standard Archive',
      goldsmithHours: '240 Hours',
      forgeTemperature: '1,064 °C (White Gold)',
      assayRegistryCode: 'NK-LK-GOLD-1844'
    },
    'mast-3': {
      chronology: 'FOUNDRY ARCHIVE &bull; REF NO. NK-0311',
      narrativeTitle: 'The Pure 916 Akurana Bloom',
      narrativeBody: 'Formed from natural gold drawn into wires thinner than human hair. Under intense natural light, our master artisan coaxed concentric gold petals to spread in a perfectly circular filigree frame. There are no computer molds or printed plates utilized; its weight is entirely traditional, ensuring that the heavy yellow gold sits as a solid sovereign token around the bride’s throat.',
      provenance: 'Akurana Private Guild Atelier, Sri Lanka',
      goldsmithHours: '120 Hours',
      forgeTemperature: '1,064 °C (Standard Yellow)',
      assayRegistryCode: 'NK-LK-22K-0311'
    },
    'mast-4': {
      chronology: 'FOUNDRY ARCHIVE &bull; REF NO. NK-1359',
      narrativeTitle: 'The Bezel-Mounted Dynasty Solitaire',
      narrativeBody: 'Centering an exceptional Colombian emerald of deep forest saturation, this solitaire ring is forged with 22-carat gold and finished with vintage, hand-beated hammering details along the shank. The bezel is custom-formed to follow the organic crystal steps of the raw mineral, preventing any chemical tension from disturbing the emerald’s structural integrity.',
      provenance: 'Muzo Cordillera Mine, GIA Registered',
      goldsmithHours: '64 Hours',
      forgeTemperature: '1,064 °C (Assay Gold)',
      assayRegistryCode: 'NK-LK-22K-1359'
    }
  };

  const currentSupplementary = productSupplementaryImages[product.id] || [
    product.image,
    '/src/assets/images/ring.webp'
  ];

  const currentChronicle = productChronicles[product.id] || {
    chronology: `MASTERPIECE DOSSIER &bull; ID NK-${product.id.toUpperCase()}`,
    narrativeTitle: product.name,
    narrativeBody: product.description,
    provenance: 'Sri Lanka Government Hallmarked Standard',
    goldsmithHours: '94 Hours of Handwork',
    forgeTemperature: '1,064 °C Refined Heat',
    assayRegistryCode: `NK-${product.id.toUpperCase()}-GIA`
  };

  // Similar masterpieces definition
  const allMasterpieces: MasterpieceItem[] = [
    {
      id: 'mast-1',
      name: 'The Sovereign Ceylon sapphire Ring',
      category: 'Exclusive',
      price: 'LKR 4,500,000',
      rating: 5.0,
      image: '/src/assets/images/gemstone.webp',
      purity: 'Platinum 950 Imperial Spec',
      description: 'Centering an extraordinary royal blue cushion-cut Ceylon sapphire from the depths of Ratnapura, flanked by rare triangular white brilliant-cut diamonds inside an intricately micro-engraved absolute platinum tier.',
      specs: {
        metal: 'Platinum 950',
        weight: '8.5ct Sapphire, 1.4ct Dia',
        gems: 'Unheated Sapphire'
      }
    },
    {
      id: 'mast-2',
      name: 'The Empress Queen Diamond tiara',
      category: 'Diamond',
      price: 'LKR 18,000,000',
      rating: 5.0,
      image: '/src/assets/images/hero.webp',
      purity: '18k Imperial White Gold / GIA Cert',
      description: 'Inspired by historical crowns of the royal Kandyan dynasty. A breathtaking lattice of 142 marquise and pear-cut diamonds creating a cascading water-drop refraction framework.',
      specs: {
        metal: '18k Solid White Gold',
        weight: '44.8 Carats Total Diamond',
        gems: 'Triple Excellent Diamonds'
      }
    },
    {
      id: 'mast-3',
      name: 'The Ratnapura Golden Bloom Choker',
      category: 'Classic Gold',
      price: 'LKR 1,800,000',
      rating: 4.9,
      image: '/src/assets/images/bridal.webp',
      purity: '22k Pure Sri Lankan gold',
      description: 'A masterpiece created over 120 painstaking hours by a senior master craftsman. Heavy traditional filigree petals radiating in perfect concentric geometry, honoring historic designs.',
      specs: {
        metal: '22k Pure Yellow Gold',
        weight: '112.5 Grams Assay Gold',
        gems: 'Gold Filigree Work'
      }
    },
    {
      id: 'mast-4',
      name: 'The Dynasty Emerald Solitaire',
      category: 'Bridal',
      price: 'LKR 3,820,000',
      rating: 5.0,
      image: '/src/assets/images/gold_smelt.webp',
      purity: '22k Gold / Certified Gem',
      description: 'An imposing raw glowing Colombian emerald, bezel-set into a heavy handcrafted traditional double loop gold structure with subtle vintage hand-beating marks.',
      specs: {
        metal: '22k Traditional Gold',
        weight: '6.2ct Emerald, 22g Gold',
        gems: 'Colombian Emerald'
      }
    }
  ];

  const similarPieces = allMasterpieces.filter(m => m.id !== product.id);

  // Mouse zoom tracking for the loupe frame
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({
      transformOrigin: `${x}% ${y}%`,
      transform: `scale(${zoomScale})`
    });
  };

  const handleMouseEnter = () => {
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
    setZoomStyle({
      transformOrigin: '50% 50%',
      transform: 'scale(1)'
    });
  };

  // WhatsApp formatted string generator
  const getWhatsAppLink = () => {
    const message = `Hello, I am asking about your luxury masterpiece creation: ${product.name} (ID: NK-${product.id}). I am interested in exploring its exact weight, current customization potentials, and booking client entry at Kandy Salon.`;
    return `https://wa.me/94728866851?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="magazine-product-dossier" className="bg-[#030303] text-white min-h-screen relative overflow-hidden font-sans pb-24 text-left">
      
      {/* Dynamic graphic lighting glow */}
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.015),transparent_70%)] pointer-events-none" />

      <PageHeader onBack={() => onNavigate('collections')} />

      {/* 1. IMMERSIVE TWO-COLUMN EDITORIAL SHOWCASE (GALLERY WITH LOUPE ZOOM + SUMMARY STORY) */}
      <section className="py-24 sm:py-32 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-20 items-start">
          
          {/* LEFT: FULL FRAME IMMERSIVE GRAPHIC WITH INTERACTIVE POSITION ZOOM & ANGLE CHANGER */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Interactive Magnification Sandbox */}
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative aspect-[4/5] sm:aspect-[3/4] bg-[#0c0c0c] border border-white/5 overflow-hidden group cursor-crosshair"
            >
              <img
                src={currentSupplementary[activeImageIndex]}
                alt={`${product.name} macro details high-fidelity closeview`}
                referrerPolicy="no-referrer"
                style={zoomStyle}
                className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05] transition-transform duration-200 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Zoom indicators/Controls */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-black/80 border border-white/10 text-[9px] font-mono text-white/60 uppercase tracking-widest pointer-events-none">
                <ZoomIn className="w-3 h-3 text-[#A68F6B]" /> Hover image to zoom
              </div>

              {/* Heart icon button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLoved(!loved);
                }}
                className="absolute top-4 right-4 w-10 h-10 border border-white/5 bg-black/80 flex items-center justify-center text-white transition-colors hover:bg-black"
              >
                <Heart className={`w-4 h-4 ${loved ? 'fill-[#A68F6B] text-[#A68F6B]' : 'text-white/40'}`} />
              </button>

              {/* Angle Description Banner */}
              <span className="absolute bottom-4 left-4 font-mono text-[9px] text-white/30 tracking-widest uppercase">
                STUDIO ANGLE 0{activeImageIndex + 1} OF 0{currentSupplementary.length}
              </span>
            </div>

            {/* Micro Gallery Angle Connectors (Transitions) */}
            <div className="grid grid-cols-3 gap-4">
              {currentSupplementary.map((imgUrl, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImageIndex(i)}
                  className={`relative aspect-[4/3] bg-[#0a0a0a] border overflow-hidden transition-all duration-500 ${activeImageIndex === i ? 'border-[#A68F6B]' : 'border-white/5'}`}
                >
                  <img
                    src={imgUrl}
                    alt={`${product.name} angle thumbnail`}
                    referrerPolicy="no-referrer"
                    className={`w-full h-full object-cover filter brightness-[0.5] hover:brightness-[0.7] transition-all duration-300 ${activeImageIndex === i ? 'brightness-[0.75] scale-102' : ''}`}
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-2 right-2 text-[8px] font-mono text-white/30">LENS 0{i + 1}</span>
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT: NARRATIVE ARTIFACT DOSSIER & ACTIONS */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-36">
            
            <div className="space-y-4 text-left">
              <span className="font-mono text-[10px] tracking-[0.45em] text-[#A68F6B] uppercase block">
                {product.purity}
              </span>
              
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white uppercase leading-none">
                {product.name}
              </h1>

              <div className="pt-2 flex items-baseline justify-between border-b border-white/5 pb-4">
                <span className="text-[10px] text-white/30 tracking-widest uppercase font-mono">Curator Valuation Code</span>
                <span className="text-xl sm:text-2xl font-serif text-white font-light">{product.price}</span>
              </div>
            </div>

            {/* The Documentary Story block */}
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-[0.4em] text-white/40 uppercase block flex items-center gap-1.5">
                <FileText className="w-3 h-3 text-[#A68F6B]" /> EXECUTIVE CRITIQUE
              </span>
              <p className="text-xs sm:text-[14px] text-white/50 leading-relaxed font-sans font-light tracking-wide text-left">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Blueprint Table */}
            <div className="space-y-4 pt-6 border-t border-white/10 text-left">
              <span className="font-mono text-[10px] tracking-[0.45em] text-[#A68F6B] uppercase block mb-2">SPECIFICATIONS ATTESTMENT</span>
              
              <div className="grid grid-cols-2 gap-4 text-[11px] font-mono">
                <div className="border border-white/5 p-4 bg-[#080808]">
                  <span className="text-white/25 block uppercase tracking-[0.1em]">PRECIOUS ALLOY</span>
                  <strong className="text-white font-medium block mt-1.5">{product.specs.metal}</strong>
                </div>
                <div className="border border-white/5 p-4 bg-[#080808]">
                  <span className="text-white/25 block uppercase tracking-[0.1em]">NET GOLDMASS WEIGHT</span>
                  <strong className="text-white font-medium block mt-1.5">{product.specs.weight}</strong>
                </div>
                <div className="border border-white/5 p-4 bg-[#080808] col-span-2 flex items-center justify-between">
                  <div>
                    <span className="text-white/25 block uppercase tracking-[0.1em]">GEM INCLUSION SEAL</span>
                    <strong className="text-white font-medium block mt-1">{product.specs.gems || "Pure Solder Gold Filigree Only"}</strong>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-[#A68F6B]" />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6 text-left">
              <button
                onClick={onBookClick}
                className="w-full py-4.5 bg-white text-black text-[10px] tracking-[0.35em] uppercase font-bold hover:bg-white/80 transition-colors font-sans cursor-pointer text-center"
              >
                REQUEST SALON FITMENT SESSION
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 border border-white/10 hover:border-white/30 text-white text-[10px] font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-white/5 transition-all text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#A68F6B]" /> WHATSAPP INQUIRY
                </a>
                <a
                  href="tel:+94812300446"
                  className="py-3.5 border border-white/10 hover:border-white/30 text-white hover:text-white/75 text-[10px] font-mono uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-white/5 transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5" /> TELEPHONE SALON
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. THE CHRONICLE OF THE HANDS (PROVENANCE & DOCUMENTARY LOGISTICS) */}
      <section className="py-36 sm:py-48 bg-[#020202] border-y border-white/5 text-left">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24 items-start">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-[9px] tracking-[0.4em] text-white/40 uppercase block">
                {currentChronicle.chronology}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-light uppercase tracking-tight">
                {currentChronicle.narrativeTitle}
              </h2>
              <div className="w-12 h-[1px] bg-white/15" />
              <p className="text-xs sm:text-[13.5px] text-white/30 leading-relaxed font-sans font-light">
                New Kamal Jewellers protects the origin story. Every master commission undergoes independent spectrographic testing before final master sign-off inside Kandy Assay Room.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8 lg:pl-12">
              <p className="text-sm sm:text-base font-serif italic text-white/70 leading-relaxed font-light">
                &ldquo;{currentChronicle.narrativeBody}&rdquo;
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/5 font-mono text-[11px] text-white/40">
                <div>
                  <span className="text-white/20 block uppercase tracking-wider text-[9px]">SOURCE PROVENANCE</span>
                  <span className="text-white font-medium block mt-1.5">{currentChronicle.provenance}</span>
                </div>
                <div>
                  <span className="text-white/20 block uppercase tracking-wider text-[9px]">GOLDSMITH DIRECT HOURS</span>
                  <span className="text-white font-medium block mt-1.5">{currentChronicle.goldsmithHours}</span>
                </div>
                <div>
                  <span className="text-white/20 block uppercase tracking-wider text-[9px]">MAX FURNACE HEAT</span>
                  <span className="text-white font-medium block mt-1.5">{currentChronicle.forgeTemperature}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. SIMILAR PIECES (EDITORIAL CAMPAIGNS CONNECTOR - NO RECTILINEAR PRODUCTS GRID) */}
      <section className="py-36 sm:py-48 lg:py-56 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20 text-left">
        
        <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-16">
          <div className="space-y-1">
            <span className="font-mono text-[9px] tracking-[0.45em] text-white/40 uppercase block">LEGACY SIMILARS</span>
            <h3 className="font-serif text-2xl text-white uppercase tracking-tight">Alternate Chapters</h3>
          </div>
          <span className="font-mono text-[9px] text-white/25">REFRESHED 2026</span>
        </div>

        {/* Asymmetric magazine spreads */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16">
          {similarPieces.slice(0, 3).map((similar) => (
            <div
              key={similar.id}
              onClick={() => onProductClick && onProductClick(similar)}
              className="group cursor-pointer space-y-6 text-left"
            >
              <div className="relative aspect-[3/4] bg-[#0c0c0c] border border-white/5 overflow-hidden">
                <img
                  src={similar.image}
                  alt={similar.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.55] group-hover:brightness-[0.7] group-hover:scale-102 transition-all duration-[1200ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                <span className="absolute bottom-4 left-4 font-mono text-[8px] tracking-widest text-[#A68F6B] uppercase">
                  {similar.purity}
                </span>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase block">
                  CATEGORY &bull; {similar.category.toUpperCase()}
                </span>
                <p className="font-serif text-lg text-white uppercase tracking-wider group-hover:text-[#A68F6B] transition-colors leading-tight">
                  {similar.name}
                </p>
                <p className="text-xs text-white/40 font-mono">{similar.price}</p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 4. ATELIER SERVICES CTA */}
      <section className="py-24 sm:py-36 text-center bg-[#030303] relative overflow-hidden border-t border-white/5">
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
