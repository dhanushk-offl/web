import type { RequestHandler } from './$types';
import { fetchPosts } from '#lib/server/medium';
import { SITE_URL } from '#lib/site';

const staticPaths = ['/', '/projects', '/blogs', '/talks', '/contact'];

function escapeXml(value: string): string {
	return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export const GET: RequestHandler = async ({ fetch }) => {
	let posts;
	try {
		posts = await fetchPosts(fetch);
	} catch (error) {
		console.error('[sitemap] Failed to fetch blog posts:', error);
		return new Response('Sitemap temporarily unavailable', {
			status: 503,
			headers: { 'Retry-After': '3600' }
		});
	}

	const paths = [...staticPaths, ...posts.filter((post) => post.slug).map((post) => `/blogs/${encodeURIComponent(post.slug)}`)];
	const urls = [...new Set(paths)].map((path) => `  <url><loc>${escapeXml(`${SITE_URL}${path}`)}</loc></url>`).join('\n');
	return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
