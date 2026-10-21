<script>
  import { site, mailto } from '$lib/site.js';
</script>

<svelte:head>
  <title>Confirmez votre inscription — Cyclo-Terre</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="colonne section pile page">
  <p class="etiquette">Lettre d'information</p>
  <h1 class="titre-1">Encore une étape : confirmez votre adresse</h1>
  <p class="chapo">
    Nous venons de vous envoyer un e-mail. Cliquez sur le lien qu'il contient pour confirmer votre
    inscription. Sans cette confirmation, vous ne recevrez pas la lettre.
  </p>

  <ol class="etapes">
    <li><span class="num">01</span><span>Ouvrez votre messagerie.</span></li>
    <li><span class="num">02</span><span>Cherchez l'e-mail de Cyclo-Terre ; il arrive en général en moins de cinq minutes.</span></li>
    <li><span class="num">03</span><span>Cliquez sur le lien de confirmation.</span></li>
  </ol>

  <div class="pile aide">
    <h2 class="titre-3">Pas d'e-mail ?</h2>
    <ul>
      <li>Regardez dans le dossier des courriers indésirables ou « Promotions ».</li>
      <li>Vérifiez l'adresse saisie et <a href="/contact/#lettre">réinscrivez-vous</a>.</li>
      <li>
        Toujours rien ? <a href={mailto("Inscription à la lettre d'information")}>Écrivez-nous</a>
        à {site.email}.
      </li>
    </ul>
  </div>

  <div class="actions"><a class="btn btn--contour" href="/">Retour à l'accueil</a></div>
</section>

<style>
  .page {
    gap: var(--space-6);
    max-width: 900px;
  }
  .etapes {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 2px solid var(--ink);
    max-width: 68ch;
  }
  .etapes li {
    display: grid;
    grid-template-columns: 56px 1fr;
    gap: var(--space-4);
    padding: var(--space-4) 0;
    border-bottom: 1px solid var(--rule-strong);
  }
  .num {
    font-family: var(--font-mono);
    font-size: 15px;
    color: var(--ink-muted);
    padding-top: 2px;
  }
  .aide {
    gap: var(--space-3);
  }
  .aide ul {
    margin: 0;
    padding-left: 1.2em;
  }
</style>
