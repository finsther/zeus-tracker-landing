import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import fs from 'node:fs';
import path from 'node:path';
import type { IncomingMessage, ServerResponse } from 'node:http';
import type { Plugin } from 'vite';

const MIME: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
};

function dummyImages(): Plugin {
  return {
    name: 'serve-dummy-images',
    configureServer(server) {
      server.middlewares.use('/images/dummy', (req: IncomingMessage, res: ServerResponse, next: () => void) => {
        const baseDir = path.join(process.cwd(), 'src/mocks/images');
        const filePath = path.join(baseDir, decodeURIComponent(req.url ?? '/'));

        if (path.relative(baseDir, filePath).startsWith('..') || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
          next();
          return;
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
