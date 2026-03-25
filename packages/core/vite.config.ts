import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue(),
    dts({
      rollupTypes: true, // Generates a single .d.ts file for the entire library
      insertTypesEntry: true, // Adds "types" line to package.json if missing
      // cleanVueFileName: true, // Removes the .vue extension from declarations
      strictOutput: true, // Ensures that the output .d.ts file is strictly typed
      include: ['src/**/*.ts', 'src/**/*.vue'],
    })
  ],
  build: {
    lib: {
      // Entry point for the library
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLib',
      // Output filename
      fileName: 'my-lib',
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
