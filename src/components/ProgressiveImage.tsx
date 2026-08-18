import { useEffect, useRef, useState } from "react";

interface ProgressiveImageProps {
  proxySrc: string;
  fullSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  referrerPolicy?: "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";
  /** Seconds before full image starts loading. Default 800ms. */
  prefetchDelay?: number;
  /** If true, proxy image also uses loading=lazy. Default false (proxy always eager). */
  lazy?: boolean;
}

/**
 * Progressive image: shows proxy immediately (high-priority), then loads
 * the full-size version after requestIdleCallback so it does NOT compete
 * for bandwidth with critical resources.
 *
 * Priority order:
 *  1. Proxy — loaded eagerly with fetchPriority=high (unless lazy=true)
 *  2. Full   — loaded after requestIdleCallback / timeout, never blocks proxy
 *  3. Swap   — instant the moment full is ready, no fade delay
 */
export default function ProgressiveImage({
  proxySrc,
  fullSrc,
  alt,
  className,
  style,
  referrerPolicy = "no-referrer",
  prefetchDelay = 800,
  lazy = false,
}: ProgressiveImageProps) {
  const [src, setSrc] = useState(proxySrc);
  const [isFullLoaded, setIsFullLoaded] = useState(false);
  const hasSwapped = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!fullSrc || fullSrc === proxySrc) return;
    if (hasSwapped.current) return;

    const preloadFull = () => {
      if (hasSwapped.current) return;

      const img = new Image();
      img.onload = () => {
        if (!hasSwapped.current) {
          hasSwapped.current = true;
          setSrc(fullSrc);
          setIsFullLoaded(true);
        }
      };
      img.onerror = () => {
        // Keep proxy on error — no flash
      };
      img.src = fullSrc;
    };

    // requestIdleCallback lets the browser finish all critical/proxy loads first.
    const id =
      typeof requestIdleCallback !== "undefined"
        ? requestIdleCallback(preloadFull, { timeout: 5000 })
        : (setTimeout(preloadFull, prefetchDelay) as unknown as number);

    return () => {
      if (typeof requestIdleCallback !== "undefined") cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, [proxySrc, fullSrc, prefetchDelay]);

  return (
    <div ref={containerRef} className={className} style={style}>
      <img
        src={src}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        fetchPriority={lazy ? "auto" : "high"}
        decoding="async"
        className="w-full h-full object-cover"
        referrerPolicy={referrerPolicy}
      />
    </div>
  );
}
