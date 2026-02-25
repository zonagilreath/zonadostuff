import { useMemo, useState } from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { useScrolled } from '../../hooks/useScrolled';

type SectionId = 'about' | 'work' | 'skills' | 'contact';

const navItems: Array<{ id: SectionId; label: string }> = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

export function Nav() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const scrolled = useScrolled(12);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection<SectionId>(['about', 'work', 'skills', 'contact'] as const);

  const scrollToId = (id: SectionId) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  };

  const containerClass = useMemo(() => {
    const base =
      'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ' +
      'supports-[backdrop-filter]:backdrop-blur';
    return scrolled
      ? `${base} border-border/70 bg-bg/75`
      : `${base} border-transparent bg-transparent`;
  }, [scrolled]);

  return (
    <header className={containerClass}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          onClick={() => scrollToId('about')}
          className="font-heading text-base font-bold tracking-tight text-accent hover:text-accent/90"
        >
          {'<ZG />'}
        </button>

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
              <span
                className={[
                  'absolute -bottom-2 left-0 h-px w-full transition-opacity',
                  active === item.id ? 'bg-accent opacity-100' : 'bg-accent opacity-0'
                ].join(' ')}
              />
            </button>
          ))}
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
          </div>
        </div>
      ) : null}
    </header>
  );
}

