<script>
  import { site, mailto } from '$lib/site.js';

  const demandes = [
    {
      titre: 'Fermes',
      texte: 'Échanger sur vos pratiques, suivre le développement, accueillir une formation.',
      sujet: 'Ferme : échanger sur le projet'
    },
    {
      titre: 'Écoles et institutions',
      texte: 'Recherche, essais, formations pour vos étudiant·es ou vos équipes.',
      sujet: 'Institution : collaboration'
    },
    {
      titre: 'Ateliers et constructeurs',
      texte: "Construire, réparer, améliorer l'outil avec nous.",
      sujet: 'Atelier : construire avec vous'
    }
  ];
</script>

<svelte:head>
  <title>Contact — Cyclo-Terre</title>
  <meta name="description" content="Écrire à Cyclo-Terre : questions, formations, partenariats, contributions au projet." />
</svelte:head>

<section class="colonne intro">
  <div class="pile">
    <p class="etiquette">Contact</p>
    <h1 class="titre-1">Discutons du projet</h1>
    <p class="chapo">
      Le Cyclo-Terre avance grâce à celles et ceux qui cultivent, enseignent, construisent ou
      soutiennent l'agroécologie. Une idée, une question, une envie de contribuer : écrivez-nous.
    </p>
  </div>
  <div class="fiche adresse">
    <p class="etiquette">Écrire</p>
    <a class="courriel" href="mailto:{site.email}">{site.email}</a>
    <p class="annotation">Cyclo-Terre · {site.ville}</p>
    <a class="btn btn--encre" href="mailto:{site.email}">Nous écrire</a>
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
          <a class="lien" href={mailto(d.sujet)}>Nous écrire →</a>
        </li>
      {/each}
      <li class="pile">
        <h3 class="titre-3">Intéressé·e par une formation</h3>
        <p>Pour vous inscrire, passez par la fiche de la formation.</p>
        <a class="lien" href="/formations/#agenda">Voir l'agenda →</a>
      </li>
    </ul>
  </div>
</section>

<style>
  .intro {
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 1fr);
    gap: var(--space-7);
    align-items: end;
    padding-block: var(--space-8) var(--space-9);
  }
  .intro .pile {
    gap: var(--space-5);
  }
  .adresse {
    gap: var(--space-3);
  }
  .adresse .btn {
    align-self: flex-start;
    margin-top: var(--space-2);
  }
  .courriel {
    font-family: var(--font-titre);
    font-weight: 600;
    font-size: 26px;
    overflow-wrap: anywhere;
  }
  .demandes {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
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
  @media (max-width: 960px) {
    .demandes {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 720px) {
    .intro {
      grid-template-columns: 1fr;
      padding-block: var(--space-6) var(--space-8);
    }
    .demandes {
      grid-template-columns: 1fr;
    }
  }
</style>
