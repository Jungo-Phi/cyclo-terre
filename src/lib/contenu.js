// Lecture du contenu éditable (dossier src/content).
// Une formation = un fichier Markdown dans src/content/formations/.
// Une date de formation = un fichier Markdown dans src/content/sessions/.
import { parse } from 'yaml';
import { marked } from 'marked';

const fichiersFormations = import.meta.glob('/src/content/formations/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});
const fichiersSessions = import.meta.glob('/src/content/sessions/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
});

/** Sépare l'en-tête YAML (entre deux lignes ---) du texte Markdown. */
function lire(brut, chemin) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(brut);
  if (!m) throw new Error(`En-tête manquant dans ${chemin}`);
  const slug = chemin.split('/').pop().replace(/\.md$/, '');
  return { slug, ...parse(m[1]), html: marked.parse(m[2].trim()) };
}

/** @typedef {'agricole' | 'mecanique'} Volet */

export const volets = {
  agricole: { nom: 'Agricole', classe: 'agri' },
  mecanique: { nom: 'Mécanique', classe: 'meca' }
};

/** Toutes les formations publiées, dans l'ordre choisi (champ « ordre »). */
export const formations = Object.entries(fichiersFormations)
  .map(([chemin, brut]) => lire(/** @type {string} */ (brut), chemin))
  .filter((f) => !f.brouillon)
  .sort((a, b) => (a.ordre ?? 99) - (b.ordre ?? 99));

/** @param {string} slug */
export function formation(slug) {
  return formations.find((f) => f.slug === slug);
}

const aujourdhui = new Date().toISOString().slice(0, 10);

/** Dates à venir (ou en cours), triées de la plus proche à la plus lointaine. */
export const sessions = Object.entries(fichiersSessions)
  .map(([chemin, brut]) => lire(/** @type {string} */ (brut), chemin))
  .filter((s) => !s.brouillon)
  .map((s) => ({ ...s, date: String(s.date), fin: s.fin ? String(s.fin) : undefined }))
  .filter((s) => (s.fin ?? s.date) >= aujourdhui && formation(s.formation))
  .map((s) => ({ ...s, f: formation(s.formation) }))
  .sort((a, b) => a.date.localeCompare(b.date));

/** @param {string} slug */
export function sessionsDe(slug) {
  return sessions.filter((s) => s.formation === slug);
}

/** 2026-11-14 → 14.11.2026 */
export function dateCourte(iso) {
  const [a, m, j] = iso.split('-');
  return `${j}.${m}.${a}`;
}

/** Date ou période lisible : « 14.11.2026 » ou « 9–13.11.2026 ». */
export function periode(s) {
  if (!s.fin || s.fin === s.date) return dateCourte(s.date);
  const [a1, m1, j1] = s.date.split('-');
  const [a2, m2, j2] = s.fin.split('-');
  if (a1 === a2 && m1 === m2) return `${j1}–${j2}.${m2}.${a2}`;
  return `${dateCourte(s.date)} – ${dateCourte(s.fin)}`;
}
