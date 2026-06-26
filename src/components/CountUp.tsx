import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Counts up from 0 to `end` when scrolled into view. SSR-safe: renders the
// final value during prerender (good for SEO / no-JS), then animates on the
// client the first time it enters the viewport.
export default function CountUp({
  end,
  suffix = "",
  duration = 1.6,
  decimals = 0,
  className,
}: {
  end: number;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [value, setValue] = useState(end);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setValue(eased * end);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}
