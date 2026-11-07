# Contribuer

sinistre-et-sombre.fr est un site visant à démocratiser le jeu de figurine "indie".
Cette approche nous conduit à tenter d’y faciliter les contributions, d’où ce document.

## Contenu

Le contenu du site est basé sur des fichiers Mardown.
Ce format est celui d’un fichier texte brut, avec une syntaxe légère, qu’on retrouve utilisé assez souvent.
C’est par exemple la syntaxe des messages Discord, de ce fichier etc.

Ces fichiers sont situés dans `content/` en suivant une architecture qui détermine le menu de navigation..

### Fichiers joints

Les fichiers joints (images, vidéos, PDFs…) sont à placer dans `public/`.
La documentation plus complète est disponible ici : https://nuxt.com/docs/5.x/getting-started/assets

## Suggestion, erreur etc

N’hésitez pas à nous remonter toute remarque, erreur ou suggestion dans les [issues](https://github.com/sinistre-et-sombre/sinistre-et-sombre/issues) ou sur le serveur Discord Sinistre & Sombre.

## Documentation

La documentation de ce projet est trouvée dans plusieurs fichiers Markdown :

* `README.md` : C’est la présentation générale du projet.
* `CONTRIBUTING.md` : Ce document décrit comment contribuer à ce projet.

Si vous voulez y contribuer, vous pouvez éditer ces fichiers, ou ouvrir une issue.

## Layout, style et fonctionnalité

Il s’agit là des aspects très techniques de ce projet.
Le site web final ([sinistre-et-sombre.fr](https://sinistre-et-sombre.fr)) est un site statique (HTML, CSS, Javascript) généré depuis le contenu de ce dépôt.
On distingue donc les sources, c’est-à-dire tout ce qui est présent ici, et le résultat final, c’est-à-dire le site web qu’on peut consulter.

Pour construire ce site web, nous avons fait le choix d’utiliser ces briques technologiques suivantes :
* [Nuxt](https://nuxt.com/) : c’est un *framework*, qui nous fournit des outils pour créer un site web
* [NodeJS](https://nodejs.org/) : C’est un environnement Javascript, qui permet notamment l’installation de Nuxt.
* De la containerisation (via Docker ou Podman), pour pouvoir tester les modifications avec un serveur web local, sans toucher au reste de son système.

