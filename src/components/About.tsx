"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Image */}
        <div className="flex justify-center items-center">
          <div className="w-72 md:w-80 aspect-square overflow-hidden rounded-full shadow-2xl">
            <img
              src="/me.png"
              alt="Aditya"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>

          <p className="mt-6 text-gray-300 leading-relaxed text-lg">
            I'm a developer focused on building ML-powered applications,
            backend systems, and real-world tools. I enjoy turning ideas into
            working products and designing systems that are both scalable and
            practical.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
