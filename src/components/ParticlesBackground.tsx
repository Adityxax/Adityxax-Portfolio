"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

// On mobile we skip tsparticles entirely and use pure CSS blobs.
// This avoids the 400 KB tsparticles JS bundle being parsed & executed on low-end phones.
function MobileBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-red-600/10 blur-[80px] animate-blob" />
      <div className="absolute top-[30%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 blur-[80px] animate-blob animation-delay-2000" />
      <div className="absolute bottom-[-10%] left-[20%] w-[55vw] h-[55vw] rounded-full bg-cyan-600/8 blur-[80px] animate-blob animation-delay-4000" />
    </div>
  );
}

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    // Skip heavy tsparticles init entirely on mobile
    if (!mobile) {
      initParticlesEngine(async (engine) => {
        await loadFull(engine);
      }).then(() => setInit(true));
    }
  }, []);

  // Still detecting
  if (isMobile === null) return null;

  // Mobile: lightweight CSS blobs instead
  if (isMobile) return <MobileBackground />;

  // Desktop: particles (only after engine init)
  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen overflow-hidden">
      <Particles
        id="tsparticles-desktop"
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          fpsLimit: 120,
          particles: {
            number: { value: 145, density: { enable: true } },
            shadow: { enable: true, color: "#00f0ff", blur: 10 },
            color: { value: ["#ff0000", "#56e4ee", "#6a33ea", "#2cee73", "#ffcc00"] },
            shape: { type: "circle" },
            links: {
              enable: true,
              color: "#f94050",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2.5,
              outModes: { default: "bounce" },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: ["grab", "connect"] },
              resize: { enable: true },
            },
            modes: {
              grab: { distance: 140, line_linked: { opacity: 0.7 } },
              connect: { distance: 120, radius: 60, links: { opacity: 0.5 } },
            },
          },
        }}
      />
    </div>
  );
}