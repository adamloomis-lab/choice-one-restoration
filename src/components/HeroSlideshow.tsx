import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

// Cross-fading background slideshow for the home hero. All images are stacked
// absolutely; opacity is toggled to fade between them. Auto-advances on an
// interval, pauses when the tab is hidden, and honors prefers-reduced-motion
// (in which case only the first image renders, statically).
export default function HeroSlideshow({
  images,
  intervalMs = 6000,
}: {
  images: string[];
  intervalMs?: number;
}) {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduce || images.length <= 1) return;
    let id: ReturnType<typeof setInterval> | null = null;
    const start = () => {
      stop();
      id = setInterval(() => setIdx((i) => (i + 1) % images.length), intervalMs);
    };
    const stop = () => {
      if (id) {
        clearInterval(id);
        id = null;
      }
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [images.length, intervalMs, reduce]);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "low"}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
