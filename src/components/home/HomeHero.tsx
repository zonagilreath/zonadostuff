import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

export function HomeHero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="font-code text-xs tracking-[0.22em] text-ring">AUSTIN, TX · AVAILABLE FOR CONTRACT</p>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl">
            Zona Gilreath
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Lead full-stack engineer. I build production React + TypeScript systems that stay
            maintainable as they grow — from architecture to deployment.
          </p>

          <div className="mt-8 font-code text-xs tracking-[0.22em] text-muted">
            athenahealth&nbsp;&nbsp;·&nbsp;&nbsp;Apple&nbsp;&nbsp;·&nbsp;&nbsp;Gelatinous Labs
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink variant="primary" href="mailto:bryson.gilreath@gmail.com">
              Get in touch
            </ButtonLink>

            <ButtonLink
              variant="secondary"
              href="/work/initiative-vault"
              aria-label="Read Initiative Vault case study"
            >
              See my work
            </ButtonLink>

            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text"
              href="https://linkedin.com/in/zonagilreath"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
