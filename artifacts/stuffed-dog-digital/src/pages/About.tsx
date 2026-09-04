import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { useReveal } from "@/hooks/useReveal";

const C = {
  espresso: "#F2F0E9",
  linen:    "#000000",
  amber:    "#1E5F4A",
  terra:    "#1E5F4A",
  stone:    "#6C7075",
  clay:     "#3A3A3A",
};

const label: React.CSSProperties = {
  fontWeight: 800,
  fontSize: 12,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  color: C.amber,
  margin: "0 0 20px",
};

const display: React.CSSProperties = {
  fontFamily: "'Archivo Black', sans-serif",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "-0.01em",
  lineHeight: 1.02,
  margin: 0,
};

const STEPS = [
  { n: "1", t: "Craft",  d: "Shape your story, voice, and visuals so everything feels aligned and unmistakably you." },
  { n: "2", t: "Launch", d: "Translate your identity into a clean, conversion-focused website that works as hard as you do." },
  { n: "3", t: "Grow",   d: "Layer in strategic SEO that earns visibility and drives sustainable growth over time." },
];

export default function About() {
  const ref = useReveal();

  return (
    <Layout>
      <div ref={ref}>
        {/* Hero */}
        <section style={{ background: C.espresso, color: C.linen, padding: "clamp(120px,20vh,200px) clamp(20px,5vw,72px) clamp(80px,12vh,140px)" }}>
          <div style={{ maxWidth: 1100 }}>
            <p data-reveal style={label}>About &nbsp;·&nbsp; Stuffed Dog Digital</p>
            <h1 data-reveal style={{ ...display, fontSize: "clamp(44px,6.5vw,96px)" }}>
              Born from loyalty.<br />
              <span style={{ color: "#0A6CFF" }}>Built on heart.</span>
            </h1>
            <p data-reveal style={{ maxWidth: 640, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.75, color: C.stone, margin: "36px 0 0" }}>
              We partner with teams and businesses that care deeply about what they're
              building. Whether it's growing a program, launching a facility, or helping a
              local company win bigger, we treat every project like it's personal.
              Because to us, it is.
            </p>
          </div>
        </section>

        {/* Founder quote */}
        <section style={{ background: "#FFFFFF", color: "#000000", padding: "clamp(90px,14vh,160px) clamp(20px,5vw,72px)" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <blockquote data-reveal style={{
              margin: 0,
              fontFamily: "'Archivo Black', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(24px,3vw,40px)",
              lineHeight: 1.3,
            }}>
              "We elevate work, drive revenue, sell ideas, and build trust. Our goal is to
              make everything around us better, and our superpower is{" "}
              <span style={{ color: "#0A6CFF" }}>our empathy</span>."
            </blockquote>
            <p data-reveal style={{ margin: "28px 0 0", fontWeight: 800, fontSize: 14, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Blake Allen
              <span style={{ display: "block", fontWeight: 600, color: C.clay, marginTop: 4, letterSpacing: "0.06em" }}>
                Founder, Stuffed Dog Digital
              </span>
            </p>
          </div>
        </section>

        {/* How we work */}
        <section style={{ background: C.espresso, color: C.linen, padding: "clamp(90px,14vh,160px) clamp(20px,5vw,72px)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <p data-reveal style={label}>How we work</p>
            <h2 data-reveal style={{ ...display, fontSize: "clamp(34px,4.5vw,64px)", marginBottom: 56 }}>
              Craft. Launch. Grow.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 32 }}>
              {STEPS.map((s) => (
                <div key={s.n} data-reveal style={{
                  border: "1px solid rgba(0,0,0,0.12)",
                  padding: "36px 30px",
                }}>
                  <span style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontWeight: 800, fontSize: 15, color: C.amber,
                    display: "block", marginBottom: 16,
                  }}>{s.n}</span>
                  <h3 style={{ ...display, fontSize: 26, marginBottom: 14 }}>{s.t}</h3>
                  <p style={{ margin: 0, color: C.stone, lineHeight: 1.7, fontSize: 15 }}>{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Independence statement */}
        <section style={{ background: "#1E5F4A", color: "#F2F0E9", padding: "clamp(90px,14vh,150px) clamp(20px,5vw,72px)", textAlign: "center" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h2 data-reveal style={{ ...display, fontSize: "clamp(30px,4vw,54px)", marginBottom: 24 }}>
              Independent, and intending to stay that way.
            </h2>
            <p data-reveal style={{ fontSize: "clamp(15px,1.3vw,18px)", lineHeight: 1.75, margin: "0 0 40px", color: "rgba(0,0,0,0.85)" }}>
              No holding company. No layers of account management. When you work with
              Stuffed Dog Digital, you work with the people doing the work, from Phoenix
              and Chicago, for teams anywhere that care about what they're building.
            </p>
            <Link
              data-reveal
              href="/contact"
              style={{
                display: "inline-block",
                background: C.espresso,
                color: C.linen,
                padding: "16px 40px",
                fontWeight: 800,
                fontSize: 13,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Start Something
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
