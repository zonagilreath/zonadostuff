import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { Tag } from '../ui/Tag';

type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  metrics?: Array<{ value: string; label: string }>;
};

const projects: Project[] = [
  {
    title: 'Initiative Vault',
    role: 'Founding Engineer · Gelatinous Labs',
    period: '2024 — Present',
    description:
      'Architected a professional-grade tabletop RPG encounter management system from scratch. Event-sourced state management, end-to-end type safety, database-enforced authorization, and a polished UI built for complex interactive workflows.',
    tags: [
      'React 19',
      'TypeScript',
      'tRPC',
      'Zod',
      'PostgreSQL',
      'Prisma',
      'Supabase',
      'Radix UI',
      'Tailwind',
      'Vitest'
    ],
    metrics: [
      { value: '100%', label: 'Type-safe coverage' },
      { value: '40%', label: 'Less state complexity' },
      { value: 'E2E', label: 'DB to UI type safety' }
    ]
  },
  {
    title: 'Patient Financial Products',
    role: 'Lead MTS · athenahealth',
    period: '2020 — 2025',
    description:
      'Led development of patient payment experiences across a healthcare SaaS platform serving 30M monthly users. Architected GraphQL APIs, built instrumentation frameworks, and shipped features that drove measurable revenue and satisfaction improvements.',
    tags: ['React', 'TypeScript', 'Apollo GraphQL', 'Node.js', 'AWS', 'CI/CD', 'HIPAA'],
    metrics: [
      { value: '$2.5B', label: 'Annual payments' },
      { value: '38%', label: 'CoF volume growth' },
      { value: '96%', label: 'Patient satisfaction' },
      { value: '15%', label: 'PPY increase' }
    ]
  },
  {
    title: 'QA Platform Applications',
    role: 'Front End Lead · Apple',
    period: '2019 — 2020',
    description:
      "Spearheaded internal web applications for Apple's QA processes. Created reusable component libraries, rebuilt UIs for performance, and established documentation standards for international development teams.",
    tags: ['React', 'JavaScript', 'Component Libraries', 'Performance Optimization']
  }
];

export function Work() {
  return (
    <section id="work" className="py-20">
      <Container>
        <Reveal>
          <SectionHeader label="▸ SELECTED WORK" title="Projects & Experience" />
        </Reveal>

        <div className="mt-10 flex flex-col gap-6">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delayMs={idx * 90}>
              <article className="group relative overflow-hidden border border-border/70 bg-surface/45 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-glow">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent/0 transition-opacity duration-300 group-hover:bg-accent/70" />

                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-text">
                    {p.title}
                  </h3>
                  <div className="font-code text-[11px] tracking-[0.22em] text-muted">
                    {p.period}
                  </div>
                </div>

                <div className="mt-1 text-sm font-semibold text-text/90">{p.role}</div>

                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">
                  {p.description}
                </p>

                {p.metrics?.length ? (
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                    {p.metrics.map((m) => (
                      <div
                        key={`${p.title}-${m.label}`}
                        className="border border-border/70 bg-bg/35 px-3 py-2"
                      >
                        <div className="font-heading text-lg font-bold text-text">{m.value}</div>
                        <div className="mt-0.5 font-code text-[10px] tracking-[0.22em] text-muted">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={`${p.title}-${t}`}>{t}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

