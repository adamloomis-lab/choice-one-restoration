import PageHero from "@/components/PageHero";
import CallToAction from "@/components/CallToAction";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import InspectionCtaTile from "@/components/InspectionCtaTile";
import { SERVICES, IMAGES } from "@/lib/constants";

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Exterior Work Built"
        highlight="to Last."
        subtitle="Roofing, siding, gutters, and windows — all handled by one local team with expert Amish installers, from the first inspection to the final cleanup."
        image={IMAGES.commercialRoof}
      />

      <section className="bg-white">
        <div className="container-x py-16 lg:py-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <AnimatedSection key={s.slug} delay={(i % 3) * 0.05} className="h-full">
                <ServiceCard service={s} />
              </AnimatedSection>
            ))}
            <AnimatedSection delay={0.1} className="h-full">
              <InspectionCtaTile />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CallToAction title="Let's Get" highlight="Started." />
    </>
  );
}
