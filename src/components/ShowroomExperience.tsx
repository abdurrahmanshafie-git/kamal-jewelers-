import { motion } from 'motion/react';
import { MapPin, Clock, Phone, ExternalLink, MessageCircle } from 'lucide-react';
import { showroom } from '../imageAssets';

export default function ShowroomExperience() {
  const showroomData = {
    name: 'Akurana Salon',
    address: '280/1 Matale Road (A9), Akurana 20850, Sri Lanka',
    phone: '+94 81 230 0446',
    whatsApp: '+94 72 886 6851',
    hours: '09:30 AM — 06:30 PM (Sundays Closed)',
    coordinates: '7.3695° N, 80.6214° E'
  };

  return (
    <section id="showroom" className="py-36 sm:py-48 lg:py-56 bg-[#030303] text-white relative overflow-hidden border-b border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        
        {/* DOUBLE SPREAD LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24 items-center">
          
          {/* LEFT COLUMN: Deep Contrasted Showroom Portrait */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] bg-[#0a0a0a] border border-white/5 overflow-hidden group">
              <img
                src={showroom}
                alt="New Kamal Jewellers showroom interior with boutique showcases"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.6] contrast-[1.05] transition-transform duration-[3000ms] group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
              
              <div className="absolute bottom-8 left-8 space-y-2 z-10 text-left">
                <span className="font-mono text-[9px] tracking-[0.35em] text-white/40 uppercase block">GEOLOCATIONAL FOOTPRINT</span>
                <p className="font-serif text-lg text-white font-light uppercase tracking-wide">
                  Akurana, Sri Lanka
                </p>
                <p className="font-mono text-xs text-white/50">
                  {showroomData.coordinates}
                </p>
              </div>

              {/* Watermark brand stamp */}
              <div className="absolute top-8 right-8 font-serif text-[10px] text-white/20 select-none uppercase tracking-[0.3em]">
                NEW KAMAL &bull; EST. 1979
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Precise, Humble Directory Typography */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div className="space-y-4">
              <span className="font-mono text-[10px] tracking-[0.45em] text-white/40 uppercase block">THE DIRECTORY</span>
              <h2 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-white uppercase leading-none">
                Visit the <br />
                <span className="font-serif italic font-light text-white/70">Atelier Chamber</span>
              </h2>
              <p className="text-xs sm:text-[14px] text-white/50 leading-relaxed font-sans font-light tracking-wide pt-2">
                We invite you to experience the physical weight and precise crafting of our gold in person inside our private bridal consulting suite.
              </p>
            </div>

            {/* Structured details without cards */}
            <div className="space-y-6 pt-4 border-t border-white/10 text-xs sm:text-[14px] font-sans font-light">
              <div className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase block">Address</span>
                  <p className="text-white/70 leading-relaxed">{showroomData.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase block">Salon Hours</span>
                  <p className="text-white/70 leading-relaxed">{showroomData.hours}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-white/30 uppercase block">Direct Line & WhatsApp</span>
                  <p className="text-white/70 leading-relaxed">
                    Voice: {showroomData.phone} <br />
                    WhatsApp: {showroomData.whatsApp}
                  </p>
                </div>
              </div>
            </div>

            {/* Direction button action */}
            <div className="pt-6">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(showroomData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-white/60 text-[10px] font-mono tracking-[0.35em] uppercase pb-2 border-b border-white/20 transition-all"
              >
                <span>OPEN IN GOOGLE MAPS</span> <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
