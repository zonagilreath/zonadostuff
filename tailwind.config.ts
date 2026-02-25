import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0b',
        surface: '#101114',
        'surface-dark': '#09090b',
        border: 'rgba(255, 255, 255, 0.12)',
        accent: '#ff375f',
        'accent-dim': 'rgba(255, 55, 95, 0.18)',
        text: '#f4f1ea',
        muted: 'rgba(244, 241, 234, 0.66)',
        'muted-bg': 'rgba(255, 255, 255, 0.05)',
        destructive: '#ff375f',
        ring: '#7dd3fc'
      },
      fontFamily: {
        heading: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        code: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        body: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
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
        }
      },
      animation: {
        blink: 'blink 1.05s step-end infinite'
      }
    }
  },
  plugins: []
} satisfies Config;
