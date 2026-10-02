export interface Post {
	slug: string;
	title: string;
	link: string;
	date: string;
	excerpt: string;
	contentHtml: string; // full content HTML, cover removed
}

function parseCdata(str: string): string {
	return str.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').trim();
}

/** Extract the URL slug — last path segment before any query string */
function extractSlug(url: string): string {
	try {
		const clean = url.split('?')[0];
		return clean.split('/').filter(Boolean).pop() ?? '';
	} catch {
		return '';
	}
}

/** Remove the first <figure> block (cover image + caption) */
function removeCover(html: string): string {
	return html.replace(/^[\s]*<figure>[\s\S]*?<\/figure>/, '').trim();
}

/** Remove Medium's 1×1 tracking pixel */
function removeTracker(html: string): string {
	return html.replace(/<img[^>]+medium\.com\/_\/stat[^>]+>/g, '');
}

/** Sanitize: strip script / iframe / style tags */
function sanitize(html: string): string {
	return html
		.replace(/<script[\s\S]*?<\/script>/gi, '')
		.replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
		.replace(/<style[\s\S]*?<\/style>/gi, '');
}

/** Plain-text excerpt from HTML, ~280 chars */
function toExcerpt(html: string): string {
	const plain = html
		.replace(/<[^>]+>/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&mdash;/g, '—')
		.replace(/&nbsp;/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
	return plain.length > 280 ? plain.slice(0, 280).replace(/\s\S+$/, '') + '…' : plain;
}

function formatDate(raw: string): string {
	try {
		return new Date(raw).toLocaleDateString('en-GB', {
			day: '2-digit',
			month: 'short',
			year: 'numeric'
		});
	} catch {
		return raw;
	}
}

export async function fetchPosts(fetchFn: typeof fetch): Promise<Post[]> {
	const res = await fetchFn('https://medium.com/feed/@itzmedhanu', {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; portfolio-bot/1.0)' }
	});
	if (!res.ok) throw new Error(`Feed returned ${res.status}`);

	const xml = await res.text();
	const itemBlocks = xml.match(/<item>([\s\S]*?)<\/item>/g) ?? [];

	return itemBlocks.map((block): Post => {
		const titleRaw = block.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '';
		const title = parseCdata(titleRaw);

		const link =
			block.match(/<link>(https?:\/\/[^<]+)<\/link>/)?.[1] ??
			block.match(/<guid[^>]*>(https?:\/\/[^<]+)<\/guid>/)?.[1] ??
			'';

		const slug = extractSlug(link);

		const dateRaw = block.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1] ?? '';
		const date = formatDate(dateRaw);

		const encodedRaw =
			block.match(/<content:encoded>([\s\S]*?)<\/content:encoded>/)?.[1] ?? '';
		const rawHtml = parseCdata(encodedRaw);
		const contentHtml = sanitize(removeTracker(removeCover(rawHtml)));
		const excerpt = toExcerpt(contentHtml);

		return { slug, title, link, date, excerpt, contentHtml };
	});
}
