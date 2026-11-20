import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://trialliance.co',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
