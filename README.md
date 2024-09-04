# portfolio_react

Code React du portfolio

Le [Lien](https://Raykesh-Soneka.github.io/portfolio_react) du site

## Installer npm

> [!IMPORTANT]
> Pour vériver `Node -v` et `npm -v`.

> [!TIP]
> [ Lien de téléchargement ](https://nodejs.org/fr).
------------------------
### Instalation du projet
$\color{rgba(255,0,0, 0.8)}{\textsf{Clonner}}$ le GitHub

```shell
npm install
npm start
`(en cas de Bug : npm audit fix --force)`
`(déjà effectuer )`npm install -D gh-pages
npm run build  `(obsolète/En cas de Déploiment sur la Branche main)`
npm run deploy `(En cas de Déploiment sur la Branche gh-pages)`
```
###Explication des lignes de commande

`npm install` : installe les module (dossier node_module)

`npm start` : lancer React en local ([http://localhost:3000/](http://localhost:3000/))

(déjà effectuer )`npm install -D gh-pages` : installe GitHub pages.

`npm run build` : lance le dossier Build (obsolète)

`npm run deploy` : Deploie sur la branch (dans la bonne homepage)









```stl
solid R_letter
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex 0.5 0.0 0.0
      vertex 0.5 1.0 0.0
      vertex 0.2 1.0 0.0
    endloop
  endfacet
  facet normal 0.0 0.0 -1.0
    outer loop
      vertex 0.5 0.0 0.0
      vertex 0.2 1.0 0.0
      vertex 0.2 0.0 0.0
    endloop
  endfacet
  facet normal 0.0 1.0 0.0
    outer loop
      vertex 0.5 1.0 0.0
      vertex 0.2 1.0 0.0
      vertex 0.5 0.8 0.0
    endloop
  endfacet
  facet normal 0.0 1.0 0.0
    outer loop
      vertex 0.5 0.8 0.0
      vertex 0.2 1.0 0.0
      vertex 0.2 0.8 0.0
    endloop
  endfacet
  facet normal 0.0 0.0 1.0
    outer loop
      vertex 0.5 0.0 0.0
      vertex 0.5 0.8 0.0
      vertex 0.2 0.8 0.0
    endloop
  endfacet
  facet normal 0.0 0.0 1.0
    outer loop
      vertex 0.5 0.0 0.0
      vertex 0.2 0.8 0.0
      vertex 0.2 0.0 0.0
    endloop
  endfacet
endsolid
```