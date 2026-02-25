import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // GitHub Pages deploy path:
  // - dev: /
  // - prod: /<repo>/
  base: mode === 'production' ? '/zonadostuff/' : '/',
}));

