"use client";

interface SectionDividerProps {
  flip?: boolean;
  colorFrom?: string;
  colorTo?: string;
}

export default function SectionDivider({
  flip = false,
  colorFrom = "#ff000022",
  colorTo = "#00ccff22",
}: SectionDividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-none"
      style={{ height: "80px", transform: flip ? "scaleX(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-full"
      >
        <defs>
          <linearGradient id={`waveGrad-${flip}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorFrom} />
            <stop offset="50%" stopColor="transparent" />
            <stop offset="100%" stopColor={colorTo} />
          </linearGradient>
        </defs>

        {/* Back wave — dimmer */}
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="rgba(255,255,255,0.03)"
        />

        {/* Front wave — faint gradient stroke */}
        <path
          d="M0,50 C200,10 400,70 600,40 C800,10 1000,70 1200,40 C1300,25 1380,35 1440,30"
          fill="none"
          stroke={`url(#waveGrad-${flip})`}
          strokeWidth="1.5"
          opacity="0.6"
        />

        {/* Middle wave — very subtle */}
        <path
          d="M0,60 C300,20 600,80 900,50 C1100,30 1300,60 1440,50 L1440,80 L0,80 Z"
          fill="rgba(255,255,255,0.015)"
        />
      </svg>
    </div>
  );
}
