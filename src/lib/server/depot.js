// Lecture du dépôt de la machine (Cyclo-Terre-Org/Cyclo-Terre) au moment du build.
//
// Le dépôt est la seule source des plans et des guides : le site ne les copie pas, il les lit
// à chaque construction (chaque nuit, et à chaque nouvelle version publiée sur GitHub).
// - La dernière version publiée (« release ») fournit les fichiers à télécharger.
// - Les dossiers `utilisation/` et `assemblage/` fournissent les guides, affichés dans le design
//   du site avec un lien « Proposer une correction ».
//
// Sans réseau ou sans contenu, tout reste vide et le site se construit quand même.
// Pour prévisualiser des guides en local : DEPOT_LOCAL=/chemin/vers/Cyclo-Terre npm run dev
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { marked } from 'marked';

export const DEPOT = 'Cyclo-Terre-Org/Cyclo-Terre';
const BRANCHE = 'main';
const API = `https://api.github.com/repos/${DEPOT}`;

/** Dossiers du dépôt affichés comme guides, dans cet ordre. */
export const SECTIONS = [
  { dossier: 'utilisation', nom: 'Utiliser et entretenir' },
  { dossier: 'assemblage', nom: 'Construire' }
];

/**
 * @typedef {{ nom: string, url: string, taille: string }} Fichier
 * @typedef {{ tag: string, date: string, url: string, fichiers: Fichier[] }} Version
 * @typedef {{ slug: string, dossier: string, chemin: string, titre: string, html: string, source: string, edition: string }} Guide
 * @typedef {{ version: Version | null, guides: Guide[], ref: string }} Depot
 */

/** @type {Promise<Depot> | undefined} */
let cache;

/** @returns {Promise<Depot>} */
export function lireDepot() {
  cache ??= (process.env.DEPOT_LOCAL ? lireLocal(process.env.DEPOT_LOCAL) : lireGitHub()).catch(
    (e) => {
      console.warn(`[depot] lecture impossible (${e.message}) : section « Construire » vide.`);
      return { version: null, guides: [], ref: BRANCHE };
    }
  );
  return cache;
}

/** @param {string} url */
async function api(url) {
  /** @type {Record<string, string>} */
  const entetes = { Accept: 'application/vnd.github+json', 'User-Agent': 'cyclo-terre.ch' };
  if (process.env.GITHUB_TOKEN) entetes.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  let r = await fetch(url, { headers: entetes });
  // Jeton refusé (par ex. jeton d'un autre service) : le dépôt est public, on réessaie sans.
  if (r.status === 401 && entetes.Authorization) {
    delete entetes.Authorization;
    r = await fetch(url, { headers: entetes });
  }
  if (r.status === 404) return null;
  if (!r.ok) throw new Error(`${r.status} sur ${url}`);
  return r.json();
}

/** @returns {Promise<Depot>} */
async function lireGitHub() {
  const r = await api(`${API}/releases/latest`);
  /** @type {Version | null} */
  const version = r
    ? {
        tag: r.tag_name,
        date: String(r.published_at).slice(0, 10),
        url: r.html_url,
        fichiers: r.assets.map((/** @type {any} */ a) => ({
          nom: a.name,
          url: a.browser_download_url,
          taille: taille(a.size)
        }))
      }
    : null;
  const ref = version?.tag ?? BRANCHE;

  /** @type {{ dossier: string, chemin: string, texte: string }[]} */
  const fichiers = [];
  for (const { dossier } of SECTIONS) {
    const liste = await api(`${API}/contents/${dossier}?ref=${encodeURIComponent(ref)}`);
    if (!Array.isArray(liste)) continue;
    for (const f of liste.filter((/** @type {any} */ f) => f.type === 'file' && f.name.endsWith('.md'))) {
      const texte = await (await fetch(f.download_url)).text();
      fichiers.push({ dossier, chemin: f.path, texte });
    }
  }
  return { version, guides: preparer(fichiers, ref), ref };
}

/** @param {string} racine @returns {Promise<Depot>} */
async function lireLocal(racine) {
  /** @type {{ dossier: string, chemin: string, texte: string }[]} */
  const fichiers = [];
  for (const { dossier } of SECTIONS) {
    let noms = [];
    try {
      noms = await readdir(join(racine, dossier));
    } catch {
      continue;
    }
    for (const nom of noms.filter((n) => n.endsWith('.md'))) {
      fichiers.push({ dossier, chemin: `${dossier}/${nom}`, texte: await readFile(join(racine, dossier, nom), 'utf8') });
    }
  }
  return { version: null, guides: preparer(fichiers, BRANCHE), ref: BRANCHE };
}

/** README.md d'un dossier → slug du dossier ; autre fichier → dossier-fichier. @param {string} chemin */
function slugDe(chemin) {
  const [dossier, nom] = chemin.split('/');
  const base = nom.replace(/\.md$/i, '').toLowerCase();
  return base === 'readme' ? dossier : `${dossier}-${base}`;
}

/**
 * Markdown → HTML ; titre tiré du premier « # » ; liens relatifs réécrits.
 * @param {{ dossier: string, chemin: string, texte: string }[]} fichiers
 * @param {string} ref
 * @returns {Guide[]}
 */
function preparer(fichiers, ref) {
  const slugs = new Map(fichiers.map((f) => [f.chemin, slugDe(f.chemin)]));
  // Ordre : le README.md de chaque dossier, puis les fichiers dans l'ordre où il les cite.
  /** @type {Map<string, number>} */
  const rang = new Map();
  for (const f of fichiers.filter((x) => /readme\.md$/i.test(x.chemin))) {
    let i = 1;
    for (const [, lien] of f.texte.matchAll(/\]\(([^)#\s]+\.md)/g)) {
      const cible = normaliser(`${f.dossier}/${lien}`);
      if (!rang.has(cible)) rang.set(cible, i++);
    }
  }
  const ordre = (/** @type {string} */ c) =>
    SECTIONS.findIndex((s) => c.startsWith(s.dossier + '/')) * 1000 +
    (/readme\.md$/i.test(c) ? 0 : (rang.get(c) ?? 500));

  return fichiers
    .sort((a, b) => ordre(a.chemin) - ordre(b.chemin) || a.chemin.localeCompare(b.chemin))
    .map((f) => {
      const titre = /^#\s+(.+)$/m.exec(f.texte)?.[1].trim() ?? f.chemin;
      const corps = f.texte.replace(/^#\s+.+\n?/m, '');
      const html = /** @type {string} */ (marked.parse(corps))
        .replace(/ (src|href)="([^"#:]+?)(#[^"]*)?"/g, (tout, attr, lien, ancre = '') => {
          if (lien.startsWith('/')) return tout;
          const cible = normaliser(`${f.dossier}/${lien}`);
          if (attr === 'href' && slugs.has(cible)) return ` href="/outils/guides/${slugs.get(cible)}/${ancre}"`;
          const brut = attr === 'src' ? 'https://raw.githubusercontent.com' : 'https://github.com';
          const milieu = attr === 'src' ? `${ref}` : `blob/${ref}`;
          return ` ${attr}="${brut}/${DEPOT}/${milieu}/${cible}${ancre}"`;
        });
      return {
        slug: /** @type {string} */ (slugs.get(f.chemin)),
        dossier: f.dossier,
        chemin: f.chemin,
        titre,
        html,
        source: `https://github.com/${DEPOT}/blob/${ref}/${f.chemin}`,
        edition: `https://github.com/${DEPOT}/edit/${BRANCHE}/${f.chemin}`
      };
    });
}

/** « assemblage/../plans/x.pdf » → « plans/x.pdf » @param {string} chemin */
function normaliser(chemin) {
  /** @type {string[]} */
  const parts = [];
  for (const p of chemin.split('/')) {
    if (p === '..') parts.pop();
    else if (p && p !== '.') parts.push(p);
  }
  return parts.join('/');
}

/** 1536000 → « 1,5 Mo » @param {number} octets */
function taille(octets) {
  if (octets < 1e6) return `${Math.max(1, Math.round(octets / 1e3))} ko`;
  return `${(octets / 1e6).toFixed(1).replace('.', ',')} Mo`;
}
