import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "FIND THE TRUTH",
    desc: "Brand strategy, positioning, audience and messaging."
  },
  {
    num: "02",
    title: "BUILD THE BELIEF",
    desc: "Identity systems, campaigns, websites and content."
  },
  {
    num: "03",
    title: "CREATE MOMENTUM",
    desc: "Launch strategy, media, SEO and audience growth."
  },
  {
    num: "04",
    title: "MAKE IT MATTER",
    desc: "Long-term partnership, creative direction and continuous improvement."
  }
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="what-we-do" className="bg-[#000000] text-[#F2F0E9] py-32 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-24 md:mb-32"
        >
          <h2 className="font-display font-extrabold text-4xl md:text-6xl lg:text-8xl uppercase tracking-tighter text-[#6C7075]/40">
            The System Your Brand Needs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 mb-32">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              <div className="font-display font-extrabold text-primary text-6xl md:text-8xl leading-none">
                {s.num}
              </div>
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-xl text-[#F2F0E9]/70 font-medium">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-4xl border-t-2 border-[#6C7075]/30 pt-12"
        >
          <p className="text-2xl md:text-4xl font-medium leading-relaxed">
            We do not sell disconnected services. We build the system your brand needs to become clearer, stronger and <span className="font-bold text-primary">harder to ignore.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
