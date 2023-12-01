import commonjs from '@rollup/plugin-commonjs';
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/stylelint-styled-jsx',
  plugins: [
    commonjs(),
    viteStaticCopy({
      targets: [{ src: './README.md', dest: './' }],
    }),
  ],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'stylelint-styled-jsx',
      fileName: 'index',
      formats: ['cjs'],
    },
  },
});
