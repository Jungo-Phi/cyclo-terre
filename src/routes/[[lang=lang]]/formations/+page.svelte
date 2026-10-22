<script>
  import LigneAgenda from '$lib/components/LigneAgenda.svelte';
  import Contribuer from '$lib/components/Contribuer.svelte';
  import { formations, sessions } from '$lib/contenu.js';

  const agricoles = formations.filter((f) => f.volet === 'agricole');
  const mecaniques = formations.filter((f) => f.volet === 'mecanique');

  /** @type {'tous' | 'agricole' | 'mecanique'} */
  let filtre = $state('tous');
  const visibles = $derived(filtre === 'tous' ? sessions : sessions.filter((s) => s.f.volet === filtre));
</script>

<svelte:head>
  <title>Formations — Cyclo-Terre</title>
  <meta
    name="description"
    content="Formations pratiques en agroécologie (planches permanentes, agronomie) à La Finca Locale, Cartigny, et formations mécaniques sur l'outillage. 5 à 8 personnes."
  />
</svelte:head>

<section class="colonne intro pile">
  <h1 class="titre-1">Formations</h1>
  <p class="chapo">
    Des formations pratiques, sur le terrain et à l'atelier, pour cultiver en préservant les sols et
    pour construire et entretenir son outillage. On y apprend en faisant, en petit groupe.
  </p>
</section>

<section class="section premiere" aria-labelledby="titre-agenda" id="agenda">
  <div class="colonne">
    <div class="entete-section">
      <h2 class="titre-2" id="titre-agenda">Agenda</h2>
      {#if sessions.length}
      <div class="filtres" role="group" aria-label="Filtrer par volet">
        <button type="button" aria-pressed={filtre === 'tous'} onclick={() => (filtre = 'tous')}>Tous</button>
        <button type="button" aria-pressed={filtre === 'agricole'} onclick={() => (filtre = 'agricole')}>Agricole</button>
        <button type="button" aria-pressed={filtre === 'mecanique'} onclick={() => (filtre = 'mecanique')}>Mécanique</button>
      </div>
      {/if}
    </div>
    <LigneAgenda
      sessions={visibles}
      vide="Aucune date publiée pour l'instant. Abonnez-vous à la newsletter pour être prévenu·e de la prochaine session."
    />
  </div>
</section>

<section class="section" aria-label="Les deux volets">
  <div class="colonne deux">
    <div class="pile" id="agricole">
      <span><span class="tag tag--agri">Agricole</span></span>
      <h2 class="titre-2 agri-texte">Cultiver en préservant le sol</h2>
      <p>
        Des formations aux méthodes de culture agroécologiques, pour produire en symbiose avec
        l'environnement, développer la biodiversité et limiter l'assèchement et l'érosion des
        terres. Elles s'adressent aux maraîchères et maraîchers, aux fermes en reconversion, aux
        potagers associatifs. Aucune machine n'est nécessaire pour y participer.
      </p>
      <ul class="cartes">
        {#each agricoles as f (f.slug)}
          <li>
            <a class="carte" href="/formations/{f.slug}/">
              <span class="titre-3 agri-texte">{f.titre}</span>
              <span>{f.resume}</span>
              <span class="annotation">{[f.formats, f.groupe].filter(Boolean).join(' · ')}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="pile" id="mecanique">
      <span class="tags">
        <span class="tag tag--meca">Mécanique</span>
        <span class="tag tag--neutre">En préparation</span>
      </span>
      <h2 class="titre-2 meca-texte">Construire, régler, réparer</h2>
      <p>
        Des formations pour construire son Cyclo-Terre ou ses outils, les régler et les réparer.
        Elles s'appuient sur les plans libres de la machine et sur des compétences utiles à tout
        outil de ferme. Elles démarreront dès que la version commerciale du Cyclo-Terre sera
        finalisée.
      </p>
      <ul class="cartes">
        {#each mecaniques as f (f.slug)}
          <li>
            <a class="carte" href="/formations/{f.slug}/">
              <span class="titre-3 meca-texte">{f.titre}</span>
              <span>{f.resume}</span>
              <span class="annotation">{[f.formats, f.groupe].filter(Boolean).join(' · ')}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="pratique">
  <div class="colonne deux">
    <h2 class="titre-2" id="pratique">Comment ça se passe</h2>
    <dl class="fiche pratique">
      <dt>Où</dt>
      <dd>À La Finca Locale, à Cartigny (GE), pour le volet agricole ; à l'atelier pour le volet mécanique, dont le lieu sera annoncé avec les premières formations mécaniques. Le lieu exact figure sur chaque fiche.</dd>
      <dt>Groupe</dt>
      <dd>5 à 8 personnes.</dd>
      <dt>Durée</dt>
      <dd>Une journée ou une semaine, au choix, pour les formations agricoles ; une journée ou plusieurs sessions pour les formations mécaniques.</dd>
      <dt>Paiement</dt>
      <dd>Sur place, le premier jour. Environ 200 CHF par jour à titre indicatif ; le prix exact figure sur chaque date.</dd>
    </dl>
  </div>
</section>

<Contribuer
  titre="Accueillir une formation"
  texte="Les formations peuvent se déplacer. Si votre ferme, votre association ou votre école peut accueillir un groupe, écrivez-nous : dites-nous où, quand et pour combien de personnes."
/>

<style>
  .intro {
    padding-block: var(--space-7);
    gap: var(--space-5);
  }
  .premiere {
    border-top: 1px solid var(--rule);
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  .cartes {
    list-style: none;
    margin: var(--space-3) 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
  .carte {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    padding: var(--space-5);
    background: var(--card);
    border: 1px solid var(--rule-strong);
    text-decoration: none;
  }
  .carte:hover .titre-3 {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  .carte > span:nth-child(2) {
    font-size: 17px;
  }
  .pratique {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-3) var(--space-5);
  }
  .filtres {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  .filtres button {
    min-height: 40px;
    padding: 0 var(--space-4);
    border: 0;
    background: transparent;
    box-shadow: inset 0 0 0 1px var(--ink);
    color: var(--ink);
    font-family: var(--font-mono);
    font-size: 14px;
    cursor: pointer;
  }
  .filtres button[aria-pressed='true'] {
    background: var(--ink);
    color: var(--paper);
  }
  @media (max-width: 720px) {
    .intro {
      padding-block: var(--space-5);
    }
  }
</style>
