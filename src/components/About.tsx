"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiTypescript,
  SiReact, SiNextdotjs, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiMysql, SiOpencv, SiPytorch,
  SiScikitlearn, SiGit, SiDocker, SiVsco, SiAndroid,
  SiFastapi, SiPandas, SiGooglecolab, SiPycharm
} from "react-icons/si";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <section id="about" className="min-h-screen py-24 px-6 max-w-6xl mx-auto flex flex-col items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-16 tracking-tight">
        <span className="text-red-500">Tech</span> <span className="text-outline">Arsenal</span>
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full"
      >
        <SkillCategory title="Languages">
          <Skill icon={<SiPython />} color="bg-yellow-500/80 border border-yellow-500/30" name="Python" isMobile={isMobile} />
          <Skill icon={<SiCplusplus />} color="bg-blue-700/80 border border-blue-700/30" name="C++" isMobile={isMobile} />
          <Skill icon={<SiTypescript />} color="bg-blue-500/80 border border-blue-500/30" name="TypeScript" isMobile={isMobile} />
        </SkillCategory>

        <SkillCategory title="Frontend">
          <Skill icon={<SiReact />} color="bg-cyan-500/80 border border-cyan-500/30" name="React" isMobile={isMobile} />
          <Skill icon={<SiTailwindcss />} color="bg-teal-500/80 border border-teal-500/30" name="Tailwind" isMobile={isMobile} />
          <Skill icon={<SiNextdotjs />} color="bg-black/80 border border-white/20" name="Next.js" isMobile={isMobile} />
          <Skill icon={<SiHtml5 />} color="bg-orange-600/80 border border-orange-600/30" name="HTML" isMobile={isMobile} />
          <Skill icon={<SiCss />} color="bg-blue-600/80 border border-blue-600/30" name="CSS" isMobile={isMobile} />
        </SkillCategory>

        <SkillCategory title="Backend">
          <Skill icon={<SiNodedotjs />} color="bg-green-600/80 border border-green-600/30" name="Node.js" isMobile={isMobile} />
          <Skill icon={<SiFastapi />} color="bg-blue-700/80 border border-blue-700/30" name="Fastapi" isMobile={isMobile} />
          <Skill icon={<SiMongodb />} color="bg-green-700/80 border border-green-700/30" name="MongoDB" isMobile={isMobile} />
          <Skill icon={<SiMysql />} color="bg-blue-700/80 border border-blue-700/30" name="MySQL" isMobile={isMobile} />
        </SkillCategory>

        <SkillCategory title="AI / ML">
          <Skill icon={<SiOpencv />} color="bg-red-500/80 border border-red-500/30" name="OpenCV" isMobile={isMobile} />
          <Skill icon={<Image src="/icons/ultralytics.svg" width={20} height={20} alt="Ultralytics" />} color="bg-purple-500/80 border border-purple-500/30" name="Ultralytics" isMobile={isMobile} />
          <Skill icon={<Image src="/icons/cmake.svg" width={20} height={20} alt="CMake" />} color="bg-yellow-500/80 border border-yellow-500/30" name="CMake" isMobile={isMobile} />
          <Skill icon={<SiPytorch />} color="bg-red-600/80 border border-red-600/30" name="PyTorch" isMobile={isMobile} />
          <Skill icon={<SiScikitlearn />} color="bg-blue-500/80 border border-blue-500/30" name="Scikit-Learn" isMobile={isMobile} />
          <Skill icon={<SiPandas />} color="bg-green-500/80 border border-green-500/30" name="Pandas" isMobile={isMobile} />
        </SkillCategory>

        <SkillCategory title="Tools & Platforms">
          <Skill icon={<SiGit />} color="bg-orange-600/80 border border-orange-600/30" name="Git" isMobile={isMobile} />
          <Skill icon={<SiDocker />} color="bg-blue-500/80 border border-blue-500/30" name="Docker" isMobile={isMobile} />
          <Skill icon={<SiVsco />} color="bg-blue-600/80 border border-blue-600/30" name="VS Code" isMobile={isMobile} />
          <Skill icon={<SiGooglecolab />} color="bg-green-600/80 border border-green-600/30" name="Colab" isMobile={isMobile} />
          <Skill icon={<SiPycharm />} color="bg-green-700/80 border border-green-700/30" name="PyCharm" isMobile={isMobile} />
          <Skill icon={<SiAndroid />} color="bg-green-600/80 border border-green-600/30" name="Android" isMobile={isMobile} />
        </SkillCategory>
      </motion.div>
    </section>
  );
}

function SkillCategory({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-gray-300 border-l-4 border-red-500 pl-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

function Skill({
  icon,
  name,
  color,
  isMobile,
}: {
  icon: React.ReactNode;
  name: string;
  color: string;
  isMobile?: boolean;
}) {
  return (
    <motion.div
      variants={itemVariants}
      // Disable hover/tap transforms on mobile — prevents jank from touch events
      whileHover={isMobile ? undefined : { scale: 1.05, y: -5 }}
      whileTap={isMobile ? undefined : { scale: 0.95 }}
      className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-white/90 text-sm font-medium cursor-default shadow-lg ${color} backdrop-blur-sm transition-all`}
    >
      <span className="text-xl drop-shadow-md w-6 h-6 flex items-center justify-center shrink-0">{icon}</span>
      <span className="tracking-wide drop-shadow-md whitespace-nowrap">{name}</span>
    </motion.div>
  );
}