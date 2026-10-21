/** Informations générales du site, utilisées sur toutes les pages. */
export const site = {
  nom: 'Cyclo-Terre',
  url: 'https://cyclo-terre.ch',
  email: 'contact@cyclo-terre.ch',
  ville: 'Genève',
  description:
    "Porte-outils maraîcher léger et formations pratiques en agroécologie et en mécanique, à Genève.",
  navigation: [
    { href: '/machine/', label: 'La machine' },
    { href: '/formations/', label: 'Formations' },
    { href: '/projet/', label: 'Le projet' },
    { href: '/contact/', label: 'Contact' }
  ]
};

/** Lien mailto avec sujet (et corps) pré-remplis. */
export function mailto(sujet, corps = '') {
  const q = new URLSearchParams({ subject: sujet });
  if (corps) q.set('body', corps);
  return `mailto:${site.email}?${q.toString().replaceAll('+', '%20')}`;
}
