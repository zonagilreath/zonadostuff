import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages needs /zonadostuff/, but Vercel needs /
  // Vercel sets VERCEL=1 env var during builds
  base: process.env.VERCEL ? '/' : mode === 'production' ? '/zonadostuff/' : '/',
}));
