/** Informations générales du site, utilisées sur toutes les pages. */
export const site = {
  nom: 'Cyclo-Terre',
  url: 'https://cyclo-terre.ch',
  email: 'contact@cyclo-terre.ch',
  ville: 'Genève',
  description:
    'Porte-outils maraîcher léger et formations en agroécologie et mécanique pour les micro-fermes.',
  navigation: [
    { href: '/outils/', label: 'Outils' },
    { href: '/formations/', label: 'Formations' },
    { href: '/projet/', label: 'Notre vision' },
    { href: '/contact/', label: 'Contact' }
  ]
};

/**
 * Lettre d'information (Infomaniak Newsletter). Tant que `action` est vide, le formulaire
 * ouvre un e-mail « Abonnez-moi » ; y mettre l'adresse du formulaire Infomaniak pour l'activer.
 */
export const lettre = {
  action: '',
  ancre: '/contact/#lettre'
};

/** Lien mailto avec sujet (et corps) pré-remplis. */
export function mailto(sujet, corps = '') {
  const q = new URLSearchParams({ subject: sujet });
  if (corps) q.set('body', corps);
  return `mailto:${site.email}?${q.toString().replaceAll('+', '%20')}`;
}
