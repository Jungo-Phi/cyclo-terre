<script>
  import Etiquette from './Etiquette.svelte';
  import { periode } from '$lib/contenu.js';
  /** @type {{ sessions: any[], vide?: string }} */
  let { sessions, vide = "Aucune date publiée pour l'instant." } = $props();
</script>

{#if sessions.length}
  <ul class="agenda">
    {#each sessions as s (s.slug)}
      <li>
        <a class="ligne" href="/formations/{s.formation}/">
          <span class="date">{periode(s)}</span>
          <Etiquette volet={s.f.volet} />
          <span class="titre">{s.f.titre}</span>
          <span class="meta" class:complet={s.placesRestantes === 0}>
            {s.lieu ?? s.f.lieu ?? ''}{#if s.placesRestantes === 0} · Complet, liste d'attente{:else if s.placesRestantes != null} · {s.placesRestantes} places{/if}
          </span>
        </a>
      </li>
    {/each}
  </ul>
{:else}
  <p class="vide">{vide}</p>
{/if}

<style>
  .agenda {
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 2px solid var(--ink);
  }
  .ligne {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-2) var(--space-6);
    align-items: baseline;
    padding: 20px 0;
    border-bottom: 1px solid var(--rule-strong);
    color: var(--ink);
    text-decoration: none;
  }
  .ligne:hover .titre {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
  .date {
    flex: 0 0 140px;
    font-family: var(--font-mono);
    font-size: 15px;
  }
  .ligne :global(.tag) {
    flex: 0 0 120px;
    text-align: center;
  }
  .titre {
    flex: 1 1 240px;
    font-family: var(--font-titre);
    font-weight: 600;
    font-size: 23px;
    line-height: 1.15;
  }
  .meta {
    font-family: var(--font-mono);
    font-size: 14px;
    color: var(--ink-muted);
  }
  .meta.complet {
    color: var(--ink);
  }
  .vide {
    border-top: 2px solid var(--ink);
    padding-top: var(--space-5);
    color: var(--ink-muted);
  }
</style>
