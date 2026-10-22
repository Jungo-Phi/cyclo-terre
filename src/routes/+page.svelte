<script>
  import Photo from '$lib/components/Photo.svelte';
  import LigneAgenda from '$lib/components/LigneAgenda.svelte';
  import SchemaProfil from '$lib/components/SchemaProfil.svelte';
  import { sessions } from '$lib/contenu.js';
  import { site } from '$lib/site.js';

  const prochaines = sessions.slice(0, 3);
</script>

<svelte:head>
  <title>Cyclo-Terre — Porte-outils et formations pour micro-fermes</title>
  <meta name="description" content={site.description} />
</svelte:head>

<section class="hero colonne">
  <div class="pile texte">
    <h1 class="titre-1">La mécanisation légère pour l'agroécologique</h1>
    <p class="chapo">
      Le Cyclo-Terre est une machine agricole à propulsion humaine conçue pour les micro-fermes et
      sert une méthode de production agroécologique. L'objectif de cette machine est de favoriser
      l'émergence de micro-fermes à taille humaine, produisant en symbiose avec l'environnement.
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
      <div class="prose">
        <p>
          Le projet Cyclo-Terre est né d'une rencontre : celle de Youri Vezza, ingénieur agronome
          et maraîcher depuis 2018, et d'Arnaud Jungo, ingénieur en mécanique, qui a conçu la
          machine dans le cadre de son master.
        </p>
        <p>
          Au fil de plusieurs années de maraîchage biologique entièrement manuel, Youri Vezza a
          développé une méthode de travail du sol qui a fait ses preuves : la fertilité de ses
          parcelles s'est nettement améliorée. Mais cette méthode restait physiquement éprouvante
          et très chronophage.
        </p>
      </div>
      <div class="prose">
        <p>
          Adapté à cette méthode, le Cyclo-Terre en réduit la pénibilité avec une mécanisation
          légère, tout en orientant le travail vers des pratiques qui préservent la fertilité du
          sol. Il est le fruit d'une co-conception entre le maraîcher et l'ingénieur.
        </p>
        <p>
          Le Cyclo-Terre est pensé pour l'autoconstruction, inspiré par les machines de L'Atelier
          Paysan : une machine simple que l'on fabrique et répare soi-même, pour rendre aux
          agricultrices et aux agriculteurs la maîtrise de leurs outils de production.
        </p>
      </div>
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
        <h3 class="titre-3 agri-texte">Cultiver en prenant soin de son environnement</h3>
        <p>
          Avec sa méthode de maraîchage bio-intensif, inspirée des travaux de Jean-Martin Fortier,
          Youri Vezza vous apprendra à cultiver en planches permanentes, lire votre sol, gérer
          l'arrosage et préparer votre saison. Une formation ouverte à toutes et à tous, que vous
          utilisiez le Cyclo-Terre ou non.
        </p>
        <a class="lien lien--agri" href="/formations/#agricole">Les formations agricoles →</a>
      </article>
      <article class="pile">
        <p class="etiquette meca-texte">La machine · Arnaud Jungo</p>
        <h3 class="titre-3 meca-texte">Concevoir, construire et réparer ses outils</h3>
        <p>
          Lors d'un atelier d'autoconstruction, Arnaud Jungo vous accompagnera dans la fabrication
          de votre Cyclo-Terre : travail du métal, réglage, entretien et réparation, jusqu'aux
          premières esquisses de vos propres outils. Ces ateliers débuteront dès que la version
          commerciale du Cyclo-Terre sera finalisée.
        </p>
        <a class="lien lien--meca" href="/formations/#mecanique">Les formations mécaniques →</a>
      </article>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="machine">
  <div class="colonne machine">
    <div class="pile">
      <p class="etiquette">Outils</p>
      <h2 class="titre-2" id="machine">Le Cyclo-Terre</h2>
      <p>
        Le Cyclo-Terre se situe entre la houe maraîchère et le motoculteur. La houe respecte le
        sol, mais elle demande un effort considérable ; le motoculteur va vite, mais il est lourd,
        consomme du carburant et dégrade le sol. Le Cyclo-Terre allie la finesse du travail manuel
        à l'efficacité d'une machine : sans carburant, il prend en charge le sarclage, la
        préparation du sol et le semis, avec un travail superficiel qui laisse la structure du sol
        s'améliorer culture après culture. Il sert aussi de véhicule utilitaire pour les récoltes
        et les livraisons.
      </p>
      <p class="annotation">
        Prototype en essai sur le terrain. Version commerciale prévue
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
    <div class="pile">
      <p class="etiquette">Open source</p>
      <h2 class="titre-2" id="plans">Des plans libres</h2>
    </div>
    <div class="pile">
      <p>
        Plans, fichiers CAO, nomenclature et instructions d'assemblage du Cyclo-Terre seront
        publiés sous licence libre. Chacun·e pourra le construire, l'adapter à sa ferme et partager
        ses améliorations.
      </p>
      <p>
        Qu'on l'achète monté ou en kit, qu'on le construise en atelier ou qu'on le fabrique
        soi-même, le Cyclo-Terre appartiendra à celles et ceux qui l'utilisent : il ne dépendra ni
        d'un fabricant ni d'un réparateur agréé.
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
