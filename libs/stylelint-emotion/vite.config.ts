import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/stylelint-emotion',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: './README.md',
          dest: './',
        },
      ],
    }),
  ],
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
