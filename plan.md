# Plan du Projet : Portfolio de RANDRIANIAINA Onjaniriana Jean Luca

## 1. Vue d'ensemble du Projet
Un portfolio interactif, moderne et cyberpunk pour le développeur web Jean Luca.
L'objectif principal est de permettre la **gestion du contenu sans toucher au code Vue.js**, en utilisant un simple fichier texte `JSON`.

## 2. Architecture de Données (Fichier JSON)
- **Fichier de données :** `src/data/portfolio.json`
- L'intégralité du contenu (textes, compétences, liste des projets, liens des images) sera stockée dans ce fichier.
- **Avantage :** L'administration du site se fera uniquement en modifiant ce petit fichier texte clair et structuré. Aucune base de données nécessaire, aucune modification des composants requise.

## 3. Technologies Utilisées
- Vue.js (Vue 3, Composition API)
- Fichier local `.json` (importé directement par Vite)
- CSS Natif avec un Thème Cyberpunk / Neon

## 4. Structure du Site
- **Header & Footer :** Communs à toutes les pages (Logo LUCA, Navigation, Réseaux Sociaux).
- **Vues :**
  - `/` (HomeView) : Hero section dynamique (Titre et Sous-titre via JSON).
  - `/about` (AboutView) : Présentation et statistiques lues depuis le JSON.
  - `/skills` (SkillsView) : Catégories et barres de progression dynamiques (via JSON).
  - `/projects` (ProjectsView) : Grille générée automatiquement à partir des objets du JSON.
  - `/contact` (ContactView) : Informations affichées depuis le JSON.

## 5. Étapes d'Implémentation (CMS par JSON)
1. **Création de la source de vérité :** Créer `src/data/portfolio.json` avec la structure vierge (projets, skills, infos).
2. **Migration des composants :** Modifier chaque page (`ProjectsView`, `SkillsView`, etc.) pour qu'elles importent et bouclent sur ce fichier JSON au lieu d'avoir du texte écrit en dur.
3. **Mise en production :** Une simple commande de build compilera le site. À l'avenir, rajouter un projet consistera seulement à rajouter quelques lignes dans le fichier `portfolio.json`.
