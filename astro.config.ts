import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://claktv.com',
  adapter: vercel({
    isr: {
      expiration: 1800,
    },
  }),
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
