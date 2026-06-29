import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

type CTAProps = {
  title: string;
  highlight?: string;
  subtitle?: string;
};

// Full-width red CTA band used at the bottom of most pages.
export default function CallToAction({
  title,
  highlight,
  subtitle = "Let's set up a free, no-pressure visit. We'll take a look, answer your questions, and give you an honest estimate. No hard sell, ever.",
}: CTAProps) {
  return (
    <section className="bg-[var(--color-brand)] text-white">
      <div className="container-x py-16 lg:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="display text-3xl sm:text-4xl lg:text-5xl text-white">
            {title}{" "}
            {highlight && (
              <span className="text-white underline underline-offset-[10px] decoration-white/45 decoration-[5px]">
                {highlight}
              </span>
            )}
          </h2>
          <p className="mt-4 text-white/85 text-lg leading-relaxed">{subtitle}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link href="/contact" className="btn-outline-light btn-outline">
            Get My Free Estimate <ArrowRight size={16} />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 bg-[var(--color-ink)] text-white font-display font-extrabold uppercase tracking-wide text-sm px-6 py-[0.9rem] border-2 border-[var(--color-ink)] hover:bg-black transition-colors"
          >
            See What We Do
          </Link>
        </div>
      </div>
    </section>
  );
}
