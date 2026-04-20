"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

// On mobile we skip tsparticles entirely and use pure CSS blobs.
// This avoids the 400 KB tsparticles JS bundle being parsed & executed on low-end phones.
function MobileBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none bg-gradient-to-b from-[#1a0003] via-[#0d0002] to-black" />
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
            number: { value: 120, density: { enable: true } },
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