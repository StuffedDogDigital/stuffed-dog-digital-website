import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

// Real 3D-rendered animation frames; black backgrounds screen out against the dark hero
import frame0000 from "@assets/Untitled3_0000_1785764914837.png";
import frame0026 from "@assets/Untitled3_0026_1785764914838.png";
import frame0048 from "@assets/Untitled3_0048_1785764914839.png";
import frame0060 from "@assets/Untitled3_0060_1785764914839.png";
import frame0071 from "@assets/Untitled3_0071_1785764914839.png";

/**
 * Frame cross-fade timing (scroll 0 → 1 over 300vh):
 *
 *   0000  Standing, hammer raised up   0.00 ──── 0.30
 *   0026  Mid-swing, hammer forward    0.20 ────────── 0.50
 *   0048  Airborne above watermelon    0.38 ──────────────── 0.66
 *   0060  On watermelon, about to hit  0.52 ──────────────────── 0.76
 *   0071  Explosion / shards           0.62 ────────────────────────── 1.00
 *
 * Camera shake fires at the 0060 → 0071 transition (~0.62–0.71).
 */

interface Frame {
  src: string;
  opacity: ReturnType<typeof useTransform>;
  alt: string;
}

export function HeroAndImpact() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 28,
    restDelta: 0.001,
  });

  // ── Hero text ──────────────────────────────────────────────────────────────
  const heroY       = useTransform(smooth, [0, 0.22], ["0%", "40%"]);
  const heroOpacity = useTransform(smooth, [0, 0.18], [1, 0]);

  // ── Ambient scroll phrases ─────────────────────────────────────────────────
  const tooPolished    = useTransform(smooth, [0.10, 0.18, 0.36, 0.46], [0, 1, 1, 0]);
  const tooPredictable = useTransform(smooth, [0.22, 0.30, 0.42, 0.52], [0, 1, 1, 0]);
  const tooForgettable = useTransform(smooth, [0.34, 0.42, 0.54, 0.62], [0, 1, 1, 0]);
  const letsFixThat    = useTransform(smooth, [0.44, 0.52, 0.62, 0.70], [0, 1, 1, 0]);

  // ── Frame cross-fades ──────────────────────────────────────────────────────
  const opacity0000 = useTransform(smooth, [0.00, 0.22, 0.32], [1, 1, 0]);
  const opacity0026 = useTransform(smooth, [0.18, 0.26, 0.38, 0.50], [0, 1, 1, 0]);
  const opacity0048 = useTransform(smooth, [0.36, 0.44, 0.54, 0.66], [0, 1, 1, 0]);
  const opacity0060 = useTransform(smooth, [0.50, 0.58, 0.66, 0.76], [0, 1, 1, 0]);
  const opacity0071 = useTransform(smooth, [0.62, 0.72, 0.92, 1.00], [0, 1, 1, 0.5]);

  // ── Camera shake at impact ─────────────────────────────────────────────────
  const shakeX = useTransform(
    smooth,
    [0.62, 0.635, 0.65, 0.665, 0.68, 0.695, 0.71],
    [0, -18, 18, -12, 10, -6, 0],
  );
  const shakeY = useTransform(
    smooth,
    [0.62, 0.635, 0.65, 0.665, 0.68, 0.695, 0.71],
    [0, 14, -12, 10, -8, 4, 0],
  );

  // ── Impact flash ───────────────────────────────────────────────────────────
  const flashOpacity = useTransform(smooth, [0.62, 0.66, 0.72], [0, 1, 0]);
  const flashScale   = useTransform(smooth, [0.62, 0.68], [0.4, 3.5]);

  // ── Post-impact copy ───────────────────────────────────────────────────────
  const breakthroughOpacity = useTransform(smooth, [0.70, 0.76], [0, 1]);
  const breakthroughScale   = useTransform(smooth, [0.70, 0.76], [0.85, 1]);
  const subtextOpacity      = useTransform(smooth, [0.78, 0.84], [0, 1]);

  const frames: Frame[] = [
    { src: frame0000, opacity: opacity0000, alt: "Mascot standing with hammer raised" },
    { src: frame0026, opacity: opacity0026, alt: "Mascot mid-swing" },
    { src: frame0048, opacity: opacity0048, alt: "Mascot airborne above watermelon" },
    { src: frame0060, opacity: opacity0060, alt: "Mascot on watermelon, about to strike" },
    { src: frame0071, opacity: opacity0071, alt: "Watermelon exploding" },
  ];

  return (
    <section ref={containerRef} className="h-[300vh] bg-[#F2F0E9] relative">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ x: shakeX, y: shakeY }}
      >
        {/* ── Hero headline ───────────────────────────────────────────── */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 pointer-events-none"
        >
          <div className="max-w-5xl mt-12 md:mt-20">
            <h1 className="font-display font-extrabold text-[4rem] leading-[0.88] md:text-[7rem] lg:text-[9.5rem] uppercase tracking-tighter mb-8 text-white">
              Human Ideas<br />Hit Harder.
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl text-[#000000]/75 leading-relaxed font-medium">
              We build brands, sharpen stories and create the momentum good
              organizations need to compete with anyone.
            </p>
          </div>

          <div className="absolute bottom-10 left-6 md:left-12 flex flex-col gap-2">
            <motion.div
              className="w-px h-12 bg-[#1E5F4A] origin-top"
              animate={{ scaleY: [0, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="uppercase tracking-widest text-[0.65rem] font-bold text-[#000000]/40">
              Scroll to make an impact
            </span>
          </div>
        </motion.div>

        {/* ── Ambient scroll phrases ──────────────────────────────────── */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.p style={{ opacity: tooPolished }}    className="absolute top-[22%] left-[8%]  font-display text-4xl md:text-6xl text-white/35 uppercase font-bold tracking-tight">Too polished.</motion.p>
          <motion.p style={{ opacity: tooPredictable }} className="absolute top-[58%] right-[6%] font-display text-4xl md:text-6xl text-white/35 uppercase font-bold tracking-tight">Too predictable.</motion.p>
          <motion.p style={{ opacity: tooForgettable }} className="absolute top-[74%] left-[10%] font-display text-4xl md:text-6xl text-white/35 uppercase font-bold tracking-tight">Too forgettable.</motion.p>
          <motion.p style={{ opacity: letsFixThat }}    className="absolute top-[18%] right-[8%] font-display text-5xl md:text-7xl text-[#1E5F4A] uppercase font-bold tracking-tight">Let's fix that.</motion.p>
        </div>

        {/* ── Real animation frames ───────────────────────────────────── */}
        {/*
            Each PNG is 1920×1080 with a pure-black background.
            mix-blend-mode: screen makes black pixels (0,0,0) fully transparent,
            compositing only the dog/watermelon/explosion onto the dark section.
        */}
        <div className="absolute inset-0 z-[15] pointer-events-none">
          {frames.map(({ src, opacity, alt }) => (
            <motion.img
              key={src}
              src={src}
              alt={alt}
              draggable={false}
              style={{
                opacity,
                mixBlendMode: "screen",
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ))}
        </div>

        {/* ── Impact flash burst ──────────────────────────────────────── */}
        <motion.div
          style={{ opacity: flashOpacity, scale: flashScale, mixBlendMode: "screen" }}
          className="absolute inset-0 z-[25] bg-[#1E5F4A] rounded-full blur-3xl pointer-events-none"
        />

        {/* ── Post-impact copy ────────────────────────────────────────── */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center pointer-events-none px-6">
          <motion.h2
            style={{ opacity: breakthroughOpacity, scale: breakthroughScale }}
            className="font-display font-extrabold text-[3.5rem] md:text-[7rem] lg:text-[9rem] uppercase tracking-tighter text-white drop-shadow-2xl leading-[0.9]"
          >
            Break<br />Through.
          </motion.h2>
          <motion.p
            style={{ opacity: subtextOpacity }}
            className="mt-6 text-lg md:text-2xl font-medium text-[#000000]/85 max-w-2xl leading-snug"
          >
            Because nobody remembers the work that played it safe.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
