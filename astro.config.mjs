import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://donutbitesco.com',
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});

