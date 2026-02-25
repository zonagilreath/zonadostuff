import { ButtonLink } from '../ui/Button';
import { Container } from '../ui/Container';

const EMAIL = 'bryson.gilreath@gmail.com';

export function HomeContact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-text sm:text-3xl">Contact</h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            If you’re hiring or you have a project that needs a calm, senior-ish builder, email is best.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink variant="primary" href={`mailto:${EMAIL}`}>
              Email
            </ButtonLink>

            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text"
              href="https://linkedin.com/in/zonagilreath"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

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
            <div className="font-code text-xs tracking-[0.22em] text-muted">{EMAIL}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
