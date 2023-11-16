import { defineConfig } from 'vite';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/prettier',
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'prettier',
      fileName: 'index',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: ['prettier'],
    },
  },
});
