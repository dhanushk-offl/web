<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import { talks } from '#lib/data/talks';
</script>

<Seo
  title="Talks — Dhanush Kandhan"
  description="Public talks, workshops, and technical presentations by Dhanush Kandhan."
  path="/talks"
  breadcrumbs={[
    { name: 'Home', path: '/' },
    { name: 'Talks', path: '/talks' }
  ]}
/>

<div class="wrap">
  <h1>Talks</h1>
  <p class="intro">Public speaking, workshops, and technical presentations.</p>

  <ul class="talk-list">
    {#each talks as talk}
      <li class="talk">
        <span class="talk-date">{talk.date}</span>
        <div class="talk-body">
          <div class="talk-title">{talk.title}</div>
          <div class="talk-sub">
            <span class="talk-event">
              {#if talk.eventLink}
                <a href={talk.eventLink} target="_blank" rel="noopener noreferrer">{talk.event}</a>, {talk.location}
              {:else}
                {talk.event}, {talk.location}
              {/if}
            </span>
            {#if talk.video || talk.slides}
              <span class="talk-links">
                {#if talk.video}
                  <a href={talk.video} target="_blank" rel="noopener noreferrer">Video</a>
                {/if}
                {#if talk.slides}
                  <a href={talk.slides} target="_blank" rel="noopener noreferrer">Slides</a>
                {/if}
              </span>
            {/if}
          </div>
        </div>
      </li>
    {/each}
  </ul>
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
    margin-bottom: 0.75rem;
  }

  .intro {
    color: #666;
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }

  .talk-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .talk {
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 0 1.5rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid #ebebeb;
    align-items: baseline;
  }

  .talk-date {
    font-size: 0.78rem;
    color: #aaa;
    font-style: italic;
    white-space: nowrap;
  }

  .talk-body {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .talk-title {
    font-size: 0.97rem;
    color: #222;
    line-height: 1.5;
  }

  .talk-sub {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.82rem;
    color: #888;
  }

  .talk-event a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  .talk-event a:hover {
    color: inherit;
    text-decoration: none;
  }

  .talk-links {
    display: inline-flex;
    gap: 0.6rem;
  }

  .talk-links a {
    color: #2d6a4f;
    font-size: 0.78rem;
  }

  .talk-links a:hover {
    color: #000;
  }

  @media (max-width: 580px) {
    .talk {
      grid-template-columns: 1fr;
      gap: 0.2rem;
    }
  }
</style>
