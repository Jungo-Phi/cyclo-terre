<script>
  import '@fontsource/barlow-semi-condensed/600.css';
  import '@fontsource/barlow-semi-condensed/700.css';
  import '@fontsource/source-sans-3/400.css';
  import '@fontsource/source-sans-3/600.css';
  import '@fontsource/ibm-plex-mono/400.css';
  import '@fontsource/ibm-plex-mono/500.css';
  import '../../app.css';
  import { page } from '$app/state';
  import { site } from '$lib/site.js';
  import { langues, actives, langueDe, textes, chemin, cheminFrancais } from '$lib/i18n/index.js';
  import logo from '$lib/assets/logo/cyclo-terre-logo.svg';
  import logoSombre from '$lib/assets/logo/cyclo-terre-logo-fond-sombre.svg';

  let { children } = $props();

  const lang = $derived(langueDe(page.params.lang));
  const t = $derived(textes(lang));
  /** Chemin de la page courante en français, pour construire les autres langues. */
  const ici = $derived(cheminFrancais(page.url.pathname));

  /** @param {string} href chemin français */
  const actif = (href) => ici.startsWith(href);
</script>

<svelte:head>
  <meta property="og:site_name" content={site.nom} />
  <meta property="og:locale" content={langues[lang].locale} />
  {#if actives.length > 1}
    {#each actives as l}
      <link rel="alternate" hreflang={l} href={site.url + chemin(l, ici)} />
    {/each}
    <link rel="alternate" hreflang="x-default" href={site.url + ici} />
  {/if}
  <meta property="og:type" content="website" />
  <meta property="og:url" content={site.url + page.url.pathname} />
  <meta property="og:image" content="{site.url}/partage.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Logo Cyclo-Terre et prototype du Cyclo-Terre dans l'herbe" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href={site.url + page.url.pathname} />
</svelte:head>

<a class="btn btn--encre evitement" href="#contenu">{t.allerAuContenu}</a>

<header class="entete">
  <div class="colonne barre">
    <a class="logo" href={chemin(lang, '/')} aria-label={t.accueil}>
      <img src={logo} alt="Cyclo-Terre" width="530" height="296" />
    </a>
    <nav aria-label={t.menuPrincipal}>
      <ul class="menu">
        {#each site.navigation as item}
          <li>
            <a href={chemin(lang, item.href)} aria-current={actif(item.href) ? 'page' : undefined}>{t.nav[item.href] ?? item.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
</header>

<main id="contenu">
  {@render children()}
</main>

<footer class="pied">
  <div class="colonne barre">
    <a class="logo" href={chemin(lang, '/')} aria-label={t.accueil}>
      <img src={logoSombre} alt="Cyclo-Terre" width="530" height="296" />
    </a>
    <nav class="nav-pied" aria-label={t.menuPied}>
      <ul class="menu">
        {#each site.navigation as item}
          <li><a href={chemin(lang, item.href)}>{t.nav[item.href] ?? item.label}</a></li>
        {/each}
      </ul>
    </nav>
  </div>
  <div class="colonne">
    <p class="abonnement">
      <span>{t.newsletterTexte}</span>
      <a class="lien" href={chemin(lang, '/contact/') + '#lettre'}>{t.newsletterLien}</a>
    </p>
    <div class="legal">
      <span>{t.slogan}</span>
      <a href={chemin(lang, '/mentions-legales/')}>{t.mentionsLegales}</a>
      <a href={chemin(lang, '/confidentialite/')}>{t.confidentialite}</a>
      {#if actives.length > 1}
        <nav class="langues" aria-label={t.langue}>
          {#each actives as l}
            <a href={chemin(l, ici)} hreflang={l} lang={l} aria-current={l === lang ? 'true' : undefined}>{langues[l].nom}</a>
          {/each}
        </nav>
      {/if}
    </div>
  </div>
</footer>

<style>
  .langues {
    display: flex;
    gap: var(--space-4);
  }
  .langues a[aria-current='true'] {
    text-decoration-thickness: 2px;
  }
  /* En-tête et pied partagent la même barre : logo, menu horizontal. */
  .barre {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-5);
  }
  .logo {
    display: block;
    flex: 0 0 auto;
  }
  .logo img {
    height: 64px;
    width: auto;
  }
  .menu {
    display: flex;
    gap: var(--space-6);
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .menu a {
    font-family: var(--font-titre);
    font-weight: 600;
    font-size: 19px;
    white-space: nowrap;
    text-decoration: none;
  }
  .menu a:hover,
  .menu a[aria-current='page'] {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
  }

  .entete {
    border-bottom: 1px solid var(--rule);
    background: var(--paper);
  }
  .entete .barre {
    padding-block: var(--space-3);
  }

  .pied {
    background: var(--ink);
    color: var(--paper);
    padding-block: var(--space-6) var(--space-4);
  }
  .pied a {
    color: var(--paper);
  }
  .pied .logo img {
    height: 96px;
  }
  .pied .barre {
    flex-wrap: wrap;
    row-gap: var(--space-4);
  }
  .pied :global(:focus-visible) {
    outline-color: var(--paper);
  }
  .abonnement {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: var(--space-1) var(--space-4);
    margin: var(--space-5) 0 0;
    font-size: 17px;
  }
  .abonnement .lien {
    color: var(--paper);
  }
  .legal {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1) var(--space-5);
    margin-top: var(--space-5);
    padding-top: var(--space-3);
    border-top: 1px solid var(--ink-muted);
    font-family: var(--font-mono);
    font-size: 13px;
  }
  .legal span:first-child {
    margin-right: auto;
  }

  @media (max-width: 720px) {
    .barre {
      gap: var(--space-3);
    }
    .logo img {
      height: var(--space-7);
    }
    .pied .logo img {
      height: var(--space-9);
    }
    .menu {
      flex-wrap: wrap;
      gap: var(--space-1) var(--space-2);
    }
    .menu a {
      font-size: 14px;
    }
    .menu a:hover,
    .menu a[aria-current='page'] {
      text-underline-offset: 4px;
    }
    .pied .menu {
      gap: var(--space-2) var(--space-4);
    }
    .pied .menu a {
      font-size: 17px;
    }
  }
  @media (max-width: 380px) {
    .entete .logo img {
      height: var(--space-6);
    }
  }
</style>
