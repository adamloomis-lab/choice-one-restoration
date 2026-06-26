import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

// Mobile-only floating "Text Us" button. Opens the phone's native SMS app
// pre-addressed to Renew's number with a pre-filled message — their GHL
// automation handles the reply. The `?&body=` form works on both iOS & Android.
export default function TextUsButton() {
  const href = `sms:${BUSINESS.phoneE164}?&body=${encodeURIComponent(BUSINESS.smsMessage)}`;
  return (
    <a
      href={href}
      aria-label="Text us for a free estimate"
      className="lg:hidden fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-5 py-3.5 font-display text-sm font-extrabold uppercase tracking-wide text-white shadow-2xl ring-2 ring-white/30 active:scale-95 transition-transform"
    >
      <MessageCircle size={18} />
      Text Us
    </a>
  );
}
