<script>
  import { site } from '$lib/site.js';

  let { data } = $props();
  const g = $derived(data.g);
</script>

<svelte:head>
  <title>{g.titre} — Cyclo-Terre</title>
</svelte:head>

<article class="colonne guide">
  <header class="pile entete">
    <h1 class="titre-1">{g.titre}</h1>
    <p class="annotation">
      {data.version ? `Plans ${data.version}` : 'Version en cours de rédaction'} · documentation sous
      licence CC BY-SA 4.0
    </p>
  </header>

  <div class="prose contenu">{@html g.html}</div>

  {#if data.precedent || data.suivant}
    <nav class="suite" aria-label="Guides de la même section">
      {#if data.precedent}<a class="lien" href="/outils/guides/{data.precedent.slug}/">← {data.precedent.titre}</a>{/if}
      {#if data.suivant}<a class="lien droite" href="/outils/guides/{data.suivant.slug}/">{data.suivant.titre} →</a>{/if}
    </nav>
  {/if}

  <aside class="fiche correction" aria-labelledby="titre-correction">
    <h2 class="etiquette" id="titre-correction">Une erreur, une précision ?</h2>
    <p>
      Ce guide est rédigé avec celles et ceux qui construisent et utilisent le Cyclo-Terre.
      Écrivez-nous, ou corrigez-le directement sur GitHub : l'éditeur en ligne prépare votre
      proposition, nous la relisons avant de la publier.
    </p>
    <div class="actions">
      <a class="btn btn--contour" href="mailto:{site.email}?subject={encodeURIComponent(`Guide « ${g.titre} »`)}">Nous écrire</a>
      <a class="btn btn--contour" href={g.edition}>Proposer une correction sur GitHub</a>
    </div>
    <p class="annotation">Il faut un compte GitHub (gratuit) pour la seconde option.</p>
  </aside>
</article>

<style>
  .guide {
    max-width: calc(800px + 2 * var(--space-8));
    display: flex;
    flex-direction: column;
    gap: var(--space-7);
    padding-block: var(--space-7) var(--space-9);
  }
  .entete {
    gap: var(--space-3);
  }
  .contenu :global(img) {
    border: 1px solid var(--rule-strong);
  }
  .contenu :global(pre) {
    overflow-x: auto;
    padding: var(--space-4);
    background: var(--card);
    border: 1px solid var(--rule-strong);
    font-size: 14px;
  }
  .contenu :global(code) {
    font-family: var(--font-mono);
    font-size: 0.9em;
  }
  .contenu :global(table) {
    border-collapse: collapse;
    width: 100%;
    font-size: 17px;
  }
  .contenu :global(th),
  .contenu :global(td) {
    text-align: left;
    padding: var(--space-2) var(--space-3);
    border-bottom: 1px solid var(--rule-strong);
  }
  .contenu :global(blockquote) {
    margin: 0;
    padding: var(--space-3) var(--space-4);
    background: var(--paper-2);
  }
  .suite {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-3);
    justify-content: space-between;
    border-top: 2px solid var(--ink);
    padding-top: var(--space-4);
  }
  .droite {
    margin-left: auto;
  }
  .correction p {
    margin: 0;
  }
  @media (max-width: 720px) {
    .guide {
      max-width: none;
    }
  }
</style>
