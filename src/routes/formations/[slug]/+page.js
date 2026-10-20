import { error } from '@sveltejs/kit';
import { formations, formation, sessionsDe } from '$lib/contenu.js';

/** Une page par fichier de src/content/formations. */
export function entries() {
  return formations.map((f) => ({ slug: f.slug }));
}

export function load({ params }) {
  const f = formation(params.slug);
  if (!f) error(404, 'Formation introuvable');
  return { f, sessions: sessionsDe(f.slug) };
}
