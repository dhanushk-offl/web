import { fetchPosts } from '#lib/server/medium';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch, params }) => {
	try {
		const posts = await fetchPosts(fetch);
		const post = posts.find((p) => p.slug === params.slug);
		if (!post) error(404, 'Post not found');
		return { post };
	} catch (err: unknown) {
		// re-throw SvelteKit errors (like 404)
		if (err && typeof err === 'object' && 'status' in err) throw err;
		console.error('[blog slug] error:', err);
		error(500, 'Could not load post.');
	}
};
