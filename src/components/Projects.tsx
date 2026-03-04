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

  return (
    <section className="min-h-screen text-white px-8 py-24 flex flex-col items-center">

      <h2 className="text-4xl font-bold mb-14">Projects</h2>

      <div className="relative w-full max-w-5xl">

        {/* Project Card */}
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="rounded-3xl border border-white/10 bg-black/60 backdrop-blur-x2 shadow-[0_0_50px_rgba(0,0,0,0.6)] overflow-hidden"
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

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-blue-400 hover:text-blue-300 text-lg"
              >
                View Project →
              </a>

            </div>

          </div>

        </motion.div>

        {/* Left Arrow */}
        <button
           onClick={prev}
           className="absolute -left-16 top-1/2 -translate-y-1/2 
           w-12 h-12 flex items-center justify-center
           rounded-full bg-black/60 backdrop-blur-md
           border border-white/10
           hover:bg-white/10 hover:scale-110
           transition-all duration-300 shadow-lg">
          <FiChevronLeft size={26} />
        </button>


        <button
          onClick={next}
          className="absolute -right-16 top-1/2 -translate-y-1/2 
          w-12 h-12 flex items-center justify-center
          rounded-full bg-black/60 backdrop-blur-md
          border border-white/10
          hover:bg-white/10 hover:scale-110
          transition-all duration-300 shadow-lg">
          <FiChevronRight size={26} />
        </button>

      </div>

    </section>
  );
}