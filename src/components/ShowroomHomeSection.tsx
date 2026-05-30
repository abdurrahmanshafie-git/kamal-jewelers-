import { motion } from 'motion/react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';

interface ShowroomHomeSectionProps {
  onNavigate: () => void;
}

export default function ShowroomHomeSection({ onNavigate }: ShowroomHomeSectionProps) {
  const showroomImage = "/src/assets/images/showroom.webp";

  return (
    <section id="showroom-home" className="py-24 sm:py-48 bg-[#030303] text-white relative overflow-hidden border-b border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24 items-center">
          
          {/* One Large Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-[4/3] bg-[#0a0a0a] border border-white/[0.02] overflow-hidden group">
              <img
                src={showroomImage}
                alt="New Kamal Jewellers flagship showroom in Akurana"
                className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] group-hover:scale-105 transition-all duration-[3000ms] ease-[0.16, 1, 0.3, 1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
            </div>
          </div>

          {/* Essential Info */}
          <div className="lg:col-span-5 space-y-12 text-left">
            <div className="space-y-6">
              <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">THE FLAGSHIP BOUTIQUE</span>
              <h2 className="text-4xl sm:text-6xl font-serif font-light tracking-tight text-white uppercase leading-[1.05]">
                Experience <br />
                <span className="italic text-white font-light lowercase">Absolute Luxury</span>
              </h2>
            </div>

            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-gold-500/30 transition-colors duration-700">
                  <MapPin className="w-4 h-4 text-gold-500/60" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <span className="block text-[16px] font-sans font-light text-white/90 tracking-wide">280/1 Matale Road, Akurana</span>
                  <span className="block text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">Central Province, Sri Lanka</span>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center shrink-0 group-hover:border-gold-500/30 transition-colors duration-700">
                  <Clock className="w-4 h-4 text-gold-500/60" />
                </div>
                <div className="space-y-1.5 pt-1">
                  <span className="block text-[16px] font-sans font-light text-white/90 tracking-wide">Monday — Saturday</span>
                  <span className="block text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">09:30 AM — 06:30 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onNavigate}
                className="group inline-flex items-center gap-6 text-white/60 hover:text-gold-400 text-[10px] font-mono tracking-[0.4em] uppercase transition-all duration-700 pb-2 border-b border-white/10"
              >
                VISIT THE SHOWROOM
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
