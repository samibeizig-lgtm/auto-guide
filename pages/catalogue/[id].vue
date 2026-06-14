<template>
  <div v-if="car" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Retour -->
    <NuxtLink to="/catalogue" class="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 mb-6 transition-colors">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      Retour au catalogue
    </NuxtLink>

    <!-- ① EN-TÊTE : Photo + Essentiels -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

      <!-- Photo -->
      <div class="relative bg-gray-50 rounded-2xl overflow-hidden aspect-[4/3]">
        <img :src="car.image" :alt="`${car.brand} ${car.model}`" class="w-full h-full object-cover" />
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/90 text-gray-700 shadow">{{ car.category }}</span>
          <span class="text-xs font-semibold px-2.5 py-1 rounded-full text-white shadow" :class="fuelBadge">{{ car.fuel }}</span>
        </div>
        <div class="absolute bottom-3 right-3">
          <StarRating :rating="car.rating" />
        </div>
      </div>

      <!-- Infos essentielles -->
      <div class="flex flex-col">
        <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{{ car.brand }}</p>
        <h1 class="text-3xl font-bold text-gray-900 mb-1">{{ car.model }}</h1>
        <p class="text-sm text-gray-400 mb-4">{{ car.year }}</p>
        <p class="text-gray-600 text-sm leading-relaxed mb-5">{{ car.description }}</p>

        <!-- Prix -->
        <div class="flex items-end gap-6 mb-6 p-4 bg-gray-50 rounded-xl">
          <div>
            <p class="text-xs text-gray-400 mb-0.5">Prix neuf</p>
            <p class="text-3xl font-bold text-primary-600">{{ formatPrice(car.price) }}</p>
          </div>
          <div v-if="car.priceOccasion">
            <p class="text-xs text-gray-400 mb-0.5">Occasion estimée</p>
            <p class="text-xl font-semibold text-gray-400">{{ formatPrice(car.priceOccasion) }}</p>
          </div>
        </div>

        <!-- Essentiels en grille -->
        <div class="grid grid-cols-2 gap-3 mb-6">
          <div v-for="e in essentials" :key="e.label" class="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl">
            <div class="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
              <component :is="'svg'" class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="e.iconPath"/>
              </component>
            </div>
            <div>
              <p class="text-[10px] text-gray-400 leading-none mb-0.5">{{ e.label }}</p>
              <p class="text-sm font-bold text-gray-900 leading-none">{{ e.value }}</p>
            </div>
          </div>
        </div>

        <div class="flex gap-3">
          <NuxtLink :to="`/comparateur?ids=${car.id}`" class="btn-primary flex-1 text-center text-sm py-2.5">Comparer</NuxtLink>
        </div>
      </div>
    </div>

    <!-- ② FICHE TECHNIQUE -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div class="card p-6">
        <h2 class="font-bold text-gray-900 mb-4 flex items-center gap-2 text-base">
          <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Motorisation & Performances
        </h2>
        <table class="w-full text-sm">
          <tbody class="divide-y divide-gray-50">
            <tr v-for="row in motorTable" :key="row.label">
              <td class="py-2 text-gray-500">{{ row.label }}</td>
              <td class="py-2 font-semibold text-gray-900 text-right">{{ row.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card p-6">
        <h2 class="font-bold text-gray-900 mb-4 flex items-center gap-2 text-base">
          <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
          Dimensions & Poids
        </h2>
        <table class="w-full text-sm">
          <tbody class="divide-y divide-gray-50">
            <tr v-for="row in dimensionsTable" :key="row.label">
              <td class="py-2 text-gray-500">{{ row.label }}</td>
              <td class="py-2 font-semibold text-gray-900 text-right">{{ row.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ③ ÉQUIPEMENTS PAR CATÉGORIE (si disponibles) -->
    <div v-if="car.equipmentCategories && car.equipmentCategories.length > 0" class="mb-8">
      <h2 class="text-lg font-bold text-gray-900 mb-4">Équipements</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="cat in car.equipmentCategories" :key="cat.label" class="card p-5">
          <h3 class="font-bold text-gray-800 mb-3 text-sm flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg bg-primary-100 flex items-center justify-center">
              <svg class="w-3.5 h-3.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="categoryIcon(cat.icon)"/>
              </svg>
            </span>
            {{ cat.label }}
          </h3>
          <ul class="space-y-1.5">
            <li v-for="item in cat.items" :key="item" class="flex items-start gap-2 text-xs text-gray-600">
              <svg class="w-3.5 h-3.5 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Équipements simples (si pas de catégories) -->
    <div v-else class="card p-6 mb-8">
      <h2 class="font-bold text-gray-900 mb-4">Équipements de série</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        <li v-for="feature in car.features" :key="feature" class="flex items-start gap-2 text-sm text-gray-600">
          <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
          {{ feature }}
        </li>
      </ul>
    </div>

    <!-- ⑤ OPTIONS (si disponibles) -->
    <div v-if="car.options && car.options.length > 0" class="card p-6 mb-8">
      <h2 class="font-bold text-gray-900 mb-4">Options disponibles</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        <li v-for="option in car.options" :key="option" class="flex items-start gap-2 text-sm text-gray-600">
          <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          {{ option }}
        </li>
      </ul>
    </div>

    <!-- ④ POINTS FORTS / FAIBLES -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div class="bg-green-50 border border-green-100 rounded-2xl p-5">
        <h2 class="font-bold text-green-800 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
          Points forts
        </h2>
        <ul class="space-y-2">
          <li v-for="pro in car.pros" :key="pro" class="flex items-start gap-2 text-sm text-green-800">
            <span class="font-bold text-green-500 mt-0.5 flex-shrink-0">+</span>{{ pro }}
          </li>
        </ul>
      </div>
      <div class="bg-red-50 border border-red-100 rounded-2xl p-5">
        <h2 class="font-bold text-red-700 mb-3 flex items-center gap-2 text-sm uppercase tracking-wide">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>
          Points faibles
        </h2>
        <ul class="space-y-2">
          <li v-for="con in car.cons" :key="con" class="flex items-start gap-2 text-sm text-red-700">
            <span class="font-bold text-red-400 mt-0.5 flex-shrink-0">–</span>{{ con }}
          </li>
        </ul>
      </div>
    </div>

    <!-- ⑤ MODÈLES SIMILAIRES -->
    <div>
      <h2 class="text-lg font-bold text-gray-900 mb-4">Modèles similaires</h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink v-for="s in similarCars" :key="s.id" :to="`/catalogue/${s.id}`"
          class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all">
          <div class="aspect-[4/3] bg-gray-50 overflow-hidden">
            <img :src="s.image" :alt="`${s.brand} ${s.model}`" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div class="p-3">
            <p class="text-xs font-bold text-gray-900 uppercase truncate">{{ s.brand }} {{ s.model }}</p>
            <p class="text-sm font-bold text-primary-600 mt-0.5">{{ formatPrice(s.price) }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>

  <div v-else class="text-center py-20">
    <p class="text-gray-500">Véhicule introuvable</p>
    <NuxtLink to="/catalogue" class="btn-primary mt-4 inline-block">Retour au catalogue</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { cars } from '~/data/cars'

const route = useRoute()
const car = computed(() => cars.find(c => c.id === Number(route.params.id)))

useHead(() => ({
  title: car.value ? `${car.value.brand} ${car.value.model} ${car.value.year} - Tunisiamotors.com` : 'Tunisiamotors.com',
}))

const formatPrice = (p: number) => `${p.toLocaleString('fr-TN')} TND`

const fuelBadge = computed(() => ({
  'bg-green-500': car.value?.fuel === 'Hybride',
  'bg-blue-500': car.value?.fuel === 'Électrique',
  'bg-orange-500': car.value?.fuel === 'Essence',
  'bg-gray-700': car.value?.fuel === 'Diesel',
}))

const essentials = computed(() => {
  if (!car.value) return []
  const c = car.value
  const items = [
    { label: 'Puissance', value: `${c.power} ch`, iconPath: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { label: '0 – 100 km/h', value: c.acceleration ? `${c.acceleration} s` : '—', iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: c.fuel === 'Électrique' ? 'Autonomie' : 'Consommation', value: c.fuel === 'Électrique' ? (c.range ? `${c.range} km` : `${c.consumption} kWh/100km`) : `${c.consumption} L/100km`, iconPath: 'M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-6a1 1 0 00-.293-.707l-3-3A1 1 0 0016 4H3z' },
    { label: 'Vitesse max', value: c.topSpeed ? `${c.topSpeed} km/h` : '—', iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { label: 'Boîte', value: c.transmission, iconPath: 'M8 9l4-4 4 4m0 6l-4 4-4-4' },
    { label: 'Garantie', value: c.warranty ?? '3 ans', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { label: 'Places / Portes', value: `${c.seats} pl. / ${c.doors ?? '—'} p.`, iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z' },
    { label: 'Disponibilité', value: 'Disponible', iconPath: 'M5 13l4 4L19 7' },
  ]
  return items
})

const motorTable = computed(() => {
  if (!car.value) return []
  const c = car.value
  const rows = [
    { label: 'Motorisation', value: c.engine },
    c.displacement ? { label: 'Cylindrée', value: `${c.displacement} cm³` } : null,
    c.cylinders ? { label: 'Cylindres', value: String(c.cylinders) } : null,
    { label: 'Puissance', value: `${c.power} ch` },
    c.torque ? { label: 'Couple', value: `${c.torque} Nm` } : null,
    c.fiscalPower ? { label: 'Puissance fiscale', value: `${c.fiscalPower} CV` } : null,
    { label: 'Boîte', value: c.transmission },
    c.gears ? { label: 'Rapports', value: String(c.gears) } : null,
    { label: 'Transmission', value: c.driveType ?? '—' },
    { label: 'Carburant', value: c.fuel },
    c.consumptionUrban ? { label: 'Conso. urbaine', value: `${c.consumptionUrban} L/100km` } : null,
    c.consumptionExtraUrban ? { label: 'Conso. extra-urbaine', value: `${c.consumptionExtraUrban} L/100km` } : null,
    { label: 'Conso. mixte', value: c.fuel === 'Électrique' ? `${c.consumption} kWh/100km` : `${c.consumption} L/100km` },
    c.acceleration ? { label: '0 à 100 km/h', value: `${c.acceleration} s` } : null,
    c.topSpeed ? { label: 'Vitesse max', value: `${c.topSpeed} km/h` } : null,
    c.emissions ? { label: 'Émissions CO₂', value: `${c.emissions} g/km` } : null,
  ]
  return rows.filter(Boolean) as { label: string; value: string }[]
})

const dimensionsTable = computed(() => {
  if (!car.value) return []
  const c = car.value
  const rows = [
    c.length ? { label: 'Longueur', value: `${c.length} mm` } : null,
    c.width ? { label: 'Largeur', value: `${c.width} mm` } : null,
    c.height ? { label: 'Hauteur', value: `${c.height} mm` } : null,
    c.wheelbase ? { label: 'Empattement', value: `${c.wheelbase} mm` } : null,
    c.trunkVolume ? { label: 'Volume coffre', value: `${c.trunkVolume} L` } : null,
    c.weight ? { label: 'Poids à vide', value: `${c.weight} kg` } : null,
    { label: 'Places', value: String(c.seats) },
    c.doors ? { label: 'Portes', value: String(c.doors) } : null,
    c.warranty ? { label: 'Garantie', value: c.warranty } : null,
    c.warrantyBattery ? { label: 'Garantie batterie', value: c.warrantyBattery } : null,
  ]
  return rows.filter(Boolean) as { label: string; value: string }[]
})

const categoryIcon = (icon: string) => {
  const icons: Record<string, string> = {
    shield: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    car: 'M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-6a1 1 0 00-.293-.707l-3-3A1 1 0 0016 4H3z',
    parking: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    screen: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    sound: 'M15.536 8.464a5 5 0 010 7.072M12 6v12m-3.536-9.536a5 5 0 000 7.072',
    seat: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    design: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z',
  }
  return icons[icon] ?? icons.car
}

const similarCars = computed(() => car.value
  ? cars.filter(c => c.id !== car.value!.id && c.category === car.value!.category).slice(0, 4)
  : []
)
</script>
