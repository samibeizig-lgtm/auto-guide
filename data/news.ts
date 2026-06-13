export interface Article {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  image: string
  readTime: number
  tags: string[]
}

export const articles: Article[] = [
  {
    id: 1,
    title: 'Les meilleures voitures hybrides disponibles en Tunisie en 2024',
    slug: 'meilleures-voitures-hybrides-tunisie-2024',
    excerpt: 'Avec la hausse des prix du carburant, les hybrides s\'imposent comme le choix idéal. Notre sélection des meilleurs modèles disponibles chez les concessionnaires tunisiens.',
    content: `La transition vers les véhicules hybrides s'accélère en Tunisie. Face à la flambée des prix du carburant et aux préoccupations environnementales croissantes, de plus en plus de Tunisiens se tournent vers cette technologie.

## Pourquoi choisir un hybride en Tunisie ?

Le coût du carburant représente une part importante du budget automobile d'un ménage tunisien. Un véhicule hybride peut réduire cette dépense de 30 à 40% en usage urbain, ce qui est particulièrement avantageux dans les villes comme Tunis, Sfax ou Sousse où les embouteillages sont fréquents.

## Notre Top 3

### 1. Toyota Corolla Hybride
Avec une consommation de seulement 4.5L/100km, la Corolla est le choix numéro un pour la fiabilité et l'économie. Son système hybride mature n'a plus rien à prouver.

### 2. Renault Clio E-Tech
La française allie élégance et économie avec son système hybride unique à double moteur électrique. Idéale pour la ville avec une consommation de 4.6L/100km.

### 3. Kia Sportage HEV
Pour ceux qui préfèrent un SUV, le Sportage hybride offre un compromis parfait entre espace, puissance et consommation maîtrisée.

## Les aides disponibles

Le gouvernement tunisien propose actuellement des avantages fiscaux pour l'acquisition de véhicules hybrides. Renseignez-vous auprès de votre concessionnaire pour connaître les conditions en vigueur.`,
    category: 'Guide d\'achat',
    author: 'Ahmed Ben Salem',
    date: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    readTime: 6,
    tags: ['Hybride', 'Économie', 'Guide', 'Toyota', 'Renault'],
  },
  {
    id: 2,
    title: 'Prix des voitures en Tunisie : comprendre les taxes et droits de douane',
    slug: 'prix-voitures-tunisie-taxes-droits-douane',
    excerpt: 'Pourquoi les voitures coûtent-elles si cher en Tunisie ? On vous explique tout sur les taxes, droits de douane et autres charges qui font grimper les prix.',
    content: `Le prix d'une voiture en Tunisie peut sembler exorbitant par rapport aux prix européens. Pour comprendre ces écarts, il faut analyser la structure fiscale qui s'applique aux véhicules importés.

## La structure des prix

### Droits de douane
Les droits de douane varient selon l'origine du véhicule et les accords commerciaux en vigueur. Pour les véhicules européens, ils oscillent généralement entre 30 et 36%.

### TVA et autres taxes
La TVA tunisienne de 19% s'applique sur la valeur hors taxes. À cela s'ajoutent diverses taxes spécifiques à l'automobile.

### Impact sur le prix final
Un véhicule commercialisé à 20 000€ en Europe peut facilement dépasser 80 000 TND en Tunisie une fois toutes les taxes appliquées.

## Conseils pour optimiser votre achat

- Comparez les prix entre concessionnaires
- Négociez les options et accessoires
- Renseignez-vous sur les promotions saisonnières
- Vérifiez les garanties constructeur`,
    category: 'Marché Auto',
    author: 'Sonia Mrabet',
    date: '2024-11-08',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    readTime: 8,
    tags: ['Prix', 'Taxes', 'Marché', 'Conseil'],
  },
  {
    id: 3,
    title: 'Essai : Kia Sportage 2024, le SUV coréen qui impressionne',
    slug: 'essai-kia-sportage-2024',
    excerpt: 'Nous avons testé le nouveau Kia Sportage sur les routes tunisiennes. Verdict : un SUV ambitieux qui rivalise avec les meilleurs européens.',
    content: `Après une semaine passée au volant du Kia Sportage 2024 sur les routes tunisiennes, voici notre bilan complet de ce SUV qui fait beaucoup parler de lui.

## Design : un coup de maître

Kia a complètement revu la copie avec cette génération. Le design "Opposites United" donne au Sportage une silhouette unique, presque futuriste. Les feux avant en boomerang sont particulièrement réussis.

## Habitacle : le luxe coréen

L'intérieur impressionne par son niveau de finition. L'écran panoramique de 12.3 pouces courbe est une réelle réussite, tant sur le plan visuel que fonctionnel. Les matériaux utilisés rivalisent avec des marques premium européennes.

## Sur la route tunisienne

Nos routes représentent parfois un défi pour les suspensions. Le Sportage s'en sort bien grâce à ses amortisseurs bien calibrés. La garde au sol généreuse permet de passer sans crainte sur les nombreuses dénivellations de nos routes.

## Verdict

Le Kia Sportage 2024 est une réussite incontestable. À 128 000 TND, il offre un rapport équipement/prix difficile à égaler dans le segment des SUV familiaux.

**Note globale : 4.6/5**`,
    category: 'Essai',
    author: 'Karim Jebali',
    date: '2024-10-28',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    readTime: 10,
    tags: ['Essai', 'Kia', 'Sportage', 'SUV'],
  },
  {
    id: 4,
    title: 'Entretien voiture en Tunisie : nos conseils pour réduire les coûts',
    slug: 'entretien-voiture-tunisie-conseils',
    excerpt: 'L\'entretien est souvent négligé mais crucial pour la durée de vie de votre véhicule. Découvrez nos conseils pratiques adaptés aux conditions tunisiennes.',
    content: `Avec la chaleur intense de nos étés et les conditions routières parfois difficiles, l'entretien de votre véhicule en Tunisie demande une attention particulière.

## Les points critiques en Tunisie

### Climatisation
La clim est sollicitée à l'extrême en été tunisien. Faites réviser votre système chaque année avant l'été : vérification du gaz, nettoyage du filtre d'habitacle, contrôle du condenseur.

### Filtres à air
La poussière et le sable tunisiens colmatent rapidement les filtres à air. Contrôlez-les tous les 10 000 km et remplacez-les si nécessaire.

### Huile moteur
Avec les températures élevées, l'huile moteur se dégrade plus vite. Optez pour des huiles synthétiques de qualité et respectez les intervalles de vidange.

### Pneus
La chaleur du bitume en été accélère l'usure des pneus. Vérifiez régulièrement la pression et l'usure.

## Choisir son garage

Optez pour des centres agréés par les constructeurs pour les voitures sous garantie. Pour les voitures plus anciennes, comparez les devis et n'hésitez pas à demander les pièces remplacées.`,
    category: 'Pratique',
    author: 'Ahmed Ben Salem',
    date: '2024-10-15',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80',
    readTime: 7,
    tags: ['Entretien', 'Conseils', 'Pratique', 'Budget'],
  },
  {
    id: 5,
    title: 'SUV vs Berline : quel choix pour la Tunisie ?',
    slug: 'suv-vs-berline-choix-tunisie',
    excerpt: 'Le dilemme classique de l\'acheteur tunisien : faut-il craquer pour un SUV à la mode ou rester fidèle à la berline plus classique ? On pèse le pour et le contre.',
    content: `C'est la question que se posent de nombreux acheteurs tunisiens lors de l'acquisition d'un nouveau véhicule. SUV ou berline ? Voici notre analyse objective.

## Les avantages du SUV en Tunisie

La garde au sol élevée est un vrai atout sur nos routes parfois dégradées. Les nids de poule, dos d'âne et revêtements inégaux sont mieux absorbés par un SUV.

La position de conduite haute offre une meilleure visibilité, appréciable dans le trafic dense des grandes villes.

## Les avantages de la berline

Une berline est généralement moins chère à l'achat et à l'entretien. Sa consommation est aussi souvent inférieure.

En ville, le gabarit plus compact d'une berline facilite le stationnement et les manœuvres dans les ruelles étroites des médinas.

## Notre verdict

Pour un usage principalement urbain à Tunis ou Sfax : une berline compact comme la Golf ou la Corolla.

Pour un usage mixte ville/route avec des trajets réguliers vers l'intérieur du pays : un SUV compact comme le Sportage ou le Tucson.`,
    category: 'Guide d\'achat',
    author: 'Sonia Mrabet',
    date: '2024-09-30',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&q=80',
    readTime: 5,
    tags: ['SUV', 'Berline', 'Guide', 'Comparatif'],
  },
  {
    id: 6,
    title: 'Marché de l\'occasion en Tunisie : guide de l\'acheteur prudent',
    slug: 'marche-occasion-tunisie-guide-acheteur',
    excerpt: 'Acheter une voiture d\'occasion en Tunisie peut être une excellente affaire ou un vrai cauchemar. Suivez nos conseils pour ne pas vous faire avoir.',
    content: `Le marché de l'occasion tunisien est dynamique mais semé d'embûches pour l'acheteur non averti. Voici comment naviguer sereinement.

## Avant la visite

Faites vos recherches en ligne sur les prix du marché. La cote d'un véhicule dépend de son kilométrage, de son année et de son état général.

## Lors de la visite

Venez toujours de jour pour bien inspecter la carrosserie. Vérifiez les joints de portes, les seuils et le dessous du véhicule pour détecter des traces de rouille ou de réparations.

Demandez le carnet d'entretien et vérifiez la cohérence entre le kilométrage et les révisions effectuées.

## L'essai indispensable

Ne signez jamais sans avoir fait un essai complet. Testez l'accélération, le freinage, la climatisation et tous les équipements.

## La visite chez un professionnel

Avant l'achat, faites inspecter le véhicule par un mécanicien de confiance. Cela peut vous coûter 50 à 100 TND mais peut vous éviter de mauvaises surprises bien plus coûteuses.`,
    category: 'Pratique',
    author: 'Karim Jebali',
    date: '2024-09-15',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
    readTime: 8,
    tags: ['Occasion', 'Conseils', 'Achat', 'Pratique'],
  },
]

export const articleCategories = [...new Set(articles.map(a => a.category))]
