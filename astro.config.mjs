import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://indopensource.org',
  base: process.env.ASTRO_BASE || '/'
});
