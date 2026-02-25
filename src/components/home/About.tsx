import { Container } from '../ui/Container';

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">About</h2>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              I build modern web applications with an emphasis on clarity: predictable data flow, type-safe boundaries, and
              interfaces that feel fast and obvious.
            </p>
            <p>
              I care about the whole loop — product intent, UX, implementation, and long-term maintenance. When projects
              ship, they should keep shipping.
            </p>
            <p>
              Outside of software, I make films and write. That background shapes how I approach software: strong
              structure, pacing, and a sharp edit.
            </p>
          </div>

          <div className="mt-10 border-t border-border/70 pt-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">DEFAULTS</div>
                <div className="mt-2 text-sm text-text">TypeScript · React Router · Vite</div>
              </div>
              <div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">BACKEND</div>
                <div className="mt-2 text-sm text-text">Postgres · Prisma · tRPC</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
