import { User } from "lucide-react";
import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import AnimatedSection from "@/components/AnimatedSection";
import { TEAM, IMAGES } from "@/lib/constants";

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="Meet the People Behind"
        highlight="Choice One."
        subtitle="We're a local, family-owned company. When you call Choice One, you're working directly with the owners — not a call center."
      />

      <section className="bg-white">
        <div className="container-x py-16 lg:py-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {TEAM.map((m, i) => (
              <AnimatedSection key={m.name} delay={(i % 2) * 0.08} className="h-full">
                <article className="flex h-full flex-col border border-[var(--color-border)] bg-white overflow-hidden">
                  <div className="relative aspect-[4/3] bg-[var(--color-navy)] flex items-center justify-center">
                    {m.photo ? (
                      <img src={m.photo} alt={m.name} className="absolute inset-0 h-full w-full object-cover" />
                    ) : (
                      <User className="text-white/40" size={64} strokeWidth={1.3} />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-[var(--color-ink)]">
                      {m.name}
                    </h2>
                    <p className="mt-1 font-mono text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[var(--color-brand)]">
                      {m.role}
                    </p>
                    <p className="mt-4 text-[var(--color-muted-foreground)] leading-relaxed">{m.bio}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>

          <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
            <div className="aspect-[4/3] overflow-hidden border border-[var(--color-border)]">
              <img
                src={IMAGES.teamCrew}
                alt="The Choice One Restoration team on a roofing project"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="border-l-4 border-[var(--color-brand)] pl-6">
              <p className="text-lg text-[var(--color-ink)] leading-relaxed">
                Behind Bill and Gene is a dedicated team of project specialists and skilled Amish
                installation crews who treat every home like their own — careful, clean, and
                committed to getting it right the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction title="Let's Get to Work on Your" highlight="Home." />
    </>
  );
}
