import { defineField, defineType } from 'sanity'

export const car = defineType({
  name: 'car',
  title: 'Voiture',
  type: 'document',
  groups: [
    { name: 'general', title: 'Général' },
    { name: 'specs', title: 'Spécifications' },
    { name: 'dimensions', title: 'Dimensions' },
    { name: 'equipment', title: 'Équipements' },
    { name: 'media', title: 'Photos' },
  ],
  fields: [
    // ── GÉNÉRAL ──
    defineField({ name: 'brand', title: 'Marque', type: 'reference', to: [{ type: 'brand' }], group: 'general', validation: r => r.required() }),
    defineField({ name: 'model', title: 'Modèle', type: 'string', group: 'general', validation: r => r.required() }),
    defineField({ name: 'year', title: 'Année', type: 'number', group: 'general', initialValue: 2026 }),
    defineField({ name: 'price', title: 'Prix neuf (TND)', type: 'number', group: 'general', validation: r => r.required() }),
    defineField({ name: 'priceOccasion', title: 'Prix occasion estimé (TND)', type: 'number', group: 'general' }),
    defineField({ name: 'category', title: 'Catégorie', type: 'string', group: 'general',
      options: { list: ['Citadine', 'Compacte', 'Berline', 'SUV', 'Crossover', 'Monospace', 'Pickup', 'Coupé', 'Cabriolet'] } }),
    defineField({ name: 'available', title: 'Disponible en Tunisie', type: 'boolean', group: 'general', initialValue: true }),
    defineField({ name: 'warranty', title: 'Garantie', type: 'string', group: 'general' }),
    defineField({ name: 'warrantyBattery', title: 'Garantie batterie', type: 'string', group: 'general' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3, group: 'general' }),
    defineField({ name: 'rating', title: 'Note (/5)', type: 'number', group: 'general', validation: r => r.min(0).max(5) }),
    defineField({ name: 'pros', title: 'Points forts', type: 'array', of: [{ type: 'string' }], group: 'general' }),
    defineField({ name: 'cons', title: 'Points faibles', type: 'array', of: [{ type: 'string' }], group: 'general' }),

    // ── SPÉCIFICATIONS ──
    defineField({ name: 'fuel', title: 'Carburant', type: 'string', group: 'specs',
      options: { list: ['Essence', 'Diesel', 'Hybride', 'Électrique', 'GPL'] } }),
    defineField({ name: 'engine', title: 'Motorisation', type: 'string', group: 'specs' }),
    defineField({ name: 'displacement', title: 'Cylindrée (cm³)', type: 'number', group: 'specs' }),
    defineField({ name: 'cylinders', title: 'Nombre de cylindres', type: 'number', group: 'specs' }),
    defineField({ name: 'power', title: 'Puissance (ch)', type: 'number', group: 'specs' }),
    defineField({ name: 'torque', title: 'Couple (Nm)', type: 'number', group: 'specs' }),
    defineField({ name: 'fiscalPower', title: 'Puissance fiscale (CV)', type: 'number', group: 'specs' }),
    defineField({ name: 'transmission', title: 'Boîte de vitesses', type: 'string', group: 'specs',
      options: { list: ['Manuelle', 'Automatique', 'CVT', 'DSG / DCT'] } }),
    defineField({ name: 'gears', title: 'Nombre de rapports', type: 'number', group: 'specs' }),
    defineField({ name: 'driveType', title: 'Transmission', type: 'string', group: 'specs',
      options: { list: ['Traction (FWD)', 'Propulsion (RWD)', 'Intégrale (AWD)', '4x4 permanent', '4x4 débrayable'] } }),
    defineField({ name: 'consumption', title: 'Conso. mixte (L/100km ou kWh/100km)', type: 'number', group: 'specs' }),
    defineField({ name: 'consumptionUrban', title: 'Conso. urbaine', type: 'number', group: 'specs' }),
    defineField({ name: 'consumptionExtraUrban', title: 'Conso. extra-urbaine', type: 'number', group: 'specs' }),
    defineField({ name: 'emissions', title: 'Émissions CO₂ (g/km)', type: 'number', group: 'specs' }),
    defineField({ name: 'range', title: 'Autonomie électrique (km)', type: 'number', group: 'specs' }),
    defineField({ name: 'acceleration', title: '0-100 km/h (secondes)', type: 'number', group: 'specs' }),
    defineField({ name: 'topSpeed', title: 'Vitesse max (km/h)', type: 'number', group: 'specs' }),
    defineField({ name: 'seats', title: 'Nombre de places', type: 'number', group: 'specs' }),
    defineField({ name: 'doors', title: 'Nombre de portes', type: 'number', group: 'specs' }),

    // ── DIMENSIONS ──
    defineField({ name: 'length', title: 'Longueur (mm)', type: 'number', group: 'dimensions' }),
    defineField({ name: 'width', title: 'Largeur (mm)', type: 'number', group: 'dimensions' }),
    defineField({ name: 'height', title: 'Hauteur (mm)', type: 'number', group: 'dimensions' }),
    defineField({ name: 'wheelbase', title: 'Empattement (mm)', type: 'number', group: 'dimensions' }),
    defineField({ name: 'weight', title: 'Poids à vide (kg)', type: 'number', group: 'dimensions' }),
    defineField({ name: 'trunkVolume', title: 'Volume coffre min (L)', type: 'number', group: 'dimensions' }),
    defineField({ name: 'trunkVolumeMax', title: 'Volume coffre max / sièges rabattus (L)', type: 'number', group: 'dimensions' }),

    // ── ÉQUIPEMENTS ──
    defineField({ name: 'features', title: 'Équipements de série', type: 'array', of: [{ type: 'string' }], group: 'equipment' }),
    defineField({ name: 'options', title: 'Options disponibles', type: 'array', of: [{ type: 'string' }], group: 'equipment' }),

    // Sécurité
    defineField({ name: 'abs', title: 'ABS', type: 'boolean', group: 'equipment', initialValue: true }),
    defineField({ name: 'esp', title: 'ESP', type: 'boolean', group: 'equipment', initialValue: true }),
    defineField({ name: 'isofix', title: 'ISOFIX', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'tpms', title: 'Contrôle pression pneus', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'airbags', title: 'Airbags (description)', type: 'string', group: 'equipment' }),
    // Aides conduite
    defineField({ name: 'accAdaptive', title: 'Régulateur adaptatif (ACC)', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'lka', title: 'Maintien de voie', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'aebs', title: 'Freinage auto anti-collision', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'bsd', title: 'Surveillance angle mort', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'fatigueDetect', title: 'Détecteur de fatigue', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'autonomousLevel', title: 'Conduite autonome', type: 'string', group: 'equipment',
      options: { list: ['Non', 'Niveau 1', 'Niveau 2', 'Niveau 3'] } }),
    // Stationnement
    defineField({ name: 'cameraRear', title: 'Caméra de recul', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'camera360', title: 'Caméra 360°', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'parkingSensors', title: 'Radars de stationnement', type: 'string', group: 'equipment',
      options: { list: ['Non', 'Arrière', 'Avant/Arrière'] } }),
    defineField({ name: 'parkAssist', title: 'Stationnement automatique', type: 'boolean', group: 'equipment' }),
    // Tech
    defineField({ name: 'touchscreen', title: 'Écran tactile (taille)', type: 'string', group: 'equipment' }),
    defineField({ name: 'digitalCluster', title: 'Tableau de bord numérique', type: 'string', group: 'equipment' }),
    defineField({ name: 'hud', title: 'Affichage tête haute (HUD)', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'gps', title: 'Navigation GPS', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'androidAuto', title: 'Android Auto', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'appleCarplay', title: 'Apple CarPlay', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'wirelessCharger', title: 'Chargeur sans fil', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'soundSystem', title: 'Système audio', type: 'string', group: 'equipment' }),
    // Confort
    defineField({ name: 'climateZones', title: 'Zones climatisation', type: 'number', group: 'equipment',
      options: { list: [1, 2, 3, 4] } }),
    defineField({ name: 'heatedSeats', title: 'Sièges chauffants', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'ventilatedSeats', title: 'Sièges ventilés', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'electricSeats', title: 'Sièges électriques', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'panoramicRoof', title: 'Toit panoramique', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'keyless', title: 'Accès/démarrage mains libres', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'electricHandbrake', title: 'Frein de stationnement électrique', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'drivingModes', title: 'Modes de conduite', type: 'boolean', group: 'equipment' }),
    // Extérieur
    defineField({ name: 'ledHeadlights', title: 'Phares LED', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'adaptiveHeadlights', title: 'Phares adaptatifs', type: 'boolean', group: 'equipment' }),
    defineField({ name: 'wheelSize', title: 'Jantes (pouces)', type: 'string', group: 'equipment' }),
    defineField({ name: 'sportKit', title: 'Kit Sport / M Sport', type: 'boolean', group: 'equipment' }),

    // ── PHOTOS ──
    defineField({ name: 'mainImage', title: 'Photo principale', type: 'image', group: 'media',
      options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Galerie photos', type: 'array', group: 'media',
      of: [{ type: 'image', options: { hotspot: true } }] }),
  ],
  preview: {
    select: { title: 'model', subtitle: 'price', media: 'mainImage' },
    prepare({ title, subtitle, media }) {
      return { title, subtitle: subtitle ? `${subtitle.toLocaleString('fr-TN')} TND` : '', media }
    },
  },
})
