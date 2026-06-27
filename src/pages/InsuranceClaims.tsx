import { Link } from "wouter";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Search, FileText, Handshake, Wrench, ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import { BUSINESS, IMAGES, INSURERS } from "@/lib/constants";

const stepsContainer: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const stepCard: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const stepBar: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

const STEPS = [
  {
    icon: Search,
    title: "Free Damage Inspection",
    body: "We climb up and thoroughly inspect your roof, siding, and gutters for storm, wind, and hail damage, then document everything with photos.",
  },
  {
    icon: FileText,
    title: "We File the Documentation",
    body: "We prepare a clear, detailed report of the full scope of damage that you and your insurance company can act on with confidence.",
  },
  {
    icon: Handshake,
    title: "We Meet Your Adjuster",
    body: "We work directly with your insurance adjuster to make sure the claim reflects every bit of the damage. Nothing gets missed or shorted.",
  },
  {
    icon: Wrench,
    title: "We Restore Your Home",
    body: "Once your claim is approved, our expert Amish crews restore your roof, siding, and gutters, and we handle the paperwork through to completion.",
  },
];

export default function InsuranceClaims() {
  const reduce = useReducedMotion();
  return (
    <>
      <PageHero
        eyebrow="Storm & Insurance Claims"
        title="We Handle the Insurance Company,"
        highlight="So You Don't Have To."
        subtitle="Storm or hail damage is stressful enough. We manage the entire insurance claim process, from inspection to documentation to restoration, and we're not afraid to fight for a fair claim."
        image={IMAGES.insurance}
      />

      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed font-medium">
              When other companies told our customers there was no way the insurance company
              would pay for their roof, we weren't afraid to try, and we got them approved.
            </p>
            <p className="mt-5 text-[var(--color-muted-foreground)] leading-relaxed">
              Insurance claims are one of the most stressful parts of dealing with storm damage.
              That's exactly why we take it off your plate. We know what adjusters look for, we
              document the full scope of damage, and we guide you through every step so your
              claim reflects what your home actually needs.
            </p>
          </div>

          <motion.div
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={reduce ? undefined : stepsContainer}
            initial={reduce ? undefined : "hidden"}
            whileInView={reduce ? undefined : "show"}
            viewport={{ once: true, margin: "-100px" }}
          >
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                variants={reduce ? undefined : stepCard}
                className="group relative overflow-hidden border border-[var(--color-border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <motion.span
                  aria-hidden="true"
                  variants={reduce ? undefined : stepBar}
                  className="absolute left-0 top-0 h-1 w-full origin-left bg-[var(--color-brand)]"
                />
                <step.icon className="text-[var(--color-brand)] transition-transform duration-300 group-hover:scale-110" size={30} strokeWidth={1.6} />
                <span className="mt-4 block font-mono text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--color-muted-foreground)]">
                  Step {i + 1}
                </span>
                <h3 className="mt-1 font-display text-lg font-extrabold uppercase tracking-tight text-[var(--color-ink)]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Insurance carriers we work with */}
      <section className="bg-[var(--color-faint)] border-t border-[var(--color-border)]">
        <div className="container-x py-16 lg:py-20">
          <p className="eyebrow mb-3">Carriers</p>
          <h2 className="display text-3xl sm:text-4xl text-[var(--color-ink)]">
            Insurance Companies We Work With
          </h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
            {INSURERS.map((name) => (
              <div
                key={name}
                className="bg-white px-4 py-5 text-center flex items-center justify-center"
              >
                <span className="font-display text-sm font-extrabold uppercase tracking-tight text-[var(--color-ink)]">
                  {name}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[var(--color-muted-foreground)] leading-relaxed">
            Don't see your insurance company? These are just a few of the many carriers we work
            with. <a href={`tel:${BUSINESS.phoneE164}`} className="font-semibold text-[var(--color-brand)] hover:underline">Give us a call</a> and we'll help with your claim.
          </p>
        </div>
      </section>

      {/* Reassurance band */}
      <section className="bg-[var(--color-faint)] border-y border-[var(--color-border)]">
        <div className="container-x py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h2 className="display text-2xl sm:text-3xl text-[var(--color-ink)]">
              Think You Have Storm Damage?
            </h2>
            <p className="mt-3 text-[var(--color-muted-foreground)] leading-relaxed max-w-2xl">
              Damage isn't always visible from the ground. Don't wait until a small leak becomes a
              big problem. Schedule your free, no-obligation inspection today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href={`tel:${BUSINESS.phoneE164}`} className="btn-primary">
              <Phone size={16} /> Call {BUSINESS.phoneSpoken}
            </a>
            <Link href="/contact" className="btn-outline">
              Request Inspection <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CallToAction title="Let Us Take the Stress Out of Your" highlight="Claim." />
    </>
  );
}
