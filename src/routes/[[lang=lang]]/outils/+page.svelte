<script>
  import Photo from '$lib/components/Photo.svelte';
  import SchemaProfil from '$lib/components/SchemaProfil.svelte';
  import { lettre, site } from '$lib/site.js';

  let { data } = $props();

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
    ['Voie', '75 cm, la largeur des planches du maraîchage bio-intensif popularisé par Jean-Martin Fortier'],
    ['Largeur hors tout', '92 cm'],
    ['Poids à vide', '50 kg'],
    ['Cadre', 'profilés inox'],
    ['Surface', 'environ 1 hectare par machine']
  ];

</script>

<svelte:head>
  <title>Outils — Cyclo-Terre</title>
  <meta
    name="description"
    content="Le Cyclo-Terre, porte-outils maraîcher léger et vélo-cargo pour les micro-fermes : travail superficiel du sol, transport, plans libres et formations."
  />
</svelte:head>

<section class="colonne intro">
  <div class="pile">
    <h1 class="titre-1">Le Cyclo-Terre</h1>
    <p class="chapo">
      Le Cyclo-Terre est une machine agricole légère à propulsion humaine, conçue pour les
      micro-fermes. Ce porte-outils maraîcher permet un travail du sol superficiel, avec la qualité
      du travail manuel. Il fait aussi office de vélo-cargo, sur la ferme comme en ville.
    </p>
  </div>
  <Photo
    nom="herbe-trois-quart"
    alt="Le prototype du Cyclo-Terre de trois-quarts, dans l'herbe"
    ratio="3 / 2"
    prioritaire
  />
</section>

<section class="section" aria-labelledby="fait">
  <div class="colonne">
    <h2 class="titre-2 entete-section" id="fait">Fonctions</h2>
    <div class="trois">
      <div class="pile">
        <h3 class="titre-3">Travail du sol</h3>
        <p>
          Réalisez plus efficacement toutes les opérations du maraîchage manuel. Le sol n'y est
          travaillé qu'en surface, pour ne pas dégrader sa fertilité.
        </p>
      </div>
      <div class="pile">
        <h3 class="titre-3">Transport</h3>
        <p>
          Transportez de lourdes charges en milieu urbain et périurbain avec une machine qui respecte
          les normes des pistes cyclables. Chargez jusqu'à 250 kg, et jusqu'à deux piles de caisses
          maraîchères dans la caisse arrière.
        </p>
      </div>
      <div class="pile">
        <h3 class="titre-3">Polyvalence</h3>
        <p>
          Le Cyclo-Terre est un porte-outils : son équipement de base peut être complété par des
          outils spécialisés, adaptés à chaque terrain.
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
      <h2 class="titre-2" id="caracteristiques">En chiffres</h2>
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
    <h2 class="titre-2" id="avancement">Où en est-on ?</h2>
    <div class="prose">
      <p>
        Le Cyclo-Terre n'est pas encore en vente : la version commerciale est prévue pour 2028. Le
        prototype est en essai à La Finca Locale, à Cartigny.
      </p>
      <p>Envie de suivre le développement ?</p>
      <a class="lien" href={lettre.ancre}>S'abonner à la newsletter →</a>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="plans">
  <div class="colonne deux">
    <h2 class="titre-2" id="plans">Des plans libres</h2>
    <div class="prose">
      <p>
        Les plans du Cyclo-Terre et de ses outils seront publiés en 2028, avec la version
        commerciale, sous licence CERN-OHL-S v2 pour le matériel et CC BY-SA 4.0 pour la
        documentation.
      </p>
      <h3 class="titre-3">Pourquoi</h3>
      <p>
        Le Cyclo-Terre s'inscrit dans le mouvement du matériel libre, ou open hardware : ses plans
        sont publiés pour que chacun·e puisse le fabriquer, le réparer et le modifier sans dépendre
        d'un fabricant. Notre première inspiration est L'Atelier Paysan, une coopérative qui diffuse
        des plans de machines agricoles et forme à l'autoconstruction.
      </p>
      <p>
        Partagées sous la même licence, les contributions de chacun·e font évoluer la machine petit à
        petit pour l'adapter à tous les terrains. Elles font aussi vivre une communauté qui s'entraide
        et échange ses savoir-faire.
      </p>
      <h3 class="titre-3">Un modèle ouvert</h3>
      <p>
        Plans, fichiers CAO, liste des pièces et instructions d'assemblage : tout est en accès libre,
        pour que personne ne dépende de nous. Acheter un Cyclo-Terre ou suivre un atelier, c'est
        soutenir le projet.
      </p>
      <div class="actions">
        <a class="btn btn--contour" href={lettre.ancre}>Être prévenu·e de la publication</a>
      </div>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="titre-construire" id="construire">
  <div class="colonne">
    <h2 class="titre-2 entete-section" id="titre-construire">Construire et contribuer</h2>

    <div class="deux">
      <div class="pile">
        <h3 class="titre-3">Les plans</h3>
        {#if data.version}
          <p>
            Version <strong>{data.version.tag}</strong>, publiée le {data.version.date.split('-').reverse().join('.')}.
          </p>
          <ul class="telechargements">
            {#each data.version.fichiers as f}
              <li><a href={f.url}>{f.nom}</a> <span class="annotation">{f.taille}</span></li>
            {/each}
          </ul>
          <a class="lien" href={site.depot}>Toutes les sources sur GitHub →</a>
        {:else}
          <p>Les plans seront publiés ici en 2028.</p>
        {/if}

        <h3 class="titre-3">Les guides</h3>
        {#if data.sections.length}
          {#each data.sections as s}
            <div class="pile guides">
              <p class="etiquette">{s.nom}</p>
              <ul>
                {#each s.guides as g}
                  <li><a href="/outils/guides/{g.slug}/">{g.titre}</a></li>
                {/each}
              </ul>
            </div>
          {/each}
        {:else}
          <p>
            Manuel d'utilisation et d'entretien, consignes de sécurité, instructions d'assemblage : les
            guides paraîtront ici au fil de leur rédaction.
          </p>
        {/if}
      </div>

      <div class="pile">
        <h3 class="titre-3">Participer</h3>
        <p>
          Une question, une idée, une photo de votre construction, une correction des guides ou une
          modification des plans : nous serons heureux de vous lire.
        </p>
        <div class="actions">
          <a class="btn btn--encre" href="/contact/">Écrivez-nous</a>
        </div>
        <a class="lien" href={site.discussions}>Les discussions sur GitHub →</a>
        <a class="lien" href={site.contribuer}>Guide de contribution →</a>
      </div>
    </div>
  </div>
</section>

<style>
  .telechargements,
  .guides ul {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid var(--rule-strong);
  }
  .telechargements li,
  .guides li {
    display: flex;
    justify-content: space-between;
    gap: var(--space-3);
    padding: var(--space-2) 0;
    border-bottom: 1px solid var(--rule-strong);
  }
  .guides {
    gap: var(--space-2);
  }
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
