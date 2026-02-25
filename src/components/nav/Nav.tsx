import { useEffect, useMemo, useState } from 'react';

type SectionId = 'about' | 'work' | 'skills' | 'contact';

const navItems: Array<{ id: SectionId; label: string }> = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

function scrollToId(id: SectionId) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<SectionId>('about');

  // Temporary active tracking: basic scroll position heuristic.
  // (Replaced later with IntersectionObserver-based active section tracking.)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const ids: SectionId[] = ['about', 'work', 'skills', 'contact'];
      const current =
        ids
          .map((id) => {
            const el = document.getElementById(id);
            if (!el) return null;
            const rect = el.getBoundingClientRect();
            return { id, top: rect.top };
          })
          .filter(Boolean)
          .sort((a, b) => Math.abs(a!.top) - Math.abs(b!.top))[0]?.id ?? 'about';
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

