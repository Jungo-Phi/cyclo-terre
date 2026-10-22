import { error } from '@sveltejs/kit';
import { lireDepot, SECTIONS } from '$lib/server/depot.js';
import { actives, parDefaut } from '$lib/i18n/index.js';

/** Une page par guide du dépôt de la machine (contenu en français). */
export async function entries() {
  const { guides } = await lireDepot();
  return actives.flatMap((lang) =>
    guides.map((g) => (lang === parDefaut ? { guide: g.slug } : { lang, guide: g.slug }))
  );
}

export async function load({ params }) {
  const { guides, version } = await lireDepot();
  const i = guides.findIndex((g) => g.slug === params.guide);
  if (i < 0) error(404, 'Guide introuvable');
  const g = guides[i];
  const voisins = guides.filter((x) => x.dossier === g.dossier);
  const j = voisins.indexOf(g);
  return {
    g,
    section: SECTIONS.find((s) => s.dossier === g.dossier)?.nom,
    version: version?.tag ?? null,
    precedent: voisins[j - 1] ? { slug: voisins[j - 1].slug, titre: voisins[j - 1].titre } : null,
    suivant: voisins[j + 1] ? { slug: voisins[j + 1].slug, titre: voisins[j + 1].titre } : null
  };
}
