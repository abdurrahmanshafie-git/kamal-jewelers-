import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye, X, Heart } from 'lucide-react';
import { CollectionItem, MasterpieceItem } from '../types';

interface MasterpiecesProps {
  onBookClick: () => void;
  onCollectionClick?: (id: string) => void;
  onProductClick?: (product: MasterpieceItem) => void;
  showCollections?: boolean;
}

export default function Masterpieces({ onBookClick, onCollectionClick, onProductClick, showCollections = true }: MasterpiecesProps) {
  const [selectedProduct, setSelectedProduct] = useState<MasterpieceItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lovedProducts, setLovedProducts] = useState<Record<string, boolean>>({});

  const imagePaths = {
    hero: "/src/assets/images/hero.webp",
    bridal: "/src/assets/images/bridal.webp",
    ring: "/src/assets/images/ring.webp",
    showroom: "/src/assets/images/showroom.webp",
    craftsmanship: "/src/assets/images/craftsmanship.webp"
  };

  const collections: CollectionItem[] = [
    {
      id: 'col-1',
      title: 'Bridal Collection',
      tagline: 'Imperial Maharani Designs',
      description: 'Opulent multi-layered chokers and cuffs designed with traditional motifs to crown her most sacred union with profound elegance.',
      image: imagePaths.bridal,
      count: '48 Pieces'
    },
    {
      id: 'col-2',
      title: 'Diamond Collection',
      tagline: 'High Refraction Brilliants',
      description: 'Globally certified D-Flawless perfect diamonds, precision cut by elite lapidaries to reflect absolute light.',
      image: imagePaths.ring,
      count: '32 Pieces'
    },
    {
      id: 'col-3',
      title: 'Gold Collection',
      tagline: '22k Golden Solstices',
      description: 'Prestige 22-carat pure Sri Lankan filigree gold created with weight, heritage, and majestic texture.',
      image: imagePaths.hero,
      count: '60 Pieces'
    },
    {
      id: 'col-4',
      title: 'Wedding Collection',
      tagline: 'The Eternal Promises',
      description: 'Splendid marriage bands, traditional wedding necklaces, and exquisite modern engagement tokens.',
      image: '/src/assets/images/wedding_bands.webp',
      count: '24 Couples Pairs'
    },
    {
      id: 'col-5',
      title: 'Exclusive Collection',
      tagline: 'One-of-One Couture',
      description: 'Unrepeatable bespoke artistic commissions curated in absolute confidence for private global collectors.',
      image: imagePaths.showroom,
      count: '12 Commissions Only'
    },
    {
      id: 'col-6',
      title: 'Custom Atelier',
      tagline: 'Your Legacy Manifested',
      description: 'Collaborate directly with master designers and state guild craftsmen to construct personalized family heirlooms.',
      image: imagePaths.craftsmanship,
      count: 'Bespoke Order'
    }
  ];

  const masterpieces: MasterpieceItem[] = [
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
      image: imagePaths.hero,
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
      image: imagePaths.bridal,
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

  const categories = ['All', 'Bridal', 'Diamond', 'Classic Gold', 'Exclusive'];

  const filteredMasterpieces = activeCategory === 'All'
    ? masterpieces
    : masterpieces.filter(p => {
        if (activeCategory === 'Classic Gold') return p.category === 'Classic Gold';
        return p.category === activeCategory;
      });

  const toggleLove = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setLovedProducts(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* 1. SIGNATURE EDITORIAL CHAPTERS */}
      {showCollections && (
        <section id="collections" className="py-24 sm:py-48 lg:py-64 bg-[#030303] text-white relative overflow-hidden border-b border-white/[0.03]">
          
          <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
            
            <div className="max-w-2xl mb-32 sm:mb-48">
              <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block mb-6">THE INDEX OF CREATIONS</span>
              <h2 className="text-4xl sm:text-7xl font-serif font-light tracking-tight text-white uppercase leading-[1.05]">
                Chapters of <br />
                <span className="italic text-white font-light lowercase">Artistic Discipline</span>
              </h2>
            </div>

            {/* ASYMMETRICAL CHAPTER INDEX ROWS (VOGUE / CARTIER-STYLE SPREAD) */}
            <div className="space-y-48 sm:space-y-64">
              {collections.map((col, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div 
                    id={`collection-row-${col.id}`}
                    key={col.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-32 items-center"
                  >
                    {/* Photo container with large margins */}
                    <div className={`col-span-1 lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative overflow-hidden bg-[#0a0a0a] border border-white/[0.02] group">
                        <img
                          src={col.image}
                          alt={col.title}
                          referrerPolicy="no-referrer"
                          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-[2500ms] ease-[0.16, 1, 0.3, 1] filter brightness-[0.5] contrast-[1.1]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        
                        <div className="absolute top-8 left-8 text-[11px] font-mono tracking-[0.4em] text-white/20 uppercase">
                          INDEX NO. 0{index + 1}
                        </div>

                        <div className="absolute bottom-8 right-8 text-[11px] font-mono tracking-[0.3em] text-white/40">
                          {col.count}
                        </div>
                      </div>
                    </div>

                    {/* Text panel with massive typography and whitespace */}
                    <div className={`col-span-1 lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-8 lg:px-8`}>
                      <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">
                        {col.tagline}
                      </span>
                      <h3 className="font-serif text-[32px] sm:text-[42px] font-light text-white uppercase tracking-tight leading-[1.1]">
                        {col.title}
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-white/30 leading-relaxed font-sans font-light tracking-wide editorial-max-width">
                        {col.description}
                      </p>
                      
                      <div className="pt-8">
                        <button
                          onClick={() => onCollectionClick ? onCollectionClick(col.id) : onBookClick()}
                          className="text-white/60 hover:text-gold-400 text-[10px] font-mono tracking-[0.4em] uppercase pb-2 border-b border-white/10 transition-all duration-700 flex items-center gap-3 cursor-pointer"
                        >
                          VIEW ARCHIVE &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      )}

      {/* 2. THE GRAND EXHIBIT (FEATURED MASTERPIECES) */}
      <section id="masterpieces" className="py-24 sm:py-48 lg:py-64 bg-[#030303] text-white relative overflow-hidden border-b border-white/[0.03]">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          
          {/* Confident Museum Heading Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16 mb-32 sm:mb-48">
            <div className="space-y-6">
              <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">THE GRAND EXHIBIT</span>
              <h2 className="text-4xl sm:text-7xl font-serif font-light tracking-tight text-white uppercase leading-[1.05]">
                Featured <br />
                <span className="italic text-white font-light lowercase">Masterworks</span>
              </h2>
            </div>

            {/* Premium Understated Underline Filters */}
            <div className="flex flex-wrap gap-x-12 gap-y-6 text-[10px] font-mono tracking-[0.4em] uppercase border-b border-white/5 pb-6 w-full lg:w-auto">
              {categories.map((cat) => (
                <button
                  id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`transition-all duration-700 py-1 relative select-none cursor-pointer ${
                    activeCategory === cat
                      ? 'text-gold-400 font-medium after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-[1px] after:bg-gold-500'
                      : 'text-white/20 hover:text-white/50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* MUSEUM STORY CATALOG - ASYMMETRICAL GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 sm:gap-40 lg:gap-x-32 sm:px-12 lg:px-0">
            {filteredMasterpieces.map((item, index) => {
              // Asymmetric vertical offset for odd cards to create rhythm
              const isOffset = index % 2 !== 0;
              return (
                <motion.div
                  id={`masterpiece-${item.id}`}
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex flex-col space-y-10 ${isOffset ? 'lg:translate-y-40' : ''}`}
                >
                  {/* Photo Frame */}
                  <div className="relative aspect-[3/4.2] w-full bg-[#080808] border border-white/[0.02] overflow-hidden group">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] group-hover:brightness-[0.6] group-hover:scale-105 transition-all duration-[2000ms] ease-[0.16, 1, 0.3, 1]"
                    />
                    
                    {/* Corner Purity Tag */}
                    <span className="absolute top-8 left-8 text-[9px] font-mono tracking-[0.4em] uppercase text-white/30 bg-black/40 px-4 py-2 border border-white/5 backdrop-blur-md">
                      {item.purity}
                    </span>

                    {/* Minimal Love wishlist toggle */}
                    <button
                      onClick={(e) => toggleLove(item.id, e)}
                      className="absolute top-8 right-8 w-11 h-11 flex items-center justify-center bg-black/40 border border-white/5 text-white/20 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-700 backdrop-blur-md cursor-pointer"
                    >
                      <Heart className={`w-4 h-4 ${lovedProducts[item.id] ? 'fill-gold-500/80 text-gold-500' : ''}`} />
                    </button>
                  </div>

                  {/* Descriptive text block with plenty of negative space */}
                  <div className="space-y-6 pt-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] tracking-[0.4em] font-mono text-white/20 uppercase">
                        {item.category} CREATION
                      </span>
                      <span className="text-[13px] font-mono tracking-widest font-light text-white/60">{item.price}</span>
                    </div>

                    <h3 className="font-serif text-[28px] sm:text-[34px] font-light text-white uppercase tracking-tight leading-none group-hover:text-gold-400 transition-colors duration-700">
                      {item.name}
                    </h3>
                    
                    <p className="text-[15px] sm:text-[16px] text-white/30 leading-relaxed font-sans font-light tracking-wide line-clamp-2 editorial-max-width">
                      {item.description}
                    </p>

                    {/* Actions and details list */}
                    <div className="pt-8 flex gap-12 text-[10px] font-mono tracking-[0.4em] uppercase">
                      <button
                        onClick={() => onProductClick ? onProductClick(item) : setSelectedProduct(item)}
                        className="text-white/60 hover:text-gold-400 relative py-2 transition-all duration-700 cursor-pointer"
                      >
                        DOSSIER &rarr;
                      </button>
                      <button
                        onClick={onBookClick}
                        className="text-white/20 hover:text-white transition-all duration-700 cursor-pointer"
                      >
                        RESERVE VISIT
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DETAILED DIALOG DRAWER / LIGHTBOX WINDOW */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            id="masterpiece-detail-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#020202]/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-10"
          >
            <motion.div
              id="masterpiece-detail-modal-content"
              initial={{ scale: 0.98, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.98, y: 15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#050505] border border-white/5 max-w-5xl w-full max-h-[92vh] overflow-y-auto relative text-white shadow-2xl grid grid-cols-1 md:grid-cols-2"
            >
              <button
                id="btn-close-detail-modal"
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 p-2 bg-black/60 border border-white/5 text-white/50 hover:text-white transition-colors z-20"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Image side - high contrast, dark focus */}
              <div className="relative h-72 md:h-full min-h-[350px] bg-black">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#050505] via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-8 left-8 space-y-1 z-10">
                  <span className="text-[10px] tracking-[0.3em] font-mono text-white/30 uppercase block">KAMAL SPECIFICATION</span>
                  <p className="text-xs font-mono text-white bg-black/60 px-4 py-2 border border-white/5 uppercase font-light">
                    {selectedProduct.purity}
                  </p>
                </div>
              </div>

              {/* Details side - clean typography */}
              <div className="p-10 sm:p-16 flex flex-col justify-between space-y-12">
                <div className="space-y-8 text-left">
                  <div className="flex justify-between items-baseline pb-6 border-b border-white/[0.05]">
                    <span className="text-[10px] tracking-[0.4em] font-mono text-[#A68F6B] uppercase">
                      {selectedProduct.category} Catalog Item
                    </span>
                    <span className="text-sm font-mono text-white/40 tracking-widest">{selectedProduct.price}</span>
                  </div>

                  <h3 className="font-serif text-[32px] sm:text-[42px] font-light tracking-tight leading-tight uppercase text-white">
                    {selectedProduct.name}
                  </h3>

                  <div className="w-10 h-[1px] bg-white/[0.05]" />

                  <p className="text-[15px] sm:text-[16px] text-white/30 leading-relaxed font-sans font-light tracking-wide italic">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-6 pt-6">
                    <h4 className="text-[10px] font-mono tracking-[0.4em] text-white/20 uppercase">TECHNICAL DOSSIER</h4>
                    
                    <div className="grid grid-cols-2 gap-8 text-[11px] font-mono tracking-widest">
                      <div className="space-y-2">
                        <span className="block text-white/10 uppercase text-[9px] tracking-[0.4em]">Compound</span>
                        <span className="block text-white/60 font-light">{selectedProduct.specs.metal}</span>
                      </div>
                      <div className="space-y-2">
                        <span className="block text-white/10 uppercase text-[9px] tracking-[0.4em]">Gemstones</span>
                        <span className="block text-white/60 font-light">{selectedProduct.specs.gems || "Gold Filigree"}</span>
                      </div>
                      <div className="space-y-2 col-span-2 pt-4">
                        <span className="block text-white/10 uppercase text-[9px] tracking-[0.4em]">Certified Weight</span>
                        <span className="block text-white/60 font-light">{selectedProduct.specs.weight}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-12 border-t border-white/[0.05] flex flex-col sm:flex-row gap-6">
                  <button
                    onClick={() => {
                      setSelectedProduct(null);
                      onBookClick();
                    }}
                    className="flex-1 bg-white hover:bg-gold-500 text-black py-5 text-[10px] font-mono uppercase tracking-[0.4em] transition-all duration-700 cursor-pointer"
                  >
                    REQUEST SHOWROOM VISIT
                  </button>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="py-5 px-10 border border-white/[0.05] hover:border-white/20 text-white/30 hover:text-white text-[10px] font-mono tracking-[0.4em] uppercase transition-all duration-700 cursor-pointer"
                  >
                    CLOSE DOSSIER
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
