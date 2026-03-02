"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen text-white overflow-hidden flex items-center justify-center">

      {/* LEFT SIDE BIG PFP */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute left-10 md:left-20 top-1/2 -translate-y-[60%]"
      >
        <div className="w-72 md:w-96 lg:w-[420px] aspect-square rounded-full overflow-hidden shadow-2xl">
          <img
            src="/me.png"
            alt="Aditya"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* NAME IN UPPER CENTER */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="absolute top-42 w-full text-center px-6 md:pl-56"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          ADITYA
        </h1>

        <p className="mt-4 text-gray-300 text-lg md:text-xl">
          ML Engineer • Backend Developer • Builder
        </p>
      </motion.div>

      {/* ABOUT TEXT BELOW NAME */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto text-center px-6 md:pl-56 mt-32"
      >
        <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>

        <p className="mt-2 text-gray-300 leading-relaxed text-lg">
          I'm a developer focused on building ML-powered applications,
          backend systems, and real-world tools. I enjoy turning ideas into
          working products and designing systems that are both scalable and practical.
        </p>
      </motion.div>

      {/* FADE BOTTOM */}
    </section>
  );
}