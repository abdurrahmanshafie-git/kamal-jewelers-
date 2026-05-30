import { motion } from 'motion/react';

export default function HeritageTimeline() {
  return (
    <section id="heritage" className="py-36 sm:py-48 lg:py-56 bg-[#030303] text-white relative overflow-hidden border-b border-white/5">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
        
        {/* EDITORIAL QUOTE HEADER */}
        <div className="max-w-3xl mb-32 sm:mb-48 text-left">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-mono text-xs tracking-[0.4em] text-white/45 uppercase mb-8"
          >
            THE PROLOGUE &bull; THE ESSENCE OF TIME
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.1 }}
            className="font-serif text-[clamp(1.8rem,5.5vw,4.5rem)] font-light tracking-tight leading-[1.05] text-white uppercase"
          >
            A story written in <br />
            <span className="italic text-white font-light lowercase font-serif-luxury">the quiet weight of precious metals,</span> <br />
            destined to endure.
          </motion.h2>
        </div>

        {/* ASYMMETRICAL STORYTELLING BLOCK 1: THE INCEPTION */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-20 items-start mb-36 sm:mb-56">
          <div className="md:col-span-5 space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="font-serif text-8xl sm:text-[9.5rem] font-light text-white/5 block leading-none select-none tracking-tighter"
            >
              1979
            </motion.span>
          </div>
          <div className="md:col-span-7 md:pt-12 space-y-6 max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase"
            >
              NARRATIVE SEC. I &bull; AKURANA
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight uppercase"
            >
              Quiet Origins of Devotion
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-xs sm:text-[14px] text-white/60 font-sans font-light leading-relaxed tracking-wide"
            >
              In the historic hills of Kandy district, New Kamal Jewellers commenced as a private family atelier in Akurana. We set out not to dominate, but to create jewelry pieces so pure, they became standard heirlooms passed down families.
            </motion.p>
          </div>
        </div>

        {/* ASYMMETRICAL STORYTELLING BLOCK 2: THE CRAFT (OFFSET/REVERSED ROW) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-20 items-start mb-24">
          <div className="md:col-span-7 md:order-2 space-y-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="font-serif text-8xl sm:text-[9.5rem] font-light text-white/5 block leading-none select-none tracking-tighter md:text-right"
            >
              916
            </motion.span>
          </div>
          <div className="md:col-span-5 md:order-1 md:pt-12 space-y-6 max-w-md">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase"
            >
              NARRATIVE SEC. II &bull; ARTISTRY
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight uppercase"
            >
              The Unaltered Standard of Gold
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-xs sm:text-[14px] text-white/60 font-sans font-light leading-relaxed tracking-wide"
            >
              Every millimeter of our 22k gold is verified under standard hallmarking criteria. It carries a distinctive warmth, shaped by the hands of craftsmen who see metal as a medium of pure human emotion.
            </motion.p>
          </div>
        </div>

      </div>
    </section>
  );
}
