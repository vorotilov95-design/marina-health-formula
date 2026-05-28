export function Icon({ name, filled = false, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${filled ? "material-filled" : ""} ${className}`}>
      {name}
    </span>
  );
}
