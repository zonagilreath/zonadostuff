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

export function AthenahealthCaseStudy() {
  return (
    <section className="pt-28 pb-20">
      <Container>
        <div className="max-w-3xl">
          <div className="font-code text-xs tracking-[0.22em] text-muted">CASE STUDY</div>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            athenahealth
          </h1>

          <p className="mt-2 font-code text-xs tracking-[0.22em] text-muted">
            Patient Financial Products
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Work centered on production UI flows and type-safe boundaries in a large, compliance-heavy
            environment. This writeup intentionally avoids proprietary details while still describing
            concrete engineering decisions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 border border-border/70 bg-bg/35 px-5 py-3 font-code text-sm font-semibold text-text transition-colors hover:border-accent/30"
            >
              Back
              <span aria-hidden>←</span>
            </Link>
            <a
              href="mailto:bryson.gilreath@gmail.com"
              className="inline-flex items-center gap-2 border border-accent/30 bg-accent px-5 py-3 font-code text-sm font-semibold text-bg transition-colors hover:bg-accent/90"
            >
              Contact
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            <Tag>React</Tag>
            <Tag>TypeScript</Tag>
            <Tag>API contracts</Tag>
            <Tag>Quality</Tag>
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <article className="max-w-3xl">
            <div className="space-y-10">
              <section>
                <SectionTitle label="01" title="Role and scope" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Focus: shipping and maintaining patient-facing and internal financial product flows.
                    The work includes UI architecture, incremental delivery, and collaboration across
                    product, design, and platform teams.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="02" title="Constraints" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Enterprise healthcare software is constraint-driven: compliance requirements, strict
                    reliability expectations, and a large surface area of integrations.
                  </p>
                  <p>
                    Decisions prioritize predictable behavior, auditability, and careful change management
                    over novelty.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="03" title="Engineering decisions" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    The key pattern is type-safe boundaries: clearly defined data contracts, shared types
                    where appropriate, and defensive UI patterns that reduce runtime ambiguity.
                  </p>
                  <p>
                    On the frontend, the emphasis is consistent component composition and testable state
                    transitions so features can be added without regressing existing flows.
                  </p>
                </div>
              </section>

              <section>
                <SectionTitle label="04" title="Outcomes" />
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
                  <p>
                    Outcomes are framed qualitatively here: fewer edge-case failures, more predictable
                    releases, better developer ergonomics, and clearer shared ownership across teams.
                  </p>
                </div>
              </section>
            </div>
          </article>

          <aside className="h-fit border border-border/70 bg-bg/20 p-6">
            <div className="font-code text-[11px] tracking-[0.22em] text-muted">HIGHLIGHTS</div>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">THEME</div>
                <div className="mt-1 text-text">Type-safe boundaries</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">MODE</div>
                <div className="mt-1 text-text">Iterative delivery</div>
              </div>
              <div className="border border-border/70 bg-bg/25 px-3 py-2">
                <div className="font-code text-[10px] tracking-[0.22em] text-muted">PRIORITIES</div>
                <div className="mt-1 text-text">Reliability · quality</div>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
