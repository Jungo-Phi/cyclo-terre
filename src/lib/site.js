/** Informations générales du site, utilisées sur toutes les pages. */
export const site = {
  nom: 'Cyclo-Terre',
  url: 'https://cyclo-terre.ch',
  email: 'contact@cyclo-terre.ch',
  ville: 'Genève',
  /** Dépôt des plans de la machine (matériel libre). */
  depot: 'https://github.com/Cyclo-Terre-Org/Cyclo-Terre',
  /** Questions ouvertes sur la machine (GitHub Discussions). */
  discussions: 'https://github.com/Cyclo-Terre-Org/Cyclo-Terre/discussions',
  /** Guide de contribution du dépôt de la machine. */
  contribuer: 'https://github.com/Cyclo-Terre-Org/Cyclo-Terre/blob/main/CONTRIBUTING.md',
  description:
    'Porte-outils maraîcher léger et formations en agroécologie et mécanique pour les micro-fermes.',
  navigation: [
    { href: '/outils/', label: 'Outils' },
    { href: '/formations/', label: 'Formations' },
    { href: '/actualites/', label: 'Actualités' },
    { href: '/projet/', label: 'Notre vision' },
    { href: '/contact/', label: 'Contact' }
  ]
};

/**
 * Newsletter (Infomaniak Newsletter, formulaire n° 26536).
 * `action`, `cle` et `formulaire` viennent du code d'intégration fourni par Infomaniak
 * (Manager → Newsletter → Formulaires) ; `champEmail` est le nom du champ e-mail de ce formulaire.
 */
export const lettre = {
  action: 'https://newsletter.infomaniak.com/v3/api/1/newsletters/webforms/26536/submit',
  cle: 'eyJpdiI6IklucWg1TnE5QVNGdnlcLzhRT0VuSkRhOTJGNkVOT0NWRm9Cck1jVWwrNkRvPSIsIm1hYyI6Ijg4MWY4ZTJmMTU2M2M1NWZmYTlkNmQ2Njg4YmY0NzQ5NjM1MGFmYmZmOTU4MmQ3YTBiY2M0YzAxYzc2Y2Q0ZGUiLCJ2YWx1ZSI6IlRuSDdSYTFraU9UXC8zanRERnVhMFFDY3k4eXFCY043bUs2MWhyQlVheGVrPSJ9',
  formulaire: '26536',
  champEmail: 'inf[1]',
  captcha: 'https://newsletter.infomaniak.com/v3/altcha-challenge',
  scriptCaptcha: 'https://newsletter.infomaniak.com/v3/static/mcaptcha/altcha.min.js?v=1792620000',
  ancre: '/contact/#lettre',
  confirmation: '/lettre/confirmation/'
};

/** Lien mailto avec sujet (et corps) pré-remplis. */
export function mailto(sujet, corps = '') {
  const q = new URLSearchParams({ subject: sujet });
  if (corps) q.set('body', corps);
  return `mailto:${site.email}?${q.toString().replaceAll('+', '%20')}`;
}
