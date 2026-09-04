import { useEffect, useRef } from "react";

const RAW =
  "When everyone can create anything, sameness becomes the noise. What cuts through is work with a *pulse.* Built from heart. Crafted by ^humans.^";

type Word = { text: string; lit: string; base: string; highlight?: boolean };

function parseWords(): Word[] {
  return RAW.split(" ").map((token) => {
    let text = token;
    let highlight = false;
    if (text.startsWith("*")) { highlight = true; text = text.replace(/\*/g, ""); }
    if (text.startsWith("^")) { highlight = true; text = text.replace(/\^/g, ""); }
    return { text, lit: highlight ? "#0A6CFF" : "#000000", base: "rgba(0,0,0,0.15)", highlight };
  });
}

const WORDS = parseWords();

export function TheStory() {
  const outerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLParagraphElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      const outer = outerRef.current;
      const story = storyRef.current;
      if (!outer || !story) return;

      // Use clientHeight (stable on iOS Safari; it doesn't jump as the URL bar hides)
      const vh = document.documentElement.clientHeight;
      const total = outer.offsetHeight - vh;
      let p =
        total > 0
          ? Math.max(0, Math.min(1, -outer.getBoundingClientRect().top / total))
          : 1;
      if (reduced) p = 1;

      const n = WORDS.length;
      // 1.18 factor: all words fully lit by ~85% of the pin, so the
      // section releases with no dead scrolling at the end.
      const lit = Math.floor(p * 1.18 * n);
      for (let i = 0; i < n; i++) {
        story.style.setProperty(`--w${i}`, i < lit ? WORDS[i].lit : WORDS[i].base);
      }
    };

    const schedule = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    // touchmove fires continuously during drag on iOS and keeps illumination live
    window.addEventListener("touchmove", schedule, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("touchmove", schedule);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={outerRef}
      style={{
        height: "200vh",
        position: "relative",
        background: "#F2F0E9",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          // Do NOT set overflow:hidden here because it can swallow iOS touch events
        }}
      >
        <div
          style={{
            maxWidth: 1060,
            margin: "0 auto",
            padding: "0 clamp(20px,5vw,72px)",
            width: "100%",
          }}
        >
          <p
            style={{
              fontWeight: 800,
              fontSize: "clamp(11px,1.1vw,13px)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#6C7075",
              margin: "0 0 32px",
            }}
          >
            The moment we're in
          </p>
          <p
            ref={storyRef}
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontWeight: 700,
              // Slightly larger floor (28px) so it reads well at 375px
              fontSize: "clamp(28px,3.9vw,54px)",
              lineHeight: 1.25,
              letterSpacing: "-0.015em",
              margin: 0,
            }}
          >
            {WORDS.map((w, i) => (
              <span key={i}>{i > 0 && " "}
              <span
                style={{
                  color: `var(--w${i}, rgba(0,0,0,0.15))`,
                  transition: "color 0.25s ease",
                }}
              >
                {w.text}
              </span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}
