import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://donutbitesco.com',
  compressHTML: true,
  output: 'server',
  session: false,
  adapter: cloudflare({
    imageService: 'compile',
  }),
  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },
});

