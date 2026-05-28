const variants = {
  primary:
    "bg-primary-container hover:bg-primary text-white shadow-sm",
  primarySquare:
    "bg-primary text-white shadow-sm",
  secondary:
    "bg-secondary-fixed hover:bg-secondary-fixed-dim text-primary",
  soft:
    "bg-secondary-container hover:bg-secondary-fixed-dim text-primary",
  outline:
    "border border-border-light bg-white-card text-on-surface-variant",
  link:
    "text-primary hover:underline",
};

const sizes = {
  pill: "w-full py-4 rounded-full font-label-md text-label-md",
  square: "w-full py-4 rounded-xl font-headline-md text-headline-md",
  compact: "w-full py-3 rounded-lg font-label-md text-label-md",
  link: "font-label-md text-label-md",
};

export function Button({
  children,
  className = "",
  variant = "primary",
  size = "pill",
  type = "button",
  ...props
}) {
  return (
    <button
      className={`${variants[variant]} ${sizes[size]} active:scale-[0.98] transition-all duration-150 ${className}`}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
