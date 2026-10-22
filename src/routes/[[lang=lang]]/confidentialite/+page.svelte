<script>
  import { site } from '$lib/site.js';
</script>

<svelte:head>
  <title>Confidentialité — Cyclo-Terre</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<section class="colonne section prose">
  <h1 class="titre-1">Confidentialité</h1>
  <p class="chapo">Ce site ne dépose aucun cookie et ne mesure pas votre navigation.</p>

  <h2 class="titre-3">Ce que nous recevons</h2>
  <p>
    Quand vous nous écrivez ou vous vous inscrivez à une formation, nous recevons votre e-mail et
    ce que vous y indiquez : nom, téléphone, remarques. Nous les utilisons uniquement pour vous
    répondre, organiser la formation et, si vous vous y abonnez, vous envoyer la newsletter. Chaque envoi contient un lien pour vous désabonner.
  </p>

  <h2 class="titre-3">Combien de temps</h2>
  <p>
    Les données d'inscription sont supprimées 12 mois après la formation, sauf
    obligation comptable. Nous ne les transmettons à aucun tiers, hormis les prestataires
    mentionnés ci-dessous.
  </p>

  <h2 class="titre-3">Hébergement</h2>
  <p>
    Le site est hébergé par GitHub Pages (GitHub Inc., États-Unis), qui peut enregistrer
    techniquement l'adresse IP des personnes qui consultent le site. Les polices de caractères
    sont servies par le site lui-même, sans appel à un service tiers.
  </p>
  <p>
    La newsletter est envoyée avec Infomaniak (Infomaniak Network SA, Genève), qui
    héberge les données en Suisse et conserve votre adresse jusqu'à votre désabonnement.
    L'inscription est confirmée par un e-mail (double validation). Le formulaire est protégé
    contre les robots par une vérification calculée dans votre navigateur, fournie par
    Infomaniak, sans cookie.
  </p>

  <h2 class="titre-3">Vos droits</h2>
  <p>
    Conformément à la loi fédérale sur la protection des données (LPD), vous pouvez demander à
    consulter, corriger ou supprimer vos données en écrivant à
    <a href="mailto:{site.email}">{site.email}</a>.
  </p>
</section>
