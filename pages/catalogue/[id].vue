<template>
  <div v-if="car" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-6">
      <NuxtLink to="/catalogue" class="text-sm text-primary-600 hover:underline flex items-center gap-1">
        ← Retour au catalogue
      </NuxtLink>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
      <div>
        <div class="relative rounded-2xl overflow-hidden h-80">
          <img :src="car.image" :alt="`${car.brand} ${car.model}`" class="w-full h-full object-cover" />
          <div class="absolute top-4 left-4 flex gap-2">
            <span class="badge bg-white text-gray-700 shadow">{{ car.category }}</span>
            <span class="badge shadow text-white" :class="car.fuel === 'Hybride' ? 'bg-green-500' : car.fuel === 'Diesel' ? 'bg-gray-600' : 'bg-orange-500'">
              {{ car.fuel }}
            </span>
          </div>
        </div>
      </div>

      <div>
        <div class="mb-2">
          <p class="text-gray-500 font-medium">{{ car.brand }}</p>
          <h1 class="text-4xl font-bold text-gray-900">{{ car.model }} <span class="text-gray-400 text-2xl">{{ car.year }}</span></h1>
        </div>
        <StarRating :rating="car.rating" class="mb-4" />
        <p class="text-gray-600 mb-6">{{ car.description }}</p>

        <div class="bg-gray-50 rounded-2xl p-6 mb-6">
          <div class="grid grid-cols-2 gap-4">
            <div v-for="spec in specs" :key="spec.label">
              <p class="text-xs text-gray-400">{{ spec.label }}</p>
              <p class="font-semibold text-gray-900">{{ spec.value }}</p>
            </div>
          </div>
        </div>

        <div class="flex items-end gap-6 mb-6">
          <div>
            <p class="text-xs text-gray-400 mb-1">Prix neuf</p>
            <p class="text-4xl font-bold text-primary-600">{{ formatPrice(car.price) }}</p>
          </div>
          <div v-if="car.priceOccasion">
            <p class="text-xs text-gray-400 mb-1">Occasion estimée</p>
            <p class="text-2xl font-semibold text-gray-500">{{ formatPrice(car.priceOccasion) }}</p>
          </div>
        </div>

        <div class="flex gap-3">
          <NuxtLink :to="`/comparateur?ids=${car.id}`" class="btn-primary flex-1 text-center">
            Ajouter au comparateur
          </NuxtLink>
          <NuxtLink to="/prix" class="btn-outline flex-1 text-center">
            Voir la cote
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Détails -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div class="card p-6">
        <h2 class="font-bold text-gray-900 mb-4">Équipements</h2>
        <ul class="space-y-2">
          <li v-for="feature in car.features" :key="feature" class="flex items-center gap-2 text-sm text-gray-600">
            <svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            {{ feature }}
          </li>
        </ul>
      </div>

      <div class="card p-6">
        <h2 class="font-bold text-gray-900 mb-4">Points forts</h2>
        <ul class="space-y-2">
          <li v-for="pro in car.pros" :key="pro" class="flex items-center gap-2 text-sm text-gray-600">
            <span class="text-green-500 font-bold">+</span> {{ pro }}
          </li>
        </ul>
        <h2 class="font-bold text-gray-900 mt-6 mb-4">Points faibles</h2>
        <ul class="space-y-2">
          <li v-for="con in car.cons" :key="con" class="flex items-center gap-2 text-sm text-gray-600">
            <span class="text-red-400 font-bold">-</span> {{ con }}
          </li>
        </ul>
      </div>

      <div class="card p-6">
        <h2 class="font-bold text-gray-900 mb-4">Fiche technique</h2>
        <table class="w-full text-sm">
          <tbody class="divide-y divide-gray-100">
            <tr v-for="row in techTable" :key="row.label">
              <td class="py-2 text-gray-500">{{ row.label }}</td>
              <td class="py-2 font-medium text-gray-900 text-right">{{ row.value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modèles similaires -->
    <div>
      <h2 class="text-xl font-bold text-gray-900 mb-6">Modèles similaires</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CarCard v-for="similar in similarCars" :key="similar.id" :car="similar" />
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

const specs = computed(() => car.value ? [
  { label: 'Moteur', value: car.value.engine },
  { label: 'Puissance', value: `${car.value.power} ch` },
  { label: 'Transmission', value: car.value.transmission },
  { label: 'Consommation', value: `${car.value.consumption} L/100km` },
  { label: 'Places', value: String(car.value.seats) },
  { label: 'Carburant', value: car.value.fuel },
] : [])

const techTable = computed(() => car.value ? [
  { label: 'Marque', value: car.value.brand },
  { label: 'Modèle', value: car.value.model },
  { label: 'Année', value: String(car.value.year) },
  { label: 'Catégorie', value: car.value.category },
  { label: 'Moteur', value: car.value.engine },
  { label: 'Puissance', value: `${car.value.power} ch` },
  { label: 'Boîte', value: car.value.transmission },
  { label: 'Carburant', value: car.value.fuel },
  { label: 'Consommation', value: `${car.value.consumption} L/100km` },
  { label: 'Places', value: String(car.value.seats) },
] : [])

const similarCars = computed(() => car.value
  ? cars.filter(c => c.id !== car.value!.id && c.category === car.value!.category).slice(0, 4)
  : []
)
</script>
