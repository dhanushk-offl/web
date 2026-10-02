<script lang="ts">
  let name = $state('');
  let email = $state('');
  let message = $state('');
  let submitted = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    submitted = true;
  }
</script>

<svelte:head>
  <title>Contact — Dhanush</title>
  <meta name="description" content="Get in touch with Dhanush." />
  <meta property="og:title" content="Contact — Dhanush" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary" />
</svelte:head>

<div class="wrap">
  <h1>Contact</h1>

  <p>
    The best way to reach me is by email at
    <a href="mailto:hello@dhanush.dev">hello@dhanush.dev</a>.
    I'm also on
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>,
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>, and
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
  </p>

  <p>Or, send a message directly:</p>

  {#if submitted}
    <p class="thanks"><em>Thank you — I'll get back to you soon.</em></p>
  {:else}
    <form onsubmit={handleSubmit} novalidate>
      <div class="field">
        <label for="name">Name</label>
        <input id="name" type="text" bind:value={name} placeholder="Your name" required autocomplete="name" />
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" bind:value={email} placeholder="your@email.com" required autocomplete="email" />
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" bind:value={message} placeholder="What's on your mind?" required rows="6"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
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
    margin-bottom: 0.75rem;
    font-weight: 400;
  }

  p {
    font-size: 0.95rem;
    line-height: 1.6;
  }

  form {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    max-width: 560px;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  label {
    font-size: 0.82rem;
    color: #888;
  }

  input, textarea {
    font-family: "EB Garamond", Georgia, serif;
    font-size: 0.95rem;
    color: #333;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0.45rem 0.65rem;
    width: 100%;
    outline: none;
    transition: border-color 0.15s;
    line-height: 1.5;
  }

  input:focus, textarea:focus {
    border-color: #2d6a4f;
  }

  textarea {
    resize: vertical;
    min-height: 110px;
  }

  button {
    align-self: flex-start;
    font-family: "EB Garamond", Georgia, serif;
    font-size: 0.95rem;
    color: #fff;
    background: #333;
    border: none;
    border-radius: 3px;
    padding: 0.45rem 1.1rem;
    cursor: pointer;
    transition: background 0.15s;
  }

  button:hover {
    background: #2d6a4f;
  }

  .thanks {
    color: #2d6a4f;
  }
</style>
