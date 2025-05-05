// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://joaquinzxy.github.io',
  base: 'ame-cat-sitter',
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