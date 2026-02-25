import { Container } from '../ui/Container';
import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';
import { Reveal } from '../ui/Reveal';

const metrics = [
  {
    label: 'Years Experience',
    to: 7,
    decimals: 0,
    format: (v: number) => `${v}+`
  },
  {
    label: 'Monthly Active Users',
    to: 30,
    decimals: 0,
    format: (v: number) => `${v}M`
  },
  {
    label: 'Payments Processed',
    to: 2.5,
    decimals: 1,
    format: (v: number) => `$${v}B`
  },
  {
    label: 'Type-Safe Coverage',
    to: 100,
    decimals: 0,
    format: (v: number) => `${v}%`
  }
] as const;

export function MetricsBar() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, threshold: 0.25 });

  return (
    <section className="border-y border-border/70 bg-surface/25 py-10">
      <Container>
        <div ref={ref} className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {metrics.map((m) => (
            <Reveal key={m.label}>
              <div className="flex flex-col gap-1">
                <div className="font-heading text-3xl font-bold tracking-tight text-text">
                  <MetricValue start={inView} to={m.to} decimals={m.decimals} format={m.format} />
                </div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">
                  {m.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function MetricValue({
  start,
  to,
  decimals,
  format
}: {
  start: boolean;
  to: number;
  decimals: number;
  format: (v: number) => string;
}) {
  const value = useCountUp({ start, to, durationMs: 950, decimals });
  return <span>{format(value)}</span>;
}

