<script>
  import '@fontsource/barlow-semi-condensed/600.css';
  import '@fontsource/barlow-semi-condensed/700.css';
  import '@fontsource/source-sans-3/400.css';
  import '@fontsource/source-sans-3/600.css';
  import '@fontsource/ibm-plex-mono/400.css';
  import '@fontsource/ibm-plex-mono/500.css';
  import '../app.css';
  import { page } from '$app/state';
  import { site } from '$lib/site.js';
  import logo from '$lib/assets/logo/cyclo-terre-logo.svg';
  import logoSombre from '$lib/assets/logo/cyclo-terre-logo-fond-sombre.svg';

  let { children } = $props();

  /** @param {string} href */
  const actif = (href) => page.url.pathname.startsWith(href);
</script>

<svelte:head>
  <meta property="og:site_name" content={site.nom} />
  <meta property="og:locale" content="fr_CH" />
</svelte:head>

<a class="btn btn--encre evitement" href="#contenu">Aller au contenu</a>

<header class="entete">
  <div class="colonne barre">
    <a class="logo" href="/" aria-label="Cyclo-Terre, accueil">
      <img src={logo} alt="Cyclo-Terre" width="530" height="296" />
    </a>
    <nav aria-label="Principale">
      <ul>
        {#each site.navigation as item}
          <li>
            <a href={item.href} aria-current={actif(item.href) ? 'page' : undefined}>{item.label}</a>
          </li>
        {/each}
      </ul>
      <a class="btn btn--encre agenda" href="/formations/#agenda">Agenda des formations</a>
    </nav>
  </div>
</header>

<main id="contenu">
  {@render children()}
</main>

<footer class="pied">
  <div class="colonne grille">
    <div class="pile">
      <img class="logo-pied" src={logoSombre} alt="Cyclo-Terre" width="530" height="296" />
      <p>Porte-outils maraîcher et formations en agroécologie · {site.ville}</p>
    </div>
    <nav aria-label="Pied de page">
      <ul>
        {#each site.navigation as item}
          <li><a href={item.href}>{item.label}</a></li>
        {/each}
      </ul>
    </nav>
    <div class="pile">
      <a class="courriel" href="mailto:{site.email}">{site.email}</a>
      <a class="btn btn--contour-clair" href="/contact/">Nous écrire</a>
    </div>
  </div>
  <div class="colonne legal">
    <span>Plans sous licence libre</span>
    <a href="/mentions-legales/">Mentions légales</a>
    <a href="/confidentialite/">Confidentialité</a>
  </div>
</footer>

<style>
  .entete {
    border-bottom: 1px solid var(--rule);
    background: var(--paper);
  }
  .barre {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-4) var(--space-7);
    padding-block: var(--space-4);
  }
  .logo {
    display: block;
    width: 200px;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-3) var(--space-6);
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2) var(--space-6);
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .entete ul a {
    font-family: var(--font-titre);
    font-weight: 600;
    font-size: 19px;
    text-decoration: none;
  }
  .entete ul a:hover,
  .entete ul a[aria-current='page'] {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 6px;
  }
  .agenda {
    min-height: 44px;
    padding: 0 18px;
  }
  @media (max-width: 720px) {
    .logo {
      width: 160px;
    }
    .barre {
      gap: var(--space-3);
    }
    nav {
      width: 100%;
      gap: var(--space-3) var(--space-5);
    }
    ul {
      gap: var(--space-2) var(--space-5);
    }
    .agenda {
      display: none;
    }
  }

  .pied {
    background: var(--ink);
    color: var(--paper);
    padding-block: var(--space-8) var(--space-6);
  }
  .grille {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1fr;
    gap: var(--space-7);
    align-items: start;
  }
  .logo-pied {
    width: 220px;
  }
  .pied p {
    font-size: 17px;
    max-width: 30ch;
  }
  .pied ul {
    flex-direction: column;
    gap: var(--space-2);
  }
  .pied a {
    color: var(--paper);
  }
  .pied ul a {
    font-family: var(--font-titre);
    font-weight: 600;
    font-size: 19px;
  }
  .courriel {
    font-family: var(--font-mono);
    font-size: 15px;
  }
  .btn--contour-clair {
    align-self: flex-start;
    color: var(--paper);
    box-shadow: inset 0 0 0 2px var(--paper);
    text-decoration: none;
  }
  .btn--contour-clair:hover {
    background: var(--ink-2);
  }
  .pied :global(:focus-visible) {
    outline-color: var(--paper);
  }
  .legal {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2) var(--space-6);
    margin-top: var(--space-8);
    padding-top: var(--space-4);
    border-top: 1px solid var(--ink-muted);
    font-family: var(--font-mono);
    font-size: 14px;
  }
  @media (max-width: 720px) {
    .grille {
      grid-template-columns: 1fr;
      gap: var(--space-6);
    }
  }
</style>
