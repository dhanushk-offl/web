<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Blogs — Dhanush</title>
  <meta name="description" content="Writings by Dhanush Kandhan on software, open source, and AI." />
  <meta property="og:title" content="Blogs — Dhanush" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<div class="wrap">
  <h1>Blog posts</h1>

  {#if data.error}
    <p class="muted"><em>{data.error}</em></p>
  {:else if data.posts.length === 0}
    <p class="muted"><em>No posts found.</em></p>
  {:else}
    <ul class="post-list">
      {#each data.posts as post}
        <li>
          <span class="date">{post.date}</span>
          <a href="/blogs/{post.slug}">{post.title}</a>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .wrap {
    max-width: 920px;
    margin: 0 auto;
    padding: 1rem 1.5rem 3rem;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1.5rem;
  }

  .muted { color: #aaa; font-size: 0.9rem; }

  .post-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .post-list li {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid #ebebeb;
    font-size: 0.95rem;
  }

  .date {
    font-size: 0.78rem;
    color: #aaa;
    font-style: italic;
    min-width: 88px;
    flex-shrink: 0;
  }
</style>
