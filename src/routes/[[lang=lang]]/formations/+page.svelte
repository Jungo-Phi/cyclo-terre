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
    content="Formations pratiques en petit groupe : planches permanentes et agronomie à La Finca Locale, Cartigny ; construction et entretien de l'outillage à Avully."
  />
</svelte:head>

<section class="colonne intro pile">
  <h1 class="titre-1">Apprendre en faisant</h1>
  <p class="chapo">
    Des formations pratiques, sur le terrain et à l'atelier, pour cultiver en préservant les sols ou
    pour construire et entretenir son outillage.
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
      vide="Aucune date pour l'instant. Abonnez-vous à la newsletter pour connaître la prochaine."
    />
  </div>
</section>

<section class="section" aria-label="Les deux volets">
  <div class="colonne deux">
    <div class="pile" id="agricole">
      <span><span class="tag tag--agri">Agricole</span></span>
      <h2 class="titre-2 agri-texte">Cultivez en préservant le sol</h2>
      <p>
        Apprenez à cultiver selon une méthode agroécologique qui améliore la fertilité des sols.
        Maraîchère ou maraîcher, ferme en reconversion ou potager associatif : ces formations sont
        faites pour vous, que vous ayez un Cyclo-Terre ou non.
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
      <h2 class="titre-2 meca-texte">Maîtrisez vos outils</h2>
      <p>
        Construisez votre Cyclo-Terre ou vos outils et apprenez à les régler et à les réparer. Vous
        y acquerrez des bases de mécanique pour gagner en autonomie. Ces formations démarreront avec
        la version commerciale du Cyclo-Terre.
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


<Contribuer
  titre="Accueillir une formation"
  texte="Votre ferme, votre association ou votre école peut recevoir un groupe ? Dites-nous où, quand et pour combien de personnes."
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
