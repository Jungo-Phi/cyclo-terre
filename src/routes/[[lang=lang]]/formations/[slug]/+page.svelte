<script>
  import Photo from '$lib/components/Photo.svelte';
  import Etiquette from '$lib/components/Etiquette.svelte';
  import { volets, periode } from '$lib/contenu.js';
  import { mailto } from '$lib/site.js';

  let { data } = $props();
  const f = $derived(data.f);
  const classe = $derived(volets[f.volet].classe);
  const ouverte = $derived(f.statut !== 'en-preparation');

  /** @param {any} s */
  function inscription(s) {
    const quand = s ? ` — ${periode(s)}` : '';
    const sujet = s?.placesRestantes === 0 ? `Liste d'attente : ${f.titre}${quand}` : `Inscription : ${f.titre}${quand}`;
    return mailto(
      sujet,
      `Bonjour,\n\nJe souhaite m'inscrire à la formation « ${f.titre} »${quand}.\n\nPrénom et nom :\nTéléphone :\nJe suis : (maraîcher·ère, en reconversion, étudiant·e, jardinier·ère, autre)\nRemarques (alimentation, accessibilité, questions) :\n\nMerci !`
    );
  }
</script>

<svelte:head>
  <title>{f.titre} — Formations Cyclo-Terre</title>
  <meta name="description" content={f.resume} />
</svelte:head>

<nav class="colonne fil annotation" aria-label="Fil d'Ariane">
  <a href="/formations/">Formations</a> / <span>{volets[f.volet].nom}</span>
</nav>

<article>
  <header class="colonne entete pile">
    <span class="tags">
      <Etiquette volet={f.volet} />
      {#if !ouverte}<span class="tag tag--neutre">En préparation</span>{/if}
    </span>
    <h1 class="titre-1 {classe}-texte">{f.titre}</h1>
    <p class="chapo">{f.resume}</p>
  </header>

  <div class="colonne corps">
    <div class="haut pile">
      {#if f.photo}
        <Photo nom={f.photo} alt={f.photoAlt ?? ''} ratio="21 / 9" sizes="(max-width: 720px) 100vw, 760px" prioritaire />
      {/if}

      <div class="prose">{@html f.html}</div>
    </div>

    <div class="bas pile">
      {#if f.deroule?.length}
        <section class="pile" aria-labelledby="deroule">
          <h2 class="titre-2" id="deroule">Déroulé</h2>
          <ol class="deroule">
            {#each f.deroule as etape, i}
              <li>
                <span class="num">{String(i + 1).padStart(2, '0')}</span>
                <div class="pile">
                  <h3 class="titre-3">{etape.titre}</h3>
                  <p>{etape.texte}</p>
                </div>
              </li>
            {/each}
          </ol>
        </section>
      {/if}

      <section class="infos" aria-label="Informations pratiques">
        {#if f.prerequis}
          <div class="pile">
            <h2 class="etiquette">Prérequis</h2>
            <p>{f.prerequis}</p>
          </div>
        {/if}
        {#if f.aApporter?.length}
          <div class="pile">
            <h2 class="etiquette">À apporter</h2>
            <ul>
              {#each f.aApporter as a}<li>{a}</li>{/each}
            </ul>
          </div>
        {/if}
        {#if f.formateur}
          <div class="pile">
            <h2 class="etiquette">Formation donnée par</h2>
            <p>{f.formateur}</p>
          </div>
        {/if}
      </section>
    </div>

    <aside class="fiche fiche--{classe} cote" aria-labelledby="fiche-titre">
      <h2 class="etiquette" id="fiche-titre">Fiche technique</h2>
      <dl>
        {#if f.formats}<dt>Durée</dt><dd>{f.formats}</dd>{/if}
        {#if f.lieu}<dt>Lieu</dt><dd>{f.lieu}</dd>{/if}
        {#if f.groupe}<dt>Groupe</dt><dd>{f.groupe}</dd>{/if}
        <dt>Paiement</dt><dd>sur place</dd>
      </dl>

      {#if !ouverte}
        <p>Cette formation est en préparation. Inscrivez-vous : nous vous écrirons dès qu'une date sera fixée.</p>
        <a class="btn btn--{classe}" href={inscription(null)}>S'inscrire</a>
      {:else if data.sessions.length}
        <h3 class="etiquette">Prochaines dates</h3>
        <ul class="dates">
          {#each data.sessions as s (s.slug)}
            <li class="pile">
              <span class="quand">{periode(s)}{#if s.horaires} · {s.horaires}{/if}</span>
              <span class="annotation">
                {[s.prix, s.placesRestantes === 0 ? 'complet' : s.placesRestantes != null ? `${s.placesRestantes} places restantes` : null]
                  .filter(Boolean)
                  .join(' · ')}
              </span>
              <a class="btn btn--{classe}" href={inscription(s)}>
                {s.placesRestantes === 0 ? "Liste d'attente" : "S'inscrire"}
              </a>
            </li>
          {/each}
        </ul>
      {:else}
        <p>Pas de date publiée pour l'instant. Inscrivez-vous : nous vous proposerons la prochaine date.</p>
        <a class="btn btn--{classe}" href={inscription(null)}>S'inscrire</a>
      {/if}
      <p class="annotation">L'inscription se fait par e-mail ; nous confirmons votre place sous 48 h.</p>
    </aside>
  </div>
</article>

<style>
  .fil {
    padding-top: var(--space-6);
  }
  .fil a {
    color: var(--ink-muted);
  }
  .entete {
    padding-block: var(--space-5) var(--space-7);
    gap: var(--space-5);
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  .corps {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 360px;
    gap: var(--space-7) var(--space-8);
    align-items: start;
    padding-bottom: var(--space-9);
  }
  /* Desktop : fiche technique à droite, sur toute la hauteur. Mobile : entre la description et le déroulé. */
  .haut,
  .bas {
    grid-column: 1;
    gap: var(--space-7);
  }
  .cote {
    grid-column: 2;
    grid-row: 1 / span 2;
    position: sticky;
    top: var(--space-5);
  }
  .deroule {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .deroule li {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: var(--space-4);
    padding: var(--space-5) 0;
    border-bottom: 1px solid var(--rule-strong);
  }
  .deroule li:first-child {
    padding-top: 0;
  }
  .deroule li:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }
  .deroule .pile {
    gap: var(--space-2);
  }
  .num {
    font-family: var(--font-mono);
    font-size: 15px;
    color: var(--ink-muted);
    padding-top: 4px;
  }
  .infos {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-6);
  }
  .infos .pile {
    gap: var(--space-2);
  }
  .infos h2 {
    margin: 0;
  }
  .infos ul {
    margin: 0;
    padding-left: 1.1em;
  }
  .fiche h2,
  .fiche h3 {
    margin: 0;
  }
  .dates {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-5);
  }
  .dates .pile {
    gap: var(--space-2);
  }
  .cote .btn {
    padding-block: 10px;
    text-align: center;
  }
  .quand {
    font-family: var(--font-mono);
    font-size: 15px;
  }
  @media (max-width: 960px) {
    .corps {
      grid-template-columns: 1fr;
      gap: var(--space-7);
    }
    .cote {
      position: static;
      grid-column: 1;
      grid-row: auto;
      order: 1;
    }
    .bas {
      order: 2;
    }
    .infos {
      grid-template-columns: 1fr;
    }
  }
</style>
