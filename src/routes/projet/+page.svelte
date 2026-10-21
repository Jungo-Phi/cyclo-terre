<script>
  import Photo from '$lib/components/Photo.svelte';
  import Contribuer from '$lib/components/Contribuer.svelte';

  const objectifs = [
    "Favoriser l'émergence de micro-fermes à taille humaine, produisant en symbiose avec l'environnement.",
    "Replacer la mécanisation sur un pied d'égalité avec l'humain.",
    'Donner au plus grand nombre une notion pratique des fonctionnements et des enjeux agricoles soutenables.',
    "Constituer une communauté d'utilisatrices et d'utilisateurs engagés dans la conception, la réparation et la création de machines adaptées à leurs besoins."
  ];

  const calendrier = [
    ['2026', 'Premier prototype ; premières formations agricoles.'],
    ['2027', 'Second prototype à assistance électrique, essais et mesures sur champ, manuels et supports de formation.'],
    ['2028', 'Version commerciale du Cyclo-Terre et formations complètes.']
  ];
</script>

<svelte:head>
  <title>Le projet — Cyclo-Terre</title>
  <meta
    name="description"
    content="Pourquoi Cyclo-Terre existe, qui le porte et où il en est : un outillage low-tech et une méthode pour des micro-fermes qui préservent leurs sols."
  />
</svelte:head>

<section class="colonne intro pile">
  <p class="etiquette">Le projet</p>
  <h1 class="titre-1">Un outil et une méthode pour les micro-fermes</h1>
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
        beaucoup d'agriculteurs s'enferment dans un modèle de fortes dépenses — machines, intrants —
        sans perspective d'amélioration de leurs conditions de travail. Le travail manuel préserve
        les sols, mais il est trop éprouvant et chronophage.
      </p>
      <p>
        Le Cyclo-Terre veut rendre au producteur le contrôle de son outil de production, grâce à un
        outillage low-tech facile à entretenir et à une démarche de co-conception inspirée de
        L'Atelier Paysan.
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
  titre="Le Cyclo-Terre se construit avec vous"
  texte="Fermes, écoles, ateliers, institutions : nous cherchons des partenaires pour accueillir des formations, mener des essais et faire évoluer l'outil. Écrivez-nous."
/>

<style>
  .intro {
    padding-block: var(--space-8) var(--space-7);
    gap: var(--space-5);
  }
  .liste {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 2px solid var(--ink);
  }
  .liste li {
    padding: var(--space-4) 0;
    border-bottom: 1px solid var(--rule-strong);
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
    border-top: 2px solid var(--ink);
  }
  .etapes li {
    display: grid;
    grid-template-columns: 100px 1fr;
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
      padding-block: var(--space-6) var(--space-5);
    }
  }
</style>
