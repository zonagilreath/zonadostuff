import { Container } from '../ui/Container';

type WorkItem = {
  title: string;
  category: string;
  blurb: string;
  impact?: string;
  highlights: string[];
  href: string;
};

const work: WorkItem[] = [
  {
    title: 'athenahealth',
    category: 'Enterprise · Lead Engineer',
    blurb:
      'Led patient financial products serving 30M monthly active users. Shipped Card on File, Payment Plans, and Prepayment — directly contributing to $2.5B in annual payments processed.',
    impact: '$2.5B annual volume',
    highlights: ['Apollo GraphQL', 'React', 'TypeScript', 'Java Spring Boot', 'HIPAA'],
    href: '/work/athenahealth'
  },
  {
    title: 'Initiative Vault',
    category: 'Startup · Founding Engineer',
    blurb:
      'Built the full stack from scratch for a professional-grade tabletop RPG encounter manager: event-sourced state, tRPC API, PostgreSQL with RLS auth, and a CI/CD pipeline.',
    impact: 'Full-stack ownership',
    highlights: ['Event sourcing', 'tRPC + Zod', 'Prisma', 'Supabase', 'Railway'],
    href: '/work/initiative-vault'
  },
  {
    title: 'Familiar',
    category: 'Experiment · AI/RAG',
    blurb:
      'AI-assisted D&D encounter generation using RAG, MCP tool-calling, and Gemini context caching. Explores where LLMs add real value as a supplement — not a replacement.',
    impact: 'Live demo',
    highlights: ['RAG + MCP', 'Gemini', 'Next.js', 'Vercel AI SDK'],
    href: '/work/familiar'
  },
  {
    title: 'Perspect',
    category: 'Experiment · Dev Tools',
    blurb:
      'Schema-to-code tool: takes Prisma, SQL DDL, or plain English and generates TypeScript types, Zod validators, tRPC routers, and React forms.',
    impact: 'Live demo',
    highlights: ['Prisma', 'SQL', 'Vercel AI SDK', 'Monaco Editor', 'Next.js'],
    href: '/work/perspect'
  }
];

export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-24 py-20">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-code text-[11px] tracking-[0.22em] text-accent uppercase">Portfolio</p>
            <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
              Selected work
            </h2>
          </div>
          <p className="hidden font-code text-xs tracking-[0.22em] text-muted sm:block">
            {work.length} CASE STUDIES
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {work.map((w) => (
            <a
              key={w.title}
              href={w.href}
              className="group relative flex flex-col border border-border/60 bg-surface/50 p-6 transition-all duration-200 hover:border-accent/40 hover:bg-surface/80 sm:p-8"
            >
              {/* Category + Impact row */}
              <div className="flex items-center justify-between gap-4">
                <span className="font-code text-[10px] tracking-[0.22em] text-muted uppercase">
                  {w.category}
                </span>
                {w.impact && (
                  <span className="font-code text-[10px] tracking-[0.22em] text-accent">
                    {w.impact}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="mt-4 font-heading text-xl font-bold tracking-tight text-text sm:text-2xl">
                {w.title}
              </h3>

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {w.blurb}
              </p>

              {/* Tech tags */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {w.highlights.map((h) => (
                  <span
                    key={`${w.title}-${h}`}
                    className="inline-flex items-center bg-muted-bg px-2 py-0.5 font-code text-[10px] tracking-wider text-muted transition-colors group-hover:text-text/80"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 font-code text-xs tracking-[0.22em] text-accent opacity-0 transition-opacity group-hover:opacity-100 sm:bottom-8 sm:right-8">
                VIEW →
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
