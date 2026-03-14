import Link from "next/link";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

const variantStyles = {
  primary:
    "bg-brand-orange text-white hover:bg-brand-orange-light shadow-sm hover:shadow-md",
  secondary:
    "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
  tertiary: "text-brand-orange hover:text-brand-orange-light font-semibold group",
  ghost: "text-neutral-600 hover:text-brand-navy hover:bg-neutral-100",
};

const sizeStyles = {
  sm: "px-4 py-2 text-body-sm",
  md: "px-6 py-3 text-body",
  lg: "px-8 py-4 text-body-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, className = "", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans font-semibold rounded-xl transition-all duration-200 ease-in-out transform hover:-translate-y-[1px] active:translate-y-0 disabled:opacity-50 disabled:pointer-events-none";
    const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={styles}>
          {children}
          {variant === "tertiary" && (
            <svg
              className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          )}
        </Link>
      );
    }

    return (
      <button ref={ref} className={styles} {...props}>
        {children}
        {variant === "tertiary" && (
          <svg
            className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
