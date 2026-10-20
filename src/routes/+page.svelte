<script>
  import Photo from '$lib/components/Photo.svelte';
  import LigneAgenda from '$lib/components/LigneAgenda.svelte';
  import Contribuer from '$lib/components/Contribuer.svelte';
  import SchemaProfil from '$lib/components/SchemaProfil.svelte';
  import { sessions } from '$lib/contenu.js';
  import { site } from '$lib/site.js';

  const prochaines = sessions.slice(0, 3);
</script>

<svelte:head>
  <title>Cyclo-Terre — L'outil et le savoir-faire pour les micro-fermes</title>
  <meta name="description" content={site.description} />
</svelte:head>

<section class="hero colonne">
  <div class="pile texte">
    <p class="etiquette">Porte-outils maraîcher et vélo-cargo · Genève</p>
    <h1 class="titre-1">L'outil et le savoir-faire pour les micro-fermes</h1>
    <p class="chapo">
      Le Cyclo-Terre est un porte-outils léger qui travaille le sol sans carburant et transporte
      jusqu'à 250 kg. Nous le développons sur le terrain, et nous transmettons les gestes pour
      cultiver en préservant les sols.
    </p>
    <div class="actions">
      <a class="btn btn--encre" href="/formations/">Voir les formations</a>
      <a class="btn btn--contour" href="/machine/">Découvrir la machine</a>
    </div>
  </div>
  <Photo
    nom="herbe-cote"
    alt="Le prototype du Cyclo-Terre de profil dans une prairie, son porte-charge à l'arrière"
    ratio="21 / 9"
    sizes="(max-width: 1312px) 100vw, 1200px"
    prioritaire
  />
</section>

<section class="section" aria-labelledby="volets">
  <div class="colonne">
    <h2 class="titre-2 entete-section" id="volets">Deux volets</h2>
    <div class="deux">
      <article class="volet pile">
        <span><span class="tag tag--agri">Volet agricole</span></span>
        <h3 class="titre-3 agri-texte">Cultiver en préservant le sol</h3>
        <p>
          Des formations pratiques aux méthodes de culture agroécologiques : planches permanentes,
          travail du sol superficiel, lecture et préservation du sol. Elles ont lieu dès maintenant à
          La Finca Locale, à Cartigny, avec ou sans machine.
        </p>
        <ul class="tirets">
          <li>Planches permanentes</li>
          <li>Agronomie</li>
          <li>1 jour ou 1 semaine, 5 à 8 personnes</li>
        </ul>
        <a class="lien lien--agri" href="/formations/#agricole">Voir les formations agricoles →</a>
      </article>
      <article class="volet pile">
        <span class="tags">
          <span class="tag tag--meca">Volet mécanique</span>
          <span class="tag tag--neutre">En préparation</span>
        </span>
        <h3 class="titre-3 meca-texte">Construire, régler, réparer</h3>
        <p>
          Des formations à l'auto-construction, à l'entretien et à la maintenance de l'outillage,
          avec des pièces de vélo standard et d'après des plans libres. Elles démarreront quand le
          prototype sera disponible pour les groupes.
        </p>
        <ul class="tirets">
          <li>Réglages et entretien</li>
          <li>Transmission et freinage</li>
          <li>Auto-construction</li>
        </ul>
        <a class="lien lien--meca" href="/formations/#mecanique">Voir les formations mécaniques →</a>
      </article>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="machine">
  <div class="colonne machine">
    <div class="pile">
      <p class="etiquette">La machine</p>
      <h2 class="titre-2" id="machine">Entre la houe maraîchère et le motoculteur</h2>
      <p>
        Sans carburant, le Cyclo-Terre assure les activités culturales — sarclage, préparation du
        sol, semis — en améliorant la structure du sol culture après culture. Il sert aussi de
        véhicule utilitaire pour les récoltes et les livraisons.
      </p>
      <p class="annotation">Prototype en essai sur le terrain. Version commerciale prévue pour 2028.</p>
      <a class="lien" href="/machine/">Découvrir la machine →</a>
    </div>
    <div class="pile">
      <SchemaProfil />
      <ol class="reperes">
        <li><span class="num">1</span>Porte-charge : jusqu'à 250 kg</li>
        <li><span class="num">2</span>Transmission en pièces de vélo standard</li>
        <li><span class="num">3</span>Direction et freins de vélo, réparables à l'atelier</li>
        <li><span class="num">4</span>Voie pensée pour les planches de 75 cm</li>
      </ol>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="agenda">
  <div class="colonne">
    <div class="entete-section">
      <h2 class="titre-2" id="agenda">Prochaines formations</h2>
      <a class="lien" href="/formations/#agenda">Tout l'agenda →</a>
    </div>
    <LigneAgenda
      sessions={prochaines}
      vide="Les prochaines dates seront annoncées ici. Écrivez-nous pour être prévenu·e."
    />
  </div>
</section>

<section class="section" aria-labelledby="plans">
  <div class="colonne deux">
    <div class="pile">
      <p class="etiquette">Licence libre</p>
      <h2 class="titre-2" id="plans">Des plans libres</h2>
    </div>
    <div class="pile">
      <p>
        Le porte-outils et ses outils seront publiés sous licence libre, avec tout ce qu'il faut
        pour les construire et les modifier : plans, fichiers CAO, nomenclature, instructions
        d'assemblage.
      </p>
      <a class="lien" href="/machine/#plans">Les plans →</a>
    </div>
  </div>
</section>

<Contribuer />

<style>
  .hero {
    display: flex;
    flex-direction: column;
    gap: var(--space-7);
    padding-block: var(--space-8) var(--space-9);
  }
  .texte {
    gap: var(--space-5);
    max-width: 900px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2);
  }
  .tirets {
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: var(--font-mono);
    font-size: 15px;
    color: var(--ink-muted);
  }
  .tirets li::before {
    content: '— ';
  }
  .volet .lien {
    margin-top: var(--space-2);
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
      padding-block: var(--space-6) var(--space-8);
      gap: var(--space-6);
    }
    .machine {
      grid-template-columns: 1fr;
    }
    .hero :global(.photo img) {
      aspect-ratio: 3 / 2 !important;
    }
    .reperes {
      grid-template-columns: 1fr;
    }
  }
</style>
