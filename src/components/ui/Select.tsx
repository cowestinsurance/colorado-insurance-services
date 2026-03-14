import { forwardRef } from "react";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: SelectOption[];
  error?: string;
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, placeholder, className = "", id, ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        <label htmlFor={selectId} className="block text-body-sm font-sans font-semibold text-brand-navy">
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`w-full px-4 py-3 rounded-xl border font-sans text-body text-brand-navy bg-white appearance-none
            ${error ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:border-brand-orange focus:ring-brand-orange"}
            focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-colors ${className}`}
          aria-invalid={error ? "true" : "false"}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-body-sm text-red-600 font-sans" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
export default Select;
