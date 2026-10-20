# Cyclo-Terre

Le Cyclo-Terre est un porte-outils maraîcher léger, à traction humaine, conçu pour les micro-fermes.

Site : [cyclo-terre.ch](https://cyclo-terre.ch/)

## Développer

```sh
npm install
npm run dev      # site local sur http://localhost:5173
npm run build    # site statique dans build/
```

Le site est construit avec SvelteKit (`adapter-static`) et publié sur GitHub Pages à chaque
modification de `main`, ainsi que chaque nuit (pour retirer les dates passées de l'agenda).

## Modifier le contenu

| Quoi | Où |
| --- | --- |
| Une formation (description, déroulé, à apporter…) | `src/content/formations/<nom>.md` |
| Une date de formation | `src/content/sessions/<date>-<formation>.md` (copier `exemple-a-copier.md`) |
| Les photos | `src/lib/photos/` — désignées par leur nom de fichier sans extension |
| Adresse e-mail, menu | `src/lib/site.js` |
| Textes des pages | `src/routes/**/+page.svelte` |

Une date passée disparaît d'elle-même de l'agenda. Une formation ou une date avec
`brouillon: true` n'est pas publiée.

## Design

Couleurs, polices et espacements viennent du design system Cyclo-Terre (`src/lib/tokens.css`).
