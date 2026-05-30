import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, Compass, Star, Award, ShieldCheck, MapPin } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
  onMenuToggle?: (isOpen: boolean) => void;
}

export default function Navbar({ onBookClick, currentPage, onNavigate, onMenuToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    onMenuToggle?.(isOpen);

    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [isOpen]);

  const announcements = [
    "💎 CELEBRATING OVER 40 YEARS OF CHERISHED CRAFTSMANSHIP & TRUST",
    "🏰 VISIT OUR SHOWROOM AT AKURANA, KANDY ROAD, SRI LANKA",
    "✨ EXQUISITE GOLD, DIAMOND, GEMSTONE & BRIDAL MASTERWORKS",
    "🇱🇰 FAMILY-OWNED SINCE 1979 - ESTABLISHED IN SRI LANKA"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const menuItems = [
    { name: "Home", page: "home" },
    { name: "About", page: "about" },
    { name: "Collections", page: "collections" },
    { name: "Bridal", page: "bridal" },
    { name: "Showroom", page: "showroom" },
    { name: "Gold Rate", page: "gold-rate" },
    { name: "Contact", page: "contact" }
  ];

  return (
    <>
      {/* Main Luxury Header - High End Editorial Style */}
      <header
        id="luxury-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-[0.16, 1, 0.3, 1] ${
          scrolled
            ? 'bg-black/95 backdrop-blur-2xl border-b border-white/5 lg:h-[72px] h-[56px]'
            : 'bg-transparent lg:h-[90px] h-[64px]'
        }`}
      >
        <div className="max-w-[1700px] mx-auto px-4 sm:px-12 h-full flex items-center justify-between">
          
          {/* Brand - Left Corner */}
          <div className="flex items-center gap-6 flex-1 justify-start">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 sm:gap-4 group"
            >
              <img
                src="/src/assets/images/logo.webp"
                alt="New Kamal Jewellers"
                className={`w-auto transition-all duration-700 ${scrolled ? 'lg:h-8 h-6' : 'lg:h-10 h-7.5'}`}
              />
              <div className="flex flex-col items-start leading-none">
                <span className={`font-serif font-medium tracking-[0.2em] text-white transition-all duration-700 uppercase ${scrolled ? 'lg:text-[14px] text-[10px]' : 'lg:text-[17px] text-[12px]'}`}>
                  New Kamal
                </span>
                <span className={`font-serif tracking-[0.4em] text-gold-500/80 uppercase font-light transition-all duration-700 mt-0.5 ${scrolled ? 'lg:text-[8px] text-[6px]' : 'lg:text-[9px] text-[7px]'}`}>
                  JEWELLERS
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Core Navigation - Centered Perfectly */}
          <nav className="hidden lg:flex items-center justify-center gap-14 flex-[1.5]">
            {[
              { name: "Home", page: "home" },
              { name: "About", page: "about" },
              { name: "Collections", page: "collections" },
              { name: "Bridal", page: "bridal" },
              { name: "Showroom", page: "showroom" }
            ].map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-[9px] font-mono tracking-[0.4em] uppercase transition-all duration-700 relative group py-2 ${
                  currentPage === item.page ? 'text-white' : 'text-white/40 hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-[1px] bg-gold-500 transition-all duration-700 ${
                  currentPage === item.page ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </nav>

          {/* Luxury Actions - Right Corner */}
          <div className="hidden lg:flex items-center justify-end gap-10 flex-1">
            <div className="flex items-center gap-8 border-r border-white/10 pr-10">
              <button 
                onClick={() => onNavigate('gold-rate')}
                className="text-[10px] tracking-[0.25em] font-mono uppercase text-white/40 hover:text-white transition-colors"
              >
                Gold Rate
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="text-[10px] tracking-[0.25em] font-mono uppercase text-white/40 hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
            
            <button
              onClick={onBookClick}
              className="group relative px-8 py-3 bg-white text-black text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-500 hover:bg-gold-500 hover:text-white"
            >
              BOOK VISIT
            </button>
          </div>

          {/* Mobile Minimalism Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-white/60 hover:text-white transition-colors flex items-center gap-2.5"
            >
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase hidden sm:block">Menu</span>
              <Menu className={`w-5.5 h-5.5 transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
            </button>
          </div>

        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed inset-0 bg-[#060606] z-[60] flex flex-col overflow-y-auto overscroll-none"
              style={{ height: '100dvh', WebkitOverflowScrolling: 'touch' }}
            >
              {/* Menu Header */}
              <div className="flex justify-between items-center px-8 h-[90px] border-b border-white/[0.03]">
                <div className="flex items-center gap-4">
                  <img src="/src/assets/images/logo.webp" alt="Logo" className="h-7 w-auto" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="font-serif text-[12px] font-medium tracking-[0.2em] text-white uppercase">
                      New Kamal
                    </span>
                    <span className="font-serif text-[7px] tracking-[0.4em] text-gold-500/80 uppercase font-light mt-1">
                      JEWELLERS
                    </span>
                  </div>
                </div>
                <button 
                   onClick={() => setIsOpen(false)} 
                   className="p-2 text-white/40 hover:text-white transition-colors"
                >
                  <X size={26} strokeWidth={1} />
                </button>
              </div>

              {/* Main Navigation - Left Aligned Editorial */}
              <div className="flex-grow flex flex-col justify-start pt-20 px-10">
                <nav className="flex flex-col items-start gap-9">
                  {menuItems.map((item, idx) => (
                    <motion.button
                      key={item.page}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => {
                        setIsOpen(false);
                        onNavigate(item.page);
                      }}
                      className="group relative flex items-center"
                    >
                      {/* Active Indicator Symbol */}
                      <span className={`w-1.5 h-1.5 rounded-full bg-gold-400 absolute -left-6 transition-all duration-700 ${
                        currentPage === item.page ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`} />
                      
                      <span className={`text-[23px] font-serif transition-all duration-700 uppercase tracking-[0.22em] font-light ${
                        currentPage === item.page ? 'text-white' : 'text-white/30 group-hover:text-white'
                      }`}>
                        {item.name}
                      </span>
                    </motion.button>
                  ))}
                </nav>

                {/* Secondary Discovery Actions */}
                <div className="mt-24 flex flex-col gap-6">
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    onClick={() => {
                      setIsOpen(false);
                      onBookClick();
                    }}
                    className="text-left group"
                  >
                    <span className="text-[9px] font-mono tracking-[0.5em] text-white/20 uppercase block mb-2">Curation</span>
                    <span className="text-[12px] font-mono tracking-[0.3em] text-gold-500 group-hover:text-white transition-all duration-500 uppercase underline underline-offset-8 decoration-white/5">
                      Book Private Salon Visit
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Heritage Footer */}
              <div className="px-10 pb-20 pt-10 border-t border-white/[0.03] bg-[#080808]/50 mt-auto">
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[9px] font-mono tracking-[0.5em] text-white/10 uppercase">Established</span>
                      <span className="text-[14px] font-serif tracking-[0.2em] text-white/50 font-light italic">Since 1979</span>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <span className="text-[9px] font-mono tracking-[0.5em] text-white/10 uppercase">Signature</span>
                      <span className="text-[14px] font-serif tracking-[0.2em] text-white/50 font-light italic">Akurana, Sri Lanka</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
