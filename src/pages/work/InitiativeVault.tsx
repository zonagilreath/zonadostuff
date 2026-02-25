import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { Reveal } from '../../components/ui/Reveal';
import { InitiativeVaultDemo } from '../../components/work/InitiativeVaultDemo';

export function InitiativeVaultCaseStudy() {
  return (
    <section className="scroll-mt-24 pt-28 pb-20">
      <Container>
        <Reveal>
          <div className="font-code text-xs tracking-[0.22em] text-accent/90">▸ CASE STUDY</div>
        </Reveal>

        <Reveal delayMs={90}>
          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Initiative Vault
          </h1>
        </Reveal>

        <Reveal delayMs={160}>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted">
            Visual-first case study scaffold. Add screenshots, short captions, and a walkthrough later—this page is
            here so the site has real navigation and the project can live as a deep link.
          </p>
        </Reveal>

        <Reveal delayMs={230}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://initiative-vault.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-code text-sm font-semibold text-bg transition-colors hover:bg-accent/90"
            >
              Try live app
              <span aria-hidden>↗</span>
            </a>
            <a
              href="https://github.com/gelatinous-labs/initiative-vault"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-border/70 bg-bg/35 px-5 py-3 font-code text-sm font-semibold text-text transition-colors hover:border-accent/30"
            >
              View source
              <span aria-hidden>↗</span>
            </a>
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 border border-border/70 bg-bg/0 px-5 py-3 font-code text-sm font-semibold text-muted transition-colors hover:border-accent/30 hover:text-text"
            >
              Back to work
              <span aria-hidden>←</span>
            </Link>
          </div>
        </Reveal>

        <Reveal delayMs={300}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="aspect-[16/10] border border-border/70 bg-surface/25"
                aria-label="Screenshot placeholder"
              />
            ))}
          </div>
        </Reveal>

        <Reveal delayMs={360}>
          <div className="mt-10 border border-border/70 bg-bg/25 p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">INTERACTIVE DEMO</div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Tucked away here (not on the homepage): open when you want to poke at typed event-sourcing + replay.
                </p>
              </div>
              <div className="font-code text-[11px] tracking-[0.22em] text-muted">
                (Optional)
              </div>
            </div>

            <InitiativeVaultDemo />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
