"use client";

import React, { useState, useEffect } from "react";
import Preloader from "./Preloader";
import { AnimatePresence } from "framer-motion";

export default function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <Preloader key="loader" onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>
      <div className={loading ? "invisible h-screen" : "visible"}>
        {children}
      </div>
    </>
  );
}
