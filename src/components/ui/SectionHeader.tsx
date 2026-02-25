export function SectionHeader({
  label,
  title
}: {
  label: string;
  title: string;
}) {
  return (
    <div>
      <div className="font-code text-xs tracking-[0.22em] text-accent/90">{label}</div>
      <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-text">{title}</h2>
    </div>
  );
}
