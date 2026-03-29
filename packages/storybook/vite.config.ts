import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'node:url';

const root = typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  resolve: {
    dedupe: ['vue'],
    preserveSymlinks: true,
  },
  plugins: [
    vue(),
    {
      name: "fix-mdx-react-shim",
      enforce: "pre",
      resolveId(source) {
        if (source.startsWith("file:///") && source.includes("mdx-react-shim.js")) {
          const systemPath = fileURLToPath(source);
          console.log(`Resolving ${source} to ${systemPath}`);
          return systemPath;
        }
        return null;
      },
    },
  ],
  build: {
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});