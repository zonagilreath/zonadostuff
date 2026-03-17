import { Container } from '../ui/Container';

const stats = [
  { value: '8+', label: 'Years in software' },
  { value: '30M', label: 'Users at scale' },
  { value: '$2.5B', label: 'Annual payment volume' },
  { value: '3', label: 'Production apps shipped' }
];

const techGrid = [
  {
    label: 'FRONTEND',
    items: 'React · TypeScript · Tailwind · Radix UI · Next.js'
  },
  {
    label: 'BACKEND',
    items: 'PostgreSQL · Prisma · tRPC · Node.js · GraphQL'
  },
  {
    label: 'INFRASTRUCTURE',
    items: 'Docker · AWS · GitHub Actions · Vercel · Railway'
  },
  {
    label: 'AI & TOOLING',
    items: 'Vercel AI SDK · Gemini · RAG · MCP · Vitest'
  }
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <Container>
        <p className="font-code text-[11px] tracking-[0.22em] text-accent uppercase">About</p>
        <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
          How I work
        </h2>

        {/* Stats strip */}
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-border/60 bg-border/30 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-bg px-5 py-5 text-center sm:px-6">
              <div className="font-heading text-2xl font-bold text-text sm:text-3xl">{s.value}</div>
              <div className="mt-1 font-code text-[10px] tracking-[0.22em] text-muted uppercase">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-5">
          {/* Bio — takes 3 cols */}
          <div className="space-y-5 text-base leading-relaxed text-muted lg:col-span-3">
            <p>
              I build production web applications with an emphasis on clarity — predictable data flow,
              type-safe boundaries, and interfaces that feel fast and obvious. I care about the whole loop:
              product intent, UX, implementation, and long-term maintenance.
            </p>
            <p>
              Previously a lead engineer at <strong className="text-text font-medium">athenahealth</strong>,
              where I owned features across a patient payments platform at scale, and a frontend contractor
              at <strong className="text-text font-medium">Apple</strong>, where I built internal tooling
              that turned user actions into test automation code.
            </p>
            <p>
              That experience shapes how I approach contract work: I write systems that are clean enough
              to hand off, reliable enough to trust, and documented well enough for the next engineer.
            </p>
          </div>

          {/* Tech grid — takes 2 cols */}
          <div className="space-y-6 lg:col-span-2">
            {techGrid.map((group) => (
              <div key={group.label}>
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">{group.label}</div>
                <div className="mt-2 text-sm leading-relaxed text-text">{group.items}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
