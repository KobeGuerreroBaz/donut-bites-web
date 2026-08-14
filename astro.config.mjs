import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://donutbitesco.com',
  compressHTML: true,
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  build: {
    assets: '_assets',
  },
});

