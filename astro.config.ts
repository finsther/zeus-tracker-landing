import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  adapter: vercel({
    isr: {
      expiration: 1800,
    },
  }),
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
