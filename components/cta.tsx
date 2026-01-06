"use client";

import { ROUTES } from "@/lib/constant";
import { motion } from "framer-motion";
import Link from "next/link"; // sesuaikan dengan struktur project kamu

export default function JoyCtaSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-16 sm:px-10 sm:py-20 md:px-16 md:py-24 lg:px-24 lg:py-32 overflow-hidden [image-rendering:pixelated] z-20"
      style={{
        backgroundImage: "url('/frame/bg-farm.png')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 max-w-4xl w-full text-center space-y-8 sm:space-y-10 md:space-y-12"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)] leading-tight">
          Track Your Joy Now
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-2.5xl text-white/90 font-medium max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          Your path to more joy starts with one simple step.
        </p>

        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Link
            href={ROUTES.PUBLIC.LOGIN}
            className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 text-xl sm:text-2xl md:text-3xl font-bold gradient-sunset rounded-full shadow-xl hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300 border-2 border-white/20 transform-gpu"
          >
            Join Free Today
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
