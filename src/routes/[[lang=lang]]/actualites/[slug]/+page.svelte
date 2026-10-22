<script>
  import Photo from '$lib/components/Photo.svelte';
  import LettreInfo from '$lib/components/LettreInfo.svelte';
  import { dateLongue } from '$lib/contenu.js';

  let { data } = $props();
  const a = $derived(data.a);
</script>

<svelte:head>
  <title>{a.titre} — Actualités Cyclo-Terre</title>
  {#if a.resume}<meta name="description" content={a.resume} />{/if}
  <meta property="og:type" content="article" />
</svelte:head>

<article class="colonne article">
  <header class="pile entete">
    <time class="annotation" datetime={a.date}>{dateLongue(a.date)}</time>
    <h1 class="titre-1">{a.titre}</h1>
    {#if a.resume}<p class="chapo">{a.resume}</p>{/if}
  </header>
  {#if a.photo}
    <Photo nom={a.photo} alt={a.photoAlt ?? ''} ratio="3 / 2" sizes="(max-width: 860px) 100vw, 800px" prioritaire />
  {/if}
  <div class="prose">{@html a.html}</div>
</article>

<section class="section bande" aria-labelledby="titre-abonnement">
  <div class="colonne deux">
    <h2 class="titre-2" id="titre-abonnement">Recevoir les prochaines nouvelles</h2>
    <LettreInfo />
  </div>
</section>

<style>
  .article {
    max-width: calc(800px + 2 * var(--space-8));
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    padding-block: var(--space-7) var(--space-9);
  }
  .entete {
    gap: var(--space-4);
  }
  @media (max-width: 720px) {
    .article {
      max-width: none;
    }
  }
</style>
