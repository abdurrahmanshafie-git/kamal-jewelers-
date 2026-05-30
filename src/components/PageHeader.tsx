import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface PageHeaderProps {
  onBack: () => void;
  title?: string;
}

export default function PageHeader({ onBack }: PageHeaderProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-12 pt-24 sm:pt-40">
      <div className="flex items-center justify-between border-b border-white/[0.04] pb-5 sm:pb-8">
        
        {/* Left: Home Navigation */}
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-white/50 hover:text-white transition-all duration-500 text-[11px] sm:text-[10px] font-mono tracking-[0.35em] sm:tracking-[0.45em] uppercase"
          >
            <span className="text-[14px] sm:text-[12px] group-hover:-translate-x-0.5 transition-transform duration-500">&larr;</span>
            <span>Back to Home</span>
          </button>
        </div>

        {/* Right: Heritage Signature */}
        <div className="flex items-center">
          <span className="text-[11px] sm:text-[10px] font-mono tracking-[0.35em] sm:tracking-[0.5em] text-white/30 uppercase">
            Since 1979
          </span>
        </div>

      </div>
    </div>
  );
}
