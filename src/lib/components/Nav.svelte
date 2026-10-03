<script lang="ts">
  import { page } from '$app/state';

  const navLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/talks', label: 'Talks' },
    { href: '/contact', label: 'Contact' },
  ];
</script>

<header class="header">
  <div class="logo">
    <a href="/">Dhanush Kandhan</a>
  </div>
  <nav class="nav" aria-label="Main navigation">
    {#each navLinks as link}
      <a
        href={link.href}
        class:active={page.url.pathname === link.href}
        aria-current={page.url.pathname === link.href ? 'page' : undefined}
      >{link.label}</a>
    {/each}
  </nav>
</header>

<style>
  .header {
    max-width: 920px;
    margin: 0 auto;
    padding: 1.75rem 1.5rem 1.25rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
  }

  .logo a {
    font-size: 1.35rem;
    font-weight: 600;
    color: #222;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  .logo a:hover {
    color: #000;
  }

  .nav {
    display: flex;
    gap: 1.5rem;
    flex-shrink: 0;
  }

  .nav a {
    font-size: 0.9rem;
    color: #888;
    white-space: nowrap;
  }

  .nav a:hover,
  .nav a.active {
    color: #2d6a4f;
  }

  .nav a.active {
    font-style: italic;
  }

  @media (max-width: 640px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.6rem;
      padding: 1rem 1rem 0.85rem;
      border-bottom: 1px solid #e8e8e8;
    }

    .logo a {
      font-size: 1.2rem;
    }

    .nav {
      gap: 1.3rem;
    }

    .nav a {
      font-size: 0.9rem;
    }
  }
</style>
