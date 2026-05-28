export function ProgressBar({ value = 0, className = "", track = "bg-secondary-fixed" }) {
  return (
    <div className={`w-full h-2.5 ${track} rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-primary rounded-full transition-all duration-700 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
