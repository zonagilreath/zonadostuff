import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function ScrollToHash() {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace('#', '');
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });
  }, [location.hash, prefersReducedMotion]);

  return null;
}
