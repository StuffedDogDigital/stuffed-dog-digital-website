import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Positioning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="bg-[#000000] text-[#F2F0E9] py-32 md:py-48 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 md:gap-24 items-start">
        
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="sticky top-32"
        >
          <h2 className="font-display font-extrabold text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9]">
            We help brands<br />punch above<br />their weight.
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-10 text-xl md:text-3xl font-medium leading-normal md:leading-relaxed"
        >
          <p>
            Stuffed Dog Digital is an independent creative and digital agency for organizations with <span className="relative whitespace-nowrap text-primary z-10 font-bold">something real at stake.
              <svg className="absolute -bottom-2 -left-2 w-[110%] h-6 -z-10 text-primary opacity-30" viewBox="0 0 200 20" preserveAspectRatio="none">
                <motion.path 
                  d="M5,15 Q100,5 195,15" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </p>
          <p className="text-[#F2F0E9]/70">
            We clarify what makes you matter, build the identity around it and turn that story into work that earns attention, builds trust and drives growth.
          </p>
          <p className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#F2F0E9] mt-8 border-l-4 border-primary pl-8">
            We take it personally because, to us, it is.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
