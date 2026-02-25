import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Portfolio palette
        bg: '#0b0c0f',
        surface: '#101218',
        'surface-dark': '#0a0b10',
        border: 'rgba(233, 240, 255, 0.13)',
        accent: '#ff375f',
        'accent-dim': 'rgba(255, 55, 95, 0.16)',
        text: 'rgba(255, 255, 255, 0.94)',
        muted: 'rgba(255, 255, 255, 0.62)',
        'muted-bg': 'rgba(233, 240, 255, 0.06)',
        destructive: '#ff375f',
        ring: '#7dd3fc'
      },
      fontFamily: {
        heading: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        code: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        body: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      boxShadow: {
        hud: '0 2px 17px 0 rgba(0, 0, 0, 0.15), 0 0 7px 0 rgba(0, 0, 0, 0.15)'
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '8px',
        lg: '10px',
        xl: '12px'
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(8px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        blink: 'blink 1.05s step-end infinite',
        'fade-in-up': 'fade-in-up 0.15s ease-out'
      }
    }
  },
  plugins: []
} satisfies Config;
