<script>
  import { volets } from '$lib/contenu.js';
  /** @type {{ volet: 'agricole' | 'mecanique' }} */
  let { volet } = $props();
</script>

<span class="tag tag--{volets[volet].classe}">{volets[volet].nom}</span>
