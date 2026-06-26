import type { ReactNode } from "react";
import PageHero from "@/components/PageHero";

// Shared layout for Privacy / Terms / Accessibility pages.
export default function LegalPage({
  eyebrow,
  title,
  highlight,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} highlight={highlight} />
      <section className="bg-white">
        <div className="container-x py-16 lg:py-20">
          <div className="legal-prose max-w-3xl">{children}</div>
        </div>
      </section>
    </>
  );
}
