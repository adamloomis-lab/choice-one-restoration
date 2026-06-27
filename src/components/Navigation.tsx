import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Phone } from "lucide-react";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS, BUSINESS } from "@/lib/constants";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-[var(--color-border)] bg-white transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container-x flex items-center justify-between h-24">
        <Link href="/" className="flex items-center">
          <Logo className="h-20 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`font-display text-sm font-bold uppercase tracking-wide transition-colors ${
                isActive(l.href)
                  ? "text-[var(--color-brand)]"
                  : "text-[var(--color-ink)] hover:text-[var(--color-brand)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={`tel:${BUSINESS.phoneE164}`} className="btn-primary">
            <Phone size={16} /> {BUSINESS.phone}
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-[var(--color-ink)]"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={26} />
        </button>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
