import { useState, useRef, useEffect, MouseEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Calendar,
  Heart,
  ShieldCheck,
  Star,
  ZoomIn,
  MessageCircle,
  Phone,
  ArrowUpRight,
  Award,
  Flame,
  Eye,
  Compass,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  FileText,
  HeartHandshake
} from 'lucide-react';
import { ShowroomAppointment } from '../types';
import PageHeader from './PageHeader';

interface BridalExperiencePageProps {
  onBookClick: () => void;
  onNavigate: (page: string) => void;
  onAppointmentSuccess?: (app: ShowroomAppointment) => void;
}

export default function BridalExperiencePage({ onBookClick, onNavigate, onAppointmentSuccess }: BridalExperiencePageProps) {
  // Page states
  const [activeCollectionTab, setActiveCollectionTab] = useState<'kandyan' | 'diamond' | 'tamil'>('kandyan');
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null);
  const [lovedStories, setLovedStories] = useState<Record<string, boolean>>({});
  
  // Custom form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [ceremonyDate, setCeremonyDate] = useState('');
  const [stylePreference, setStylePreference] = useState('The Traditional Kandyan Seven Layers');
  const [showroomLoc, setShowroomLoc] = useState<'Akurana Showroom (Main)' | 'Online Virtual'>('Akurana Showroom (Main)');
  const [timeSession, setTimeSession] = useState('Afternoon Session (01:00 PM - 03:00 PM)');
  const [customRequests, setCustomRequests] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState('');

  // Scroll to top when page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // 1. Collections Data
  const bridalCollections = {
    kandyan: {
      title: "The Regal Kandyan Seven-Chains",
      concept: "CAMPAIGN I &bull; THE IMPERIAL HEIRLOOM ASSEMBLAGE",
      description: "An absolute masterwork requiring over 180 continuous hours of soldering. This legendary Sri Lankan tradition requires seven nested layers of distinct gold necklaces—each honoring a stellar protection or cosmic force. Formed with certified 22-carat gold, our goldsmiths calibrate every link to respond to the dynamic weight of the sacred wedding morning.",
      image: "/src/assets/images/bridal.webp",
      traditionalWeight: "90 TO 150 SOVEREIGNS (720g - 1,200g)",
      customizationOptions: "Adaptable layer lengths, custom ruby or padparadscha sapphire clasp inserts, customizable thickness.",
      highlightQuote: "“To carry the traditional seven layers is to wrap the visual, unbreakable lineage of Kandy's queens around your shoulders.”",
      details: ["Point-by-point manual forge alignment", "Includes matching forehead Nalal Pataya", "Certified 22k pure Sri Lankan assay gold"]
    },
    diamond: {
      title: "The Celestial Diamond Constellation",
      concept: "CAMPAIGN II &bull; COLD-PLATINUM SPACE-GEOMETRY",
      description: "We reject the chaotic mass production of modern diamond settings. Our bridal collared lattices use Antwerp triple-excellent brilliants hand-mounted inside raw platinum frameworks. The settings are microscopically open on the reverse to let Ceylon sunlight pour through, ensuring magnificent fire under both temple canopies and ballroom crystal chandeliers.",
      image: "/src/assets/images/wedding_bands.webp",
      traditionalWeight: "18 to 45 TOTAL CARATS GIA CERTIFIED",
      customizationOptions: "Configurable hand-cut diamond shapes (pear, marquise, emerald), platinum 950 or 18k white gold mounting.",
      highlightQuote: "“A diamond is not mere status; it is natural crystalline mathematics speed-translating low-source light into pure color.”",
      details: ["True low-profile prong settings", "Includes certified GIA grading ledger", "Pre-matched high-refraction clusters"]
    },
    tamil: {
      title: "The Sovereign Temple Sunburst",
      concept: "CAMPAIGN III &bull; SACRED COIN & MANGO LEAF HARMONIES",
      description: "Honoring the historic jewelry styles of Kovils and Southern Dravidian lineages, the Temple Sunburst matches heavy, hand-carved mango leaves with auspicious Kasu coins. The centerpiece captures the fierce protection of the sun, accented by deep-saturated untreated Burmese rubies and highly polished yellow gold borders that resist modern dilutions.",
      image: "/src/assets/images/gold_smelt.webp",
      traditionalWeight: "40 TO 85 GRAMS OF PURE 22K ALLOY",
      customizationOptions: "Custom coin carvings (deity or lotus engravings), variable pendant drop scales, high-polish or vintage patina finish.",
      highlightQuote: "“The sound of gold coins touching during the ceremony serves as the elemental heartbeat of a lifelong covenant.”",
      details: ["Hand-chased mango leaf details", "No computer-aided cast moulds used", "Gleaming velvet-gold premium rubies"]
    }
  };

  // 2. Ring Guide Data
  const ringProfiles = [
    {
      name: "The Soft Cushion Court",
      description: "Gracefully domed outer profile matched with a highly curved comfort-fit interior. Designed for seamless daily wear across decades without skin tension.",
      idealFor: "Perfect backing to frame a prominent solitaire engagement diamond."
    },
    {
      name: "The Matte Oyster Skin",
      description: "A flat, architectural profile featuring hand-applied satin horizontal brushing. Resists standard surface scratches with timeless underplayed elegance.",
      idealFor: "Ideal for couples prioritizing structural texture over high mirror reflection."
    },
    {
      name: "The Symmetrical Bevel Edge",
      description: "A classic flat band punctuated by two precisely cut 45-degree polished chamfers. Creates sharp geometric sparkles under minimal natural light.",
      idealFor: "Bears a striking modern silhouette that highlights thick precious weight."
    }
  ];

  // 3. Gallery Images (Visuals showing details)
  const galleryImages = [
    {
      url: "/src/assets/images/bridal.webp",
      tag: "THE TRADITIONAL COVENANT",
      title: "Traditional Akurana 22k Tier Ensemble"
    },
    {
      url: "/src/assets/images/wedding_bands.webp",
      tag: "GEOMETRICAL FIRE",
      title: "The Antwerp Solid Claws detail"
    },
    {
      url: "/src/assets/images/craftsmanship.webp",
      tag: "THE ATELIER SMITHY",
      title: "Master Goldsmith Drawing Hair Filaments"
    },
    {
      url: "/src/assets/images/showroom.webp",
      tag: "THE DESIGN CHAMBER",
      title: "Kandy Region Private Bridal Salon Suite"
    },
    {
      url: "/src/assets/images/gold_smelt.webp",
      tag: "HEIRLOOM SPECS",
      title: "Heavy Bezel-Mounted Colombian Gemstones"
    },
    {
      url: "/src/assets/images/hero.webp",
      tag: "THE ULTIMATE SHINE",
      title: "Assay Hallmarked Velvet Gold Polish"
    }
  ];

  // 4. Testimonials (Love Stories)
  const loveStories = [
    {
      id: "story-1",
      couple: "Anura & Dilhani",
      origin: "Akurana Town &bull; Celebrated June 2025",
      photo: "/src/assets/images/bridal_portrait_1.webp",
      narrative: "“We visited three mass-retail jewelers before entering New Kamal’s private studio. The difference was night and day. There was no sales pitch—only an absolute dedication to mapping my collarbones for the Traditional Seven Chains. The master goldsmith physically adjusted each loop to sit perfectly flush over my temple sari. When my grandmother weighed it in her hands, she wept at the purity of the color.”",
      piece: "Custom Seven-Chain Kandyan Assembly in 22k Gold (120 Sovereigns)"
    },
    {
      id: "story-2",
      couple: "Dr. Rajiv & Priyantha",
      origin: "Colombo / Kandy Royal Assembly &bull; Celebrated Jan 2026",
      photo: "/src/assets/images/bridal_portrait_2.webp",
      narrative: "“Our diamond wedding necklace was custom-crafted from an Antwerp raw shipment. I sat in the Akurana showroom and watched the drafting of the white gold borders. They handled the stones under a high-powered lens so we could inspect each facet ourselves. Every guest remarked that the reflection under the ceremony lights was explosive. It is now our family’s crown heirloom.”",
      piece: "Antwerp Marquise Latticed Collar Necklace (24.5 Carats Total)"
    }
  ];

  // 5. Submit Custom Bridal Scheduler
  const handleBespokeBook = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone || !ceremonyDate) return;

    const randTicket = `NKJ-BRIDAL-${Math.floor(10000 + Math.random() * 90000)}`;
    setTicketNumber(randTicket);

    const appointment: ShowroomAppointment = {
      fullName,
      email,
      phone,
      date: ceremonyDate,
      timeSlot: timeSession,
      serviceType: `Bespoke Bridal: ${stylePreference}`,
      showroomLocation: showroomLoc,
      specialRequests: `${customRequests} || Preferred Style: ${stylePreference}. Entered from Bridal Experience Campaign.`
    };

    // Store in localStorage
    localStorage.setItem('nk_appointment_active', JSON.stringify({ ...appointment, ticketId: randTicket }));
    
    setIsSuccess(true);

    if (onAppointmentSuccess) {
      onAppointmentSuccess(appointment);
    }
  };

  // WhatsApp helper
  const getWhatsAppBridalLink = () => {
    const message = `Hello New Kamal. I am interested in exploring a premium Bespoke Bridal Commission. My preferred style is ${stylePreference}. I would love to discuss custom gold weights and arrange a family viewing session inside your private salon.`;
    return `https://wa.me/94728866851?text=${encodeURIComponent(message)}`;
  };

  return (
    <div id="bridal-experience-campaign-view" className="bg-[#030303] text-white min-h-screen relative overflow-hidden font-sans pb-32 text-left select-none">
      
      {/* Absolute Soft Gold Ambiguity Glows */}
      <div className="absolute top-0 left-1/4 w-[50vw] h-[45vh] bg-[radial-gradient(circle,rgba(166,143,107,0.02),transparent_70%)] pointer-events-none" />
      <div className="absolute top-[120vh] right-0 w-[40vw] h-[60vh] bg-[radial-gradient(circle,rgba(166,143,107,0.015),transparent_70%)] pointer-events-none" />

      <PageHeader onBack={() => onNavigate('home')} />

      {/* 1. BRIDAL HERO (EVOCATIVE IMMERSIVE SPLIT PRESENTATION) */}
      <section className="py-24 sm:py-32 lg:py-48 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Hero Story Text */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-12">
            <div className="space-y-6">
              <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">
                SPECIALIST IN AUDRY HERITAGE
              </span>
              <h1 className="font-serif text-[clamp(2.5rem,8vw,7.5rem)] font-light tracking-tight text-white uppercase leading-[1.05]">
                Bridal <br />
                <span className="italic text-white/50 font-light lowercase">Couture Ensembles</span>
              </h1>
            </div>

            <p className="text-[15px] sm:text-[17px] text-white/40 leading-relaxed font-sans font-light tracking-wide max-w-xl italic">
              We believe a wedding jewelry suite is not a mere purchase—it is a continuous physical alignment of ancestors, elements, and uncompromised purity. Inside our Akurana forge, we hand-sculpt traditional Sinhala and Tamil masterpieces designed to sit flawlessly under sacred vows.
            </p>

            <blockquote className="border-l border-white/[0.05] pl-8 py-2 italic font-serif text-[18px] sm:text-[22px] text-white/20 font-light leading-relaxed">
              &ldquo;A wedding happens in a single morning. A New Kamal masterwork secures your family lineage across several generations.&rdquo;
            </blockquote>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 pt-6">
              <a
                href="#bridal-journey-consultation"
                className="px-12 py-5 bg-white hover:bg-gold-500 text-black text-[10px] tracking-[0.4em] uppercase font-mono transition-all duration-700 text-center cursor-pointer"
              >
                THE EXPERIENCE JOURNEY
              </a>
              <a
                href="#bridal-dossier-booking"
                className="px-12 py-5 border border-white/10 hover:border-white/30 text-white/40 hover:text-white text-[10px] tracking-[0.4em] uppercase font-mono text-center transition-all duration-700 cursor-pointer"
              >
                BOOK SALON VISIT &rarr;
              </a>
            </div>
          </div>

          {/* Hero Splendid Graphic Asset */}
          <div className="lg:col-span-12 xl:col-span-6">
            <div className="relative aspect-[4/5] bg-[#080808] border border-white/[0.03] overflow-hidden group">
              <img
                src="/src/assets/images/bridal.webp"
                alt="A magnificent heavy 22k gold traditional bridal necklace suite with nested layers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] group-hover:scale-105 transition-transform duration-[4000ms] ease-[0.16, 1, 0.3, 1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="space-y-2">
                  <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.4em] block">THE CORE MASTER PIECE</span>
                  <p className="font-serif text-[16px] text-white/60 uppercase tracking-widest">The Akurana Seven Chains Ensemble</p>
                </div>
                <Award className="w-6 h-6 text-white/20 group-hover:text-gold-500/60 transition-colors duration-700" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE CONSULTATION JOURNEY (THE PRIVATE SUITE TIMELINE) */}
      <section id="bridal-journey-consultation" className="py-32 sm:py-48 bg-[#020202] border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          
          <div className="max-w-3xl mb-24 sm:mb-32">
            <span className="font-mono text-[9px] tracking-[0.5em] text-[#A68F6B] uppercase block mb-6">
              THE WORKSHOP LIFETIME
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-[1.1]">
              The Consultation <br />
              <span className="italic text-white/40 font-light lowercase">Suite Journey</span>
            </h2>
            <p className="text-[15px] sm:text-[16px] text-white/30 leading-relaxed font-sans font-light max-w-xl pt-8 italic">
              We hold our client relationships in extreme reverence. We reject swift transactions. Creating your bridal suite involves a deep, comfortable timeline inside our private rooms:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "I",
                title: "The Private Sanctuary",
                desc: "You are welcomed inside our private suite with traditional hospitality. Share your family heritage and dress silks, and we understand your silhouetting desires."
              },
              {
                num: "II",
                title: "Anatomical Calibration",
                desc: "We draft the jewelry on physical temple models. Chains are calibrated and customized centimeter-by-centimeter, so they drape flawlessly along your neckline."
              },
              {
                num: "III",
                title: "Strict Single Smelting",
                desc: "Our Akurana smiths melt certified 22k pure yellow gold or platinum in a single-pour furnace. Filaments are drawn and aligned entirely by hand by veteran master craftsmen."
              },
              {
                num: "IV",
                title: "The Celestial Dressing",
                desc: "Arrive for your private fitting with your family. We inspect the jewelry draping under simulated ceremonial warm lighting to ensure the reflection is absolute perfection."
              }
            ].map((step, idx) => (
              <div key={idx} className="border border-white/[0.05] p-10 bg-[#040404] hover:bg-gold-500/[0.02] hover:border-gold-500/20 transition-all duration-700 space-y-8 flex flex-col group">
                <span className="font-serif text-[48px] font-light text-white/10 group-hover:text-gold-500/20 transition-colors duration-700 leading-none">{step.num}</span>
                <div className="space-y-4">
                  <h4 className="font-serif text-[18px] text-white uppercase tracking-widest">{step.title}</h4>
                  <div className="w-8 h-[1px] bg-white/[0.05]" />
                  <p className="text-[13px] text-white/30 leading-relaxed font-light font-sans tracking-wide">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BRIDAL COLLECTIONS (INTERACTIVE SWAPPABLE DOSSIER) */}
      <section className="py-32 sm:py-48 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="max-w-4xl mb-24 text-left">
          <span className="font-mono text-[9px] tracking-[0.5em] text-white/20 uppercase block mb-6">THE CAMPAIGNS</span>
          <h2 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase leading-[1.1] tracking-tight">
            The Three Sovereign <br />
            <span className="italic text-white/40 font-light lowercase">Bridal Portfolios</span>
          </h2>
        </div>

        {/* Custom tabs */}
        <div className="flex border-b border-white/[0.03] gap-12 overflow-x-auto pb-4 mb-20 scrollbar-hide">
          {(Object.keys(bridalCollections) as Array<keyof typeof bridalCollections>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveCollectionTab(key)}
              className={`text-[10px] font-mono tracking-[0.5em] uppercase pb-4 transition-all duration-700 cursor-pointer whitespace-nowrap outline-none relative group ${activeCollectionTab === key ? 'text-[#A68F6B]' : 'text-white/20 hover:text-white/60'}`}
            >
              {bridalCollections[key].title.split("The ")[1] || bridalCollections[key].title}
              {activeCollectionTab === key && (
                <motion.div layoutId="bridal-tab" className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#A68F6B]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab content with animations */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCollectionTab}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center"
          >
            {/* Visual side */}
            <div className="lg:col-span-12 xl:col-span-7">
              <div className="relative aspect-[4/3] bg-[#0c0c0c] border border-white/[0.03] overflow-hidden group">
                <img
                  src={bridalCollections[activeCollectionTab].image}
                  alt={bridalCollections[activeCollectionTab].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] group-hover:scale-105 transition-transform duration-[4000ms] ease-[0.16, 1, 0.3, 1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-10 left-10 font-mono text-[9px] tracking-[0.4em] text-white/20 uppercase">
                  {bridalCollections[activeCollectionTab].concept}
                </span>
              </div>
            </div>

            {/* Context side */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-10 text-left">
              <div className="space-y-6">
                <span className="font-mono text-[9px] tracking-[0.4em] text-[#A68F6B] uppercase block">
                  {bridalCollections[activeCollectionTab].concept}
                </span>
                <h3 className="font-serif text-[32px] sm:text-[42px] font-light text-white uppercase leading-tight tracking-tight">
                  {bridalCollections[activeCollectionTab].title}
                </h3>
                <div className="w-10 h-[1px] bg-white/[0.05]" />
                <p className="text-[15px] text-white/30 leading-relaxed font-sans font-light tracking-wide italic">
                  {bridalCollections[activeCollectionTab].description}
                </p>
              </div>

              <blockquote className="border-l border-[#A68F6B]/20 pl-8 py-2 italic text-[16px] font-serif text-[#A68F6B]/60 leading-relaxed">
                {bridalCollections[activeCollectionTab].highlightQuote}
              </blockquote>

              <div className="pt-10 border-t border-white/[0.03] space-y-6 text-[10px] font-mono text-white/20 tracking-widest">
                <div className="flex justify-between items-baseline gap-4">
                  <span className="uppercase opacity-60">TRADITIONAL WEIGHT RANGE</span>
                  <span className="text-white font-light text-right">{bridalCollections[activeCollectionTab].traditionalWeight}</span>
                </div>
                <div className="flex justify-between items-baseline gap-6">
                  <span className="uppercase opacity-60">CUSTOMIZATION FREEDOM</span>
                  <span className="text-white font-light text-right leading-relaxed max-w-[240px] uppercase">{bridalCollections[activeCollectionTab].customizationOptions}</span>
                </div>
              </div>

              <div className="pt-10">
                <a
                  href="#bridal-dossier-booking"
                  className="inline-flex items-center gap-4 text-white/40 hover:text-gold-400 text-[10px] font-mono tracking-[0.5em] uppercase pb-2 border-b border-white/10 hover:border-gold-500/30 transition-all duration-700 underline-offset-8"
                >
                  CONFIG WITH AN ADVISOR &rarr;
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </section>

      {/* 4. WEDDING RING GUIDE (COGNIZANT SEAMLESS PRECISION) */}
      <section className="py-32 sm:py-48 bg-[#020202] border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">
            
            {/* Guide Explainer Text */}
            <div className="lg:col-span-12 xl:col-span-5 space-y-12 text-left">
              <div className="space-y-6">
                <span className="font-mono text-[9px] tracking-[0.5em] text-[#A68F6B] uppercase block">
                  THE SYMBOL OF INFINITY
                </span>
                <h2 className="text-4xl sm:text-6xl font-serif font-light text-white uppercase leading-[1.1] tracking-tight">
                  The Unbroken <br />
                  <span className="italic text-white/40 font-light lowercase">Melt Covenant</span>
                </h2>
                <div className="w-10 h-[1px] bg-white/[0.05]" />
                <p className="text-[15px] sm:text-[16px] text-white/30 leading-relaxed font-sans font-light tracking-wide italic">
                  A marriage bond should have no structural starting point or seam joints. Unlike commercially soldered rings, New Kamal wedding bands are cast from a single, unified metal pour inside our regional furnace. We melt platinum or yellow gold bullion and hand-hammer them to shape individual rings simultaneously.
                </p>
              </div>

              <div className="border border-white/[0.03] bg-white/[0.01] p-8 sm:p-10 space-y-4 font-sans text-xs">
                <h4 className="font-serif text-[16px] font-light text-[#A68F6B] uppercase tracking-widest flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 opacity-60" /> Pure Alloy Standards
                </h4>
                <p className="text-white/20 leading-relaxed font-light tracking-wide">
                  All wedding rings are forged exclusively using certified Platinum 950 Imperial, or certified 916 twenty-two carat gold, hallmarked by national inspectors.
                </p>
              </div>
            </div>

            {/* Profiles Compare Cards */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-10">
              <h3 className="font-serif text-[20px] text-white/60 uppercase tracking-widest text-left mb-8 font-light">
                Signature Edge Profiles
              </h3>
              
              <div className="space-y-6">
                {ringProfiles.map((p, i) => (
                  <div key={i} className="border border-white/[0.03] p-10 bg-[#040404] hover:bg-gold-500/[0.02] transition-all duration-700 text-left space-y-6 group">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-[22px] text-white group-hover:text-gold-400 transition-colors duration-700 uppercase tracking-tight font-light">
                        {p.name}
                      </h4>
                      <span className="font-mono text-[9px] text-white/10 uppercase tracking-[0.2em]">ALIGNED No. 0{i+1}</span>
                    </div>
                    <div className="w-8 h-[1px] bg-white/[0.05]" />
                    <p className="text-[14px] text-white/30 leading-relaxed font-light font-sans tracking-wide">
                      {p.description}
                    </p>
                    <div className="pt-4 flex items-center gap-3 font-mono text-[10px] text-[#A68F6B]/60 uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5 opacity-40" /> {p.idealFor}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BRIDAL GALLERY (INTERACTIVE LIGHTBOX LAYOUT) */}
      <section className="py-24 sm:py-36 max-w-7xl mx-auto px-6 sm:px-12 text-left">
        
        <div className="max-w-xl mb-16">
          <span className="font-mono text-[9px] tracking-[0.45em] text-white/40 uppercase block mb-4">LENS AND SMITHY</span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white uppercase leading-none tracking-tight">
            The Atelier <br />
            <span className="font-serif italic font-light text-white/70">Bridal Slides</span>
          </h2>
        </div>

        {/* Gallery responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((g, idx) => (
            <div
              key={idx}
              onClick={() => setActiveGalleryImage(g.url)}
              className="group cursor-pointer relative aspect-[4/5] bg-[#0a0a0a] border border-white/5 overflow-hidden"
            >
              <img
                src={g.url}
                alt={g.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.55] group-hover:brightness-[0.7] group-hover:scale-101 transition-all duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-90" />
              
              <div className="absolute top-4 left-4 font-mono text-[8px] bg-black/80 px-2.5 py-1 text-[#A68F6B] uppercase tracking-widest border border-[#A68F6B]/10">
                {g.tag}
              </div>

              <div className="absolute bottom-4 left-4 right-4 space-y-1">
                <p className="font-serif text-sm text-white uppercase tracking-wider group-hover:text-[#A68F6B] transition-colors leading-tight">
                  {g.title}
                </p>
                <span className="font-mono text-[8px] text-white/20 tracking-widest block font-light">VIEW MACRO FRAME</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {activeGalleryImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveGalleryImage(null)}
              className="fixed inset-0 z-50 bg-black/98 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <button className="absolute top-6 right-6 text-white/40 hover:text-white text-xs font-mono tracking-widest uppercase">
                CLOSE FRAME [X]
              </button>
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl max-h-[85vh] overflow-hidden bg-black border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={activeGalleryImage}
                  alt="High resolution bridal image view close-up"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[80vh] object-contain filter brightness-[0.75] contrast-[1.03]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </section>

      {/* 6. CUSTOMER LOVE STORIES (HEARTWARMING NARRATIVES) */}
      <section className="py-24 sm:py-36 bg-[#020202] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12">
          
          <div className="max-w-xl mb-16 sm:mb-24 text-left">
            <span className="font-mono text-[9px] tracking-[0.45em] text-[#A68F6B] uppercase block mb-4">
              LIVED GENERATIONS
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif font-light text-white uppercase leading-none tracking-tight">
              Customer <br />
              <span className="font-serif italic font-light text-white/70">Bridal Love Stories</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-sans font-light max-w-md pt-4">
              Direct testimonials from families who step inside our Akurana fitting room and choose gold and diamond weight aligned with pure generational trust.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
            {loveStories.map((s) => (
              <div key={s.id} className="border border-white/5 bg-[#040404] p-8 space-y-6 text-left flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                    <div className="w-14 h-14 rounded-full bg-[#111] overflow-hidden border border-[#A68F6B]/25">
                      <img
                        src={s.photo}
                        alt={s.couple}
                        className="w-full h-full object-cover filter brightness-[0.75]"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-white font-medium">{s.couple}</h4>
                      <p className="text-[10px] font-mono text-white/30 tracking-widest uppercase mt-0.5" dangerouslySetInnerHTML={{ __html: s.origin }} />
                    </div>
                  </div>
                  
                  <div className="font-sans text-xs sm:text-[13.5px] text-white/50 leading-relaxed font-light italic">
                    {s.narrative}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                    {s.piece}
                  </span>
                  <button
                    onClick={() => setLovedStories(prev => ({ ...prev, [s.id]: !prev[s.id] }))}
                    className="p-1 text-white/30 hover:text-[#A68F6B] transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${lovedStories[s.id] ? 'fill-[#A68F6B] text-[#A68F6B]' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. APPOINTMENT BOOKING & ONLINE VIP REGISTRATION (INTERACTIVE LEDGER CTA) */}
      <section id="bridal-dossier-booking" className="py-24 sm:py-36 bg-[#030303] text-left border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-12">
          
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs tracking-[0.45em] text-[#A68F6B] uppercase block">
              PRIVATE REGISTER
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-none">
              Inscribe Your <br />
              <span className="font-serif italic font-light text-white/70">Bridal Appointment</span>
            </h2>
            <p className="text-xs sm:text-sm text-white/40 leading-relaxed font-sans font-light max-w-xl mx-auto">
              Our Akurana showroom guest registry is fully private. We welcome brides and families to book a custom physical appointment. Receive absolute attention from our master smiths.
            </p>

            {/* Direct WhatsApp Advisory Prompt */}
            <div className="pt-2">
              <a
                href={getWhatsAppBridalLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-mono text-[#A68F6B] hover:text-white uppercase tracking-widest hover:bg-[#A68F6B]/5 px-4 py-2 border border-[#A68F6B]/20 transition-all font-bold cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#A68F6B]" /> SECURE CONTACT VIA DIRECT WHATSAPP ADVISOR &rarr;
              </a>
            </div>
          </div>

          <div className="border border-white/10 p-6 sm:p-10 bg-[#060606] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#A68F6B] via-white to-[#A68F6B]" />
            
            {!isSuccess ? (
              <form onSubmit={handleBespokeBook} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Bride Full name */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                      01. BRIDE'S IDENTITY NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dilhani de Silva"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#030303] border border-white/10 focus:border-[#A68F6B] p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-[#A68F6B]/20 transition-all font-sans"
                    />
                  </div>

                  {/* Wedding Date Choice */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                      02. INTENDED CEREMONY DATE
                    </label>
                    <input
                      type="date"
                      required
                      value={ceremonyDate}
                      onChange={(e) => setCeremonyDate(e.target.value)}
                      className="w-full bg-[#030303] border border-white/10 focus:border-[#A68F6B] p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-[#A68F6B]/20 transition-all font-mono"
                    />
                  </div>

                  {/* Contact Channels */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                      03. CONTACT WHATSAPP NUMBER
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +94 77 123 4567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#030303] border border-white/10 focus:border-[#A68F6B] p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-[#A68F6B]/20 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                      04. EMAIL COMMUNICATION
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. bride@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#030303] border border-white/10 focus:border-[#A68F6B] p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-[#A68F6B]/20 transition-all font-sans"
                    />
                  </div>

                  {/* Selection details */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                      05. SUITE PREFERENCE STYLE
                    </label>
                    <select
                      value={stylePreference}
                      onChange={(e) => setStylePreference(e.target.value)}
                      className="w-full bg-[#030303] border border-white/10 text-white p-3 text-xs outline-none focus:border-[#A68F6B] tracking-wider font-sans focus:ring-1 focus:ring-[#A68F6B]/20 transition-all"
                    >
                      <option value="The Traditional Kandyan Seven Layers">The Traditional Kandyan Seven Layers (22k)</option>
                      <option value="The Celestial Diamond Constellation">The Celestial Diamond Constellation (GIA)</option>
                      <option value="The Sovereign Temple Sunburst">The Sovereign Temple Sunburst (Gold / Rubies)</option>
                      <option value="Custom Bespoke Hybrid Fusion">Custom Bespoke Hybrid Fusion</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                      06. SELECT VALUATION ROOM
                    </label>
                    <select
                      value={showroomLoc}
                      onChange={(e) => setShowroomLoc(e.target.value as any)}
                      className="w-full bg-[#030303] border border-white/10 text-white p-3 text-xs outline-none focus:border-[#A68F6B] tracking-wider font-sans focus:ring-1 focus:ring-[#A68F6B]/20 transition-all"
                    >
                      <option value="Akurana Showroom (Main)">Akurana Showroom (Main Store)</option>
                      <option value="Online Virtual">Online Virtual Zoom Room</option>
                    </select>
                  </div>

                </div>

                {/* Additional Spec Notes */}
                <div className="space-y-2">
                  <label className="text-[10px] font-mono tracking-widest text-[#A68F6B] uppercase block">
                    07. PHYSICAL MATRICES / ADVISOR REQUESTS (OPTIONAL)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide any information on intended gold weights (e.g., 40 Sovereigns), stone preferences, or custom timing adjustments..."
                    value={customRequests}
                    onChange={(e) => setCustomRequests(e.target.value)}
                    className="w-full bg-[#030303] border border-white/10 focus:border-[#A68F6B] p-3 text-xs tracking-wider outline-none text-white focus:ring-1 focus:ring-[#A68F6B]/20 resize-none transition-all font-sans"
                  />
                </div>

                <div className="pt-4 space-y-4">
                  <button
                    type="submit"
                    className="w-full py-4.5 bg-white text-black text-[11px] font-mono font-bold tracking-[0.3em] uppercase hover:bg-white/90 transition-all cursor-pointer text-center"
                  >
                    INSCRIBE APPOINTMENT & GENERATE PASS
                  </button>
                  <span className="text-[9px] text-center text-white/20 font-mono tracking-widest block uppercase">
                    🛡️ GUARANTEED PURE ALLOY PROTECTION AT ENTRANCE
                  </span>
                </div>

              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-6 text-center space-y-6"
              >
                
                {/* Visual Premium Ledger ticket */}
                <div className="border border-[#A68F6B]/35 p-6 bg-black text-left space-y-6 relative max-w-md mx-auto shadow-2xl">
                  
                  <div className="absolute top-2 right-2 text-[45px] font-bold font-serif text-[#A68F6B]/5 select-none pointer-events-none">
                    BRIDAL
                  </div>

                  <div className="text-center pb-4 border-b border-dashed border-[#A68F6B]/25">
                    <span className="font-serif text-[18px] font-bold tracking-[0.15em] text-white">
                      NEW KAMAL
                    </span>
                    <span className="block font-serif text-[9px] tracking-[0.45em] text-[#A68F6B] uppercase mt-0.5">
                      BRIDAL SPECIALIST &bull; COVENANT VIP
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-[11px] text-white/50 pt-2">
                    <div className="flex justify-between">
                      <span className="uppercase text-white/30">PASS NUMBER</span>
                      <strong className="text-[#A68F6B] font-bold tracking-widest">{ticketNumber}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase text-white/30">BRIDE ELECT</span>
                      <strong className="text-white font-medium font-sans">{fullName}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase text-white/30">BOUTIQUE SUITE</span>
                      <strong className="text-white font-sans">{showroomLoc}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase text-white/30">MEETING DATE</span>
                      <strong className="text-[#A68F6B]">{ceremonyDate}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase text-white/30">SESSION TIME</span>
                      <strong className="text-white font-sans font-light text-[10px]">{timeSession.split(" (")[0]}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="uppercase text-white/30">PREFERENCE PORTFOLIO</span>
                      <strong className="text-white font-sans font-medium text-right">{stylePreference.replace("The ", "")}</strong>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#A68F6B]/20 text-[9px] text-center text-white/40 space-y-1 tracking-wider leading-relaxed">
                    <p>✨ PASSPORT TO ADMISSION AT THE PRIVATE SHOWROOM ENTRANCE ✨</p>
                    <p className="text-[8px] text-white/20">Confirmation code dispatched to {email}. Present on arrival.</p>
                  </div>

                </div>

                <div className="space-y-4 pt-4">
                  <h4 className="font-serif text-2xl text-white uppercase tracking-wider">Appointment Formally Filed</h4>
                  <p className="text-xs text-white/50 font-light leading-relaxed max-w-sm mx-auto">
                    We have reserved the private chamber for your arrival. Your gold weights, measurements, and design customizer criteria are locked. Our master goldsmith looks forward to hosting your lineage.
                  </p>
                  
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-[10px] uppercase tracking-widest font-mono text-[#A68F6B] hover:text-white transition-colors pt-2 inline-block border-b border-[#A68F6B]/25 pb-1"
                  >
                    &larr; INSCRIBE ANOTHER PASS
                  </button>
                </div>

              </motion.div>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
