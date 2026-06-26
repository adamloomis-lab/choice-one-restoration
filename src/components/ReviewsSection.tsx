import { Star, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import CountUp from "@/components/CountUp";
import { BUSINESS, TESTIMONIALS } from "@/lib/constants";

function Stars({ size = 16 }: { size?: number }) {
  return (
    <span className="inline-flex text-[var(--color-brand)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill="currentColor" />
      ))}
    </span>
  );
}

export default function ReviewsSection({ limit = 6 }: { limit?: number }) {
  const reviews = TESTIMONIALS.slice(0, limit);
  return (
    <section className="bg-white">
      <div className="container-x py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">Reviews</p>
            <h2 className="display text-3xl sm:text-4xl text-[var(--color-ink)]">
              Trusted By Northeast Ohio Homeowners
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <CountUp
                end={BUSINESS.rating.value}
                decimals={1}
                className="font-display text-4xl font-black text-[var(--color-ink)] leading-none"
              />
              <div>
                <Stars size={18} />
                <p className="text-sm text-[var(--color-muted-foreground)] mt-0.5">
                  {BUSINESS.rating.count > 0 ? `${BUSINESS.rating.count} Google reviews` : "Rated on Google"}
                </p>
              </div>
            </div>
          </div>
          {BUSINESS.googleBusinessProfile && (
            <a
              href={BUSINESS.googleBusinessProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline self-start lg:self-auto"
            >
              Read All On Google <ArrowRight size={16} />
            </a>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)]">
          {reviews.map((r, i) => (
            <AnimatedSection key={r.name} delay={(i % 3) * 0.06} className="bg-white h-full">
              <figure className="flex h-full flex-col p-7">
                <div className="flex items-center justify-between mb-3">
                  <Stars />
                  <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted-foreground)]">
                    {r.service}
                  </span>
                </div>
                <blockquote className="flex-1 text-[var(--color-ink)] leading-relaxed">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-5 font-display text-sm font-extrabold uppercase tracking-tight text-[var(--color-ink)]">
                  {r.name}
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
