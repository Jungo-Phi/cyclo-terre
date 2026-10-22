<script>
  import LettreInfo from '$lib/components/LettreInfo.svelte';
  import { site } from '$lib/site.js';

  const demandes = [
    {
      titre: 'Une ferme',
      texte: 'Échanger sur vos pratiques, suivre le développement, accueillir une formation.'
    },
    {
      titre: 'Une école',
      texte: 'Formations pour vos élèves ou vos étudiant·es, projets de recherche, essais sur le terrain.'
    },
    {
      titre: 'Une fondation ou une association',
      texte: "Engagée pour l'agroécologie : soutenir le projet, accueillir ou financer des formations."
    },
    {
      titre: 'Un·e bricoleur·euse',
      texte:
        'Construire votre Cyclo-Terre, améliorer la machine ou ses outils, partager vos modifications : le projet est ouvert aux contributions sur GitHub, selon les règles de son guide de contribution.',
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
      Cyclo-Terre avance grâce à celles et ceux qui cultivent, enseignent, construisent ou
      soutiennent l'agroécologie. Une idée, une question, une envie de contribuer : écrivez-nous.
    </p>
  </div>
  <div class="fiche adresse">
    <p class="etiquette">Nous écrire</p>
    <a class="courriel" href="mailto:{site.email}">{site.email}</a>
  </div>
</section>

<section class="section" aria-labelledby="titre-coordonnees">
  <div class="colonne deux">
    <h2 class="titre-2" id="titre-coordonnees">Adresse et téléphones</h2>
    <div class="coordonnees">
      <div class="pile">
        <p class="etiquette">Adresse</p>
        <p>Cyclo-Terre{#each site.adresse as ligne}<br />{ligne}{/each}</p>
      </div>
      {#each site.telephones as t}
        <div class="pile">
          <p class="etiquette {t.volet === 'agricole' ? 'agri' : 'meca'}-texte">{t.domaine}</p>
          <p>{t.nom}<br /><a href="tel:{t.numero.replaceAll(' ', '')}">{t.numero}</a></p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="titre-lettre" id="lettre">
  <div class="colonne deux">
    <h2 class="titre-2" id="titre-lettre">La newsletter</h2>
    <div class="pile">
      <p>
        Tous les mois ou tous les deux mois, des nouvelles de Cyclo-Terre : l'avancement de la
        machine, les prochaines formations, la publication des plans.
      </p>
      <LettreInfo />
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
    padding-block: var(--space-7) var(--space-8);
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
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-5);
  }
  .coordonnees .pile {
    gap: var(--space-2);
    padding-top: var(--space-4);
    border-top: 2px solid var(--ink);
  }
  .coordonnees p {
    margin: 0;
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
      padding-block: var(--space-5) var(--space-7);
    }
  }
</style>
