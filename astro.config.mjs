// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Assuming your repo name is "joaquinzxy.github.io" with content in the root
  // If your repo is "your-repo-name", use "/your-repo-name"
  base: '/',
  outDir: 'docs',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});