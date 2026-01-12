import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.config.*',
        'eslint.config.js',
        '**/main.tsx',
        '**/main.jsx',
        '**/vite-env.d.ts'
      ]
    }
  }
});
