import { defineConfig } from 'vite';
export default defineConfig({
  publicDir: './storybook-static',
  css: {
    preprocessorOptions: {
      less: {}
    }
  },
  server: {
    port: 8006,
  },
});