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
    title: 'Les voitures électriques en Tunisie en 2026 : état des lieux et perspectives',
    slug: 'voitures-electriques-tunisie-2026',
    excerpt: 'BYD, MG, Hyundai, Kia… L\'offre électrique s\'étoffe en Tunisie. Mais où en est l\'infrastructure de recharge ? On fait le point complet.',
    content: `L'année 2026 marque un tournant pour la mobilité électrique en Tunisie. Avec l'arrivée de plusieurs constructeurs chinois et coréens, le marché change de visage.

## Une offre qui s'élargit enfin

Le BYD Dolphin à 105 000 TND est désormais la voiture électrique la plus accessible du pays. Face à lui, le MG4 à 112 000 TND offre une autonomie de 435 km, un argument de poids pour les Tunisiens méfiants vis-à-vis de l'autonomie.

Pour les budgets plus élevés, le BYD Seal et le Kia EV6 proposent des autonomies dépassant les 500 km, de quoi relier Tunis à Sfax sans s'arrêter.

## L'infrastructure de recharge : le vrai défi

C'est le principal frein à l'adoption. En 2026, on recense moins de 50 bornes de recharge rapide (DC) sur l'ensemble du territoire tunisien, principalement concentrées à Tunis, Sfax et Sousse.

La STEG a annoncé un plan d'installation de 200 bornes supplémentaires d'ici fin 2027, mais le déploiement accuse du retard.

## Avantages fiscaux en vigueur

Le gouvernement tunisien maintient une exonération partielle des droits de douane sur les véhicules électriques, ce qui explique des prix relativement compétitifs comparés aux thermiques équivalents.

## Notre verdict

Acheter électrique en 2026 en Tunisie est raisonnable si vous vivez en ville et pouvez recharger à domicile. Pour les grands voyageurs, il faudra encore patienter.`,
    category: 'Marché Auto',
    author: 'Karim Jebali',
    date: '2026-06-10',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    readTime: 7,
    tags: ['Électrique', 'BYD', 'MG', 'Marché', '2026'],
  },
  {
    id: 2,
    title: 'Essai : BYD Atto 3, le SUV électrique chinois qui bouscule le marché tunisien',
    slug: 'essai-byd-atto-3-tunisie-2026',
    excerpt: 'Nous avons conduit le BYD Atto 3 sur les routes tunisiennes pendant une semaine. Un SUV électrique surprenant qui donne des leçons à bien des concurrents plus chers.',
    content: `Une semaine au volant du BYD Atto 3, sur les routes de Tunis, Hammamet et l'autoroute A1. Voici notre verdict sans concession.

## Premier contact : une qualité surprenante

En montant dans l'Atto 3, on est d'abord frappé par la qualité perçue. Les matériaux sont bons, l'écran rotatif de 12.8 pouces est réactif, et les finitions ne donnent pas l'impression d'une voiture d'entrée de gamme malgré son prix de 148 000 TND.

## Sur la route

Le moteur de 204 ch procure des accélérations franches et silencieuses. En ville, le passage en mode One-Pedal facilite vraiment la conduite. Sur autoroute, la voiture reste stable et confortable jusqu'à 130 km/h.

## Autonomie réelle

Annoncée à 420 km, nous avons obtenu environ 370 km en usage mixte avec la climatisation. Sur autoroute à vitesse soutenue, comptez plutôt 300 km. Suffisant pour le quotidien tunisien.

## Recharge

Avec la charge rapide à 80 kW, il faut environ 45 minutes pour passer de 20% à 80%. Une borne publique à Tunis Centre nous a permis de tester cette fonctionnalité sans souci.

## Verdict final

**Note : 4.2/5** — Le BYD Atto 3 est une excellente première voiture électrique pour un Tunisien. Confort, technologie et autonomie au rendez-vous. Le seul bémol reste le réseau de recharge encore limité hors des grandes villes.`,
    category: 'Essai',
    author: 'Ahmed Ben Salem',
    date: '2026-05-28',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
    readTime: 9,
    tags: ['Essai', 'BYD', 'Électrique', 'SUV'],
  },
  {
    id: 3,
    title: 'Kia Sportage vs Hyundai Tucson 2026 : lequel choisir pour la Tunisie ?',
    slug: 'kia-sportage-vs-hyundai-tucson-2026',
    excerpt: 'Deux SUV coréens au sommet de leur forme. Le Sportage séduit par son design, le Tucson par son espace. Notre comparatif complet pour vous aider à choisir.',
    content: `Les deux frères ennemis coréens se livrent une bataille sans merci sur le marché tunisien. Voici notre analyse point par point.

## Design : avantage Sportage

Le Kia Sportage affiche un design plus audacieux et tranché qui attire les regards. Le Tucson, dessiné plus sobrement, plaira davantage aux acheteurs qui préfèrent un style intemporel.

## Habitabilité : avantage Tucson

Le Tucson est légèrement plus long (+5 cm) et offre plus de dégagement aux genoux à l'arrière. Son coffre de 539 litres dépasse celui du Sportage (503 litres).

## Technologie

Les deux proposent des tableaux de bord très modernes avec grand écran, mais le Sportage avec son double écran incurvé de 12.3 pouces a une longueur d'avance en termes de wow-effect.

## Motorisation en Tunisie

- Sportage : hybride 230 ch, excellente reprise
- Tucson : diesel 185 ch, couple élevé idéal sur autoroute

## Prix (2026)

- Kia Sportage HEV : 128 000 TND — Garantie 7 ans
- Hyundai Tucson : 135 000 TND — Garantie 5 ans

## Notre verdict

Pour une famille qui privilégie l'espace : **Tucson**. Pour ceux qui veulent les dernières technologies et un style marqué : **Sportage**, avec en prime une meilleure garantie.`,
    category: 'Comparatif',
    author: 'Sonia Mrabet',
    date: '2026-05-15',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    readTime: 8,
    tags: ['Comparatif', 'Kia', 'Hyundai', 'SUV'],
  },
  {
    id: 4,
    title: 'Les prix des voitures ont-ils baissé en Tunisie en 2026 ?',
    slug: 'prix-voitures-tunisie-evolution-2026',
    excerpt: 'Entre inflation, fluctuation du dinar et nouveaux acteurs chinois, le marché automobile tunisien est en pleine mutation. Analyse des tendances de prix en 2026.',
    content: `La grande question que se posent tous les acheteurs tunisiens en 2026 : les prix ont-ils enfin baissé ? La réponse est nuancée.

## L'impact des marques chinoises

L'arrivée massive de BYD, Chery et MG a créé une pression à la baisse sur les prix des segments SUV et citadine. Le Chery Tiggo 4 Pro à 65 000 TND force ses concurrents japonais et européens à justifier leurs tarifs plus élevés.

## Les marques européennes tiennent leurs prix

Volkswagen, Peugeot et Renault maintiennent des prix élevés, justifiés par une image de marque forte et des réseaux SAV étendus. La Golf reste à 115 000 TND malgré la concurrence.

## Le dinar tunisien, facteur clé

La stabilisation relative du dinar face à l'euro en 2026 a limité la hausse des prix des véhicules importés d'Europe. En revanche, les modèles en provenance d'Asie bénéficient d'accords commerciaux plus favorables.

## Nos prévisions

La tendance est à une légère baisse des prix dans le segment des citadines et une stabilisation sur les SUV, portée par la concurrence croissante des constructeurs asiatiques.

## Conseil pratique

Négociez toujours en fin de trimestre (mars, juin, septembre, décembre) quand les concessionnaires cherchent à atteindre leurs objectifs.`,
    category: 'Marché Auto',
    author: 'Karim Jebali',
    date: '2026-04-20',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    readTime: 6,
    tags: ['Prix', 'Marché', '2026', 'Tendances'],
  },
  {
    id: 5,
    title: 'Guide d\'achat voiture neuve en Tunisie : tout ce qu\'il faut savoir en 2026',
    slug: 'guide-achat-voiture-neuve-tunisie-2026',
    excerpt: 'Procédures, taxes, délais de livraison, concessionnaires : notre guide complet pour acheter une voiture neuve en Tunisie sans mauvaise surprise.',
    content: `Acheter une voiture neuve en Tunisie en 2026 implique plusieurs étapes et précautions. Voici notre guide pas à pas.

## Les documents nécessaires

Pour financer comptant ou par crédit, préparez : CIN, justificatif de revenus (3 fiches de paie), justificatif de domicile, et relevé bancaire des 3 derniers mois.

## Comprendre les délais

Les délais de livraison varient entre 2 semaines (stock disponible) et 6 mois (commande spécifique). Les marques chinoises comme BYD et Chery ont raccourci leurs délais grâce à un stock local mieux géré.

## Le financement auto en Tunisie

Les banques tunisiennes proposent des crédits auto entre 8% et 12% par an sur 5 à 7 ans. Certains constructeurs comme Toyota et Hyundai proposent leur propre financement avec des taux parfois préférentiels.

## Les pièges à éviter

- Ne signez jamais sans avoir vu et essayé le véhicule
- Vérifiez que la garantie constructeur s'applique en Tunisie
- Méfiez-vous des "frais de dossier" abusifs
- Comparez les prix entre plusieurs concessionnaires de la même marque

## La reprise de votre ancien véhicule

Les concessionnaires proposent généralement une reprise à prix inférieur au marché. Vendez plutôt en direct via des plateformes comme Tayara.tn pour obtenir le meilleur prix.`,
    category: 'Guide d\'achat',
    author: 'Sonia Mrabet',
    date: '2026-04-05',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80',
    readTime: 10,
    tags: ['Guide', 'Achat', 'Conseil', '2026'],
  },
  {
    id: 6,
    title: 'Entretien en Tunisie : comment réduire la facture en 2026',
    slug: 'entretien-voiture-tunisie-reduire-facture-2026',
    excerpt: 'Pièces de rechange, main d\'œuvre, centres agréés vs garages indépendants : nos conseils pour entretenir votre voiture sans vous ruiner en 2026.',
    content: `Avec la hausse des prix des pièces de rechange importées, l'entretien automobile pèse de plus en plus lourd dans le budget des Tunisiens. Voici comment optimiser vos dépenses.

## Centres agréés vs garages indépendants

Pour une voiture sous garantie (moins de 3 ans) : allez obligatoirement chez un centre agréé pour ne pas perdre votre garantie constructeur.

Après la garantie : un bon garage indépendant peut vous faire économiser 30 à 50% sur la main d'œuvre. Choisissez-en un recommandé par votre entourage.

## Les pièces de rechange en 2026

Le marché des pièces a évolué avec l'arrivée de fournisseurs turcs et chinois. Pour les filtres, plaquettes de frein et amortisseurs, les pièces d'origine turque offrent souvent un bon compromis qualité/prix.

Pour les pièces moteur critiques (courroie de distribution, injecteurs), ne lésinez pas sur la qualité et optez pour des pièces d'origine ou équivalent premium.

## Les entretiens à ne jamais négliger

Avec la chaleur tunisienne, ces 3 points sont critiques :
- **Climatisation** : révision annuelle avant l'été
- **Liquide de refroidissement** : vérification tous les 2 ans
- **Pneus** : pression et usure à contrôler tous les mois en été

## Astuce budget

Regroupez plusieurs opérations lors d'un même passage au garage (vidange + filtre à air + filtre habitacle) pour économiser sur la main d'œuvre.`,
    category: 'Pratique',
    author: 'Ahmed Ben Salem',
    date: '2026-03-18',
    image: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80',
    readTime: 7,
    tags: ['Entretien', 'Budget', 'Conseils', 'Pratique'],
  },
]

export const articleCategories = [...new Set(articles.map(a => a.category))]
