import type { StorybookConfig } from '@storybook/vue3-vite';

import { dirname } from "path"

import { fileURLToPath } from "url"

/**
* This function is used to resolve the absolute path of a package.
* It is needed in projects that use Yarn PnP or are set up within a monorepo.
*/
function getAbsolutePath(value: string) {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)))
}
const config: StorybookConfig = {
  "stories": [
    "../stories/*.mdx",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-docs'),
    getAbsolutePath('@storybook/addon-onboarding'),
  ],
  "framework": getAbsolutePath('@storybook/vue3-vite'),
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal: async (config) => {
    return {
      ...config,
      plugins: [
        ...(config.plugins || []),
        {
          name: "fix-mdx-react-shim",
          enforce: "pre",
          resolveId(source) {
            if (source.startsWith("file:///") && source.includes("mdx-react-shim.js")) {
              console.log(`Resolving ${source} to ${source.substring(8)}`);
              return source.substring(8);
            }
            return null;
          },
        },
      ],
    };
  },
};
export default config;