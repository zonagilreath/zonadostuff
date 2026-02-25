import type { ReactNode } from 'react';

export function SectionHeader({
  label,
  title,
  right
}: {
  label: string;
  title: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="font-code text-xs tracking-[0.22em] text-accent/90">
          {label}
        </div>
        <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
          {title}
        </h2>
      </div>
      {right ? <div className="text-sm text-muted">{right}</div> : null}
    </div>
  );
}

