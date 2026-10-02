<script lang="ts">
  import type { PageData } from './$types';
  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Dhanush Kandhan — Engineer, Thinkerer, Inquisitive</title>
  <meta name="description" content="Software engineer building solutions with AI, web technologies, and autonomous agents." />
  <meta property="og:title" content="Dhanush Kandhan — Engineer, Thinkerer, Inquisitive" />
  <meta property="og:description" content="Software engineer building solutions with AI, web technologies, and autonomous agents." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<div class="wrap">
  <section class="home">
    <div class="photo-wrap">
      <div class="photo">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Profile photo placeholder">
          <circle cx="60" cy="44" r="24" fill="#ccc"/>
          <ellipse cx="60" cy="96" rx="36" ry="24" fill="#ccc"/>
        </svg>
      </div>
    </div>

    <h2 class="slogan">Engineer / Thinkerer / Inquisitive</h2>

    <div class="bio">
      <p>
        I am a software engineer. My journey began in machine learning, where I trained and fine-tuned models, before transitioning into full-fledged software engineering. Guided by curiosity, I spend my time writing code to build reliable solutions and experimenting with autonomous agents.
      </p>

      <p>
        In 2025, I started <a href="https://letretro.com" target="_blank" rel="noopener noreferrer">LetRetro</a> to make sprint retrospectives easier and more insightful for engineering teams. Before that, I learned the ropes through internships: building machine learning models to optimize cloud gaming infrastructure at <a href="https://nvidia.com" target="_blank" rel="noopener noreferrer">NVIDIA</a>, creating automation agents to track shadow IT usage at <a href="https://stitchflow.com" target="_blank" rel="noopener noreferrer">Stitchflow</a>, and rewriting a legacy frontend codebase at <a href="https://talentship.io" target="_blank" rel="noopener noreferrer">Talentship</a>, which is where my journey into development truly began. Afterward, I also spent some time consulting with <a href="https://scale.com" target="_blank" rel="noopener noreferrer">Scale AI</a> on model inference optimization.
      </p>

      <p>
        I build things on the web and in the terminal. I care deeply about
        customer experience, simple systems, and software that scales.
        These days, I mostly write programs in Python, TypeScript, and occasionally Rust.
      </p>

      <p>
        I contribute to open source projects and occasionally speak at
        conferences and community meetups about things I've built or learnt.
        Some of my personal projects can be <a href="/projects">found here</a>.
      </p>

      <p>
        I believe in writing over speaking, in boring technology over shiny technology,
        and in making software that lasts longer than the hype cycle that spawned it.
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
    margin: 0 0 1.5rem 2rem;
  }

  .photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    filter: grayscale(100%);
    background: #ddd;
  }

  .photo svg { width: 100%; height: 100%; }

  .slogan {
    font-size: 1rem;
    color: #888;
    margin: 0 0 1.25rem;
    font-style: italic;
    font-weight: 400;
  }

  .bio p { margin-bottom: 0.9rem; }

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

  @media (max-width: 500px) {
    .photo-wrap { float: none; margin: 0 0 1.5rem 0; }
  }
</style>
