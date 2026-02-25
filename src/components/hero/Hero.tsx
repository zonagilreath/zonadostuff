import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section id="about" className="relative flex min-h-dvh items-center pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="font-code text-xs tracking-[0.22em] text-accent/90">
              ▸ AVAILABLE FOR FREELANCE
            </div>

            <h1 className="mt-5 font-heading text-5xl font-bold tracking-[-0.04em] text-text sm:text-6xl">
              Zona Gilreath
            </h1>

            <div className="mt-4 font-heading text-2xl font-bold tracking-tight text-text/90">
              Full-Stack Engineer
              <span className="ml-1 inline-block h-[1.05em] w-[0.55ch] bg-accent/85 align-[-0.1em]" />
            </div>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              I build type-safe, scalable web applications with React and TypeScript. From healthcare
              platforms processing $2.5B in payments to event-sourced RPG systems — I bring end-to-end
              ownership and a sharp eye for developer experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                variant="primary"
                href="mailto:bryson.gilreath@gmail.com"
                aria-label="Email Zona Gilreath"
              >
                Hire Me →
              </ButtonLink>
              <ButtonLink
                variant="secondary"
                href="https://github.com/ZonaGilreath"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </ButtonLink>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-lg border border-border/70 bg-surface/70 p-5">
              <div className="flex items-center gap-2 border-b border-border/70 pb-3">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                  <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                  <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="ml-2 font-code text-xs text-muted">zona.config.ts</div>
              </div>
              <pre className="mt-4 overflow-x-auto font-code text-sm leading-relaxed text-text">
{`// zona.config.ts
const engineer = {
  name: "Zona Gilreath",
  location: "Austin, TX",
  focus: ["React", "TypeScript", "Node.js"],
  passion: "Building elegant, type-safe UIs",
  available: true,
};

export default engineer;
`}
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

