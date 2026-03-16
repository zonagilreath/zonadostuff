import { Container } from '../ui/Container';

type WorkItem = {
  title: string;
  blurb: string;
  highlights: string[];
  href: string;
};

const work: WorkItem[] = [
  {
    title: 'athenahealth',
    blurb:
      'Lead engineer on patient financial products serving 30M monthly active users. Shipped Card on File, Payment Plans, and Prepayment — directly contributing to $2.5B in annual payments processed.',
    highlights: ['$2.5B annual payment volume', '30M monthly active users', 'Apollo GraphQL · React · TypeScript'],
    href: '/work/athenahealth'
  },
  {
    title: 'Initiative Vault',
    blurb:
      'Founding engineer on a professional-grade tabletop RPG encounter manager. Built the full stack from scratch: event-sourced state, tRPC API, PostgreSQL with RLS auth, and a CI/CD pipeline.',
    highlights: ['Event-sourced architecture', 'tRPC + Zod · Prisma · Supabase', 'Railway + Vercel deploy'],
    href: '/work/initiative-vault'
  },
  {
    title: 'Familiar',
    blurb:
      'An experiment in AI-assisted D&D encounter generation. Explores where LLMs genuinely add value as a supplement — not a replacement — for the human side of running a table. Uses RAG, MCP, and Gemini context caching.',
    highlights: ['RAG + MCP architecture', 'Gemini context caching', 'Local tool-calling over SRD data'],
    href: '/work/familiar'
  },
  {
    title: 'Perspect',
    blurb:
      'A schema-to-code tool that takes Prisma, SQL DDL, or plain English and generates TypeScript types, Zod validators, tRPC routers, and React forms. Type generation is fully deterministic; LLM handles tRPC and form scaffolding via structured IR.',
    highlights: ['Prisma · SQL · Plain English input', 'Vercel AI SDK · streaming', 'Monaco Editor · Next.js 14'],
    href: '/work/perspect'
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
            <div className="font-code text-xs tracking-[0.22em] text-muted">4 CASE STUDIES</div>
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
