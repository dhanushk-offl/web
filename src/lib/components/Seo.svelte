<script lang="ts">
  import { SITE_URL, SITE_NAME } from '#lib/site';
  interface Props {
    title: string;
    description: string;
    path: string;
    type?: 'website' | 'article';
    ogImage?: string | null;
    breadcrumbs?: { name: string; path: string }[];
    jsonLd?: Record<string, unknown>;
  }

  let {
    title,
    description,
    path,
    type = 'website',
    ogImage = null,
    breadcrumbs = [],
    jsonLd
  }: Props = $props();

  const canonical = $derived(`${SITE_URL}${path}`);
  const resolvedOgImage = $derived(ogImage ?? `${SITE_URL}/images/dhanu-headshot.png`);

  const breadcrumbLd = $derived(breadcrumbs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((b, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: b.name,
          item: `${SITE_URL}${b.path}`
        }))
      }
    : null);

  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: `${SITE_URL}/`
  };

  function serializeJsonLd(value: object): string {
    return JSON.stringify(value).replace(/</g, '\\u003c');
  }

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: [
      'https://github.com/d5v7/',
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
  <meta property="og:image" content={resolvedOgImage} />
  <meta property="og:site_name" content={SITE_NAME} />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@akadhanu" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={resolvedOgImage} />

  {#if path === '/'}
    {@html `<script type="application/ld+json">${serializeJsonLd(websiteLd)}<\/script>`}
  {/if}

  <!-- Person JSON-LD -->
  {@html `<script type="application/ld+json">${serializeJsonLd(personLd)}<\/script>`}

  <!-- Breadcrumb JSON-LD -->
  {#if breadcrumbLd}
    {@html `<script type="application/ld+json">${serializeJsonLd(breadcrumbLd)}<\/script>`}
  {/if}

  <!-- Custom JSON-LD -->
  {#if jsonLd}
    {@html `<script type="application/ld+json">${serializeJsonLd(jsonLd)}<\/script>`}
  {/if}
</svelte:head>
