import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/eslint-config-eslint-react-typescript',
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
      name: 'eslint-config-eslint-react-typescript',
      fileName: 'index',
      formats: ['cjs'],
    },
    rollupOptions: {
      external: [
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'eslint',
        'eslint-config-prettier',
        'eslint-plugin-import',
        'eslint-plugin-jsx-a11y',
        'eslint-plugin-prettier',
        'eslint-plugin-react',
        'eslint-plugin-react-hooks',
      ],
    },
  },
});
