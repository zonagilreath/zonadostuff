import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

type VariantProp = {
  variant?: Variant;
};

const base =
  'inline-flex items-center justify-center gap-2 border px-4 py-2 ' +
  'font-code text-[11px] font-semibold tracking-[0.22em] transition-colors';

const variants: Record<Variant, string> = {
  primary: 'border-accent/30 bg-accent text-bg hover:bg-accent/90',
  secondary: 'border-border/70 bg-bg/25 text-text hover:border-accent/30',
  ghost: 'border-transparent bg-transparent text-muted hover:text-text'
};

function cx(...parts: Array<string | undefined | null | false>) {
  return parts.filter(Boolean).join(' ');
}

export function Button({
  className,
  variant = 'secondary',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & VariantProp) {
  return <button className={cx(base, variants[variant], className)} {...props} />;
}

export function ButtonLink({
  className,
  variant = 'secondary',
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & VariantProp) {
  return <a className={cx(base, variants[variant], className)} {...props} />;
}
