import type { PageServerLoad } from './$types';

interface Project {
	title: string;
	description: string;
	link: string;
	tags: string[];
	year: string;
}

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const res = await fetch(
			'https://cdn.jsdelivr.net/gh/dhanushk-offl/is-data@master/projects.json',
			{ headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)' } }
		);
		if (!res.ok) throw new Error(`${res.status}`);

		const raw: unknown[] = await res.json();

		const featured: Project[] = raw
			.filter(
				(p): p is Project =>
					!!p &&
					typeof p === 'object' &&
					typeof (p as Project).title === 'string' &&
					typeof (p as Project).description === 'string' &&
					(p as Project).title.trim().toLowerCase() !== 'a-spect'
			)
			.map((p) => {
				const title = p.title.trim();
				let link = p.link ?? '';

				// Update Prevu link to GitHub repo
				if (title.toLowerCase() === 'prevu') {
					link = 'https://github.com/dhanushk-offl/prevu';
				}

				return {
					title,
					description: p.description,
					link,
					tags: Array.isArray(p.tags) ? p.tags.map(String) : [],
					year: p.year ?? ''
				};
			});

		return { featured };
	} catch (err) {
		console.error('[projects] fetch error:', err);
		return { featured: [] };
	}
};
