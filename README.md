# Générateur de Fichier Excel de Contacts

Ce projet est un script simple en Node.js qui prend une chaîne de caractères représentant des contacts et crée un fichier Excel avec ces contacts. 
Chaque contact est placé sur une nouvelle ligne dans une feuille nommée "Contacts".
Evidement, je l'ai pensé pour les contacts , mais vous pouvez mettre n'importe quelle liste.

## Fonctionnalités

- Prend en entrée une chaîne de contacts séparés par un séparateur spécifique.
- Crée un fichier Excel avec une feuille de contacts.
- Chaque contact est inscrit dans sa propre ligne.

## Prérequis

- Node.js
- npm ou Yarn

## Installation

Pour installer les dépendances nécessaires, exécutez le suivant :

```bash
npm install

```

ou si vous utilisez Yarn :
```bash
yarn install
```

## Utilisation

Pour exécuter le script :
```bash
npm start
```

Assurez-vous de remplacer le contenu de la variable contactsString par vos contacts avant d'exécuter le script. 
Le séparateur par défaut est la virgule (,) , mais vous pouvez le modifier selon vos besoins en changeant la valeur de la variable separator.

## Personnalisation

Contacts : Modifiez la variable contactsString pour inclure vos propres contacts.
Séparateur : Modifiez la variable separator pour utiliser un séparateur différent (par exemple ; ou |).

## Sécurité
Si vous manipulez des données sensibles, assurez-vous de ne jamais les pousser accidentellement sur des dépôts publics. 
Vérifiez toujours les fichiers avant de les engager dans Git ou tout autre système de contrôle de version.

## Contribution
Les contributions sont les bienvenues.

Fork le projet
Créez votre propre branche de fonctionnalité (git checkout -b feature/AmazingFeature)
Commit vos changements (git commit -m 'Add some AmazingFeature')
Push sur la branche (git push origin feature/AmazingFeature)
Ouvrez une Pull Request

Happy new Year 2024 :)

