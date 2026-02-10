"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* HERO VIDEO (only here, not global) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-20"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center px-6"
      >
        <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
          ADITYA
        </h1>

        <p className="mt-6 text-gray-300 text-lg md:text-xl">
          ML Engineer • Backend Developer • Builder
        </p>
      </motion.div>

      {/* FADE INTO PARALLAX SECTION BELOW */}
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
