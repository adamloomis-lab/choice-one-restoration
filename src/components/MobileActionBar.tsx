import { Phone, MapPin, FileText } from "lucide-react";
import { Link } from "wouter";
import { BUSINESS } from "../lib/constants";

const a = BUSINESS.address;
const directions =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(`${BUSINESS.name}, ${a.street}, ${a.city}, ${a.state} ${a.zip}`);

// High-end floating action bar: an elevated, blurred dark capsule that stands
// off the edge. Glassy Call + Directions buttons and a glowing royal-blue Quote
// button.
export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 px-3 lg:hidden"
      style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex gap-2 rounded-2xl border border-white/10 bg-[var(--color-navy)]/85 p-2 shadow-[0_14px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <a
          href={`tel:${BUSINESS.phoneE164}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all active:scale-95"
        >
          <Phone size={18} className="text-[var(--color-brand)]" /> Call
        </a>
        <a
          href={directions}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-white/10 py-3.5 font-display text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all active:scale-95"
        >
          <MapPin size={18} className="text-[var(--color-brand)]" /> Directions
        </a>
        <Link
          href="/contact"
          className="group relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-xl bg-[var(--color-brand)] py-3.5 font-display text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_8px_22px_rgba(27,39,205,0.4)] animate-glow-pulse transition-all active:scale-95"
        >
          <span
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md group-hover:[animation:sheen_0.9s_ease]"
            aria-hidden="true"
          />
          <FileText size={18} /> Quote
        </Link>
      </div>
    </nav>
  );
}
