import { fetchPosts } from '#lib/server/medium';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const posts = await fetchPosts(fetch);
		return {
			posts: posts.map(({ slug, title, date, excerpt }) => ({ slug, title, date, excerpt })),
			error: null
		};
	} catch (err) {
		console.error('[blogs] feed error:', err);
		return { posts: [], error: 'Could not load posts.' };
	}
};
