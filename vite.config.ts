import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import commonjs from '@rollup/plugin-commonjs';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      outDir: 'dist',
      include: ['src'],
    }),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'file-embedra',
      formats: ['es', 'cjs'],
      fileName: (format) => {
        if (format === 'es') {
          return 'index.js';
        }

        return 'index.cjs';
      },
    },
    rollupOptions: {
      external: ['openai', 'fs'],
    },
  },
});
