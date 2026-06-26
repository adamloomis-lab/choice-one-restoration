import { Link, useRoute, Redirect } from "wouter";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import { SERVICES } from "@/lib/constants";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const svc = SERVICES.find((s) => s.slug === params?.slug);
  if (!svc) return <Redirect to="/services" />;

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title={svc.title}
        subtitle={svc.short}
        image={svc.image || undefined}
      />

      <section className="bg-white">
        <div className="container-x py-16 lg:py-20 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="text-lg text-[var(--color-ink)] leading-relaxed font-medium">{svc.intro}</p>
            {svc.body.map((p, i) => (
              <p key={i} className="mt-5 text-[var(--color-muted-foreground)] leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <aside className="lg:col-span-1">
            <div className="border border-[var(--color-border)] p-7 sticky top-28">
              <h3 className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-[var(--color-brand)] mb-4">
                What's Included
              </h3>
              <ul className="space-y-3">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-[var(--color-ink)]">
                    <Check size={18} className="mt-0.5 text-[var(--color-brand)] shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn-primary w-full justify-center mt-7">
                Get a Free Quote <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CallToAction title="Let's Talk About Your" highlight="Project." />
    </>
  );
}
