import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, '.'),
      'server-only': resolve(import.meta.dirname, 'tests/server-only.ts'),
    },
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,tsx}'],
    exclude: ['tests/**/__visual_baselines__/**', 'node_modules/**'],
    globals: false,
    css: false,
  },
});
