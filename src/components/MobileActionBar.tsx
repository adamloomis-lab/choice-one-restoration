import { Phone, MapPin, FileText } from "lucide-react";
import { BUSINESS } from "../lib/constants";

const ACCENT = "var(--color-brand)";
const a = BUSINESS.address;
const directions =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(`${BUSINESS.name}, ${a.street}, ${a.city}, ${a.state} ${a.zip}`);
const items = [
  { href: `tel:${BUSINESS.phoneE164}`, label: "Call", Icon: Phone, ext: false },
  { href: directions, label: "Directions", Icon: MapPin, ext: true },
  { href: "/contact", label: "Quote", Icon: FileText, ext: false },
];

export default function MobileActionBar() {
  return (
    <nav aria-label="Quick actions" className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-white/10 bg-black/92 backdrop-blur-md lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      {items.map(({ href, label, Icon, ext }) => (
        <a key={label} href={href} {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex flex-col items-center justify-center gap-1 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-opacity active:opacity-70">
          <Icon size={20} style={{ color: ACCENT }} aria-hidden="true" />
          {label}
        </a>
      ))}
    </nav>
  );
}
