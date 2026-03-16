import { Container } from '../ui/Container';

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">About</h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              I build modern web applications with an emphasis on clarity: predictable data flow,
              type-safe boundaries, and interfaces that feel fast and obvious.
            </p>
            <p>
              I care about the whole loop — product intent, UX, implementation, and long-term
              maintenance. When projects ship, they should keep shipping.
            </p>
            <p>
              Previously a lead engineer at athenahealth, where I owned features across a patient
              payments platform at scale, and a frontend contractor at Apple, where I built internal
              tooling that turned user actions into test automation code. That experience shapes how
              I think about systems: clean enough to hand off, reliable enough to trust.
            </p>
            <p>
              Outside of software, I make films and write — which mostly shows up as an obsession
              with structure, pacing, and a sharp edit in the products I build.
            </p>
          </div>

          <div className="mt-10 border-t border-border/70 pt-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">FRONTEND</div>
                <div className="mt-2 text-sm text-text">React · TypeScript · Tailwind · Radix UI</div>
              </div>
              <div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">BACKEND</div>
                <div className="mt-2 text-sm text-text">PostgreSQL · Prisma · tRPC · Node.js</div>
              </div>
              <div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">INFRA</div>
                <div className="mt-2 text-sm text-text">Docker · AWS · GitHub Actions · Vercel</div>
              </div>
              <div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">ALSO</div>
                <div className="mt-2 text-sm text-text">Apollo GraphQL · Supabase · Vitest</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
