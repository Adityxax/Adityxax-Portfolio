"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen text-white overflow-hidden flex items-center justify-center px-6 md:px-12 py-20">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10 md:gap-16 lg:gap-24">
        
        {/* Left/Top: Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative shrink-0 w-48 sm:w-64 md:w-80 lg:w-[420px]"
        >
          {/* Animated gradient ring */}
          <div className="absolute -inset-[3px] rounded-full bg-gradient-to-tr from-red-500 via-purple-500 to-cyan-400 animate-spin-slow blur-[2px] opacity-80" />
          <div className="absolute -inset-[3px] rounded-full bg-gradient-to-bl from-cyan-400 via-blue-500 to-red-500 animate-spin-slow-reverse opacity-60" />
          <div className="relative aspect-square rounded-full overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]">
            <Image
              src="/me.png"
              alt="Aditya"
              width={420}
              height={420}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right/Bottom: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            ADITYA
          </h1>
          <p className="mt-4 text-lg md:text-xl font-medium">
            <TypeAnimation
              sequence={[
                "ML Engineer", 1800,
                "Backend Developer", 1800,
                "Computer Vision Builder", 1800,
                "Open Source Enthusiast", 1800,
                "Problem Solver", 1800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold"
            />
          </p>
          
          <div className="mt-10 md:mt-12">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="mt-4 text-gray-300 leading-relaxed text-lg">
              I'm a developer focused on building ML-powered applications,
              backend systems, and real-world tools. I enjoy turning ideas into
              working products and designing systems that are both scalable and practical.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}