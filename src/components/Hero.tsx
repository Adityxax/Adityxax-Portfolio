"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold">ADITYA</h1>
        <p className="mt-6 text-gray-400 text-xl">
          ML Engineer • Backend Developer • Builder
        </p>
      </motion.div>
    </section>
  );
}
