import { Link } from "wouter";
import { useReveal } from "@/hooks/useReveal";

import ustTommie from "@/assets/ust-tommie.png";
import ckysLogo from "@/assets/ckys-badge-white.svg";
import outbackPool from "@/assets/outback-pool.jpg";

const ROTATING_SLIDES = [
  {
    id: "outback",
    eyebrow: "Website: Outback Concrete Coatings",
    title: "Industry-leading. New standard.",
    text: "The Outback site is what a coatings website looks like when it stops acting like a brochure. An industry-leading build that sets the new standard for the category and works as hard as the crews do.",
    link: "https://outbackcoatings.com",
    linkText: "Visit the Site",
    renderMedia: () => (
      <div className="sddfp-site">
        <div className="sddfp-bar">
          <span className="sddfp-dots"><span/><span/><span/></span>
          <span className="sddfp-url">outbackcoatings.com</span>
        </div>
        <div className="sddfp-sitebody">
          <img src={outbackPool} alt="Outback Concrete Coatings site preview" />
        </div>
      </div>
    )
  },
  {
    id: "st-thomas",
    eyebrow: "Brand Identity: St. Thomas Football",
    title: "2026 unveiled.",
    text: "The official 2026 schedule reveal for St. Thomas Football",
    link: "/work#st-thomas",
    linkText: "View Case Study",
    renderMedia: () => (
      <div className="sddfp-media-img">
        <img src={ustTommie} alt="St. Thomas Football schedule graphic" />
      </div>
    )
  },
  {
    id: "ckys",
    eyebrow: "Brand Ecosystem: CK Youth Sports",
    title: "A community program built to grow.",
    text: "A rapidly growing multi-sport organization ready for a brand and digital ecosystem that could grow right along with it. We built the foundation: identity, web, and communications.",
    link: "/work#ck-youth-sports",
    linkText: "View Case Study",
    renderMedia: () => (
      <div className="sddfp-site" style={{ border: 'none' }}>
        <div className="sddfp-sitebody" style={{ background: "#152A52", aspectRatio: '16 / 11' }}>
          <img src={ckysLogo} alt="CK Youth Sports logo" style={{ width: '45%', height: 'auto', objectFit: 'contain' }} />
        </div>
      </div>
    )
  }
];

function chooseFeaturedProject() {
  const previous = Number.parseInt(
    window.sessionStorage.getItem("sdd-featured-project") ?? "-1",
    10,
  );
  const choices = ROTATING_SLIDES
    .map((_, index) => index)
    .filter((index) => index !== previous);
  const selected = choices[Math.floor(Math.random() * choices.length)] ?? 0;
  window.sessionStorage.setItem("sdd-featured-project", String(selected));
  return selected;
}

// Evaluated once per full page load. Client-side rerenders and navigation do
// not change the project while the visitor is on the site.
const FEATURED_PROJECT_INDEX = chooseFeaturedProject();

function RefreshProject() {
  const slide = ROTATING_SLIDES[FEATURED_PROJECT_INDEX];

  return (
    <div className="sddfp-row sddfp-flip">
      <div className="sddfp-media">
        {slide.renderMedia()}
      </div>
      <div className="sddfp-info">
        <p className="sddfp-eyebrow">{slide.eyebrow}</p>
        <h3 className="sddfp-h">{slide.title}</h3>
        <p className="sddfp-p">{slide.text}</p>
        {slide.link.startsWith("http") ? (
          <a className="sddfp-link" href={slide.link} target="_blank" rel="noopener noreferrer">
            {slide.linkText}
          </a>
        ) : (
          <Link href={slide.link} className="sddfp-link">
            {slide.linkText}
          </Link>
        )}
      </div>
    </div>
  );
}

function StaticProject({ 
  flip, video, eyebrow, title, text, link, linkText 
}: { 
  flip: boolean; video: string; eyebrow: string; title: string; text: string; link: string; linkText: string; 
}) {
  return (
    <div className={`sddfp-row ${flip ? 'sddfp-flip' : ''}`} data-reveal>
      <div className="sddfp-media sddfp-video">
        <iframe 
          src={`https://player.vimeo.com/video/${video}?title=0&byline=0&portrait=0`} 
          title={title} 
          loading="lazy" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      <div className="sddfp-info">
        <p className="sddfp-eyebrow">{eyebrow}</p>
        <h3 className="sddfp-h">{title}</h3>
        <p className="sddfp-p">{text}</p>
        <a className="sddfp-link" href={link} target="_blank" rel="noopener noreferrer">{linkText}</a>
      </div>
    </div>
  );
}

export function Work() {
  const ref = useReveal();

  return (
    <section id="work" ref={ref} className="sddfp">
      <style>{`
        .sddfp { 
          background: #F2F0E9; 
          color: #000000; 
          padding: clamp(72px, 10vw, 136px) clamp(20px, 5vw, 64px); 
        }
        .sddfp .sddfp-inner { 
          max-width: 1152px; 
          margin: 0 auto; 
        }
        .sddfp .sddfp-eyebrow { 
          font-family: 'Archivo Black', sans-serif; 
          font-weight: 800; 
          font-size: clamp(11px, 1.1vw, 13px); 
          letter-spacing: 0.28em; 
          text-transform: uppercase; 
          color: #1E5F4A; 
          margin: 0 0 14px; 
        }
        .sddfp h2.sddfp-title { 
          font-family: 'Archivo Black', sans-serif; 
          font-weight: 800; 
          font-size: clamp(34px, 5.4vw, 80px); 
          line-height: 0.98; 
          letter-spacing: -0.03em; 
          text-transform: uppercase; 
          color: #000000; 
          margin: 0 0 24px; 
        }
        .sddfp .sddfp-lede { 
          font-family: 'Archivo', sans-serif; 
          font-size: 16px; 
          line-height: 1.7; 
          max-width: 36em; 
          color: #6C7075; 
          margin: 0 0 clamp(40px, 6vh, 72px); 
        }
        .sddfp .sddfp-row { 
          display: grid; 
          grid-template-columns: 7fr 5fr; 
          gap: clamp(24px, 4vw, 56px); 
          align-items: center; 
          padding: clamp(36px, 5vw, 60px) 0; 
          border-top: 1px solid rgba(0,0,0,0.08); 
        }
        .sddfp .sddfp-row.sddfp-flip { 
          grid-template-columns: 5fr 7fr; 
        }
        .sddfp .sddfp-row.sddfp-flip .sddfp-media { 
          order: 2; 
        }
        .sddfp .sddfp-media { 
          position: relative; 
          overflow: hidden; 
        }
        .sddfp .sddfp-media-img img { 
          width: 100%; 
          height: auto; 
          display: block; 
          border-radius: 10px;
          border: 1px solid rgba(0,0,0,0.08);
        }
        .sddfp .sddfp-video { 
          aspect-ratio: 16 / 9; 
          background: #0D0A07; 
          border: 1px solid rgba(0,0,0,0.08); 
          border-radius: 10px;
        }
        .sddfp .sddfp-video iframe { 
          position: absolute; 
          inset: 0; 
          width: 100%; 
          height: 100%; 
          border: 0; 
        }
        .sddfp .sddfp-site { 
          border: 1px solid rgba(0,0,0,0.08); 
          border-radius: 10px; 
          overflow: hidden; 
          background: #FFFFFF;
        }
        .sddfp .sddfp-bar { 
          display: flex; 
          align-items: center; 
          gap: 8px; 
          padding: 10px 14px; 
          background: #E8E6DF; 
          border-bottom: 1px solid rgba(0,0,0,0.08); 
        }
        .sddfp .sddfp-dots span { 
          display: inline-block; 
          width: 10px; 
          height: 10px; 
          border-radius: 50%; 
          background: #C4C2BB; 
          margin-right: 5px; 
        }
        .sddfp .sddfp-url { 
          font-family: 'Archivo', sans-serif; 
          font-size: 13px; 
          color: #6C7075; 
          background: #FFFFFF; 
          border-radius: 16px; 
          padding: 5px 14px; 
        }
        .sddfp .sddfp-sitebody { 
          aspect-ratio: 16 / 10; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          position: relative;
          overflow: hidden;
        }
        .sddfp .sddfp-sitebody img { 
          width: 100%; 
          height: 100%;
          object-fit: cover;
        }
        .sddfp .sddfp-info .sddfp-eyebrow { 
          margin-bottom: 12px; 
          font-size: 12px;
        }
        .sddfp h3.sddfp-h { 
          font-family: 'Archivo Black', sans-serif; 
          font-weight: 800; 
          font-size: clamp(22px, 2.6vw, 32px); 
          line-height: 1.05; 
          text-transform: uppercase; 
          letter-spacing: -0.02em; 
          color: #000000; 
          margin: 0 0 16px; 
        }
        .sddfp .sddfp-p { 
          font-family: 'Archivo', sans-serif; 
          font-size: 15px; 
          line-height: 1.7; 
          max-width: 30em; 
          color: #3A3A3A; 
          margin: 0 0 24px; 
        }
        .sddfp .sddfp-link { 
          display: inline-block;
          font-family: 'Archivo Black', sans-serif; 
          font-weight: 700; 
          font-size: 13px; 
          letter-spacing: 0.1em; 
          text-transform: uppercase; 
          text-decoration: none; 
          color: #000000; 
          border-bottom: 2px solid #19E6E6; 
          padding-bottom: 4px; 
          transition: color 0.2s; 
        }
        .sddfp .sddfp-link:hover { 
          color: #1E5F4A; 
        }
        .sddfp-more-wrap {
          margin-top: clamp(40px, 6vw, 60px);
          text-align: center;
        }
        .sddfp-more-link {
          display: inline-block;
          font-family: 'Archivo Black', sans-serif;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #000000;
          text-decoration: none;
          border-bottom: 2px solid #19E6E6;
          padding-bottom: 4px;
          transition: color 0.2s;
        }
        .sddfp-more-link:hover {
          color: #1E5F4A;
        }

        @media (max-width: 860px) {
          .sddfp .sddfp-row, .sddfp .sddfp-row.sddfp-flip { 
            grid-template-columns: 1fr; 
            gap: 32px;
          }
          .sddfp .sddfp-row.sddfp-flip .sddfp-media { 
            order: 0; 
          }
        }
      `}</style>
      <div className="sddfp-inner">
        <p data-reveal className="sddfp-eyebrow">Highlighted Projects</p>
        <h2 data-reveal className="sddfp-title">Some work you should<br/>see up close.</h2>
        <p data-reveal className="sddfp-lede">A closer look at pieces we're proud of and clients are winning with.</p>

        <div data-reveal>
          <RefreshProject />
        </div>

        <StaticProject 
          flip={false}
          video="1199831835" 
          eyebrow="Schedule Release Film: KCU Athletics"
          title="Eleven worlds. One Knight."
          text="For KCU's 2026 football schedule release, we dropped the Knight into a Mario Kart-inspired universe and hit the gas: eleven custom-built worlds, one for every opponent on the slate. Lap by lap, rival by rival, the Knight runs the whole circuit. Press start on the season."
          link="https://vimeo.com/1199831835"
          linkText="Watch the Film"
        />

        <StaticProject 
          flip={true}
          video="1171865001" 
          eyebrow="Brand Film: Northeast Plumbing"
          title="Meet Mr. Hairy."
          text="Every hometown brand needs a face people remember. Northeast's is a little hairier than most. This film welcomes Mr. Hairy into the story: the character that turns a plumbing company into a personality."
          link="https://vimeo.com/1171865001"
          linkText="Watch the Film"
        />

        <div className="sddfp-more-wrap" data-reveal>
          <Link href="/work" className="sddfp-more-link">
            View full portfolio →
          </Link>
        </div>
      </div>
    </section>
  );
}
