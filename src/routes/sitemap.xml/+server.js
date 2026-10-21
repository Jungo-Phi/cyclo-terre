// Plan du site pour les moteurs de recherche, généré à chaque build.
import { site } from '$lib/site.js';
import { formations } from '$lib/contenu.js';

export const prerender = true;

const pagesFixes = ['/', '/outils/', '/formations/', '/projet/', '/contact/'];

export function GET() {
  const urls = [...pagesFixes, ...formations.map((f) => `/formations/${f.slug}/`)];
  const corps = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${site.url}${u}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(corps, { headers: { 'Content-Type': 'application/xml' } });
}
