import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import { BUSINESS, SERVICES, NAV_LINKS, IMAGES } from "@/lib/constants";

const SOCIALS = [
  { href: BUSINESS.social.facebook, label: "Facebook", Icon: Facebook },
  { href: BUSINESS.social.instagram, label: "Instagram", Icon: Instagram },
].filter((s) => s.href);

const POLICY_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--color-navy)] text-white">
      <div className="container-x py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block bg-white p-3 rounded-md">
              <img
                src={IMAGES.logo}
                alt={`${BUSINESS.name}, Roofing, Siding, Gutters & Windows`}
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Local, family-owned roofing & exterior restoration with expert Amish
              installers, serving Northeast Ohio for 15 years.
            </p>
            {SOCIALS.length > 0 && (
              <div className="mt-5 flex items-center gap-3">
                {SOCIALS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center border border-white/20 text-white/80 hover:bg-[var(--color-brand)] hover:border-[var(--color-brand)] hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)] mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.navTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + service area */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)] mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)] mt-6 mb-3">
              Service Area
            </h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Proudly serving <span className="font-semibold text-white">all of Northeast Ohio</span>:
              Summit, Medina, Wayne &amp; surrounding counties.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-brand)] mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-[var(--color-brand)]" />
                <a href={`tel:${BUSINESS.phoneE164}`} className="hover:text-white">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-[var(--color-brand)]" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-white break-all">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-[var(--color-brand)]" />
                <span>
                  {BUSINESS.address.street}, {BUSINESS.address.city}, {BUSINESS.address.state}{" "}
                  {BUSINESS.address.zip}
                </span>
              </li>
            </ul>
            <Link href="/contact" className="btn-primary mt-6">
              Get a Free Quote
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {POLICY_LINKS.map((p) => (
              <Link key={p.href} href={p.href} className="text-white/60 hover:text-white transition-colors">
                {p.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/60">© {year} {BUSINESS.legalName}. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-5 text-center">
              <span className="font-mono uppercase tracking-[0.18em] text-white/60">
                Locally Owned · Serving Northeast Ohio
              </span>
              <span className="text-white">
                Website by{" "}
                <a
                  href="https://adamloomismarketing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-[var(--color-brand)] transition-colors"
                >
                  Adam Loomis Marketing
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
