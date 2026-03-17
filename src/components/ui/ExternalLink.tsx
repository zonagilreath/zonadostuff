import type { AnchorHTMLAttributes } from 'react';

/**
 * An anchor that opens in a new tab with screen-reader indication.
 * Adds a visually-hidden "(opens in new tab)" suffix so assistive
 * technology users know the link navigates away.
 */
export function ExternalLink({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a target="_blank" rel="noreferrer" {...props}>
      {children}
      <span className="sr-only"> (opens in new tab)</span>
    </a>
  );
}
