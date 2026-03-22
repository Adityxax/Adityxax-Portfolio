"use client";

import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full text-white py-8 border-t border-white/10 bg-black/40 backdrop-blur-md relative z-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Aditya. All rights reserved.
        </div>

        <motion.button
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
        
      </div>
    </footer>
  );
}
