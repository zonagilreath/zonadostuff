export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="border border-border/60 bg-bg/10 px-2 py-1 font-code text-[11px] tracking-[0.22em] text-muted">
      {children}
    </span>
  );
}
