import { useEffect, useRef, useState } from "react";
import "./_group.css";

const sections = [
  { id: "top", label: "Opening" },
  { id: "moment", label: "The Moment" },
  { id: "work", label: "Selected Work" },
  { id: "value", label: "Commercial Value" },
  { id: "belief", label: "What We Believe" },
];

export default function AnimatedSpine() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const nodes = refs.current.filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const current = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (current) setActive(Number((current.target as HTMLElement).dataset.index));
    }, { threshold: [0.18, 0.35, 0.6], rootMargin: "-18% 0px -42% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  const go = (index: number) => refs.current[index]?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  const setRef = (index: number) => (node: HTMLElement | null) => { refs.current[index] = node; };
  return <div className="sdd-spine-demo">
    <aside className="sdd-spine-nav" aria-label="Page sections">
      <div className="sdd-spine-brand"><img src="/__mockup/images/sdd-animated-spine/logo-white.svg" alt="Stuffed Dog Digital" /></div>
      <nav className="sdd-spine-links">{sections.map((section, index) => <button key={section.id} className={`sdd-spine-link ${active === index ? "is-active" : ""}`} aria-current={active === index ? "true" : undefined} onClick={() => go(index)}><span className="sdd-pip" /><span>{section.label}</span></button>)}</nav>
      <div className="sdd-spine-foot"><div className="sdd-counter" aria-live="polite">0{active + 1}/05</div><p className="sdd-motto">Vive La Humanity.</p></div>
    </aside>
    <div className="sdd-mobile-cue"><img src="/__mockup/images/sdd-animated-spine/logo-white.svg" alt="Stuffed Dog Digital" /><div className="sdd-mobile-read"><b>0{active + 1}/05</b><span>{sections[active].label}</span></div></div>
    <main className="sdd-spine-main">
      <section data-index="0" ref={setRef(0)} className="sdd-section sdd-hero"><div className="sdd-inner"><p className="sdd-kicker">Stuffed Dog Digital · Creative Human Intelligence</p><h1 className="sdd-display">Intelligence can be artificial.<br />Imagination <span className="sdd-signal">cannot.</span></h1><p className="sdd-copy">AI can draft a thousand campaigns before breakfast. Not one of them will care whether you win. We blend technology into human craft, and make work people actually feel.</p></div></section>
      <section data-index="1" ref={setRef(1)} className="sdd-section sdd-story"><div className="sdd-inner"><p className="sdd-kicker">The moment we're in</p><h2 className="sdd-display">Machines can make marketing now. <span className="faded">Infinite. Instant. Optimized.</span> And all of it sounds the same. When anyone can generate everything, the only work that cuts through is the work that feels <span className="alive">alive.</span></h2></div></section>
      <section data-index="2" ref={setRef(2)} className="sdd-section sdd-work"><div className="sdd-inner"><p className="sdd-kicker">Highlighted projects</p><h2 className="sdd-display">Some work you should<br />see up close.</h2><div className="sdd-work-grid"><div className="sdd-browser"><div className="sdd-browser-top"><i /><i /><i /></div><img src="/__mockup/images/sdd-animated-spine/outback-pool.jpg" alt="Outback Concrete Coatings website preview" /></div><div><p className="sdd-kicker">Website: Outback Concrete Coatings</p><h3>Industry-leading.<br />New standard.</h3><p>The Outback site is what a coatings website looks like when it stops acting like a brochure. An industry-leading build that sets a new standard.</p><button className="sdd-underlink" onClick={() => go(3)}>See how we work</button></div></div></div></section>
      <section data-index="3" ref={setRef(3)} className="sdd-section sdd-approach"><div className="sdd-inner"><p className="sdd-kicker">The commercial value</p><h2 className="sdd-display">Art that sells.<br /><span className="subtle">Systems that scale.</span></h2><p className="sdd-copy subtle">Beautiful design is the baseline. We build creative that commands attention and infrastructure that converts it into revenue.</p><div className="sdd-outcomes">{[["01","Find The Friction"],["02","Engineer The Asset"],["03","Command Attention"],["04","Compound The Value"]].map(([num,title])=><article className="sdd-outcome" key={num}><b>{num}</b><h3>{title}</h3><p>Strategy based on real behavior, built to keep earning after launch.</p></article>)}</div></div></section>
      <section data-index="4" ref={setRef(4)} className="sdd-section sdd-belief"><div className="sdd-inner"><p className="sdd-kicker">What we believe</p><h2 className="sdd-display">We aspire to create work that outlives the campaign. Work that inspires pride, strengthens communities and helps good organizations leave their mark.</h2><p className="sdd-quote">“We don't want to be the biggest agency in the world. We want to be the one you trust when the story matters most.”<br /><strong>Blake Allen · Founder</strong></p><h2 className="sdd-display sdd-final-motto">Vive La Humanity.</h2></div></section>
    </main>
  </div>;
}