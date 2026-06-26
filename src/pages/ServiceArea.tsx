import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import AnimatedSection from "@/components/AnimatedSection";
import { BUSINESS, CITIES, IMAGES } from "@/lib/constants";

// Group cities by county for a tidy, scannable hub.
const COUNTIES = [...new Set(CITIES.map((c) => c.county))];

export default function ServiceArea() {
  return (
    <>
      <PageHero
        eyebrow="Service Area"
        title="Proudly Serving"
        highlight="Northeast Ohio."
        subtitle={`Based in ${BUSINESS.address.city}, Choice One Restoration brings expert roofing, siding, gutters, and windows to homeowners across Summit, Medina, Wayne, and Stark counties.`}
        image={IMAGES.commercialRoof}
      />

      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="border border-[var(--color-border)] overflow-hidden mb-12">
            <iframe
              title="Choice One Restoration Northeast Ohio service area"
              src="https://maps.google.com/maps?q=Fairlawn,+OH&z=9&output=embed"
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>

          {COUNTIES.map((county) => (
            <div key={county} className="mb-10">
              <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-[var(--color-ink)] mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-[var(--color-brand)]" />
                {county}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {CITIES.filter((c) => c.county === county).map((c, i) => (
                  <AnimatedSection key={c.slug} delay={(i % 4) * 0.04}>
                    <Link
                      href={`/service-area/${c.slug}`}
                      className="group flex items-center justify-between border border-[var(--color-border)] px-4 py-3 hover:border-[var(--color-brand)] transition-colors"
                    >
                      <span className="font-display text-sm font-extrabold uppercase tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors">
                        {c.name}
                      </span>
                      <ArrowRight size={14} className="text-[var(--color-brand)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          ))}

          <p className="mt-6 text-[var(--color-muted-foreground)] leading-relaxed">
            Don't see your town? We serve many more communities across Northeast Ohio —{" "}
            <a href={`tel:${BUSINESS.phoneE164}`} className="font-semibold text-[var(--color-brand)] hover:underline">
              give us a call
            </a>{" "}
            and we'll let you know how we can help.
          </p>
        </div>
      </section>

      <CallToAction title="Local Pros You Can" highlight="Count On." />
    </>
  );
}
