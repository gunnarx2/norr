import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/components',
  plugins: [
    react({
      babel: {
        babelrc: true,
      },
    }),
    nxViteTsPaths(),
    dts({
      entryRoot: 'src',
      tsconfigPath: path.join(__dirname, 'tsconfig.lib.json'),
    }),
    viteStaticCopy({
      targets: [
        {
          src: './README.md',
          dest: './',
        },
      ],
    }),
  ],
  assetsInclude: ['**/*.md'],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'components',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', '@norr/hooks'],
    },
  },
});
