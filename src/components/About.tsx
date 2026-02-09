"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl grid md:grid-cols-2 gap-10 items-center"
      >
        <img
          src="/me.jpg"
          alt="Aditya"
          className="rounded-2xl w-72 mx-auto"
        />

        <div>
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="mt-4 text-gray-400">
            I'm a developer focused on building ML-powered applications,
            backend systems, and real-world tools. I enjoy turning ideas into
            working products.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
