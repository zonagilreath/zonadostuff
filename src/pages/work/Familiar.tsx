import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center border border-border/70 bg-bg/25 px-2.5 py-1 font-code text-[12px] text-muted">
      {children}
    </span>
  );
}

function SectionTitle({ label, title }: { label: string; title: string }) {
  return (
    <div>
      <div className="font-code text-xs tracking-[0.22em] text-muted">{label}</div>
      <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

export function FamiliarCaseStudy() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <div className="max-w-3xl">
          <div className="font-code text-xs tracking-[0.22em] text-muted">CASE STUDY</div>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Familiar
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Familiar is an AI-powered D&D 5e encounter generator for dungeon masters. It takes optional
            form input and produces a structured, ready-to-run encounter sheet: goal and stakes up top,
            then setup, then type-specific content like rosters, puzzles, NPC profiles, and traps.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://familiar-encounters.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent px-5 py-3 font-code text-sm font-semibold text-bg transition-colors hover:bg-accent/90"
            >
              Live app
              <span aria-hidden>↗</span>
            </a>
            <a
              href="https://github.com/zonagilreath/familiar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border/70 bg-bg/35 px-5 py-3 font-code text-sm font-semibold text-text transition-colors hover:border-accent/30"
            >
              Source
              <span aria-hidden>↗</span>
            </a>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 border border-border/70 bg-transparent px-5 py-3 font-code text-sm font-semibold text-muted transition-colors hover:border-accent/30 hover:text-text"
            >
              Back
              <span aria-hidden>←</span>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <Tag>Next.js</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Gemini</Tag>
            <Tag>Structured JSON</Tag>
            <Tag>Tool calling</Tag>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="max-w-3xl">
            <div className="space-y-10">
              <section>
                <SectionTitle label="01" title="Constraints" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The core constraint is output quality under uncertainty: everything in the form is
                    optional, but the result still needs to be a complete encounter a DM can run.
                  </p>
                  <p>
                    The second constraint is reliability: the UI should render from structured data rather
                    than parsing freeform text.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="02" title="Generation pipeline" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The request flow is designed as a predictable pipeline: the server assembles a
                    deterministic prompt from the form input, calls the model with a cached SRD context,
                    and uses tool calling to fetch creatures and spells on demand.
                  </p>
                  <p>
                    The model returns JSON matching a discriminated union. The response is validated and
                    then rendered as a run sheet optimized for at-the-table scanning.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="03" title="SRD strategy" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The SRD is split into two tiers: a smaller inline context (rules and guidelines) that
                    stays cached, and a larger tool-backed dataset for creatures and spells. This keeps the
                    context window manageable while still letting the model pull specific stat blocks.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="04" title="Tradeoffs" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The generation endpoint buffers a complete JSON response rather than streaming partial
                    text. That choice simplifies the client and improves reliability, at the cost of a
                    longer wait before the first pixels update.
                  </p>
                </div>
              </section>
            </div>
          </article>

          <aside className="h-fit border border-border/70 bg-bg/20 p-6">
            <div className="font-code text-[11px] tracking-[0.22em] text-muted">AT A GLANCE</div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">THEME</div>
                <div className="mt-1 text-text">Thoughtful AI integration</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">OUTPUT</div>
                <div className="mt-1 text-text">Structured encounter run sheet</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">NOTE</div>
                <div className="mt-1 text-text">Hobby project, production-style rigor</div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
