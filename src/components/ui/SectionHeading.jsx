import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";

  return (
    <div className={`mb-14 ${isCenter ? "text-center mx-auto max-w-2xl" : ""}`}>
      <Reveal>
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-accent uppercase mb-4">
          <span className="h-px w-8 bg-gradient-to-r from-primary to-accent2" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
