import { useEffect, useMemo, useState } from 'react';

export function useActiveSection<TId extends string>(
  ids: readonly TId[],
  options?: {
    rootMargin?: string;
    threshold?: number | number[];
  }
) {
  const { rootMargin = '-30% 0px -60% 0px', threshold = [0.15, 0.35, 0.55, 0.75] } =
    options ?? {};

  const [active, setActive] = useState<TId>(ids[0]);

  const thresholds = useMemo(
    () => (Array.isArray(threshold) ? threshold : [threshold]),
    [threshold]
  );

  useEffect(() => {
    const elements = ids
      .map((id) => ({ id, el: document.getElementById(id) }))
      .filter((x): x is { id: TId; el: HTMLElement } => Boolean(x.el));

    if (!elements.length) return;

    const latest = new Map<TId, IntersectionObserverEntry>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id as TId;
          latest.set(id, entry);
        }

        const candidates = Array.from(latest.entries())
          .map(([id, entry]) => ({ id, entry }))
          .filter((x) => x.entry.isIntersecting);

        if (!candidates.length) return;

        candidates.sort((a, b) => {
          if (b.entry.intersectionRatio !== a.entry.intersectionRatio) {
            return b.entry.intersectionRatio - a.entry.intersectionRatio;
          }
          return (
            Math.abs(a.entry.boundingClientRect.top) -
            Math.abs(b.entry.boundingClientRect.top)
          );
        });

        setActive(candidates[0].id);
      },
      { rootMargin, threshold: thresholds }
    );

    for (const { el } of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids, rootMargin, thresholds]);

  return active;
}

