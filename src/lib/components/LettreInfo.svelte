<script>
  // Inscription à la lettre d'information Infomaniak.
  // Infomaniak attend une requête JSONP (GET + paramètre `callback`), protégée par un captcha
  // ALTCHA (preuve de travail calculée par le navigateur, sans cookie ni image à déchiffrer).
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import { lettre } from '$lib/site.js';
  import { chemin, langueDe } from '$lib/i18n/index.js';

  /** @type {HTMLFormElement} */
  let formulaire;
  let envoi = $state(false);
  let erreur = $state('');

  onMount(() => {
    if (!document.querySelector(`script[src="${lettre.scriptCaptcha}"]`)) {
      const s = document.createElement('script');
      s.type = 'module';
      s.src = lettre.scriptCaptcha;
      document.head.append(s);
    }
  });

  /** Requête JSONP vers Infomaniak. @param {URLSearchParams} params */
  function jsonp(params) {
    return new Promise((resolve, reject) => {
      const nom = `lettreRetour${Date.now()}`;
      const script = document.createElement('script');
      const fin = () => {
        delete (/** @type {any} */ (window))[nom];
        script.remove();
      };
      /** @type {any} */ (window)[nom] = (/** @type {any} */ r) => {
        fin();
        resolve(r);
      };
      params.set('callback', nom);
      script.src = `${lettre.action}?${params}`;
      script.onerror = () => {
        fin();
        reject(new Error('réseau'));
      };
      document.head.append(script);
    });
  }

  /** @param {SubmitEvent} e */
  async function envoyer(e) {
    e.preventDefault();
    erreur = '';
    envoi = true;
    try {
      /** @type {any} */
      const widget = formulaire.querySelector('altcha-widget');
      const preuve = /** @type {HTMLInputElement | null} */ (formulaire.querySelector('input[name="altcha"]'));
      if (widget && !preuve?.value && typeof widget.verify === 'function') await widget.verify();

      const params = new URLSearchParams(/** @type {any} */ (new FormData(formulaire)));
      const r = await jsonp(params);
      const erreurs = Object.values(r?.err ?? {});
      if (erreurs.length) {
        erreur = erreurs.includes('altcha')
          ? 'La vérification anti-robot a échoué. Réessayez.'
          : String(erreurs[0]);
        widget?.reset?.();
        return;
      }
      goto(chemin(langueDe(page.params.lang), lettre.confirmation));
    } catch {
      erreur = "L'inscription n'a pas pu être envoyée. Réessayez dans un instant.";
    } finally {
      envoi = false;
    }
  }
</script>

<form
  class="lettre"
  method="post"
  action={lettre.action}
  bind:this={formulaire}
  onsubmit={envoyer}
>
  <input type="hidden" name="key" value={lettre.cle} />
  <input type="hidden" name="webform_id" value={lettre.formulaire} />
  <!-- Pièges à robots demandés par Infomaniak : à laisser vides. -->
  <input class="piege" type="text" name="inf_email_check" autocomplete="off" tabindex="-1" aria-hidden="true" />
  <input class="piege" type="text" name="website" autocomplete="off" tabindex="-1" aria-hidden="true" />

  <label class="annotation" for="lettre-courriel">Votre adresse e-mail</label>
  <div class="champ">
    <input
      id="lettre-courriel"
      name={lettre.champEmail}
      type="email"
      autocomplete="email"
      required
      aria-describedby="lettre-note{erreur ? ' lettre-erreur' : ''}"
      aria-invalid={erreur ? 'true' : undefined}
    />
    <button class="btn btn--encre" type="submit" disabled={envoi}>
      {envoi ? 'Envoi…' : "S'abonner"}
    </button>
  </div>
  <altcha-widget hidelogo hidefooter floating challengeurl={lettre.captcha}></altcha-widget>
  {#if erreur}<p class="erreur" id="lettre-erreur" role="alert">Erreur : {erreur}</p>{/if}
  <p class="annotation" id="lettre-note">
    Votre adresse sert uniquement à vous envoyer des nouvelles de nos activités. Chaque lettre
    contient un lien de désabonnement.
  </p>
</form>

<style>
  .piege {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  .erreur {
    margin: 0;
    padding-left: var(--space-3);
    border-left: 2px solid var(--ink);
    color: var(--ink);
  }
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
