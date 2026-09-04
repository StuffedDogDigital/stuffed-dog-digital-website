import { useEffect, useRef, useState } from "react";

const MOTTO = "Vive La Humanity.";

const DESKTOP_VIDEO = "https://player.vimeo.com/video/1097832638?background=1&autoplay=1&loop=1&muted=1&dnt=1";
const MOBILE_VIDEO = "https://player.vimeo.com/video/1101882314?background=1&autoplay=1&loop=1&muted=1&dnt=1";

export function Hero() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#0A0A0A",
      }}
    >
      {/* Background video fills the content area (100% = 100vw minus spine) */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "max(100%, 177.78vh)",
          height: "max(100%, 56.25vw)",
          pointerEvents: "none",
        }}
      >
        <iframe
          ref={iframeRef}
          src={isMobile ? MOBILE_VIDEO : DESKTOP_VIDEO}
          style={{ width: "100%", height: "100%", border: 0 }}
          allow="autoplay; fullscreen"
          title="Stuffed Dog Digital reel"
        />
      </div>
      {/* Gradient scrim */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 clamp(20px,5vw,72px) clamp(84px,14vh,150px)",
          maxWidth: 1200,
        }}
      >
        <p
          data-reveal
          style={{
            fontWeight: 800,
            fontSize: "clamp(11px,1.1vw,14px)",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(242,240,233,0.6)",
            margin: "0 0 22px",
          }}
        >
          Stuffed Dog Digital &nbsp;·&nbsp; Creative Human Intelligence
        </p>
        <h1
          data-reveal
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(34px,5.4vw,84px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
            margin: 0,
            color: "#F2F0E9",
          }}
        >
          Intelligence can be artificial.
          <br />
          Imagination cannot.
        </h1>
        <p
          data-reveal
          style={{
            fontSize: "clamp(16px,1.5vw,20px)",
            fontWeight: 500,
            lineHeight: 1.6,
            maxWidth: 640,
            margin: "26px 0 0",
            color: "rgba(242,240,233,0.85)",
          }}
        > We blend technology into human craft, and make work people actually feel.</p>
        <p
          data-reveal
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(15px,1.4vw,19px)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#19E6E6",
            margin: "26px 0 0",
          }}
        >
          {MOTTO}
        </p>
      </div>
      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          right: "clamp(20px,4vw,56px)",
          bottom: "clamp(48px,9vh,110px)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span
          style={{
            width: 1.5,
            height: 52,
            background: "rgba(242,240,233,0.5)",
            display: "block",
            animation: "sdd-pulse 2.2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(242,240,233,0.6)",
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
      </div>
    </header>
  );
}
