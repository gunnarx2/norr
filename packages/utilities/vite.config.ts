import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/utilities',
  plugins: [
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
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'utilities',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
});
