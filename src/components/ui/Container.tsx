interface ContainerProps {
  variant?: "default" | "narrow" | "wide";
  className?: string;
  children: React.ReactNode;
}

const widthMap = {
  default: "max-w-content",
  narrow: "max-w-narrow",
  wide: "max-w-7xl",
};

export default function Container({ variant = "default", className = "", children }: ContainerProps) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${widthMap[variant]} ${className}`}>
      {children}
    </div>
  );
}
