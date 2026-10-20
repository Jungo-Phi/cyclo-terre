<script>
  import schema from '$lib/assets/schema-profil.svg?raw';
  /** @type {{ label?: string }} */
  let { label = "Schéma de profil du Cyclo-Terre avec quatre repères numérotés et la cote d'empattement" } = $props();
</script>

<div class="schema" role="img" aria-label={label}>
  {@html schema.replace(/^<\?xml[^>]*>\s*/, '').replace('<svg ', '<svg aria-hidden="true" ')}
</div>

<style>
  .schema :global(svg) {
    width: 100%;
    height: auto;
  }
  .schema :global(text) {
    font-family: var(--font-mono);
  }
</style>
