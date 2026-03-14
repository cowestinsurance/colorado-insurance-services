import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = "", id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        <label htmlFor={inputId} className="block text-body-sm font-sans font-semibold text-brand-navy">
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`w-full px-4 py-3 rounded-xl border font-sans text-body text-brand-navy bg-white
            ${error ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:border-brand-orange focus:ring-brand-orange"}
            focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-colors placeholder:text-neutral-400 ${className}`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-body-sm text-red-600 font-sans" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={`${inputId}-helper`} className="text-body-sm text-neutral-500 font-sans">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
