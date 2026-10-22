<script>
  import Photo from '$lib/components/Photo.svelte';
  import SchemaProfil from '$lib/components/SchemaProfil.svelte';
  import { lettre } from '$lib/site.js';

  const pictos = import.meta.glob('$lib/assets/pictos/*.svg', { eager: true, import: 'default' });
  /** @param {string} nom */
  const picto = (nom) => /** @type {string} */ (pictos[`/src/lib/assets/pictos/${nom}.svg`]);

  const outils = [
    { nom: 'sarcloir', label: 'Sarcloir' },
    { nom: 'semoir', label: 'Semoir' },
    { nom: 'disques-butteurs', label: 'Disques butteurs' },
    { nom: 'herse', label: 'Herse rotative' }
  ];

  const caracteristiques = [
    ['Assistance électrique', '500 W, autonomie 800 Wh'],
    ['Charge utile', "jusqu'à 250 kg"],
    ['Voie', 'pensée pour les planches de 75 cm, le format du maraîchage bio-intensif popularisé par Jean-Martin Fortier'],
    ['Largeur hors tout', '92 cm'],
    ['Poids à vide', '50 kg'],
    ['Cadre', 'profilés inox'],
    ['Surface visée', 'une machine pour environ 1 hectare']
  ];

</script>

<svelte:head>
  <title>Outils — Cyclo-Terre</title>
  <meta
    name="description"
    content="Le Cyclo-Terre, porte-outils maraîcher léger et vélo-cargo : ce qu'il fait, les outils qu'il porte, ses caractéristiques, comment se le procurer et ses plans libres."
  />
</svelte:head>

<section class="colonne intro">
  <div class="pile">
    <h1 class="titre-1">Le Cyclo-Terre</h1>
    <p class="chapo">
      Le Cyclo-Terre est une machine agricole légère à propulsion humaine, conçue pour les
      micro-fermes et au service d'une méthode de production agroécologique. Ce porte-outils
      maraîcher effectue un travail du sol superficiel en gardant la qualité du travail manuel. Il
      fait aussi office de vélo-cargo pour transporter des charges en milieu urbain et
      péri-urbain.
    </p>
  </div>
  <Photo
    nom="herbe-trois-quart"
    alt="Le prototype du Cyclo-Terre de trois-quarts, dans l'herbe"
    ratio="3 / 2"
    prioritaire
  />
</section>

<section class="section" aria-labelledby="pourquoi">
  <div class="colonne deux">
    <h2 class="titre-2" id="pourquoi">Pourquoi cette machine</h2>
    <div class="prose">
      <p>
        Depuis 2018, Youri Vezza cultive des légumes biologiques à la main à La Finca Locale. Sa
        méthode a fait ses preuves : la fertilité des sols s'améliore d'année en année. Mais elle
        reste physiquement éprouvante et très chronophage.
      </p>
      <p>
        Le Cyclo-Terre en réduit la pénibilité avec une mécanisation légère, sans renoncer aux
        pratiques qui préservent le sol.
      </p>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="fait">
  <div class="colonne">
    <h2 class="titre-2 entete-section" id="fait">Fonctions</h2>
    <div class="trois">
      <div class="pile">
        <h3 class="titre-3">Travailler le sol</h3>
        <p>
          Sarclage, préparation du sol, semis : un travail superficiel qui ne dégrade pas la
          fertilité et laisse la structure du sol s'améliorer culture après culture.
        </p>
      </div>
      <div class="pile">
        <h3 class="titre-3">Transporter</h3>
        <p>
          Le Cyclo-Terre est aux normes pour circuler sur les pistes cyclables, en milieu urbain et
          péri-urbain. Adapté aux livraisons, il dispose d'une caisse arrière qui accueille deux
          piles de caisses maraîchères, pour une charge allant jusqu'à 250 kg.
        </p>
      </div>
      <div class="pile">
        <h3 class="titre-3">S'adapter</h3>
        <p>
          Le Cyclo-Terre est un porte-outils : on y monte l'outil dont la culture a besoin, et nous
          pouvons vous aider à développer des outils spécialisés.
        </p>
        <p>
          Une fois la documentation et les plans libres publiés, chacun·e pourra aussi le modifier
          et le réparer facilement.
        </p>
      </div>
    </div>
    <ul class="outils" aria-label="Outils du prototype">
      {#each outils as o}
        <li>
          <img src={picto(o.nom)} alt="" width="48" height="48" />
          <span>{o.label}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<section class="section" aria-labelledby="caracteristiques">
  <div class="colonne deux">
    <div class="pile">
      <h2 class="titre-2" id="caracteristiques">Caractéristiques</h2>
      <dl class="fiche specs">
        {#each caracteristiques as [cle, valeur]}
          <dt>{cle}</dt>
          <dd>{valeur}</dd>
        {/each}
      </dl>
    </div>
    <div class="pile">
      <Photo
        nom="points-cles"
        alt="Dessin annoté du Cyclo-Terre : traction humaine, réparabilité, porte-bagages de 250 kg, moins d'un mètre de large, porte-outil pour planches de 75 cm"
        ratio="1394 / 931"
      />
    </div>
  </div>
</section>

<section class="section" aria-labelledby="avancement">
  <div class="colonne deux">
    <h2 class="titre-2" id="avancement">Où en est-on</h2>
    <div class="prose">
      <p>
        Le Cyclo-Terre n'est pas encore en vente : le prototype est en essai sur le terrain. Mais
        nous proposons déjà des formations agricoles. À terme, il sera proposé monté, en kit ou en
        atelier d'autoconstruction, et ses plans libres permettront à chacun·e de le fabriquer
        soi-même.
      </p>
      <p>
        Les essais ont lieu à La Finca Locale, à Cartigny. Vous voulez suivre le développement,
        partager votre expérience ou y contribuer ?
      </p>
      <a class="lien" href={lettre.ancre}>S'abonner à la newsletter →</a>
      <a class="lien" href="/projet/#calendrier">Le calendrier du projet →</a>
      <a class="lien" href="/contact/">Nous écrire →</a>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="plans">
  <div class="colonne deux">
    <div class="pile">
      <p class="etiquette">Open source</p>
      <h2 class="titre-2" id="plans">Des plans libres</h2>
    </div>
    <div class="prose">
      <p>
        Les plans du Cyclo-Terre et de ses outils seront publiés sous licence libre en 2028, avec
        la sortie de la version commerciale : CERN-OHL-S v2 pour le matériel (plans, fichiers CAO,
        nomenclature) et CC BY-SA 4.0 pour la documentation.
      </p>
      <h3 class="titre-3">Ce qui sera publié</h3>
      <ul>
        <li>les plans et les fichiers CAO de la machine et des outils ;</li>
        <li>la nomenclature, avec des pièces de vélo standard que l'on trouve partout ;</li>
        <li>les instructions d'assemblage et de réglage.</li>
      </ul>
      <h3 class="titre-3">Pourquoi</h3>
      <p>
        Des plans libres permettent de construire, de réparer et de modifier une machine sans
        dépendre d'un fabricant. Cette idée vient du logiciel libre : dans les années 1980, le
        projet GNU pose le principe d'un code que chacun·e peut étudier, modifier et redistribuer. À
        partir des années 2000, le mouvement du matériel libre (open hardware) l'étend aux objets
        physiques, en publiant leurs plans sous des licences dédiées.
      </p>
      <p>
        Dans le monde agricole, L'Atelier Paysan applique cette démarche aux machines de ferme :
        diffuser librement les plans et former à l'autoconstruction, pour rendre aux paysannes et
        aux paysans la maîtrise de leur outil de travail. C'est cette démarche qui inspire
        Cyclo-Terre.
      </p>
      <p>
        Chacun·e pourra construire, modifier et partager le Cyclo-Terre, à condition de citer la
        source et de conserver la même licence. Chaque amélioration profite ainsi à l'ensemble des
        utilisatrices et des utilisateurs, et le Cyclo-Terre et ses outils s'adaptent peu à peu à
        des sols et à des cultures que nous ne connaissons pas.
      </p>
      <h3 class="titre-3">Plans libres et vente</h3>
      <p>
        Les deux sont complémentaires. Acheter un Cyclo-Terre monté, en kit ou en atelier fait
        gagner du temps et finance le développement du projet ; les plans libres garantissent que
        chacun·e peut le fabriquer, le réparer et l'améliorer sans dépendre de nous.
      </p>
      <div class="actions">
        <a class="btn btn--contour" href={lettre.ancre}>Être prévenu·e de la publication</a>
      </div>
    </div>
  </div>
</section>


<style>
  .intro {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--space-7);
    align-items: center;
    padding-block: var(--space-7) var(--space-8);
  }
  .trois {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: var(--space-7);
  }
  .outils {
    list-style: none;
    margin: var(--space-8) 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: var(--space-4);
  }
  .outils li {
    background: var(--card);
    border: 1px solid var(--rule-strong);
    padding: var(--space-4) var(--space-2) var(--space-3);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-2);
    font-family: var(--font-mono);
    font-size: 14px;
  }
  .outils img {
    width: 64px;
  }
  .specs {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: var(--space-2) var(--space-5);
  }
  @media (max-width: 960px) {
    .trois {
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }
    .outils {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
  @media (max-width: 720px) {
    .intro {
      grid-template-columns: 1fr;
      padding-block: var(--space-5) var(--space-7);
    }
  }
</style>
