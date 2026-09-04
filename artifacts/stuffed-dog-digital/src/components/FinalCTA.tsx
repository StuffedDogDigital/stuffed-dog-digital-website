import { useReveal } from "@/hooks/useReveal";

export function FinalCTA() {
  const ref = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        background: "#1E5F4A",
        color: "#000000",
        padding: "clamp(100px,16vh,180px) clamp(20px,5vw,72px)",
      }}
    >
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <h2
          data-reveal
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(38px,6.8vw,100px)",
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            margin: "0 0 28px",
          }}
        >
          Got something worth fighting for?
        </h2>

        <p
          data-reveal
          style={{
            fontSize: "clamp(16px,1.6vw,20px)",
            lineHeight: 1.6,
            fontWeight: 500,
            maxWidth: 560,
            margin: "0 auto 44px",
            color: "rgba(0,0,0,0.9)",
          }}
        >
          Bring us the story a machine couldn't tell. We'll make people feel it.
        </p>

        <div
          data-reveal
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://calendar.app.google/fJcK1qEHuecVNYf5A"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#F2F0E9",
              color: "#000000",
              fontWeight: 800,
              fontSize: 15,
              padding: "18px 42px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "background 0.2s, color 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#000000";
              (e.currentTarget as HTMLElement).style.color = "#F2F0E9";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#F2F0E9";
              (e.currentTarget as HTMLElement).style.color = "#000000";
            }}
          >
            Make Your Mark
          </a>
          <a
            href="#work"
            style={{
              border: "2px solid rgba(0,0,0,0.7)",
              color: "#000000",
              fontWeight: 700,
              fontSize: 15,
              padding: "16px 38px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "border-color 0.2s, background 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#000000";
              (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.7)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
            }}
          >
            See the Work
          </a>
        </div>
      </div>
    </section>
  );
}
