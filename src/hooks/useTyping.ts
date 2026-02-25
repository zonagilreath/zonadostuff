import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

export function useTyping(
  text: string,
  options?: {
    startDelayMs?: number;
    charIntervalMs?: number;
  }
) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { startDelayMs = 260, charIntervalMs = 46 } = options ?? {};

  const [value, setValue] = useState(prefersReducedMotion ? text : '');
  const [done, setDone] = useState(prefersReducedMotion);

  useEffect(() => {
    if (prefersReducedMotion) return;

    setValue('');
    setDone(false);

    let index = 0;
    let startTimeout = 0;
    let tickTimeout = 0;

    startTimeout = window.setTimeout(() => {
      const tick = () => {
        index += 1;
        setValue(text.slice(0, index));
        if (index >= text.length) {
          setDone(true);
          return;
        }
        tickTimeout = window.setTimeout(tick, charIntervalMs);
      };
      tick();
    }, startDelayMs);

    return () => {
      window.clearTimeout(startTimeout);
      window.clearTimeout(tickTimeout);
    };
  }, [charIntervalMs, prefersReducedMotion, startDelayMs, text]);

  return { value, done };
}

