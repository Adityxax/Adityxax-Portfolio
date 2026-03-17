"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
    }
  }, []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10 w-screen h-screen" style={{ overflow: "hidden" }}>
      {isMobile ? (
        <Particles
          id="tsparticles-mobile"
          options={{
            fullScreen: true,
            background: { color: "transparent" },
            fpsLimit: 30,
            particles: {
              number: { value: 35, density: { enable: false } },
              shadow: { enable: false, color: "#00f0ff", blur: 10 },
              color: { value: ["#ec2b2b", "#61ecf6", "#652bec", "#1ba94f", "#fecc04"] },
              shape: { type: "circle" },
              links: { enable: true, color: "#f94050", distance: 150, opacity: 0.3, width: 1 },
              move: { enable: true, speed: 2.5, outModes: { default: "bounce" } },
            },
            interactivity: {
              events: { onHover: { enable: false }, resize: { enable: true } },
              modes: {},
            },
          }}
          style={{ width: "100vw", height: "100vh" }}
        />
      ) : (
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
              links: { enable: true, color: "#f94050", distance: 150, opacity: 0.3, width: 1 },
              move: { enable: true, speed: 2.5, outModes: { default: "bounce" } },
            },
            interactivity: {
              events: { onHover: { enable: true, mode: ["grab", "connect"] }, resize: { enable: true } },
              modes: {
                grab: { distance: 140, line_linked: { opacity: 0.7 } },
                connect: { distance: 120, radius: 60, links: { opacity: 0.5 } },
              },
            },
          }}
        />
      )}
    </div>
  );
}