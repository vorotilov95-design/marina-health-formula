import { useState } from "react";

export function FallbackImage({ src, alt, className = "", fallbackClassName = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        aria-label={alt}
        className={`bg-gradient-to-br from-surface-container-low via-secondary-fixed to-olive-soft ${fallbackClassName || className}`}
      />
    );
  }

  return <img alt={alt} className={className} src={src} onError={() => setFailed(true)} />;
}
