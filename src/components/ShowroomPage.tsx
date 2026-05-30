import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  ShieldCheck,
  Compass,
  Sparkles,
  Eye,
  MessageCircle,
  HelpCircle,
  Maximize2,
  Minimize2,
  Calendar,
  CheckCircle2,
  Heart,
  Users,
  Award,
  Coffee,
  Bookmark
} from 'lucide-react';
import { bridal, craftsmanship, gemstone, showroom, showroomDisplay, showroomLounge } from '../imageAssets';
import PageHeader from './PageHeader';

interface ShowroomPageProps {
  onBookClick: () => void;
  onNavigate: (page: string) => void;
}

export default function ShowroomPage({ onBookClick, onNavigate }: ShowroomPageProps) {
  // Gallery states
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Virtual Walkthrough states
  const [activeChamber, setActiveChamber] = useState<'bridal' | 'gold' | 'gemstone'>('bridal');
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  // Route Planner direction state
  const [activeRoute, setActiveRoute] = useState<'colombo' | 'kandy' | 'katugastota'>('kandy');

  // Interactive Scheduler success
  const [bookName, setBookName] = useState('');
  const [bookEmail, setBookEmail] = useState('');
  const [bookPhone, setBookPhone] = useState('');
  const [bookDate, setBookDate] = useState('');
  const [bookTime, setBookTime] = useState('Morning Session (10:00 AM - 12:00 PM)');
  const [partySize, setPartySize] = useState('2 Guests');
  const [bookSuccess, setBookSuccess] = useState(false);
  const [passCode, setPassCode] = useState('');

  // Real-time Operating Hours computation (Sri Lankan timezone UTC+5:30 representation)
  const [slTimeStr, setSlTimeStr] = useState('');
  const [slHourStatus, setSlHourStatus] = useState({ open: true, message: '', banner: '' });

  useEffect(() => {
    // Back to top on mount
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Live clock update logic
    const updateSlTime = () => {
      const d = new Date();
      // Translate client system offset dynamically into Colombo Standard Time (UTC+5:30)
      const utc = d.getTime() + (d.getTimezoneOffset() * 60000);
      const slDate = new Date(utc + (3600000 * 5.5));

      const hours = slDate.getHours();
      const minutes = slDate.getMinutes();
      const seconds = slDate.getSeconds();
      const day = slDate.getDay(); // 0 = Sunday, 1 = Monday ...

      const ampm = hours >= 12 ? 'PM' : 'AM';
      const hours12 = hours % 12 || 12;
      const minStr = minutes < 10 ? '0' + minutes : minutes;
      const secStr = seconds < 10 ? '0' + seconds : seconds;
      
      setSlTimeStr(`${hours12}:${minStr}:${secStr} ${ampm}`);

      // Business Hours check (Mon-Sat 9:30 AM to 6:30 PM)
      // 9:30 is 9.5 hours. 18:30 is 18.5 hours.
      const rawSlTime = hours + minutes / 60;
      const isOpenHour = rawSlTime >= 9.5 && rawSlTime < 18.5;

      if (day === 0) {
        setSlHourStatus({
          open: false,
          message: "CLOSED TODAY (SUNDAY)",
          banner: "STORES CLOSED TODAY — Reopening tomorrow at 9:30 AM (SL Time)"
        });
      } else if (isOpenHour) {
        // Compute time left
        const totalMinutesLeft = Math.floor((18.5 - rawSlTime) * 60);
        const remH = Math.floor(totalMinutesLeft / 60);
        const remM = totalMinutesLeft % 60;
        setSlHourStatus({
          open: true,
          message: "OPEN TODAY",
          banner: `OPEN NOW — Closes in ${remH}h ${remM}m (at 6:30 PM Sri Lankan Time)`
        });
      } else {
        setSlHourStatus({
          open: false,
          message: "CLOSED NOW",
          banner: "STORES CLOSED NOW — Opens tomorrow morning at 9:30 AM (SL Time)"
        });
      }
    };

    updateSlTime();
    const timer = setInterval(updateSlTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Premium gallery images representing flagship spatial architecture
  const showroomGallery = [
    {
      url: showroom,
      title: "The Grand Reception & Fitting Suites",
      concept: "Polished timber tables, high-magnification gem lenses, and direct natural light channels.",
      provenance: "FITTING ROOMS"
    },
    {
      url: showroomLounge,
      title: "The Private Consultation Chamber",
      concept: "Secure private lounge where brides inspect the heavy traditional 22-carat gold weight.",
      provenance: "VIP SALON"
    },
    {
      url: showroomLounge,
      title: "The Flagship Architectural Portal",
      concept: "The premium stone-cladded street view along Kandy-Matale Highway (A9).",
      provenance: "METROPOLIS ENTRY"
    },
    {
      url: showroomDisplay,
      title: "The Royal 22k Gold Heritage Cabinets",
      concept: "Continuous hand-hammered and coiled gold wire filigree displayed under optical glass.",
      provenance: "GOLD VAULT"
    }
  ];

  // Hotspot walkthrough data
  const walkthroughChambers = {
    bridal: {
      id: "bridal",
      image: bridal,
      title: "The Queenly Bridal Parlour",
      concept: "The physical calibration of the Kandyan Seven Chains.",
      hotspots: [
        {
          id: "spot-1-1",
          top: "40%",
          left: "50%",
          marker: "Neckline Mapping Model",
          topic: "Anatomical Drape Calibration",
          detail: "Unlike generic pre-fabricated assemblies, our brides sit before a real-scale neck bust where the master smith physically aligns the links. We adjust lengths millimeter-by-millimeter to draft a magnificent, seamless chest frame of continuous gold weight."
        },
        {
          id: "spot-1-2",
          top: "70%",
          left: "30%",
          marker: "Sari Texture Match Desk",
          topic: "Textile Contrast Diagnostics",
          detail: "Your bridal jewelry has to synchronize with exact thread density from your wedding sari fabric. We utilize standard micro-magnifying setups so the yellow gold's velvet finish perfectly mirrors the silk weave reflection."
        }
      ]
    },
    gold: {
      id: "gold",
      image: craftsmanship,
      title: "The Artisanal 22k Smithy Studio",
      concept: "Point-by-point smelting and jewelry filament wire drawing.",
      hotspots: [
        {
          id: "spot-2-1",
          top: "30%",
          left: "65%",
          marker: "Single-Pour Furnace Heat",
          topic: "1,064°C Elemental Crucible",
          detail: "We melt and draw the gold bullion inside traditional clay furnaces on site. By rejecting outsourced cast molds, our gold alloys hold a singular, unbroken, dense material pattern."
        },
        {
          id: "spot-2-2",
          top: "60%",
          left: "40%",
          marker: "Hologram Filigree Station",
          topic: "Artisanal Memory Drawing",
          detail: "A specialist goldsmith uses hair-thin wire filaments (0.2mm) to hand-craft traditional patterns by memory. Since 1979, we protect this local Akurana region craftsmanship."
        }
      ]
    },
    gemstone: {
      id: "gemstone",
      image: gemstone,
      title: "The secure Gemstone Vault & lounge",
      concept: "Deep-saturated unheated Ceylon mineral analysis.",
      hotspots: [
        {
          id: "spot-3-1",
          top: "45%",
          left: "55%",
          marker: "The Gem Testing Microscope",
          topic: "Spectrograph Volcanic Analysis",
          detail: "Inspect raw crystal inclusions and mineral fingerprints under high magnification. We isolate the stones to certify they are unheated and native to Ratnapura alluvial gravel beds."
        },
        {
          id: "spot-3-2",
          top: "75%",
          left: "35%",
          marker: "The GIA Grading Ledger Vault",
          topic: "Direct Antwerp Certifications",
          detail: "Every diamond exceeds triple-excellent specifications. Access the physical certification ledger containing official GIA hallmarks."
        }
      ]
    }
  };

  const currentChamber = walkthroughChambers[activeChamber];

  // Route Planning directions matching high design
  const routePlanner = {
    colombo: {
      from: "Colombo City Center",
      via: "Colombo-Kandy Highway (A1) & Matale Highway (A9)",
      distance: "124 KM",
      time: "Approx. 3 hours 15 mins",
      steps: [
        "Depart Colombo morning via the Colombo-Kandy (A1) highway past Kadugannawa.",
        "Overlook the hill pass and merge onto the scenic Kandy Town Ring bypass.",
        "Cross the Mahaweli River at Katugastota Bridge onto the Matale-Jaffna Highway (A9).",
        "Head straight north for 6.2km. New Kamal Flagship stands clearly on the left of Akurana Main Street."
      ]
    },
    kandy: {
      from: "Kandy Town Center (The Palace Gate)",
      via: "Katugastota Matale Highway (A9)",
      distance: "11 KM",
      time: "Approx. 15-20 mins",
      steps: [
        "Head north past the Temple of the Sacred Tooth relic gate toward Katugastota.",
        "Proceed past the Katugastota Central intersection across the concrete bridge.",
        "Continue north on the Matale Highway (A9).",
        "Enter Akurana main market limits; the black cladded luxury portal is visible directly on your left."
      ]
    },
    katugastota: {
      from: "Katugastota Bridge Gate",
      via: "Matale Road (A9) Direct North",
      distance: "6.5 KM",
      time: "Approx. 8 mins",
      steps: [
        "Depart Katugastota junction immediately on the Highway A9 heading north.",
        "Drive past the regional coconut grove markers.",
        "Merge direct into Akurana commercial strip.",
        "Boutique located at 280/1 Matale Road with secure private front-court parking for VIP guests."
      ]
    }
  };

  const currentRoute = routePlanner[activeRoute];

  const handleShowroomSchedule = (e: FormEvent) => {
    e.preventDefault();
    if (!bookName || !bookEmail || !bookPhone || !bookDate) return;

    const code = `NKJ-PASS-${Math.floor(20000 + Math.random() * 79999)}`;
    setPassCode(code);

    const appointment = {
      fullName: bookName,
      email: bookEmail,
      phone: bookPhone,
      date: bookDate,
      timeSlot: bookTime,
      serviceType: `Showroom Visit: ${activeChamber.toUpperCase()}`,
      showroomLocation: `Akurana Flagship Showroom`,
      specialRequests: `Showroom space selected: ${activeChamber.toUpperCase()}. Guest size: ${partySize}. Reserved from Flagship Tour Desk.`
    };

    localStorage.setItem('nk_appointment_active', JSON.stringify({ ...appointment, ticketId: code }));
    setBookSuccess(true);
  };

  // WhatsApp advisor pre-wiring
  const getWhatsAppShowroomLink = () => {
    const text = `Hello New Kamal. I am planning a physical visit to your Akurana Flagship Showroom. I would love to schedule a dedicated viewing within ${walkthroughChambers[activeChamber].title}. My preferred arrival date is ${bookDate || "soon"}. Please prepare a consultation desk.`;
    return `https://wa.me/94728866851?text=${encodeURIComponent(text)}`;
  };

  return (
    <div id="showroom-flagship-dossier" className="bg-[#030303] text-white min-h-screen relative overflow-hidden font-sans pb-24 text-left select-none">
      
      {/* High luxury background lighting filters */}
      <div className="absolute top-0 left-0 w-full h-[65vh] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.012),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[180vh] left-1/3 w-[60vw] h-[60vh] bg-[radial-gradient(circle_at_center,rgba(166,143,107,0.02),transparent_70%)] pointer-events-none" />

      <PageHeader onBack={() => onNavigate('home')} />

      {/* 1. CINEMATIC FULL SCREEN HERO (PORTRAIT OVERLAP) */}
      <section className="py-20 sm:py-32 lg:py-40 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24 items-center">
          
          <div className="lg:col-span-6 space-y-10">
            <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">
              ESTABLISHED IN AKURANA 1979
            </span>
            <h1 className="font-serif text-[clamp(2.5rem,7vw,6.5rem)] font-light tracking-tight text-white uppercase leading-[1.05]">
              Flagship <br />
              <span className="italic text-white font-light lowercase">Akurana Salon</span>
            </h1>
            <p className="text-[15px] sm:text-[17px] text-white/40 leading-relaxed font-sans font-light tracking-wide max-w-xl editorial-max-width">
              Constructed along the ancient trade corridor A9, our family showroom acts as a physical sanctuary for traditional Sri Lankan artistry. Rejecting the standard, noisy shopping retail spaces, we welcome guests inside private salons engineered with high-magnification lenses and daylight simulation rigs to reveal pure, untouched gold purity.
            </p>

            <blockquote className="border-l-2 border-[#A68F6B]/30 pl-8 py-2 font-serif italic text-[16px] text-[#A68F6B]/60 font-light max-w-lg">
              “True gold has nothing to hide under artificial lighting. We show you the metals exactly as the morning sun reveals them.”
            </blockquote>

            <div className="flex flex-wrap items-center gap-8 pt-4 font-mono text-[11px] text-white/20 tracking-widest uppercase">
              <span className="flex items-center gap-2.5"><MapPin className="w-4 h-4 text-[#A68F6B]/50" /> Akurana, Central Province</span>
              <span className="flex items-center gap-2.5"><Phone className="w-4 h-4 text-[#A68F6B]/50" /> +94 81 230 0446</span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/11] sm:aspect-[4/3] bg-[#0c0c0c] border border-white/[0.02] overflow-hidden group">
              <img
                src={showroom}
                alt="New Kamal flagship showroom premium interiors in Akurana, Sri Lanka"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] transition-transform duration-[3s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90" />
            </div>
          </div>

        </div>
      </section>

      {/* 2. CHRONOGRAPHIC LIVE BUSINESS HOURS (DYNAMICAL TIMEZONE ATTESTMENT) */}
      <section className="py-16 bg-white/[0.01] border-y border-white/[0.03] text-center px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-3 bg-white/[0.02] border border-white/5 py-2.5 px-6 rounded-full text-[10px] font-mono text-gold-500/60 tracking-[0.4em] uppercase">
            <Clock className="w-3.5 h-3.5 opacity-50" /> LIVE STATUS: {slTimeStr || "9:30 AM"}
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight uppercase">
            {slHourStatus.message}
          </h2>
          <p className="text-[15px] text-white/30 max-w-xl mx-auto font-sans font-light tracking-wide italic leading-relaxed">
            {slHourStatus.banner}
          </p>
        </div>
      </section>

      {/* 3. ATELIER IMMERSIVE FULL-SCREEN GALLERY (WITH EDITORIAL DESCRIPTORS & CAROUSEL) */}
      <section className="py-24 sm:py-36 max-w-7xl mx-auto px-6 sm:px-12">
        <div className="max-w-2xl mb-16 text-left">
          <span className="font-mono text-[9px] tracking-[0.45em] text-[#A68F6B] uppercase block mb-4">
            THE GALLERY MANIFEST
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif font-light text-white uppercase leading-none tracking-tight">
            Flagship <br />
            <span className="font-serif italic font-light text-white/70">Spatial Slides</span>
          </h2>
        </div>

        {/* Big Layout Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-8 relative aspect-[16/10] sm:aspect-[16/9] bg-[#0c0c0c] border border-white/5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeGalleryIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
                src={showroomGallery[activeGalleryIndex].url}
                alt={showroomGallery[activeGalleryIndex].title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.04]"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-85" />

            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="space-y-1 max-w-md">
                <span className="font-mono text-[9px] text-[#A68F6B] uppercase tracking-widest block">
                  {showroomGallery[activeGalleryIndex].provenance} PROTOCOL
                </span>
                <h4 className="font-serif text-lg text-white uppercase tracking-wider">
                  {showroomGallery[activeGalleryIndex].title}
                </h4>
                <p className="text-xs text-white/40 leading-relaxed font-sans font-light">
                  {showroomGallery[activeGalleryIndex].concept}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setActiveGalleryIndex(prev => (prev === 0 ? showroomGallery.length - 1 : prev - 1))}
                  className="w-10 h-10 border border-white/10 hover:border-white/30 flex items-center justify-center text-white bg-[#030303]/60 cursor-pointer"
                >
                  &larr;
                </button>
                <button
                  onClick={() => setActiveGalleryIndex(prev => (prev === showroomGallery.length - 1 ? 0 : prev + 1))}
                  className="w-10 h-10 border border-white/10 hover:border-white/30 flex items-center justify-center text-white bg-[#030303]/60 cursor-pointer"
                >
                  &rarr;
                </button>
              </div>
            </div>
            
            {/* Lighbox Magnifier Button */}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="absolute top-4 right-4 p-2 bg-black/80 border border-white/10 hover:border-white/30 text-white flex items-center justify-center"
            >
              <Maximize2 className="w-3.5 h-3.5 text-[#A68F6B]" />
            </button>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between border border-white/5 bg-[#050505] p-6 sm:p-10 text-left space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[9px] tracking-widest text-[#A68F6B] uppercase block">ARCHITECTURAL DIRECTIVE</span>
              <h3 className="font-serif text-xl text-white uppercase">The Akurana Sanctuary Principle</h3>
              <p className="text-xs text-white/40 leading-relaxed font-light">
                We design environments that support focus. Standard retail shops pack showcases tight, forcing hurried choices under excessive glare. We split our flagship into separate, quiet compartments where families sit around heavy solid wood tables to inspect one single ring or necklace sequence at a time in absolute quietude.
              </p>
            </div>

            <div className="space-y-4 border-t border-white/10 pt-6">
              {showroomGallery.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveGalleryIndex(i)}
                  className={`w-full flex items-center gap-4 text-left py-2 border-b border-white/5 last:border-b-0 transition-all ${activeGalleryIndex === i ? 'text-[#A68F6B]' : 'text-white/40 hover:text-white/70'}`}
                >
                  <span className="font-mono text-xs">0{i + 1}</span>
                  <div className="flex-1">
                    <h5 className="font-serif text-[13px] uppercase tracking-wider leading-tight">{img.title.split("The ")[1]}</h5>
                    <span className="text-[9px] font-mono opacity-60 tracking-widest uppercase block">{img.provenance}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Lightbox full overlay */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLightboxOpen(false)}
              className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              <button className="absolute top-6 right-6 text-white/40 hover:text-white font-mono text-[10px] tracking-[0.2em] uppercase">
                EXIT PORTRAIT VIEW [X]
              </button>
              <motion.div
                initial={{ scale: 0.96 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.96 }}
                className="max-w-5xl max-h-[85vh] overflow-hidden border border-white/10 bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={showroomGallery[activeGalleryIndex].url}
                  alt={showroomGallery[activeGalleryIndex].title}
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[80vh] object-contain filter brightness-[0.7] contrast-[1.05]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* 4. THE INTERACTIVE VIRTUAL WALKTHROUGH CHAMBERS (WITH SENSORIAL EXPANSION) */}
      <section className="py-24 sm:py-36 bg-[#020202] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24 mb-16 items-start">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[9px] tracking-[0.45em] text-[#A68F6B] uppercase block">
                SIMULATE THE ATMOSPHERE
              </span>
              <h2 className="text-4xl sm:text-5xl font-serif font-light text-white uppercase leading-none tracking-tight">
                Virtual Flagship <br />
                <span className="font-serif italic font-light text-white/70">Walkthrough Tour</span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:pt-10">
              <p className="text-xs sm:text-[14px] text-white/45 leading-relaxed font-sans font-light tracking-wide">
                Can't travel to Akurana immediately? Select a room from our localized walkthrough grid from anywhere in the world. Click the design hotspots mapped over the spaces to reveal specialized boutique services and tools.
              </p>
            </div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* The chambers selection tree - Left */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              {[
                { key: 'bridal', title: "Kandyan Bridal Parlour", tag: "FITTING ROOMS", desc: "For traditional nested seven chain mapping." },
                { key: 'gold', title: "22k Gold Smelters Room", tag: "THE FORGE ATELIER", desc: "For point-by-point manual wire smelting." },
                { key: 'gemstone', title: "Gemstone Vault & Lounge", tag: "EXPERT INCLUSIONS SERVICE", desc: "For sapphire inclusion microscope analysis." }
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => { setActiveChamber(item.key as any); setSelectedHotspot(null); }}
                  className={`p-6 text-left border transition-all duration-300 relative overflow-hidden group cursor-pointer ${activeChamber === item.key ? 'border-[#A68F6B] bg-[#A68F6B]/5' : 'border-white/5 hover:border-white/10 bg-black/40'}`}
                >
                  <span className="font-mono text-[8px] text-[#A68F6B] tracking-[0.25em] uppercase block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="font-serif text-lg text-white uppercase tracking-wider">{item.title}</h4>
                  <p className="text-xs text-white/40 font-light mt-1.5">{item.desc}</p>
                </button>
              ))}
            </div>

            {/* The interactive map frame with absolute hotspots - Right */}
            <div className="lg:col-span-8 relative aspect-[4/3] bg-[#0c0c0c] border border-white/5 overflow-hidden flex items-center justify-center">
              
              <img
                src={currentChamber.image}
                alt={currentChamber.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.45] contrast-[1.03] transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

              {/* Hotspot triggers overlay */}
              {currentChamber.hotspots.map((spot) => (
                <button
                  key={spot.id}
                  onClick={() => setSelectedHotspot(selectedHotspot === spot.id ? null : spot.id)}
                  style={{ top: spot.top, left: spot.left }}
                  className="absolute w-10 h-10 -ml-5 -mt-5 flex items-center justify-center cursor-pointer group"
                >
                  <span className="absolute inset-0 rounded-full bg-[#A68F6B]/25 animate-ping" />
                  <span className="absolute w-6 h-6 rounded-full bg-black border-2 border-[#A68F6B] flex items-center justify-center font-mono text-[10px] font-bold text-[#A68F6B] group-hover:bg-[#A68F6B] group-hover:text-black transition-all">
                    +
                  </span>
                  
                  {/* Subtle hover tooltip */}
                  <span className="absolute bottom-11 whitespace-nowrap bg-black border border-white/10 text-[9px] text-white/70 font-mono tracking-widest uppercase px-3 py-1 scale-0 group-hover:scale-100 transition-transform origin-bottom">
                    {spot.marker}
                  </span>
                </button>
              ))}

              {/* Glowing active hotspots dossier overlay card */}
              <AnimatePresence>
                {selectedHotspot && (() => {
                  const spotObj = currentChamber.hotspots.find(s => s.id === selectedHotspot);
                  if (!spotObj) return null;
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 15 }}
                      className="absolute bottom-6 left-6 right-6 border border-[#A68F6B]/30 p-6 bg-[#030303]/98 text-left space-y-2 max-w-xl shadow-2xl z-10"
                    >
                      <div className="flex justify-between items-start">
                        <div className="space-y-0.5">
                          <span className="font-mono text-[9px] text-[#A68F6B] uppercase tracking-[0.2em] block">HOTSPOT DECRYPT</span>
                          <h4 className="font-serif text-[15px] text-white uppercase tracking-wider">{spotObj.topic}</h4>
                        </div>
                        <button
                          onClick={() => setSelectedHotspot(null)}
                          className="text-[9px] font-mono text-white/30 hover:text-white"
                        >
                          CLOSE [X]
                        </button>
                      </div>
                      <p className="text-xs text-white/50 leading-relaxed font-sans font-light font-light">
                        {spotObj.detail}
                      </p>
                    </motion.div>
                  );
                })()}
              </AnimatePresence>

              {/* Chamber overview banner */}
              <div className="absolute top-4 left-4 font-mono text-[9px] bg-black/85 border border-white/10 text-white/60 uppercase tracking-widest py-1.5 px-3">
                📍 {currentChamber.title} TOUR
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. THE STORE EXPERIENCE MAGAZINE SPREAD (THE UNCOMPROMISING EXPERTISE) */}
      <section className="py-24 sm:py-36 max-w-7xl mx-auto px-6 sm:px-12 text-left">
        
        <div className="max-w-2xl mb-16 sm:mb-24">
          <span className="font-mono text-[9px] tracking-[0.45em] text-white/40 uppercase block mb-4">
            AUTHENTIC REVERENCE
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white uppercase leading-none tracking-tight">
            The Flagship <br />
            <span className="font-serif italic font-light text-white/70">Atelier Experience</span>
          </h2>
          <p className="text-xs sm:text-[14px] text-white/45 max-w-lg leading-relaxed pt-3">
            Physically visiting New Kamal Jewellers stands as a distinct ceremony of itself. We surround your design consultation with silent, rigorous expertise and heritage protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              icon: <Users className="w-5 h-5 text-[#A68F6B]" />,
              title: "PRIVATE BRIDAL CONSULTATION",
              desc: "Every bridal commission begins with a dedicated consultation focused on personal style, family traditions, occasion requirements, and bespoke design direction."
            },
            {
              icon: <Award className="w-5 h-5 text-[#A68F6B]" />,
              title: "MASTER CRAFTSMAN GUIDANCE",
              desc: "Discuss gold purity, gemstone selection, setting techniques, and custom design possibilities directly with experienced jewellery specialists."
            },
            {
              icon: <ShieldCheck className="w-5 h-5 text-[#A68F6B]" />,
              title: "CERTIFIED PURITY & APPRAISAL",
              desc: "Experience transparent purity verification, gemstone evaluation, and trusted jewellery assessment backed by generations of expertise."
            }
          ].map((exp, idx) => (
            <div key={idx} className="border border-white/5 bg-[#050505] p-8 space-y-4 hover:border-[#A68F6B]/20 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5">
                {exp.icon}
              </div>
              <h3 className="font-serif text-lg text-white uppercase tracking-wide pt-2">{exp.title}</h3>
              <p className="text-xs text-white/45 leading-relaxed font-sans font-light">{exp.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* 6. STYLE VECTOR INTERACTIVE MAP & ROUTE PLANNER */}
      <section className="py-24 sm:py-36 bg-[#020202] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24 items-center">
            
            {/* SVG Visual Map Marker Segment */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="relative aspect-[4/3] bg-black border border-white/10 p-6 overflow-hidden">
                <div className="absolute top-4 left-4 font-mono text-[9px] text-[#A68F6B] uppercase tracking-[0.2em]">
                  📍 PATH MAP POSITION REFERENCE
                </div>

                {/* Styled Vector SVG Map of Kandy-Akurana Highway A9 corridor */}
                <svg viewBox="0 0 400 300" className="w-full h-full filter brightness-[0.8] contrast-[1.1] opacity-75">
                  <defs>
                    <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#A68F6B" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#444" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Ground faint grids */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#111" strokeDasharray="3,3" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="#111" strokeDasharray="3,3" />
                  <line x1="100" y1="0" x2="100" y2="300" stroke="#111" strokeDasharray="3,3" />
                  <line x1="200" y1="0" x2="200" y2="300" stroke="#111" strokeDasharray="3,3" />
                  <line x1="300" y1="0" x2="300" y2="300" stroke="#111" strokeDasharray="3,3" />

                  {/* The A9 Highway curved path */}
                  <path
                    d="M 120 290 Q 150 200 140 150 T 260 40"
                    fill="none"
                    stroke="#222"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 120 290 Q 150 200 140 150 T 260 40"
                    fill="none"
                    stroke="url(#glow-grad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className="stroke-pulse"
                  />

                  {/* Colombo road connection */}
                  <path d="M 10 280 L 120 290" fill="none" stroke="#222" strokeWidth="2" strokeDasharray="4,4" />

                  {/* Kandy Town Center Marker */}
                  <circle cx="120" cy="290" r="5" fill="#333" stroke="#A68F6B" strokeWidth="1" />
                  <text x="135" y="294" fill="#666" fontSize="8" fontFamily="monospace" letterSpacing="1">KANDY TOWN</text>

                  {/* Katugastota Bridge Node */}
                  <circle cx="145" cy="205" r="5" fill="#333" stroke="#A68F6B" strokeWidth="1" />
                  <text x="160" y="209" fill="#555" fontSize="8" fontFamily="monospace" letterSpacing="1">KATUGASTOTA</text>

                  {/* Akurana Showroom Master Pin Flag */}
                  <circle cx="140" cy="150" r="7" className="animate-pulse" fill="#A68F6B" />
                  <circle cx="140" cy="150" r="3" fill="#000" />
                  
                  {/* Glowing compass pointer locator */}
                  <line x1="140" y1="150" x2="190" y2="120" stroke="#A68F6B" strokeWidth="1" strokeDasharray="2,2" />
                  <rect x="195" y="105" width="105" height="26" fill="#050505" stroke="#A68F6B" strokeWidth="0.5" />
                  <text x="202" y="117" fill="#FFF" fontSize="6.5" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.5">NEW KAMAL BOUTIQUE</text>
                  <text x="202" y="125" fill="#A68F6B" fontSize="6" fontFamily="monospace">A9 ROAD &bull; No. 280/1</text>

                  {/* Matale North Gate */}
                  <circle cx="260" cy="40" r="4" fill="#111" stroke="#333" strokeWidth="1" />
                  <text x="270" y="44" fill="#444" fontSize="8" fontFamily="monospace" letterSpacing="1">MATALE NORTH</text>
                </svg>

                <div className="absolute bottom-4 right-4 font-mono text-[8px] text-white/30 uppercase">
                  CENTRAL PROVINCE CORRIDOR A9
                </div>
              </div>

            </div>

            {/* Path planner selectors and guides - Right */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="font-mono text-[9px] tracking-[0.45em] text-[#A68F6B] uppercase block">
                GEOGRAPHIC NAVIGATION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light uppercase tracking-tight">
                Point Route directions
              </h3>

              {/* Selector buttons */}
              <div className="flex gap-2 overflow-x-auto pb-2 border-b border-white/5">
                {[
                  { key: 'kandy', label: "FROM KANDY TOWN" },
                  { key: 'colombo', label: "FROM COLOMBO" },
                  { key: 'katugastota', label: "FROM KATUGASTOTA" }
                ].map((btn) => (
                  <button
                    key={btn.key}
                    onClick={() => setActiveRoute(btn.key as any)}
                    className={`text-[9px] font-mono tracking-widest uppercase pl-0 pr-4 py-2 border-r last:border-0 border-white/10 transition-colors whitespace-nowrap cursor-pointer ${activeRoute === btn.key ? 'text-[#A68F6B] font-bold' : 'text-white/40 hover:text-white/70'}`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {/* Estimated metrics */}
              <div className="grid grid-cols-2 gap-4 pb-4 font-mono text-xs">
                <div className="border border-white/5 p-4 bg-[#050505]">
                  <span className="text-white/25 block uppercase tracking-wider text-[8px]">ESTIMATED DISTANCE</span>
                  <strong className="text-[#A68F6B] text-sm font-medium mt-1.5 block">{currentRoute.distance}</strong>
                </div>
                <div className="border border-white/5 p-4 bg-[#050505]">
                  <span className="text-white/25 block uppercase tracking-wider text-[8px]">AVERAGE ROAD TIME</span>
                  <strong className="text-white text-sm font-medium mt-1.5 block">{currentRoute.time}</strong>
                </div>
              </div>

              {/* Structured steps directions list */}
              <div className="space-y-4">
                <span className="font-mono text-[9px] text-white/20 tracking-widest uppercase block">COMMUTE STEPS:</span>
                <ol className="space-y-3">
                  {currentRoute.steps.map((st, i) => (
                    <li key={i} className="flex gap-3 text-xs leading-relaxed font-sans font-light">
                      <span className="font-mono text-[#A68F6B] mt-0.5 select-none">0{i+1}.</span>
                      <span className="text-white/60">{st}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=New+Kamal+Jewellers+Akurana+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/30 text-white hover:text-white-75 hover:bg-white/5 text-[10px] font-mono uppercase tracking-[0.25em] transition-all text-center"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#A68F6B]" /> LAUNCH DEVICE GPS MAPS &rarr;
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 7. PRIVATE APPOINTMENTS DESK SCHEDULER */}
      <section className="py-24 sm:py-36 max-w-4xl mx-auto px-6 sm:px-12 text-center">
        
        <div className="space-y-4 mb-16">
          <span className="font-mono text-xs tracking-[0.45em] text-[#A68F6B] uppercase block">
            VIP GUEST LOGS
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-none">
            Inscribe Your <br />
            <span className="font-serif italic font-light text-white/70">Flagship Guest Pass</span>
          </h2>
          <p className="text-xs sm:text-[14px] text-white/45 leading-relaxed font-sans font-light max-w-lg mx-auto">
            Book physical entrance inside our Akurana showroom on Matale Road. We welcome families to lock in arrival, schedule dedicated consultations, and discuss custom designs directly with our master craftsmen in complete privacy.
          </p>

          <div className="pt-2">
            <a
              href={getWhatsAppShowroomLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-mono text-[#A68F6B] hover:text-white uppercase tracking-widest hover:bg-[#A68F6B]/5 px-4 py-2 border border-[#A68F6B]/15 transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" /> DIAL INSTANT ADVISOR WHATSAPP DIRECT
            </a>
          </div>
        </div>

        <div className="border border-white/10 p-6 sm:p-10 bg-[#060606] relative overflow-hidden text-left max-w-2xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-950 via-[#A68F6B] to-red-950" />
          
          {!bookSuccess ? (
            <form onSubmit={handleShowroomSchedule} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full name input */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                    01. FULL FAMILY REGISTER NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyantha Jayasundara"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    className="w-full bg-[#030303] border border-white/10 focus:border-[#A68F6B] p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-[#A68F6B]/20 transition-all font-sans"
                  />
                </div>

                {/* Target Date */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                    02. ESTIMATED COMMUTE DATE
                  </label>
                  <input
                    type="date"
                    required
                    value={bookDate}
                    onChange={(e) => setBookDate(e.target.value)}
                    className="w-full bg-[#030303] border border-white/10 focus:border-[#A68F6B] p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-[#A68F6B]/20 transition-all font-mono"
                  />
                </div>

                {/* Contact phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                    03. WHATSAPP TELEPHONE NUMBER
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +94 77 987 6543"
                    value={bookPhone}
                    onChange={(e) => setBookPhone(e.target.value)}
                    className="w-full bg-[#030303] border border-white/10 focus:border-[#A68F6B] p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-[#A68F6B]/20 transition-all font-sans"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                    04. VIP EMAIL ACCOUNT
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. guest@royal.com"
                    value={bookEmail}
                    onChange={(e) => setBookEmail(e.target.value)}
                    className="w-full bg-[#030303] border border-white/10 focus:border-[#A68F6B] p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-[#A68F6B]/20 transition-all font-sans"
                  />
                </div>

                {/* Time slot preference */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                    05. INTENDED TIME CHAMBER INDEX
                  </label>
                  <select
                    value={bookTime}
                    onChange={(e) => setBookTime(e.target.value)}
                    className="w-full bg-[#030303] border border-white/10 text-white p-3 text-xs outline-none focus:border-[#A68F6B] tracking-wider font-sans focus:ring-1 focus:ring-[#A68F6B]/20 transition-all"
                  >
                    <option value="Morning Session (10:00 AM - 12:00 PM)">Morning Session (10:00 AM - 12:00 PM)</option>
                    <option value="Afternoon Session (01:00 PM - 03:00 PM)">Afternoon Session (01:00 PM - 03:00 PM)</option>
                    <option value="Sunset Private Lounge Session (04:00 PM - 06:00 PM)">Sunset Private Lounge Session (04:00 PM - 06:00 PM)</option>
                  </select>
                </div>

                {/* Party Guest counter */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                    06. INTENDED GUESTS SIZE
                  </label>
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="w-full bg-[#030303] border border-white/10 text-white p-3 text-xs outline-none focus:border-[#A68F6B] tracking-wider font-sans focus:ring-1 focus:ring-[#A68F6B]/20 transition-all"
                  >
                    <option value="1 Guest (Solo Commission)">1 Guest (Solo Commission)</option>
                    <option value="2 Guests (Couple Calibration)">2 Guests (Couple Calibration)</option>
                    <option value="3 to 5 Guests (Family Advisory Team)">3 to 5 Guests (Family Advisory Team)</option>
                  </select>
                </div>

              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black text-[10.5px] font-mono font-bold tracking-[0.3em] uppercase hover:bg-white/90 transition-all cursor-pointer text-center"
                >
                  INSCRIBE ENTRY PASS &Bar; GENERATE BARCODE
                </button>
              </div>

            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-4 text-center space-y-6"
            >
              
              {/* Premium Printable Ticket Layout */}
              <div className="border border-[#A68F6B]/40 bg-black p-6 text-left space-y-6 relative max-w-sm mx-auto shadow-2xl">
                
                <div className="absolute top-2 right-2 text-[30px] font-bold font-serif text-[#A68F6B]/5 select-none pointer-events-none">
                  FLAGSHIP
                </div>

                <div className="text-center pb-4 border-b border-dashed border-[#A68F6B]/20">
                  <span className="font-serif text-[17px] font-bold tracking-[0.15em] text-white">
                    NEW KAMAL JEWELLERS
                  </span>
                  <span className="block font-serif text-[8.5px] tracking-[0.45em] text-[#A68F6B] uppercase mt-0.5">
                    AKURANA FLAGSHIP PASS &bull; VIP ENTRANCE
                  </span>
                </div>

                <div className="space-y-2.5 font-mono text-[11px] text-white/50 pt-2">
                  <div className="flex justify-between">
                    <span className="uppercase text-white/30">PASS CODE</span>
                    <strong className="text-[#A68F6B] tracking-wider">{passCode}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase text-white/30">VIP REGISTERED</span>
                    <strong className="text-white font-sans">{bookName}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase text-white/30">DESTINATION</span>
                    <strong className="text-white font-sans">Akurana Flagship (Matale Road)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase text-white/30">CALENDAR DATE</span>
                    <strong className="text-[#A68F6B]">{bookDate}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase text-white/30">CHAMBER SESSION</span>
                    <strong className="text-white text-[10px] font-sans font-light">{bookTime.split(" (")[0]}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="uppercase text-white/30">GROUP AUDIENCE</span>
                    <strong className="text-white font-sans">{partySize}</strong>
                  </div>
                </div>

                {/* Simulated high-end barcode for admission scanner */}
                <div className="pt-4 border-t border-[#A68F6B]/25 space-y-2 text-center">
                  <div className="inline-block py-1 px-4 bg-white/5 border border-white/10 text-white font-mono text-[11px] tracking-[0.6em] select-none block max-w-xs mx-auto">
                    ||||||| | ||||| | ||| |||||| | |||
                  </div>
                  <span className="text-[8px] font-mono text-white/20 tracking-widest block uppercase">
                    BARCODE DIGITAL SIGNATURE ACTIVE
                  </span>
                </div>

                <div className="text-[8px] font-sans text-center text-white/30 tracking-wide pt-0 w-full">
                  Confirmation logged. Present this passes on device screen at front-security desk for prioritized entry.
                </div>

              </div>

              <div className="space-y-4 pt-4">
                <h4 className="font-serif text-xl sm:text-2xl text-white uppercase tracking-wider">Pass Granted & Logged</h4>
                <p className="text-xs text-white/50 font-light leading-relaxed max-w-sm mx-auto font-sans">
                  We look forward to welcoming you inside our flagships chamber. Your private host advisor is notified.
                </p>
                
                <button
                  onClick={() => setBookSuccess(false)}
                  className="text-[10px] uppercase tracking-widest font-mono text-[#A68F6B] hover:text-white transition-colors border-b border-[#A68F6B]/20 pb-0.5 pt-2"
                >
                  &larr; INSCRIBE ANOTHER PASSENT
                </button>
              </div>

            </motion.div>
          )}

        </div>
      </section>

    </div>
  );
}
