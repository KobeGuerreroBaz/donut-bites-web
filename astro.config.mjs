import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://donutbitesco.com',
  compressHTML: true,
  output: 'server',
  redirects: {
    // URL anterior de la pagina de Navidad (se renombro para incluir "posadas").
    // Google todavia la tiene indexada; 301 para no mandar a nadie a un 404.
    '/donas-decoradas-para-navidad-monterrey': {
      status: 301,
      destination: '/donas-decoradas-para-navidad-y-posadas-monterrey',
    },
  },
  session: false,
  adapter: cloudflare({
    imageService: 'compile',
  }),
  build: {
    assets: '_assets',
    inlineStylesheets: 'always',
  },
});

