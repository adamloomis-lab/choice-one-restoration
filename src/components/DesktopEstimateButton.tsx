import { useEffect, useState } from "react";
import { Link } from "wouter";
import { CalendarCheck, ArrowRight } from "lucide-react";

// Desktop-only floating CTA. Fades/slides in only after the user scrolls past
// the hero, so it doesn't compete with the sticky-nav "Get Estimate" up top.
// (Mobile uses the Text Us button instead.)
export default function DesktopEstimateButton() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href="/contact"
      aria-label="Get a free estimate"
      className={`hidden lg:inline-flex fixed bottom-6 right-6 z-50 items-center gap-2 rounded-full bg-[var(--color-brand)] px-6 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-white shadow-2xl ring-2 ring-white/30 transition-all duration-300 hover:bg-[var(--color-brand-dark)] ${
        shown ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <CalendarCheck size={18} />
      Get a Free Estimate
      <ArrowRight size={16} />
    </Link>
  );
}
