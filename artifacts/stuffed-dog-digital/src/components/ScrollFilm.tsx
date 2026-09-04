import { useEffect, useRef } from "react";

/**
 * Scroll-driven film sequence: 135 frames scrubbed by scroll position.
 * The last frame zooms fully into watermelon red (#FC0200), and the
 * section that follows continues that red for a seamless handoff.
 */
const FRAME_COUNT = 135;
const RED = "#FC0200";

const frameSrc = (i: number) =>
  `${import.meta.env.BASE_URL}frames/${String(i).padStart(5, "0")}.webp`;

export function ScrollFilm() {
  const outerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const lastDrawn = useRef(-1);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const images: (HTMLImageElement | null)[] = new Array(FRAME_COUNT).fill(null);
    imagesRef.current = images;
    let disposed = false;

    const loading = new Set<number>();
    let inFlight = 0;
    const MAX_CONCURRENT = 6;
    // Prefetch window around the current frame (frames are ~90KB each;
    // we never blast all 135 requests at once).
    const WINDOW = 24;

    const currentIndex = () => {
      const outer = outerRef.current;
      if (!outer) return 0;
      const vh = document.documentElement.clientHeight;
      const total = outer.offsetHeight - vh;
      const p = total > 0
        ? Math.max(0, Math.min(1, -outer.getBoundingClientRect().top / total))
        : 1;
      return Math.min(FRAME_COUNT - 1, Math.floor(p * FRAME_COUNT));
    };

    const draw = (index: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      // fall back to the nearest loaded frame at or before the target
      let drawnIndex = -1;
      let img: HTMLImageElement | null = null;
      for (let j = index; j >= 0; j--) {
        if (images[j]) { img = images[j]; drawnIndex = j; break; }
      }
      if (!img) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const cw = canvas.width, ch = canvas.height;
      const scale = Math.max(cw / img.width, ch / img.height);
      const w = img.width * scale, h = img.height * scale;
      // The transparent canvas lets whatever sits behind the section show through.
      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      // Track what we actually rendered so a late-arriving exact frame
      // still triggers a redraw.
      lastDrawn.current = drawnIndex === index ? index : -1;
    };

    const load = (i: number) => {
      if (disposed || images[i] || loading.has(i) || inFlight >= MAX_CONCURRENT) return;
      loading.add(i);
      inFlight++;
      const img = new Image();
      const done = (ok: boolean) => {
        loading.delete(i);
        inFlight--;
        if (disposed) return;
        if (ok) {
          images[i] = img;
          const idx = reduced ? FRAME_COUNT - 1 : currentIndex();
          if (lastDrawn.current !== idx) draw(idx);
        }
        pump();
      };
      img.onload = () => done(true);
      img.onerror = () => done(false);
      img.src = frameSrc(i);
    };

    // Queue frames nearest the current position first, within the window.
    const pump = () => {
      if (disposed) return;
      const center = reduced ? FRAME_COUNT - 1 : currentIndex();
      for (let d = 0; d <= WINDOW && inFlight < MAX_CONCURRENT; d++) {
        const ahead = center + d;
        const behind = center - d;
        if (ahead < FRAME_COUNT) load(ahead);
        if (behind >= 0 && inFlight < MAX_CONCURRENT) load(behind);
      }
      // Idle trickle: keep filling the rest of the sequence slowly so the
      // scrub is smooth by the time the user reaches it.
      if (inFlight === 0) {
        for (let i = 0; i < FRAME_COUNT && inFlight < 2; i++) load(i);
      }
    };

    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
      lastDrawn.current = -1;
      draw(reduced ? FRAME_COUNT - 1 : currentIndex());
    };

    // Smooth scrubbing: ease the displayed frame toward the scroll target
    // instead of jumping, so fast flicks don't stutter frame-to-frame.
    let smooth = -1; // float frame position
    let animating = false;

    const tick = () => {
      rafRef.current = null;
      const target = reduced ? FRAME_COUNT - 1 : currentIndex();
      if (smooth < 0) smooth = target;
      smooth += (target - smooth) * 0.22;
      if (Math.abs(target - smooth) < 0.5) smooth = target;
      const idx = Math.round(smooth);
      if (idx !== lastDrawn.current) draw(idx);
      pump();
      if (smooth !== target && !disposed) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        animating = false;
      }
    };

    const onScroll = () => {
      if (animating) return;
      animating = true;
      if (!rafRef.current) rafRef.current = requestAnimationFrame(tick);
    };

    if (reduced) {
      // Reduced motion: only the final (all-red) frame is ever shown.
      const img = new Image();
      img.onload = () => {
        if (disposed) return;
        images[FRAME_COUNT - 1] = img;
        resize();
      };
      img.src = frameSrc(FRAME_COUNT - 1);
    } else {
      const img = new Image();
      img.onload = () => {
        if (disposed) return;
        images[0] = img;
        resize();
        pump();
      };
      img.src = frameSrc(0);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    return () => {
      disposed = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      imagesRef.current = [];
    };
  }, []);

  return (
    <>
      <section ref={outerRef} style={{ height: "320vh", position: "relative", background: "transparent" }}>
        <div style={{ position: "sticky", top: 0, height: "100vh" }}>
          <canvas
            ref={canvasRef}
            style={{ width: "100%", height: "100%", display: "block" }}
            aria-label="Film sequence of the Stuffed Dog mascot enjoying a slice of watermelon"
          />
        </div>
      </section>
      {/* Red handoff continues the watermelon zoom */}
      <section
        style={{
          background: RED,
          padding: "clamp(110px,18vh,200px) clamp(20px,5vw,72px)",
        }}
      >
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <p
            data-reveal
            style={{
              fontWeight: 800,
              fontSize: "clamp(11px,1.1vw,13px)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(242,240,233,0.75)",
              margin: "0 0 28px",
            }}
          >
            Stuffed Dog Digital
          </p>
          <h2
            data-reveal
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(38px,6vw,92px)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
              textTransform: "uppercase",
              color: "#F2F0E9",
              margin: 0,
            }}
          >
            Refreshingly
            <br />
            human.
          </h2>
          <p
            data-reveal
            style={{
              fontSize: "clamp(16px,1.5vw,20px)",
              fontWeight: 500,
              lineHeight: 1.6,
              maxWidth: 620,
              margin: "30px 0 0",
              color: "rgba(242,240,233,0.9)",
            }}
          >We bring the kind of care you can taste in every frame, every word, every pixel.</p>
        </div>
      </section>
    </>
  );
}
