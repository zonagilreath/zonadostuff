import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section id="about" className="relative flex min-h-[92dvh] scroll-mt-24 items-end pt-28 pb-16">
      <Container>
        <div className="max-w-3xl">
          <div className="font-code text-xs tracking-[0.22em] text-accent/90">▸ AVAILABLE FOR FREELANCE</div>

          <h1 className="mt-6 font-heading text-5xl font-bold tracking-[-0.04em] text-text sm:text-6xl">
            Zona Gilreath
          </h1>

          <div className="mt-4 font-display text-lg font-bold tracking-tight text-text/90">
            Full-Stack Engineer · Freelance & Contract
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted">
            I build production-ready web applications with React and TypeScript. From healthcare platforms processing
            $2.5B in payments to event-sourced RPG systems, I specialize in shipping clean, type-safe UIs and APIs
            fast—without sacrificing reliability.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink
              variant="primary"
              href="mailto:bryson.gilreath@gmail.com"
              aria-label="Email Zona Gilreath"
            >
              Hire Me
            </ButtonLink>
            <ButtonLink variant="secondary" href="/work/initiative-vault">
              Initiative Vault
            </ButtonLink>
            <ButtonLink
              variant="ghost"
              href="https://github.com/ZonaGilreath"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
