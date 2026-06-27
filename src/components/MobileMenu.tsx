import { useEffect, useState } from "react";
import { Link } from "wouter";
import { X, Phone, MapPin, Clock, ArrowRight, Facebook, Instagram } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export interface MobileMenuProps {
  readonly open: boolean;
  readonly onClose: () => void;
}

const a = BUSINESS.address;

// Full-screen, high-trust mobile navigation. Backdrop-blurred dark navy panel
// with a royal-blue glow, staggered link entrance, and prominent contact CTAs.
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", onKey);
      const id = requestAnimationFrame(() => setShown(true));
      return () => {
        cancelAnimationFrame(id);
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
    setShown(false);
    document.body.style.overflow = "";
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="lg:hidden fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-label="Menu">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        className={`relative ml-auto h-full w-full max-w-sm overflow-y-auto bg-[var(--color-navy)] text-white transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Brand glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 50% at 85% 0%, rgba(27,39,205,0.32), transparent 70%)" }}
        />
        <div className="relative flex min-h-full flex-col px-7 pb-10 pt-6">
          <div className="flex items-center justify-between">
            <Logo className="h-12 w-auto brightness-0 invert" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X size={24} />
            </button>
          </div>

          {/* Trust line — real: free, no-pressure inspections */}
          <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--color-brand)] px-3 py-1.5 font-display text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" /> Free Inspections, No Pressure
          </span>

          <nav className="mt-6 flex flex-col">
            {NAV_LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={onClose}
                className={`group flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl font-extrabold uppercase tracking-tight text-white/90 transition-all duration-500 hover:text-[var(--color-brand)] ${
                  shown ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
                }`}
                style={{ transitionDelay: `${120 + i * 70}ms` }}
              >
                {l.label}
                <ArrowRight
                  size={20}
                  className="text-white/30 transition-all group-hover:translate-x-1 group-hover:text-[var(--color-brand)]"
                />
              </Link>
            ))}
          </nav>

          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${
              shown ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: `${120 + NAV_LINKS.length * 70 + 60}ms` }}
          >
            <a
              href={`tel:${BUSINESS.phoneE164}`}
              className="flex items-center justify-center gap-2 rounded-lg bg-[var(--color-brand)] px-6 py-4 font-display text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_22px_rgba(27,39,205,0.4)]"
            >
              <Phone size={18} /> Call {BUSINESS.phone}
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white/80 px-6 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[var(--color-navy)]"
            >
              Request Free Inspection
            </Link>
          </div>

          <div className="mt-auto space-y-3 pt-10 text-sm text-white/70">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0 text-[var(--color-brand)]" />
              {a.street}, {a.city}, {a.state} {a.zip}
            </div>
            <p className="flex items-center gap-3">
              <Clock size={18} className="shrink-0 text-[var(--color-brand)]" /> Mon-Fri 8AM-5PM · Sat by appointment
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Choice One on Facebook" className="flex items-center gap-2 hover:text-white">
                <Facebook size={18} className="shrink-0 text-[var(--color-brand)]" /> Facebook
              </a>
              <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Choice One on Instagram" className="flex items-center gap-2 hover:text-white">
                <Instagram size={18} className="shrink-0 text-[var(--color-brand)]" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
