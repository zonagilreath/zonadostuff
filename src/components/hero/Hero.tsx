import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { useTyping } from '../../hooks/useTyping';
import { CodeBlock } from '../code/CodeBlock';

export function Hero() {
  const { value } = useTyping('Full-Stack Engineer');

  return (
    <section id="about" className="relative flex min-h-dvh scroll-mt-24 items-center pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <div className="font-code text-xs tracking-[0.22em] text-accent/90">
                ▸ AVAILABLE FOR FREELANCE
              </div>
            </Reveal>

            <Reveal delayMs={90}>
              <h1 className="mt-5 font-heading text-5xl font-bold tracking-[-0.04em] text-text sm:text-6xl">
                Zona Gilreath
              </h1>
            </Reveal>

            <Reveal delayMs={170}>
              <div className="mt-4 font-heading text-2xl font-bold tracking-tight text-text/90">
                {value}
                <span className="ml-1 inline-block h-[1.05em] w-[0.55ch] bg-accent/85 align-[-0.1em] animate-blink" />
              </div>
            </Reveal>

            <Reveal delayMs={240}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                I build type-safe, scalable web applications with React and TypeScript. From healthcare
                platforms processing $2.5B in payments to event-sourced RPG systems — I bring end-to-end
                ownership and a sharp eye for developer experience.
              </p>
            </Reveal>

            <Reveal delayMs={320}>
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
            </Reveal>
          </div>

          <div className="hidden lg:block">
            <Reveal delayMs={250}>
              <CodeBlock filename="zona.config.ts" code={HERO_CODE} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

const HERO_CODE = `// zona.config.ts
const engineer = {
  name: "Zona Gilreath",
  location: "Austin, TX",
  focus: ["React", "TypeScript", "Node.js"],
  passion: "Building elegant, type-safe UIs",
  available: true,
};

export default engineer;
`;

