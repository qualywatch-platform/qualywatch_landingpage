# _unused-assets/

Ce dossier contient les images **non référencées** dans le code source de la landing page,
déplacées hors de `public/` lors de l'optimisation SEO du 3 mai 2026.

## Pourquoi ?

`public/` faisait **27 MB**. Tout son contenu est servi statiquement par Next.js
et déployé en production — même les fichiers jamais importés. Ça gonflait :

- la taille du repo Git
- le temps de build et de déploiement
- l'espace consommé sur Vercel / Railway

Après nettoyage, `public/` ne fait plus que **1.6 MB**.

## Contenu

| Fichier | Taille | Statut |
|---|---|---|
| team-feedback-bg.jpg | 14 MB | Non référencé dans `src/` |
| Black-Titanium-2.png | 2.5 MB | Non référencé |
| Black-Titanium-3.png | 2.4 MB | Non référencé |
| hero-bg-cream.png | 1.1 MB | Non référencé |
| orange-tiles-bg.png | 924 KB | Non référencé |
| hero-arcs.png | 864 KB | Non référencé |
| faq-bg.jpg | 652 KB | Non référencé (la version `faq-bg-44581.jpg` est utilisée) |
| ia-chat-screenshot.png | 424 KB | Non référencé |
| WhatsApp_Image_*.jpeg (×2) | ~? | Non référencés |
| 46021_*.jpg | ~? | Non référencé |
| qr-poster-sample.png | 92 KB | Non référencé (la version `orange` est utilisée) |
| file/globe/next/vercel/window.svg | < 5 KB chacun | SVG par défaut Next.js |
| `*.original.png` / `*.original.jpg` | divers | Backups avant compression |

## Si tu en as besoin plus tard

Récupère simplement le fichier voulu et déplace-le vers `public/` :

```bash
mv qualywatch_landing/_unused-assets/team-feedback-bg.jpg \
   qualywatch_landing/public/team-feedback-bg.jpg
```

## Suppressions définitives

Quand tu seras certaine que tu n'en as plus besoin (3-6 mois sans y toucher),
tu pourras supprimer ce dossier entier — il est ignoré par Git (`.gitignore`).
