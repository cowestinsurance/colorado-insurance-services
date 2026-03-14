interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {eyebrow && <span className="eyebrow mb-3 block">{eyebrow}</span>}
      <h2 className="font-serif text-display-sm md:text-display text-brand-navy text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-body-lg text-neutral-500 max-w-2xl font-sans ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
