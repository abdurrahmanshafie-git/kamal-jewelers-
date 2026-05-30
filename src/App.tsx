import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Store,
  Phone,
  Calendar,
  MessageCircle,
  MapPin,
  Clock,
  Sparkles,
  Award,
  ShieldCheck,
  Instagram,
  ArrowUp,
  X,
  Smartphone,
  Heart,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { bridal, craftsmanship, gemstone, hero, jawrahLogo, logo, ring, showroom, watermark, weddingBands } from './imageAssets';

// Subcomponents
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import SimpleHeritage from './components/SimpleHeritage';
import SignatureCollections from './components/SignatureCollections';
import BridalSection from './components/BridalSection';
import TrustLegacySection from './components/TrustLegacySection';
import ShowroomHomeSection from './components/ShowroomHomeSection';
import Customizer from './components/Customizer';
import AppointmentModal from './components/AppointmentModal';
import AboutPage from './components/AboutPage';
import BridalExperiencePage from './components/BridalExperiencePage';
import ShowroomPage from './components/ShowroomPage';
import GoldRatePage from './components/GoldRatePage';
import JournalPage from './components/JournalPage';
import ContactPage from './components/ContactPage';
import CollectionDetailPage from './components/CollectionDetailPage';
import ProductDetailPage from './components/ProductDetailPage';
import CollectionsPage from './components/CollectionsPage';
import { ShowroomAppointment, MasterpieceItem } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>('col-1');
  const [selectedProductDetail, setSelectedProductDetail] = useState<MasterpieceItem | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeAppointment, setActiveAppointment] = useState<ShowroomAppointment | null>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleNavigate = (page: string) => {
    if (page.startsWith('collection-detail:')) {
      const parts = page.split(':');
      setSelectedCollectionId(parts[1]);
      setCurrentPage('collection-detail');
    } else {
      setCurrentPage(page);
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  // Generated authentic premium asset paths we created
  const imagePaths = {
    hero: hero,
    bridal: bridal,
    ring: ring,
    showroom: showroom,
    craftsmanship: craftsmanship,
    logo: logo,
    watermark: watermark
  };

  useEffect(() => {
    // Artificial luxury loading sequence
    const timer = setTimeout(() => setIsLoading(false), 2800);

    // Check scroll depth for active scroll reveals
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight - 200) {
        setScrolledPastHero(true);
      } else {
        setScrolledPastHero(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Load active appointment from local storage if existing
    const cachedApp = localStorage.getItem('nk_appointment_active');
    if (cachedApp) {
      try {
        setActiveAppointment(JSON.parse(cachedApp));
      } catch (e) {
        // Safe fail
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleBookingSuccess = (appointment: ShowroomAppointment) => {
    setActiveAppointment(appointment);
    setIsBookingOpen(false);
  };

  const handleClearAppointment = () => {
    localStorage.removeItem('nk_appointment_active');
    setActiveAppointment(null);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Instagrid layout simulation holding authentic luxury pieces
  const instagramImages = [
    {
      id: 1,
      image: weddingBands,
      title: "Royal Kandyan Choker details",
      likes: "1,240 likes"
    },
    {
      id: 2,
      image: imagePaths.ring,
      title: "Antwerp D-Flawless Diamond Ring",
      likes: "3,123 likes"
    },
    {
      id: 3,
      image: imagePaths.bridal,
      title: "Bespoke Bridal fitting session",
      likes: "4,502 likes"
    },
    {
      id: 4,
      image: imagePaths.craftsmanship,
      title: "Master Goldsmith gold engraving",
      likes: "942 likes"
    },
    {
      id: 5,
      image: gemstone,
      title: "Celestial Sapphire Diamond Drop Earrings",
      likes: "2,019 likes"
    },
    {
      id: 6,
      image: imagePaths.showroom,
      title: "Akurana Showroom fitting suite",
      likes: "1,883 likes"
    }
  ];

  return (
    <div className="bg-luxury-black text-gold-300 font-sans selection:bg-gold-500 selection:text-luxury-black relative min-h-screen">
      
      {/* LUXURY BRAIDING LOADING SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <div className="relative">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                src={imagePaths.logo}
                alt="New Kamal Jewellers"
                className="h-16 w-auto"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, delay: 0.4, ease: "linear" }}
                className="absolute -bottom-6 left-0 h-[1px] bg-gold-500/30"
              />
            </div>
            <motion.p
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.4 }}
               transition={{ duration: 1, delay: 1.8 }}
               className="absolute bottom-16 text-[9px] font-mono tracking-[0.5em] text-white uppercase"
            >
              Building Legacy Content
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Navigation System */}
      <Navbar
        onBookClick={() => setIsBookingOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onMenuToggle={setIsMobileMenuOpen}
      />

      {currentPage === 'home' && (
        <>
          {/* 1. CINEMATIC FULL-SCREEN HERO EXPERIENCE */}
          <section id="hero" className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between items-center bg-[#030303] overflow-hidden select-none">
            
            {/* Cinematic Jewelry Background */}
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.1] pointer-events-none"
                poster={imagePaths.hero}
              >
                <source src="https://videos.pexels.com/video-files/8089326/8089326-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
            </div>

            <div className="h-24 sm:h-32" />

            {/* Brand Intro */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 flex-grow flex flex-col justify-center items-center text-center">
              <div className="space-y-12 sm:space-y-16 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <p className="font-mono text-[10px] sm:text-[12px] text-gold-500 tracking-[0.6em] uppercase">
                    Generations of Mastery
                  </p>
                  <h1 className="font-serif text-[clamp(2.5rem,9vw,5.5rem)] font-light tracking-tight text-white leading-[1.1] uppercase">
                    Timeless <br />
                    Handcrafted <br />
                    Heritage
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 1.5, delay: 0.8 }}
                  className="flex flex-col items-center gap-12"
                >
                  <p className="text-[13px] sm:text-[15px] font-sans font-light tracking-[0.1em] text-white/80 max-w-lg leading-relaxed">
                     Handcrafted 22k gold and diamond masterpieces <br className="hidden sm:block" /> from the heart of Akurana, Sri Lanka.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 w-full max-w-xs sm:max-w-none justify-center">
                    <button
                      onClick={() => handleNavigate('collections')}
                      className="group relative h-[54px] px-12 bg-white text-black text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-500 overflow-hidden"
                    >
                      <span className="relative z-10">Explore Collections</span>
                      <div className="absolute inset-0 bg-gold-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                    </button>
                    
                    <button
                      onClick={() => setIsBookingOpen(true)}
                      className="h-[54px] px-12 border border-white/20 text-white text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white/5 transition-all duration-500"
                    >
                      Book Consultation
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 2 }}
              className="pb-12"
            >
              <div className="w-[1px] h-20 bg-white/30" />
            </motion.div>

          </section>


      {/* 2. HERITAGE LEGACY STORY SEGMENT */}
      <SimpleHeritage />

      {/* 3. SIGNATURE COLLECTIONS */}
      <SignatureCollections
        onCollectionSelect={(id) => {
          setSelectedCollectionId(id);
          handleNavigate('collection-detail');
        }}
      />

      {/* 4. BRIDAL EXPERIENCE */}
      <BridalSection onBookClick={() => setIsBookingOpen(true)} />

      {/* 5. SHOWROOM EXPERIENCE */}
      <ShowroomHomeSection onNavigate={() => handleNavigate('showroom')} />

      {/* 6. TRUST & LEGACY */}
      <TrustLegacySection />

      {/* 7. FINAL PREMIUM CTA */}
      <section id="closing-invitation-cta" className="py-24 sm:py-40 bg-[#030303] text-center relative overflow-hidden border-b border-white/[0.03]">
        <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
          <div className="space-y-8">
            <span className="font-mono text-[10px] tracking-[0.5em] text-white/30 uppercase block">
              LEGACY ARRANGEMENTS
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-[1.1]">
              Request <br />
              <span className="font-serif italic font-light text-white/60">A Private Viewing</span>
            </h2>
            <p className="text-[14px] sm:text-[16px] text-white/40 leading-relaxed font-sans font-light tracking-wide max-w-xl mx-auto pt-2">
              We welcome you to experience physical gold and diamond weighing firsthand. Step into our Akurana showroom to find your next family heirloom.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 max-w-md mx-auto">
            <button
              id="btn-closing-appointment"
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-12 py-5 bg-white text-black text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-gold-500 hover:text-white transition-all duration-700 font-sans cursor-pointer"
            >
              SCHEDULE PRIVATE VISIT
            </button>
            <a
              id="btn-closing-whatsapp"
              href="https://wa.me/94728866851?text=Hello%20New%20Kamal%20Jewellers,%20I'd%20like%20to%20enquire%20about%20a%20bespoke%2520traditional%20bridal%20jewelry%20commission."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 border border-white/10 text-white text-[10px] tracking-[0.3em] uppercase font-mono hover:bg-white/5 transition-all text-center cursor-pointer"
            >
              WHATSAPP ADVISORY
            </a>
          </div>

          <div className="flex items-center justify-center gap-10 pt-16 text-[9px] font-mono text-white/10 max-w-md mx-auto justify-between border-t border-white/[0.03]">
            <span className="tracking-[0.4em] uppercase">Sri Lankan Assay Hallmarked</span>
            <span className="tracking-[0.4em] uppercase">GIA Registered Salon</span>
          </div>
        </div>
      </section>
        </>
      )}

      {currentPage === 'about' && (
        <AboutPage onBookClick={() => setIsBookingOpen(true)} onNavigate={handleNavigate} />
      )}

      {currentPage === 'collections' && (
        <CollectionsPage
          onNavigate={handleNavigate}
          onBookClick={() => setIsBookingOpen(true)}
          onCollectionSelect={(id) => {
            setSelectedCollectionId(id);
            handleNavigate('collection-detail');
          }}
        />
      )}

      {currentPage === 'collection-detail' && (
        <CollectionDetailPage
          collectionId={selectedCollectionId}
          onNavigate={handleNavigate}
          onProductClick={(prod) => {
            setSelectedProductDetail(prod);
            handleNavigate('product-detail');
          }}
          onBookClick={() => setIsBookingOpen(true)}
        />
      )}

      {currentPage === 'product-detail' && selectedProductDetail && (
        <ProductDetailPage
          product={selectedProductDetail}
          onNavigate={handleNavigate}
          onBookClick={() => setIsBookingOpen(true)}
          onProductClick={(prod) => setSelectedProductDetail(prod)}
        />
      )}

      {currentPage === 'bridal' && (
        <BridalExperiencePage
          onBookClick={() => setIsBookingOpen(true)}
          onNavigate={handleNavigate}
          onAppointmentSuccess={handleBookingSuccess}
        />
      )}

      {currentPage === 'custom-jewellery' && (
        <Customizer onNavigate={handleNavigate} />
      )}

      {currentPage === 'showroom' && (
        <ShowroomPage onBookClick={() => setIsBookingOpen(true)} onNavigate={handleNavigate} />
      )}

      {currentPage === 'gold-rate' && (
        <GoldRatePage onBookClick={() => setIsBookingOpen(true)} onNavigate={handleNavigate} />
      )}

      {currentPage === 'journal' && (
        <JournalPage onNavigate={handleNavigate} />
      )}

      {currentPage === 'contact' && (
        <ContactPage onNavigate={handleNavigate} />
      )}

      {/* MINIMAL BRAND FOOTER */}
      <footer className="bg-[#050505] text-white pt-32 pb-24 border-t border-white/[0.03] font-sans relative z-10 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          <div className="md:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="font-serif text-[28px] tracking-[0.25em] uppercase text-white font-light leading-none">New Kamal</h2>
              <span className="font-serif text-[12px] tracking-[0.4em] text-gold-500 uppercase block">Jewellers</span>
            </div>
            
            <div className="space-y-4 max-w-sm">
              <p className="text-[13px] text-white/40 leading-relaxed font-light tracking-wide italic">
                Preserving the art of 22k gold craftsmanship since 1979. Every piece is a testament to our family legacy of trust and precision.
              </p>
              <div className="flex items-center gap-6 pt-2">
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Phone size={18} strokeWidth={1.5} /></a>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h4 className="text-[10px] font-mono tracking-[0.5em] uppercase text-white/20">Maison</h4>
              <ul className="space-y-4 text-[12px] font-light uppercase tracking-[0.25em] text-white/50">
                <li><button onClick={() => handleNavigate('about')} className="hover:text-gold-400 transition-colors">Our Heritage</button></li>
                <li><button onClick={() => handleNavigate('showroom')} className="hover:text-gold-400 transition-colors">The Showroom</button></li>
                <li><button onClick={() => handleNavigate('journal')} className="hover:text-gold-400 transition-colors">The Journal</button></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-mono tracking-[0.5em] uppercase text-white/20">Collections</h4>
              <ul className="space-y-4 text-[12px] font-light uppercase tracking-[0.25em] text-white/50">
                <li><button onClick={() => handleNavigate('collections')} className="hover:text-gold-400 transition-colors">Masterpieces</button></li>
                <li><button onClick={() => handleNavigate('bridal')} className="hover:text-gold-400 transition-colors">Bridal Salon</button></li>
                <li><button onClick={() => handleNavigate('collections')} className="hover:text-gold-400 transition-colors">Engagement</button></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-mono tracking-[0.5em] uppercase text-white/20">Assistance</h4>
              <ul className="space-y-4 text-[12px] font-light uppercase tracking-[0.25em] text-white/50">
                <li><button onClick={() => handleNavigate('contact')} className="hover:text-gold-400 transition-colors">Private Advisor</button></li>
                <li><button onClick={() => handleNavigate('gold-rate')} className="hover:text-gold-400 transition-colors">Gold Valuation</button></li>
                <li><button onClick={() => setIsBookingOpen(true)} className="hover:text-gold-400 transition-colors">Reservations</button></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-white/[0.03] space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] font-mono tracking-[0.3em] uppercase text-white/20 text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} NEW KAMAL JEWELLERS</p>
              <div className="flex gap-8">
                <span className="hover:text-white/40 cursor-pointer transition-colors">Privacy</span>
                <span className="hover:text-white/40 cursor-pointer transition-colors">Legal</span>
              </div>
            </div>

            <div className="group relative mt-16 md:mt-0 pb-32 md:pb-0 flex flex-col items-center md:items-end w-full md:w-auto">
              <a 
                href="https://jawrahpixel.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col md:flex-row items-center gap-5 md:gap-3 no-underline opacity-90 hover:opacity-100 transition-opacity duration-300"
              >
                <div className="text-[10px] text-[#FFFFF0] opacity-90 tracking-[0.4em] font-mono uppercase text-center md:text-right group-hover:text-white group-hover:opacity-100 transition-all duration-300">
                  Art Direction & Digital Experience <span className="hidden md:inline ml-2">BY</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <img 
                    src={jawrahLogo}
                    alt="Jawrah Pixel Logo" 
                    className="h-[20px] md:h-[24px] w-auto object-contain opacity-100 group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.3)] transition-all duration-300"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] md:text-[13px] text-[#FFFFF0] opacity-95 font-light tracking-[0.4em] uppercase group-hover:text-white transition-all duration-300">
                      Jawrah
                    </span>
                    <div className="w-[3px] h-[3px] bg-[#A68F6B] rounded-full" />
                    <span className="text-[12px] md:text-[13px] text-[#FFFFF0] opacity-95 font-light tracking-[0.4em] uppercase group-hover:text-white transition-all duration-300">
                      Pixel
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING VIP ACTIVE APPOINTMENT SCREEN SLIP (Bottom Right) */}
      <AnimatePresence>
        {activeAppointment && (
          <motion.div
            id="floating-vip-appointment-slip"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-24 sm:bottom-6 right-6 z-40 max-w-sm w-full bg-luxury-gray/95 backdrop-blur-md border border-gold-500/30 p-5 shadow-2xl flex flex-col justify-between"
          >
            <button
              onClick={handleClearAppointment}
              className="absolute top-3 right-3 text-white/40 hover:text-white pb-1"
              aria-label="Remove ticket badge"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-gold-600/10 text-gold-300 border border-gold-500/10">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="text-[9px] font-mono tracking-widest uppercase text-gold-500 block">Active reservation</span>
                <h4 className="font-serif text-sm font-bold text-white text-left">{activeAppointment.fullName}</h4>
                <p className="text-[11px] font-mono text-white/50">
                  📍 {activeAppointment.showroomLocation}
                </p>
                <p className="text-[11px] text-white/50 text-left">
                  📅 {activeAppointment.date} &bull; {activeAppointment.timeSlot.split(" (")[0]}
                </p>
              </div>
            </div>

            <div className="mt-3.5 pt-3.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="text-gold-300 hover:text-gold-100 flex items-center gap-1"
              >
                View digital Ticket <ChevronRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-white/20 font-bold">NK ASSURED</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      {!isMobileMenuOpen && <MobileBottomNav onNavigate={handleNavigate} />}

      {/* APPOINTMENT BOOKER MODAL WINDOW CONTAINER */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        onSuccess={handleBookingSuccess}
      />

    </div>
  );
}
