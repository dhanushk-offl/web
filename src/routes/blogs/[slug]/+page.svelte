<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.post.title} — Dhanush</title>
  <meta name="description" content={data.post.excerpt} />
  <meta property="og:title" content={data.post.title} />
  <meta property="og:description" content={data.post.excerpt} />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={data.post.title} />
  <meta name="twitter:description" content={data.post.excerpt} />
</svelte:head>

<div class="wrap">
  <div class="back">
    <a href="/blogs">← All posts</a>
  </div>

  <article>
    <header class="post-header">
      <time class="date">{data.post.date}</time>
      <h1>{data.post.title}</h1>
    </header>

    <div class="post-content">
      {@html data.post.contentHtml}
    </div>
  </article>
</div>

<style>
  .wrap {
    max-width: 840px;
    margin: 0 auto;
    padding: 1rem 1.5rem 4rem;
  }

  .back {
    margin-bottom: 2rem;
    font-size: 0.85rem;
  }

  .back a { color: #aaa; }
  .back a:hover { color: #2d6a4f; }

  /* Header */
  .post-header {
    margin-bottom: 2.5rem;
  }

  .date {
    display: block;
    font-size: 0.78rem;
    color: #aaa;
    font-style: italic;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 1.7rem;
    font-weight: 400;
    line-height: 1.3;
    margin: 0;
    color: #222;
  }

  /* Post body — scope all Medium HTML */
  .post-content :global(p) {
    margin: 0 0 1rem;
    font-size: 1rem;
    line-height: 1.7;
    color: #333;
  }

  .post-content :global(h1),
  .post-content :global(h2),
  .post-content :global(h3),
  .post-content :global(h4) {
    font-weight: 400;
    margin: 1.75rem 0 0.6rem;
    color: #222;
    line-height: 1.3;
  }

  .post-content :global(h2) { font-size: 1.3rem; }
  .post-content :global(h3) { font-size: 1.1rem; }
  .post-content :global(h4) { font-size: 1rem; font-style: italic; }

  .post-content :global(a) {
    color: #2d6a4f;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 2px;
  }

  .post-content :global(a:hover) { color: #000; }

  .post-content :global(ul),
  .post-content :global(ol) {
    padding-left: 1.5rem;
    margin: 0 0 1rem;
  }

  .post-content :global(li) {
    margin-bottom: 0.3rem;
    font-size: 1rem;
    line-height: 1.65;
    color: #333;
  }

  .post-content :global(blockquote) {
    margin: 1.25rem 0;
    padding: 0.5rem 0 0.5rem 1.25rem;
    border-left: 2px solid #ccc;
    color: #666;
    font-style: italic;
  }

  .post-content :global(pre) {
    background: #f4f4f4;
    border: 1px solid #e8e8e8;
    border-radius: 3px;
    padding: 0.85rem 1rem;
    overflow-x: auto;
    font-size: 0.8rem;
    line-height: 1.55;
    margin: 1rem 0;
  }

  .post-content :global(code) {
    font-size: 0.82em;
    background: #f4f4f4;
    padding: 1px 5px;
    border-radius: 3px;
    color: #444;
  }

  .post-content :global(pre code) {
    background: none;
    padding: 0;
    font-size: inherit;
    color: inherit;
  }

  .post-content :global(figure) {
    margin: 1.5rem 0;
  }

  .post-content :global(figure img) {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 3px;
    border: 1px solid #e8e8e8;
  }

  .post-content :global(figcaption) {
    font-size: 0.78rem;
    color: #aaa;
    font-style: italic;
    margin-top: 0.4rem;
    text-align: center;
  }

  .post-content :global(img) {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 3px;
    margin: 1rem 0;
  }

  .post-content :global(hr) {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 2rem 0;
  }

  .post-content :global(strong) { font-weight: 600; }
  .post-content :global(em) { font-style: italic; }
</style>
