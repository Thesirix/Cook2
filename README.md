# Let's Cook - Site de Recettes

Un site web de recettes de cuisine construit avec **React** et **Tailwind CSS**, permettant aux utilisateurs de rechercher, consulter et mettre en favoris des recettes.

## Fonctionnalités

- Recherche de recettes en temps réel
- Système de favoris par recette
- Interface responsive (mobile & desktop)
- Affichage de la difficulté, de l'auteur et de la description

## Structure du projet

| Fichier | Rôle |
|---|---|
| `App.jsx` | Composant racine, gestion de l'état global |
| `Components/Navbar.jsx` | Barre de navigation |
| `Components/Search.jsx` | Barre de recherche et filtres |
| `Components/Post.jsx` | Grille d'affichage des recettes |
| `Components/Footer.jsx` | Pied de page avec appel à l'action |
| `assets/data/recettes.json` | Données des recettes |

## Technologies

- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)
- [Vite](https://vitejs.dev/)

## Installation

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd Cook2

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173) dans le navigateur.

```bash
# Build de production
npm run build
```

## Licence

MIT
