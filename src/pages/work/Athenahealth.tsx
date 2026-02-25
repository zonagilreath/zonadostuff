import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';

export function AthenahealthCaseStudy() {
  return (
    <section className="scroll-mt-24 pt-28 pb-20">
      <Container>
        <div className="font-code text-xs tracking-[0.22em] text-accent/90">▸ CASE STUDY</div>

        <div className="mt-4 flex flex-col gap-3">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            athenahealth — Patient Financial Products
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            Writeup-style case study scaffold. This will become a structured narrative (scope → constraints → decisions →
            outcomes) without relying on proprietary details.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 border border-border/70 bg-bg/35 px-5 py-3 font-code text-sm font-semibold text-text transition-colors hover:border-accent/30"
          >
            Back to work
            <span aria-hidden>←</span>
          </Link>
          <a
            href="mailto:bryson.gilreath@gmail.com"
            className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-code text-sm font-semibold text-bg transition-colors hover:bg-accent/90"
          >
            Contact
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="border border-border/70 bg-bg/20 p-6">
            <h2 className="font-heading text-xl font-bold text-text">Draft structure</h2>
            <div className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
              <p>• Scope + role</p>
              <p>• Constraints (scale, compliance, reliability)</p>
              <p>• What I built (UI flows, APIs, instrumentation)</p>
              <p>• Outcomes (measurable impact, learnings)</p>
            </div>
          </article>

          <aside className="border border-border/70 bg-surface/20 p-6">
            <div className="font-code text-[11px] tracking-[0.22em] text-muted">HIGHLIGHTS</div>
            <div className="mt-4 grid gap-3">
              {[
                { value: '$2.5B', label: 'Annual payments' },
                { value: '30M', label: 'Monthly users' },
                { value: 'GraphQL', label: 'API surface' },
                { value: 'Observability', label: 'Instrumentation' }
              ].map((m) => (
                <div key={m.label} className="border border-border/70 bg-bg/25 px-3 py-2">
                  <div className="font-display text-lg font-bold text-text">{m.value}</div>
                  <div className="mt-0.5 font-code text-[10px] tracking-[0.22em] text-muted">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
