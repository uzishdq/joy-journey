"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function HeroParallax() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const FINAL_Y = "-0%";

  // ── Semua useTransform di TOP-LEVEL (wajib!) ──

  // Layer 1
  const opacityL1 = useTransform(smoothProgress, [0, 0.6], [0, 1]);
  const yL1 = useTransform(smoothProgress, [0, 0.6], ["65%", FINAL_Y]);

  // Layer 2
  const opacityL2 = useTransform(smoothProgress, [0.08, 0.65], [0, 1]);
  const yL2 = useTransform(smoothProgress, [0.08, 0.65], ["52%", FINAL_Y]);

  // Layer 3
  const opacityL3 = useTransform(smoothProgress, [0.16, 0.7], [0, 1]);
  const yL3 = useTransform(smoothProgress, [0.16, 0.7], ["38%", FINAL_Y]);

  // Foreground (dengan scale)
  const opacityFg = useTransform(smoothProgress, [0.28, 0.82], [0, 1]);
  const yFg = useTransform(smoothProgress, [0.28, 0.82], ["22%", FINAL_Y]);
  const scaleFg = useTransform(smoothProgress, [0.28, 0.82], [1.04, 1]);

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: "clamp(160vh, 220vh, 300vh)" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background tetap */}
        <div
          className="absolute inset-0 bg-cover bg-center z-10 [image-rendering:pixelated] will-change-transform"
          style={{ backgroundImage: "url('/frame/hero/5.png')" }}
        />

        {/* Layer 1 */}
        <motion.div
          style={{
            y: yL1,
            opacity: opacityL1,
            willChange: "transform, opacity",
            backgroundImage: "url('/frame/hero/6.png')",
          }}
          className="absolute inset-0 bg-cover bg-top md:bg-center z-20 [image-rendering:pixelated]"
        />

        {/* Layer 2 */}
        <motion.div
          style={{
            y: yL2,
            opacity: opacityL2,
            willChange: "transform, opacity",
            backgroundImage: "url('/frame/hero/7.png')",
          }}
          className="absolute inset-0 bg-cover bg-top md:bg-center z-30 [image-rendering:pixelated]"
        />

        {/* Layer 3 */}
        <motion.div
          style={{
            y: yL3,
            opacity: opacityL3,
            willChange: "transform, opacity",
            backgroundImage: "url('/frame/hero/8.png')",
          }}
          className="absolute inset-0 bg-cover bg-top md:bg-center z-40 [image-rendering:pixelated]"
        />

        {/* Foreground */}
        <motion.div
          style={{
            y: yFg,
            opacity: opacityFg,
            scale: scaleFg,
            willChange: "transform, opacity, scale",
            backgroundImage: "url('/frame/hero/9.png')",
          }}
          className="absolute inset-0 bg-cover bg-bottom md:bg-center z-50 [image-rendering:pixelated]"
        />

        {/* Text overlay */}
        <div className="relative z-60 h-full flex flex-col items-center justify-center text-white text-center px-5 sm:px-8 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black drop-shadow-[0_4px_12px_rgba(0,0,0,0.75)] tracking-[-0.02em]"
          >
            JoyJourney
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.1 }}
            className="mt-5 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)] max-w-3xl"
          >
            Your Daily Happiness Journey... ♡
          </motion.p>
        </div>
      </div>
    </section>
  );
}
