import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-code text-xs tracking-[0.22em] text-muted">
            © 2026 Zona Gilreath · Austin, TX
          </div>

          <div className="flex items-center gap-6">
            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text transition-colors"
              href="mailto:bryson.gilreath@gmail.com"
            >
              Email
            </a>
            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text transition-colors"
              href="https://linkedin.com/in/zonagilreath"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="font-code text-xs tracking-[0.22em] text-muted hover:text-text transition-colors"
              href="https://github.com/ZonaGilreath"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
