<script>
  import { mailto } from '$lib/site.js';
</script>

<svelte:head>
  <title>E-mail de confirmation envoyé — Cyclo-Terre</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="colonne section pile page">
  <p class="etiquette">Lettre d'information</p>
  <h1 class="titre-1">E-mail de confirmation envoyé</h1>
  <p class="chapo">Cliquez sur le lien qu'il contient pour valider votre inscription.</p>
  <p class="annotation">
    Rien reçu d'ici quelques minutes ? Regardez dans les courriers indésirables, ou
    <a href={mailto("Inscription à la lettre d'information")}>écrivez-nous</a>.
  </p>
  <div class="actions"><a class="btn btn--contour" href="/">Retour à l'accueil</a></div>
</section>

<style>
  .page {
    gap: var(--space-5);
    max-width: 900px;
  }
</style>
