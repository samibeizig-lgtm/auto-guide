// Script d'import des données locales vers Sanity
// Exécuter : node sanity/import.mjs

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ztwm4can',
  dataset: 'production',
  apiVersion: '2026-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

// ── Données des marques ──
const brandsData = [
  { name: 'Toyota',     country: 'Japon',         color: '#EB0A1E' },
  { name: 'Volkswagen', country: 'Allemagne',      color: '#001E50' },
  { name: 'Dacia',      country: 'Roumanie',       color: '#005BBB' },
  { name: 'Hyundai',    country: 'Corée du Sud',   color: '#002C5F' },
  { name: 'Renault',    country: 'France',         color: '#EFB13F' },
  { name: 'Kia',        country: 'Corée du Sud',   color: '#05141F' },
  { name: 'Peugeot',    country: 'France',         color: '#0A0A0A' },
  { name: 'Suzuki',     country: 'Japon',          color: '#005BAC' },
  { name: 'Chery',      country: 'Chine',          color: '#333333' },
  { name: 'MG',         country: 'Chine / UK',     color: '#CE1126' },
  { name: 'Fiat',       country: 'Italie',         color: '#8B0000' },
  { name: 'Seat',       country: 'Espagne',        color: '#B40015' },
  { name: 'Skoda',      country: 'Tchéquie',       color: '#4BA82E' },
  { name: 'Ford',       country: 'USA',            color: '#003478' },
  { name: 'BMW',        country: 'Allemagne',      color: '#1C69D4' },
  { name: 'Mercedes',   country: 'Allemagne',      color: '#333333' },
  { name: 'Nissan',     country: 'Japon',          color: '#C3002F' },
  { name: 'Mitsubishi', country: 'Japon',          color: '#E60012' },
  { name: 'BYD',        country: 'Chine',          color: '#E2001A' },
  { name: 'Audi',       country: 'Allemagne',      color: '#BB0A14' },
  { name: 'Citroën',    country: 'France',         color: '#333333' },
  { name: 'Chevrolet',  country: 'USA',            color: '#D4A017' },
]

// ── Données des voitures ──
const carsData = [
  { brand:'Toyota',     model:'Corolla',       year:2026, price:109000, priceOccasion:62000,  category:'Berline',   fuel:'Hybride',    transmission:'Automatique', power:122, engine:'1.8L Hybride',        consumption:4.5,  seats:5, doors:4, rating:4.5, available:true, description:'La Toyota Corolla hybride est l\'une des voitures les plus fiables et économiques sur le marché tunisien.', pros:['Fiabilité légendaire','Faible consommation','Coût d\'entretien bas'], cons:['Conduite peu sportive','Coffre moyen'] },
  { brand:'Volkswagen', model:'Golf',           year:2026, price:115000, priceOccasion:78000,  category:'Compacte',  fuel:'Essence',    transmission:'Automatique', power:150, engine:'1.5L TSI',             consumption:5.8,  seats:5, doors:5, rating:4.3, available:true, description:'La Volkswagen Golf reste la référence des compactes avec son équilibre parfait entre confort, sportivité et technologie.', pros:['Qualité de finition','Plaisir de conduite','Richement équipée'], cons:['Prix élevé','Options coûteuses'] },
  { brand:'Dacia',      model:'Sandero',        year:2026, price:72000,  priceOccasion:32000,  category:'Citadine',  fuel:'Essence',    transmission:'Manuelle',    power:90,  engine:'1.0L TCe',             consumption:5.1,  seats:5, doors:5, rating:4.0, available:true, description:'La Dacia Sandero est le meilleur rapport qualité/prix du marché tunisien.', pros:['Prix imbattable','Économique','Facile à entretenir'], cons:['Finition simple','Peu d\'équipements'] },
  { brand:'Hyundai',    model:'Tucson',         year:2026, price:157950, priceOccasion:95000,  category:'SUV',       fuel:'Diesel',     transmission:'Automatique', power:185, engine:'1.6L CRDi',            consumption:6.2,  seats:5, doors:5, rating:4.4, available:true, description:'Le Hyundai Tucson est le SUV coréen qui a tout pour plaire : design moderne, technologie avancée et espace généreux.', pros:['Design attrayant','Habitacle spacieux','Garantie 5 ans'], cons:['Consommation diesel','Prix élevé des options'] },
  { brand:'Renault',    model:'Clio',           year:2026, price:66950,  priceOccasion:48000,  category:'Citadine',  fuel:'Hybride',    transmission:'Automatique', power:140, engine:'1.6L E-Tech',          consumption:4.6,  seats:5, doors:5, rating:4.2, available:true, description:'La Renault Clio hybride allie élégance française et économie d\'énergie.', pros:['Design soigné','Économique en ville','Bonne tenue de route'], cons:['Coffre limité','Places arrière étroites'] },
  { brand:'Kia',        model:'Sportage',       year:2026, price:174980, priceOccasion:88000,  category:'SUV',       fuel:'Hybride',    transmission:'Automatique', power:230, engine:'1.6L T-GDi HEV',       consumption:6.0,  seats:5, doors:5, rating:4.6, available:true, description:'Le Kia Sportage nouvelle génération impressionne par son design futuriste.', pros:['Design spectaculaire','Intérieur luxueux','Garantie 7 ans'], cons:['Interface complexe','Consommation variable'] },
  { brand:'Peugeot',    model:'208',            year:2026, price:68000,  priceOccasion:44000,  category:'Citadine',  fuel:'Essence',    transmission:'Automatique', power:100, engine:'1.2L PureTech',        consumption:5.4,  seats:5, doors:5, rating:4.1, available:true, description:'La Peugeot 208 avec son i-Cockpit révolutionnaire offre une expérience unique.', pros:['Design unique','Intérieur haut de gamme','Agilité'], cons:['Volant petit','Coffre petit'] },
  { brand:'Suzuki',     model:'Vitara',         year:2026, price:82000,  priceOccasion:56000,  category:'SUV',       fuel:'Hybride',    transmission:'Automatique', power:129, engine:'1.4L Boosterjet MHEV', consumption:5.5,  seats:5, doors:5, rating:3.9, available:true, description:'Le Suzuki Vitara hybride combine polyvalence, économie et qualité japonaise.', pros:['Prix raisonnable','Capacités tout-terrain','Fiable'], cons:['Puissance limitée','Finition moyenne'] },
  { brand:'Chery',      model:'Tiggo 4 Pro',    year:2026, price:57900,  priceOccasion:44000,  category:'SUV',       fuel:'Essence',    transmission:'Automatique', power:147, engine:'1.5L Turbo',           consumption:7.0,  seats:5, doors:5, rating:3.8, available:true, description:'Le Chery Tiggo 4 Pro cartonne en Tunisie grâce à son rapport équipements/prix imbattable.', pros:['Prix très compétitif','Équipement généreux','Spacieux'], cons:['SAV limité','Fiabilité à prouver'] },
  { brand:'MG',         model:'ZS',             year:2026, price:79950,  priceOccasion:55000,  category:'SUV',       fuel:'Essence',    transmission:'Automatique', power:143, engine:'1.5L Turbo',           consumption:7.2,  seats:5, doors:5, rating:3.9, available:true, description:'Le MG ZS est le SUV le mieux équipé de sa catégorie pour son prix.', pros:['Équipement complet','Design moderne','Prix attractif'], cons:['Marque peu connue en Tunisie','Valeur revente incertaine'] },
  { brand:'Fiat',       model:'500',            year:2026, price:62000,  priceOccasion:40000,  category:'Citadine',  fuel:'Essence',    transmission:'Automatique', power:101, engine:'1.0L Hybrid',          consumption:5.3,  seats:4, doors:3, rating:4.0, available:true, description:'La Fiat 500 est l\'icône italienne qui séduit par son style rétro modernisé.', pros:['Design iconique','Agilité en ville','Image de marque'], cons:['2+2 places','Coffre très petit'] },
  { brand:'Seat',       model:'Ibiza',          year:2026, price:68000,  priceOccasion:44000,  category:'Citadine',  fuel:'Essence',    transmission:'Manuelle',    power:95,  engine:'1.0L TSI',             consumption:5.0,  seats:5, doors:5, rating:4.0, available:true, description:'La Seat Ibiza est la citadine espagnole qui combine sportivité et praticité.', pros:['Dynamique','Bien équipée','Bonne finition'], cons:['Boîte manuelle uniquement','Places arrière limitées'] },
  { brand:'Skoda',      model:'Octavia',        year:2026, price:99000,  priceOccasion:65000,  category:'Berline',   fuel:'Essence',    transmission:'Automatique', power:150, engine:'1.5L TSI',             consumption:5.9,  seats:5, doors:4, rating:4.3, available:true, description:'La Skoda Octavia est la berline la plus rationnelle du marché — espace, qualité et fiabilité.', pros:['Espace intérieur exceptionnel','Coffre 600L','Rapport qualité/prix'], cons:['Design discret','Image de marque'] },
  { brand:'Ford',       model:'Puma',           year:2026, price:95000,  priceOccasion:62000,  category:'Crossover', fuel:'Hybride',    transmission:'Automatique', power:125, engine:'1.0L EcoBoost MHEV',   consumption:5.3,  seats:5, doors:5, rating:4.1, available:true, description:'Le Ford Puma hybride est le crossover le plus dynamique de sa catégorie.', pros:['Coffre MegaBox innovant','Design sportif','Économique'], cons:['Prix en hausse','SAV parfois lent'] },
  { brand:'Toyota',     model:'Yaris',          year:2026, price:84900,  priceOccasion:50000,  category:'Citadine',  fuel:'Hybride',    transmission:'Automatique', power:116, engine:'1.5L HEV 3 cyl.',      consumption:2.8,  seats:5, doors:5, rating:4.4, available:true, description:'La Toyota Yaris hybride est la citadine la plus économique du marché tunisien avec 2.8L/100km.', pros:['Consommation record 2.8L/100km','Fiabilité Toyota','Garantie batterie 5 ans'], cons:['Coffre limité 284L','Vitres avant uniquement'], acceleration:9.7, topSpeed:175, length:3940, width:1745, height:1470, trunkVolume:284, warranty:'3 ans / 100 000 km', warrantyBattery:'5 ans / 150 000 km' },
  { brand:'Toyota',     model:'RAV4',           year:2026, price:184800, priceOccasion:120000, category:'SUV',       fuel:'Hybride',    transmission:'Automatique', power:222, engine:'2.5L HEV',             consumption:5.7,  seats:5, doors:5, rating:4.6, available:true, description:'Le Toyota RAV4 Hybride est le SUV familial référence en Tunisie.', pros:['Fiabilité Toyota','AWD électrique','Faible consommation pour la taille'], cons:['Prix élevé','Boîte CVT peu sportive'] },
  { brand:'Hyundai',    model:'i20',            year:2026, price:66950,  priceOccasion:44000,  category:'Citadine',  fuel:'Essence',    transmission:'Manuelle',    power:84,  engine:'1.2L MPi',             consumption:5.6,  seats:5, doors:5, rating:3.9, available:true, description:'La Hyundai i20 est la citadine coréenne abordable et fiable.', pros:['Prix accessible','Garantie 5 ans','Spacieuse pour sa taille'], cons:['Motorisation basique','Équipement limité'] },
  { brand:'Hyundai',    model:'Grand i10',      year:2026, price:49950,  priceOccasion:32000,  category:'Citadine',  fuel:'Essence',    transmission:'Manuelle',    power:67,  engine:'1.2L MPi',             consumption:5.2,  seats:5, doors:5, rating:3.7, available:true, description:'La Hyundai Grand i10 est la voiture d\'entrée de gamme la plus accessible du marché tunisien.', pros:['Prix imbattable','Garantie 5 ans','Économique'], cons:['Performances limitées','Finition basique'] },
  { brand:'Kia',        model:'Picanto',        year:2026, price:47980,  priceOccasion:30000,  category:'Citadine',  fuel:'Essence',    transmission:'Manuelle',    power:67,  engine:'1.0L MPi',             consumption:4.9,  seats:5, doors:5, rating:3.8, available:true, description:'La Kia Picanto est la citadine coréenne la plus abordable avec garantie 7 ans.', pros:['Garantie 7 ans','Économique','Maniable'], cons:['Puissance faible','Peu de coffre'] },
  { brand:'Kia',        model:'Stonic',         year:2026, price:74480,  priceOccasion:50000,  category:'Crossover', fuel:'Essence',    transmission:'Automatique', power:120, engine:'1.0L T-GDi',           consumption:6.1,  seats:5, doors:5, rating:4.0, available:true, description:'Le Kia Stonic est le crossover compact coréen qui combine style et praticité.', pros:['Design accrocheur','Garantie 7 ans','Bien équipé'], cons:['Coffre petit','Suspension ferme'] },
  { brand:'Dacia',      model:'Duster',         year:2026, price:72000,  priceOccasion:48000,  category:'SUV',       fuel:'Essence',    transmission:'Manuelle',    power:130, engine:'1.3L TCe',             consumption:6.5,  seats:5, doors:5, rating:4.2, available:true, description:'Le Dacia Duster reste le roi du rapport qualité/prix dans les SUV en Tunisie.', pros:['Prix imbattable','Robuste','4x4 disponible'], cons:['Finition basique','Bruit de roulement'] },
  { brand:'Renault',    model:'Captur',         year:2026, price:88000,  priceOccasion:58000,  category:'Crossover', fuel:'Hybride',    transmission:'Automatique', power:140, engine:'1.6L E-Tech',          consumption:4.8,  seats:5, doors:5, rating:4.2, available:true, description:'Le Renault Captur E-Tech hybride est le crossover urbain le plus vendu de France.', pros:['Design élégant','Économique','Modulable'], cons:['Coffre moyen','Prix options'] },
  { brand:'Peugeot',    model:'2008',           year:2026, price:92000,  priceOccasion:60000,  category:'SUV',       fuel:'Essence',    transmission:'Automatique', power:130, engine:'1.2L PureTech',        consumption:6.2,  seats:5, doors:5, rating:4.2, available:true, description:'Le Peugeot 2008 est le SUV compact au design le plus réussi de sa catégorie.', pros:['Design primé','i-Cockpit','Confort'], cons:['Prix en hausse','Options chères'] },
  { brand:'Volkswagen', model:'Polo',           year:2026, price:78000,  priceOccasion:52000,  category:'Citadine',  fuel:'Essence',    transmission:'Automatique', power:95,  engine:'1.0L TSI',             consumption:5.2,  seats:5, doors:5, rating:4.1, available:true, description:'La Volkswagen Polo est la citadine premium la mieux construite de sa catégorie.', pros:['Qualité VW','Bien équipée','Tenue de route'], cons:['Prix élevé','Coffre moyen'] },
  { brand:'Volkswagen', model:'Tiguan',         year:2026, price:155000, priceOccasion:100000, category:'SUV',       fuel:'Essence',    transmission:'Automatique', power:150, engine:'1.5L TSI evo',         consumption:6.8,  seats:5, doors:5, rating:4.4, available:true, description:'Le Volkswagen Tiguan est le SUV compact premium le plus populaire d\'Europe.', pros:['Espace généreux','Qualité de fabrication','Technologies avancées'], cons:['Prix élevé','Options très chères'] },
  { brand:'Chery',      model:'Tiggo 7 Pro',    year:2026, price:89000,  priceOccasion:60000,  category:'SUV',       fuel:'Essence',    transmission:'Automatique', power:197, engine:'2.0L Turbo',           consumption:7.8,  seats:5, doors:5, rating:3.9, available:true, description:'Le Chery Tiggo 7 Pro est le grand SUV chinois le mieux équipé de Tunisie.', pros:['Équipement luxueux','Moteur puissant','Grand espace'], cons:['Consommation élevée','SAV limité'] },
  { brand:'MG',         model:'MG4',            year:2026, price:112000, priceOccasion:75000,  category:'Compacte',  fuel:'Électrique', transmission:'Automatique', power:204, engine:'150 kW',               consumption:16.0, seats:5, doors:5, rating:4.3, available:true, description:'Le MG4 est la voiture électrique compacte la plus accessible de Tunisie.', pros:['Autonomie 435 km','Prix compétitif','Performances'], cons:['Réseau recharge limité','Valeur revente incertaine'], range:435 },
  { brand:'BMW',        model:'Série 3',        year:2026, price:295000, priceOccasion:195000, category:'Berline',   fuel:'Essence',    transmission:'Automatique', power:156, engine:'1.5L HEV 3 cyl.', consumption:6.5, seats:5, doors:4, rating:4.7, available:true, description:'La BMW Série 3 est la référence absolue des berlines premium en Tunisie.', pros:['Plaisir de conduite','Finition irréprochable','Technologie'], cons:['Prix très élevé','Entretien coûteux'], acceleration:8.5, topSpeed:213, length:4709, width:1827, height:1435, wheelbase:2851, trunkVolume:480, weight:1520 },
  { brand:'Mercedes',   model:'Classe A',       year:2026, price:265000, priceOccasion:175000, category:'Compacte',  fuel:'Essence',    transmission:'Automatique', power:163, engine:'1.3L Turbo',           consumption:6.4,  seats:5, doors:5, rating:4.5, available:true, description:'La Mercedes Classe A est la compacte premium la plus technologique du marché.', pros:['MBUX révolutionnaire','Prestige','Finition premium'], cons:['Prix très élevé','Habitabilité arrière limitée'] },
  { brand:'Nissan',     model:'Qashqai',        year:2026, price:125000, priceOccasion:82000,  category:'SUV',       fuel:'Hybride',    transmission:'Automatique', power:158, engine:'1.5L e-Power',         consumption:5.6,  seats:5, doors:5, rating:4.2, available:true, description:'Le Nissan Qashqai e-Power est l\'inventeur du segment SUV compact.', pros:['Pionnier du segment','Confort','Fiabilité Nissan'], cons:['Pas de charge externe','Prix en hausse'] },
  { brand:'Mitsubishi', model:'ASX',            year:2026, price:98000,  priceOccasion:65000,  category:'SUV',       fuel:'Essence',    transmission:'Automatique', power:130, engine:'1.3L Turbo',           consumption:6.0,  seats:5, doors:5, rating:3.9, available:true, description:'Le Mitsubishi ASX nouvelle génération partage sa plateforme avec le Renault Captur.', pros:['Nouveau design','Bien équipé','Garantie 5 ans'], cons:['Peu différencié','Prix moyen'] },
  { brand:'BYD',        model:'Dolphin',        year:2026, price:105000, priceOccasion:70000,  category:'Citadine',  fuel:'Électrique', transmission:'Automatique', power:177, engine:'95 kW',                consumption:14.5, seats:5, doors:5, rating:4.3, available:true, description:'Le BYD Dolphin est la voiture électrique la plus abordable de Tunisie.', pros:['Prix accessible','Autonomie correcte','Technologie BYD'], cons:['Réseau recharge','Image de marque naissante'], range:340 },
  { brand:'BYD',        model:'Atto 3',         year:2026, price:148000, priceOccasion:100000, category:'SUV',       fuel:'Électrique', transmission:'Automatique', power:204, engine:'150 kW',               consumption:15.5, seats:5, doors:5, rating:4.2, available:true, description:'Le BYD Atto 3 est le SUV électrique chinois qui bouscule le marché tunisien.', pros:['Qualité surprenante','Autonomie 420 km','Équipement complet'], cons:['Réseau SAV','Valeur revente'], range:420 },
  { brand:'BYD',        model:'Seal',           year:2026, price:165000, priceOccasion:110000, category:'Berline',   fuel:'Électrique', transmission:'Automatique', power:313, engine:'230 kW',               consumption:15.9, seats:5, doors:4, rating:4.5, available:true, description:'Le BYD Seal est la berline électrique sport la plus performante de Tunisie.', pros:['Performances exceptionnelles','Autonomie 570 km','Design sportif'], cons:['Prix élevé','Infrastructure recharge'], range:570 },
  { brand:'Kia',        model:'EV6',            year:2026, price:235000, priceOccasion:160000, category:'Berline',   fuel:'Électrique', transmission:'Automatique', power:229, engine:'77.4 kWh',             consumption:16.5, seats:5, doors:4, rating:4.6, available:true, description:'Le Kia EV6 est la berline électrique crossover la plus stylée de Tunisie.', pros:['Design spectaculaire','Grande autonomie','Garantie 7 ans batterie'], cons:['Prix élevé','Coffre sous plancher petit'], range:528 },
  { brand:'Hyundai',    model:'Ioniq 5',        year:2026, price:258000, priceOccasion:175000, category:'SUV',       fuel:'Électrique', transmission:'Automatique', power:218, engine:'77.4 kWh',             consumption:16.8, seats:5, doors:5, rating:4.7, available:true, description:'Le Hyundai Ioniq 5 est le SUV électrique premium le plus avancé technologiquement.', pros:['Charge 800V la plus rapide','V2L/V2H','Intérieur ultra-moderne'], cons:['Prix très élevé','Consommation élevée'], range:507 },
  { brand:'Audi',       model:'A3 Sportback',   year:2026, price:145000, priceOccasion:90000,  category:'Compacte',  fuel:'Essence',    transmission:'Automatique', power:150, engine:'1.5L TFSI',            consumption:6.2,  seats:5, doors:5, rating:4.4, available:true, description:'L\'Audi A3 Sportback 2026 allie design premium et technologie avancée.', pros:['Finition irréprochable','Tenue de route précise','Technologie avancée'], cons:['Prix élevé','Coffre 380L limité'] },
  { brand:'Audi',       model:'Q3',             year:2026, price:175000, priceOccasion:110000, category:'SUV',       fuel:'Essence',    transmission:'Automatique', power:150, engine:'1.5L TFSI',            consumption:6.8,  seats:5, doors:5, rating:4.3, available:true, description:'L\'Audi Q3 2026 est le SUV compact premium le plus vendu de la marque.', pros:['Qualité de fabrication','Confort élevé','Valeur à la revente'], cons:['Prix premium','Consommation moyenne'] },
  { brand:'Citroën',    model:'C3',             year:2026, price:58000,  priceOccasion:38000,  category:'Citadine',  fuel:'Essence',    transmission:'Manuelle',    power:101, engine:'1.2L PureTech',        consumption:5.8,  seats:5, doors:5, rating:4.1, available:true, description:'La nouvelle Citroën C3 redéfinit le confort dans sa catégorie.', pros:['Confort remarquable','Prix accessible','Faible consommation'], cons:['Boîte manuelle uniquement','Pas de 4x4'] },
  { brand:'Citroën',    model:'C5 Aircross',    year:2026, price:105000, priceOccasion:70000,  category:'SUV',       fuel:'Hybride',    transmission:'Automatique', power:180, engine:'1.6L PHEV',            consumption:1.6,  seats:5, doors:5, rating:4.2, available:true, description:'Le Citroën C5 Aircross Hybrid offre le meilleur du confort français.', pros:['Confort exceptionnel','Faibles émissions','Autonomie électrique utile'], cons:['Prix élevé','Coffre réduit PHEV'] },
  { brand:'Chevrolet',  model:'Captiva',        year:2026, price:89000,  priceOccasion:60000,  category:'SUV',       fuel:'Essence',    transmission:'Automatique', power:143, engine:'1.5L Turbo',           consumption:7.5,  seats:7, doors:5, rating:3.9, available:true, description:'Le Chevrolet Captiva est le SUV familial 7 places le plus abordable.', pros:['7 places compétitif','Équipement généreux','Garantie 3 ans'], cons:['Finition moyenne','Motorisation basique'] },
  { brand:'BMW',        model:'i5 eDrive40',    year:2026, price:322900, category:'Berline',   fuel:'Électrique',    transmission:'Automatique', power:340, engine:'Moteur électrique 83.9 kWh', consumption:15.9, seats:5, doors:4, rating:4.8, available:true, description:'Le BMW i5 eDrive40 Pack M Plus 2026 est la berline électrique de luxe la plus aboutie du marché tunisien.', pros:['Autonomie 560km','Recharge DC 30min','Conduite autonome Niveau 2','Garantie 5 ans + batterie 8 ans'], cons:['Prix 322 900 TND','Infrastructure DC limitée en Tunisie'], acceleration:6.0, topSpeed:195, length:5060, width:1900, height:1515, trunkVolume:490, range:560, warranty:'5 ans (2+3)', warrantyBattery:'8 ans' },
]

async function run() {
  console.log('🚀 Import des données vers Sanity...\n')

  // 1. Créer les marques
  console.log('📦 Import des marques...')
  const brandRefs = {}

  for (const b of brandsData) {
    const doc = await client.createOrReplace({
      _type: 'brand',
      _id: `brand-${b.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      name: b.name,
      country: b.country,
      color: b.color,
    })
    brandRefs[b.name] = doc._id
    console.log(`  ✅ ${b.name}`)
  }

  // 2. Créer les voitures
  console.log('\n🚗 Import des voitures...')

  for (const c of carsData) {
    const brandId = brandRefs[c.brand]
    if (!brandId) { console.log(`  ⚠️  Marque introuvable: ${c.brand}`); continue }

    const { brand, ...rest } = c
    await client.createOrReplace({
      _type: 'car',
      _id: `car-${c.brand.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${c.model.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      ...rest,
      brand: { _type: 'reference', _ref: brandId },
      mainImage: undefined,
    })
    console.log(`  ✅ ${c.brand} ${c.model}`)
  }

  console.log('\n✅ Import terminé ! Ouvre https://tunisiamotors.sanity.studio pour voir les données.')
}

run().catch(err => { console.error('❌ Erreur:', err.message); process.exit(1) })
