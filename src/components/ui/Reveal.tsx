import type { ReactNode } from 'react';

export function Reveal({ children }: { children: ReactNode; delayMs?: number }) {
  // Visual reset: no staged entrance animation.
  return <>{children}</>;
}
