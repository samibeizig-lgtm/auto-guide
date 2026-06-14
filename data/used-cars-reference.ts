// Prix de référence neufs 2024-2026 pour le marché tunisien (TND)
// Source : concessionnaires TN + automobile.tn + automax.tn

export interface UsedCarRef {
  brand: string
  model: string
  category: 'Citadine' | 'Compacte' | 'Berline' | 'SUV' | 'Pickup' | 'Électrique'
  priceRef: number  // Prix neuf de référence en TND
  years: number[]   // Années disponibles sur le marché TN
}

export const usedCarsReference: UsedCarRef[] = [
  // === TOYOTA ===
  { brand: 'Toyota', model: 'Yaris', category: 'Citadine', priceRef: 84900, years: [2018,2019,2020,2021,2022,2023,2024,2025] },
  { brand: 'Toyota', model: 'Yaris Cross', category: 'SUV', priceRef: 115000, years: [2021,2022,2023,2024,2025] },
  { brand: 'Toyota', model: 'Corolla', category: 'Berline', priceRef: 130000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Toyota', model: 'RAV4', category: 'SUV', priceRef: 165000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Toyota', model: 'C-HR', category: 'SUV', priceRef: 145000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Toyota', model: 'Hilux', category: 'Pickup', priceRef: 185000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },

  // === VOLKSWAGEN ===
  { brand: 'Volkswagen', model: 'Polo', category: 'Citadine', priceRef: 92000, years: [2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Volkswagen', model: 'Golf', category: 'Compacte', priceRef: 115000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Volkswagen', model: 'Tiguan', category: 'SUV', priceRef: 155000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Volkswagen', model: 'Passat', category: 'Berline', priceRef: 135000, years: [2017,2018,2019,2020,2021,2022] },
  { brand: 'Volkswagen', model: 'T-Roc', category: 'SUV', priceRef: 130000, years: [2018,2019,2020,2021,2022,2023,2024] },

  // === RENAULT ===
  { brand: 'Renault', model: 'Clio', category: 'Citadine', priceRef: 82000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Renault', model: 'Mégane', category: 'Compacte', priceRef: 105000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Renault', model: 'Captur', category: 'SUV', priceRef: 118000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Renault', model: 'Kadjar', category: 'SUV', priceRef: 125000, years: [2017,2018,2019,2020,2021,2022] },
  { brand: 'Renault', model: 'Symbol', category: 'Berline', priceRef: 72000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Renault', model: 'Duster', category: 'SUV', priceRef: 95000, years: [2017,2018,2019,2020,2021,2022,2023] },

  // === DACIA ===
  { brand: 'Dacia', model: 'Sandero', category: 'Citadine', priceRef: 58450, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Dacia', model: 'Sandero Stepway', category: 'Citadine', priceRef: 67000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Dacia', model: 'Duster', category: 'SUV', priceRef: 88000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Dacia', model: 'Logan', category: 'Berline', priceRef: 55000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Dacia', model: 'Jogger', category: 'SUV', priceRef: 98000, years: [2022,2023,2024,2025] },

  // === HYUNDAI ===
  { brand: 'Hyundai', model: 'i10', category: 'Citadine', priceRef: 72000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Hyundai', model: 'i20', category: 'Citadine', priceRef: 86000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Hyundai', model: 'i30', category: 'Compacte', priceRef: 105000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Hyundai', model: 'Tucson', category: 'SUV', priceRef: 132000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Hyundai', model: 'Santa Fe', category: 'SUV', priceRef: 165000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Hyundai', model: 'Accent', category: 'Berline', priceRef: 82000, years: [2017,2018,2019,2020,2021,2022] },

  // === KIA ===
  { brand: 'Kia', model: 'Picanto', category: 'Citadine', priceRef: 75000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Kia', model: 'Rio', category: 'Citadine', priceRef: 89000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Kia', model: 'Stonic', category: 'SUV', priceRef: 105000, years: [2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Kia', model: 'Sportage', category: 'SUV', priceRef: 138000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Kia', model: 'Ceed', category: 'Compacte', priceRef: 108000, years: [2018,2019,2020,2021,2022,2023] },
  { brand: 'Kia', model: 'Sorento', category: 'SUV', priceRef: 165000, years: [2017,2018,2019,2020,2021,2022,2023] },

  // === PEUGEOT ===
  { brand: 'Peugeot', model: '208', category: 'Citadine', priceRef: 88000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Peugeot', model: '308', category: 'Compacte', priceRef: 118000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Peugeot', model: '2008', category: 'SUV', priceRef: 112000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Peugeot', model: '3008', category: 'SUV', priceRef: 145000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Peugeot', model: '5008', category: 'SUV', priceRef: 165000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Peugeot', model: '508', category: 'Berline', priceRef: 155000, years: [2018,2019,2020,2021,2022,2023] },

  // === CITROËN ===
  { brand: 'Citroën', model: 'C3', category: 'Citadine', priceRef: 78000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Citroën', model: 'C4', category: 'Compacte', priceRef: 108000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Citroën', model: 'C5 Aircross', category: 'SUV', priceRef: 135000, years: [2019,2020,2021,2022,2023,2024] },
  { brand: 'Citroën', model: 'Berlingo', category: 'SUV', priceRef: 92000, years: [2017,2018,2019,2020,2021,2022,2023] },

  // === FIAT ===
  { brand: 'Fiat', model: 'Punto', category: 'Citadine', priceRef: 62000, years: [2017,2018,2019,2020,2021] },
  { brand: 'Fiat', model: 'Tipo', category: 'Compacte', priceRef: 78000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Fiat', model: '500', category: 'Citadine', priceRef: 75000, years: [2017,2018,2019,2020,2021,2022] },
  { brand: 'Fiat', model: '500X', category: 'SUV', priceRef: 110000, years: [2017,2018,2019,2020,2021,2022] },

  // === SEAT ===
  { brand: 'Seat', model: 'Ibiza', category: 'Citadine', priceRef: 90000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Seat', model: 'Leon', category: 'Compacte', priceRef: 112000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Seat', model: 'Arona', category: 'SUV', priceRef: 108000, years: [2018,2019,2020,2021,2022,2023] },
  { brand: 'Seat', model: 'Ateca', category: 'SUV', priceRef: 135000, years: [2017,2018,2019,2020,2021,2022,2023] },

  // === SKODA ===
  { brand: 'Skoda', model: 'Fabia', category: 'Citadine', priceRef: 85000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Skoda', model: 'Octavia', category: 'Berline', priceRef: 115000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Skoda', model: 'Karoq', category: 'SUV', priceRef: 130000, years: [2018,2019,2020,2021,2022,2023] },

  // === FORD ===
  { brand: 'Ford', model: 'Fiesta', category: 'Citadine', priceRef: 82000, years: [2017,2018,2019,2020,2021,2022] },
  { brand: 'Ford', model: 'Focus', category: 'Compacte', priceRef: 105000, years: [2017,2018,2019,2020,2021,2022] },
  { brand: 'Ford', model: 'Puma', category: 'SUV', priceRef: 120000, years: [2020,2021,2022,2023,2024] },
  { brand: 'Ford', model: 'EcoSport', category: 'SUV', priceRef: 108000, years: [2017,2018,2019,2020,2021,2022] },
  { brand: 'Ford', model: 'Kuga', category: 'SUV', priceRef: 140000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Ford', model: 'Ranger', category: 'Pickup', priceRef: 175000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },

  // === NISSAN ===
  { brand: 'Nissan', model: 'Micra', category: 'Citadine', priceRef: 78000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Nissan', model: 'Juke', category: 'SUV', priceRef: 112000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Nissan', model: 'Qashqai', category: 'SUV', priceRef: 138000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Nissan', model: 'X-Trail', category: 'SUV', priceRef: 160000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Nissan', model: 'Navara', category: 'Pickup', priceRef: 178000, years: [2017,2018,2019,2020,2021,2022,2023] },

  // === SUZUKI ===
  { brand: 'Suzuki', model: 'Swift', category: 'Citadine', priceRef: 76000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Suzuki', model: 'Baleno', category: 'Citadine', priceRef: 72000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Suzuki', model: 'Vitara', category: 'SUV', priceRef: 115000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Suzuki', model: 'S-Cross', category: 'SUV', priceRef: 120000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Suzuki', model: 'Jimny', category: 'SUV', priceRef: 105000, years: [2018,2019,2020,2021,2022,2023,2024] },

  // === MITSUBISHI ===
  { brand: 'Mitsubishi', model: 'ASX', category: 'SUV', priceRef: 118000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Mitsubishi', model: 'Outlander', category: 'SUV', priceRef: 148000, years: [2017,2018,2019,2020,2021,2022] },
  { brand: 'Mitsubishi', model: 'Eclipse Cross', category: 'SUV', priceRef: 138000, years: [2018,2019,2020,2021,2022,2023] },
  { brand: 'Mitsubishi', model: 'L200', category: 'Pickup', priceRef: 168000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },

  // === BMW ===
  { brand: 'BMW', model: 'Série 1', category: 'Compacte', priceRef: 210000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'BMW', model: 'Série 3', category: 'Berline', priceRef: 295000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'BMW', model: 'Série 5', category: 'Berline', priceRef: 385000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'BMW', model: 'X1', category: 'SUV', priceRef: 265000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'BMW', model: 'X3', category: 'SUV', priceRef: 330000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'BMW', model: 'X5', category: 'SUV', priceRef: 450000, years: [2017,2018,2019,2020,2021,2022,2023] },

  // === MERCEDES ===
  { brand: 'Mercedes', model: 'Classe A', category: 'Compacte', priceRef: 245000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Mercedes', model: 'Classe C', category: 'Berline', priceRef: 320000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Mercedes', model: 'Classe E', category: 'Berline', priceRef: 420000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Mercedes', model: 'GLA', category: 'SUV', priceRef: 285000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Mercedes', model: 'GLC', category: 'SUV', priceRef: 360000, years: [2017,2018,2019,2020,2021,2022,2023] },

  // === AUDI ===
  { brand: 'Audi', model: 'A1', category: 'Citadine', priceRef: 195000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Audi', model: 'A3', category: 'Compacte', priceRef: 220000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Audi', model: 'A4', category: 'Berline', priceRef: 285000, years: [2017,2018,2019,2020,2021,2022,2023] },
  { brand: 'Audi', model: 'Q3', category: 'SUV', priceRef: 255000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Audi', model: 'Q5', category: 'SUV', priceRef: 335000, years: [2017,2018,2019,2020,2021,2022,2023] },

  // === MG ===
  { brand: 'MG', model: 'ZS', category: 'SUV', priceRef: 98000, years: [2020,2021,2022,2023,2024] },
  { brand: 'MG', model: 'HS', category: 'SUV', priceRef: 135000, years: [2020,2021,2022,2023,2024] },
  { brand: 'MG', model: 'ZS EV', category: 'Électrique', priceRef: 145000, years: [2021,2022,2023,2024] },

  // === CHERY ===
  { brand: 'Chery', model: 'Tiggo 4', category: 'SUV', priceRef: 95000, years: [2020,2021,2022,2023,2024] },
  { brand: 'Chery', model: 'Tiggo 7', category: 'SUV', priceRef: 118000, years: [2020,2021,2022,2023,2024] },
  { brand: 'Chery', model: 'Tiggo 8', category: 'SUV', priceRef: 145000, years: [2021,2022,2023,2024] },

  // === BYD ===
  { brand: 'BYD', model: 'Atto 3', category: 'Électrique', priceRef: 185000, years: [2022,2023,2024,2025] },
  { brand: 'BYD', model: 'Dolphin', category: 'Électrique', priceRef: 155000, years: [2022,2023,2024,2025] },
  { brand: 'BYD', model: 'Han', category: 'Électrique', priceRef: 245000, years: [2022,2023,2024,2025] },
  { brand: 'BYD', model: 'Seal', category: 'Électrique', priceRef: 215000, years: [2023,2024,2025] },

  // === CHEVROLET ===
  { brand: 'Chevrolet', model: 'Captiva', category: 'SUV', priceRef: 125000, years: [2017,2018,2019,2020,2021,2022,2023,2024] },
  { brand: 'Chevrolet', model: 'Spark', category: 'Citadine', priceRef: 65000, years: [2017,2018,2019,2020,2021,2022] },
  { brand: 'Chevrolet', model: 'Trax', category: 'SUV', priceRef: 105000, years: [2017,2018,2019,2020,2021,2022,2023] },
]

export const usedCarBrands = [...new Set(usedCarsReference.map(c => c.brand))].sort()

export const getModelsForBrand = (brand: string) =>
  usedCarsReference.filter(c => c.brand === brand).map(c => c.model).sort()

export const getCarRef = (brand: string, model: string) =>
  usedCarsReference.find(c => c.brand === brand && c.model === model)
