/**
 * SDD — "Warm Craft" vibe variation
 *
 * Same layout skeleton as the live site.
 * Different tonal register: deep espresso ground, amber signal, terracotta
 * emphasis, linen text — analog/editorial vs. cold-digital.
 */

// ── Palette ──────────────────────────────────────────────────────────────────
const C = {
  espresso:   "#17120E",   // replaces #111111
  linen:      "#E8DFC8",   // replaces #F2EFE7
  amber:      "#C8852A",   // replaces #445CFF
  terra:      "#D45A38",   // replaces #FF4F55
  stone:      "#A09890",   // replaces #B9B6AE
  clay:       "#4A3F35",   // replaces #4a4842
  inkBorder:  "rgba(240,230,210,0.1)",
};

// ── Nav ───────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 16,
      padding: "16px clamp(20px,4vw,56px)",
      background: "rgba(23,18,14,0.85)",
      backdropFilter: "blur(14px)",
      borderBottom: `1px solid ${C.inkBorder}`,
    }}>
      <img src="/__mockup/images/logo-white.svg" alt="Stuffed Dog Digital"
        style={{ height: 72, width: "auto" }} />

      <div style={{
        display: "flex", alignItems: "center",
        gap: "clamp(14px,2.5vw,30px)",
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 600, fontSize: 13.5,
        letterSpacing: "0.06em", textTransform: "uppercase" as const,
      }}>
        {["Work","What We Do","About","Contact"].map(l => (
          <a key={l} href="#" style={{ color: C.linen, textDecoration: "none" }}>{l}</a>
        ))}
      </div>

      <a href="#" style={{
        border: `1.5px solid ${C.linen}`, color: C.linen,
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 700, fontSize: 13.5,
        padding: "10px 22px",
        letterSpacing: "0.06em", textTransform: "uppercase" as const,
        textDecoration: "none",
      }}>
        Start Something
      </a>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <header style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex", alignItems: "flex-end",
      overflow: "hidden",
      background: C.espresso,
    }}>
      {/* Warm atmospheric gradient — replaces video */}
      <div style={{
        position: "absolute", inset: 0,
        background: `
          radial-gradient(ellipse 80% 70% at 65% 30%,
            rgba(130,80,30,0.28) 0%,
            rgba(23,18,14,0) 70%),
          radial-gradient(ellipse 50% 60% at 80% 60%,
            rgba(180,90,30,0.14) 0%,
            transparent 65%)
        `,
        pointerEvents: "none",
      }} />

      {/* Grain texture overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.035,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundSize: "256px 256px",
        pointerEvents: "none",
      }} />

      {/* Bottom scrim */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to top,
          rgba(23,18,14,0.94) 0%,
          rgba(23,18,14,0.45) 50%,
          rgba(23,18,14,0.15) 100%)`,
        pointerEvents: "none",
      }} />

      <div style={{
        position: "relative", zIndex: 2,
        padding: "0 clamp(20px,5vw,72px) clamp(48px,9vh,110px)",
        maxWidth: 1200,
      }}>
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(11px,1.1vw,14px)",
          letterSpacing: "0.28em", textTransform: "uppercase" as const,
          color: C.stone, margin: "0 0 22px",
        }}>
          Stuffed Dog Digital &nbsp;·&nbsp; Creative Human Intelligence
        </p>

        <h1 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(34px,5.4vw,84px)",
          lineHeight: 1, letterSpacing: "-0.03em",
          textTransform: "uppercase" as const,
          margin: 0, color: C.linen,
        }}>
          Intelligence can be artificial.<br />
          Imagination cannot.
        </h1>

        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "clamp(16px,1.5vw,20px)",
          fontWeight: 500, lineHeight: 1.6,
          maxWidth: 640, margin: "26px 0 0",
          color: `rgba(232,223,200,0.82)`,
        }}>
          AI can draft a thousand campaigns before breakfast. Not one of them
          will care whether you win. We blend technology into human craft, and
          make work people actually feel.
        </p>

        <p style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(15px,1.4vw,19px)",
          letterSpacing: "0.12em", textTransform: "uppercase" as const,
          color: C.amber, margin: "26px 0 0",
        }}>
          Vive La Humanity.
        </p>
      </div>

      {/* Scroll pip */}
      <div style={{
        position: "absolute",
        right: "clamp(20px,4vw,56px)",
        bottom: "clamp(48px,9vh,110px)",
        zIndex: 2,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <span style={{
          width: 1.5, height: 52,
          background: `rgba(232,223,200,0.4)`, display: "block",
        }} />
        <span style={{
          fontSize: 10, fontWeight: 700,
          letterSpacing: "0.22em", textTransform: "uppercase" as const,
          color: C.stone, writingMode: "vertical-rl" as const,
          fontFamily: "'Manrope', sans-serif",
        }}>Scroll</span>
      </div>
    </header>
  );
}

// ── The Moment (word passage) ─────────────────────────────────────────────────
function TheStory() {
  const words = [
    { t: "Machines", c: `rgba(232,223,200,0.15)` },
    { t: "can", c: `rgba(232,223,200,0.15)` },
    { t: "make", c: `rgba(232,223,200,0.15)` },
    { t: "marketing", c: C.linen },
    { t: "now.", c: C.linen },
    { t: "Infinite.", c: C.linen },
    { t: "Instant.", c: C.linen },
    { t: "Optimized.", c: C.linen },
    { t: "And", c: C.linen },
    { t: "all", c: C.linen },
    { t: "of", c: C.linen },
    { t: "it", c: C.linen },
    { t: "sounds", c: C.linen },
    { t: "the", c: C.linen },
    { t: "same.", c: C.linen },
    { t: "When", c: C.linen },
    { t: "anyone", c: C.linen },
    { t: "can", c: C.linen },
    { t: "generate", c: C.linen },
    { t: "everything,", c: C.linen },
    { t: "the", c: C.linen },
    { t: "only", c: C.linen },
    { t: "work", c: C.linen },
    { t: "that", c: C.linen },
    { t: "cuts", c: C.linen },
    { t: "through", c: C.linen },
    { t: "is", c: C.linen },
    { t: "the", c: C.linen },
    { t: "work", c: C.linen },
    { t: "that", c: C.linen },
    { t: "feels", c: C.linen },
    { t: "alive.", c: C.terra },
    { t: "That", c: C.linen },
    { t: "has", c: C.linen },
    { t: "always", c: C.linen },
    { t: "been,", c: C.linen },
    { t: "and", c: C.linen },
    { t: "will", c: C.linen },
    { t: "always", c: C.linen },
    { t: "be,", c: C.linen },
    { t: "a", c: C.linen },
    { t: "human", c: C.amber },
    { t: "job.", c: C.linen },
  ];

  return (
    <section style={{
      background: C.espresso,
      padding: "clamp(90px,15vh,160px) clamp(20px,5vw,72px)",
    }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800, fontSize: "clamp(11px,1.1vw,13px)",
          letterSpacing: "0.28em", textTransform: "uppercase" as const,
          color: C.stone, margin: "0 0 32px",
        }}>
          The moment we're in
        </p>
        <p style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(26px,3.9vw,54px)",
          lineHeight: 1.22, letterSpacing: "-0.015em", margin: 0,
        }}>
          {words.map((w, i) => (
            <span key={i} style={{ color: w.c }}>{w.t} </span>
          ))}
        </p>
      </div>
    </section>
  );
}

// ── Human Intelligence (linen bg) ────────────────────────────────────────────
function HumanIntelligence() {
  const pairs = [
    { dim: "Artificial intelligence predicts.", bold: "Human intelligence surprises." },
    { dim: "It averages everything it touches.", bold: "People commit to one true thing." },
    { dim: "It can generate.", boldEl: <>It cannot <span style={{ color: C.terra }}>give a damn.</span></> },
    { dim: "It optimizes for the click.", bold: "People earn the trust behind it." },
  ];

  return (
    <section style={{
      background: C.linen, color: C.espresso,
      padding: "clamp(90px,15vh,170px) clamp(20px,5vw,72px)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800, fontSize: "clamp(11px,1.1vw,13px)",
          letterSpacing: "0.28em", textTransform: "uppercase" as const,
          color: C.amber, margin: "0 0 24px",
        }}>
          Creative human intelligence
        </p>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: "clamp(34px,5.4vw,80px)",
          lineHeight: 0.98, letterSpacing: "-0.03em",
          textTransform: "uppercase" as const,
          margin: `0 0 clamp(48px,8vh,88px)`, maxWidth: 1000,
        }}>
          Technology in the hands.<br />
          Humanity in the heart.
        </h2>

        <div style={{ display: "flex", flexDirection: "column", borderTop: `1px solid rgba(23,18,14,0.18)` }}>
          {pairs.map((p, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
              gap: "8px 40px", padding: "26px 0",
              borderBottom: `1px solid rgba(23,18,14,0.18)`,
              alignItems: "baseline",
            }}>
              <p style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 600, fontSize: "clamp(20px,2.2vw,30px)",
                letterSpacing: "-0.01em", margin: 0, color: "#9A9080",
              }}>{p.dim}</p>
              <p style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontWeight: 800, fontSize: "clamp(20px,2.2vw,30px)",
                letterSpacing: "-0.01em", margin: 0, color: C.espresso,
              }}>{p.boldEl ?? p.bold}</p>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "clamp(16px,1.5vw,20px)", fontWeight: 500, lineHeight: 1.7,
          maxWidth: 680, margin: "clamp(48px,8vh,80px) 0 0",
          color: C.clay,
        }}>
          We are not anti-technology. We are anti-soulless. We put the machines
          to work so our people can do the one thing machines can't: care. We
          blend technology into the human soul, never the other way around.
        </p>
      </div>
    </section>
  );
}

// ── Manifesto snippet ─────────────────────────────────────────────────────────
function ManifestoSnippet() {
  return (
    <section style={{
      background: C.espresso,
      padding: "clamp(100px,17vh,190px) clamp(20px,5vw,72px)",
    }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 800, fontSize: "clamp(11px,1.1vw,13px)",
          letterSpacing: "0.28em", textTransform: "uppercase" as const,
          color: C.stone, margin: "0 0 40px",
        }}>
          What we believe
        </p>

        <p style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 700, fontSize: "clamp(24px,3.2vw,42px)",
          lineHeight: 1.3, letterSpacing: "-0.015em",
          margin: "0 0 1.3em", color: C.linen,
        }}>
          We aspire to create work that outlives the campaign. Work that
          inspires pride, strengthens communities and helps good organizations
          leave their mark on the people they serve.
        </p>

        <p style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 700, fontSize: "clamp(24px,3.2vw,42px)",
          lineHeight: 1.3, letterSpacing: "-0.015em",
          margin: "0 0 1.3em", color: `rgba(232,223,200,0.42)`,
        }}>
          Relationships over transactions. Character over recognition.
          Purpose over profit.
        </p>

        <p style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: "clamp(26px,3.6vw,48px)",
          lineHeight: 1.25, letterSpacing: "-0.02em",
          margin: 0, color: C.linen,
        }}>
          We don't want to be the biggest agency in the world. We want to be
          the one you trust{" "}
          <span style={{ color: C.terra }}>when the story matters most.</span>
        </p>

        {/* Blake */}
        <div style={{
          marginTop: "clamp(56px,10vh,100px)",
          borderTop: `1px solid rgba(232,223,200,0.12)`,
          paddingTop: "clamp(32px,6vh,56px)",
        }}>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: "clamp(15px,1.4vw,18px)", lineHeight: 1.75,
            color: `rgba(232,223,200,0.52)`, fontStyle: "italic",
            maxWidth: 620, margin: "0 0 16px",
          }}>
            "We elevate work, drive revenue, sell ideas, and build trust. Our
            goal is to make everything around us better, and our superpower is
            our empathy."
          </p>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800, fontSize: 13, letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            color: C.linen, margin: 0,
          }}>Blake Allen</p>
          <p style={{ fontSize: 12.5, color: C.stone, margin: "2px 0 0", fontFamily: "'Manrope', sans-serif" }}>
            Founder, Stuffed Dog Digital
          </p>
        </div>

        <p style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: "clamp(40px,7.5vw,104px)",
          letterSpacing: "-0.03em", textTransform: "uppercase" as const,
          color: C.amber,
          margin: "clamp(70px,12vh,130px) 0 0",
          textAlign: "center" as const, lineHeight: 1.02,
        }}>
          Vive La Humanity.
        </p>
      </div>
    </section>
  );
}

// ── Final CTA ─────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{
      // Amber instead of cobalt — warm & commanding vs. cold & electric
      background: "#8A5A1A",
      color: C.linen,
      padding: "clamp(100px,16vh,180px) clamp(20px,5vw,72px)",
    }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" as const }}>
        <h2 style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontWeight: 800, fontSize: "clamp(38px,6.8vw,100px)",
          lineHeight: 0.98, letterSpacing: "-0.03em",
          textTransform: "uppercase" as const, margin: "0 0 28px",
        }}>
          Got something worth fighting for?
        </h2>
        <p style={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: "clamp(16px,1.6vw,20px)", lineHeight: 1.6, fontWeight: 500,
          maxWidth: 560, margin: "0 auto 44px",
          color: "rgba(232,223,200,0.88)",
        }}>
          Bring us the story a machine couldn't tell. We'll make people feel it.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" as const }}>
          <a href="#" style={{
            background: C.espresso, color: C.linen,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800, fontSize: 15, padding: "18px 42px",
            letterSpacing: "0.08em", textTransform: "uppercase" as const,
            textDecoration: "none", display: "inline-block",
          }}>Make Your Mark</a>
          <a href="#" style={{
            border: `2px solid rgba(232,223,200,0.6)`, color: C.linen,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700, fontSize: 15, padding: "16px 38px",
            letterSpacing: "0.08em", textTransform: "uppercase" as const,
            textDecoration: "none", display: "inline-block",
          }}>See the Work</a>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: "#120E0A",
      color: C.stone,
      padding: "64px clamp(20px,5vw,72px) 48px",
      borderTop: `1px solid rgba(232,223,200,0.07)`,
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", gap: 40, flexWrap: "wrap" as const,
      }}>
        <div>
          <img src="/__mockup/images/logo-white.svg" alt="Stuffed Dog Digital"
            style={{ height: 110, width: "auto", display: "block", marginBottom: 20 }} />
          <div style={{
            display: "flex", gap: 26,
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 600, fontSize: 13.5, flexWrap: "wrap" as const,
          }}>
            {["Work","What We Do","About","hello@stuffeddogdigital.com"].map(l => (
              <a key={l} href="#" style={{ color: C.stone, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "right" as const }}>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800, fontSize: 12, letterSpacing: "0.22em",
            textTransform: "uppercase" as const, color: C.linen, margin: "0 0 8px",
          }}>
            Phoenix &nbsp;|&nbsp; Chicago
          </p>
          <p style={{
            fontFamily: "'Bricolage Grotesque', sans-serif",
            fontWeight: 700, fontSize: 13, letterSpacing: "0.12em",
            textTransform: "uppercase" as const, color: C.amber, margin: "0 0 8px",
          }}>
            Vive La Humanity.
          </p>
          <p style={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: 12, color: "#4A3F35", margin: 0,
          }}>
            © 2026 Stuffed Dog Digital. Independent, and intending to stay that way.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export function WarmCraft() {
  return (
    <div style={{
      minWidth: 320, overflowX: "clip" as const,
      background: C.espresso,
      fontFamily: "'Manrope', sans-serif",
      WebkitFontSmoothing: "antialiased",
    }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Manrope:wght@400..700&display=swap"
      />
      <Nav />
      <main>
        <Hero />
        <TheStory />
        <HumanIntelligence />
        <ManifestoSnippet />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
