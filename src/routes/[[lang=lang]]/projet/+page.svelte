<script>
  import Photo from '$lib/components/Photo.svelte';
  import Contribuer from '$lib/components/Contribuer.svelte';

  const objectifs = [
    "Favoriser l'émergence de micro-fermes à taille humaine, produisant en symbiose avec l'environnement.",
    "Remettre la mécanisation au service de l'humain.",
    'Faire découvrir au plus grand nombre ce que peut être une agriculture soutenable.',
    "Constituer une communauté d'utilisatrices et d'utilisateurs engagé·es dans la conception, la réparation et la création de machines adaptées à leurs besoins."
  ];

  const calendrier = [
    ['Février 2026', "Construction du premier prototype, issu du travail de master d'Arnaud Jungo."],
    ['2026', "Structuration du projet (stratégie de communication, plan d'affaires, recherche de financements) et candidature au concours IDDEA."],
    ['2027', 'Essais et mesures sur champ à La Finca Locale, développement de la version commerciale et premières formations agricoles.'],
    ['2028', 'Sortie de la version commerciale du Cyclo-Terre, publication des plans sous licence libre et premières formations mécaniques.']
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
  <h1 class="titre-1">Un outillage et une méthode pour les micro-fermes</h1>
  <p class="chapo">
    Cyclo-Terre construit un outillage et transmet une méthode pour que des micro-fermes à taille
    humaine puissent produire en préservant leurs sols.
  </p>
</section>

<section class="section" aria-labelledby="pourquoi">
  <div class="colonne deux">
    <h2 class="titre-2" id="pourquoi">Pourquoi</h2>
    <div class="prose">
      <p>
        L'érosion et le tassement des sols mènent à une perte de fertilité d'année en année, et
        beaucoup d'agricultrices et d'agriculteurs se retrouvent enfermé·es dans un modèle de fortes
        dépenses — machines, intrants — sans perspective d'amélioration de leurs conditions de
        travail. Le travail manuel préserve
        les sols, mais il est trop éprouvant et chronophage.
      </p>
      <p>
        Cyclo-Terre veut rendre aux agricultrices et aux agriculteurs la maîtrise de leurs outils,
        grâce à une mécanisation légère, facile à entretenir et pensée pour l'autoconstruction, dans
        l'esprit de L'Atelier Paysan.
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
      <h2 class="titre-2" id="equipe">L'équipe</h2>
      <p class="chapo">Deux profils liés par une passion commune pour le vélo, l'open source et les enjeux écologiques.</p>
      <p class="rencontre">
        Youri et Arnaud se sont rencontrés par hasard lors du concours d'innovation
        Ecobooster, à Vernier, en 2025. Youri cultivait à la main depuis 2018 à La Finca Locale : le sol
        s'y améliorait d'année en année, mais le travail était épuisant. Arnaud a consacré son
        travail de master à la conception du premier prototype du Cyclo-Terre.
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
            Agriculteur de profession et ingénieur agronome de formation, spécialisé dans la santé
            des sols. Il a fondé La Finca Locale, une exploitation maraîchère agroécologique, en 2018.
          </p>
        </div>
        <div class="pile">
          <h3 class="titre-3 meca-texte">Arnaud Jungo</h3>
          <p>
            Ingénieur en mécanique, automaticien CFC, spécialisé dans le prototypage rapide ; il a
            mené de nombreux projets d'électronique, de programmation et de mécanique.
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
  texte="Fermes, écoles, ateliers, institutions : nous cherchons des partenaires pour accueillir des formations, mener des essais et faire évoluer la machine et ses outils. Écrivez-nous."
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
