import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Initiative Vault dark theme palette
        bg: '#222325',           // --background
        surface: '#2b2d30',      // --card
        'surface-dark': '#1f2023', // --popover
        border: 'rgba(233, 240, 255, 0.142)', // --border
        accent: '#21c65c',       // --primary-accent (teal)
        'accent-dim': 'rgba(33, 198, 92, 0.15)',
        text: '#fafafa',         // --foreground
        muted: 'rgba(255, 255, 255, 0.6)', // --muted-foreground
        'muted-bg': 'rgba(233, 240, 255, 0.06)', // --muted
        destructive: '#c41e1e',  // --destructive
        ring: '#259ded',         // --ring
      },
      fontFamily: {
        heading: ['"Space Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        code: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        body: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"New Rocker"', 'cursive'] // Initiative Vault display font
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(33,198,92,0.25), 0 0 24px rgba(33,198,92,0.12)',
        hud: '0 2px 17px 0 rgba(0, 0, 0, 0.15), 0 0 7px 0 rgba(0, 0, 0, 0.15)'
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px'
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' }
        },
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(8px)'
          },
          'to': {
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
