import { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useActiveSection } from '../../hooks/useActiveSection';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useScrolled } from '../../hooks/useScrolled';

type SectionId = 'work' | 'services' | 'about' | 'contact';

const navItems: Array<{ id: SectionId; label: string }> = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

export function Nav() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrolled = useScrolled(12);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const active = useActiveSection<SectionId>(['work', 'services', 'about', 'contact'] as const);

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

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              className={[
                'relative font-heading text-xs tracking-[0.12em] uppercase transition-colors',
                active === item.id ? 'text-text' : 'text-muted hover:text-text'
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}

          <a
            href="mailto:bryson.gilreath@gmail.com"
            className="ml-2 inline-flex items-center gap-2 border border-accent/30 bg-accent px-3.5 py-1.5 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-bg transition-colors hover:bg-accent/90"
          >
            HIRE ME
          </a>
        </nav>

        <button
          className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.12em] text-muted hover:text-text md:hidden"
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
                  'py-3 text-left font-heading text-xs uppercase tracking-[0.12em] transition-colors',
                  active === item.id ? 'text-text' : 'text-muted'
                ].join(' ')}
              >
                {item.label}
              </button>
            ))}

            <div className="mt-2 border-t border-border/70 pt-4">
              <a
                href="mailto:bryson.gilreath@gmail.com"
                className="inline-flex items-center gap-2 border border-accent/30 bg-accent px-4 py-2 font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-bg"
              >
                HIRE ME
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
