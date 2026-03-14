interface CardProps {
  variant?: "default" | "outlined" | "colored";
  colorScheme?: "orange" | "navy" | "green" | "beige";
  hover?: boolean;
  className?: string;
  children: React.ReactNode;
}

const colorSchemeMap = {
  orange: "bg-brand-orange text-white",
  navy: "bg-brand-navy text-white",
  green: "bg-brand-green text-white",
  beige: "bg-brand-beige text-brand-navy",
};

export default function Card({
  variant = "default",
  colorScheme,
  hover = true,
  className = "",
  children,
}: CardProps) {
  const base = "rounded-2xl overflow-hidden";
  const variantStyles = {
    default: "bg-white shadow-card",
    outlined: "bg-white border border-neutral-200",
    colored: colorScheme ? colorSchemeMap[colorScheme] : "bg-brand-beige text-brand-navy",
  };
  const hoverStyles = hover
    ? "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
    : "";

  return (
    <div className={`${base} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
