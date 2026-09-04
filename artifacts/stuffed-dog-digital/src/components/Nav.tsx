import { useEffect, useRef, useState } from "react";
import logoLight from "@assets/white_sdd_logo_1785774556923.svg";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "What We Do", href: "#approach" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const linksRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(112);

  useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY < 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track mobile breakpoint for hamburger + nav links
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = (e: MediaQueryListEvent | MediaQueryList) => {
      const desktop = e.matches;
      setIsMobile(!desktop);
      if (linksRef.current) {
        linksRef.current.style.display = desktop ? "flex" : "none";
      }
      if (!desktop) setMenuOpen(false);
    };
    sync(mq);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Keep navHeight in sync so the dropdown sits flush below the bar
  useEffect(() => {
    const measure = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [atTop]);

  // Close menu on any anchor click (handles cases where href targets scroll)
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: `${atTop ? 20 : 14}px clamp(20px,4vw,56px)`,
          background: "rgba(23,18,14,0.92)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(232,223,200,0.08)",
          transition: "padding 0.3s ease",
        }}
      >
        {/* Logo */}
        <a href="#top" style={{ display: "block", lineHeight: 0, flexShrink: 0 }}>
          <img
            src={logoLight}
            alt="Stuffed Dog Digital"
            style={{ height: "clamp(44px,6vw,72px)", width: "auto", display: "block" }}
            draggable={false}
          />
        </a>

        {/* Center links (desktop) */}
        <div
          ref={linksRef}
          style={{
            display: "none",
            alignItems: "center",
            gap: "clamp(14px,2.5vw,30px)",
            fontWeight: 600,
            fontSize: 13.5,
            letterSpacing: "0.06em",
            textTransform: "uppercase" as const,
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{ color: "#E8DFC8", textDecoration: "none" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C8852A")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#E8DFC8")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          {/* "Start Something" is hidden on mobile to keep the bar clean */}
          {!isMobile && (
            <a
              href="#contact"
              style={{
                border: "1.5px solid #E8DFC8",
                color: "#E8DFC8",
                fontWeight: 700,
                fontSize: 13.5,
                padding: "10px 22px",
                letterSpacing: "0.06em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                transition: "background 0.2s, color 0.2s",
                whiteSpace: "nowrap" as const,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#E8DFC8";
                (e.currentTarget as HTMLElement).style.color = "#17120E";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#E8DFC8";
              }}
            >
              Start Something
            </a>
          )}

          {/* Hamburger (mobile only) */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 8,
                margin: -4,
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 24,
                    height: 2,
                    background: "#E8DFC8",
                    transformOrigin: "center",
                    transition: "transform 0.25s, opacity 0.25s",
                    transform:
                      menuOpen && i === 0
                        ? "translateY(7px) rotate(45deg)"
                        : menuOpen && i === 2
                        ? "translateY(-7px) rotate(-45deg)"
                        : menuOpen && i === 1
                        ? "scaleX(0)"
                        : "none",
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown positioned flush below the real nav height */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: "fixed",
            top: navHeight,
            left: 0,
            right: 0,
            zIndex: 55,
            background: "rgba(23,18,14,0.97)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            padding: "8px clamp(20px,4vw,56px) 32px",
            borderBottom: "1px solid rgba(232,223,200,0.1)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeMenu}
              style={{
                color: "#E8DFC8",
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "18px 0",
                borderBottom: "1px solid rgba(232,223,200,0.1)",
              }}
            >
              {l.label}
            </a>
          ))}
          {/* Start Something lives in the mobile menu */}
          <a
            href="#contact"
            onClick={closeMenu}
            style={{
              display: "inline-block",
              marginTop: 24,
              alignSelf: "flex-start",
              border: "1.5px solid #E8DFC8",
              color: "#E8DFC8",
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 28px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Start Something
          </a>
        </div>
      )}
    </>
  );
}
