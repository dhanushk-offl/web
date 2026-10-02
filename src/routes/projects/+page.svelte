<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Projects — Dhanush Kandhan</title>
  <meta name="description" content="Open source software and personal projects of Dhanush Kandhan." />
  <meta property="og:title" content="Projects — Dhanush Kandhan" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<div class="wrap">
  <p class="intro">A selection of things I've built.</p>

  {#if data.featured.length > 0}
    <ul class="projects">
      {#each data.featured as p}
        <li>
          <span class="col-year">{p.year}</span>
          <span class="col-name">
            {#if p.link}
              <a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a>
            {:else}
              {p.title}
            {/if}
          </span>
          <span class="col-desc">{p.description}</span>
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

  .intro {
    color: #666;
    margin-bottom: 2rem;
    font-size: 0.95rem;
  }

  .projects {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .projects li {
    display: grid;
    grid-template-columns: 3.5rem 8rem 1fr;
    gap: 0 1.5rem;
    align-items: baseline;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ebebeb;
    font-size: 0.92rem;
    line-height: 1.55;
  }

  .projects li:first-child {
    border-top: 1px solid #ebebeb;
  }

  .col-year {
    color: #aaa;
    font-size: 0.78rem;
    font-style: italic;
    white-space: nowrap;
  }

  .col-name {
    color: #333;
    font-style: italic;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .col-desc {
    color: #555;
    font-size: 1rem;
    line-height: 1.65;
  }

  @media (max-width: 580px) {
    .projects li {
      grid-template-columns: 2.75rem 1fr;
      grid-template-rows: auto auto;
    }

    .col-name {
      white-space: normal;
    }

    .col-desc {
      grid-column: 2 / -1;
      color: #888;
      font-size: 0.85rem;
    }
  }
</style>
