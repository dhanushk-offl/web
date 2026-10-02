import { fetchPosts } from '#lib/server/medium';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const posts = await fetchPosts(fetch);
		const recentPosts = posts
			.slice(0, 5)
			.map(({ slug, title, date }) => ({ slug, title, date }));
		return { recentPosts };
	} catch {
		return { recentPosts: [] };
	}
};
