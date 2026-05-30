import { Phone, MapPin, MessageSquare, LineChart } from 'lucide-react';

interface MobileBottomNavProps {
  onNavigate: (page: string) => void;
}

export default function MobileBottomNav({ onNavigate }: MobileBottomNavProps) {
  return (
    <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[80%] max-w-[280px]">
      <div className="bg-black/80 backdrop-blur-2xl border-[0.5px] border-white/10 rounded-full shadow-2xl flex items-center justify-around h-[50px] px-2">
        
        <button
          onClick={() => onNavigate('showroom')}
          className="flex flex-col items-center gap-1 transition-all active:scale-95 text-white/50 hover:text-white group"
        >
          <MapPin size={17} strokeWidth={1.5} className="transition-colors group-hover:text-white" />
          <span className="text-[7.5px] font-mono tracking-[0.25em] uppercase">Showroom</span>
        </button>

        <a
          href="tel:+94812300446"
          className="flex flex-col items-center gap-1 transition-all active:scale-95 text-white/50 hover:text-white group"
        >
          <Phone size={17} strokeWidth={1.5} className="transition-colors group-hover:text-white" />
          <span className="text-[7.5px] font-mono tracking-[0.25em] uppercase">Call</span>
        </a>

        <a
          href="https://wa.me/94777300446"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 bg-emerald-500/5 px-3 py-1.5 rounded-full transition-all active:scale-95 text-emerald-400 group"
        >
          <MessageSquare size={17} strokeWidth={1.5} className="transition-colors" />
          <span className="text-[7.5px] font-mono tracking-[0.2em] uppercase">WhatsApp</span>
        </a>

        <button
          onClick={() => onNavigate('gold-rate')}
          className="flex flex-col items-center gap-1 transition-all active:scale-95 text-white/50 hover:text-white group"
        >
          <LineChart size={17} strokeWidth={1.5} className="transition-colors group-hover:text-white" />
          <span className="text-[7.5px] font-mono tracking-[0.25em] uppercase">Rate</span>
        </button>

      </div>
    </nav>
  );
}
