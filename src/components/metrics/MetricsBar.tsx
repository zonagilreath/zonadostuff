import { Container } from '../ui/Container';

const metrics = [
  { value: '7+', label: 'Years experience' },
  { value: '30M', label: 'Monthly users served' },
  { value: '$2.5B', label: 'Payments processed' },
  { value: '100%', label: 'Type-safe coverage (IV)' }
] as const;

export function MetricsBar() {
  return (
    <section className="border-y border-border/70 bg-surface/15 py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-2">
              <div className="font-display text-3xl font-bold tracking-tight text-text">
                {m.value}
              </div>
              <div className="max-w-[18ch] font-code text-[11px] tracking-[0.22em] text-muted">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
