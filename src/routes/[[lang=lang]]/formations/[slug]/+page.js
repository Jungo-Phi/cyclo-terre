import { error } from '@sveltejs/kit';
import { formations, formation, sessionsDe } from '$lib/contenu.js';
import { actives, parDefaut } from '$lib/i18n/index.js';

/** Une page par fichier de src/content/formations, dans chaque langue publiée (contenu en français). */
export function entries() {
  return actives.flatMap((lang) =>
    formations.map((f) => (lang === parDefaut ? { slug: f.slug } : { lang, slug: f.slug }))
  );
}

export function load({ params }) {
  const f = formation(params.slug);
  if (!f) error(404, 'Formation introuvable');
  return { f, sessions: sessionsDe(f.slug) };
}
