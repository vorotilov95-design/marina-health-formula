const badgeStyles = {
  default: "bg-grey-green-status text-graphite",
  soft: "bg-olive-soft text-primary",
  done: "bg-primary-fixed text-on-primary-fixed-variant",
};

export function StatusBadge({ children, variant = "default", className = "" }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full font-label-sm text-label-sm ${badgeStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
