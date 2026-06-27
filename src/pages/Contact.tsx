import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { BUSINESS, CITIES, SERVICE_AREA_CITIES, TESTIMONIALS, IMAGES } from "@/lib/constants";

const mapQuery = encodeURIComponent(
  `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.state} ${BUSINESS.address.zip}`,
);

export default function Contact() {
  const t = TESTIMONIALS[1]; // Mark Roder — strong insurance-claim review
  return (
    <>
      <PageHero
        eyebrow="Free Inspections"
        title="Let's Take Care of Your"
        highlight="Home."
        subtitle="Tell us a little about your project and we'll get right back to you with a free, no-pressure inspection and estimate. Honest answers and a fair price, every time."
        image={IMAGES.homeLuxury}
      />

      <section className="bg-white">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="display text-2xl text-[var(--color-ink)] mb-6">
              Request Your Free Inspection
            </h2>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-[var(--color-faint)] border border-[var(--color-border)] p-7">
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand)] mb-4">
                Get In Touch
              </h3>
              <ul className="space-y-3 text-sm text-[var(--color-ink)]">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 text-[var(--color-brand)]" />
                  <span>
                    {BUSINESS.address.street}
                    <br />
                    {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Phone size={16} className="mt-0.5 text-[var(--color-brand)]" />
                  <a href={`tel:${BUSINESS.phoneE164}`} className="hover:text-[var(--color-brand)]">
                    {BUSINESS.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5 text-[var(--color-brand)]" />
                  <a href={`mailto:${BUSINESS.email}`} className="hover:text-[var(--color-brand)] break-all">
                    {BUSINESS.email}
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Clock size={16} className="mt-0.5 text-[var(--color-brand)]" />
                  <span>Mon-Fri 8AM-5PM · Sat by appointment</span>
                </li>
              </ul>
            </div>

            <div className="border border-[var(--color-brand)] p-7">
              <div className="flex gap-0.5 mb-3 text-[var(--color-brand)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-lg font-extrabold uppercase tracking-tight text-[var(--color-ink)]">
                "Saved us thousands!"
              </p>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                {t.quote}
              </p>
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.15em] text-[var(--color-muted-foreground)]">
                {t.name}
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Map + service area */}
      <section className="bg-[var(--color-faint)] border-t border-[var(--color-border)]">
        <div className="container-x py-16 lg:py-20">
          <p className="eyebrow mb-3">Service Area</p>
          <h2 className="display text-3xl sm:text-4xl text-[var(--color-ink)]">
            Proudly Serving Northeast Ohio
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--color-muted-foreground)] leading-relaxed">
            Based in {BUSINESS.address.city}, we serve homeowners across Summit, Medina, Wayne,
            and surrounding counties, including {SERVICE_AREA_CITIES.slice(0, 8).join(", ")},
            and many more nearby communities.
          </p>
          <div className="mt-8 border border-[var(--color-border)] overflow-hidden">
            <iframe
              title={`Map of ${BUSINESS.name} service area in ${BUSINESS.address.city}, Ohio`}
              src={`https://maps.google.com/maps?q=${mapQuery}&z=10&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/service-area/${c.slug}`}
                className="bg-white border border-[var(--color-border)] px-3 py-1.5 font-mono text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[var(--color-muted-foreground)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
