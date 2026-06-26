import { Star } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

// Crisp, code-rendered Google rating badge (replaces the washed-out combined
// PNG). Always legible on any background; links to the Google Business Profile.
const GOOGLE_LETTERS: [string, string][] = [
  ["G", "#4285F4"],
  ["o", "#EA4335"],
  ["o", "#FBBC05"],
  ["g", "#4285F4"],
  ["l", "#34A853"],
  ["e", "#EA4335"],
];

export default function GoogleRatingBadge({ className = "" }: { className?: string }) {
  const badge = (
    <div className="inline-flex items-center gap-2.5 bg-white px-4 py-2.5 shadow-sm">
      <span className="font-sans text-base font-semibold leading-none">
        {GOOGLE_LETTERS.map(([ch, color], i) => (
          <span key={i} style={{ color }}>
            {ch}
          </span>
        ))}
      </span>
      <span className="inline-flex text-[#FBBC05]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={15} fill="currentColor" stroke="none" />
        ))}
      </span>
      <span className="text-sm font-bold text-[var(--color-ink)]">
        {BUSINESS.rating.value.toFixed(1)}
      </span>
      {BUSINESS.rating.count > 0 && (
        <span className="text-xs text-[var(--color-muted-foreground)]">
          ({BUSINESS.rating.count})
        </span>
      )}
    </div>
  );

  if (!BUSINESS.googleBusinessProfile) return <div className={className}>{badge}</div>;

  return (
    <a
      href={BUSINESS.googleBusinessProfile}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${BUSINESS.rating.value} out of 5 stars from ${BUSINESS.rating.count} Google reviews`}
      className={className}
    >
      {badge}
    </a>
  );
}
