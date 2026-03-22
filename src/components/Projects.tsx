"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const projects = [
  {
    title: "Smart Image Moderation API",
    description:
      "Detects NSFW content, extracts text via OCR, counts faces, and evaluates image quality using ML models.",
    github: "https://github.com/Adityxax/Smart-Image-Moderation-API",
    image: "/projects/moderation.png",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Real-time facial recognition attendance platform using YOLOv8 and OpenCV.",
    github: "https://github.com/Adityxax/Face-Recognition-Attention-System",
    image: "/projects/attendance.jpg",
  },
  {
    title: "Video Shot Boundary Detection",
    description:
      "Hybrid shot boundary detection using CNN temporal features.",
    github: "https://github.com/Adityxax/Video-Shot-Boundary-Detection",
    image: "/projects/vsb.png",
  },
  {
    title: "Anti Spoofing Face Detector",
    description:
      "Real-time face detection and anti-spoofing system using YOLOv8 and OpenCV.",
    github: "https://github.com/Adityxax/Anti-spoofing-and-Face-Detector",
    image: "/projects/spoofing.png",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[index];

  const handleDragEnd = (event: any, info: any) => {
    if (info.offset.x < -50) {
      next(); // Swiped left
    } else if (info.offset.x > 50) {
      prev(); // Swiped right
    }
  };

  return (
    <section className="min-h-screen text-white px-6 sm:px-8 py-24 flex flex-col items-center">

      <h2 className="text-4xl font-bold mb-14">Projects</h2>

      <div className="relative w-full max-w-5xl group">

        {/* Project Card */}
        <div className="relative p-[1px] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.6)]">
          {/* Animated Gradient Border Layer */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/50 via-gray-500/20 to-blue-500/50 opacity-40 blur-sm"></div>
          
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            className="relative rounded-3xl bg-black/80 backdrop-blur-2xl overflow-hidden cursor-grab active:cursor-grabbing border-none h-full"
          >

          {/* Browser Header */}
          <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <div className="ml-6 h-3 w-40 bg-white/10 rounded"></div>
          </div>

          {/* Content */}
          <div className="flex flex-col md:flex-row">

            {/* Preview Area */}
           <div className="md:w-3/5 p-8 flex items-center justify-center">
            <div className="relative w-full h-[360px] rounded-xl overflow-hidden">
             <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
             />
           </div>
          </div>

            {/* Project Info */}
            <div className="md:w-2/5 p-8 flex flex-col justify-center">

              <h3 className="text-3xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300 group shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] w-fit"
              >
                View Project 
                <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>

            </div>

          </div>

        </motion.div>

        {/* Left Arrow */}
        <button
           onClick={prev}
           className="absolute left-4 md:-left-16 top-1/2 -translate-y-1/2 z-10
           w-12 h-12 flex items-center justify-center
           rounded-full bg-black/80 md:bg-black/60 backdrop-blur-md
           border border-white/20 md:border-white/10
           hover:bg-white/20 md:hover:bg-white/10 hover:scale-110
           transition-all duration-300 shadow-lg text-white">
          <FiChevronLeft size={26} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 md:-right-16 top-1/2 -translate-y-1/2 z-10
          w-12 h-12 flex items-center justify-center
          rounded-full bg-black/80 md:bg-black/60 backdrop-blur-md
          border border-white/20 md:border-white/10
          hover:bg-white/20 md:hover:bg-white/10 hover:scale-110
          transition-all duration-300 shadow-lg text-white">
          <FiChevronRight size={26} />
        </button>
        </div>

      </div>

    </section>
  );
}