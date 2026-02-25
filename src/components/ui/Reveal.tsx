import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

export function Reveal({
  children,
  className,
  delayMs = 0
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLDivElement>({ once: true });

  const style: CSSProperties | undefined =
    delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      style={style}
      className={[
        'transition-[opacity,transform] duration-700 ease-out will-change-transform',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
        className
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}

