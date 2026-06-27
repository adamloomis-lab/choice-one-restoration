import { Link, useRoute, Redirect } from "wouter";
import { Phone, MapPin, ShieldCheck, Hand, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import InspectionCtaTile from "@/components/InspectionCtaTile";
import ReviewsSection from "@/components/ReviewsSection";
import { BUSINESS, SERVICES, CITIES, IMAGES } from "@/lib/constants";

export default function CityDetail() {
  const [, params] = useRoute("/service-area/:slug");
  const city = CITIES.find((c) => c.slug === params?.slug);
  if (!city) return <Redirect to="/service-area" />;

  const mapQuery = encodeURIComponent(`${city.name}, OH`);

  return (
    <>
      <PageHero
        eyebrow={`Serving ${city.county}`}
        title={`Roofing, Siding & Gutters in`}
        highlight={`${city.name}, OH`}
        subtitle={city.intro}
        image={IMAGES.roofing}
      />

      {/* Intro + trust */}
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed font-medium">
              Looking for a roofing, siding, gutter, or window contractor in {city.name}? Choice One
              Restoration is a local, family-owned company with expert Amish installers and 15 years
              of craftsmanship, and we'll handle your insurance claim from start to finish.
            </p>
            <p className="mt-5 text-[var(--color-muted-foreground)] leading-relaxed">
              Whether you need a full roof replacement after a storm, fresh siding to transform your
              home, seamless gutters, or energy-efficient windows, we treat every {city.name} home
              like our own: clean job sites, honest pricing, and a written workmanship warranty on
              every project.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS.phoneE164}`} className="btn-primary">
                <Phone size={16} /> Call {BUSINESS.phoneSpoken}
              </a>
              <Link href="/contact" className="btn-outline">
                Free Inspection <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="border border-[var(--color-border)] p-7">
              <h2 className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand)] mb-4">
                Why {city.name} Chooses Us
              </h2>
              <ul className="space-y-4 text-sm text-[var(--color-ink)]">
                <li className="flex items-start gap-3">
                  <ShieldCheck size={20} className="mt-0.5 text-[var(--color-brand)] shrink-0" />
                  <span>Licensed, insured & A+ BBB rated</span>
                </li>
                <li className="flex items-start gap-3">
                  <Hand size={20} className="mt-0.5 text-[var(--color-brand)] shrink-0" />
                  <span>Expert Amish installation crews</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="mt-0.5 text-[var(--color-brand)] shrink-0" />
                  <span>Local & family-owned, serving {city.county}</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--color-faint)]">
        <div className="container-x py-16 lg:py-20">
          <p className="eyebrow mb-3">What We Do</p>
          <h2 className="display text-3xl sm:text-4xl text-[var(--color-ink)] mb-8">
            Our Services in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.slug} delay={(i % 3) * 0.05} className="h-full">
                <ServiceCard service={s} />
              </AnimatedSection>
            ))}
            <AnimatedSection delay={0.12} className="h-full">
              <InspectionCtaTile />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <ReviewsSection limit={3} />

      {/* Map + nearby */}
      <section className="bg-white border-t border-[var(--color-border)]">
        <div className="container-x py-16 lg:py-20">
          <p className="eyebrow mb-3">Local Service</p>
          <h2 className="display text-3xl text-[var(--color-ink)]">
            Proudly Serving {city.name} & Nearby
          </h2>
          <div className="mt-8 border border-[var(--color-border)] overflow-hidden">
            <iframe
              title={`Map of ${city.name}, Ohio`}
              src={`https://maps.google.com/maps?q=${mapQuery}&z=12&output=embed`}
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
          <div className="mt-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-muted-foreground)] mb-3">
              We Also Serve
            </p>
            <div className="flex flex-wrap gap-2">
              {city.nearby
                .map((n) => CITIES.find((c) => c.name === n))
                .filter((c): c is NonNullable<typeof c> => Boolean(c))
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/service-area/${c.slug}`}
                    className="bg-white border border-[var(--color-border)] px-3 py-1.5 font-display text-xs font-extrabold uppercase tracking-wide text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              <Link
                href="/service-area"
                className="bg-[var(--color-ink)] text-white px-3 py-1.5 font-display text-xs font-extrabold uppercase tracking-wide hover:bg-[var(--color-brand)] transition-colors"
              >
                All Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction title={`Your Trusted ${city.name}`} highlight="Exterior Team." />
    </>
  );
}
