// Segment de langue facultatif : /en/…, /es/… ; sans préfixe = français.
import { langues } from '$lib/i18n/index.js';

/** @param {string} param */
export function match(param) {
  return param !== 'fr' && param in langues;
}
