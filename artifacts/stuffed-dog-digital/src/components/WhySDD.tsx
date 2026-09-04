import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WhySDD() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const text1Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const text1Y = useTransform(scrollYProgress, [0.3, 0.5], [50, 0]);
  
  const text2Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const text2Y = useTransform(scrollYProgress, [0.5, 0.7], [50, 0]);

  return (
    <section id="about" ref={containerRef} className="bg-[#F2F0E9] text-[#000000] py-32 md:py-64 px-6 md:px-12 relative">
      <div className="max-w-4xl mx-auto flex flex-col gap-12 md:gap-16">
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[2px] bg-[#1E5F4A]" />
          <h2 className="text-[#1E5F4A] font-bold uppercase tracking-widest text-sm">
            Why "Stuffed Dog?"
          </h2>
        </div>

        <div className="text-2xl md:text-4xl font-medium leading-relaxed md:leading-normal text-[#000000]/90 flex flex-col gap-8">
          <p>
            Because some things matter more than they appear to.
          </p>
          <p>
            Our name is rooted in loyalty, comfort, resilience and the people we carry with us. It reminds us that the strongest work begins with understanding what something means to the people behind it.
          </p>
          <p>
            That is why we listen closely. Why we care deeply. Why we refuse to treat anyone's story like another assignment moving through an agency.
          </p>
        </div>

        <div className="mt-32 md:mt-48 flex flex-col gap-8 md:gap-12">
          <motion.h3 
            style={{ opacity: text1Opacity, y: text1Y }}
            className="font-display font-extrabold text-5xl md:text-8xl uppercase tracking-tighter text-[#6C7075]/40"
          >
            The work is business.
          </motion.h3>
          
          <motion.h3 
            style={{ opacity: text2Opacity, y: text2Y }}
            className="font-display font-extrabold text-5xl md:text-8xl uppercase tracking-tighter text-primary"
          >
            The reason behind it is human.
          </motion.h3>
        </div>

      </div>
    </section>
  );
}
