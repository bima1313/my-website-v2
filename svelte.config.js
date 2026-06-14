import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		inlineStyleThreshold: 10240, // 10 KB
		adapter: adapter({
			images: {
				sizes: [640, 750, 828, 1200, 1920],
				minimumCacheTTL: 2592000, // 30 days (1 month)								 
				formats: ['image/avif', 'image/webp'],
				domains: ["ucrjmqloirqtrqxindxn.supabase.co"]
			}
		})
	}
};

export default config;
