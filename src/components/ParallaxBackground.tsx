"use client";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ParallaxBackground() {
  const { scrollY } = useScroll();
  
  // Faster, longer parallax effect
  const y = useTransform(scrollY, [0, 2000], [0, -800]);
  
  return (
    <div className="fixed top-0 left-0 w-full h-screen -z-10 overflow-hidden">
      <motion.div 
        style={{ y }}
        className="absolute w-full min-h-[300vh] -top-[30%]"
      >
        <img
          src="/bg.jpg"
          alt="background"
          className="w-full min-h-screen h-[300vh] object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
    </div>
  );
}