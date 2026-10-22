<script>
  /*
   * Logo Cyclo-Terre en SVG intégré, animé au survol : l'engin avance vers la gauche.
   * Tracés repris tels quels des logos v3 de src/lib/assets/logo/ : seuls des groupes sont ajoutés.
   *
   * Tout dépend d'une seule grandeur, `avance`, en cycles. Par cycle :
   * - le sol et « TERRE » défilent d'une période (505 unités) vers la droite ;
   * - les roues ovales (C avant, O arrière) font 2 tours, la roue crantée 3 ;
   * - le châssis et les lettres suivent la hauteur d'essieu des roues ovales.
   * Quand le pointeur s'en va, l'engin freine régulièrement et s'arrête sur une
   * fin de cycle, donc toujours dans la position d'origine du logo.
   */

  /** @type {{ sombre?: boolean }} */
  let { sombre = false } = $props();

  const PERIODE = 505; // unités du viewBox
  const DUREE_CYCLE = 2; // s, à pleine vitesse
  const V_MAX = 1 / DUREE_CYCLE; // cycles/s
  const FREINAGE = V_MAX ** 2 / (2 * 0.5); // arrêt en un demi-cycle depuis la pleine vitesse
  const DEMARRAGE = FREINAGE * 3;

  let avance = $state(0);
  let vitesse = 0;
  let actif = false;
  /** @type {number | null} cycle entier visé pour l'arrêt */
  let butee = null;
  let image = 0;
  let instant = 0;

  /** @param {number} t */
  function pas(t) {
    const dt = Math.min((t - instant) / 1000, 0.05);
    instant = t;

    if (actif) {
      butee = null;
      vitesse = Math.min(V_MAX, vitesse + DEMARRAGE * dt);
      avance += vitesse * dt;
    } else {
      const distanceArret = vitesse ** 2 / (2 * FREINAGE);
      butee ??= Math.ceil(avance + distanceArret - 1e-9);
      const reste = butee - avance;
      // Jusqu'au point de freinage, l'engin continue de prendre de la vitesse ;
      // ensuite, décélération constante calculée pour s'arrêter pile sur la butée.
      const v =
        reste > distanceArret
          ? Math.min(V_MAX, vitesse + DEMARRAGE * dt)
          : vitesse - (vitesse ** 2 / (2 * reste)) * dt;
      if (reste <= 1e-4 || v <= 0) {
        avance = 0;
        vitesse = 0;
        butee = null;
        image = 0;
        return;
      }
      avance = Math.min(butee, avance + ((vitesse + v) / 2) * dt);
      vitesse = v;
    }
    image = requestAnimationFrame(pas);
  }

  const demarrer = () => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    actif = true;
    if (!image) {
      instant = performance.now();
      image = requestAnimationFrame(pas);
    }
  };
  const arreter = () => {
    actif = false;
  };

  const cycle = $derived(avance - Math.floor(avance));
  const angleRoues = $derived(-720 * cycle); // sens antihoraire
  const angleCrantee = $derived(-1080 * cycle);
  const decalageSol = $derived(PERIODE * cycle);
  // Hauteur d'essieu d'une ellipse de demi-axes 50 (vertical au repos) et 44 qui roule.
  const assiette = $derived.by(() => {
    const a = (angleRoues * Math.PI) / 180;
    return 50 - Math.hypot(50 * Math.cos(a), 44 * Math.sin(a));
  });

  /** @type {SVGSVGElement} */
  let svg;

  // Survol et focus clavier sont écoutés sur le lien parent quand il existe.
  $effect(() => {
    const cible = svg.closest('a') ?? svg;
    cible.addEventListener('pointerenter', demarrer);
    cible.addEventListener('pointerleave', arreter);
    cible.addEventListener('focusin', demarrer);
    cible.addEventListener('focusout', arreter);
    return () => {
      cible.removeEventListener('pointerenter', demarrer);
      cible.removeEventListener('pointerleave', arreter);
      cible.removeEventListener('focusin', demarrer);
      cible.removeEventListener('focusout', arreter);
      cancelAnimationFrame(image);
    };
  });

  const id = $props.id();
</script>

<svg
  bind:this={svg}
  class="logo-anime"
  class:sombre
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 560 300"
  width="560"
  height="300"
  role="img"
  aria-label="Cyclo-Terre"
>
  <defs>
    <clipPath id="sol-{id}">
      <rect x="24" y="230" width="495" height="68" />
    </clipPath>
  </defs>
  <rect class="fond" x="0" y="0" width="560" height="300" />
  <g fill="none" stroke-linecap="round">
    <!-- Engin : monte et descend avec la hauteur d'essieu des roues ovales. -->
    <g transform="translate(0 {assiette})">
      <path
        class="meca"
        d="M73 170L114 102L87 73L96 57 M114 102L464 10L534 57L534 150L519 154 M534 58L385 95L309 51 M385 95L385 187 M309 51L309 149L265 169 M347 168L385 187L401 183 M309 149L321 155"
        stroke-width="8"
      />
      <circle class="moyeu" cx="73" cy="169" r="8" />
      <circle class="moyeu" cx="265" cy="169" r="8" />
      <circle class="moyeu" cx="461" cy="169" r="8" />
      <!-- Roue arrière (O), centre (461, 169). -->
      <g transform="translate(461 169) rotate({angleRoues})">
        <ellipse class="encre" cx="0" cy="0" rx="44" ry="50" stroke-width="12" />
      </g>
      <!-- Roue avant (C), centre de son ellipse (71.44, 169). -->
      <g transform="translate(71.44 169) rotate({angleRoues}) translate(-71.44 -169)">
        <path
          class="encre"
          d="M82.74 120.59C79.2 119.53 75.32 119 71.44 119C47.44 119 27 141 27 169C27 197 47.44 219 71.44 219C84.78 219 99.89 212 107 199"
          stroke-width="12"
        />
      </g>
      <path
        class="encre"
        d="M129 119L161 161L193 119 M161 219L161 161 M334 119L334 219L390 219"
        stroke-width="12"
      />
      <!-- Roue crantée (C central), centre des pointes de crans (264.89, 169). -->
      <g transform="translate(264.89 169) rotate({angleCrantee}) translate(-264.89 -169)">
        <path
          class="encre-plein"
          d="M271,129C267.37,127.79,264.6,127.5,256.14,130C235.8,136,224.71,157,229.33,179C234.2,202.18,256.14,213,274.63,208C280.3,206.47,286.47,202.35,290,200C293,198,295,198,297,200C299,202,300,205,297,208C292.47,212.53,294.92,219.5,294.92,219.5L290.76,222C290.76,222,284.95,214.03,276.75,216.39C268.55,218.75,267.2,229,267.2,229L262.58,229C262.58,229,261.23,218.95,253.07,216.6C244.82,214.23,239.03,222,239.03,222L234.87,219.5C234.87,219.5,238.31,210.19,232.27,203.7C226.3,197.28,217.78,201,217.78,201L215.47,196.5C215.47,196.5,222.8,190.37,220.6,181.56C218.4,172.75,209,171,209,171L209,166.5C209,166.5,218.22,164.88,220.41,156.11C222.62,147.25,215.47,141,215.47,141L217.78,136.5C217.78,136.5,226.79,140.92,232.63,134.65C238.81,128.02,234.87,118,234.87,118L239.03,115.5C239.03,115.5,244.82,123.59,253.02,121.23C261.22,118.86,262.58,109,262.58,109L267.2,109C267.2,109,269.48,116.99,275,119C275.85,119.31,280,122,278,126C276.59,128.83,274,130,271,129Z"
        />
      </g>
    </g>
    <!-- Sol + TERRE : motif doublé à gauche, masqué à la largeur d'origine. -->
    <g clip-path="url(#sol-{id})">
      <g transform="translate({decalageSol} 0)">
        {#each [0, -PERIODE] as dx}
          <path
            class="agri"
            transform="translate({dx} 0)"
            d="M29 247L279 247 M299 247L335 247 M317 289L317 247 M379 247L351 247L351 289L379 289 M351 267L367 267 M396 289L396 247L414 247C420 247 424 252 424 257C424 262 420 267 414 267L396 267L407 267L424 289 M441 289L441 247L459 247C465 247 469 252 469 257C469 262 465 267 459 267L441 267L452 267L469 289 M514 247L486 247L486 289L514 289 M486 267L502 267"
            stroke-width="10"
          />
        {/each}
      </g>
    </g>
  </g>
</svg>

<style>
  .logo-anime {
    display: block;
    overflow: visible;
  }

  /* Couleurs identiques aux fichiers du logo (clair / fond sombre). */
  .meca {
    stroke: var(--meca);
  }
  .moyeu {
    fill: var(--meca);
  }
  .encre {
    stroke: var(--ink);
  }
  .encre-plein {
    fill: var(--ink);
  }
  .agri {
    stroke: var(--agri);
  }
  .fond {
    fill: var(--paper);
  }
  .sombre .fond {
    fill: var(--ink);
  }
  .sombre .meca {
    stroke: var(--meca-on-ink);
  }
  .sombre .moyeu {
    fill: var(--meca-on-ink);
  }
  .sombre .encre {
    stroke: var(--paper);
  }
  .sombre .encre-plein {
    fill: var(--paper);
  }
  .sombre .agri {
    stroke: var(--agri-on-ink);
  }
</style>
