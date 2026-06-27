import { useState } from "react";
import { IMAGES, BUSINESS } from "@/lib/constants";

// Renders the real logo PNG when present; if it 404s (owner hasn't dropped the
// file yet) it falls back to an on-brand text wordmark so nothing looks broken.
export default function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (!failed) {
    return (
      <img
        src={IMAGES.logo}
        alt={`${BUSINESS.name}, Roofing, Siding, Gutters & Windows`}
        className={`${className} object-contain`}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className="flex flex-col leading-none">
      <span className="font-display text-2xl font-black uppercase tracking-tight">
        <span className="text-[var(--color-brand)]">Choice</span>
        <span className="text-[var(--color-ink)]">One</span>
      </span>
      <span className="mt-1 font-mono text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[var(--color-muted-foreground)]">
        Roofing · Siding · Gutters
      </span>
    </span>
  );
}
