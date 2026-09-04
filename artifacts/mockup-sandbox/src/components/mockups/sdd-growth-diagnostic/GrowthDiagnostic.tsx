import { useState } from "react";
import "./_group.css";

type Friction = {
  id: string;
  number: string;
  question: string;
  short: string;
  diagnosis: string;
  prescription: string;
  proof: { client: string; category: string; title: string; copy: string; image?: string; tone: string };
  steps: number[];
};

const frictions: Friction[] = [
  {
    id: "blur",
    number: "01",
    question: "People like us, but they don't quite get us.",
    short: "The story is blurry.",
    diagnosis: "You do good work. But your distinction is living in too many heads, pages, and half-finished sentences.",
    prescription: "Find the sharpest truth. Give it a shape people can repeat. Then make every touchpoint carry the same pulse.",
    proof: { client: "CK Youth Sports", category: "Brand ecosystem", title: "A community program built to grow.", copy: "A ready-to-expand foundation for a multi-sport organization moving from local program to local institution.", tone: "club" },
    steps: [0, 1],
  },
  {
    id: "leads",
    number: "02",
    question: "We're getting traffic, but not enough real conversations.",
    short: "Attention isn't converting.",
    diagnosis: "The audience is arriving. Somewhere between curiosity and commitment, the path gets awkward, unclear, or easy to abandon.",
    prescription: "Engineer the asset around the next honest question. Make the value tangible, the action obvious, and the handoff feel human.",
    proof: { client: "Outback Concrete Coatings", category: "Website + lead engine", title: "Industry-leading. New standard.", copy: "A category-defining site built to turn home projects into actual conversations — not just another coatings brochure.", image: "/__mockup/images/sdd-growth-diagnostic/outback-pool.jpg", tone: "outback" },
    steps: [0, 1, 3],
  },
  {
    id: "noise",
    number: "03",
    question: "The right people still aren't seeing the work.",
    short: "The work is in the dark.",
    diagnosis: "A strong idea cannot do its job from the sidelines. The distribution plan arrived late, or the work was never designed to travel.",
    prescription: "Build an idea with legs. Then put it in front of the people most likely to care, share, search, and show up.",
    proof: { client: "St. Thomas Football", category: "Campaign system", title: "The 2026 slate, unveiled.", copy: "Twelve opponents, twelve helmets, one statement engineered to be shared, saved, and screenshotted.", image: "/__mockup/images/sdd-growth-diagnostic/ust-tommie.png", tone: "tommie" },
    steps: [1, 2],
  },
  {
    id: "stall",
    number: "04",
    question: "We launch things, then lose the thread.",
    short: "Momentum keeps resetting.",
    diagnosis: "Every new effort starts at zero because the signals, learning, and ownership never became part of the operating rhythm.",
    prescription: "Connect the work. Watch what changes behavior. Keep the good parts moving and let every launch teach the next one.",
    proof: { client: "Stuffed Dog method", category: "Connected growth system", title: "Make the work earn its keep.", copy: "No mic drops. Just a useful loop between what people feel, what they do, and what happens next.", tone: "method" },
    steps: [0, 1, 2, 3],
  },
];

const system = [
  ["01", "Find the friction.", "Market gaps, audience behavior, sales barriers. We start before the big idea."],
  ["02", "Engineer the asset.", "Sites and films that clarify, convert, and keep pace."],
  ["03", "Command attention.", "Distribution, search, paid. The work meets actual people."],
  ["04", "Compound the value.", "Measure, learn, tune. Launch is where the useful part begins."],
];

export function GrowthDiagnostic() {
  const [selected, setSelected] = useState(1);
  const [systemOpen, setSystemOpen] = useState(false);
  const friction = frictions[selected];

  return (
    <main className="sddgd">
      <header className="sddgd__nav">
        <a className="sddgd__logo" href="#top" aria-label="Stuffed Dog Digital home"><span>stuffed</span><span>dog</span><b>DIGITAL</b></a>
        <p>Creative human intelligence <i>·</i> Phoenix + Chicago</p>
        <a className="sddgd__nav-cta" href="#contact">Start a conversation <b>↗</b></a>
      </header>

      <section className="sddgd__hero" id="top">
        <div className="sddgd__hero-copy">
          <p className="sddgd__eyebrow">A small growth diagnostic</p>
          <h1>What's<br />actually <em>stuck?</em></h1>
          <p className="sddgd__intro">No funnel jargon. No “discovery” performance. Point to the part that is giving you trouble, and we'll sketch where we'd begin.</p>
        </div>
        <div className="sddgd__dog" aria-hidden="true">
          <span className="sddgd__ear sddgd__ear--one" /><span className="sddgd__ear sddgd__ear--two" /><span className="sddgd__face"><i /><i /><b /></span>
          <small>THE HUMAN<br />SIGNAL</small>
        </div>
        <a className="sddgd__scroll" href="#diagnostic"><span /> Take a look</a>
      </section>

      <section className="sddgd__diagnostic" id="diagnostic">
        <div className="sddgd__section-head">
          <p className="sddgd__eyebrow">Choose the friction</p>
          <h2>Start with the part<br />that feels <span>familiar.</span></h2>
        </div>
        <div className="sddgd__choice-grid">
          {frictions.map((item, index) => (
            <button className={`sddgd__choice ${selected === index ? "is-selected" : ""}`} key={item.id} onClick={() => setSelected(index)}>
              <span>{item.number}</span><b>{item.question}</b><i>See our take <strong>↘</strong></i>
            </button>
          ))}
        </div>
      </section>

      <section className={`sddgd__result sddgd__result--${friction.id}`} aria-live="polite">
        <div className="sddgd__paper">
          <p className="sddgd__eyebrow">Your first read / {friction.number}</p>
          <h2>{friction.short}</h2>
          <div className="sddgd__scribble"><i /><i /><i /><i /></div>
          <p className="sddgd__diagnosis">{friction.diagnosis}</p>
          <div className="sddgd__prescription"><span>Our first move</span><p>{friction.prescription}</p></div>
          <a href="#contact" className="sddgd__action">Talk it through <b>↗</b></a>
        </div>
        <article className={`sddgd__proof sddgd__proof--${friction.proof.tone}`}>
          <p className="sddgd__eyebrow">Proof nearby / {friction.proof.category}</p>
          <div className="sddgd__proof-media">
            {friction.proof.image ? <img src={friction.proof.image} alt={friction.proof.client} /> : friction.proof.tone === "club" ? <img src="/__mockup/images/sdd-growth-diagnostic/ckys-badge-white.svg" alt="CK Youth Sports" /> : <div className="sddgd__loop">↻<span>learn<br />make<br />move</span></div>}
          </div>
          <p className="sddgd__client">{friction.proof.client}</p>
          <h3>{friction.proof.title}</h3>
          <p>{friction.proof.copy}</p>
          <a href="#contact">See what could connect <b>↗</b></a>
        </article>
      </section>

      <section className="sddgd__system" id="system">
        <div className="sddgd__system-top">
          <p className="sddgd__eyebrow">The connected system</p>
          <h2>Nothing useful<br />works <em>alone.</em></h2>
          <button onClick={() => setSystemOpen(!systemOpen)} aria-expanded={systemOpen}> {systemOpen ? "Fold the map" : "Unfold the map"} <b>{systemOpen ? "↑" : "↓"}</b></button>
        </div>
        <div className={`sddgd__steps ${systemOpen ? "is-open" : ""}`}>
          {system.map(([num, title, body], index) => <article className={friction.steps.includes(index) ? "is-relevant" : ""} key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p><i>{friction.steps.includes(index) ? "relevant here" : "part of the whole"}</i></article>)}
        </div>
      </section>

      <section className="sddgd__belief">
        <p className="sddgd__eyebrow">A note from Blake</p>
        <blockquote>“We don't want to be the biggest agency in the world. We want to be the one you trust <span>when the story matters most.</span>”</blockquote>
        <p>Blake Allen · Founder, Stuffed Dog Digital</p>
      </section>

      <footer className="sddgd__footer" id="contact">
        <p>Vive La Humanity.</p>
        <h2>Got something worth<br />fighting for?</h2>
        <a href="mailto:hello@stuffeddogdigital.com">Let's talk <b>↗</b></a>
        <small>Stuffed Dog Digital · Phoenix / Chicago</small>
      </footer>
    </main>
  );
}

export default GrowthDiagnostic;