import { Link } from "wouter";
import logoDark from "@/assets/sdd-logo-dark.png";

const MOTTO = "Vive La Humanity.";

export function Footer() {
  return (
    <footer
      style={{
        background: "#F2F0E9",
        color: "#6C7075",
        padding: "64px clamp(20px,5vw,72px) 48px",
        borderTop: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        {/* Left column */}
        <div>
          <img
            src={logoDark}
            alt="Stuffed Dog Digital"
            style={{ height: 110, width: "auto", display: "block", margin: "0 0 20px" }}
            draggable={false}
          />
          <div
            style={{
              display: "flex",
              gap: 26,
              fontWeight: 600,
              fontSize: 13.5,
              flexWrap: "wrap",
            }}
          >
            {[
              { label: "Work", href: "/work" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "connect@stuffeddogdigital.com", href: "mailto:connect@stuffeddogdigital.com", external: true },
            ].map((l) => {
              const style = { color: "#6C7075", textDecoration: "none", transition: "color 0.2s" };
              const hover = {
                onMouseEnter: (e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = "#000000"),
                onMouseLeave: (e: React.MouseEvent) => ((e.currentTarget as HTMLElement).style.color = "#6C7075"),
              };
              return l.external ? (
                <a key={l.label} href={l.href} style={style} {...hover}>{l.label}</a>
              ) : (
                <Link key={l.label} href={l.href} style={style} {...hover}>{l.label}</Link>
              );
            })}
          </div>
        </div>

        {/* Right column */}
        <div style={{ textAlign: "right" }}>
          <p
            style={{
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#000000",
              margin: "0 0 8px",
            }}
          >
            Phoenix &nbsp;|&nbsp; Chicago
          </p>
          <p
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#1E5F4A",
              margin: "0 0 8px",
            }}
          >
            {MOTTO}
          </p>
          <p style={{ fontSize: 12, color: "#3A3A3A", margin: 0 }}>
            © 2026 Stuffed Dog Digital. All rights reserved. &nbsp;·&nbsp; Powered by the
            idea of being better than we were yesterday.
          </p>
        </div>
      </div>
    </footer>
  );
}
