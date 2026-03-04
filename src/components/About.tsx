"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiTypescript,
  SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiMysql,
  SiTensorflow, SiOpencv, SiPytorch, SiScikitlearn,
  SiGit, SiDocker, SiVsco, SiAndroid, SiArduino, SiFastapi,
  SiPandas, SiGooglecolab, SiPycharm
} from "react-icons/si";


export default function About() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">🛠 Tech Arsenal</h2>

      <div className="flex flex-col gap-8">
        <SkillCategory title="Languages">
          <Skill icon={<SiPython />} color="bg-yellow-500" name="Python" />
          <Skill icon={<SiCplusplus />} color="bg-blue-700" name="C++" />
          <Skill icon={<SiTypescript />} color="bg-blue-500" name="TypeScript" />
        </SkillCategory>

        <SkillCategory title="Frontend">
          <Skill icon={<SiReact />} color="bg-cyan-500" name="React" />
          <Skill icon={<SiTailwindcss />} color="bg-teal-500" name="Tailwind" />
          <Skill icon={<SiNextdotjs />} color="bg-black" name="Next.js" />
          <Skill icon={<SiHtml5 />} color="bg-orange-600" name="HTML5" />
          <Skill icon={<SiCss3 />} color="bg-blue-600" name="CSS3" />         
        </SkillCategory>

        <SkillCategory title="Backend">
          <Skill icon={<SiNodedotjs />} color="bg-green-600" name="Node.js" />
          <Skill icon={<SiFastapi />} color="bg-blue-700" name="Fastapi" />
          <Skill icon={<SiMongodb />} color="bg-green-700" name="MongoDB" />
          <Skill icon={<SiMysql />} color="bg-blue-700" name="MySQL" />
        </SkillCategory>

        <SkillCategory title="AI / ML">
          <Skill icon={<SiTensorflow />} color="bg-orange-500" name="TensorFlow" />
          <Skill icon={<SiOpencv />} color="bg-red-500" name="OpenCV" />
          <Skill icon={<Image src="/icons/ultralytics.svg" width={24} height={24} alt="Ultralytics" />} color="bg-purple-500" name="Ultralytics" />
          <Skill icon={<Image src="/icons/cmake.svg" width={24} height={24} alt="CMake" />} color="bg-blue-500" name="CMake" />
          <Skill icon={<SiPytorch />} color="bg-red-600" name="PyTorch" />
          <Skill icon={<SiScikitlearn />} color="bg-yellow-500" name="Scikit-Learn" />
          <Skill icon={<SiPandas />} color="bg-green-500" name="Pandas" />
        </SkillCategory>

        <SkillCategory title="Tools & Platforms">
          <Skill icon={<SiGit />} color="bg-orange-600" name="Git" />
          <Skill icon={<SiDocker />} color="bg-blue-500" name="Docker" />
          <Skill icon={<SiVsco />} color="bg-blue-600" name="VS Code" />
          <Skill icon={<SiGooglecolab />} color="bg-green-600" name="Colab" />
          <Skill icon={<SiPycharm />} color="bg-green-700" name="PyCharm" />
          <Skill icon={<SiAndroid />} color="bg-green-600" name="Android" />
          <Skill icon={<SiArduino />} color="bg-teal-600" name="Arduino" />
        </SkillCategory>
      </div>
    </section>
  );
}

/* CATEGORY WRAPPER */
function SkillCategory({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

/* INDIVIDUAL SKILL BADGE */
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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium cursor-default ${color}`}
    >
      <span className="text-lg">{icon}</span>
      <span>{name}</span>
      {/* glow effect */}
      <span
        className={`absolute inset-0 rounded-full opacity-0 hover:opacity-30 blur-md transition-opacity duration-300 ${color}`}
      />
    </motion.div>
  );
}