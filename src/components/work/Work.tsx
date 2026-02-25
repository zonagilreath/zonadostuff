import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';

type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  metrics?: Array<{ value: string; label: string }>;
  href?: string;
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
      'Tailwind'
    ],
    metrics: [
      { value: 'E2E', label: 'DB → UI types' },
      { value: 'Event-sourced', label: 'State model' },
      { value: 'RLS', label: 'AuthZ' }
    ],
    href: '/work/initiative-vault'
  },
  {
    title: 'Patient Financial Products',
    role: 'Lead MTS · athenahealth',
    period: '2020 — 2025',
    description:
      'Led development of patient payment experiences across a healthcare SaaS platform serving 30M monthly users. Architected GraphQL APIs, built instrumentation frameworks, and shipped features that drove measurable revenue and satisfaction improvements.',
    tags: ['React', 'TypeScript', 'GraphQL', 'Node.js', 'AWS', 'CI/CD', 'HIPAA'],
    metrics: [
      { value: '$2.5B', label: 'Annual payments' },
      { value: '30M', label: 'Monthly users' },
      { value: '96%', label: 'Patient satisfaction' }
    ],
    href: '/work/athenahealth'
  },
  {
    title: 'QA Platform Applications',
    role: 'Front End Lead · Apple',
    period: '2019 — 2020',
    description:
      "Spearheaded internal web applications for Apple's QA processes. Created reusable component libraries, rebuilt UIs for performance, and established documentation standards for international development teams.",
    tags: ['React', 'JavaScript', 'Component libraries', 'Performance']
  }
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="font-code text-xs tracking-[0.22em] text-accent/90">▸ SELECTED WORK</div>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-text">Projects & Experience</h2>
          </div>
        </div>

        <div className="mt-10">
          {projects.map((p) => (
            <article key={p.title} className="border-t border-border/70 py-10">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-heading text-2xl font-bold tracking-tight text-text">{p.title}</h3>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">{p.period}</div>
              </div>

              <div className="mt-1 text-sm font-semibold text-text/90">{p.role}</div>

              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted">{p.description}</p>

              {p.metrics?.length ? (
                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                  {p.metrics.map((m) => (
                    <div key={`${p.title}-${m.label}`} className="border border-border/70 bg-surface/20 px-4 py-3">
                      <div className="font-display text-lg font-bold text-text">{m.value}</div>
                      <div className="mt-1 font-code text-[10px] tracking-[0.22em] text-muted">{m.label}</div>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {p.href ? (
                  <Link
                    to={p.href}
                    className="inline-flex items-center gap-2 border border-border/70 bg-bg/30 px-4 py-2 font-code text-[11px] font-semibold tracking-[0.22em] text-text transition-colors hover:border-accent/30"
                  >
                    READ CASE STUDY
                    <span className="text-accent">↗</span>
                  </Link>
                ) : (
                  <span className="font-code text-[11px] tracking-[0.22em] text-muted">
                    Case study coming later
                  </span>
                )}

                <div className="flex flex-wrap gap-x-3 gap-y-2 font-code text-[11px] tracking-[0.22em] text-muted">
                  {p.tags.map((t) => (
                    <span key={`${p.title}-${t}`} className="border border-border/60 bg-bg/10 px-2 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
