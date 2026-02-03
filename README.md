# It Company - Site Vitrine Professionnel

Site vitrine moderne et professionnel pour **It Company**, entreprise technologique camerounaise spécialisée en développement logiciel, cybersécurité et transformation digitale.

## 🎨 Caractéristiques du Design

### Style Visuel
- **Palette de couleurs** : Bleu nuit (#0A1628), gris ardoise, blanc cassé
- **Typographie** : Plus Jakarta Sans (corps) + Sora (titres)
- **Esthétique** : Sobre, élégante, professionnelle
- **Animations** : Légères et discrètes
- **Responsive** : Mobile, tablette, desktop

### Sections du Site

1. **Hero** - Présentation principale avec CTA
2. **Services** - 4 services principaux avec cartes
3. **Technologies** - Stack technique (langages, frameworks, outils)
4. **Clients** - Logos de partenaires
5. **Témoignages** - 3 témoignages clients authentiques
6. **Études de Cas** - 2 projets détaillés
7. **Contact** - Formulaire + coordonnées
8. **Footer** - Liens et mentions légales

## 🚀 Installation et Démarrage

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Le site sera accessible sur http://localhost:5173
```

### Build de Production

```bash
# Créer le build optimisé
npm run build

# Prévisualiser le build
npm run preview
```

## 📁 Structure du Projet

```
it-company-website/
├── src/
│   ├── App.tsx           # Composant principal du site
│   ├── main.tsx          # Point d'entrée React
│   └── index.css         # Styles globaux de base
├── index.html            # Template HTML
├── package.json          # Dépendances
├── tsconfig.json         # Config TypeScript
├── vite.config.ts        # Config Vite
└── README.md             # Documentation
```

## ⚙️ Technologies Utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool moderne et rapide
- **Lucide React** - Icônes SVG
- **CSS-in-JS** - Styles intégrés au composant

## 🎯 Personnalisation

### Modifier les Couleurs

Dans `src/App.tsx`, recherchez la section `:root` et modifiez les variables CSS :

```css
:root {
  --color-primary: #0A1628;      /* Bleu nuit principal */
  --color-secondary: #1E3A5F;    /* Bleu secondaire */
  --color-accent: #2E5984;       /* Couleur d'accent */
  --color-text: #334155;         /* Texte principal */
  --color-text-light: #64748B;   /* Texte secondaire */
  --color-bg: #FAFBFC;           /* Fond de page */
}
```

### Modifier les Services

Recherchez `const services: Service[]` dans `src/App.tsx` et modifiez le tableau :

```typescript
const services: Service[] = [
  {
    title: "Votre Service",
    description: "Description du service...",
    icon: "💻" // Emoji ou utiliser un composant d'icône
  },
  // Ajoutez d'autres services ici
];
```

### Modifier les Technologies

Recherchez `const technologies` et ajustez les listes :

```typescript
const technologies = {
  languages: ["JavaScript", "TypeScript", "Python"],
  frameworks: ["React", "Vue.js", "FastAPI"],
  tools: ["Docker", "AWS", "Git"]
};
```

### Modifier les Témoignages

Recherchez `const testimonials: Testimonial[]` et modifiez les données :

```typescript
const testimonials: Testimonial[] = [
  {
    name: "Nom du Client",
    position: "Poste",
    company: "Entreprise",
    content: "Témoignage du client..."
  }
];
```

### Modifier les Coordonnées

Dans la section `Contact`, recherchez et modifiez :

```typescript
<a href="mailto:contact@itcompany.cm">contact@itcompany.cm</a>
<a href="tel:+237690000000">+237 690 000 000</a>
<span>Bastos, Yaoundé, Cameroun</span>
```

## 📱 Responsive Design

Le site est entièrement responsive avec 3 breakpoints principaux :

- **Desktop** : > 1024px
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px

## 🔧 Points d'Amélioration Possibles

### Fonctionnalités à Ajouter
- [ ] Formulaire de contact fonctionnel (backend)
- [ ] Animations scroll plus avancées (GSAP, Framer Motion)
- [ ] Galerie de projets interactive
- [ ] Blog/Actualités
- [ ] Multilingue (FR/EN)
- [ ] Mode sombre
- [ ] Chat en direct

### Optimisations
- [ ] Images optimisées (WebP, lazy loading)
- [ ] SEO avancé (meta tags, schema.org)
- [ ] Performance (code splitting)
- [ ] Analytics (Google Analytics, Matomo)

## 📄 Mentions Légales (Template)

**It Company**  
Entreprise technologique camerounaise  
Siège social : Bastos, Yaoundé, Cameroun  

**Directeur de publication** : [À compléter]  
**Hébergement** : [À compléter]  
**RCCM** : [À compléter]  
**NIU** : [À compléter]  

Les informations présentes sur ce site sont fournies à titre indicatif et peuvent être modifiées sans préavis. It Company ne saurait être tenue responsable des erreurs ou omissions.

## 📞 Support

Pour toute question ou assistance :
- Email : contact@itcompany.cm
- Téléphone : +237 690 000 000
- LinkedIn : linkedin.com/company/itcompany

## 📝 Licence

© 2024 It Company. Tous droits réservés.

---

**Développé avec ❤️ pour It Company**











# 📘 Guide de Personnalisation - It Company Website

Ce guide vous aidera à personnaliser facilement le site selon vos besoins spécifiques.

## 🎨 1. Personnaliser les Couleurs

### Modifier la palette complète

Ouvrez `src/App.tsx` et cherchez la section CSS `:root`. Toutes les couleurs sont définies comme variables CSS :

```css
:root {
  /* Couleurs principales */
  --color-primary: #0A1628;      /* Couleur principale (bleu nuit) */
  --color-secondary: #1E3A5F;    /* Couleur secondaire */
  --color-accent: #2E5984;       /* Couleur d'accentuation */
  
  /* Textes */
  --color-text: #334155;         /* Texte principal */
  --color-text-light: #64748B;   /* Texte secondaire */
  
  /* Arrière-plans */
  --color-bg: #FAFBFC;           /* Fond de page */
  --color-bg-card: #FFFFFF;      /* Fond des cartes */
  --color-border: #E2E8F0;       /* Bordures */
}
```

**Exemples de palettes alternatives :**

#### Palette Verte (Tech éco-responsable)
```css
--color-primary: #064E3B;      /* Vert foncé */
--color-secondary: #047857;    /* Vert moyen */
--color-accent: #10B981;       /* Vert clair */
```

#### Palette Orange (Énergie & Innovation)
```css
--color-primary: #7C2D12;      /* Orange foncé */
--color-secondary: #C2410C;    /* Orange moyen */
--color-accent: #F97316;       /* Orange vif */
```

## ✏️ 2. Modifier les Textes

### Slogan et Titre Principal

Dans `src/App.tsx`, section Hero :

```typescript
<h1 className="hero-title">
  Solutions numériques<br />
  <span className="title-accent">fiables et innovantes</span>
</h1>
<p className="hero-subtitle">
  Entreprise camerounaise spécialisée en développement logiciel...
</p>
```

### Nom de l'Entreprise

Recherchez toutes les occurrences de "It Company" et remplacez par votre nom :

- Dans la navbar : `<span className="logo-text">It Company</span>`
- Dans le footer
- Dans le fichier `index.html` (balise `<title>`)

## 🛠️ 3. Modifier les Services

### Structure d'un service

```typescript
const services: Service[] = [
  {
    title: "Nom du Service",              // Titre affiché
    description: "Description courte",     // 3-4 lignes max
    icon: "💻"                            // Emoji ou icône
  }
];
```

### Exemple d'ajout d'un nouveau service

```typescript
const services: Service[] = [
  // Services existants...
  {
    title: "Intelligence Artificielle",
    description: "Solutions d'IA sur mesure, machine learning et automatisation intelligente pour optimiser vos processus métier.",
    icon: "🤖"
  }
];
```

### Changer les icônes

Vous pouvez utiliser :
- Des emojis : `"💻"`, `"🔒"`, `"☁️"`, `"🎯"`
- Des composants Lucide : Importez depuis `lucide-react`

## 💻 4. Modifier les Technologies

```typescript
const technologies = {
  languages: [
    "JavaScript",
    "TypeScript",
    // Ajoutez vos langages ici
  ],
  frameworks: [
    "React",
    "Vue.js",
    // Ajoutez vos frameworks ici
  ],
  tools: [
    "Docker",
    "AWS",
    // Ajoutez vos outils ici
  ]
};
```

## 💬 5. Personnaliser les Témoignages

### Structure d'un témoignage

```typescript
const testimonials: Testimonial[] = [
  {
    name: "Prénom Nom",
    position: "Poste occupé",
    company: "Nom de l'entreprise",
    content: "Le témoignage complet du client..."
  }
];
```

### Conseils pour de bons témoignages

- Soyez **spécifique** : mentionnez des résultats concrets
- Restez **authentique** : évitez les superlatifs excessifs
- Gardez une **longueur raisonnable** : 2-3 phrases
- Incluez le **contexte** : secteur, problème résolu

## 📊 6. Modifier les Études de Cas

### Structure d'une étude de cas

```typescript
const caseStudies: CaseStudy[] = [
  {
    title: "Titre du Projet",
    client: "Secteur ou Type d'entreprise",
    challenge: "Le problème à résoudre...",
    solution: "Comment vous l'avez résolu...",
    result: "Résultats mesurables obtenus..."
  }
];
```

### Exemple concret

```typescript
{
  title: "Application Mobile de Gestion de Flotte",
  client: "Secteur Transport",
  challenge: "Suivi en temps réel de 150 véhicules avec optimisation des trajets et consommation de carburant.",
  solution: "Développement d'une app mobile React Native avec géolocalisation GPS, algorithme d'optimisation de routes et tableau de bord manager.",
  result: "Réduction de 30% des coûts de carburant, 25% d'amélioration des délais de livraison, ROI en 8 mois."
}
```

## 📍 7. Changer les Coordonnées

Dans la section Contact de `src/App.tsx` :

```typescript
{/* Email */}
<a href="mailto:votre-email@domaine.com">votre-email@domaine.com</a>

{/* Téléphone */}
<a href="tel:+237123456789">+237 123 456 789</a>

{/* Adresse */}
<span>Votre Quartier, Votre Ville, Cameroun</span>
```

### Modifier les réseaux sociaux

```typescript
<a href="https://linkedin.com/company/votre-entreprise">
  <Linkedin size={20} />
</a>
<a href="https://twitter.com/votre-compte">
  <Twitter size={20} />
</a>
```

## 🌐 8. Personnaliser les Logos Clients

Dans la section Clients :

```typescript
<div className="clients-logos">
  <div className="client-logo">Nom Client 1</div>
  <div className="client-logo">Nom Client 2</div>
  {/* Ajoutez plus de clients ici */}
</div>
```

Pour utiliser de vraies images :

```typescript
<div className="client-logo">
  <img src="/logos/client1.png" alt="Client 1" />
</div>
```

## 🖼️ 9. Ajouter des Images

### Pour les services

Remplacez les emojis par des images :

```typescript
<div className="service-icon">
  <img src="/images/icon-dev.svg" alt="Développement" />
</div>
```

### Pour le Hero

Modifiez la section `hero-visual` pour utiliser de vraies images.

## 🎭 10. Modifier les Animations

### Vitesse des animations

Dans les styles CSS, cherchez `--transition` :

```css
:root {
  /* Animation rapide */
  --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Animation lente */
  --transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Désactiver les animations

Supprimez ou commentez les propriétés `animation` et `transition` dans le CSS.

## 📱 11. Ajuster le Responsive

Les breakpoints sont définis dans les media queries :

```css
/* Tablette */
@media (max-width: 1024px) {
  /* Styles tablette */
}

/* Mobile */
@media (max-width: 768px) {
  /* Styles mobile */
}
```

## 🔤 12. Changer les Polices

Actuellement : **Plus Jakarta Sans** + **Sora**

Pour changer :

1. Allez sur [Google Fonts](https://fonts.google.com)
2. Sélectionnez vos polices
3. Remplacez l'import dans `src/App.tsx` :

```css
@import url('https://fonts.googleapis.com/css2?family=VotrePolice:wght@400;600;700&display=swap');
```

4. Modifiez les variables :

```css
:root {
  --font-body: 'VotrePolice', sans-serif;
  --font-heading: 'VotrePolice', sans-serif;
}
```

## 📧 13. Connecter le Formulaire de Contact

Le formulaire est actuellement statique. Pour le rendre fonctionnel :

### Option 1 : EmailJS (Gratuit, sans backend)

```bash
npm install @emailjs/browser
```

```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target,
    'YOUR_PUBLIC_KEY'
  ).then(() => {
    alert('Message envoyé !');
  });
};
```

### Option 2 : API Backend personnalisée

Créez un endpoint `/api/contact` et faites un `fetch` :

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const formData = new FormData(e.target as HTMLFormElement);
  
  await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: { 'Content-Type': 'application/json' }
  });
};
```

## 🌍 14. Ajouter le Multilingue

Pour une version FR/EN simple :

```typescript
const [lang, setLang] = useState('fr');

const translations = {
  fr: {
    hero_title: "Solutions numériques",
    hero_subtitle: "Entreprise camerounaise..."
  },
  en: {
    hero_title: "Digital Solutions",
    hero_subtitle: "Cameroonian company..."
  }
};

// Utilisation
<h1>{translations[lang].hero_title}</h1>
```

## 🎯 Checklist Finale

Avant de déployer, vérifiez :

- [ ] Tous les textes sont personnalisés
- [ ] Les coordonnées sont à jour
- [ ] Les liens réseaux sociaux fonctionnent
- [ ] Les couleurs correspondent à votre charte
- [ ] Le formulaire de contact est connecté
- [ ] Les images sont optimisées (WebP, compression)
- [ ] Le site est testé sur mobile et tablette
- [ ] Les mentions légales sont complètes
- [ ] Le fichier `index.html` a les bons meta tags SEO

---

**Besoin d'aide ?** Consultez le `README.md` pour plus d'informations techniques.
#   i t c o m p a n y  
 