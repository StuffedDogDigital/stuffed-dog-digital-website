import { useEffect, useState } from "react";
import "./_group.css";

type Project = {
  client: string;
  channel: string;
  title: string;
  type: string;
  result: string;
  resultLabel: string;
  copy: string;
  image?: string;
  tone: string;
};

const projects: Project[] = [
  {
    client: "Outback Concrete Coatings",
    channel: "CH 01 / WEBSITE + LEAD ENGINE",
    title: "Industry-leading. New standard.",
    type: "Web / Search / Conversion",
    result: "01",
    resultLabel: "category benchmark built to convert",
    copy: "The category had plenty of brochures. Outback needed a machine built to turn home projects into real conversations.",
    image: "/__mockup/images/sdd-project-channel/outback-pool.jpg",
    tone: "pool",
  },
  {
    client: "St. Thomas Football",
    channel: "CH 02 / CAMPAIGN SYSTEM",
    title: "The 2026 slate, unveiled.",
    type: "Identity / Social / Schedule Release",
    result: "12",
    resultLabel: "opponents. One unmistakable statement.",
    copy: "Twelve helmets, twelve worlds, one launch asset that was built to be saved, shared, and screenshotted.",
    image: "/__mockup/images/sdd-project-channel/ust-tommie.png",
    tone: "tommie",
  },
  {
    client: "CK Youth Sports",
    channel: "CH 03 / BRAND ECOSYSTEM",
    title: "A community program built to grow.",
    type: "Brand / Website / Communications",
    result: "3",
    resultLabel: "connected systems; one growing club",
    copy: "A ready-to-expand foundation for a multi-sport organization moving quickly from local program to local institution.",
    tone: "ckys",
  },
];

export function ProjectChannel() {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [sound, setSound] = useState(72);
  const project = projects[current];

  useEffect(() => {
    if (!playing) return;
    const interval = window.setInterval(() => setCurrent((value) => (value + 1) % projects.length), 6500);
    return () => window.clearInterval(interval);
  }, [playing]);

  return (
    <main className="sddpc">
      <header className="sddpc__masthead">
        <a className="sddpc__brand" href="#broadcast" aria-label="Stuffed Dog Digital home">
          <span>stuffed</span><span>dog</span><b>DIGITAL</b>
        </a>
        <div className="sddpc__broadcast"><i /> LIVE FROM PHOENIX + CHICAGO <span>EST. 2014</span></div>
        <nav aria-label="Main navigation">
          <a href="#broadcast">Work</a><a href="#system">System</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="sddpc__hero" id="broadcast">
        <div className="sddpc__hero-copy">
          <p className="sddpc__kicker">Stuffed Dog Digital presents</p>
          <h1>THE<br /><em>RESULTS</em><br />CHANNEL.</h1>
          <p className="sddpc__intro">Tune into work that knows how to make a little noise, find the right people, and bring something useful back to the business.</p>
          <a className="sddpc__listen" href="#console">ENTER THE CONTROL ROOM <b>↓</b></a>
        </div>
        <div className="sddpc__frequency" aria-hidden="true">
          <span>88.8</span><small>THE HUMAN<br />FREQUENCY</small>
          <div className="sddpc__wave">{Array.from({ length: 38 }, (_, i) => <i key={i} style={{ height: `${16 + ((i * 17) % 78)}%` }} />)}</div>
        </div>
      </section>

      <section className={`sddpc__console sddpc__${project.tone}`} id="console">
        <aside className="sddpc__rack">
          <p>SELECT A SIGNAL</p>
          {projects.map((item, index) => (
            <button key={item.client} className={current === index ? "is-active" : ""} onClick={() => setCurrent(index)}>
              <b>0{index + 1}</b><span>{item.client}</span><i />
            </button>
          ))}
          <div className="sddpc__rack-bottom"><span>PROGRAMMING<br />FOR GROWTH.</span><strong>SDD<br />FM</strong></div>
        </aside>
        <div className="sddpc__screen">
          <div className="sddpc__screen-top"><span>{project.channel}</span><span>ON AIR <i /></span></div>
          <div className="sddpc__media">
            {project.image ? <img src={project.image} alt="" /> : <div className="sddpc__ckys-art"><img src="/__mockup/images/sdd-project-channel/ckys-badge-white.svg" alt="CK Youth Sports" /></div>}
            <div className="sddpc__scanlines" />
            <div className="sddpc__caption"><span>{project.client}</span><b>CASE FILE OPEN</b></div>
          </div>
          <div className="sddpc__transport">
            <button className="sddpc__play" onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause automatic tuning" : "Resume automatic tuning"}>{playing ? "Ⅱ" : "▶"}</button>
            <div className="sddpc__scrub"><i style={{ width: `${((current + 1) / projects.length) * 100}%` }} /></div>
            <button onClick={() => setCurrent((current + 1) % projects.length)} aria-label="Next project">NEXT ›</button>
            <label>SOUND <input aria-label="Sound level" type="range" value={sound} onChange={(e) => setSound(Number(e.target.value))} /></label>
          </div>
        </div>
        <article className="sddpc__project">
          <p className="sddpc__kicker">Now transmitting / {project.type}</p>
          <h2>{project.title}</h2>
          <p>{project.copy}</p>
          <div className="sddpc__proof"><span className="sddpc__result">{project.result}</span><span>{project.resultLabel}</span></div>
          <a href="#contact" className="sddpc__case">OPEN CASE STUDY <b>↗</b></a>
        </article>
      </section>

      <section className="sddpc__system" id="system">
        <p className="sddpc__kicker">The connected growth system</p>
        <h2>MAKE IT<br />MATTER.<span>THEN MAKE<br />IT MOVE.</span></h2>
        <div className="sddpc__steps">
          <div><b>01</b><h3>Find the friction.</h3><p>Market gaps, audience behaviors, sales barriers. Before the big idea gets a single pixel.</p></div>
          <div><b>02</b><h3>Engineer the asset.</h3><p>Sites and films that do not sit there looking pretty. They clarify, convert, and keep pace.</p></div>
          <div><b>03</b><h3>Command attention.</h3><p>Distribution, search, paid. The part where good work gets in front of actual people.</p></div>
          <div><b>04</b><h3>Compound the value.</h3><p>Measure, learn, tune. Because launch day should be a beginning, not a mic drop.</p></div>
        </div>
      </section>

      <footer className="sddpc__footer" id="contact">
        <span>IF YOUR GROWTH IS STUCK ON HOLD,</span>
        <a href="mailto:hello@stuffeddogdigital.com">LET’S CHANGE THE STATION. <b>↗</b></a>
        <small>Stuffed Dog Digital · Phoenix / Chicago · Vive La Humanity.</small>
      </footer>
    </main>
  );
}

export default ProjectChannel;