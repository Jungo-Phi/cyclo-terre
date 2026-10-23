<script>
  import Photo from '$lib/components/Photo.svelte';
  import Contribuer from '$lib/components/Contribuer.svelte';

  const objectifs = [
    "Favoriser l'émergence de micro-fermes à taille humaine, pour réconcilier agriculture et environnement.",
    "Remettre la mécanisation au service de l'humain.",
    'Faire découvrir au plus grand nombre un modèle d\'agriculture soutenable.',
    'Constituer une communauté engagée dans la conception, la réparation et la création de machines adaptées à ses besoins.'
  ];

  const calendrier = [
    ['Février 2026', "Premier prototype, issu du travail de master d'Arnaud Jungo."],
    ['2026', "Structuration du projet (communication, plan d'affaires, financements) et candidature au concours IDDEA."],
    ['2027', 'Essais et mesures sur champ à La Finca Locale, développement de la version commerciale, premières formations agricoles.'],
    ['2028', 'Sortie de la version commerciale du Cyclo-Terre, publication des plans libres, premières formations mécaniques.']
  ];
</script>

<svelte:head>
  <title>Notre vision — Cyclo-Terre</title>
  <meta
    name="description"
    content="Pourquoi Cyclo-Terre existe, qui le porte et où il en est : un outillage low-tech et une méthode pour des micro-fermes qui préservent leurs sols."
  />
</svelte:head>

<section class="colonne intro pile">
  <h1 class="titre-1">Outiller les micro-fermes</h1>
  <p class="chapo">
    Nous souhaitons favoriser l'émergence de micro-fermes à taille humaine, en harmonie avec leur
    environnement, en les équipant de machines qu'elles comprennent et savent réparer elles-mêmes.
  </p>
</section>

<section class="section" aria-labelledby="pourquoi">
  <div class="colonne deux">
    <h2 class="titre-2" id="pourquoi">Cultiver sans épuiser</h2>
    <div class="prose">
      <p>
        En agriculture conventionnelle, les tracteurs lourds et le labour profond tassent les sols et
        les exposent à l'érosion : année après année, ils perdent leur fertilité. Beaucoup
        d'agricultrices et d'agriculteurs restent enfermé·es dans un modèle de fortes dépenses, en
        machines et en intrants, sans que leurs conditions de travail s'améliorent. Le travail
        manuel, lui, préserve les sols et offre un travail plus fin, mais il reste souvent épuisant,
        et les micro-fermes cherchent encore leur place.
      </p>
      <p>
        Avec une mécanisation légère, Cyclo-Terre aide les paysannes et les paysans à alléger leur
        travail quotidien et à reprendre la maîtrise de leurs outils. Faciles à entretenir, ces
        outils sont pensés pour l'autoconstruction, dans l'esprit de L'Atelier Paysan.
      </p>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="objectifs">
  <div class="colonne deux">
    <h2 class="titre-2" id="objectifs">Ce que nous voulons</h2>
    <ul class="liste">
      {#each objectifs as o}<li>{o}</li>{/each}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="equipe">
  <div class="colonne">
    <div class="entete-section pile">
      <h2 class="titre-2" id="equipe">Une rencontre</h2>
      <p class="rencontre">
        Youri et Arnaud se sont rencontrés par hasard en 2025, au concours d'innovation Ecobooster à
        Vernier. L'un cherchait à alléger son travail aux champs, l'autre en a fait son travail de
        master : le premier prototype du Cyclo-Terre. Au fil du projet, ils ont développé leurs
        intérêts communs pour le vélo, l'open source et l'écologie, et une véritable complicité est
        née.
      </p>
    </div>
    <div class="deux">
      <Photo
        nom="arnaud-youri"
        alt="Arnaud Jungo et Youri Vezza devant le premier prototype du Cyclo-Terre"
        ratio="4 / 3"
      />
      <div class="pile personnes">
        <div class="pile">
          <h3 class="titre-3 agri-texte">Youri Vezza</h3>
          <p>
            Agriculteur de profession et ingénieur agronome, spécialisé dans la santé des sols. Il
            a fondé La Finca Locale en 2018, une exploitation maraîchère agroécologique dont il
            soigne l'écosystème avec passion.
          </p>
        </div>
        <div class="pile">
          <h3 class="titre-3 meca-texte">Arnaud Jungo</h3>
          <p>
            Ingénieur en mécanique et automaticien CFC, il aime imaginer des machines et les
            construire de ses mains. Avant Cyclo-Terre, il ne connaissait rien à l'agriculture, mais
            l'envie de contribuer à changer le modèle agricole l'a convaincu de se lancer.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="calendrier">
  <div class="colonne deux">
    <h2 class="titre-2" id="calendrier">Calendrier</h2>
    <ol class="etapes">
      {#each calendrier as [annee, quoi]}
        <li><span class="quand">{annee}</span><span>{quoi}</span></li>
      {/each}
    </ol>
  </div>
</section>

<!-- Partenaires : section à ajouter ici quand il y en aura (fermes d'accueil, institutions, ateliers, soutiens). -->

<Contribuer
  titre="Cyclo-Terre se construit avec vous"
  texte="Ce projet, nous voulons le construire avec celles et ceux qui partagent cette vision. Ferme, école, atelier ou institution, vous pouvez accueillir une formation, tester la machine sur votre terrain ou nous aider à la faire évoluer. Envie d'en faire partie ?"
/>

<style>
  .intro {
    padding-block: var(--space-7);
    gap: var(--space-5);
  }
  .liste {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .liste li {
    padding: var(--space-4) 0;
    border-bottom: 1px solid var(--rule-strong);
  }
  .liste li:first-child,
  .etapes li:first-child {
    padding-top: 0;
  }
  .liste li:last-child,
  .etapes li:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }
  .rencontre {
    max-width: 68ch;
  }
  .personnes {
    gap: var(--space-6);
  }
  .personnes .pile {
    gap: var(--space-2);
  }
  .etapes {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .etapes li {
    display: grid;
    grid-template-columns: 128px 1fr;
    gap: var(--space-4);
    padding: var(--space-4) 0;
    border-bottom: 1px solid var(--rule-strong);
  }
  .quand {
    font-family: var(--font-mono);
    font-size: 15px;
    padding-top: 2px;
  }
  @media (max-width: 720px) {
    .intro {
      padding-block: var(--space-5);
    }
  }
</style>
