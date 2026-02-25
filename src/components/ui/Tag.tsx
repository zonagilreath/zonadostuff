import type { ReactNode } from 'react';

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border/70 bg-surface/40 px-2.5 py-1 font-code text-[12px] text-muted transition-colors hover:border-accent/40 hover:text-text">
      {children}
    </span>
  );
}

