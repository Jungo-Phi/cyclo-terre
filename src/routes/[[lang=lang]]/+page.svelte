<script>
  import Photo from '$lib/components/Photo.svelte';
  import LigneAgenda from '$lib/components/LigneAgenda.svelte';
  import SchemaProfil from '$lib/components/SchemaProfil.svelte';
  import { sessions } from '$lib/contenu.js';
  import { site } from '$lib/site.js';

  const prochaines = sessions.slice(0, 3);
</script>

<svelte:head>
  <title>Cyclo-Terre · Porte-outils maraîcher & formations en agroécologie</title>
  <meta name="description" content={site.description} />
</svelte:head>

<section class="hero colonne">
  <div class="pile texte">
    <h1 class="titre-1">La mécanisation légère de l'agroécologie</h1>
    <p class="chapo">
      Le Cyclo-Terre est une machine agricole à propulsion humaine, conçue pour les micro-fermes.
      Il allège le travail du maraîcher, au service d'une méthode qui préserve le sol.
    </p>
  </div>
  <Photo
    nom="herbe-cote"
    alt="Le prototype du Cyclo-Terre de profil dans une prairie, son porte-charge à l'arrière"
    ratio="21 / 9"
    sizes="(max-width: 1312px) 100vw, 1200px"
    prioritaire
  />
</section>

<section class="section" aria-labelledby="origine">
  <div class="colonne">
    <h2 class="titre-2 entete-section" id="origine">L'outil au service de la méthode</h2>
    <div class="deux recit">
      <p>
        En cultivant entièrement à la main depuis 2018, Youri Vezza, ingénieur agronome et
        maraîcher, a mis au point une méthode de travail du sol qui a nettement amélioré la
        fertilité de ses parcelles, mais qui restait exigeante physiquement.
      </p>
      <p>
        Pour rendre cette méthode moins pénible, Arnaud Jungo, ingénieur en mécanique, a conçu avec
        lui le Cyclo-Terre. Dans l'esprit de L'Atelier Paysan, il est pensé pour que chacun·e puisse
        le fabriquer et le réparer soi-même.
      </p>
    </div>
  </div>
</section>

<section class="section" aria-label="Les formations">
  <div class="colonne pile faces">
    <!-- Photo provisoire : à remplacer par une photo de formation. -->
    <Photo
      nom="arnaud-youri"
      alt="Youri Vezza et Arnaud Jungo devant le premier prototype du Cyclo-Terre"
      ratio="21 / 9"
      position="center 5%"
      sizes="(max-width: 1312px) 100vw, 1200px"
    />
    <div class="deux">
      <article class="pile">
        <p class="etiquette agri-texte">La méthode · Youri Vezza</p>
        <h3 class="titre-3 agri-texte">Prendre soin du sol</h3>
        <p>
          Youri Vezza vous apprend le maraîchage bio-intensif, inspiré des travaux de Jean-Martin
          Fortier : créer des planches permanentes, lire votre sol, préparer votre saison. Une
          formation ouverte à toutes et à tous, avec ou sans Cyclo-Terre.
        </p>
        <a class="lien lien--agri" href="/formations/#agricole">Les formations agricoles →</a>
      </article>
      <article class="pile">
        <p class="etiquette meca-texte">La machine · Arnaud Jungo</p>
        <h3 class="titre-3 meca-texte">Maîtriser ses outils</h3>
        <p>
          En atelier d'autoconstruction, Arnaud Jungo vous accompagnera dans la fabrication de votre
          Cyclo-Terre, de la découpe du métal au réglage, puis dans son entretien et sa réparation.
          Ces ateliers débuteront avec la version commerciale.
        </p>
        <a class="lien lien--meca" href="/formations/#mecanique">Les formations mécaniques →</a>
      </article>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="machine">
  <div class="colonne machine">
    <div class="pile">
      <h2 class="titre-2" id="machine">Entre houe et motoculteur</h2>
      <p>
        Dans bien des micro-fermes, le motoculteur est la seule machine motorisée. Le Cyclo-Terre a
        été pensé pour le remplacer. Il permet de préparer les semis avec un travail superficiel du
        sol, de sarcler et de semer avec la même finesse qu'une houe maraîchère, mais plus vite et
        avec moins d'effort. C'est aussi un vélo-cargo : un atout pour les micro-fermes qui doivent
        déplacer du matériel parfois en ville.
      </p>
      <p class="annotation">
        Un prototype est actuellement en essai sur le terrain, la version commerciale est prévue
        pour 2028.
      </p>
      <a class="lien" href="/outils/">Découvrir le Cyclo-Terre →</a>
    </div>
    <div class="pile">
      <SchemaProfil />
      <ol class="reperes">
        <li><span class="num">1</span>Caisse arrière : 2 piles de caisses maraîchères, jusqu'à 250 kg</li>
        <li><span class="num">2</span>Moteur de pédalier</li>
        <li><span class="num">3</span>Pièces de vélo standard, réparables à l'atelier</li>
        <li><span class="num">4</span>Voie pensée pour les planches de 75 cm</li>
      </ol>
    </div>
  </div>
</section>

{#if prochaines.length}
  <section class="section" aria-labelledby="agenda">
    <div class="colonne">
      <div class="entete-section">
        <h2 class="titre-2" id="agenda">Prochaines formations</h2>
        <a class="lien" href="/formations/#agenda">Tout l'agenda →</a>
      </div>
      <LigneAgenda sessions={prochaines} />
    </div>
  </section>
{/if}

<section class="section" aria-labelledby="plans">
  <div class="colonne deux">
    <h2 class="titre-2" id="plans">Des plans libres</h2>
    <div class="pile">
      <p>
        Parce que nous croyons aux outils ouverts, les plans et la documentation du Cyclo-Terre
        sont publiés sous licence libre. Vous pourrez l'acheter ou le construire avec nous en
        atelier, mais aussi le fabriquer librement de votre côté.
      </p>
      <a class="lien" href="/outils/#plans">Pourquoi des plans libres →</a>
    </div>
  </div>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    padding-block: var(--space-7) var(--space-8);
  }
  .texte {
    gap: var(--space-5);
    max-width: 900px;
  }
  .faces {
    gap: var(--space-6);
  }
  .faces .lien {
    margin-top: auto;
  }
  .machine {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    gap: var(--space-7);
    align-items: start;
  }
  .reperes {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-3) var(--space-5);
    font-size: 17px;
  }
  .reperes li {
    display: flex;
    gap: var(--space-3);
    align-items: baseline;
  }
  .num {
    flex: 0 0 auto;
    display: inline-grid;
    place-items: center;
    width: 26px;
    height: 26px;
    border: 1.5px solid var(--meca-dark);
    border-radius: var(--radius-rond);
    font-family: var(--font-mono);
    font-size: 13px;
    color: var(--meca-dark);
    transform: translateY(-2px);
  }
  @media (max-width: 720px) {
    .hero {
      padding-block: var(--space-5) var(--space-7);
      gap: var(--space-5);
    }
    .machine {
      grid-template-columns: 1fr;
    }
    .hero :global(.photo img),
    .faces :global(.photo img) {
      aspect-ratio: 3 / 2 !important;
    }
    .reperes {
      grid-template-columns: 1fr;
    }
  }
</style>
