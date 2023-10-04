import react from '@astrojs/react';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	build: {
		inlineStylesheets: 'auto'
	},
	vite: {
		resolve: {
			alias: {
				'@components': '/src/components',
				'@layouts': '/src/layouts',
				'@styles': '/src/styles',
				'@assets': '/src/assets',
				'@scripts': '/src/scripts'
			}
		}
	},
	image: {
		domains: ['astro.build'],
		remotePatterns: [{ protocol: 'https' }]
	},
	site: import.meta.env.PROD ? 'https://lolikana.github.io' : undefined,
	base: import.meta.env.PROD ? '/kintetsu-g' : undefined
});
