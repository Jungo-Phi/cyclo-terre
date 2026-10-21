// Traductions du site.
//
// Seules les pages fixes sont traduites (pas les formations). Le français est la langue de
// référence et n'a pas de préfixe d'URL ; les autres langues sont sous /en/, /es/…
//
// Pour publier une langue : la traduire dans src/lib/i18n/<code>.js, puis l'ajouter à `actives`.
// Tant qu'une langue n'est pas active, ses pages ne sont ni générées ni proposées.
import fr from './fr.js';
import en from './en.js';
import es from './es.js';

/** @typedef {'fr' | 'en' | 'es'} Langue */

export const langues = {
  fr: { nom: 'Français', locale: 'fr_CH', textes: fr },
  en: { nom: 'English', locale: 'en_GB', textes: en },
  es: { nom: 'Español', locale: 'es_ES', textes: es }
};

/** Langues publiées. */
export const actives = /** @type {Langue[]} */ (['fr']);

export const parDefaut = /** @type {Langue} */ ('fr');

/** @param {string | undefined} code */
export function langueDe(code) {
  return /** @type {Langue} */ (code && code in langues ? code : parDefaut);
}

/**
 * Textes d'interface dans une langue ; une clé absente retombe sur le français.
 * @param {Langue} lang
 */
export function textes(lang) {
  return { ...fr, ...langues[lang].textes };
}

/**
 * Adresse d'une page fixe dans une langue : chemin('en', '/contact/') → '/en/contact/'.
 * @param {Langue} lang
 * @param {string} chemin chemin français, commençant par /
 */
export function chemin(lang, chemin) {
  return lang === parDefaut ? chemin : `/${lang}${chemin}`;
}

/**
 * Chemin français d'une adresse : '/en/contact/' → '/contact/'.
 * @param {string} pathname
 */
export function cheminFrancais(pathname) {
  const m = /^\/(en|es)(\/.*)?$/.exec(pathname);
  return m ? m[2] || '/' : pathname;
}
