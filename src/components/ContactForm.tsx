import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  Send, ArrowRight, Loader2, Phone, Home, Layers, Droplets,
  AppWindow, CloudLightning, ShieldCheck, HelpCircle, type LucideIcon,
} from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { FloatField, SuccessCheck } from "@/components/FluidField";

const FORM_NAME = "contact";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

// Single-select icon cards. Each `value` is identical to the old <select>
// option value, so the Netlify "service" field receives the same data.
const SERVICE_OPTIONS: { value: string; label: string; icon: LucideIcon }[] = [
  { value: "Roofing", label: "Roofing", icon: Home },
  { value: "Siding", label: "Siding", icon: Layers },
  { value: "Gutters", label: "Gutters", icon: Droplets },
  { value: "Windows", label: "Windows", icon: AppWindow },
  { value: "Storm Damage Restoration", label: "Storm Damage", icon: CloudLightning },
  { value: "Insurance Claim", label: "Insurance Claim", icon: ShieldCheck },
  { value: "Not Sure / Other", label: "Not Sure / Other", icon: HelpCircle },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [submittedName, setSubmittedName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, string> = { "form-name": FORM_NAME };
    data.forEach((v, k) => (payload[k] = String(v)));
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (res.ok) {
        setSubmittedName(formData.name.trim().split(" ")[0]);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="border border-[var(--color-brand)] bg-[var(--color-faint)] p-10 text-center"
        style={{ animation: "rise 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
      >
        <span
          className="mx-auto mb-5 flex h-16 w-16 items-center justify-center"
          style={{ animation: "pop 0.5s cubic-bezier(0.34,1.56,0.64,1) both" }}
        >
          <SuccessCheck />
        </span>
        <h3 className="display text-2xl text-[var(--color-ink)]">
          {submittedName ? `Thank You, ${submittedName}!` : "Thank You!"}
        </h3>
        <p className="mt-3 text-[var(--color-muted-foreground)] leading-relaxed max-w-md mx-auto">
          We've got your request and we'll be in touch shortly to schedule your free inspection.
          Need us sooner? Give us a call and we'll help right away.
        </p>
        <a
          href={`tel:${BUSINESS.phoneE164}`}
          className="group relative mt-6 inline-flex items-center gap-2 overflow-hidden bg-[var(--color-brand)] px-7 py-4 font-display text-sm font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-[var(--color-brand-dark)]"
        >
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md group-hover:[animation:sheen_0.9s_ease]" />
          <Phone size={16} /> {BUSINESS.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Netlify form detection + spam honeypot */}
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      {/* Hidden input mirrors the icon-card selection so Netlify gets "service" */}
      <input type="hidden" name="service" value={formData.service} />

      <div className="grid sm:grid-cols-2 gap-5">
        <FloatField name="name" label="Name" value={formData.name} onChange={handleChange} required autoComplete="name" />
        <FloatField name="phone" label="Phone" type="tel" value={formData.phone} onChange={handleChange} required autoComplete="tel" />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <FloatField name="email" label="Email" type="email" value={formData.email} onChange={handleChange} autoComplete="email" />
        <FloatField name="address" label="City / Address" value={formData.address} onChange={handleChange} autoComplete="street-address" />
      </div>

      {/* Service as single-select icon cards (value submits via hidden input) */}
      <fieldset>
        <legend className="mb-3 block font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted-foreground)]">
          How Can We Help?
        </legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {SERVICE_OPTIONS.map((o) => {
            const active = formData.service === o.value;
            const Icon = o.icon;
            return (
              <button
                key={o.value}
                type="button"
                aria-pressed={active}
                onClick={() =>
                  setFormData((prev) => ({ ...prev, service: active ? "" : o.value }))
                }
                className={`flex flex-col items-start gap-2 rounded-lg border px-3.5 py-3.5 text-left font-sans text-sm transition-all duration-200 active:scale-[0.98] ${
                  active
                    ? "border-[var(--color-brand)] bg-[var(--color-brand)] text-white shadow-[0_10px_24px_-12px_rgba(27,39,205,0.7)]"
                    : "border-[var(--color-border)] bg-[var(--color-faint)] text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:bg-white"
                }`}
              >
                <Icon size={22} className={active ? "text-white" : "text-[var(--color-brand)]"} strokeWidth={1.75} />
                <span className="font-semibold leading-tight">{o.label}</span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <FloatField
        name="message"
        label="Tell us about your project"
        value={formData.message}
        onChange={handleChange}
        textarea
        rows={4}
      />

      {status === "error" && (
        <p className="text-sm text-[var(--color-brand)]">
          Something went wrong sending your message. Please call us at {BUSINESS.phone} and we'll help right away.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary group relative w-full justify-center overflow-hidden disabled:opacity-60"
      >
        <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md group-hover:[animation:sheen_0.9s_ease]" />
        {status === "submitting" ? (
          <><Loader2 size={16} className="animate-spin" /> Sending…</>
        ) : (
          <><Send size={16} /> Request My Free Inspection <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" /></>
        )}
      </button>
      <p className="text-xs text-[var(--color-muted-foreground)] text-center">
        No spam, no obligation. We'll only use your info to get back to you about your project.
      </p>
    </form>
  );
}
