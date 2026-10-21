<script>
  import Photo from '$lib/components/Photo.svelte';
  import SchemaProfil from '$lib/components/SchemaProfil.svelte';
  import Contribuer from '$lib/components/Contribuer.svelte';
  import { mailto } from '$lib/site.js';

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
    ['Versions prévues', 'deux : mécanique, et à assistance électrique'],
    ['Charge utile', "jusqu'à 250 kg"],
    ['Voie', 'pensée pour les planches de 75 cm, standard en permaculture'],
    ['Largeur hors tout', '92 cm'],
    ['Poids à vide', '50 kg'],
    ['Cadre', 'profilés inox'],
    ['Empreinte carbone', 'environ 200 kg CO₂ éq. sur le cycle de vie (motoculteur : environ 1000 kg)'],
    ['Surface visée', 'une machine pour environ 1 hectare']
  ];

  const etapes = [
    ['Février 2026', 'Premier prototype construit'],
    ['2026–2027', 'Essais agronomiques et mesures sur champ, à La Finca Locale'],
    ['2026–2027', 'Second prototype, à assistance électrique'],
    ['2028', 'Version commerciale, construite à Genève']
  ];
</script>

<svelte:head>
  <title>La machine — Cyclo-Terre</title>
  <meta
    name="description"
    content="Le Cyclo-Terre, porte-outils maraîcher léger et vélo-cargo : ce qu'il fait, ses caractéristiques, son état de développement et ses plans libres."
  />
</svelte:head>

<section class="colonne intro">
  <div class="pile">
    <p class="etiquette">La machine</p>
    <h1 class="titre-1">Le Cyclo-Terre</h1>
    <p class="chapo">
      Un porte-outils mobile et léger, adapté aux micro-fermes, au service d'une méthode de
      production agroécologique. Il fait à la fois office d'engin agricole et de vélo-cargo.
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
    <h2 class="titre-2" id="pourquoi">Pourquoi cet outil</h2>
    <div class="prose">
      <p>
        Après six ans de production maraîchère biologique en travail exclusivement manuel, le
        constat sur la qualité et la fertilité des sols est excellent, mais la méthode est trop
        éprouvante physiquement et chronophage.
      </p>
      <p>
        Le Cyclo-Terre remplace ce travail manuel par une mécanique low-tech, dans le respect strict
        d'une méthode qui préserve et améliore la fertilité des sols.
      </p>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="fait">
  <div class="colonne">
    <h2 class="titre-2 entete-section" id="fait">Ce qu'il fait</h2>
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
          Récoltes, caisses, matériel : jusqu'à 250 kg, et des livraisons en milieu urbain et
          péri-urbain.
        </p>
      </div>
      <div class="pile">
        <h3 class="titre-3">Se réparer</h3>
        <p>
          Cadre en profilés inox, pièces de vélo standard : l'entretien se fait à l'atelier, par
          vous ou par un mécanicien vélo.
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
      <p class="annotation">Valeurs du prototype actuel.</p>
    </div>
    <div class="pile">
      <SchemaProfil />
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
    <div class="pile">
      <h2 class="titre-2" id="avancement">Où en est-on</h2>
      <p>Le Cyclo-Terre n'est pas encore en vente. Les formations agricoles, elles, ont déjà lieu.</p>
      <p>
        Les essais ont lieu sur notre propre ferme. Vous voulez suivre le développement, partager
        votre expérience ou y contribuer ?
      </p>
      <a class="lien" href="/contact/">Nous écrire →</a>
    </div>
    <ol class="etapes">
      {#each etapes as [quand, quoi]}
        <li><span class="quand">{quand}</span><span>{quoi}</span></li>
      {/each}
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="plans">
  <div class="colonne deux">
    <h2 class="titre-2" id="plans">Les plans</h2>
    <div class="prose">
      <p>
        Les plans ne sont pas encore publiés. Ils le seront sous licence libre, pour que chacun
        puisse construire, modifier et partager le Cyclo-Terre en citant la source et en gardant la
        même licence. Les retours d'expérience des utilisateurs nourrissent l'innovation, pour
        adapter l'outillage aux différents biotopes.
      </p>
      <div class="actions">
        <a class="btn btn--contour" href={mailto('Prévenez-moi de la publication des plans')}>
          Être prévenu·e de la publication
        </a>
      </div>
    </div>
  </div>
</section>

<Contribuer />

<style>
  .intro {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: var(--space-7);
    align-items: center;
    padding-block: var(--space-8) var(--space-9);
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
  .etapes {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 2px solid var(--ink);
  }
  .etapes li {
    display: grid;
    grid-template-columns: 140px 1fr;
    gap: var(--space-4);
    padding: var(--space-4) 0;
    border-bottom: 1px solid var(--rule-strong);
  }
  .quand {
    font-family: var(--font-mono);
    font-size: 15px;
    padding-top: 2px;
  }
  @media (max-width: 900px) {
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
      padding-block: var(--space-6) var(--space-8);
    }
    .etapes li {
      grid-template-columns: 1fr;
      gap: var(--space-1);
    }
  }
</style>
