<script>
  import { site } from '$lib/site.js';
</script>

<svelte:head>
  <title>Mentions légales — Cyclo-Terre</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="colonne section prose">
  <h1 class="titre-1">Mentions légales</h1>

  <h2 class="titre-3">Responsables du site</h2>
  <p>
    Cyclo-Terre, projet porté par Youri Vezza et Arnaud Jungo<br />
    [STRUCTURE JURIDIQUE, PAS ENCORE FIXÉE]<br />
    6 A chemin de Drize, 1256 Troinex<br />
    <a href="mailto:{site.email}">{site.email}</a>
  </p>

  <h2 class="titre-3">Hébergement</h2>
  <p>GitHub Pages, GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, États-Unis.</p>

  <h2 class="titre-3">Contenus</h2>
  <p>
    Textes, photos et schémas : © Cyclo-Terre, sauf mention contraire. Les plans de la machine
    seront publiés sous licence libre : CERN-OHL-S v2 pour le matériel, CC BY-SA 4.0 pour la
    documentation.
  </p>

  <h2 class="titre-3">Responsabilité</h2>
  <p>
    Les informations de ce site sont données avec soin mais sans garantie. Le Cyclo-Terre est un
    prototype en développement ; ses caractéristiques peuvent changer.
  </p>
</section>
