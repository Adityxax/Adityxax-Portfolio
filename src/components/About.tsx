"use client";

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
  return (
    <section id="about" className="min-h-screen py-24 px-6 max-w-6xl mx-auto flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">Tech Arsenal</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full"
      >
        <SkillCategory title="Languages">
          <Skill icon={<SiPython />} color="bg-yellow-500/80 border border-yellow-500/30" name="Python" />
          <Skill icon={<SiCplusplus />} color="bg-blue-700/80 border border-blue-700/30" name="C++" />
          <Skill icon={<SiTypescript />} color="bg-blue-500/80 border border-blue-500/30" name="TypeScript" />
        </SkillCategory>

        <SkillCategory title="Frontend">
          <Skill icon={<SiReact />} color="bg-cyan-500/80 border border-cyan-500/30" name="React" />
          <Skill icon={<SiTailwindcss />} color="bg-teal-500/80 border border-teal-500/30" name="Tailwind" />
          <Skill icon={<SiNextdotjs />} color="bg-black/80 border border-white/20" name="Next.js" />
          <Skill icon={<SiHtml5 />} color="bg-orange-600/80 border border-orange-600/30" name="HTML" />
          <Skill icon={<SiCss />} color="bg-blue-600/80 border border-blue-600/30" name="CSS" />
        </SkillCategory>

        <SkillCategory title="Backend">
          <Skill icon={<SiNodedotjs />} color="bg-green-600/80 border border-green-600/30" name="Node.js" />
          <Skill icon={<SiFastapi />} color="bg-blue-700/80 border border-blue-700/30" name="Fastapi" />
          <Skill icon={<SiMongodb />} color="bg-green-700/80 border border-green-700/30" name="MongoDB" />
          <Skill icon={<SiMysql />} color="bg-blue-700/80 border border-blue-700/30" name="MySQL" />
        </SkillCategory>

        <SkillCategory title="AI / ML">
          <Skill icon={<SiOpencv />} color="bg-red-500/80 border border-red-500/30" name="OpenCV" />
          <Skill icon={<Image src="/icons/ultralytics.svg" width={20} height={20} alt="Ultralytics" />} color="bg-purple-500/80 border border-purple-500/30" name="Ultralytics" />
          <Skill icon={<Image src="/icons/cmake.svg" width={20} height={20} alt="CMake" />} color="bg-yellow-500/80 border border-yellow-500/30" name="CMake" />
          <Skill icon={<SiPytorch />} color="bg-red-600/80 border border-red-600/30" name="PyTorch" />
          <Skill icon={<SiScikitlearn />} color="bg-blue-500/80 border border-blue-500/30" name="Scikit-Learn" />
          <Skill icon={<SiPandas />} color="bg-green-500/80 border border-green-500/30" name="Pandas" />
        </SkillCategory>

        <SkillCategory title="Tools & Platforms">
          <Skill icon={<SiGit />} color="bg-orange-600/80 border border-orange-600/30" name="Git" />
          <Skill icon={<SiDocker />} color="bg-blue-500/80 border border-blue-500/30" name="Docker" />
          <Skill icon={<SiVsco />} color="bg-blue-600/80 border border-blue-600/30" name="VS Code" />
          <Skill icon={<SiGooglecolab />} color="bg-green-600/80 border border-green-600/30" name="Colab" />
          <Skill icon={<SiPycharm />} color="bg-green-700/80 border border-green-700/30" name="PyCharm" />
          <Skill icon={<SiAndroid />} color="bg-green-600/80 border border-green-600/30" name="Android" />
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
}: {
  icon: React.ReactNode;
  name: string;
  color: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-white/90 text-sm font-medium cursor-default shadow-lg ${color} backdrop-blur-sm transition-all`}
    >
      <span className="text-xl drop-shadow-md w-6 h-6 flex items-center justify-center shrink-0">{icon}</span>
      <span className="tracking-wide drop-shadow-md whitespace-nowrap">{name}</span>
    </motion.div>
  );
}