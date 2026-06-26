import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "cookie-consent";

export default function CookieConsent() {
  // Start hidden so returning (already-consented) visitors never see a flash;
  // reveal after a short delay only if consent hasn't been recorded yet.
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const timer = setTimeout(() => setShow(true), 700);
        return () => clearTimeout(timer);
      }
    } catch {
      /* localStorage unavailable — just don't show */
    }
  }, []);

  function respond(value: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed z-[60] bottom-24 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm border border-[var(--color-border)] bg-white shadow-2xl p-5"
    >
      <div className="flex items-start gap-3">
        <Cookie size={22} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />
        <div>
          <p className="text-sm text-[var(--color-ink)] leading-relaxed">
            This site uses cookies to keep things running smoothly. We never sell your data.{" "}
            <Link href="/privacy" className="font-semibold text-[var(--color-brand)] hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={() => respond("accepted")} className="btn-primary">
              Got It
            </button>
            <button
              onClick={() => respond("declined")}
              className="font-display text-xs font-extrabold uppercase tracking-wide text-[var(--color-muted-foreground)] hover:text-[var(--color-ink)] transition-colors"
            >
              No Thanks
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
