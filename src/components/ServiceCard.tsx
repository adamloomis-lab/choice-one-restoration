import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { type Service } from "@/lib/constants";
import { SERVICE_ICON } from "@/lib/serviceIcons";

// Photo-led service card: project photo with the icon + name in a brand badge
// overlaid on the image, short description and "Learn More" below. Falls back to
// a branded icon panel if a photo isn't available for the service.
export default function ServiceCard({ service: s }: { service: Service }) {
  const Icon = SERVICE_ICON[s.slug];
  return (
    <Link
      href={`/services/${s.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-[var(--color-border)] bg-white hover:shadow-xl transition-shadow"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--color-navy)]">
        {s.image ? (
          <img
            src={s.image}
            alt={s.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          Icon && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon className="text-white/80" size={56} strokeWidth={1.4} />
            </div>
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        <div className="absolute left-4 bottom-4 flex items-center gap-2">
          {Icon && (
            <span className="flex h-9 w-9 items-center justify-center bg-[var(--color-brand)] text-white">
              <Icon size={18} strokeWidth={1.8} />
            </span>
          )}
          <h3 className="font-display text-lg font-extrabold uppercase tracking-tight text-white drop-shadow">
            {s.navTitle}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="flex-1 text-sm text-[var(--color-muted-foreground)] leading-relaxed">{s.short}</p>
        <span className="mt-4 inline-flex items-center gap-2 font-display text-xs font-extrabold uppercase tracking-wide text-[var(--color-brand)]">
          Learn More <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}
