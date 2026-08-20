import ProgressiveImage from "../components/ProgressiveImage";

type ReferrerPolicy = "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url";

interface Props {
  proxySrc: string;
  fullSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  referrerPolicy?: ReferrerPolicy;
  objectFit?: "cover" | "contain";
}

/**
 * Resolves the proxy and full-size source: if fullSrc ends with "..._proxy.<ext>"
 * it returns the proxy form. Otherwise returns fullSrc unchanged for both.
 */
function splitProxyFull(src: string): { proxy: string; full: string } {
  // Match pattern: name_proxy.<ext> → name.<ext>
  const match = src.match(/^(.+)_proxy(\.[a-zA-Z0-9]+)$/);
  if (match) {
    return { proxy: src, full: `${match[1]}${match[2]}` };
  }
  return { proxy: src, full: src };
}

/**
 * Drop-in <img> replacement for the testimonial/team photos.
 * Renders the proxy immediately, then swaps to the full-size image once
 * the element is in/near the viewport. Speeds up first paint while
 * delivering crisp images to users who linger.
 */
export default function SmartImage({ proxySrc, fullSrc, alt, className, style, referrerPolicy, objectFit }: Props) {
  const { proxy, full } = splitProxyFull(proxySrc || fullSrc);
  return (
    <ProgressiveImage
      proxySrc={proxy}
      fullSrc={full}
      alt={alt}
      className={className}
      style={style}
      referrerPolicy={referrerPolicy}
      objectFit={objectFit}
    />
  );
}