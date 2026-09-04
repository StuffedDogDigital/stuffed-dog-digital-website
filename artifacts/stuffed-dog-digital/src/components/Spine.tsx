import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import logoLight from "@assets/white_sdd_logo_1785774556923.svg";

const C = {
  espresso: "#000000",
  linen:    "#F2F0E9",
  amber:    "#19E6E6",
  stone:    "#6C7075",
  border:   "rgba(242,240,233,0.14)",
};

const LINKS = [
  { label: "Work",       href: "/work"    },
  { label: "About",      href: "/about"   },
  { label: "How We Get Results", href: `${import.meta.env.BASE_URL}#approach`, homeAnchor: true },
  { label: "Contact",    href: "/contact" },
];

// ── Desktop spine ─────────────────────────────────────────────────────────────
function DesktopSpine() {
  const [location] = useLocation();

  return (
    <aside style={{
      position: "fixed",
      top: 0, left: 0, bottom: 0,
      width: 280,
      zIndex: 60,
      background: C.espresso,
      borderRight: `1px solid ${C.border}`,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      overflow: "hidden",
    }}>
      {/* Logo */}
      <Link href="/" style={{
        display: "block",
        padding: "28px 28px 0",
        lineHeight: 0,
        flexShrink: 0,
      }}>
        <img src={logoLight} alt="Stuffed Dog Digital"
          style={{ width: "100%", maxWidth: 200, height: "auto", display: "block" }} />
      </Link>

      <div style={{ height: 1, background: C.border, margin: "28px 0 0" }} />

      {/* Nav links */}
      <nav style={{
        display: "flex",
        flexDirection: "column",
        padding: "32px 0",
        flex: 1,
      }}>
        {LINKS.map((l) => {
          const isActive = !l.homeAnchor && location === l.href;
          const inner = (
            <>
              <span style={{
                display: "block",
                width: 3,
                height: isActive ? 20 : 6,
                background: isActive ? C.amber : C.stone,
                borderRadius: 2,
                transition: "height 0.3s ease, background 0.2s",
                flexShrink: 0,
              }} />
              {l.label}
            </>
          );
          const style: React.CSSProperties = {
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "13px 28px",
            fontFamily: "'Archivo', sans-serif",
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: isActive ? C.linen : C.stone,
            textDecoration: "none",
            transition: "color 0.2s",
          };
          const hover = {
            onMouseEnter: (e: React.MouseEvent) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = C.linen; },
            onMouseLeave: (e: React.MouseEvent) => { if (!isActive) (e.currentTarget as HTMLElement).style.color = C.stone; },
          };
          return l.homeAnchor ? (
            <a key={l.label} href={l.href} style={style} {...hover}>{inner}</a>
          ) : (
            <Link key={l.label} href={l.href} style={style} {...hover}>{inner}</Link>
          );
        })}
      </nav>

      <div style={{ height: 1, background: C.border }} />

      {/* CTA */}
      <a
        href="https://calendar.app.google/fJcK1qEHuecVNYf5A"
        target="_blank"
        rel="noopener noreferrer"
        style={{
        display: "block",
        margin: "24px 28px",
        padding: "12px 0",
        background: "transparent",
        border: `1.5px solid ${C.linen}`,
        color: C.linen,
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        textDecoration: "none",
        textAlign: "center",
        transition: "background 0.2s, color 0.2s",
        flexShrink: 0,
      }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = C.linen;
          (e.currentTarget as HTMLElement).style.color = C.espresso;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.color = C.linen;
        }}
      >
        Start Something
      </a>

      {/* Vertical motto */}
      <div style={{ padding: "0 0 32px 28px", flexShrink: 0 }}>
        <p style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontWeight: 700,
          fontSize: 11,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: C.amber,
          writingMode: "vertical-rl",
          transform: "rotate(180deg)",
          margin: 0,
          userSelect: "none",
        }}>
          Vive La Humanity.
        </p>
      </div>
    </aside>
  );
}

// ── Mobile top bar ────────────────────────────────────────────────────────────
function MobileBar() {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  // Close menu on navigation
  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "12px 20px",
        background: "rgba(0,0,0,0.92)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <Link href="/">
          <img src={logoLight} alt="Stuffed Dog Digital" style={{ height: 52, width: "auto" }} />
        </Link>
        <button onClick={() => setOpen(o => !o)} aria-label="Menu" style={{
          background: "none", border: "none", cursor: "pointer",
          display: "flex", flexDirection: "column", gap: 5, padding: 4,
        }}>
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              display: "block", width: 22, height: 2, background: C.linen,
              transition: "transform 0.25s, opacity 0.25s",
              transform: open && i === 0 ? "translateY(7px) rotate(45deg)"
                       : open && i === 2 ? "translateY(-7px) rotate(-45deg)"
                       : "none",
              opacity: open && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>
      {open && (
        <div style={{
          position: "fixed", top: 76, left: 0, right: 0, zIndex: 55,
          background: "rgba(23,18,14,0.98)",
          backdropFilter: "blur(14px)",
          padding: "16px 20px 24px",
          borderBottom: `1px solid ${C.border}`,
        }}>
          {LINKS.map(l => {
            const style: React.CSSProperties = {
              display: "block",
              color: C.linen, textDecoration: "none",
              fontFamily: "'Archivo', sans-serif",
              fontWeight: 700, fontSize: 18,
              letterSpacing: "0.04em", textTransform: "uppercase",
              padding: "14px 0",
              borderBottom: `1px solid ${C.border}`,
            };
            return l.homeAnchor ? (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={style}>{l.label}</a>
            ) : (
              <Link key={l.label} href={l.href} style={style}>{l.label}</Link>
            );
          })}
        </div>
      )}
    </>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export function Spine() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const sync = (e: MediaQueryList | MediaQueryListEvent) => setIsMobile(e.matches);
    sync(mq); mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (isMobile) return <MobileBar />;
  return <DesktopSpine />;
}
