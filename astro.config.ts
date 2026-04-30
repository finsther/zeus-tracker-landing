import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'hybrid',
  adapter: vercel({
    isr: {
      expiration: 1800,
    },
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
