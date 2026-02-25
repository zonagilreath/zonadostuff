import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function useCountUp(options: {
  start: boolean;
  to: number;
  from?: number;
  durationMs?: number;
  decimals?: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { start, to, from = 0, durationMs = 900, decimals = 0 } = options;

  const [value, setValue] = useState(() => (start || prefersReducedMotion ? to : from));
  const ranRef = useRef(false);

  useEffect(() => {
    if (!start) return;
    if (ranRef.current) return;
    ranRef.current = true;

    if (prefersReducedMotion) {
      setValue(to);
      return;
    }

    let raf = 0;
    let startTs = 0;

    const step = (ts: number) => {
      if (!startTs) startTs = ts;
      const elapsed = ts - startTs;
      const t = Math.min(1, elapsed / durationMs);
      const eased = easeOutCubic(t);
      const next = from + (to - from) * eased;
      const rounded = Number(next.toFixed(decimals));
      setValue(rounded);
      if (t < 1) raf = window.requestAnimationFrame(step);
    };

    raf = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(raf);
  }, [decimals, durationMs, from, prefersReducedMotion, start, to]);

  return value;
}

