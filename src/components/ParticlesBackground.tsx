"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: false,
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
              },
            },
            shadow: {
              enable: true,
              color: "#00f0ff",
              blur: 10,
            },
            color: {
              value: ["#f84444", "#7ceef7", "#9772ee", "#6af39c", "#facc15"],
            },
            shape: {
              type: "circle",
            },
            links: {
              enable: true,
              color: "#f94050",
              distance: 150,
              opacity: 0.3,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              outModes: {
                default: "bounce",
              },
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.5,
                },
              },
              push: {
                quantity: 4,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}