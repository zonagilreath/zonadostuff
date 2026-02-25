import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-border/70 py-10">
      <Container>
        <div className="font-code text-xs tracking-[0.22em] text-muted">
          Built with React · © 2026 Zona Gilreath
        </div>
      </Container>
    </footer>
  );
}

