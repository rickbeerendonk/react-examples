import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 9100 },
  build: {
    sourcemap: true
  },
  define: {
    'process.env.NODE_ENV': '"development"'
  }
});
