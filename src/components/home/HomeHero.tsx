import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { ExternalLink } from '../ui/ExternalLink';

export function HomeHero() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="max-w-4xl">
          {/* Availability badge — the first thing a potential client sees */}
          <div className="inline-flex items-center gap-2.5 border border-emerald-500/25 bg-emerald-500/10 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-code text-[11px] tracking-[0.18em] text-emerald-300">
              AVAILABLE FOR CONTRACT
            </span>
          </div>

          <h1 className="mt-8 font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl lg:text-6xl">
            I build production systems<br className="hidden sm:block" />
            <span className="text-muted"> that ship — and keep shipping.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Senior full-stack engineer specializing in React, TypeScript, and Node.js.
            Five years leading patient payment products at athenahealth — $2.5B in annual
            volume, 30M users. Now available for freelance and contract work.
          </p>

          {/* Social proof strip */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-heading text-xs uppercase tracking-[0.12em] text-muted/80">
            <span>athenahealth</span>
            <span className="text-border">·</span>
            <span>Apple</span>
            <span className="text-border">·</span>
            <span>Gelatinous Labs</span>
            <span className="text-border">·</span>
            <span>Austin, TX</span>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink variant="primary" href="mailto:bryson.gilreath@gmail.com">
              Start a conversation
            </ButtonLink>

            <ButtonLink
              variant="secondary"
              href="#work"
              aria-label="View selected work"
            >
              See case studies
            </ButtonLink>

            <div className="flex items-center gap-4 sm:ml-2">
              <ExternalLink
                className="font-heading text-xs uppercase tracking-[0.1em] text-muted hover:text-text transition-colors"
                href="https://linkedin.com/in/zonagilreath"
              >
                LinkedIn ↗
              </ExternalLink>
              <ExternalLink
                className="font-heading text-xs uppercase tracking-[0.1em] text-muted hover:text-text transition-colors"
                href="https://github.com/ZonaGilreath"
              >
                GitHub ↗
              </ExternalLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
