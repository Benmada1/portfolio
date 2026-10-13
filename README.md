# Portfolio — Ismail BENMADA

Portfolio statique **React + Vite + CSS personnalisé**, prêt pour un déploiement gratuit sur **Cloudflare Pages**.
Aucun backend : le formulaire de contact prépare un message WhatsApp, rien n'est envoyé ni stocké automatiquement.

## Contenu du projet

```
index.html                 Métadonnées SEO, données structurées (Schema.org)
vite.config.js             Config Vite + génération de robots.txt / sitemap.xml
public/
  cv.pdf                   Votre CV (bouton « Télécharger mon CV »)
  favicon.svg, robots.txt, _headers
  images/projects/…        Captures d'écran (WebP) rangées par projet
src/
  data/                    Textes et données : profile, projects, skills, experience
  sections/                Hero, About, Skills, Projects, Experience, Contact, FinalCta
  components/              Header, Footer, ProjectCard, ProjectDialog, Icon, Reveal…
  lib/contact.js           Validation du formulaire + construction du lien WhatsApp
  index.css                Tous les styles
scripts/test-contact.mjs   Test de la logique du formulaire
```

## 1. Prérequis (Windows)

- **Node.js 20.19 ou plus récent** (version LTS 22 recommandée) : <https://nodejs.org>
- **Git** (pour le déploiement continu) : <https://git-scm.com>

Vérification dans PowerShell :

```powershell
node -v
npm -v
```

## 2. Installation

Décompressez l'archive, puis :

```powershell
cd C:\chemin\vers\portfolio-ismail
npm install
```

## 3. Lancement en local

```powershell
npm run dev
```

Ouvrez l'adresse affichée (généralement <http://localhost:5173>). Les modifications se rechargent automatiquement.

Test de la logique du formulaire WhatsApp (validation, message, encodage de l'URL) :

```powershell
npm run test:contact
```

## 4. Build de production

```powershell
npm run build
npm run preview   # facultatif : prévisualiser le build sur http://localhost:4173
```

Le site statique est généré dans le dossier `dist/`.

### Domaine, canonical et sitemap

Les balises `canonical` / `og:url` et le `sitemap.xml` ne sont générés que si l'adresse définitive du site est connue
(aucune URL fictive n'est jamais écrite). Pour les activer :

```powershell
$env:SITE_URL = "https://votre-domaine.com"   # sans slash final
npm run build
```

Sur Cloudflare Pages, ajoutez plutôt une variable d'environnement `SITE_URL` (voir ci-dessous).

## 5. Déploiement sur Cloudflare Pages (gratuit)

### Option A — avec GitHub (recommandée : mises à jour automatiques)

1. Créez un dépôt GitHub et poussez le projet :
   ```powershell
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/Benmada1/portfolio.git
   git push -u origin main
   ```
   (`node_modules` et `dist` sont exclus par `.gitignore`.)
2. Sur <https://dash.cloudflare.com> : **Workers & Pages → Create → Pages → Connect to Git**, choisissez le dépôt.
3. Paramètres de build :
   - **Framework preset** : `React (Vite)` (ou `None`)
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
   - **Variable d'environnement** (facultative mais conseillée) : `SITE_URL` = l'adresse finale du site
     (par exemple `https://nom-du-projet.pages.dev`).
4. Cliquez sur **Save and Deploy**. Le fichier `.node-version` (Node 22) est pris en compte.

### Option B — envoi direct du dossier `dist`

```powershell
npm run build
npx wrangler pages deploy dist --project-name portfolio-ismail
```

(Connexion à Cloudflare demandée la première fois.)

### Mettre à jour le site

Option A : modifiez les fichiers, puis
```powershell
git add .
git commit -m "Mise à jour du portfolio"
git push
```
Cloudflare reconstruit et publie automatiquement. Option B : relancez `npm run build` puis `wrangler pages deploy`.

### Domaine personnalisé

Dans Cloudflare Pages : **Custom domains → Set up a domain**, puis suivez les instructions DNS.
Ensuite, mettez à jour la variable `SITE_URL` avec ce domaine et redéployez, pour que canonical et sitemap soient corrects.

## 6. Modifier le contenu

Tous les textes sont dans `src/data/` :

- `profile.js` : coordonnées et liens (email, téléphone, WhatsApp, LinkedIn, GitHub).
- `projects.js` : projets, fonctionnalités, technologies, captures, liens.
- `skills.js` : compétences. `experience.js` : formation et stages.

### Remplacer le CV

Remplacez simplement `public/cv.pdf` par votre nouveau fichier (même nom). Le nom proposé au téléchargement se règle
dans `src/data/profile.js` (`cv.downloadName`).

### Ajouter ou remplacer des captures d'écran

1. Placez l'image (de préférence en **WebP**, ~1600 px de large) dans `public/images/projects/<projet>/`.
2. Dans `src/data/projects.js`, ajoutez une entrée dans `screenshots` du projet :
   ```js
   img('casadrop', 'nom-du-fichier', 1600, 748, 'Description pour les lecteurs d’écran', 'Légende affichée')
   ```
   (`1600, 748` = largeur et hauteur réelles de l'image ; cela évite les décalages de mise en page.)
3. La **première** capture d'un projet sert aussi de visuel sur la carte. Sans capture, la carte affiche un monogramme
   typographique.

Conversion PNG → WebP avec ImageMagick, si installé : `magick entree.png -quality 82 sortie.webp`.

> Avant publication, vérifiez que chaque capture ne montre aucun identifiant, mot de passe ni donnée personnelle réelle.

## 7. Notes

- Le formulaire ouvre `https://wa.me/212654110467` avec un message prérempli ; l'envoi reste à confirmer dans WhatsApp.
- Polices auto-hébergées via `@fontsource` (aucune requête vers Google Fonts).
- Les animations respectent `prefers-reduced-motion`.
- Le SEO technique est en place (titre, description, Open Graph, JSON-LD, robots, sitemap), mais le classement dans Google
  ne peut pas être garanti. Pensez à ajouter le site dans Google Search Console une fois publié.
- Aucune image de partage (`og:image`) n'est définie : ajoutez-en une dans `public/` si vous le souhaitez.
