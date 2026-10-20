<script>
  /** @type {{ titre?: string, texte?: string }} */
  let {
    titre = 'Contribuer au projet',
    texte = "Vous cultivez, enseignez, faites de la recherche, construisez des vélos ou soutenez l'agroécologie ? Le Cyclo-Terre se développe avec celles et ceux qui l'utiliseront. Écrivez-nous pour en discuter, proposer un lieu de formation ou un partenariat."
  } = $props();
</script>

<section class="section bande" aria-labelledby="contribuer">
  <div class="colonne bloc">
    <h2 class="titre-2" id="contribuer">{titre}</h2>
    <div class="pile">
      <p class="chapo">{texte}</p>
      <div class="actions"><a class="btn btn--encre" href="/contact/">Nous écrire</a></div>
    </div>
  </div>
</section>

<style>
  .bloc {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
    gap: var(--space-7);
    align-items: start;
  }
  @media (max-width: 720px) {
    .bloc {
      grid-template-columns: 1fr;
      gap: var(--space-5);
    }
  }
</style>
