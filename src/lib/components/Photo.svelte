<script>
  // Photo du dossier src/lib/photos, désignée par son nom de fichier (avec ou sans extension ni dossier).
  // Les images sont redimensionnées et converties (avif/webp) au moment du build.
  const photos = import.meta.glob('$lib/photos/*.{jpg,jpeg,png,webp}', {
    eager: true,
    import: 'default',
    query: { enhanced: true }
  });

  /** @type {{ nom: string, alt: string, ratio?: string, legende?: string, sizes?: string, prioritaire?: boolean, position?: string }} */
  let { nom, alt, ratio = '4 / 3', legende, sizes = '(max-width: 720px) 100vw, 50vw', prioritaire = false, position = 'center' } = $props();

  const src = $derived(
    Object.entries(photos).find(([chemin]) => chemin.split('/').pop()?.replace(/\.[a-z]+$/, '') === nom.split('/').pop()?.replace(/\.[a-z]+$/, ''))?.[1]
  );
</script>

{#if src}
  <figure class="photo">
    <enhanced:img
      {src}
      {alt}
      {sizes}
      style="aspect-ratio: {ratio}; object-position: {position}"
      loading={prioritaire ? 'eager' : 'lazy'}
      fetchpriority={prioritaire ? 'high' : 'auto'}
    />
    {#if legende}<figcaption>{legende}</figcaption>{/if}
  </figure>
{/if}
