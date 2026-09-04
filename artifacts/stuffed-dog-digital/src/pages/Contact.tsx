import { Layout } from "@/components/Layout";
import { useReveal } from "@/hooks/useReveal";

const C = {
  espresso: "#F2F0E9",
  linen:    "#000000",
  amber:    "#1E5F4A",
  terra:    "#1E5F4A",
  stone:    "#6C7075",
};

const display: React.CSSProperties = {
  fontFamily: "'Archivo Black', sans-serif",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "-0.01em",
  lineHeight: 1.02,
  margin: 0,
};

export default function Contact() {
  const ref = useReveal();

  return (
    <Layout>
      <div ref={ref}>
        <section style={{
          background: C.espresso, color: C.linen,
          minHeight: "70vh",
          padding: "clamp(120px,20vh,200px) clamp(20px,5vw,72px) clamp(80px,12vh,140px)",
          display: "flex", alignItems: "center",
        }}>
          <div style={{ maxWidth: 1100 }}>
            <p data-reveal style={{ fontWeight: 800, fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase", color: C.amber, margin: "0 0 20px" }}>
              Contact &nbsp;·&nbsp; Phoenix | Chicago
            </p>
            <h1 data-reveal style={{ ...display, fontSize: "clamp(44px,6.5vw,96px)" }}>
              Got something<br /><span style={{ color: "#0A6CFF" }}>worth fighting for?</span>
            </h1>
            <p data-reveal style={{ maxWidth: 620, fontSize: "clamp(16px,1.4vw,19px)", lineHeight: 1.75, color: C.stone, margin: "36px 0 44px" }}>
              Tell us what you're building and why it matters. We'll tell you honestly
              whether we're the right partner and what we'd do first.
            </p>
            <div data-reveal style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="mailto:hello@stuffeddogdigital.com"
                style={{
                  display: "inline-block",
                  background: C.amber,
                  color: C.espresso,
                  padding: "16px 40px",
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Make Your Mark
              </a>
              <a
                href="mailto:hello@stuffeddogdigital.com"
                style={{ color: C.linen, fontWeight: 700, fontSize: 15, textDecoration: "none", borderBottom: `2px solid ${C.amber}`, paddingBottom: 2 }}
              >
                hello@stuffeddogdigital.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
