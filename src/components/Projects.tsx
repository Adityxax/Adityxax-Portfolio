"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Image Moderation API",
    description:
      "A Smart Image Moderation & Analysis API that detects NSFW content, extracts text via OCR, counts faces, and evaluates image quality using ML models. Built with FastAPI, Docker, and Python.",
    github: "https://github.com/Adityxax/Smart-Image-Moderation-API",
  },
  {
    title: "Face-Recognition-Attention-System",
    description:
      "Real-time facial recognition attendance platform using YOLOv8, OpenCV, and deep feature embeddings to automatically detect, identify, and log identities with a low-latency, modular computer vision pipeline.",
    github: "https://github.com/Adityxax/Face-Recognition-Attention-System",
  },
  {
    title: "Video-Shot-Boundary-Detection",
    description:
      "Hybrid video shot boundary detection system using OpenCV, CNN-based temporal feature extraction, and adaptive threshold optimization via Otsu’s method and the Marine Predators Algorithm to accurately classify abrupt cuts and gradual transitions across diverse video scenarios.",
    github: "https://github.com/Adityxax/Video-Shot-Boundary-Detection",
  },
  {
    title: "Anti-spoofing-and-Face-Detector",
    description:
      "Real-time face detection and anti-spoofing system using YOLOv8, OpenCV, and deep feature analysis to classify live versus spoofed faces with a modular, low-latency computer vision pipeline.",
    github: "https://github.com/Adityxax/Anti-spoofing-and-Face-Detector",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-black text-white px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <div className="grid gap-8 justify-center [grid-template-columns:repeat(auto-fit,minmax(300px,350px))]">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition w-full max-w-sm"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-gray-400 mt-2">
                {project.description}
              </p>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-400"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
