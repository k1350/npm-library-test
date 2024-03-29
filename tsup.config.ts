import { defineConfig } from 'tsup';

export default defineConfig({
  target: 'es2020',
  entry: ['src', '!src/**/*.test.*'],
  format: ['cjs', 'esm'],
  clean: true,
  sourcemap: true,
});
