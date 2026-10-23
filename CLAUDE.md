# Site Cyclo-Terre — consignes pour Claude

Site vitrine de Cyclo-Terre (porte-outils maraîcher et formations), en français, SvelteKit statique
publié sur GitHub Pages. Voir README.md pour les commandes et l'organisation du contenu.

## Façon de travailler
- Ne jamais pousser sur `main` directement. `main` = site en ligne.
- Ne jamais créer soi-même de branche ni de pull request (ni pousser) : travailler sur la branche
  courante et laisser l'utilisateur gérer branches, commits poussés et pull requests.
- Proposer les changements de design sur une page d'abord, les faire valider, puis les appliquer partout.
- En cas de doute sur un choix (design, contenu), demander et proposer plusieurs options.
- Vérifier avec `npm run build` (la génération échoue sur un lien interne cassé).

## Contenu
- Formations : `src/content/formations/*.md` ; dates : `src/content/sessions/*.md` ; actualités :
  `src/content/actualites/*.md`. Champs : voir
  `static/admin/config.yml` (à garder synchronisé avec `src/lib/contenu.js`).
- Ton : sobre, descriptif, vouvoiement, faits mesurables plutôt qu'adjectifs, pas d'emoji,
  écriture inclusive au point médian avec parcimonie. Données inconnues entre crochets : `[LIEU]`.
- Le Cyclo-Terre est un prototype : ne jamais laisser croire qu'il est en vente. Les formations
  agricoles ont lieu sans la machine.
- Plans, manuel, assemblage : uniquement dans le dépôt Cyclo-Terre-Org/Cyclo-Terre, lus au build
  (`src/lib/server/depot.js`). Ne jamais les recopier dans ce dépôt.

## Traductions
- Français = référence, sans préfixe ; anglais et espagnol sous /en/ et /es/ (pages fixes seulement).
- Langues publiées : `actives` dans `src/lib/i18n/index.js`. Ne pas activer une langue non relue.
- Liens internes d'une page traduite : `chemin(lang, '/chemin-francais/')`.

## Design
- Valeurs uniquement via les variables de `src/lib/tokens.css` (design system Cyclo-Terre).
- Vert `--agri*` = volet agricole, rose `--meca*` = volet mécanique, rien d'autre (jamais pour
  erreur/succès). Texte de volet sous 24px : `--agri-dark` / `--meca-dark`.
- Coins droits, filets plutôt qu'ombres, polices Barlow Semi Condensed (titres), Source Sans 3
  (texte), IBM Plex Mono (annotations).
- Logo : fichiers de `src/lib/assets/logo/`, à ne jamais redessiner ni recolorer.
- Pas de fil d'Ariane en haut des pages, ni de petit sur-titre gris (`.etiquette`) au-dessus d'un
  titre de page ou de section (h1, h2) : le titre suffit. Restent permis : `.etiquette` comme
  intitulé de bloc (« Fiche technique », « Prérequis »…), les sur-titres colorés de volet au-dessus
  d'un titre secondaire (« La méthode · Youri Vezza ») et les badges `.tag` de volet.
