"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Smart Image Moderation API",
    description:
      "Detects NSFW content, extracts text via OCR, counts faces, and evaluates image quality using ML models.",
    link: "https://github.com/Adityxax/Smart-Image-Moderation-API",
    image: "/projects/moderation.png",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Real-time facial recognition attendance platform using YOLOv8 and OpenCV.",
    link: "https://github.com/Adityxax/Face-Recognition-Attention-System",
    image: "/projects/attendance.jpg",
  },
  {
    title: "Video Shot Boundary Detection",
    description:
      "Hybrid shot boundary detection using CNN temporal features.",
    link: "https://github.com/Adityxax/Video-Shot-Boundary-Detection",
    image: "/projects/vsb.png",
  },
  {
    title: "Anti Spoofing Face Detector",
    description:
      "Real-time face detection and anti-spoofing system using YOLOv8 and OpenCV.",
    link: "https://github.com/Adityxax/Anti-spoofing-and-Face-Detector",
    image: "/projects/spoofing.png",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      nextProject();
    } else if (info.offset.x > 50) {
      prevProject();
    }
  };

  return (
    <section id="projects" className="min-h-screen text-white px-6 sm:px-8 py-24 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-14">Projects</h2>

      <div className="relative w-full max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-20 bg-[#0a0a0a] rounded-3xl p-6 sm:p-10 md:p-14 border border-white/10 shadow-2xl relative z-10 overflow-hidden cursor-grab active:cursor-grabbing"
          >
            {/* Background glowing effect */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="flex-1 w-full max-w-md lg:max-w-lg">
              <div className="relative group">
                {/* Gradient Border Wrap */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <Image
                    src={projects[index].image}
                    alt={projects[index].title}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6 lg:space-y-8">
              <h3 className="text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {projects[index].title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                {projects[index].description}
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={projects[index].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:pr-10"
                >
                  <span className="relative z-10 font-bold">View Project</span>
                  <FaExternalLinkAlt className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === i 
                  ? "w-8 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]" 
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevProject}
          className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 active:scale-95 transition-all shadow-xl backdrop-blur-md flex scale-75 md:scale-100"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 z-20 p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-110 active:scale-95 transition-all shadow-xl backdrop-blur-md flex scale-75 md:scale-100"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}