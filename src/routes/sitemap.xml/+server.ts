import type { RequestHandler } from './$types';
import { fetchPosts } from '#lib/server/medium';

const SITE = 'https://dhanu.letretro.com';

interface RouteEntry {
	path: string;
	changefreq: string;
	priority: string;
	lastmod?: string;
}

const staticRoutes: RouteEntry[] = [
	{ path: '', changefreq: 'weekly', priority: '1.0' },
	{ path: '/projects', changefreq: 'monthly', priority: '0.8' },
	{ path: '/blogs', changefreq: 'weekly', priority: '0.8' },
	{ path: '/talks', changefreq: 'monthly', priority: '0.7' },
	{ path: '/contact', changefreq: 'monthly', priority: '0.6' }
];

export const GET: RequestHandler = async ({ fetch }) => {
	let blogRoutes: RouteEntry[] = [];

	try {
		const posts = await fetchPosts(fetch);
		blogRoutes = posts.map((post) => {
			let lastmod: string | undefined;
			try {
				const d = new Date(post.date);
				if (!isNaN(d.getTime())) {
					lastmod = d.toISOString().split('T')[0];
				}
			} catch {
				// ignore invalid date
			}
			return {
				path: `/blogs/${post.slug}`,
				changefreq: 'monthly',
				priority: '0.7',
				lastmod
			};
		});
	} catch (e) {
		console.error('[sitemap] Failed to fetch blog posts for sitemap:', e);
	}

	const allRoutes = [...staticRoutes, ...blogRoutes];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
	.map(
		(r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>${r.lastmod ? `\n    <lastmod>${r.lastmod}</lastmod>` : ''}
  </url>`
	)
	.join('\n')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
