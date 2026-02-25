import { cva, type VariantProps } from '../../utils/cva';

const button = cva(
  'inline-flex items-center justify-center gap-2 border px-4 py-2 font-code text-[11px] font-semibold tracking-[0.22em] transition-colors',
  {
    variants: {
      variant: {
        primary: 'border-accent/30 bg-accent text-bg hover:bg-accent/90',
        secondary: 'border-border/70 bg-bg/25 text-text hover:border-accent/30',
        ghost: 'border-transparent bg-transparent text-muted hover:text-text'
      }
    },
    defaultVariants: {
      variant: 'secondary'
    }
  }
);

export function Button({
  className,
  variant,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button>) {
  return <button className={button({ variant, className })} {...props} />;
}

export function ButtonLink({
  className,
  variant,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof button>) {
  return <a className={button({ variant, className })} {...props} />;
}
