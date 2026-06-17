<script>
  import photoHero from './assets/Herbe-trois-quart.jpg';
  import photoProfil from './assets/herbe-cote.jpeg';
  import photoPorteVelo from './assets/porte-vélo.jpeg';
  import photoFondateurs from './assets/Cyclo-Terre Arnaud et Youri.jpeg';

  /**
   * @type {{ src: any; alt: any; } | null}
   */
  let lightboxImage = null;

  /**
   * @param {string} src
   * @param {string} alt
   */
  function openLightbox(src, alt) {
    lightboxImage = { src, alt };
  }

  function closeLightbox() {
    lightboxImage = null;
  }

  /**
   * @param {{ key: string; }} event
   */
  function handleKeydown(event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<main>
  <section class="hero">
    <div class="hero-content">
      <h1>Cyclo-Terre</h1>
      <p class="tagline">La machine agricole à propulsion humaine conçue pour les petites exploitations.</p>
    </div>
    <div class="hero-image">
      <img src={photoHero} alt="Prototype du Cyclo-Terre vu de trois-quarts, dans l'herbe" />
    </div>
  </section>

  <section class="section project">
    <div class="container">
      <h2>Le projet</h2>
      <p>
        Le Cyclo-Terre est une machine agricole légère à propulsion humaine, pensée pour les micro-fermes et les petites exploitations.
        Elle permet de travailler le sol, transporter des charges et se passer des machines motorisées.
      </p>
      <p>
        Conçue avec des pièces standard de vélo, elle est réparable, adaptable et auto-constructible.
        Son objectif : rendre les outils agricoles plus sobres, plus accessibles et plus respectueux des sols.
      </p>
    </div>
  </section>

  <section class="section features">
    <div class="container">
      <h2>Points forts</h2>
      <div class="cards">
        <article class="card">
          <h3>Traction humaine</h3>
          <p>Préparer le sol sans l'abîmer.</p>
        </article>
        <article class="card">
          <h3>Réparabilité</h3>
          <p>Pièces standards de vélo et visserie uniforme.</p>
        </article>
        <article class="card">
          <h3>Porte-bagages</h3>
          <p>Charge jusqu'à 250 kg, adapté aux caisses maraîchères.</p>
        </article>
        <article class="card">
          <h3>Format compact</h3>
          <p>Moins d'1 mètre de large pour rouler sur les pistes cyclables.</p>
        </article>
        <article class="card">
          <h3>Tricycle stable</h3>
          <p>Conception simple, légère et flexible.</p>
        </article>
        <article class="card">
          <h3>Porte-outil</h3>
          <p>Sarcoire, semoir, disques butteurs, herse rotative.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section gallery">
    <div class="container">
      <h2>Galerie</h2>
      <div class="gallery-grid">
        <button type="button" class="gallery-item" on:click={() => openLightbox(photoPorteVelo, 'Cyclo-Terre utilisé comme porte-vélo')} aria-label="Agrandir : Cyclo-Terre utilisé comme porte-vélo">
          <img src={photoPorteVelo} alt="Cyclo-Terre utilisé comme porte-vélo" />
          <span class="caption">Transport et charge</span>
        </button>
        <button type="button" class="gallery-item" on:click={() => openLightbox(photoProfil, 'Cyclo-Terre vu de profil dans l\'herbe')} aria-label="Agrandir : Cyclo-Terre vu de profil dans l'herbe">
          <img src={photoProfil} alt="Premier prototype du Cyclo-Terre" />
          <span class="caption">Le prototype</span>
        </button>
        <button type="button" class="gallery-item" on:click={() => openLightbox(photoFondateurs, 'Les fondateurs : Arnaud et Youri')} aria-label="Agrandir : Les fondateurs Arnaud et Youri">
          <img src={photoFondateurs} alt="Arnaud et Youri devant le premier prototype" />
          <span class="caption">Les fondateurs : Arnaud et Youri</span>
        </button>
      </div>
    </div>
  </section>

  <section class="section founders">
    <div class="container">
      <h2>Les fondateurs</h2>
      <div class="founders-grid">
        <article class="founder">
          <h3>Arnaud Jungo</h3>
          <p>
            Jeune ingénieur en mécanique, j'aime concevoir des machines utiles, robustes et accessibles.
            Ce n'est pas l'entrepreneuriat qui est venu en premier, c'est le projet : rencontrer Youri, constater un besoin concret sur le terrain et avoir envie de construire une vraie solution avec lui.
          </p>
        </article>
        <article class="founder">
          <h3>Youri Vezza</h3>
          <p>
            Jeune ingénieur agronome, j'ai monté ma ferme maraîchère à Genève, <em>La Finca Locale</em>, en 2016, et j'y travaille depuis au quotidien.
            Devenir entrepreneur était pour moi un moyen d'agir concrètement sur le modèle alimentaire, en testant des solutions qui améliorent le quotidien des paysan·nes.
          </p>
        </article>
      </div>
      <p class="founders-context">
        Le Cyclo-Terre est né d'un besoin constaté sur le terrain : il manquait des outils adaptés aux petites surfaces.
        Ensemble, ils veulent proposer une agriculture plus sobre et à taille humaine.
      </p>
    </div>
  </section>
</main>

{#if lightboxImage}
  <div class="lightbox" on:click={closeLightbox} on:keydown={(event) => event.key === 'Escape' && closeLightbox()} role="dialog" aria-modal="true" aria-label="Image agrandie" tabindex="-1">
    <button class="lightbox-close" on:click={closeLightbox} aria-label="Fermer">&times;</button>
    <img src={lightboxImage.src} alt={lightboxImage.alt} />
  </div>
{/if}

<footer>
  <div class="container">
    <p>Prototype fabriqué début 2026 — projet en phase de développement.</p>
    <p>Contact : <a href="mailto:contact@cyclo-terre.ch">contact@cyclo-terre.ch</a></p>
  </div>
</footer>
