import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "wouter";
import outbackImg from "@assets/generated_images/portfolio_outback.png";
import brookImg from "@assets/generated_images/portfolio_brook.png";
import ustImg from "@assets/generated_images/portfolio_ust.png";

const projects = [
  {
    id: 1,
    title: "Outback Concrete Coatings",
    problem: "A local contractor needed to become a premium regional brand.",
    solution: "Repositioned the brand from commodity to premium, built identity from scratch.",
    result: "Regional market expansion.",
    img: outbackImg,
    color: "#222222"
  },
  {
    id: 2,
    title: "The Brook",
    problem: "Building belief before the doors even open.",
    solution: "Pre-launch brand strategy, identity, and digital presence that made customers believe before day one.",
    result: "Waitlist built before launch.",
    img: brookImg,
    color: "#3A3530"
  },
  {
    id: 3,
    title: "University of St. Thomas Football",
    problem: "A rising Division I program needed to look and recruit like one.",
    solution: "Full identity system: visual brand, digital presence, recruitment materials.",
    result: "Program credibility elevated to match ambitions.",
    img: ustImg,
    color: "#4A3258"
  }
];

const marqueeItems = [
  "Construction", "Athletics", "Hospitality", "Non-Profit", "Healthcare", "Higher Education", "Real Estate", "Food & Beverage"
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6 group cursor-pointer"
    >
      <div className="relative aspect-[4/3] md:aspect-[16/9] w-full overflow-hidden rounded-sm bg-[#1a1a1a]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${project.img})` }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-between">
        <div className="flex-1">
          <h3 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tight mb-6 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <Link href={`#work/${project.id}`} className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
            See How We Did It <span>→</span>
          </Link>
        </div>
        
        <div className="flex-1 flex flex-col gap-4 text-sm md:text-base text-[#000000]/70 font-medium">
          <p><strong className="text-white">Business Problem:</strong> {project.problem}</p>
          <p><strong className="text-white">What We Changed:</strong> {project.solution}</p>
          <p><strong className="text-white border-l-2 border-primary pl-3 ml-[-14px]">Result:</strong> {project.result}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="work" className="bg-[#F2F0E9] text-white py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-24">
          <div className="w-8 h-[2px] bg-primary" />
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm">
            This is what belief looks like in the wild.
          </h2>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
        
        <div className="mt-48 border-t border-white/10 pt-24 text-center">
          <p className="font-display text-2xl md:text-4xl uppercase font-bold text-[#000000]/50 mb-12">
            Different industries. Same standard.
          </p>
          
          <div className="relative flex overflow-x-hidden group">
            <motion.div 
              className="py-4 whitespace-nowrap flex gap-12 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            >
              {/* Double array for seamless loop */}
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div key={i} className="flex items-center gap-12">
                  <span className="text-3xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>
                    {item}
                  </span>
                  <div className="w-3 h-3 bg-primary rounded-full" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
