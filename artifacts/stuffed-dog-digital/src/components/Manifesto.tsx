import { useReveal } from "@/hooks/useReveal";

const MOTTO = "Vive La Humanity.";

export function Manifesto() {
  const ref = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "#F2F0E9",
        padding: "clamp(100px,17vh,190px) clamp(20px,5vw,72px)",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p
          data-reveal
          style={{
            fontWeight: 800,
            fontSize: "clamp(11px,1.1vw,13px)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#6C7075",
            margin: "0 0 40px",
          }}
        >
          What we believe
        </p>

        <p
          data-reveal
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(24px,3.2vw,42px)",
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
            margin: "0 0 1.3em",
            color: "#000000",
          }}
        >
          We aspire to create work that outlives the campaign. Work that
          inspires pride, strengthens communities and helps good organizations
          leave their mark on the people they serve.
        </p>

        <p
          data-reveal
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(24px,3.2vw,42px)",
            lineHeight: 1.3,
            letterSpacing: "-0.015em",
            margin: "0 0 1.3em",
            color: "#6C7075",
          }}
        >
          Relationships over transactions. Character over recognition. Purpose
          over profit.
        </p>

        {/* Blake Allen quote */}
        <div
          data-reveal
          style={{
            marginTop: "clamp(56px,10vh,100px)",
            borderTop: "1px solid rgba(0,0,0,0.15)",
            paddingTop: "clamp(32px,6vh,56px)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(15px,1.4vw,18px)",
              lineHeight: 1.75,
              color: "#6C7075",
              fontStyle: "italic",
              maxWidth: 620,
              margin: "0 0 16px",
            }}
          >
            "We elevate work, drive revenue, sell ideas, and build trust. Our
            goal is to make everything around us better, and our superpower is
            our empathy."
          </p>
          <p
            style={{
              fontWeight: 800,
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#000000",
              margin: 0,
            }}
          >
            Blake Allen
          </p>
          <p style={{ fontSize: 12.5, color: "#6C7075", margin: "2px 0 0" }}>
            Founder, Stuffed Dog Digital
          </p>
        </div>

        {/* Big motto */}
        <p
          data-reveal
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(40px,7.5vw,104px)",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            color: "#1E5F4A",
            margin: "clamp(70px,12vh,130px) 0 0",
            textAlign: "center",
            lineHeight: 1.02,
          }}
        >
          {MOTTO}
        </p>
      </div>
    </section>
  );
}
