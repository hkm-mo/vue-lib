import type { Preview } from "@storybook/vue3";
// Import global CSS from core if you have any
// import "@my-lib/core/dist/style.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
