import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://chann1337.github.io',
  base: '/Hiroku-Launcher-Web',
});
