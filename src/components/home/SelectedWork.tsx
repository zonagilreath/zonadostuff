import { Container } from '../ui/Container';

type WorkItem = {
  title: string;
  blurb: string;
  highlights: string[];
  href: string;
};

const work: WorkItem[] = [
  {
    title: 'Initiative Vault',
    blurb: 'A tabletop RPG combat tracker with a focus on speed, clarity, and low-friction flows.',
    highlights: ['React + TypeScript UI system', 'Stateful workflows and UX polish', 'Built for real table use'],
    href: '/work/initiative-vault'
  },
  {
    title: 'athenahealth',
    blurb: 'Enterprise-scale healthcare software: systems design, reliability, and iterative delivery.',
    highlights: ['Type-safe frontend patterns', 'API contracts and DX', 'Quality + automation'],
    href: '/work/athenahealth'
  },
  {
    title: 'Familiar',
    blurb: 'AI-powered D&D 5e encounter generator that produces structured, table-ready run sheets.',
    highlights: ['Deterministic prompt assembly', 'Gemini context caching', 'Local tool-calling over SRD data'],
    href: '/work/familiar'
  }
];

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-20">
      <Container>
        <div className="max-w-3xl">
          <div className="flex items-baseline justify-between gap-6">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Selected work
            </h2>
            <div className="font-code text-xs tracking-[0.22em] text-muted">3 CASE STUDIES</div>
          </div>

          <div className="mt-8 border-t border-border/70">
            {work.map((w) => (
              <a
                key={w.title}
                href={w.href}
                className="group block border-b border-border/70 py-8 transition-colors hover:bg-bg/25"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between gap-6">
                    <div className="font-heading text-xl font-bold tracking-tight text-text">
                      {w.title}
                    </div>
                    <div className="font-code text-xs tracking-[0.22em] text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      READ →
                    </div>
                  </div>

                  <p className="text-base leading-relaxed text-muted">{w.blurb}</p>

                  <div className="flex flex-wrap gap-2">
                    {w.highlights.map((h) => (
                      <span
                        key={`${w.title}-${h}`}
                        className="inline-flex items-center border border-border/70 bg-bg/25 px-2.5 py-1 font-code text-[12px] text-muted transition-colors group-hover:border-accent/30 group-hover:text-text"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
