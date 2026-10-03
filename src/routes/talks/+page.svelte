<script lang="ts">
  import Seo from '#lib/components/Seo.svelte';

  const talks = [
    {
      date: 'Nov 2025',
      title: 'Advanced Streaming UI for AI Apps using React / Next.js',
      event: 'Chennaireact Meetup',
      location: 'Chennai, India',
      video: 'https://www.youtube.com/live/0NYbRQtaYhs?si=borCzSBv2f8NqKAj&t=3168',
      slides: 'https://www.figma.com/deck/6NXNk0LF7NWG5TNe4bQ03g/UI-Streaming-in-React-for-AI-Apps?node-id=1-36&t=UsdendFds0SkAWyY-1',
    },
    {
      date: 'Jul 2025',
      title: 'Make Your Idea from 0 to 1 with Open Source – With a Kutti Story',
      event: 'TOSS Conf. 2025',
      location: 'Chennai, India',
      video: null,
      slides: 'https://www.figma.com/deck/ZYg6JJP2ZZX1yuK5SKmFy2/TOSSCONF?node-id=1-35&t=5WQ6Qungzh56nIA3-1',
    },
    {
      date: 'Jan 2025',
      title: 'Democratizing High-Performance Computing with Python: Why It Matters and an Introduction to Guro',
      event: 'Chennaipy January Meetup',
      location: 'Chennai, India',
      video: null,
      slides: 'https://www.canva.com/design/DAGcveEiy5g/i3linGPiy1s8G8HIjvs1Rg/view',
    },
    {
      date: 'Aug 2024',
      title: 'Fundamentals and Development of AI: A Career Guidance Session',
      event: 'Naan Mudhalvan',
      location: 'Virtual',
      video: null,
      slides: 'https://www.canva.com/design/DAGADqFtAbI/22acn5V7-jsStHeGNsjmHA/view',
    },
    {
      date: 'Mar 2024',
      title: 'Understanding AI Ethics and Concerns: Using AI Responsibly and Securely',
      event: 'Naan Mudhalvan TN Skills Summit 2024',
      location: 'Chennai, India',
      video: null,
      slides: null,
    },
    {
      date: 'Sep 2023',
      title: 'Leverage AI in Business and Management: Shifting Paradigms',
      event: 'TechSpark IIITB 2023',
      location: 'Bengaluru, India',
      video: null,
      slides: null,
    },
  ];
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
            <span class="talk-event">{talk.event}, {talk.location}</span>
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
