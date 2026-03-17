import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

const EMAIL = 'bryson.gilreath@gmail.com';

export function HomeContact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <Container>
        <div className="border border-border/60 bg-surface/40 p-8 sm:p-12 lg:p-16">
          <p className="font-code text-[11px] tracking-[0.22em] text-accent uppercase">Get in touch</p>

          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I'm taking on new freelance and contract engagements — React, TypeScript, full-stack,
            API design, AI integration, or greenfield builds. I typically respond within 24 hours.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <ButtonLink variant="primary" href={`mailto:${EMAIL}`} className="sm:px-6 sm:py-3 sm:text-xs">
              Email me directly
            </ButtonLink>

            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text transition-colors"
              href="https://linkedin.com/in/zonagilreath"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text transition-colors"
              href="https://github.com/ZonaGilreath"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>

          <div className="mt-10 border-t border-border/40 pt-6 font-code text-xs tracking-[0.18em] text-muted">
            {EMAIL}
          </div>
        </div>
      </Container>
    </section>
  );
}
