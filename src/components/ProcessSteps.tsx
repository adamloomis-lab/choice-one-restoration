import { motion, useReducedMotion, type Variants } from "framer-motion";
import { PROCESS } from "@/lib/constants";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const bar: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function ProcessSteps() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white">
      <div className="container-x py-20 lg:py-24">
        <p className="eyebrow mb-3">How It Works</p>
        <h2 className="display text-4xl text-[var(--color-ink)] mb-12">From Inspection to Done</h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={reduce ? undefined : container}
          initial={reduce ? undefined : "hidden"}
          whileInView={reduce ? undefined : "show"}
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROCESS.map((step, i) => (
            <motion.div
              key={step.title}
              variants={reduce ? undefined : card}
              className="group relative overflow-hidden border border-[var(--color-border)] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              {/* Accent bar that draws in left→right, sequenced by the stagger */}
              <motion.span
                aria-hidden="true"
                variants={reduce ? undefined : bar}
                className="absolute left-0 top-0 h-1 w-full origin-left bg-[var(--color-brand)]"
              />
              <span className="font-display text-4xl font-black text-[var(--color-border)] transition-colors duration-300 group-hover:text-[var(--color-brand)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-extrabold uppercase tracking-tight text-[var(--color-ink)] transition-transform duration-300 group-hover:translate-x-1">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
