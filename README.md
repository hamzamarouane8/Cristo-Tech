
## CRISTO-TECH FRONT

Ce projet contient le frontend web du projet CritoTECH.
Il s'agit d'une application NodeJS/React gérée par [Lerna](https://github.com/lerna/lerna).


Pour initialiser le projet :

1. `yarn install`
2. `yarn build`
3. `lerna bootstrap`
4. En mode dev, exécuter `yarn dev` pour recompiler autimatiquement les packages

Le projet princial se trouve dans le dossier `app` dans lequel exécuter `yarn start`


### Pré-requis

Le projet React requiert l'installation de Python 27 (https://www.python.org/download/releases/2.7/).
Python est requis du fait de la dépendances node-sass (utilisée pour la gestion des feuilles de styles SCSS).
Lors de l'installation Python il est important de garder le chemin par défaut proposé: C:\Python27.

