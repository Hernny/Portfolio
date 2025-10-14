import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    css: true,
    exclude: ['node_modules/**', 'tests-e2e/**', 'dist/**', 'out/**']
  },
  esbuild: {
    jsx: 'automatic',
  },
});
