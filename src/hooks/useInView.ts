import { useCallback, useEffect, useRef, useState } from 'react';

export function useInView<T extends Element>(options?: {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
}) {
  const { root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.15, once = true } =
    options ?? {};

  const [inView, setInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const nodeRef = useRef<T | null>(null);
  const frozenRef = useRef(false);

  const ref = useCallback((node: T | null) => {
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    if (once && frozenRef.current) return;

    const observer = new IntersectionObserver(
      ([next]) => {
        setEntry(next);
        if (next.isIntersecting) {
          setInView(true);
          if (once) frozenRef.current = true;
        } else if (!once) {
          setInView(false);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, root, rootMargin, threshold]);

  return { ref, inView, entry };
}

