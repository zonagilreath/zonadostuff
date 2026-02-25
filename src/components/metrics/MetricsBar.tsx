import { Container } from '../ui/Container';

const metrics = [
  { value: '7+', label: 'Years Experience' },
  { value: '30M', label: 'Monthly Active Users' },
  { value: '$2.5B', label: 'Payments Processed' },
  { value: '100%', label: 'Type-Safe Coverage' }
];

export function MetricsBar() {
  return (
    <section className="border-y border-border/70 bg-surface/25 py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <div className="font-heading text-3xl font-bold tracking-tight text-text">
                {m.value}
              </div>
              <div className="font-code text-[11px] tracking-[0.22em] text-muted">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

