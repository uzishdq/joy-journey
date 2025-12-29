"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function HeroParallax() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 40,
    restDelta: 0.0001,
  });

  const FINAL_Y = "-30%"; // tetap sweet spot untuk layer yang bergerak

  // Layer mid 1
  const opacityL1 = useTransform(smoothProgress, [0.03, 0.38], [0, 1]);
  const yL1 = useTransform(smoothProgress, [0.03, 1], ["90%", FINAL_Y]);

  // Layer mid 2
  const opacityL2 = useTransform(smoothProgress, [0.18, 0.5], [0, 1]);
  const yL2 = useTransform(smoothProgress, [0.18, 1], ["78%", FINAL_Y]);

  // Layer mid 3
  const opacityL3 = useTransform(smoothProgress, [0.32, 0.65], [0, 1]);
  const yL3 = useTransform(smoothProgress, [0.32, 1], ["68%", FINAL_Y]);

  // Foreground
  const opacityFg = useTransform(smoothProgress, [0.48, 0.88], [0, 1]);
  const yFg = useTransform(smoothProgress, [0.48, 1], ["50%", FINAL_Y]);
  const scaleFg = useTransform(smoothProgress, [0.48, 1], [1.04, 1]);

  return (
    <section
      ref={container}
      className="relative w-full"
      style={{ height: "clamp(500vh, 600vh, 800vh)" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Fallback gradient warm orange-yellow */}
        <div className="absolute inset-0 bg-linear-to-b from-orange-900 via-amber-800 to-yellow-700 opacity-90 z-0" />

        {/* Layer Background – FIXED, tidak bergerak */}
        <div className="absolute inset-0 bg-[url('/frame/hero/5.png')] bg-cover bg-center z-10 [image-rendering:pixelated]" />

        {/* Mid Layer 1 – mulai gerak */}
        <motion.div
          style={{ y: yL1, opacity: opacityL1 }}
          className="absolute inset-0 bg-[url('/frame/hero/6.png')] bg-cover md:bg-center bg-top z-20 [image-rendering:pixelated]"
        />

        {/* Mid Layer 2 */}
        <motion.div
          style={{ y: yL2, opacity: opacityL2 }}
          className="absolute inset-0 bg-[url('/frame/hero/7.png')] bg-cover md:bg-center bg-top z-30 [image-rendering:pixelated]"
        />

        {/* Mid Layer 3 */}
        <motion.div
          style={{ y: yL3, opacity: opacityL3 }}
          className="absolute inset-0 bg-[url('/frame/hero/8.png')] bg-cover md:bg-center bg-top z-40 [image-rendering:pixelated]"
        />

        {/* Foreground */}
        <motion.div
          style={{ y: yFg, opacity: opacityFg, scale: scaleFg }}
          className="absolute inset-0 bg-[url('/frame/hero/9.png')] bg-cover md:bg-center bg-bottom z-50 [image-rendering:pixelated]"
        />

        {/* Text overlay – kontras lebih baik di warm bg */}
        <div className="relative z-60 h-full flex flex-col items-center justify-center text-white text-center px-6 sm:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.4, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)] tracking-tight"
          >
            JoyJourney
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1.2 }}
            className="mt-4 md:mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl drop-shadow-lg max-w-3xl"
          >
            Your Daily Happiness Journey... ♡
          </motion.p>
        </div>
      </div>
    </section>
  );
}
