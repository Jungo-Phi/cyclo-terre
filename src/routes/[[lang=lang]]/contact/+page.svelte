<script>
  import LettreInfo from '$lib/components/LettreInfo.svelte';
  import { site } from '$lib/site.js';

  const demandes = [
    {
      titre: 'Une ferme',
      texte: 'Échangez sur vos pratiques, suivez le développement, participez à une formation ou accueillez-en une.',
      lien: { href: '/formations/#agenda', label: "Voir l'agenda →" }
    },
    {
      titre: 'Une école',
      texte: 'Formez vos élèves ou vos étudiant·es, et menez avec nous des projets de recherche et des essais sur le terrain.'
    },
    {
      titre: 'Une fondation ou une association',
      texte: 'Soutenez le projet, accueillez ou financez des formations.'
    },
    {
      titre: 'Un·e bricoleur·euse',
      texte: 'Construisez votre Cyclo-Terre, améliorez la machine ou ses outils et partagez vos modifications.',
      lien: { href: site.depot, label: 'Le projet sur GitHub →' }
    }
  ];
</script>

<svelte:head>
  <title>Contact — Cyclo-Terre</title>
  <meta name="description" content="Écrire à Cyclo-Terre : questions, formations, partenariats, contributions au projet." />
</svelte:head>

<section class="colonne intro">
  <div class="pile">
    <h1 class="titre-1">Discutons</h1>
    <p class="chapo">
      Une idée, une question, une envie de contribuer ? Cyclo-Terre avance avec celles et ceux qui
      cultivent, enseignent, construisent ou soutiennent l'agroécologie.
    </p>
  </div>
  <div class="fiche adresse">
    <p class="etiquette">Nous écrire</p>
    <a class="courriel" href="mailto:{site.email}">{site.email}</a>
    <div class="coordonnees">
      <div class="pile postale">
        <p class="etiquette">Adresse</p>
        <p>{site.adresse.join(', ')}</p>
      </div>
      {#each site.telephones as t}
        <div class="pile">
          <p><span class="nom {t.volet === 'agricole' ? 'agri' : 'meca'}-texte">{t.nom}</span><br /><a href="tel:{t.numero.replaceAll(' ', '')}">{t.numero}</a></p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="qui">
  <div class="colonne">
    <h2 class="titre-2 entete-section" id="qui">Vous êtes…</h2>
    <ul class="demandes">
      {#each demandes as d}
        <li class="pile">
          <h3 class="titre-3">{d.titre}</h3>
          <p>{d.texte}</p>
          {#if d.note}<p class="annotation">{d.note}</p>{/if}
          {#if d.lien}<a class="lien" href={d.lien.href}>{d.lien.label}</a>{/if}
        </li>
      {/each}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="titre-lettre" id="lettre">
  <div class="colonne deux">
    <h2 class="titre-2" id="titre-lettre">La newsletter</h2>
    <div class="pile">
      <p>
        Suivez l'avancement de la machine et soyez informé·es des formations à venir.
      </p>
      <LettreInfo />
    </div>
  </div>
</section>

<style>
  .intro {
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
    gap: var(--space-7);
    align-items: start;
    padding-block: var(--space-7) 0;
  }
  .intro .pile {
    gap: var(--space-5);
  }
  .adresse {
    gap: var(--space-3);
  }
  .courriel {
    font-family: var(--font-titre);
    font-weight: 600;
    font-size: 26px;
    overflow-wrap: anywhere;
  }
  .coordonnees {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: var(--space-4) var(--space-5);
    margin-top: var(--space-2);
    padding-top: var(--space-4);
    border-top: 1px solid var(--rule-strong);
  }
  .coordonnees .pile {
    gap: var(--space-2);
  }
  .coordonnees p {
    margin: 0;
  }
  .nom {
    font-family: var(--font-titre);
    font-weight: 600;
    font-size: 20px;
  }
  .postale {
    grid-column: 1 / -1;
  }
  .demandes {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-5);
  }
  .demandes li {
    gap: var(--space-3);
    padding-top: var(--space-4);
    border-top: 2px solid var(--ink);
  }
  .demandes .lien {
    margin-top: auto;
  }
  @media (max-width: 720px) {
    .intro {
      grid-template-columns: 1fr;
      padding-block: var(--space-5) 0;
    }
  }
</style>
