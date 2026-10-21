<script>
  import { lettre, mailto } from '$lib/site.js';

  let courriel = $state('');

  /** Sans formulaire Infomaniak configuré : on ouvre un e-mail « Abonnez-moi ». */
  function sAbonner(/** @type {SubmitEvent} */ e) {
    if (lettre.action) return;
    e.preventDefault();
    window.location.href = mailto(
      "Abonnement à la lettre d'information",
      `Bonjour,\n\nJe souhaite recevoir la lettre d'information de Cyclo-Terre à l'adresse : ${courriel}\n\nMerci !`
    );
  }
</script>

<form class="lettre" method="post" action={lettre.action || undefined} onsubmit={sAbonner}>
  <label class="annotation" for="lettre-courriel">Votre adresse e-mail</label>
  <div class="champ">
    <input
      id="lettre-courriel"
      name="email"
      type="email"
      autocomplete="email"
      required
      bind:value={courriel}
    />
    <button class="btn btn--encre" type="submit">S'abonner</button>
  </div>
</form>

<style>
  .lettre {
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    max-width: 520px;
  }
  .champ {
    display: flex;
    gap: var(--space-2);
  }
  input {
    flex: 1 1 auto;
    min-width: 0;
    min-height: 48px;
    padding: 0 var(--space-3);
    border: 1px solid var(--ink);
    border-radius: var(--radius-0);
    background: var(--card);
    color: var(--ink);
    font: inherit;
  }
  @media (max-width: 720px) {
    .champ {
      flex-direction: column;
    }
  }
</style>
