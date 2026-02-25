import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

export function HomeHero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="font-code text-xs tracking-[0.22em] text-muted">AUSTIN, TX · AVAILABLE FOR SELECT WORK</p>

          <h1 className="mt-6 font-heading text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-6xl">
            Zona Gilreath
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
            Full-stack engineer focused on production React, type-safe APIs, and systems that stay maintainable as they grow.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink variant="primary" href="mailto:bryson.gilreath@gmail.com">
              Email
            </ButtonLink>

            <ButtonLink
              variant="secondary"
              href="/work/initiative-vault"
              aria-label="Read Initiative Vault case study"
            >
              Read case study
            </ButtonLink>

            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text"
              href="https://github.com/ZonaGilreath"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-12 border-t border-border/70 pt-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">PRIMARY</div>
                <div className="mt-2 text-sm text-text">React · TypeScript · PostgreSQL</div>
              </div>
              <div>
                <div className="font-code text-[11px] tracking-[0.22em] text-muted">ALSO</div>
                <div className="mt-2 text-sm text-text">tRPC · Supabase · Docker · CI/CD</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
