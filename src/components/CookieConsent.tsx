import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "choiceone-cookie-consent";

export default function CookieConsent() {
  // Start hidden so returning (already-consented) visitors never see a flash;
  // reveal after mount only if consent hasn't been recorded yet.
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setShow(true);
    } catch {
      /* localStorage unavailable — just don't show */
    }
  }, []);

  function accept() {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {
      /* ignore */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie notice"
      className="fixed z-[60] bottom-24 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-sm border border-[var(--color-border)] bg-white shadow-2xl p-5"
    >
      <div className="flex items-start gap-3">
        <Cookie size={22} className="mt-0.5 shrink-0 text-[var(--color-brand)]" />
        <div>
          <p className="text-sm text-[var(--color-ink)] leading-relaxed">
            We use cookies to improve your experience on our site. By continuing, you agree to our
            use of cookies.{" "}
            <Link href="/privacy" className="font-semibold text-[var(--color-brand)] hover:underline">
              Learn more
            </Link>
            .
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button onClick={accept} className="btn-primary">
              Accept
            </button>
            <button
              onClick={accept}
              className="font-display text-xs font-extrabold uppercase tracking-wide text-[var(--color-muted-foreground)] hover:text-[var(--color-ink)] transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
