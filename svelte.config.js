import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// If deploying to https://<username>.github.io/<repo-name>
			// set base to '/<repo-name>'
			// If deploying to https://<username>.github.io (user/org site), leave as ''
			base: process.env.NODE_ENV === 'production' ? '/portfoliosite' : ''
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Ignore missing pages that are linked but not yet created
				// Check both with and without base path prefix
				const ignoredPaths = ['/careers', '/news', '/contact', '/privacy', '/terms'];
				const shouldIgnore = ignoredPaths.some(p =>
					path.startsWith(p) || path.startsWith('/portfoliosite' + p)
				);
				if (shouldIgnore) {
					console.warn(`Warning: ${path} not found (linked from ${referrer})`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
