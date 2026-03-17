import { Container } from '../ui/Container';
import { ExternalLink } from '../ui/ExternalLink';

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-heading text-xs tracking-[0.08em] text-muted">
            © 2026 Zona Gilreath · Austin, TX
          </div>

          <div className="flex items-center gap-6">
            <a
              className="font-heading text-xs tracking-[0.08em] text-muted hover:text-text transition-colors"
              href="mailto:bryson.gilreath@gmail.com"
            >
              Email
            </a>
            <ExternalLink
              className="font-heading text-xs tracking-[0.08em] text-muted hover:text-text transition-colors"
              href="https://linkedin.com/in/zonagilreath"
            >
              LinkedIn
            </ExternalLink>
            <ExternalLink
              className="font-heading text-xs tracking-[0.08em] text-muted hover:text-text transition-colors"
              href="https://github.com/ZonaGilreath"
            >
              GitHub
            </ExternalLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
