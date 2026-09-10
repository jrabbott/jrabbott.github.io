import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jrabbott.github.io',
  base: '/',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
  redirects: {
    '/specs/': '/spec/specs/',
    '/management/': '/spec/management/',
    '/comms/': '/spec/comms/',
    '/drivers/': '/spec/drivers/',
    '/blog/posts/ai-accessibility-tool/': '/blog/posts/ai-accessibilty-tool/',
  },
});
