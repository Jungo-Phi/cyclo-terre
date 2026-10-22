import { error } from '@sveltejs/kit';
import { actualites, actualite } from '$lib/contenu.js';
import { actives, parDefaut } from '$lib/i18n/index.js';

/** Une page par actualité, dans chaque langue publiée (contenu en français). */
export function entries() {
  return actives.flatMap((lang) =>
    actualites.map((a) => (lang === parDefaut ? { slug: a.slug } : { lang, slug: a.slug }))
  );
}

export function load({ params }) {
  const a = actualite(params.slug);
  if (!a) error(404, 'Actualité introuvable');
  return { a };
}
