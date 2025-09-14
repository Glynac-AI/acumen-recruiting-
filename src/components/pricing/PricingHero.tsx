// src/components/pricing/PricingHero.tsx
import React, { useEffect, useRef, useState, memo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const PricingHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReduced = useReducedMotion();

  // Hydration guard to prevent SSR → CSR mismatch flicker
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Cursor follower (pointer-fine only)
  const [cursorHovering, setCursorHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [pointerFine, setPointerFine] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPointerFine(window.matchMedia?.("(pointer: fine)")?.matches ?? false);
    }
  }, []);
  useEffect(() => {
    if (!pointerFine) return;
    const onMove = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [pointerFine]);

  const cursorX = useSpring(mousePosition.x, { damping: 28, stiffness: 240, mass: 0.5 });
  const cursorY = useSpring(mousePosition.y, { damping: 28, stiffness: 240, mass: 0.5 });

  // Parallax
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, 16]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.1]);

  const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
  };

  const spring = { type: "spring", stiffness: 260, damping: 30, mass: 0.6 } as const;

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-white pt-[calc(theme(spacing.24)+env(safe-area-inset-top))]"
      onMouseEnter={() => setCursorHovering(true)}
      onMouseLeave={() => setCursorHovering(false)}
    >
      {/* Custom cursor (kept subtle, no remount flicker) */}
      <AnimatePresence initial={false}>
        {pointerFine && cursorHovering && (
          <motion.div
            className="fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.18 }}
            style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
          >
            <div className="w-4 h-4 rounded-full bg-white/90 backdrop-invert" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background (subtle gradient + accents) */}
      <div className="absolute inset-0 overflow-hidden will-change-transform z-0" aria-hidden>
        <motion.div
          className="absolute inset-0 transform-gpu"
          style={{
            y: mounted && !prefersReduced ? backgroundY : 0,
            scale: mounted && !prefersReduced ? backgroundScale : 1,
            background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 45%, #F4F7FF 100%)",
          }}
          initial={false}
          transition={spring}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(540px 360px at 86% 20%, rgba(79,107,255,0.10) 0%, rgba(79,107,255,0) 62%)," +
              "radial-gradient(460px 320px at 18% 72%, rgba(109,134,255,0.08) 0%, rgba(109,134,255,0) 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Floaters */}
      <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden>
        <motion.svg
          className="absolute top-[14%] right-[10%] w-60 h-60"
          viewBox="0 0 240 240"
          fill="none"
          animate={prefersReduced ? undefined : { y: [0, -14, 0], rotate: [0, 6, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          style={{ filter: "drop-shadow(0 6px 28px rgba(79,107,255,0.18))" }}
        >
          <circle cx="120" cy="120" r="104" stroke="rgba(79,107,255,0.22)" strokeWidth="2.5" />
          <circle cx="120" cy="120" r="104" fill="url(#circleGlassPricing)" />
          <defs>
            <linearGradient id="circleGlassPricing" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
            </linearGradient>
          </defs>
        </motion.svg>

        <motion.svg
          className="absolute bottom-[22%] left-[14%] w-56 h-56"
          viewBox="0 0 220 220"
          fill="none"
          animate={prefersReduced ? undefined : { y: [0, 10, 0], rotate: [0, -4, 0], scale: [1, 1.02, 1] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.8 }}
          style={{ filter: "drop-shadow(0 6px 24px rgba(79,107,255,0.16))" }}
        >
          <rect x="10" y="10" width="200" height="200" rx="24" stroke="rgba(79,107,255,0.18)" strokeWidth="2.5" fill="url(#rectGlassPricing)" />
          <defs>
            <linearGradient id="rectGlassPricing" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      {/* Content */}
      <div className="relative grid place-items-center min-h-[60vh] z-10">
        <motion.div
          className="container mx-auto px-6 text-center will-change-transform"
          style={{ y: mounted && !prefersReduced ? contentY : 0, opacity: mounted ? contentOpacity : 1 }}
          initial={false}
          transition={spring}
        >
          <motion.div
            className="max-w-4xl mx-auto"
            variants={fadeUp}
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <h1 className="text-[clamp(2.6rem,6.2vw,4.9rem)] leading-[1.08] font-display tracking-[-0.025em] text-[#0A2540]">
              <span className="font-light block">Transparent,</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4F6BFF] via-[#6D86FF] to-[#4F6BFF]/80 font-semibold inline-block">value-based pricing</span>
            </h1>
            <motion.p
              className="mt-6 text-lg md:text-xl text-[#505c6e] max-w-2xl mx-auto leading-relaxed"
              variants={fadeUp}
              transition={{ delay: 0.05, ease: EASE_OUT }}
            >
              Scales with role complexity so incentives stay aligned.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6"
            variants={fadeUp}
            initial={false}
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            transition={{ delay: 0.1, ease: EASE_OUT }}
          >
            <motion.a
              href="/pricing#plans"
              className="group relative overflow-hidden rounded-full bg-[#4F6BFF] px-8 py-4 text-white shadow-lg transition-transform will-change-transform
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F6BFF]"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative z-10 text-base font-medium tracking-wide">View plans</span>
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#6D86FF] to-[#4F6BFF]/90 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <motion.a
              href="/contact#contact-form"
              className="group relative rounded-full border border-[#E5E7EB] px-8 py-4 text-[#0A2540]
                         hover:border-[#4F6BFF]/30 hover:bg-white transition-colors
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4F6BFF]/40"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-base font-medium tracking-wide">Talk to sales</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(PricingHero);
