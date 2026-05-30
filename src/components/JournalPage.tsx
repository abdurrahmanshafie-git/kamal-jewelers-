import { useState } from 'react';
import { BookOpen, Sparkles, Clock, ArrowRight, Heart, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import PageHeader from './PageHeader';

interface JournalPageProps {
  onNavigate: (page: string) => void;
}

export default function JournalPage({ onNavigate }: JournalPageProps) {
  const [lovedPost, setLovedPost] = useState<Record<string, boolean>>({});

  const articles = [
    {
      id: "jour-1",
      title: "The Heritage of blue: Unearthing the royal Ceylon sapphire",
      category: "Gemology",
      readTime: "6 Min Read",
      date: "May 25, 2026",
      excerpt: "Deep within the rich soils of Ratnapura lies a geological wonder that has captivated kings and queens for centuries. Discover why the Ceylon Sapphire holds unrivaled prestige in the global high jewelry courts.",
      image: "/src/assets/images/gemstone.webp"
    },
    {
      id: "jour-2",
      title: "The Art of Layering: Sri Lankan wedding legacy jewelry",
      category: "Heritage",
      readTime: "8 Min Read",
      date: "May 18, 2026",
      excerpt: "From the traditional forehead 'Nalal Pataya' to the cascades of the 'Peti Malaya'. Unraveling the divine seven layers of Kandyan bridal wear that define elegance and lineage.",
      image: "/src/assets/images/bridal.webp"
    },
    {
      id: "jour-3",
      title: "Securing Brilliance: GIA Diamond selection criteria",
      category: "Assay Guide",
      readTime: "5 Min Read",
      date: "May 12, 2026",
      excerpt: "Beyond the standard four Cs. Learn how our Antwerp diamond carvers analyze fire, light scintillation, and structural symmetry to select the chosen few stones for our sovereign collections.",
      image: "/src/assets/images/hero.webp"
    }
  ];

  return (
    <div id="journal-page-view" className="bg-[#030303] min-h-screen text-white pb-32 font-sans overflow-x-hidden">
      
      <PageHeader onBack={() => onNavigate('home')} />

      {/* Editorial Header */}
      <section className="px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto py-24 sm:py-32 lg:py-48 text-center space-y-8">
        <div className="flex items-center justify-center gap-3">
          <BookOpen className="w-4 h-4 text-gold-500/60" />
          <span className="font-mono text-[10px] tracking-[0.5em] text-[#A68F6B] uppercase block">L'ÉDITION JOURNAL</span>
        </div>
        
        <h1 className="text-[clamp(2.5rem,8vw,7.5rem)] font-serif font-light tracking-tight text-white uppercase leading-[1.05]">
          The Salon <br />
          <span className="italic text-white font-light lowercase">Chronicles</span>
        </h1>
        
        <p className="text-[15px] sm:text-[17px] font-sans font-light tracking-wide text-white/40 max-w-xl mx-auto leading-relaxed pt-4 italic">
          Insights on the science of absolute gems, historic royal Sri Lankan style, and curated investment art.
        </p>
      </section>

      {/* Main Journal Feed */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-12 mb-32">
        {articles.map((art) => (
          <div
            key={art.id}
            className="group relative bg-[#060606] border border-white/[0.03] overflow-hidden flex flex-col justify-between min-h-[580px] hover:border-gold-500/20 transition-all duration-700 pb-8"
          >
            {/* Visual */}
            <div className="h-72 relative overflow-hidden bg-black/45">
              <img
                src={art.image}
                alt={art.title}
                className="w-full h-full object-cover filter brightness-[0.5] contrast-[1.1] group-hover:scale-105 transition-transform duration-[2500ms] ease-[0.16, 1, 0.3, 1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent opacity-90" />
              
              <button
                onClick={() => setLovedPost(prev => ({ ...prev, [art.id]: !prev[art.id] }))}
                className="absolute top-6 right-6 w-11 h-11 border border-white/5 bg-black/40 backdrop-blur-md flex items-center justify-center text-white/30 hover:text-gold-400 hover:border-gold-500/30 transition-all duration-700 cursor-pointer"
              >
                <Heart className={`w-4 h-4 ${lovedPost[art.id] ? 'fill-gold-500/80 text-gold-500' : ''}`} />
              </button>

              <span className="absolute bottom-6 left-6 text-[9px] font-mono tracking-[0.4em] text-white/40 uppercase bg-black/40 px-4 py-2 border border-white/5 backdrop-blur-md">
                {art.category}
              </span>
            </div>

            {/* Context */}
            <div className="px-8 pt-8 space-y-6 flex-grow flex flex-col">
              <div className="space-y-4 text-left flex-grow">
                <div className="flex justify-between items-center text-[10px] text-white/20 font-mono tracking-[0.2em] uppercase">
                  <span>{art.date}</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="font-serif text-[24px] sm:text-[28px] font-light text-white group-hover:text-gold-400 transition-colors duration-700 leading-tight uppercase tracking-tight">
                  {art.title}
                </h3>
                <div className="w-10 h-[1px] bg-white/[0.05]" />
                <p className="text-[14px] sm:text-[15px] text-white/30 leading-relaxed font-sans font-light tracking-wide line-clamp-3 editorial-max-width">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-8 flex items-center justify-between border-t border-white/[0.03]">
                <button
                  onClick={() => onNavigate('journal')}
                  className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/40 group-hover:text-gold-400 hover:tracking-[0.4em] transition-all duration-700 flex items-center gap-2.5 cursor-pointer"
                >
                  Read Chapter Article <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Interactive Gem Advisory banner */}
      <section className="bg-white/[0.01] py-24 sm:py-32 border-y border-white/[0.03] text-center max-w-4xl mx-auto px-6 space-y-8 mb-20 rounded-[1px]">
        <Sparkles className="w-8 h-8 text-gold-500/60 mx-auto" strokeWidth={1} />
        <h3 className="font-serif text-[28px] sm:text-[36px] text-white font-light tracking-tight uppercase">Inquire with Our Chief Curator</h3>
        <p className="text-[15px] sm:text-[16px] text-white/30 max-w-md mx-auto leading-relaxed font-sans font-light tracking-wide italic">
          Need expert advisory on gemstone investments, heritage valuations, or heirloom restoration? Schedule a chat with our Akurana Resident Gem Specialist.
        </p>
        <div className="pt-6">
          <button
            onClick={() => onNavigate('contact')}
            className="px-10 py-4 bg-transparent border border-white/10 text-white/60 text-[10px] font-mono uppercase tracking-[0.4em] hover:bg-white/[0.02] hover:border-gold-500/30 hover:text-gold-400 transition-all duration-700 cursor-pointer"
          >
            Direct advisory link
          </button>
        </div>
      </section>


    </div>
  );
}
