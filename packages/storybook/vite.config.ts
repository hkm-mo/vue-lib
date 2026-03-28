import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'node:url';
const root = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    dedupe: ['vue'],
  },
  plugins: [vue()],
  build: {
    lib: {
      // Entry point for the library
      entry: resolve(root, 'src/index.ts'),
      name: 'MyLib',
      // Output filename
      fileName: 'my-lib'
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    rolldownOptions: {
      output: {
        strictExecutionOrder: true,
      },
    }
  }
});