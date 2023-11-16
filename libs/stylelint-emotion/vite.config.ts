import { defineConfig } from 'vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/stylelint-emotion',
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'stylelint-emotion',
      fileName: 'index',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [],
    },
  },
});
