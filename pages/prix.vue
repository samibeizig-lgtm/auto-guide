<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Prix & Cotes des véhicules</h1>
      <p class="text-gray-500 mt-2">Tarifs officiels et cotes du marché de l'occasion en Tunisie (TND)</p>
    </div>

    <!-- Filtres rapides -->
    <div class="flex flex-wrap gap-3 mb-8">
      <button
        v-for="cat in ['Tous', ...categories]"
        :key="cat"
        @click="activeCategory = cat"
        class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
        :class="activeCategory === cat ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Info banner -->
    <div class="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex items-start gap-3">
      <svg class="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      <p class="text-sm text-blue-700">
        Les prix affichés sont indicatifs et peuvent varier selon les options, la région et les promotions en cours chez les concessionnaires. Les prix occasion sont des estimations basées sur l'état moyen du marché.
      </p>
    </div>

    <!-- Tableau des prix -->
    <div class="card overflow-hidden mb-12">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-50 border-b border-gray-100">
              <th class="text-left py-4 px-6 text-sm font-semibold text-gray-500">Véhicule</th>
              <th class="text-center py-4 px-6 text-sm font-semibold text-gray-500">Catégorie</th>
              <th class="text-center py-4 px-6 text-sm font-semibold text-gray-500">Carburant</th>
              <th class="text-right py-4 px-6 text-sm font-semibold text-gray-500">Prix neuf</th>
              <th class="text-right py-4 px-6 text-sm font-semibold text-gray-500">Cote occasion</th>
              <th class="text-center py-4 px-6 text-sm font-semibold text-gray-500">Note</th>
              <th class="text-center py-4 px-6 text-sm font-semibold text-gray-500"></th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-for="car in filteredCars" :key="car.id" class="hover:bg-gray-50/50 transition-colors">
              <td class="py-4 px-6">
                <div class="flex items-center gap-3">
                  <img :src="car.image" :alt="`${car.brand} ${car.model}`" class="w-14 h-10 object-cover rounded-lg flex-shrink-0" />
                  <div>
                    <p class="font-semibold text-gray-900">{{ car.brand }} {{ car.model }}</p>
                    <p class="text-xs text-gray-400">{{ car.year }} · {{ car.engine }}</p>
                  </div>
                </div>
              </td>
              <td class="py-4 px-6 text-center">
                <span class="badge bg-gray-100 text-gray-600 text-xs">{{ car.category }}</span>
              </td>
              <td class="py-4 px-6 text-center">
                <span class="badge text-xs" :class="car.fuel === 'Hybride' ? 'bg-green-100 text-green-700' : car.fuel === 'Diesel' ? 'bg-gray-100 text-gray-600' : 'bg-orange-100 text-orange-700'">
                  {{ car.fuel }}
                </span>
              </td>
              <td class="py-4 px-6 text-right font-bold text-primary-600">{{ formatPrice(car.price) }}</td>
              <td class="py-4 px-6 text-right text-gray-600">{{ car.priceOccasion ? formatPrice(car.priceOccasion) : '—' }}</td>
              <td class="py-4 px-6">
                <StarRating :rating="car.rating" />
              </td>
              <td class="py-4 px-6 text-center">
                <NuxtLink :to="`/catalogue/${car.id}`" class="text-xs text-primary-600 hover:underline">Détails</NuxtLink>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Évolution des prix par catégorie -->
    <div class="mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-6">Prix moyen par catégorie</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="stat in categoryStats" :key="stat.category" class="card p-5">
          <div class="flex items-center justify-between mb-3">
            <span class="text-2xl">{{ stat.icon }}</span>
            <span class="badge bg-gray-100 text-gray-600 text-xs">{{ stat.count }} modèles</span>
          </div>
          <h3 class="font-semibold text-gray-900 mb-1">{{ stat.category }}</h3>
          <p class="text-lg font-bold text-primary-600">{{ formatPrice(stat.avgPrice) }}</p>
          <p class="text-xs text-gray-400 mt-1">Prix moyen neuf</p>
          <div class="mt-3 pt-3 border-t border-gray-100">
            <div class="flex justify-between text-xs text-gray-500">
              <span>Min: {{ formatPrice(stat.minPrice) }}</span>
              <span>Max: {{ formatPrice(stat.maxPrice) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conseils -->
    <div class="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
      <h2 class="text-xl font-bold mb-6">Conseils pour négocier le meilleur prix</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="tip in tips" :key="tip.title" class="flex gap-4">
          <span class="text-3xl flex-shrink-0">{{ tip.icon }}</span>
          <div>
            <h3 class="font-semibold mb-1">{{ tip.title }}</h3>
            <p class="text-sm text-gray-400">{{ tip.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cars, categories } from '~/data/cars'

useHead({ title: 'Prix & Cotes des voitures - Tunisiamotors.com' })

const activeCategory = ref('Tous')

const filteredCars = computed(() =>
  activeCategory.value === 'Tous' ? cars : cars.filter(c => c.category === activeCategory.value)
)

const formatPrice = (p: number) => `${p.toLocaleString('fr-TN')} TND`

const categoryIcons: Record<string, string> = { SUV: '🚙', Berline: '🚗', Citadine: '🚘', Compacte: '🚖' }

const categoryStats = computed(() =>
  categories.map(cat => {
    const catCars = cars.filter(c => c.category === cat)
    const prices = catCars.map(c => c.price)
    return {
      category: cat,
      icon: categoryIcons[cat] ?? '🚗',
      count: catCars.length,
      avgPrice: Math.round(prices.reduce((s, p) => s + p, 0) / prices.length),
      minPrice: Math.min(...prices),
      maxPrice: Math.max(...prices),
    }
  })
)

const tips = [
  { icon: '📅', title: 'Fin d\'année', text: 'Les concessionnaires cherchent à atteindre leurs objectifs en décembre. Profitez-en pour négocier.' },
  { icon: '🔍', title: 'Comparez les offres', text: 'Visitez plusieurs concessionnaires et jouez la concurrence pour obtenir le meilleur tarif.' },
  { icon: '📦', title: 'Négociez les options', text: 'Si le prix de base est fixe, demandez des options gratuites : tapis, protection carrosserie, garantie étendue.' },
]
</script>
