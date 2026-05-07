import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import fs from 'node:fs';
import path from 'node:path';

const MIME: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function dummyImages() {
  return {
    name: 'serve-dummy-images',
    configureServer(server: { middlewares: { use: Function } }) {
      server.middlewares.use('/images/dummy', (req: { url?: string }, res: { setHeader: Function; end: Function }, next: Function) => {
        const baseDir = path.join(process.cwd(), 'src/mocks/images');
        const filePath = path.join(baseDir, decodeURIComponent(req.url ?? '/'));

        if (!filePath.startsWith(baseDir)) {
          return next();
        }

        if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          return next();
        }

        res.setHeader('Content-Type', MIME[path.extname(filePath).toLowerCase()] ?? 'application/octet-stream');
        res.end(fs.readFileSync(filePath));
      });
    },
  };
}

export default defineConfig({
  site: 'https://claktv.com',
  adapter: vercel({
    isr: {
      expiration: 1800,
    },
  }),
  integrations: [icon(), sitemap()],
  vite: {
    plugins: [tailwindcss(), dummyImages()],
  },
});
