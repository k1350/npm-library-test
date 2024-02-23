import { defineConfig } from 'tsup';

export default defineConfig({
  target: 'es2020',
  entry: ['src', '!src/**/*.test.*'],
  format: ['cjs', 'esm'],
  clean: true,
  sourcemap: true,
  // フォーマットごとに異なる出力ディレクトリを指定
  esbuildOptions(options, { format }) {
    if (format === 'esm') {
      options.outdir = 'dist/esm';
    } else if (format === 'cjs') {
      options.outdir = 'dist/cjs';
    }
  },
});
