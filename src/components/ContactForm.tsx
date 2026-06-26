import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/constants";

const FORM_NAME = "contact";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

const inputClass =
  "w-full border border-[var(--color-border)] bg-white px-4 py-3 text-[var(--color-ink)] transition-colors focus:border-[var(--color-brand)] focus-visible:outline-none";
const labelClass =
  "font-mono text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[var(--color-muted-foreground)]";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-[var(--color-brand)] bg-[var(--color-faint)] p-10 text-center">
        <CheckCircle2 className="mx-auto text-[var(--color-brand)]" size={48} />
        <h3 className="mt-4 display text-2xl text-[var(--color-ink)]">Thank You!</h3>
        <p className="mt-3 text-[var(--color-muted-foreground)] leading-relaxed max-w-md mx-auto">
          We've got your request and we'll be in touch shortly to schedule your free inspection.
          Need us sooner? Give us a call at{" "}
          <a href={`tel:${BUSINESS.phoneE164}`} className="font-semibold text-[var(--color-brand)]">
            {BUSINESS.phone}
          </a>
          .
        </p>
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

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="cf-name">Name *</label>
          <input id="cf-name" name="name" required autoComplete="name" className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-phone">Phone *</label>
          <input id="cf-phone" name="phone" type="tel" required autoComplete="tel" className={`mt-1.5 ${inputClass}`} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" className={`mt-1.5 ${inputClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-city">City / Address</label>
          <input id="cf-city" name="address" autoComplete="street-address" className={`mt-1.5 ${inputClass}`} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-service">How Can We Help?</label>
        <select id="cf-service" name="service" defaultValue="" className={`mt-1.5 ${inputClass}`}>
          <option value="" disabled>Select a service…</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.title}>{s.title}</option>
          ))}
          <option value="Insurance Claim">Insurance Claim</option>
          <option value="Not Sure / Other">Not Sure / Other</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-message">Tell Us About Your Project</label>
        <textarea id="cf-message" name="message" rows={4} className={`mt-1.5 ${inputClass} resize-y`} />
      </div>

      {status === "error" && (
        <p className="text-sm text-[var(--color-brand)]">
          Something went wrong sending your message. Please call us at {BUSINESS.phone} and we'll help right away.
        </p>
      )}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full justify-center disabled:opacity-60">
        {status === "submitting" ? "Sending…" : <>Request My Free Inspection <ArrowRight size={16} /></>}
        {status !== "submitting" && <Send size={16} className="sr-only" />}
      </button>
      <p className="text-xs text-[var(--color-muted-foreground)] text-center">
        No spam, no obligation. We'll only use your info to get back to you about your project.
      </p>
    </form>
  );
}
