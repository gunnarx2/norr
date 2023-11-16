import { defineConfig } from 'vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/stylelint-styled-jsx',
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'stylelint-styled-jsx',
      fileName: 'index',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [],
    },
  },
});
