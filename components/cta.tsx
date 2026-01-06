"use client";

import { ROUTES } from "@/lib/constant";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="relative h-screen -mt-1 pt-20 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16 md:py-24"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl mb-6">
          Track Your Joy Now
        </h2>

        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          Your path to more joy starts with one simple step.
        </p>

        <Link
          href={ROUTES.PUBLIC.LOGIN}
          className="
      inline-block px-10 py-5 text-2xl md:text-3xl font-bold
      bg-linear-to-r from-pink-400 to-purple-500
      hover:from-pink-500 hover:to-purple-600
      text-white rounded-full shadow-2xl
      transform hover:scale-110 hover:shadow-[0_0_25px_rgba(236,72,153,0.6)]
      transition-all duration-300
    "
        >
          Join Free Today
        </Link>
      </motion.div>
    </section>
  );
}
