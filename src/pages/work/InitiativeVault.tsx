import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/Container';
import { InitiativeVaultDemo } from '../../components/work/InitiativeVaultDemo';

export function InitiativeVaultCaseStudy() {
  return (
    <section className="scroll-mt-24 pt-28 pb-20">
      <Container>
        <div className="font-code text-xs tracking-[0.22em] text-accent/90">▸ CASE STUDY</div>

        <div className="mt-4 flex flex-col gap-3">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-text sm:text-5xl">
            Initiative Vault
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted">
            Visual-first case study scaffold. Add screenshots, short captions, and a walkthrough later—this page is here
            so the site has real navigation and the project can live as a deep link.
          </p>
        </div>

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

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="aspect-[16/10] border border-border/70 bg-surface/15" />
          ))}
        </div>

        <div className="mt-12 border-t border-border/70 pt-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="font-code text-xs tracking-[0.22em] text-accent/90">▸ INTERACTIVE</div>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-text">
                Demo (tucked away)
              </h2>
            </div>
            <div className="font-code text-[11px] tracking-[0.22em] text-muted">Optional</div>
          </div>

          <div className="mt-6">
            <InitiativeVaultDemo />
          </div>
        </div>
      </Container>
    </section>
  );
}
