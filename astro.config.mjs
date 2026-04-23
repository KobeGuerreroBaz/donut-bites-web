import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.donutbites.co',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});
