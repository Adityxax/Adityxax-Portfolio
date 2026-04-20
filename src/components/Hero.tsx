"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen text-white overflow-hidden flex items-center justify-center px-6 md:px-12 py-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl gap-10 md:gap-16 lg:gap-24">

        {/* Left/Top: Profile Image Cutout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative shrink-0 w-80 sm:w-96 md:w-[450px] lg:w-[550px]"
        >
          {/* Background Glow - with our red theme */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[120%] aspect-square bg-red-500/[0.08] blur-[120px] rounded-full pointer-events-none [will-change:transform,filter]" />

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 [will-change:transform]"
          >
            <Image
              src="/Adi_nobg.png"
              alt="Aditya"
              width={600}
              height={800}
              quality={90}
              priority
              className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(239,68,68,0.4)]"
            />
          </motion.div>

          {/* Mobile-only Identity: Appears right below image */}
          <div className="md:hidden mt-[-2.5rem] flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight uppercase">
              <span className="text-red-500">ADI</span><span className="text-outline">TYA</span>
            </h1>
            <p className="mt-2 text-base sm:text-lg font-medium">
              <TypeAnimation
                sequence={[
                  "ML Engineer", 1800,
                  "Backend Developer", 1800,
                  "Explorer", 1800,
                  "Full Stack Developer", 1800,
                  "Problem Solver", 1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent font-semibold"
              />
            </p>
          </div>
        </motion.div>

        {/* Right/Bottom: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl"
        >


          {/* Desktop-only Identity */}
          <div className="hidden md:block">
            <h1 className="text-6xl lg:text-7xl font-black tracking-tight uppercase">
              <span className="text-red-500">ADI</span><span className="text-outline">TYA</span>
            </h1>

            <p className="mt-4 text-xl font-medium min-h-[2rem]">
              <TypeAnimation
                sequence={[
                  "ML Engineer", 1800,
                  "Backend Developer", 1800,
                  "Explorer", 1800,
                  "Full Stack Developer", 1800,
                  "Problem Solver", 1800,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-br from-zinc-100 to-zinc-500 bg-clip-text text-transparent font-semibold"
              />
            </p>
          </div>

          {/* About Me Section: Appears below identity on both, but is the main block on mobile second-half */}
          <div className="mt-8 md:mt-12">
            <h2 className="text-3xl font-bold text-red-500">About Me</h2>
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