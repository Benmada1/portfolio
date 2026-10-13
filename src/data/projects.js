// Réalisations. Pour ajouter une capture : déposez le fichier .webp dans
// public/images/projects/<dossier>/ puis ajoutez une entrée dans `screenshots`
// (src, width, height, alt, caption). Les captures sont affichées dans l'étude de cas.
//
// `kind: 'projet'` -> section « Projets » ; `kind: 'stage'` -> section « Expériences ».

const img = (folder, name, width, height, alt, caption) => ({
  src: `/images/projects/${folder}/${name}.webp`,
  width,
  height,
  alt,
  caption,
});

export const projects = [
  {
    id: 'casadrop',
    kind: 'projet',
    title: 'CasaDrop — Delivery Management System',
    shortTitle: 'CasaDrop',
    category: 'Gestion des livraisons',
    summary:
      'Application de gestion des livraisons pour organiser le suivi des commandes et les opérations de livraison, de la réception des colis aux retours.',
    description: [
      'CasaDrop est une application de gestion des livraisons conçue pour organiser le suivi des commandes et les opérations de livraison : réception, affectation aux livreurs, suivi, échecs et retours.',
      'L’interface propose des espaces distincts selon le rôle (administrateur, fournisseur, livreur). L’application est développée et fonctionne en local ; il n’existe pas, pour l’instant, de démonstration publique.',
    ],
    features: [
      'Gestion des commandes',
      'Importation de commandes depuis Excel',
      'Réception des commandes',
      'Affectation et réaffectation aux livreurs',
      'Suivi des livraisons',
      'Gestion des tentatives de livraison et des échecs',
      'Gestion des retours et de la réexpédition',
      'Notifications',
      'Tableau de bord et statistiques',
    ],
    tech: ['Laravel', 'React', 'MySQL'],
    status: 'Fonctionnelle en local — pas de démonstration publique',
    url: null,
    screenshots: [
      img('casadrop', 'tableau-admin', 1600, 748, 'Tableau de bord administrateur de CasaDrop avec statistiques de commandes et taux de livraison', 'Tableau de bord administrateur : statistiques, taux et répartition par statut.'),
      img('casadrop', 'tableau-fournisseur', 1600, 735, 'Tableau de bord fournisseur de CasaDrop avec boutons de nouvelle commande et d’import Excel ou CSV', 'Espace fournisseur : suivi des commandes, import Excel / CSV et retours.'),
      img('casadrop', 'connexion', 1600, 709, 'Page de connexion de l’application CasaDrop', 'Page de connexion.'),
    ],
  },
  {
    id: '3a-corporation-maroc',
    kind: 'projet',
    title: '3A Corporation Maroc — Site e-commerce',
    shortTitle: '3A Corporation Maroc',
    monogram: '3A',
    category: 'Site e-commerce · matériel informatique',
    summary:
      'Création et développement du site e-commerce de 3A Corporation Maroc, spécialisé dans le matériel informatique.',
    description: [
      'Création et développement d’un site e-commerce spécialisé dans le matériel informatique, réalisé avec WordPress, Elementor et WooCommerce.',
      'Le site est en ligne : le bouton « Voir le projet » ouvre la boutique.',
    ],
    features: [],
    tech: ['WordPress', 'Elementor', 'WooCommerce'],
    status: 'En ligne',
    url: 'https://3acorporationmaroc.com/',
    screenshots: [
      img('3a-corporation', 'accueil', 1600, 743, 'Page d’accueil du site e-commerce 3A Corporation Maroc : matériel informatique, équipements réseau et vidéosurveillance', 'Page d’accueil du site en ligne.'),
    ],
  },
  {
    id: 'gestion-commerciale-facturation',
    kind: 'projet',
    title: 'Gestion commerciale et facturation',
    shortTitle: 'Gestion commerciale et facturation',
    category: 'Application de gestion commerciale',
    summary:
      'Application de gestion commerciale et de facturation : clients, fournisseurs, devis, factures, bons de livraison et bons de commande.',
    description: [
      'Application web de gestion commerciale et de facturation, qui regroupe dans un même outil les documents commerciaux d’une entreprise.',
      'Aucun lien public n’est disponible pour le moment ; les captures ci-dessous montrent l’application en fonctionnement.',
    ],
    features: [
      'Gestion des clients',
      'Gestion des fournisseurs',
      'Gestion des devis',
      'Gestion des factures',
      'Bons de livraison',
      'Bons de commande',
    ],
    tech: ['Laravel', 'React', 'MySQL'],
    status: 'Pas de lien public',
    url: null,
    screenshots: [
      img('commerciale', 'tableau-de-bord', 1600, 752, 'Tableau de bord de l’application de gestion commerciale avec clients, devis, factures et bons de livraison', 'Tableau de bord : clients, devis, factures et bons de livraison.'),
      img('commerciale', 'connexion', 757, 826, 'Page de connexion de l’application de gestion commerciale', 'Page de connexion.'),
    ],
  },
  {
    id: 'gestion-de-stock',
    kind: 'projet',
    title: 'Système de gestion de stock',
    shortTitle: 'Gestion de stock',
    category: 'Application de gestion de stock',
    summary:
      'Application web de gestion de stock : articles, entrées, sorties, retours de chantier, mouvements, fournisseurs, zones de stockage et utilisateurs.',
    description: [
      'Application web centralisant la gestion des stocks : suivi des quantités par article, des mouvements, des bons d’entrée et de sortie et des inventaires.',
      'Elle comprend un tableau de bord, une authentification, la gestion des utilisateurs avec rôles et autorisations, ainsi qu’une journalisation. Aucun lien public n’est disponible pour le moment.',
    ],
    features: [
      'Gestion des produits (articles)',
      'Gestion des entrées et des sorties de stock',
      'Retours de chantier et suivi des mouvements',
      'Suivi du stock et inventaires',
      'Gestion des fournisseurs, des chantiers et des zones de stockage',
      'Gestion des achats',
      'Gestion des utilisateurs, rôles et authentification',
    ],
    tech: ['Laravel 11', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
    status: 'Pas de lien public',
    url: null,
    screenshots: [
      img('stock', 'tableau-de-bord', 1600, 749, 'Tableau de bord de gestion de stock avec stock total, nombre d’articles, entrées, sorties et retours', 'Tableau de bord : indicateurs de stock et filtre par période.'),
      img('stock', 'mouvements-graphiques', 1600, 740, 'Tableau de bord de gestion de stock avec derniers mouvements et graphiques par catégorie', 'Derniers mouvements, stock par catégorie et mouvements par type.'),
      img('stock', 'articles', 1600, 755, 'Liste des articles avec filtres par catégorie, zone, niveau de stock et statut', 'Liste des articles avec recherche et filtres.'),
      img('stock', 'mouvements', 1600, 749, 'Historique des mouvements de stock avec stock avant et après chaque opération', 'Historique des mouvements : stock avant, quantité, stock après.'),
      img('stock', 'zones', 1600, 761, 'Liste des zones de stockage', 'Zones de stockage.'),
    ],
  },
  {
    id: 'fitplanner',
    kind: 'projet',
    title: 'FitPlanner',
    shortTitle: 'FitPlanner',
    monogram: 'Fp',
    category: 'Application fitness',
    summary:
      'Application orientée fitness et suivi de progression : calories, programme d’entraînement, exercices et tableau de bord de progression.',
    description: [
      'FitPlanner est une application orientée fitness : calcul des besoins en calories, programme d’entraînement, exercices et tableau de bord de progression.',
      'Elle est en ligne et développée avec React.',
    ],
    features: ['Calories', 'Programme', 'Exercices', 'Tableau de bord de progression'],
    tech: ['React'],
    status: 'En ligne',
    url: 'https://fitplanner.ihsolution.workers.dev/',
    screenshots: [
      img('fitplanner', 'accueil', 1600, 676, 'Page d’accueil de FitPlanner avec les accès Calories, Programme, Exercices et Progression', 'Page d’accueil de l’application.'),
    ],
  },
  {
    id: 'separator',
    kind: 'stage',
    title: 'Système de gestion des appareils informatiques',
    shortTitle: 'Gestion des appareils informatiques',
    category: 'Stage · SEPARATOR',
    summary:
      'Création d’un système de gestion des matériels informatiques lors du stage chez SEPARATOR.',
    description: [
      'Lors de mon stage chez SEPARATOR (Casablanca), j’ai participé à la conception et au développement d’une application de gestion du parc informatique.',
    ],
    features: [
      'Gestion des équipements, des employés et des attributions',
      'Tableau de bord avec statistiques et indicateurs',
      'API REST entre le front-end et le back-end',
      'Persistance des données avec MySQL',
      'Suivi du code source avec Git et GitHub',
    ],
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'React', 'MySQL', 'API REST', 'Git / GitHub'],
    status: 'Réalisé en stage',
    url: null,
    screenshots: [
      img('appareils', 'appareils', 1600, 672, 'Liste des appareils informatiques avec type, marque, modèle, état, emplacement et disponibilité', 'Liste des appareils avec recherche et filtres.'),
      img('appareils', 'nouvel-achat', 1600, 849, 'Formulaire de création d’un achat avec lignes d’articles et pièces jointes', 'Formulaire de création d’un achat.'),
      img('appareils', 'nouveau-mouvement', 976, 702, 'Formulaire d’enregistrement d’un mouvement de stock', 'Formulaire de mouvement de stock.'),
      img('appareils', 'assistant', 1600, 617, 'Interface du module Assistant AI de l’application', 'Module « Assistant AI » (interface).'),
    ],
  },
  {
    id: 'evosolution',
    kind: 'stage',
    title: 'Site pour un revendeur de camions',
    shortTitle: 'Site pour un revendeur de camions',
    category: 'Stage · EVOSOLUTION',
    summary: 'Création d’un site pour un revendeur de camions lors du stage chez EVOSOLUTION.',
    description: [
      'Lors de mon stage chez EVOSOLUTION (Casablanca), j’ai participé au développement de solutions informatiques et web, dont la création d’un site pour un revendeur de camions.',
    ],
    features: [],
    tech: [],
    status: 'Réalisé en stage',
    url: null,
    screenshots: [],
  },
];

export const featuredProjects = projects.filter((p) => p.kind === 'projet');
export const internshipProjects = projects.filter((p) => p.kind === 'stage');
export const getProject = (id) => projects.find((p) => p.id === id) || null;
