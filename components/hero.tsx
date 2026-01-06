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

  const opacityL1 = useTransform(smoothProgress, [0.01, 0.35], [0, 1]);
  const yL1 = useTransform(smoothProgress, [0.01, 0.75], ["90%", FINAL_Y]);

  const opacityL2 = useTransform(smoothProgress, [0.1, 0.45], [0, 1]);
  const yL2 = useTransform(smoothProgress, [0.1, 0.78], ["78%", FINAL_Y]);

  const opacityL3 = useTransform(smoothProgress, [0.2, 0.55], [0, 1]);
  const yL3 = useTransform(smoothProgress, [0.2, 0.8], ["68%", FINAL_Y]);

  const opacityFg = useTransform(smoothProgress, [0.35, 0.7], [0, 1]);
  const yFg = useTransform(smoothProgress, [0.35, 0.8], ["50%", FINAL_Y]);
  const scaleFg = useTransform(smoothProgress, [0.35, 0.8], [1.06, 1]);

  return (
    <section
      ref={container}
      className="relative w-full"
      style={{ height: "clamp(200vh, 280vh, 400vh)" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Fallback gradient warm orange-yellow */}
        <div className="absolute inset-0opacity-90 z-0" />

        {/* Layer Background – FIXED, tidak bergerak */}
        <div className="absolute inset-0 bg-[url('/frame/hero/5.png')] bg-cover bg-center z-10 [image-rendering:pixelated]" />

        {/* Mid Layer 1 – mulai gerak */}
        <motion.div
          style={{
            y: yL1,
            opacity: opacityL1,
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 bg-[url('/frame/hero/6.png')] bg-cover md:bg-center bg-top z-20 [image-rendering:pixelated]"
        />

        {/* Mid Layer 2 */}
        <motion.div
          style={{
            y: yL2,
            opacity: opacityL2,
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 bg-[url('/frame/hero/7.png')] bg-cover md:bg-center bg-top z-30 [image-rendering:pixelated]"
        />

        {/* Mid Layer 3 */}
        <motion.div
          style={{
            y: yL3,
            opacity: opacityL3,
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 bg-[url('/frame/hero/8.png')] bg-cover md:bg-center bg-top z-40 [image-rendering:pixelated]"
        />

        {/* Foreground */}
        <motion.div
          style={{
            y: yFg,
            opacity: opacityFg,
            scale: scaleFg,
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 bg-[url('/frame/hero/9.png')] bg-cover md:bg-center bg-bottom z-50 [image-rendering:pixelated]"
        />

        {/* Text overlay – kontras lebih baik di warm bg */}
        <div className="relative z-60 h-full flex flex-col items-center justify-center text-white text-center px-6 sm:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.4, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold drop-shadow-lg tracking-tight"
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
