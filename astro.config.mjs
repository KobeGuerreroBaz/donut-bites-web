import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://donutbitesco.com',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});

