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

export function InitiativeVaultCaseStudy() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <div className="max-w-3xl">
          <div className="font-code text-xs tracking-[0.22em] text-muted">CASE STUDY</div>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Initiative Vault
          </h1>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Initiative Vault is a tabletop RPG combat tracker built around one idea: speed at the table.
            The work centers on clear workflows, low-friction interaction patterns, and an interface that
            stays readable mid-combat.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://initiative-vault.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent px-5 py-3 font-code text-sm font-semibold text-bg transition-colors hover:bg-accent/90"
            >
              Live app
              <span aria-hidden>↗</span>
            </a>
            <a
              href="https://github.com/gelatinous-labs/initiative-vault"
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
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>Interaction design</Tag>
            <Tag>Workflow UX</Tag>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="max-w-3xl">
            <div className="space-y-10">
              <section>
                <SectionTitle label="01" title="Context" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Combat tracking tools often fail in the moment they’re needed most: they bury the
                    important information under configuration, modal flows, and dense layouts.
                  </p>
                  <p>
                    Initiative Vault focuses on a tight combat loop and an interface that can be read at a
                    glance. The goal is to reduce cognitive load while still supporting real play.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="02" title="Product decisions" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The UI is designed around a small set of high-frequency actions: advancing turns,
                    updating HP, and tracking conditions. Anything else is secondary.
                  </p>
                  <p>
                    The layout favors stable placement (so a user’s eyes don’t hunt) and clear hierarchy
                    (so the active combatant and the next action are always obvious).
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="03" title="Implementation notes" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The frontend is built to keep state transitions explicit and debuggable. Components are
                    structured around composition and predictable props so the feature set can expand
                    without turning the UI into a pile of exceptions.
                  </p>
                  <p>
                    The design system is deliberately small — a few primitives, consistent spacing, and
                    typography that supports scanning.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="04" title="What’s next" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The next phase is deepening the workflow coverage while keeping the core loop fast:
                    more encounter tools, better collaboration, and smarter defaults so the app stays
                    approachable.
                  </p>
                </div>
              </section>
            </div>
          </article>

          <aside className="h-fit border border-border/70 bg-bg/20 p-6">
            <div className="font-code text-[11px] tracking-[0.22em] text-muted">AT A GLANCE</div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">ROLE</div>
                <div className="mt-1 text-text">Builder / designer</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">FOCUS</div>
                <div className="mt-1 text-text">UI workflows · maintainability</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">NOTES</div>
                <div className="mt-1 text-text">No metrics yet (early product)</div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
