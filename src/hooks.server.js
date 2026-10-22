import { langueDe } from '$lib/i18n/index.js';

/** Écrit la langue de la page dans <html lang="…"> (pages générées au build). */
export async function handle({ event, resolve }) {
  const lang = langueDe(event.params.lang);
  return resolve(event, {
    transformPageChunk: ({ html }) => html.replace('%lang%', lang)
  });
}
