<script>
  import Photo from '$lib/components/Photo.svelte';
  import LettreInfo from '$lib/components/LettreInfo.svelte';
  import { actualites, dateLongue } from '$lib/contenu.js';
</script>

<svelte:head>
  <title>Actualités — Cyclo-Terre</title>
  <meta
    name="description"
    content="Les nouvelles de Cyclo-Terre : avancement de la machine et des outils, formations, publication des plans."
  />
  <link rel="alternate" type="application/rss+xml" title="Actualités Cyclo-Terre" href="/actualites/rss.xml" />
</svelte:head>

<section class="colonne intro pile">
  <h1 class="titre-1">Actualités</h1>
  <p class="chapo">
    L'avancement de la machine et des outils, les formations, la publication des plans. Les mêmes
    nouvelles que dans la newsletter, à lire ici quand vous voulez.
  </p>
</section>

<section class="section liste" aria-label="Toutes les actualités">
  <div class="colonne">
    {#if actualites.length}
      <ul class="articles">
        {#each actualites as a (a.slug)}
          <li>
            <a class="article" href="/actualites/{a.slug}/">
              {#if a.photo}
                <Photo nom={a.photo} alt="" ratio="4 / 3" sizes="(max-width: 720px) 100vw, 320px" />
              {/if}
              <div class="pile texte">
                <time class="annotation" datetime={a.date}>{dateLongue(a.date)}</time>
                <h2 class="titre-3">{a.titre}</h2>
                {#if a.resume}<p>{a.resume}</p>{/if}
              </div>
            </a>
          </li>
        {/each}
      </ul>
    {:else}
      <p class="vide">Les premières nouvelles arrivent bientôt. Abonnez-vous pour les recevoir.</p>
    {/if}
  </div>
</section>

<section class="section bande" aria-labelledby="titre-abonnement">
  <div class="colonne deux">
    <div class="pile">
      <h2 class="titre-2" id="titre-abonnement">Recevoir les nouvelles</h2>
      <p>Chaque actualité est aussi envoyée par la newsletter, tous les mois ou tous les deux mois.</p>
    </div>
    <LettreInfo />
  </div>
</section>

<style>
  .intro {
    padding-block: var(--space-8) var(--space-7);
    gap: var(--space-5);
  }
  .liste {
    border-top: 1px solid var(--rule);
  }
  .articles {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 2px solid var(--ink);
  }
  .article {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: var(--space-6);
    padding: var(--space-6) 0;
    border-bottom: 1px solid var(--rule-strong);
    color: var(--ink);
    text-decoration: none;
  }
  .article:not(:has(.photo)) {
    grid-template-columns: 1fr;
  }
  .article:hover h2 {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  .texte {
    gap: var(--space-2);
    max-width: 68ch;
  }
  .vide {
    border-top: 2px solid var(--ink);
    padding-top: var(--space-5);
    color: var(--ink-muted);
  }
  @media (max-width: 720px) {
    .intro {
      padding-block: var(--space-6) var(--space-5);
    }
    .article {
      grid-template-columns: 1fr;
      gap: var(--space-4);
    }
  }
</style>
