export function Card({ children, className = "", as: Tag = "div" }) {
  return (
    <Tag className={`bg-white-card border border-border-light rounded-xl ${className}`}>
      {children}
    </Tag>
  );
}
