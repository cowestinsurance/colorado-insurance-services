import { forwardRef } from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const textareaId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        <label htmlFor={textareaId} className="block text-body-sm font-sans font-semibold text-brand-navy">
          {label}
        </label>
        <textarea
          ref={ref}
          id={textareaId}
          rows={4}
          className={`w-full px-4 py-3 rounded-xl border font-sans text-body text-brand-navy bg-white
            ${error ? "border-red-500 focus:ring-red-500" : "border-neutral-300 focus:border-brand-orange focus:ring-brand-orange"}
            focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-colors placeholder:text-neutral-400 resize-y ${className}`}
          aria-invalid={error ? "true" : "false"}
          {...props}
        />
        {error && (
          <p className="text-body-sm text-red-600 font-sans" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
