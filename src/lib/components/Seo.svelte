<script lang="ts">
  interface Props {
    title: string;
    description: string;
    path: string;
    type?: 'website' | 'article';
    breadcrumbs?: { name: string; path: string }[];
    jsonLd?: Record<string, unknown>;
  }

  const SITE = 'https://dhanu.letretro.com';
  const SITE_NAME = 'Dhanush Kandhan';

  let {
    title,
    description,
    path,
    type = 'website',
    breadcrumbs = [],
    jsonLd
  }: Props = $props();

  const canonical = $derived(`${SITE}${path}`);
  const ogImage = `${SITE}/images/dhanu-headshot.png`;

  const breadcrumbLd = $derived(breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE}${b.path}`
        }))
      }
    : null);

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE,
    sameAs: [
      'https://github.com/dhanushk-offl/',
      'https://www.linkedin.com/in/dhanushkandhan/',
      'https://x.com/akadhanu'
    ],
    jobTitle: 'Software Engineer',
    email: 'akadhanu@proton.me'
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />

  <!-- Open Graph -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content={type} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:site_name" content={SITE_NAME} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@akadhanu" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />

  <!-- Person JSON-LD -->
  {@html `<script type="application/ld+json">${JSON.stringify(personLd)}<\/script>`}

  <!-- Breadcrumb JSON-LD -->
  {#if breadcrumbLd}
    {@html `<script type="application/ld+json">${JSON.stringify(breadcrumbLd)}<\/script>`}
  {/if}

  <!-- Custom JSON-LD -->
  {#if jsonLd}
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
  {/if}
</svelte:head>
