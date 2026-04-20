"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "INITIALIZING SYSTEMS...",
    "FETCHING PORTFOLIO ASSETS...",
    "HANDSHAKE COMPLETE.",
  ];

  useEffect(() => {
    // Increment progress
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Random increments for a more "natural" loading feel
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Update messages based on progress thresholds
    if (progress < 40) setMessageIndex(0);
    else if (progress < 85) setMessageIndex(1);
    else setMessageIndex(2);

    // Call onComplete when done
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 800); // Small delay after hitting 100% for the user to see "Complete"
      return () => clearTimeout(exitTimer);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] font-mono text-white px-6"
    >
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 font-black text-2xl tracking-tighter uppercase"
          >
            Loading...
          </motion.h2>
          <div className="h-0.5 w-full bg-white/5 overflow-hidden">
            <motion.div 
               className="h-full bg-red-500"
               initial={{ width: "0%" }}
               animate={{ width: `${progress}%` }}
               transition={{ ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Status Line */}
        <div className="flex justify-between items-end text-[10px] sm:text-xs tracking-widest uppercase font-bold">
          <motion.span 
            key={messageIndex}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-gray-400"
          >
            {messages[messageIndex]}
          </motion.span>
          <span className="text-red-500/80">
            {Math.round(progress)}%
          </span>
        </div>
      </div>

      {/* Subtle background detail */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/5 via-transparent to-transparent" />
      </div>
    </motion.div>
  );
}
