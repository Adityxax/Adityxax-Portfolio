"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

// ─── Data ─────────────────────────────────────────────────────────────────────
const featuredProjects = [
  {
    title: "Smart Image Moderation API",
    description:
      "Detects NSFW content, extracts text via OCR, counts faces, and evaluates image quality using ML models.",
    link: "https://github.com/Adityxax/Smart-Image-Moderation-API",
    image: "/projects/moderation.png",
    tags: ["FastAPI", "PyTorch", "OpenCV", "Docker"],
  },
  {
    title: "Face Recognition Attendance",
    description:
      "Real-time facial recognition attendance platform using YOLOv8 and OpenCV with live video feed processing.",
    link: "https://github.com/Adityxax/Face-Recognition-Attention-System",
    image: "/projects/attendance.jpg",
    tags: ["YOLOv8", "OpenCV", "Python"],
  },
  {
    title: "Anti Spoofing Face Detector",
    description:
      "Real-time face detection and anti-spoofing system using YOLOv8 — distinguishes live faces from photos or screens.",
    link: "https://github.com/Adityxax/Anti-spoofing-and-Face-Detector",
    image: "/projects/spoofing.png",
    tags: ["YOLOv8", "OpenCV", "Python"],
  },
];

const archiveProjects = [
  {
    title: "Video Shot Boundary Detection",
    description:
      "Hybrid shot boundary detection using CNN temporal features to precisely locate scene transitions in video.",
    link: "https://github.com/Adityxax/Video-Shot-Boundary-Detection",
    image: "/projects/vsb.png",
    tags: ["CNN", "PyTorch", "OpenCV"],
  },
  {
    title: "DocuScan",
    description:
      "A lean Photo-to-Document utility using a pure OpenCV pipeline for high-quality document enhancement and PDF merging.",
    link: "https://github.com/Adityxax/DocuScan",
    image: "/projects/Docuscan_fixed.png",
    tags: ["OpenCV", "Python", "PDF"],
  },
  {
    title: "QR & Barcode Generator",
    description:
      "A fast and efficient QR and Barcode generation tool with a sleek, minimalist interface for bulk generation.",
    link: "https://github.com/Adityxax/QR-Barcode-Generator",
    image: "/projects/qr_barcode.png",
    tags: ["Python", "React", "TypeScript"],
  },
];

// ─── Featured row (hover reveals image + description) ─────────────────────────
function FeaturedRow({
  project,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  project: (typeof featuredProjects)[0];
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  const isHovered = hoveredIndex === index;

  return (
    <motion.div
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className="group relative border-t border-white/10 cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{ backgroundColor: isHovered ? "rgba(255,255,255,0.025)" : "transparent" }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative flex items-center gap-6 lg:gap-10 py-10 md:py-14 px-4">
        <motion.span
          animate={{ color: isHovered ? "rgb(248 113 113)" : "rgb(203 213 225)" }}
          transition={{ duration: 0.25 }}
          className="font-mono text-sm shrink-0 w-7"
        >
          {String(index + 1).padStart(2, "0")}
        </motion.span>

        <div className="flex-1 min-w-0">
          <motion.h3
            animate={{ color: isHovered ? "rgb(248 113 113)" : "rgb(203 213 225)" }}
            transition={{ duration: 0.25 }}
            className="font-black tracking-tight uppercase leading-none text-2xl md:text-3xl lg:text-4xl"
          >
            {project.title}
          </motion.h3>

          <div className="flex gap-2 flex-wrap mt-4">
            {project.tags.map((tag) => (
              <span key={tag} className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 border border-white/10 rounded-full px-2.5 py-0.5">
                {tag}
              </span>
            ))}
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                key="desc"
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: "auto", marginTop: "0.75rem" }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 mt-4 text-xs font-bold tracking-widest uppercase text-red-500 hover:text-white transition-colors"
                >
                  View Project <FaExternalLinkAlt size={10} />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Image slides in from right */}
        <div className="shrink-0 w-0 md:w-[280px] lg:w-[400px] h-0 md:h-[175px] lg:h-[240px] overflow-hidden rounded-2xl">
          <AnimatePresence>
            {isHovered && (
              <motion.div
                key="img"
                initial={{ opacity: 0, scale: 0.9, x: 24 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: 24 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="w-full h-full rounded-2xl"
              >
                <div className="relative w-full h-[175px] lg:h-[240px]">
                  <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 280px, 400px" className="object-contain rounded-2xl" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>


      </div>
    </motion.div>
  );
}

// ─── Archive row — alternating layout (Souvik style) ─────────────────────────
function ArchiveRow({
  project,
  index,
  isHovered,
  onHoverStart,
  onHoverEnd,
}: {
  project: (typeof archiveProjects)[0];
  index: number;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}) {
  // Even index = image left, text right | Odd index = text left, image right
  const imageLeft = index % 2 === 0;

  return (
    <motion.div
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      className="relative cursor-pointer"
    >
      <motion.div
        initial={false}
        animate={{ backgroundColor: isHovered ? "rgba(248,113,113,0.04)" : "transparent" }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Desktop alternating grid */}
      <div className="relative hidden md:grid grid-cols-[1fr_auto_1fr] items-center py-12 lg:py-16 gap-0">

        {/* Left column */}
        <div className={`px-6 ${imageLeft ? "" : "flex flex-col justify-center"}`}>
          {imageLeft ? (
            // Image on left
            <div className="relative h-[200px] lg:h-[240px] rounded-2xl overflow-hidden">
              <motion.div
                initial={{ filter: "brightness(0.4)" }}
                animate={{ filter: isHovered ? "brightness(1)" : "brightness(0.4)" }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image src={project.image} alt={project.title} fill sizes="50vw" className="object-contain" />
              </motion.div>
            </div>
          ) : (
            // Text on left
            <div>
              <motion.h3
                animate={{ color: isHovered ? "rgb(248 113 113)" : "rgb(203 213 225)" }}
                transition={{ duration: 0.25 }}
                className="font-black tracking-tight uppercase leading-none text-2xl lg:text-3xl"
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-sm">{project.description}</p>
              <div className="flex gap-2 flex-wrap mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 border border-white/10 rounded-full px-2.5 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 mt-4 text-xs font-bold tracking-widest uppercase text-red-400 hover:text-white transition-colors"
              >
                View Project <FaExternalLinkAlt size={10} />
              </motion.a>
            </div>
          )}
        </div>

        {/* Center spacer — the scroll line lives in the parent */}
        <div className="w-px self-stretch" />

        {/* Right column */}
        <div className={`px-6 ${imageLeft ? "flex flex-col justify-center" : ""}`}>
          {imageLeft ? (
            // Text on right
            <div>
              <motion.h3
                animate={{ color: isHovered ? "rgb(248 113 113)" : "rgb(203 213 225)" }}
                transition={{ duration: 0.25 }}
                className="font-black tracking-tight uppercase leading-none text-2xl lg:text-3xl"
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-3 max-w-sm">{project.description}</p>
              <div className="flex gap-2 flex-wrap mt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 border border-white/10 rounded-full px-2.5 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 mt-4 text-xs font-bold tracking-widest uppercase text-red-400 hover:text-white transition-colors"
              >
                View Project <FaExternalLinkAlt size={10} />
              </motion.a>
            </div>
          ) : (
            // Image on right
            <div className="relative h-[200px] lg:h-[240px] rounded-2xl overflow-hidden">
              <motion.div
                initial={{ filter: "brightness(0.4)" }}
                animate={{ filter: isHovered ? "brightness(1)" : "brightness(0.4)" }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image src={project.image} alt={project.title} fill sizes="50vw" className="object-contain" />
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile: simple card */}
      <div className="md:hidden flex flex-col gap-3 py-6 px-2">
        <div className="relative h-40 rounded-xl overflow-hidden">
          <Image src={project.image} alt={project.title} fill sizes="100vw" className="object-contain" />
        </div>
        <h3 className="font-black tracking-tight uppercase text-xl text-red-500">{project.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
        <div className="flex gap-2 flex-wrap">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 border border-white/10 rounded-full px-2.5 py-0.5">{tag}</span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-red-400">
          View Project <FaExternalLinkAlt size={10} />
        </a>
      </div>
    </motion.div>
  );
}

const MilestoneDot = React.memo(({ threshold, smoothedProgress }: { threshold: number; smoothedProgress: any }) => {
  const color = useTransform(smoothedProgress, (v: number) => (v >= threshold ? "rgb(239 68 68)" : "rgb(255 255 255 / 0.15)"));
  const glow = useTransform(smoothedProgress, (v: number) =>
    v >= threshold ? "0 0 12px 4px rgba(239,68,68,0.55)" : "none"
  );
  const scale = useTransform(smoothedProgress, [threshold - 0.05, threshold], [0, 1]);
  const opacity = useTransform(smoothedProgress, [threshold - 0.05, threshold], [0, 1]);

  return (
    <motion.div
      style={{ boxShadow: glow, backgroundColor: color, scale, opacity }}
      className="w-3 h-3 rounded-full [will-change:transform,box-shadow]"
    />
  );
});
MilestoneDot.displayName = "MilestoneDot";

// ─── Other Projects section with center scroll-line ───────────────────────────
function OtherProjectsSection({ onCollapse }: { onCollapse: () => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  return (
    <div ref={sectionRef} className="mt-24 md:mt-32">
      {/* Section heading */}
      <div id="other-projects-heading" className="scroll-mt-24 relative mb-0 pb-6 border-b border-white/10 overflow-hidden">
        {/* Ghost text */}
        <div
          aria-hidden
          className="hidden md:block absolute -top-2 left-0 font-black tracking-tighter text-outline-ghost opacity-[0.04] uppercase select-none pointer-events-none whitespace-nowrap text-[8rem] lg:text-[10rem]"
        >
          PROJECTS
        </div>

        <div className="relative flex items-end justify-between gap-4">
          <div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
              <span className="text-red-500">Other</span> <span className="text-outline">Projects</span>
            </h2>
          </div>
          <span className="text-gray-600 text-xs font-mono tracking-widest uppercase shrink-0">
            {archiveProjects.length} works
          </span>
        </div>
      </div>

      {/* Desktop: two-column alternating with center scroll-line */}
      <div className="relative hidden md:block">
        {/* Center scroll-progress line + milestone dots */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px pointer-events-none z-10">
          {/* Track */}
          <div className="absolute inset-0 bg-white/8" />
          {/* Filled progress */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute inset-0 bg-red-500/70"
          />
          {/* Fixed milestone dots — one per project, light up as scroll passes */}
          {archiveProjects.map((_, i) => {
            // Place dot at 1/(2N), 3/(2N), 5/(2N) ... (middle of each row band)
            const n = archiveProjects.length;
            const pct = ((2 * i + 1) / (2 * n)) * 100;
            const threshold = (2 * i + 1) / (2 * n);
            return (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${pct}%` }}
              >
                <MilestoneDot threshold={threshold} smoothedProgress={scaleY} />
              </div>
            );
          })}
        </div>

        {archiveProjects.map((project, i) => (
          <ArchiveRow
            key={i}
            project={project}
            index={i}
            isHovered={hoveredIndex === i}
            onHoverStart={() => setHoveredIndex(i)}
            onHoverEnd={() => setHoveredIndex(null)}
          />
        ))}
      </div>

      {/* Mobile: stacked list with right-side scroll-line */}
      <div className="md:hidden relative">
        {/* Scroll indicator - Right side */}
        <div className="absolute top-0 bottom-0 right-1 w-px pointer-events-none z-10">
          <div className="absolute inset-0 bg-white/8" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute inset-0 bg-red-500/70"
          />
          {archiveProjects.map((_, i) => {
            const n = archiveProjects.length;
            const pct = ((2 * i + 1) / (2 * n)) * 100;
            const threshold = (2 * i + 1) / (2 * n);
            return (
              <div
                key={i}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${pct}%` }}
              >
                <MilestoneDot threshold={threshold} smoothedProgress={scaleY} />
              </div>
            );
          })}
        </div>

        <div className="pr-6">
          {archiveProjects.map((project, i) => (
            <ArchiveRow
              key={i}
              project={project}
              index={i}
              isHovered={hoveredIndex === i}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>

      {/* Collapse */}
      <div className="mt-12">
        <button
          onClick={onCollapse}
          className="flex items-center justify-center gap-3 px-8 py-3 rounded-full border border-red-500/40 bg-white/5 backdrop-blur-md text-sm font-bold tracking-widest uppercase text-red-500 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 hover:shadow-[0_0_25px_rgba(248,113,113,0.25)] transition-all duration-500"
        >
          ↑ Collapse Projects
        </button>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showArchive, setShowArchive] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const otherProjectsRef = useRef<HTMLDivElement>(null);

  const handleExploreMore = useCallback(() => {
    setShowArchive(true);
    setIsScrolling(true);
    // Allow DOM to render the new height before scrolling
    setTimeout(() => {
      const target = document.getElementById("other-projects-heading");
      target?.scrollIntoView({ behavior: "smooth", block: "start" });

      // Re-enable interactions after scroll finishes
      setTimeout(() => setIsScrolling(false), 1000);
    }, 100);
  }, []);

  const handleCollapse = useCallback(() => {
    setIsScrolling(true);
    // Scroll up FIRST while the element is still in the DOM
    const target = document.getElementById("projects-heading");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });

    // Wait for the smooth scroll to finish before removing the massive element
    setTimeout(() => {
      setShowArchive(false);
      setIsScrolling(false);
    }, 600);
  }, []);

  return (
    <section id="projects" className={`text-white px-6 sm:px-10 md:px-16 py-24 flex flex-col items-center ${isScrolling ? "pointer-events-none" : ""}`}>
      <div className="w-full max-w-7xl">

        {/* Section header */}
        <div id="projects-heading" className="scroll-mt-28 flex flex-col sm:flex-row sm:items-end justify-between pb-6 gap-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            <span className="text-red-500">PRO</span><span className="text-outline">JECTS</span>
          </h2>

          {!showArchive && (
            <button
              onClick={handleExploreMore}
              className="hidden md:flex self-start sm:self-end items-center gap-3 px-6 py-3 rounded-full border border-red-500/40 bg-white/5 backdrop-blur-md text-sm font-bold tracking-widest uppercase text-red-500 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 hover:shadow-[0_0_25px_rgba(248,113,113,0.25)] transition-all duration-500"
            >
              Tap to Explore More Projects
            </button>
          )}
        </div>

        {/* Featured rows — desktop */}
        <div className="hidden md:block">
          {featuredProjects.map((project, i) => (
            <FeaturedRow
              key={i}
              project={project}
              index={i}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
          <div className="border-t border-white/10" />
        </div>

        {/* Featured — mobile cards */}
        <div className="md:hidden space-y-5 mt-6">
          {featuredProjects.map((project, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg">
              <div className="relative h-48 w-full rounded-t-2xl overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="100vw" className="object-contain" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute top-3 left-3 text-gray-500 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-black text-red-500 uppercase tracking-tight">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold tracking-widest uppercase text-gray-500 border border-white/10 rounded-full px-2 py-0.5">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 border border-red-500/40 rounded-lg px-4 py-2 hover:bg-red-500/10 transition-colors mt-1">
                  View Project <FaExternalLinkAlt size={12} />
                </a>
              </div>
            </div>
          ))}
          {!showArchive && (
            <button onClick={handleExploreMore} className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full border border-red-500/40 bg-white/5 backdrop-blur-md text-sm font-bold tracking-widest uppercase text-red-500 hover:border-red-500 hover:bg-red-500/10 hover:text-red-400 hover:shadow-[0_0_25px_rgba(248,113,113,0.25)] transition-all duration-500">
              Tap to Explore More Projects
            </button>
          )}
        </div>

        {/* Other Projects section */}
        <AnimatePresence>
          {showArchive && (
            <motion.div
              key="archive"
              ref={otherProjectsRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <OtherProjectsSection onCollapse={handleCollapse} />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}