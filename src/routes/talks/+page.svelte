<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';
  import { talks } from '#lib/data/talks';

  function youtubeThumbnail(video: string | null | undefined): string | null {
    if (!video) return null;

    try {
      const url = new URL(video);
      const host = url.hostname.replace(/^www\./, '');
      let id: string | null = null;

      if (host === 'youtu.be') id = url.pathname.split('/')[1];
      if (host === 'youtube.com' || host === 'm.youtube.com') {
        const parts = url.pathname.split('/');
        id = url.pathname === '/watch' ? url.searchParams.get('v') :
          ['live', 'embed', 'shorts'].includes(parts[1]) ? parts[2] : null;
      }

      return id && /^[\w-]{11}$/.test(id) ? `https://i.ytimg.com/vi/${id}/mqdefault.jpg` : null;
    } catch {
      return null;
    }
  }
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
      {@const thumbnail = youtubeThumbnail(talk.video)}
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
        {#if thumbnail && talk.video}
          <a class="video-preview" href={talk.video} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${talk.title} on YouTube`}>
            <img src={thumbnail} alt="" width="320" height="180" loading="lazy" />
            <span class="play-icon" aria-hidden="true">▶</span>
          </a>
        {/if}
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
    grid-template-columns: 5rem minmax(0, 1fr) auto;
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

  .talk-event a:hover, .talk-event a:focus-visible {
    color: #2d6a4f;
    text-decoration: underline;
    text-underline-offset: 0.15em;
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

  .video-preview {
    position: relative;
    display: block;
    width: 160px;
    aspect-ratio: 16 / 9;
    align-self: start;
    overflow: hidden;
    border-radius: 3px;
    background: #222;
    color: white;
    outline-offset: 3px;
  }

  .video-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0.85;
    transition: opacity 0.2s ease;
  }

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    padding-left: 0.12rem;
    border: 1px solid rgb(255 255 255 / 70%);
    border-radius: 50%;
    background: rgb(0 0 0 / 50%);
    font-size: 0.65rem;
    transform: translate(-50%, -50%);
    transition: background-color 0.2s ease, transform 0.2s ease;
  }

  .video-preview:hover, .video-preview:focus-visible {
    color: white;
  }

  .video-preview:hover img, .video-preview:focus-visible img {
    opacity: 1;
  }

  .video-preview:hover .play-icon, .video-preview:focus-visible .play-icon {
    background: #2d6a4f;
    transform: translate(-50%, -50%) scale(1.08);
  }

  .video-preview:focus-visible {
    outline: 2px solid #2d6a4f;
  }

  @media (prefers-reduced-motion: reduce) {
    .video-preview img, .play-icon {
      transition: none;
    }
  }

  @media (max-width: 580px) {
    .talk {
      grid-template-columns: minmax(0, 1fr) auto;
      gap: 0.2rem 0.75rem;
    }

    .talk-date {
      grid-column: 1 / -1;
    }

    .video-preview {
      width: 120px;
    }
  }

  @media (max-width: 380px) {
    .talk {
      grid-template-columns: 1fr;
    }

    .video-preview {
      width: min(100%, 160px);
      margin-top: 0.35rem;
    }
  }
</style>
