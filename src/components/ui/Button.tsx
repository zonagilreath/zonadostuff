import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold transition ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg';

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-bg hover:bg-accent/90 active:bg-accent/85 shadow-[0_0_0_1px_rgba(110,231,183,0.35),0_0_22px_rgba(110,231,183,0.18)]',
  secondary:
    'bg-transparent text-text shadow-[0_0_0_1px_rgba(232,232,240,0.12)] hover:shadow-[0_0_0_1px_rgba(110,231,183,0.28)] hover:text-accent',
  ghost: 'bg-transparent text-muted hover:text-text'
};

export function Button({
  variant = 'secondary',
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={[base, variants[variant], className].filter(Boolean).join(' ')} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = 'secondary',
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <a className={[base, variants[variant], className].filter(Boolean).join(' ')} {...props}>
      {children}
    </a>
  );
}

