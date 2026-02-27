import { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useActiveSection } from '../../hooks/useActiveSection';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useScrolled } from '../../hooks/useScrolled';

type SectionId = 'about' | 'work' | 'contact';

const navItems: Array<{ id: SectionId; label: string }> = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' }
];

export function Nav() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrolled = useScrolled(12);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const active = useActiveSection<SectionId>(['about', 'work', 'contact'] as const);

  const scrollToId = (id: SectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  const containerClass = useMemo(() => {
    const base =
      'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ' +
      'supports-[backdrop-filter]:backdrop-blur';
    return scrolled
      ? `${base} border-border/70 bg-bg/70`
      : `${base} border-transparent bg-transparent`;
  }, [scrolled]);

  return (
    <header className={containerClass}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-sm font-bold tracking-[-0.02em] text-text hover:text-text/90"
          aria-label="Home"
        >
          ZONA
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={[
                'relative font-code text-xs tracking-[0.22em] transition-colors',
                active === item.id ? 'text-text' : 'text-muted hover:text-text'
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}

          <div className="ml-2 h-4 w-px bg-border/70" aria-hidden />

          <Link
            to="/work/initiative-vault"
            className="font-code text-xs tracking-[0.22em] text-muted hover:text-text"
          >
            IV
          </Link>
          <Link
            to="/work/familiar"
            className="font-code text-xs tracking-[0.22em] text-muted hover:text-text"
          >
            FAMILIAR
          </Link>
          <Link
            to="/work/athenahealth"
            className="font-code text-xs tracking-[0.22em] text-muted hover:text-text"
          >
            ATHENA
          </Link>
        </nav>

        <button
          className="inline-flex items-center gap-2 font-code text-xs tracking-[0.22em] text-muted hover:text-text md:hidden"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileOpen((v) => !v)}
        >
          MENU
          <span className="text-accent">{mobileOpen ? '×' : '≡'}</span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border/70 bg-bg/90 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToId(item.id);
                  setMobileOpen(false);
                }}
                className={[
                  'py-3 text-left font-code text-xs tracking-[0.22em] transition-colors',
                  active === item.id ? 'text-text' : 'text-muted'
                ].join(' ')}
              >
                {item.label}
              </button>
            ))}

            <div className="mt-2 border-t border-border/70 pt-2">
              <Link
                to="/work/initiative-vault"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-left font-code text-xs tracking-[0.22em] text-muted"
              >
                Initiative Vault
              </Link>
              <Link
                to="/work/familiar"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-left font-code text-xs tracking-[0.22em] text-muted"
              >
                Familiar
              </Link>
              <Link
                to="/work/athenahealth"
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-left font-code text-xs tracking-[0.22em] text-muted"
              >
                athenahealth
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
