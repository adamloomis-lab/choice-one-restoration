import { Link } from "wouter";
import { ArrowRight, ShieldCheck, Hammer, BadgeCheck, Phone, Hand, FileCheck2 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CallToAction from "@/components/CallToAction";
import ReviewsSection from "@/components/ReviewsSection";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import CountUp from "@/components/CountUp";
import ServiceCard from "@/components/ServiceCard";
import InspectionCtaTile from "@/components/InspectionCtaTile";
import ProcessSteps from "@/components/ProcessSteps";
import HeroSlideshow from "@/components/HeroSlideshow";
import { BUSINESS, SERVICES, HERO_SLIDES } from "@/lib/constants";

const TRUST = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: BadgeCheck, label: "A+ BBB Rated" },
  { icon: Hammer, label: "15+ Years Experience" },
  { icon: Hand, label: "Expert Amish Installers" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="on-dark relative overflow-hidden bg-[var(--color-navy)] text-white">
        <HeroSlideshow images={[...HERO_SLIDES]} />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(11,16,32,0.82) 0%, rgba(11,16,32,0.70) 50%, rgba(6,9,18,0.55) 100%)",
          }}
        />
        <div className="container-x relative py-20 lg:py-28">
          <p className="eyebrow mb-4">Roofing · Siding · Gutters · Windows</p>
          <h1 className="display text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
            Quality Roofing Solutions for Your{" "}
            <span className="text-[var(--color-brand-bright)]">Home & Business.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
            {BUSINESS.blurb}
          </p>

          {/* Offer chip */}
          <div className="mt-7 inline-flex items-center gap-2 bg-[var(--color-brand)] px-4 py-2">
            <BadgeCheck size={16} />
            <span className="font-display text-sm font-extrabold uppercase tracking-wide">
              Free Inspections. Call Today!
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href={`tel:${BUSINESS.phoneE164}`} className="btn-primary">
              <Phone size={16} /> Call {BUSINESS.phoneSpoken}
            </a>
            <Link href="/contact" className="btn-outline btn-outline-light">
              Get a Free Quote
            </Link>
          </div>

          <div className="mt-10">
            <GoogleRatingBadge />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-white border-b border-[var(--color-border)]">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--color-border)] border-x border-[var(--color-border)]">
          {TRUST.map((t) => (
            <div key={t.label} className="bg-white py-5 px-4 flex items-center justify-center gap-2.5 text-center">
              <t.icon className="text-[var(--color-brand)] shrink-0" size={20} />
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted-foreground)]">
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us + years counter */}
      <section className="bg-white">
        <div className="container-x py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <p className="eyebrow mb-4">Why Neighbors Choose Us</p>
              <h2 className="display text-4xl sm:text-5xl text-[var(--color-ink)]">
                Quality Work.<br />Honest People.
              </h2>
              <p className="mt-6 text-[var(--color-muted-foreground)] text-lg leading-relaxed max-w-lg">
                We're a local, family-owned company, which means no cut corners, no surprise
                charges, and no high-pressure sales. Just skilled Amish craftsmen doing solid
                work you can count on for years to come.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="flex justify-start lg:justify-end">
              <div className="flex items-baseline gap-3">
                <CountUp
                  end={15}
                  suffix="+"
                  className="display text-7xl sm:text-8xl text-[var(--color-brand)]"
                />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-muted-foreground)] max-w-[8rem]">
                  Years of expert craftsmanship
                </span>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-14 grid md:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            <AnimatedSection className="bg-[var(--color-faint)] p-8 lg:p-10">
              <Hand className="text-[var(--color-brand)] mb-4" size={28} />
              <h3 className="font-display text-xl font-extrabold uppercase tracking-tight text-[var(--color-ink)]">
                Expert Amish Craftsmanship
              </h3>
              <p className="mt-3 text-[var(--color-muted-foreground)] leading-relaxed">
                Our skilled Amish crews bring a level of care and attention to detail that's
                getting harder to find. Installed right, the first time.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1} className="bg-[var(--color-brand)] text-white p-8 lg:p-10">
              <ShieldCheck className="mb-4" size={28} />
              <h3 className="font-display text-xl font-extrabold uppercase tracking-tight">
                We Stand Behind Our Work
              </h3>
              <p className="mt-3 text-white/85 leading-relaxed">
                Every project is backed by our written workmanship warranty. If something
                isn't right, we'll make it right. Simple as that.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[var(--color-faint)]">
        <div className="container-x py-20 lg:py-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow mb-3">What We Do</p>
              <h2 className="display text-4xl text-[var(--color-ink)]">Everything Your Home Needs Outside</h2>
            </div>
            <Link
              href="/services"
              className="font-display text-sm font-extrabold uppercase tracking-wide text-[var(--color-brand)] inline-flex items-center gap-2"
            >
              All Services <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.slug} delay={(i % 3) * 0.06} className="h-full">
                <ServiceCard service={s} />
              </AnimatedSection>
            ))}
            <AnimatedSection delay={0.12} className="h-full">
              <InspectionCtaTile />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our process */}
      <ProcessSteps />

      {/* Reviews */}
      <ReviewsSection limit={6} />

      {/* Insurance claims band */}
      <section className="on-dark bg-[var(--color-navy)] text-white">
        <div className="container-x py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 text-[var(--color-brand-bright)]">
              <FileCheck2 size={22} />
              <span className="font-mono text-[0.7rem] font-bold uppercase tracking-[0.18em]">
                Storm & Insurance Claims
              </span>
            </div>
            <h2 className="display text-3xl sm:text-4xl text-white">
              We'll Handle the Insurance Company
            </h2>
            <p className="mt-4 text-white/75 text-lg leading-relaxed">
              When other companies say your claim won't get approved, we're not afraid to fight
              for it. We document the full scope of damage and work directly with your insurer,
              start to finish.
            </p>
          </div>
          <Link href="/insurance-claims" className="btn-primary shrink-0">
            How Claims Work <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CallToAction title="Ready to Love Your" highlight="Home Again?" />
    </>
  );
}
