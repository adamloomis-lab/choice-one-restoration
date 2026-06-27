import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

// Brand-blue CTA tile that balances the 5-service grid (fills the 6th cell) and
// drives free-inspection requests. Used on the Home and Services grids.
export default function InspectionCtaTile() {
  return (
    <Link
      href="/contact"
      className="group relative flex h-full flex-col justify-center overflow-hidden bg-[var(--color-brand)] p-8 text-white"
    >
      <div
        className="absolute inset-0 opacity-[0.12]"
        aria-hidden="true"
        style={{ backgroundImage: "repeating-linear-gradient(135deg,#fff 0 1px,transparent 1px 18px)" }}
      />
      <div className="relative">
        <h3 className="font-display text-2xl font-black uppercase tracking-tight leading-tight">
          Not Sure Where to Start?
        </h3>
        <p className="mt-3 text-white/85 leading-relaxed">
          Get a free, no-pressure inspection and we'll walk you through your options, and handle
          the insurance if there's storm damage.
        </p>
        <span className="mt-6 inline-flex items-center gap-2 bg-white px-5 py-3 font-display text-sm font-extrabold uppercase tracking-wide text-[var(--color-brand)] transition-transform group-hover:translate-x-1">
          Book a Free Inspection <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
