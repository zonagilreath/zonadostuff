import { Container } from '../ui/Container';

type Service = {
  title: string;
  description: string;
  deliverables: string[];
};

const services: Service[] = [
  {
    title: 'Full-Stack Development',
    description:
      'End-to-end feature builds from database to UI. React frontends, Node/TypeScript backends, and everything in between.',
    deliverables: ['React + TypeScript', 'tRPC / GraphQL APIs', 'PostgreSQL + Prisma', 'Auth & payments']
  },
  {
    title: 'Frontend Architecture',
    description:
      'Component systems, state management, and build pipelines that scale. I specialize in codebases that need to stay maintainable as teams and features grow.',
    deliverables: ['Design system builds', 'Performance optimization', 'Testing strategy', 'Migration planning']
  },
  {
    title: 'Greenfield Projects',
    description:
      'From zero to deployed. Tech stack selection, infrastructure setup, CI/CD, and a codebase structured to hand off cleanly when the engagement ends.',
    deliverables: ['Architecture decisions', 'Infra + CI/CD', 'Docker + AWS/Vercel', 'Documentation']
  },
  {
    title: 'AI Integration',
    description:
      'Practical LLM integration — RAG pipelines, structured generation, tool-calling, and streaming UIs. Focused on where AI actually adds value.',
    deliverables: ['RAG architecture', 'Vercel AI SDK', 'Prompt engineering', 'MCP / tool-calling']
  }
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-20">
      <Container>
        <p className="font-code text-[11px] tracking-[0.22em] text-accent uppercase">Services</p>
        <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
          What I can build for you
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          I work best on focused, high-impact engagements — typically 1–6 months. Here's what
          I bring to the table.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden border border-border/60 bg-border/30 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col bg-bg p-6 sm:p-8"
            >
              <h3 className="font-heading text-lg font-bold tracking-tight text-text">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {s.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.deliverables.map((d) => (
                  <span
                    key={d}
                    className="inline-flex items-center bg-muted-bg px-2 py-0.5 font-code text-[10px] tracking-wider text-muted"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
