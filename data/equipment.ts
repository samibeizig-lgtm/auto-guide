// Inventaire standardisé de tous les équipements possibles
// Chaque voiture déclare son equipment en référençant ces clés

export interface EquipmentSpec {
  // Sécurité
  abs: boolean
  esp: boolean
  asr: boolean              // Anti-patinage
  airbagsFront: boolean
  airbagsLateral: boolean
  airbagsRideau: boolean
  airbagsCentral: boolean
  isofix: boolean
  tpms: boolean             // Contrôle pression pneus
  hillStart: boolean        // Aide démarrage en côte
  eba: boolean              // Assistance freinage
  autohold: boolean
  // Aides à la conduite
  accAdaptive: boolean      // Régulateur adaptatif
  lka: boolean              // Alerte/maintien de voie
  fcw: boolean              // Alerte collision
  aebs: boolean             // Freinage auto anti-collision
  bsd: boolean              // Surveillance angle mort
  rcta: boolean             // Alerte circulation transversale
  pedestrianDetect: boolean
  fatigueDetect: boolean
  autonomousLevel: string   // 'Non' | 'Niveau 1' | 'Niveau 2' | 'Niveau 3'
  signRecognition: boolean  // Reconnaissance panneaux
  autoHighBeam: boolean     // Feux route auto
  speedLimiter: boolean
  // Stationnement
  parkingSensorsRear: boolean
  parkingSensorsFront: boolean
  camera360: boolean
  cameraRear: boolean
  parkAssist: boolean       // Stationnement automatique
  // Connectivité & Tech
  touchscreen: string       // taille ex: '9"' | '10.25"' | 'Non'
  digitalCluster: string    // taille tableau de bord numérique
  hud: boolean              // Affichage tête haute
  androidAuto: boolean
  appleCarplay: boolean
  bluetooth: boolean
  voiceControl: boolean
  wirelessCharger: boolean
  usb: boolean
  gps: boolean
  connectedServices: boolean // eSim / services connectés
  // Son
  soundSystem: string       // 'Standard' | 'Harman Kardon' | 'Bose' | 'Meridian' | ...
  speakers: number          // Nombre de haut-parleurs
  // Confort
  climateAuto: boolean
  climateZones: number      // 1 | 2 | 4
  heatedSeats: boolean
  ventilatedSeats: boolean
  electricSeats: boolean
  massageSeats: boolean
  seatMemory: boolean
  panoramicRoof: boolean
  keyless: boolean
  electricTrunk: boolean
  electricWindows: string   // 'Avant' | 'AV/AR'
  foldingMirrors: boolean
  drivingModes: boolean
  electricHandbrake: boolean
  rearArmrest: boolean
  // Extérieur
  ledHeadlights: boolean
  ledDrl: boolean           // Feux de jour LED
  ledTaillights: boolean
  adaptiveHeadlights: boolean
  wheelSize: string         // '15"' | '17"' | '18"' | '19"' | '20"'
  metalPaint: boolean
  sunroof: boolean
  sportKit: boolean         // Kit carrosserie sport
  // Motorisation & transmission
  gearbox: string
  driveType: string
  hybridType: string        // 'Non' | 'Mild' | 'Full' | 'Plug-in' | 'Électrique'
  // Garantie
  warranty: string
  warrantyBattery: string
}

export const EQUIPMENT_CATEGORIES: {
  label: string
  icon: string
  items: { key: keyof EquipmentSpec; label: string; type: 'bool' | 'text' | 'number' }[]
}[] = [
  {
    label: 'Prix & Garantie',
    icon: 'shield-check',
    items: [
      { key: 'warranty', label: 'Garantie', type: 'text' },
      { key: 'warrantyBattery', label: 'Garantie batterie', type: 'text' },
    ],
  },
  {
    label: 'Motorisation',
    icon: 'lightning',
    items: [
      { key: 'gearbox', label: 'Boîte de vitesses', type: 'text' },
      { key: 'driveType', label: 'Transmission', type: 'text' },
      { key: 'hybridType', label: 'Motorisation hybride/élec.', type: 'text' },
    ],
  },
  {
    label: 'Sécurité passive',
    icon: 'shield',
    items: [
      { key: 'abs', label: 'ABS', type: 'bool' },
      { key: 'esp', label: 'ESP', type: 'bool' },
      { key: 'asr', label: 'Anti-patinage (ASR)', type: 'bool' },
      { key: 'eba', label: 'Assistance freinage (EBA)', type: 'bool' },
      { key: 'tpms', label: 'Contrôle pression pneus', type: 'bool' },
      { key: 'airbagsFront', label: 'Airbags frontaux', type: 'bool' },
      { key: 'airbagsLateral', label: 'Airbags latéraux', type: 'bool' },
      { key: 'airbagsRideau', label: 'Airbags rideaux', type: 'bool' },
      { key: 'airbagsCentral', label: 'Airbag central', type: 'bool' },
      { key: 'isofix', label: 'Fixations ISOFIX', type: 'bool' },
    ],
  },
  {
    label: 'Aides à la conduite',
    icon: 'car',
    items: [
      { key: 'autonomousLevel', label: 'Conduite autonome', type: 'text' },
      { key: 'accAdaptive', label: 'Régulateur adaptatif (ACC)', type: 'bool' },
      { key: 'speedLimiter', label: 'Limiteur de vitesse', type: 'bool' },
      { key: 'lka', label: 'Maintien de voie', type: 'bool' },
      { key: 'fcw', label: 'Alerte collision (FCW)', type: 'bool' },
      { key: 'aebs', label: 'Freinage auto anti-collision', type: 'bool' },
      { key: 'bsd', label: 'Surveillance angle mort', type: 'bool' },
      { key: 'rcta', label: 'Alerte trafic croisé', type: 'bool' },
      { key: 'pedestrianDetect', label: 'Détection piétons', type: 'bool' },
      { key: 'fatigueDetect', label: 'Détecteur de fatigue', type: 'bool' },
      { key: 'autoHighBeam', label: 'Feux route automatiques', type: 'bool' },
      { key: 'signRecognition', label: 'Reconnaissance panneaux', type: 'bool' },
      { key: 'hillStart', label: 'Aide démarrage en côte', type: 'bool' },
      { key: 'autohold', label: 'Autohold', type: 'bool' },
    ],
  },
  {
    label: 'Stationnement',
    icon: 'parking',
    items: [
      { key: 'cameraRear', label: 'Caméra de recul', type: 'bool' },
      { key: 'camera360', label: 'Caméra 360°', type: 'bool' },
      { key: 'parkingSensorsRear', label: 'Radars de recul', type: 'bool' },
      { key: 'parkingSensorsFront', label: 'Radars avant', type: 'bool' },
      { key: 'parkAssist', label: 'Stationnement automatique', type: 'bool' },
      { key: 'electricTrunk', label: 'Coffre motorisé', type: 'bool' },
    ],
  },
  {
    label: 'Technologie & Écrans',
    icon: 'screen',
    items: [
      { key: 'touchscreen', label: 'Écran tactile central', type: 'text' },
      { key: 'digitalCluster', label: 'Tableau de bord numérique', type: 'text' },
      { key: 'hud', label: 'Affichage tête haute (HUD)', type: 'bool' },
      { key: 'gps', label: 'Navigation GPS', type: 'bool' },
      { key: 'connectedServices', label: 'Services connectés', type: 'bool' },
    ],
  },
  {
    label: 'Connectivité',
    icon: 'connectivity',
    items: [
      { key: 'androidAuto', label: 'Android Auto', type: 'bool' },
      { key: 'appleCarplay', label: 'Apple CarPlay', type: 'bool' },
      { key: 'bluetooth', label: 'Bluetooth', type: 'bool' },
      { key: 'voiceControl', label: 'Commande vocale', type: 'bool' },
      { key: 'wirelessCharger', label: 'Chargeur sans fil', type: 'bool' },
      { key: 'usb', label: 'Port USB', type: 'bool' },
    ],
  },
  {
    label: 'Son',
    icon: 'sound',
    items: [
      { key: 'soundSystem', label: 'Système audio', type: 'text' },
      { key: 'speakers', label: 'Nombre de HP', type: 'number' },
    ],
  },
  {
    label: 'Confort',
    icon: 'seat',
    items: [
      { key: 'climateAuto', label: 'Climatisation automatique', type: 'bool' },
      { key: 'climateZones', label: 'Zones climatisation', type: 'number' },
      { key: 'heatedSeats', label: 'Sièges chauffants', type: 'bool' },
      { key: 'ventilatedSeats', label: 'Sièges ventilés', type: 'bool' },
      { key: 'electricSeats', label: 'Sièges électriques', type: 'bool' },
      { key: 'massageSeats', label: 'Sièges massants', type: 'bool' },
      { key: 'seatMemory', label: 'Mémoire siège', type: 'bool' },
      { key: 'keyless', label: 'Accès mains libres', type: 'bool' },
      { key: 'electricHandbrake', label: 'Frein de parking élec.', type: 'bool' },
      { key: 'drivingModes', label: 'Modes de conduite', type: 'bool' },
      { key: 'electricWindows', label: 'Vitres électriques', type: 'text' },
      { key: 'foldingMirrors', label: 'Rétroviseurs rabattables', type: 'bool' },
      { key: 'rearArmrest', label: 'Accoudoir arrière', type: 'bool' },
    ],
  },
  {
    label: 'Extérieur',
    icon: 'design',
    items: [
      { key: 'ledHeadlights', label: 'Phares LED', type: 'bool' },
      { key: 'ledDrl', label: 'Feux de jour LED', type: 'bool' },
      { key: 'ledTaillights', label: 'Feux arrière LED', type: 'bool' },
      { key: 'adaptiveHeadlights', label: 'Phares adaptatifs', type: 'bool' },
      { key: 'wheelSize', label: 'Jantes', type: 'text' },
      { key: 'panoramicRoof', label: 'Toit panoramique', type: 'bool' },
      { key: 'sunroof', label: 'Toit ouvrant', type: 'bool' },
      { key: 'metalPaint', label: 'Peinture métallisée', type: 'bool' },
      { key: 'sportKit', label: 'Kit Sport / M Sport', type: 'bool' },
    ],
  },
]
