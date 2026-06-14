<template>
  <div v-if="car" class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <NuxtLink to="/catalogue" class="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-6">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      Retour au catalogue
    </NuxtLink>

    <!-- Photo + prix -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
      <div class="relative bg-gray-50 rounded-2xl overflow-hidden aspect-[4/3]">
        <img :src="car.image" :alt="`${car.brand} ${car.model}`" class="w-full h-full object-cover" />
        <div class="absolute top-3 left-3 flex gap-2">
          <span class="badge bg-white/90 text-gray-700 text-xs shadow">{{ car.category }}</span>
          <span class="badge text-xs text-white shadow" :class="fuelBadge">{{ car.fuel }}</span>
        </div>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <p class="text-gray-400 text-sm font-medium uppercase tracking-widest mb-1">{{ car.brand }}</p>
          <h1 class="text-3xl font-bold text-gray-900 mb-1">{{ car.model }} <span class="text-xl text-gray-400 font-normal">{{ car.year }}</span></h1>
          <StarRating :rating="car.rating" class="mb-3" />
          <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ car.description }}</p>

          <!-- Specs rapides -->
          <div class="grid grid-cols-3 gap-3 mb-6">
            <div class="text-center bg-gray-50 rounded-xl p-3">
              <p class="text-lg font-bold text-gray-900">{{ car.power }} ch</p>
              <p class="text-xs text-gray-400">Puissance</p>
            </div>
            <div class="text-center bg-gray-50 rounded-xl p-3">
              <p class="text-lg font-bold text-gray-900">{{ car.acceleration ? car.acceleration + 's' : 'N/A' }}</p>
              <p class="text-xs text-gray-400">0-100 km/h</p>
            </div>
            <div class="text-center bg-gray-50 rounded-xl p-3">
              <p class="text-lg font-bold text-gray-900">{{ car.topSpeed ? car.topSpeed + ' km/h' : 'N/A' }}</p>
              <p class="text-xs text-gray-400">Vmax</p>
            </div>
          </div>
        </div>

        <div>
          <div class="flex items-end gap-6 mb-4">
            <div>
              <p class="text-xs text-gray-400 mb-0.5">Prix neuf</p>
              <p class="text-3xl font-bold text-primary-600">{{ formatPrice(car.price) }}</p>
            </div>
            <div v-if="car.priceOccasion">
              <p class="text-xs text-gray-400 mb-0.5">Occasion estimée</p>
              <p class="text-xl font-semibold text-gray-400">{{ formatPrice(car.priceOccasion) }}</p>
            </div>
          </div>
          <div class="flex gap-3">
            <NuxtLink :to="`/comparateur?ids=${car.id}`" class="btn-primary flex-1 text-center text-sm py-2.5">Ajouter au comparateur</NuxtLink>
            <NuxtLink to="/prix" class="flex-1 text-center text-sm py-2.5 border border-gray-200 rounded-lg text-gray-600 hover:border-gray-300 font-medium transition-colors">Voir la cote</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Fiche complète -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

      <!-- Fiche technique -->
      <div class="card p-6">
        <h2 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
          Fiche technique
        </h2>
        <table class="w-full text-sm">
          <tbody class="divide-y divide-gray-50">
            <tr v-for="row in techTable" :key="row.label" class="group">
              <td class="py-2 text-gray-500 w-1/2">{{ row.label }}</td>
              <td class="py-2 font-semibold text-gray-900 text-right">{{ row.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Dimensions & poids -->
      <div class="card p-6">
        <h2 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
          Dimensions & Poids
        </h2>
        <table class="w-full text-sm">
          <tbody class="divide-y divide-gray-50">
            <tr v-for="row in dimensionsTable" :key="row.label">
              <td class="py-2 text-gray-500 w-1/2">{{ row.label }}</td>
              <td class="py-2 font-semibold text-gray-900 text-right">{{ row.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Équipements + Points forts/faibles -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="card p-6 md:col-span-2">
        <h2 class="font-bold text-gray-900 mb-4">Équipements de série</h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
          <li v-for="feature in car.features" :key="feature" class="flex items-start gap-2 text-sm text-gray-600">
            <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            {{ feature }}
          </li>
        </ul>
      </div>

      <div class="card p-6">
        <h2 class="font-bold text-gray-900 mb-3">Points forts</h2>
        <ul class="space-y-2 mb-5">
          <li v-for="pro in car.pros" :key="pro" class="flex items-start gap-2 text-sm text-gray-600">
            <span class="text-green-500 font-bold text-base leading-none mt-0.5">+</span> {{ pro }}
          </li>
        </ul>
        <h2 class="font-bold text-gray-900 mb-3">Points faibles</h2>
        <ul class="space-y-2">
          <li v-for="con in car.cons" :key="con" class="flex items-start gap-2 text-sm text-gray-600">
            <span class="text-red-400 font-bold text-base leading-none mt-0.5">-</span> {{ con }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Options disponibles -->
    <div v-if="car.options && car.options.length > 0" class="card p-6 mb-8">
      <h2 class="font-bold text-gray-900 mb-4">Options disponibles</h2>
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
        <li v-for="option in car.options" :key="option" class="flex items-start gap-2 text-sm text-gray-600">
          <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          {{ option }}
        </li>
      </ul>
    </div>

    <!-- Modèles similaires -->
    <div>
      <h2 class="text-xl font-bold text-gray-900 mb-5">Modèles similaires</h2>
      <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <NuxtLink
          v-for="similar in similarCars"
          :key="similar.id"
          :to="`/catalogue/${similar.id}`"
          class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all"
        >
          <div class="aspect-[4/3] bg-gray-50 overflow-hidden">
            <img :src="similar.image" :alt="`${similar.brand} ${similar.model}`" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div class="p-3">
            <p class="text-xs font-bold text-gray-900 uppercase">{{ similar.brand }} {{ similar.model }}</p>
            <p class="text-sm font-bold text-primary-600 mt-0.5">{{ formatPrice(similar.price) }}</p>
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

const techTable = computed(() => {
  if (!car.value) return []
  const c = car.value
  return [
    { label: 'Motorisation', value: c.engine },
    { label: 'Cylindrée', value: c.displacement ? `${c.displacement} cm³` : '—' },
    { label: 'Puissance', value: `${c.power} ch` },
    { label: 'Couple', value: c.torque ? `${c.torque} Nm` : '—' },
    { label: '0 à 100 km/h', value: c.acceleration ? `${c.acceleration} s` : '—' },
    { label: 'Vitesse max', value: c.topSpeed ? `${c.topSpeed} km/h` : '—' },
    { label: 'Boîte', value: c.transmission },
    { label: 'Transmission', value: c.driveType ?? '—' },
    { label: 'Carburant', value: c.fuel },
    { label: 'Consommation', value: `${c.consumption} L/100km` },
    { label: 'Émissions CO₂', value: c.emissions ? `${c.emissions} g/km` : '—' },
    { label: 'Places', value: String(c.seats) },
    { label: 'Portes', value: c.doors ? String(c.doors) : '—' },
  ]
})

const dimensionsTable = computed(() => {
  if (!car.value) return []
  const c = car.value
  return [
    { label: 'Longueur', value: c.length ? `${c.length} mm` : '—' },
    { label: 'Largeur', value: c.width ? `${c.width} mm` : '—' },
    { label: 'Hauteur', value: c.height ? `${c.height} mm` : '—' },
    { label: 'Empattement', value: c.wheelbase ? `${c.wheelbase} mm` : '—' },
    { label: 'Volume coffre', value: c.trunkVolume ? `${c.trunkVolume} L` : '—' },
    { label: 'Poids à vide', value: c.weight ? `${c.weight} kg` : '—' },
  ]
})

const similarCars = computed(() => car.value
  ? cars.filter(c => c.id !== car.value!.id && c.category === car.value!.category).slice(0, 4)
  : []
)
</script>
