import { motion } from 'motion/react';

export default function CustomerStories() {
  const stories = [
    {
      family: "The Alwis Family",
      location: "GALLE & COLOMBO",
      quote: "“Three generations of our daughters have stood in the Akurana salon. There is no negotiation on pure gold weight and there is no substitute for New Kamal’s classic filigree. They shape metal into a family heritage.”"
    },
    {
      family: "The Hameed Family",
      location: "KANDY DISTRICT",
      quote: "“To wear their customized heavy bridal necklaces on a marriage day is to carry a continuous, physical line of our devotion. The trust in their 916 purity standard has been our absolute anchor since 1979.”"
    }
  ];

  return (
    <section id="testimonials" className="py-24 sm:py-40 bg-[#030303] text-white relative overflow-hidden border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 sm:px-12">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-24 text-left">
          <p className="font-mono text-xs tracking-[0.4em] text-white/40 uppercase mb-6">
            CHAPTER IX &bull; REPUTED SENTIMENTS
          </p>
          <h2 className="text-4xl sm:text-5xl font-serif font-light tracking-tight text-white uppercase leading-none">
            Patron <br />
            <span className="font-serif italic font-light text-white/70">Narratives</span>
          </h2>
        </div>

        {/* ASYMMETRICAL STORY BLOCKS (VOGUE CHOPPED LAYOUT) */}
        <div className="space-y-32 sm:space-y-48">
          {stories.map((story, index) => {
            const isRight = index % 2 !== 0;
            return (
              <div 
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-start justify-between ${isRight ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual quote indicator */}
                <div className="text-left max-w-2xl space-y-8">
                  <p className="font-serif text-2xl sm:text-3xl font-light leading-relaxed text-white/80">
                    {story.quote}
                  </p>
                  
                  <div className="space-y-1">
                    <h4 className="text-white font-serif text-lg tracking-wider uppercase font-light">
                      {story.family}
                    </h4>
                    <p className="text-[10px] font-mono text-white/40 tracking-[0.25em] uppercase">
                      PATRON STORY &bull; {story.location}
                    </p>
                  </div>
                </div>

                {/* Vertical spacer block to create asymmetrical weight */}
                <div className="hidden lg:block w-24 h-1 bg-white/5 mt-6" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
