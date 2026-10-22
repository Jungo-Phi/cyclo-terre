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
| Une actualité (miroir de la newsletter) | `src/content/actualites/<date>-<titre>.md` |
| Les documents d'une formation (PDF) | champ « Documents » de la formation ; fichiers dans `static/documents/` |
| Les photos | `src/lib/photos/` — désignées par leur nom de fichier sans extension |
| Adresse e-mail, menu | `src/lib/site.js` |
| Textes des pages | `src/routes/**/+page.svelte` |

Une date passée disparaît d'elle-même de l'agenda. Une formation ou une date avec
`brouillon: true` n'est pas publiée.

## Plans et guides de la machine

Ils ne sont pas dans ce dépôt : le site les lit à chaque construction dans
[Cyclo-Terre-Org/Cyclo-Terre](https://github.com/Cyclo-Terre-Org/Cyclo-Terre)
(`src/lib/server/depot.js`).

- La dernière version publiée (*release*) donne les fichiers à télécharger (section « Construire et
  contribuer » de la page Outils).
- Les dossiers `utilisation/` et `assemblage/` deviennent des pages `/outils/guides/…`, avec un
  lien « Proposer une correction » vers l'éditeur GitHub.
- Une nouvelle version déclenche la mise à jour du site (`repository_dispatch` « nouvelle-version »).
- Sans réseau ou sans contenu, la section reste vide et le site se construit quand même.
- Prévisualiser des guides avant de les publier :
  `DEPOT_LOCAL=../Cyclo-Terre npm run dev`.

## Interface d'administration (Sveltia CMS)

`/admin/` permet de modifier les actualités, les formations, les dates, les photos et les documents sans toucher au code.

- **En ligne** (https://cyclo-terre.ch/admin/) : « Sign In Using Access Token » avec un jeton
  GitHub *fine-grained* limité à ce dépôt (permission *Contents : Read and write*). Chaque
  enregistrement crée un commit sur `main` et republie le site.
- **En local** (http://localhost:5173/admin/index.html avec `npm run dev`, dans Chrome ou Edge) :
  « Work with Local Repository », puis choisir le dossier du dépôt. Les modifications sont
  écrites dans les fichiers ; rien n'est publié avant un commit et un push.

La configuration est dans `static/admin/config.yml`.

## Travailler avant de publier

1. Créer une branche : `git switch -c ma-modification`.
2. `npm run dev` et modifier (à la main, avec Claude Code ou avec `/admin/` en local).
3. Vérifier le site final : `npm run build && npm run preview`.
4. Pousser la branche et ouvrir une pull request ; fusionner dans `main` publie le site.

## Traductions

Seules les pages fixes sont traduites ; les formations restent en français.

- Les pages vivent sous `src/routes/[[lang=lang]]/` : `/contact/` en français, `/en/contact/`, `/es/contact/`.
- Les textes d'interface (menu, pied de page…) sont dans `src/lib/i18n/fr.js`, `en.js`, `es.js` ;
  une clé absente retombe sur le français.
- Une langue n'est générée et proposée qu'une fois ajoutée à `actives` dans `src/lib/i18n/index.js`.
- Pour traduire une page : déplacer ses textes dans les dictionnaires, lire la langue avec
  `langueDe(page.params.lang)` et écrire ses liens internes avec `chemin(lang, '/…/')`.

## Design

Couleurs, polices et espacements viennent du design system Cyclo-Terre (`src/lib/tokens.css`).
