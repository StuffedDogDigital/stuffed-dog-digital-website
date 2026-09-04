import { useEffect, useRef } from "react";

const OUTCOMES = [
  {
    num: "01",
    title: "Diagnose",
    body: "Before we make a single creative decision, we analyze your market gaps, audience behaviors, and sales barriers. Strategy based on data, not assumptions.",
  },
  {
    num: "02",
    title: "Build",
    body: "Websites and films aren't art projects. They're revenue engines. We build high-converting digital platforms optimized for speed, clarity, and lead generation.",
  },
  {
    num: "03",
    title: "Move",
    body: "Beautiful work dies in the dark. We deploy targeted distribution, SEO, and paid media to attract qualified traffic and make every acquisition dollar work harder.",
  },
  {
    num: "04",
    title: "Grow",
    body: "We measure what matters, learn from real behavior, and keep optimizing so the work continues earning after launch instead of fading with it.",
  },
];

const CAPABILITIES = [
  {
    num: "01",
    title: "Brand",
    body: "Strategy, naming, identity systems, verbal identity and the details that make the whole thing feel intentional.",
  },
  {
    num: "02",
    title: "Digital",
    body: "Websites, landing pages, interactive tools and digital products designed around how real people actually move.",
  },
  {
    num: "03",
    title: "Creative",
    body: "Campaign concepts, motion, content, 3D, photography direction and the visual systems that keep a brand alive.",
  },
  {
    num: "04",
    title: "Growth",
    body: "SEO, paid media, conversion thinking and performance strategy without turning the brand into a spreadsheet.",
  },
];

export function WhatWeDo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || !("IntersectionObserver" in window)) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const els = root.querySelectorAll<HTMLElement>(".reveal-item");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            (e.target as HTMLElement).style.opacity = "1";
            (e.target as HTMLElement).style.transform = "translateY(0)";
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );

    els.forEach((el, i) => {
      // Base delay based on position in grid
      const delay = (i % 4) * 0.1;

      if (el.getBoundingClientRect().top > window.innerHeight * 0.8) {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}s`;
        io.observe(el);
      } else {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });

    return () => io.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <section
        id="approach"
        style={{
          background: "#050505",
          color: "#FFFFFF",
          padding: "clamp(100px,18vh,200px) clamp(20px,5vw,72px)",
          position: "relative",
          overflow: "hidden"
        }}
      >
      <div style={{ maxWidth: 1360, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "clamp(48px, 8vh, 80px)",
        }}>
          {/* Header section */}
          <div className="reveal-item" style={{ maxWidth: 760 }}>
            <p
              style={{
                fontWeight: 800,
                fontSize: "clamp(11px,1.1vw,13px)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#1E5F4A",
                margin: "0 0 24px",
              }}
            >
              The Commercial Value
            </p>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(42px,6.5vw,96px)",
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                margin: "0 0 32px",
                color: "#FFFFFF",
              }}
            >
              Creative that sells.
              <br />
              <span style={{ color: "#888888" }}>Systems that scale.</span>
            </h2>
            <p
              style={{
                fontSize: "clamp(16px, 1.5vw, 20px)",
                lineHeight: 1.6,
                color: "#A0A0A0",
                margin: 0,
              }}
            >No fluff, just measurable outcomes.</p>
          </div>

          {/* Grid section */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: "clamp(24px, 3vw, 40px)",
            }}
          >
            {OUTCOMES.map((o) => (
              <div
                key={o.num}
                className="reveal-item"
                style={{
                  background: "#111111",
                  border: "1px solid #222222",
                  borderRadius: 16,
                  padding: "clamp(32px, 4vw, 48px)",
                  display: "flex",
                  flexDirection: "column",
                  transition: "background 0.3s, border-color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#151515";
                  e.currentTarget.style.borderColor = "#333333";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#111111";
                  e.currentTarget.style.borderColor = "#222222";
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: "clamp(40px, 6vh, 80px)"
                }}>
                  <span style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontWeight: 800,
                    fontSize: 16,
                    background: "#1E5F4A",
                    color: "#FFFFFF",
                    padding: "4px 12px",
                    borderRadius: 100,
                  }}>
                    {o.num}
                  </span>
                  <div style={{ height: 1, background: "#333333", flex: 1 }} />
                </div>

                <h3
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(24px,2.5vw,32px)",
                    letterSpacing: "-0.01em",
                    textTransform: "uppercase",
                    margin: "0 0 16px",
                    color: "#FFFFFF",
                  }}
                >
                  {o.title}
                </h3>
                <p
                  style={{
                    fontSize: "clamp(15px,1.1vw,17px)",
                    lineHeight: 1.65,
                    color: "#888888",
                    margin: 0,
                  }}
                >
                  {o.body}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <section
        id="capabilities"
        style={{
          background: "#F2F0E9",
          color: "#000000",
          padding: "clamp(100px,18vh,190px) clamp(20px,5vw,72px)",
        }}
      >
        <div
          style={{
            maxWidth: 1360,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(430px, 100%), 1fr))",
            gap: "clamp(64px,10vw,150px)",
            alignItems: "start",
          }}
        >
          <div className="reveal-item">
            <p
              style={{
                fontWeight: 800,
                fontSize: "clamp(11px,1.1vw,13px)",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#1E5F4A",
                margin: "0 0 24px",
              }}
            >
              Capabilities
            </p>
            <h2
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(58px,8vw,118px)",
                lineHeight: 0.86,
                letterSpacing: "-0.045em",
                textTransform: "uppercase",
                margin: "0 0 40px",
              }}
            >
              What we
              <br />
              do.
            </h2>
            <p
              style={{
                maxWidth: 560,
                fontSize: "clamp(17px,1.5vw,21px)",
                lineHeight: 1.65,
                color: "#4A4A4A",
                margin: 0,
              }}
            >
              We build brands people can feel and digital experiences that give those brands somewhere useful to live.
            </p>
          </div>

          <div>
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.num}
                className="reveal-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: "clamp(18px,3vw,40px)",
                  padding: "clamp(30px,5vh,52px) 0",
                  borderTop: "1px solid rgba(0,0,0,0.2)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: 13,
                    color: "#0A6CFF",
                    paddingTop: 6,
                  }}
                >
                  {capability.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Archivo Black', sans-serif",
                      fontSize: "clamp(28px,3.2vw,46px)",
                      lineHeight: 1,
                      letterSpacing: "-0.025em",
                      textTransform: "uppercase",
                      margin: "0 0 16px",
                    }}
                  >
                    {capability.title}
                  </h3>
                  <p
                    style={{
                      maxWidth: 620,
                      fontSize: "clamp(15px,1.2vw,18px)",
                      lineHeight: 1.65,
                      color: "#555555",
                      margin: 0,
                    }}
                  >
                    {capability.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
