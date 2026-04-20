"use client";

const techStack = [
  "Python", "•", "PyTorch", "•", "FastAPI", "•", "Next.js", "•",
  "OpenCV", "•", "YOLOv8", "•", "TypeScript", "•", "Docker", "•",
  "MongoDB", "•", "React", "•", "Node.js", "•", "Scikit-Learn", "•",
  "Computer Vision", "•", "Machine Learning", "•",
];

const repeated = [...techStack, ...techStack]; // duplicate for seamless loop

export default function Marquee() {
  return (
    <div className="w-full overflow-hidden py-4 select-none pointer-events-none" aria-hidden>
      <div className="flex animate-marquee whitespace-nowrap gap-8">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`text-sm font-semibold tracking-widest uppercase ${
              item === "•"
                ? "text-red-500/40"
                : "text-white/10"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
