// Flux RSS des actualités, généré à chaque build.
import { site } from '$lib/site.js';
import { actualites } from '$lib/contenu.js';

export const prerender = true;

/** @param {string} s */
const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function GET() {
  const items = actualites
    .map(
      (a) => `    <item>
      <title>${xml(a.titre)}</title>
      <link>${site.url}/actualites/${a.slug}/</link>
      <guid>${site.url}/actualites/${a.slug}/</guid>
      <pubDate>${new Date(`${a.date}T08:00:00Z`).toUTCString()}</pubDate>
      <description>${xml(a.resume ?? '')}</description>
    </item>`
    )
    .join('\n');
  const corps = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Actualités Cyclo-Terre</title>
    <link>${site.url}/actualites/</link>
    <description>${xml(site.description)}</description>
    <language>fr-ch</language>
${items}
  </channel>
</rss>
`;
  return new Response(corps, { headers: { 'Content-Type': 'application/rss+xml' } });
}
