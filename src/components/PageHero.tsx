type PageHeroProps = {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  image?: string;
};

// Compact navy hero used by interior pages. Optional photo background with a
// navy overlay so the white headline stays legible.
export default function PageHero({ eyebrow, title, highlight, subtitle, image }: PageHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-[var(--color-navy)] text-white">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(11,16,32,0.82) 0%, rgba(11,16,32,0.68) 55%, rgba(6,9,18,0.55) 100%)",
            }}
          />
        </>
      )}
      <div className="container-x relative py-20 lg:py-28">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="display text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl">
          {title}{" "}
          {highlight && <span className="text-[var(--color-brand-bright)]">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg text-white/75 leading-relaxed">{subtitle}</p>
        )}
        <div className="mt-8 rule-red" />
      </div>
    </section>
  );
}
