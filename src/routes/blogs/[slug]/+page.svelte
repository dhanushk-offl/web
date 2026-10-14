<script lang="ts">
  import type { PageData } from './$types';
  import Seo from '#lib/components/Seo.svelte';
  let { data }: { data: PageData } = $props();
</script>

<Seo
  title="{data.post.title} — Dhanush Kandhan"
  description={data.post.excerpt}
  path="/blogs/{data.post.slug}"
  type="article"
  ogImage={data.post.coverImage}
  breadcrumbs={[
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blogs' },
    { name: data.post.title, path: `/blogs/${data.post.slug}` }
  ]}
  jsonLd={{
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.post.title,
    description: data.post.excerpt,
    image: data.post.coverImage ?? undefined,
    datePublished: (() => {
      try {
        const d = new Date(data.post.date);
        return !isNaN(d.getTime()) ? d.toISOString().split('T')[0] : undefined;
      } catch {
        return undefined;
      }
    })(),
    author: {
      '@type': 'Person',
      name: 'Dhanush Kandhan',
      url: 'https://dhanu.letretro.com'
    },
    publisher: {
      '@type': 'Person',
      name: 'Dhanush Kandhan',
      url: 'https://dhanu.letretro.com'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dhanu.letretro.com/blogs/${data.post.slug}`
    },
    url: `https://dhanu.letretro.com/blogs/${data.post.slug}`
  }}
/>

<div class="wrap">
  <article>
    <header class="post-header">
      <time class="date">{data.post.date}</time>
      <h1>{data.post.title}</h1>
    </header>

    <hr class="divider" />

    <div class="post-content">
      {@html data.post.contentHtml}
    </div>
  </article>
</div>

<style>
  .wrap {
    max-width: 920px;
    margin: 0 auto;
    padding: 0.75rem 1.5rem 2rem;
  }

  /* Header — date, then title */
  .post-header {
    margin-bottom: 1.25rem;
  }

  .date {
    display: block;
    font-size: 0.85rem;
    color: #888;
    letter-spacing: 0.02em;
    margin-bottom: 0.4rem;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 1.25;
    margin: 0;
    color: #111;
    letter-spacing: -0.01em;
  }

  /* Divider between header and body */
  .divider {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 1.5rem 0 2rem;
  }

  /* Post body — scope all Medium HTML */
  .post-content :global(p) {
    margin: 0 0 1.35rem;
    font-size: 1.1rem;
    line-height: 1.8;
    color: #2a2a2a;
  }

  /* Section headings — h3 is Medium's primary */
  .post-content :global(h1),
  .post-content :global(h2),
  .post-content :global(h3),
  .post-content :global(h4) {
    font-weight: 600;
    margin: 2.8rem 0 0.8rem;
    color: #111;
    line-height: 1.3;
  }

  .post-content :global(h2) { font-size: 1.4rem; }
  .post-content :global(h3) { font-size: 1.2rem; }
  .post-content :global(h4) { font-size: 1.05rem; font-weight: 500; font-style: italic; }

  /* Links in content */
  .post-content :global(a) {
    color: #2d6a4f;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }
  .post-content :global(a:hover) { color: #000; }

  /* Lists */
  .post-content :global(ul),
  .post-content :global(ol) {
    padding-left: 1.6rem;
    margin: 0 0 1.4rem;
  }

  .post-content :global(li) {
    margin-bottom: 0.4rem;
    font-size: 1.05rem;
    line-height: 1.75;
    color: #2a2a2a;
  }

  /* Blockquote */
  .post-content :global(blockquote) {
    margin: 2rem 0;
    padding: 0.6rem 0 0.6rem 1.4rem;
    border-left: 2px solid #ccc;
    color: #666;
    font-style: italic;
    font-size: 1.05rem;
    line-height: 1.75;
  }

  /* Code blocks — Medium style: soft neutral background, no borders, clean monospace */
  .post-content :global(pre) {
    background: rgba(0, 0, 0, 0.04);
    border: none;
    border-radius: 4px;
    padding: 1.25rem 1.4rem;
    overflow-x: auto;
    margin: 1.75rem 0;
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  }

  .post-content :global(pre code) {
    background: none;
    padding: 0;
    border: none;
    border-radius: 0;
    font-size: 0.86rem;
    line-height: 1.6;
    color: #242424;
    white-space: pre;
    font-family: inherit;
  }

  /* Inline code — Medium style */
  .post-content :global(code) {
    font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.85em;
    background: rgba(0, 0, 0, 0.05);
    padding: 2px 5px;
    border-radius: 3px;
    color: #242424;
    border: none;
  }

  /* Images */
  .post-content :global(figure) {
    margin: 2rem 0;
  }

  .post-content :global(figure img) {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 3px;
  }

  .post-content :global(figcaption) {
    font-size: 0.78rem;
    color: #bbb;
    font-style: italic;
    margin-top: 0.5rem;
    text-align: center;
  }

  .post-content :global(img) {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 3px;
    margin: 1.5rem 0;
  }

  /* HR inside content */
  .post-content :global(hr) {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 2.5rem 0;
  }

  .post-content :global(strong) { font-weight: 600; }
  .post-content :global(em) { font-style: italic; }

  /* Responsive video embeds */
  .post-content :global(iframe) {
    width: 100%;
    aspect-ratio: 16 / 9;
    height: auto;
    border: none;
    border-radius: 4px;
    display: block;
    margin: 2rem 0;
  }

  @media (max-width: 640px) {
    .wrap { padding: 1rem 1.1rem 2rem; }
    h1 { font-size: 1.6rem; }
    .post-content :global(p) { font-size: 1rem; line-height: 1.75; }
  }
</style>
