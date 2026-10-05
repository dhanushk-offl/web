<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import { photos } from '#lib/data/photography';
  import Seo from '#lib/components/Seo.svelte';

  let { data }: { data: PageData } = $props();

  let current = $state(0);
  let loadedImages = $state<boolean[]>(photos.map(() => false));

  function handleLoad(i: number) {
    loadedImages[i] = true;
  }

  onMount(() => {
    const interval = setInterval(() => {
      current = (current + 1) % photos.length;
    }, 8500);
    return () => clearInterval(interval);
  });
</script>

<Seo
  title="Dhanush Kandhan — Engineer, Thinkerer, Inquisitive, Climate Activist"
  description="Software engineer building solutions with AI, web technologies, and autonomous agents."
  path="/"
/>

<svelte:head>
  <link rel="preload" as="image" href={photos[0].src} />
</svelte:head>

<div class="wrap">
  <section class="home">
    <div class="photo-wrap">
      <div class="photo">
        <img src="/images/dhanu-headshot.png" alt="Dhanush Kandhan" width="230" height="230" />
      </div>
    </div>

    <h2 class="slogan">Engineer / Thinkerer / Inquisitive / Climate Activist</h2>

    <div class="bio">
      <p>
        I am a software engineer. My journey began in machine learning, where I trained and fine-tuned models, before transitioning into full-fledged software engineering. Guided by curiosity, I spend my time writing code to build reliable solutions and experimenting with autonomous agents.
      </p>

      <p>
        In 2025, I started <a href="https://letretro.com" target="_blank" rel="noopener noreferrer">LetRetro</a> to make sprint retrospectives easier and more insightful, and currently run it as my micro-SaaS. Before that, I learned the ropes through internships: building machine learning models to optimize cloud gaming infrastructure at <a href="https://nvidia.com" target="_blank" rel="noopener noreferrer">NVIDIA</a>, creating automation agents to track shadow IT usage at <a href="https://stitchflow.com" target="_blank" rel="noopener noreferrer">Stitchflow</a>, and rewriting a legacy frontend codebase at <a href="https://talentship.io" target="_blank" rel="noopener noreferrer">Talentship</a>, which is where my journey into development truly began. Afterward, I also spent some time consulting with <a href="https://scale.com" target="_blank" rel="noopener noreferrer">Scale AI</a> on model inference optimization.
      </p>

      <!--
      <p>
        In 2024, my passage into academia began through an external research programme hosted by the <a href="https://www.cam.ac.uk" target="_blank" rel="noopener noreferrer">University of Cambridge</a> in AI and computer ethics, in partnership with <a href="https://deepmind.google" target="_blank" rel="noopener noreferrer">Google DeepMind</a>. There, I explored defenses against deepfake image generation, investigating techniques to introduce dissolved and uneven pixel colour matrices within generative pipelines to forestall malicious synthesis from within, in place of outward guardrails. Alongside this, I pursued independent research into Responsible AI in earnest, spending quiet hours across reading rooms, labs, and discussions with researchers, which culminated in independent papers alongside contributions to internal journals.
      </p>
      -->

      <p>
        I build things on the web and in the terminal. I care deeply about
        customer experience, simple systems, and software that scales.
        These days, I mostly write programs in Python, TypeScript, and occasionally Rust.
        I contribute to open source projects and occasionally speak at
        conferences and community meetups about things I've built or learnt.
        Some of my personal projects can be <a href="/projects">found here</a>.
      </p>

      <p>
        I believe in writing over speaking, in boring technology over shiny technology,
        and in making software that lasts longer than the hype cycle that spawned it.
      </p>

      <div class="slideshow" class:shimmer={!loadedImages[current]}>
        {#each photos as photo, i}
          <div class="slide" class:active={i === current} aria-hidden={i !== current}>
            <img
              src={photo.src}
              alt={photo.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              onload={() => handleLoad(i)}
            />
            <span class="slide-location">{photo.location}</span>
          </div>
        {/each}
      </div>
      <p class="slideshow-caption"><em>Such pieces of architecture and scene as mine own wandering eye hath chanced to preserve.</em></p>

      <p>Outside of work, I spend time volunteering with non-profits and developer communities:</p>

      <ul class="volunteer-list">
        <li>
          <a href="https://chennaireact.in" target="_blank" rel="noopener noreferrer">ChennaiReact</a>: Co-organizing community meetups and workshops for the local React and frontend ecosystem.
        </li>
        <li>
          <a href="https://chennaipy.org" target="_blank" rel="noopener noreferrer">ChennaiPy</a>: Contributing talks and helping run events for the Python community in Chennai.
        </li>
        <li>
          <a href="https://www.unv.org" target="_blank" rel="noopener noreferrer">UN Volunteers</a>: Supporting child education initiatives, community outreach, and disaster relief efforts across South India under the United Nations Volunteers program.
        </li>
        <li>
          <a href="https://uandi.org.in/" target="_blank" rel="noopener noreferrer">U&amp;I Trust</a>: Teaching foundational subjects to children from underprivileged backgrounds on weekends, and supporting the Vellore chapter with student mentorship and community fundraising.
        </li>
      </ul>

      <p>
        Deeply invested in ecological conservation, I spend time on climate advocacy across India. Through conclaves, conferences, and community discussions, I speak on actionable priorities like groundwater preservation and the growing environmental footprint of technology infrastructure, from heavy water extraction and pollution to the emissions and waste generated by enterprise data centers.
      </p>

      <p>
        When away from the screen, I sketch with ballpoint pens and try to take a motorcycle journey through the Ghats once every quarter.
      </p>

      <p>
        I can be reached at <a href="mailto:akadhanu@proton.me">akadhanu@proton.me</a>. Last updated on 02 October 2026.
      </p>
    </div>
  </section>

  {#if data.recentPosts.length > 0}
    <section class="recent-posts">
      <h2>Recent blog posts</h2>
      <ul>
        {#each data.recentPosts as post}
          <li>
            <span class="date">{post.date}</span>
            <a href="/blogs/{post.slug}">{post.title}</a>
          </li>
        {/each}
      </ul>
      <p class="all-link"><a href="/blogs">All posts →</a></p>
    </section>
  {/if}

  <section class="chat-cta">
    <p>Want a chat? <a href="https://cal.com/akadhanu" target="_blank" rel="noopener noreferrer">Schedule a call</a>.</p>
  </section>
</div>

<style>
  .wrap {
    max-width: 920px;
    margin: 0 auto;
    padding: 1rem 1.5rem 1.5rem;
  }

  .home { margin-bottom: 3rem; }

  /* Photo */
  .photo-wrap {
    float: right;
    margin: 0 0 2rem 2.5rem;
  }

  .photo {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    overflow: hidden;
    filter: grayscale(100%);
    background: #eee;
  }

  .photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .slogan {
    font-size: 1rem;
    color: #888;
    margin: 0 0 1.25rem;
    font-style: italic;
    font-weight: 400;
  }

  .bio p { margin-bottom: 0.9rem; }

  /* Slideshow */
  .slideshow {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    margin: 0.5rem 0 1.75rem;
    background: #111;
  }

  .slideshow.shimmer::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #1a1a1a 25%, #272727 50%, #1a1a1a 75%);
    background-size: 200% 100%;
    animation: shimmer 1.6s ease-in-out infinite;
    z-index: 2;
    pointer-events: none;
  }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 1.8s ease-in-out;
    pointer-events: none;
  }

  .slide.active {
    opacity: 1;
    pointer-events: auto;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(100%);
  }

  .slide-location {
    position: absolute;
    bottom: 0.75rem;
    right: 0.9rem;
    font-size: 0.7rem;
    font-style: italic;
    color: #f0f0f0;
    letter-spacing: 0.04em;
    background: rgba(0, 0, 0, 0.52);
    padding: 0.2rem 0.55rem;
    border-radius: 2px;
    pointer-events: none;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }

  .slideshow-caption {
    font-size: 0.8rem;
    color: #999;
    text-align: center;
    margin: -0.9rem 0 1.75rem;
    font-style: italic;
  }

  .volunteer-list {
    margin: 0 0 1.25rem;
    padding-left: 1.25rem;
    font-size: 0.95rem;
    line-height: 1.65;
    color: #444;
  }

  .volunteer-list li {
    margin-bottom: 0.45rem;
  }

  /* Recent posts */
  .recent-posts h2 {
    font-size: 1rem;
    color: #333;
    margin-bottom: 0.75rem;
    font-weight: 400;
  }

  .recent-posts ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .recent-posts li {
    display: flex;
    align-items: baseline;
    gap: 1rem;
    padding: 0.4rem 0;
    border-bottom: 1px solid #ebebeb;
    font-size: 0.95rem;
  }

  .date {
    color: #aaa;
    font-size: 0.78rem;
    min-width: 88px;
    flex-shrink: 0;
    font-style: italic;
  }

  .all-link {
    margin-top: 0.75rem;
    font-size: 0.85rem;
  }

  .all-link a { color: #2d6a4f; }
  .all-link a:hover { color: #000; }

  .chat-cta {
    margin-top: 1.75rem;
    font-size: 1.15rem;
    color: #444;
  }

  .chat-cta p {
    margin: 0;
  }

  @media (max-width: 640px) {
    .photo-wrap {
      float: none;
      margin: 0 0 1.5rem 0;
    }

    .photo {
      width: 170px;
      height: 170px;
      max-width: 55vw;
      max-height: 55vw;
    }

    .slideshow-caption {
      font-size: 0.68rem;
    }

    .slide-location {
      font-size: 0.6rem;
      padding: 0.15rem 0.4rem;
      bottom: 0.5rem;
      right: 0.5rem;
    }

    .bio p {
      text-align: justify;
    }
  }
</style>
