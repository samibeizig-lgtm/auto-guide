<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Catalogue de voitures</h1>
      <p class="text-gray-500 mt-2">{{ filteredCars.length }} modèle{{ filteredCars.length > 1 ? 's' : '' }} disponible{{ filteredCars.length > 1 ? 's' : '' }} en Tunisie</p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Filters sidebar -->
      <aside class="lg:w-64 flex-shrink-0">
        <div class="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
          <div class="flex items-center justify-between mb-5">
            <h2 class="font-semibold text-gray-900">Filtres</h2>
            <button class="text-xs text-primary-600 hover:underline" @click="resetFilters">Réinitialiser</button>
          </div>

          <div class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Recherche</label>
              <input
                v-model="filters.search"
                type="text"
                placeholder="Marque, modèle..."
                class="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
              <div class="space-y-2">
                <label v-for="cat in categories" :key="cat" class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" :value="cat" v-model="filters.categories" class="accent-primary-600" />
                  <span class="text-sm text-gray-600">{{ cat }}</span>
                </label>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Carburant</label>
              <div class="space-y-2">
                <label v-for="fuel in fuels" :key="fuel" class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" :value="fuel" v-model="filters.fuels" class="accent-primary-600" />
                  <span class="text-sm text-gray-600">{{ fuel }}</span>
                </label>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-3">
                Budget max : <span class="text-primary-600 font-semibold">{{ formatPrice(filters.maxPrice) }}</span>
              </label>
              <input
                v-model.number="filters.maxPrice"
                type="range"
                min="40000"
                max="200000"
                step="5000"
                class="w-full accent-primary-600"
              />
              <div class="flex justify-between text-xs text-gray-400 mt-1">
                <span>40 000</span>
                <span>200 000</span>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Transmission</label>
              <div class="space-y-2">
                <label v-for="trans in ['Automatique', 'Manuelle']" :key="trans" class="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" :value="trans" v-model="filters.transmissions" class="accent-primary-600" />
                  <span class="text-sm text-gray-600">{{ trans }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Results -->
      <div class="flex-1">
        <div class="flex items-center justify-between mb-4">
          <div class="flex gap-2">
            <button
              v-for="sort in sortOptions"
              :key="sort.value"
              @click="currentSort = sort.value"
              class="px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              :class="currentSort === sort.value ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'"
            >
              {{ sort.label }}
            </button>
          </div>
          <div class="flex items-center gap-2">
            <button @click="viewMode = 'grid'" :class="viewMode === 'grid' ? 'text-primary-600' : 'text-gray-400'">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zm6-8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zm0 8a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2z"/></svg>
            </button>
            <button @click="viewMode = 'list'" :class="viewMode === 'list' ? 'text-primary-600' : 'text-gray-400'">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/></svg>
            </button>
          </div>
        </div>

        <div v-if="filteredCars.length === 0" class="text-center py-20 text-gray-400">
          <svg class="w-16 h-16 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <p class="font-medium">Aucun résultat trouvé</p>
          <p class="text-sm mt-1">Essayez d'élargir vos critères de recherche</p>
        </div>

        <div :class="viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'">
          <CarCard
            v-for="car in filteredCars"
            :key="car.id"
            :car="car"
            :show-compare-btn="true"
            :is-selected="compareList.includes(car.id)"
            @toggle-compare="toggleCompare"
          />
        </div>
      </div>
    </div>

    <!-- Compare bar -->
    <Transition name="slide-up">
      <div v-if="compareList.length > 0" class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-40">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <span class="text-sm font-medium text-gray-700">{{ compareList.length }}/3 véhicule{{ compareList.length > 1 ? 's' : '' }} sélectionné{{ compareList.length > 1 ? 's' : '' }}</span>
            <div class="flex gap-2">
              <span v-for="id in compareList" :key="id" class="badge bg-primary-100 text-primary-700 text-xs">
                {{ cars.find(c => c.id === id)?.brand }} {{ cars.find(c => c.id === id)?.model }}
                <button @click="compareList = compareList.filter(i => i !== id)" class="ml-1 hover:text-primary-900">×</button>
              </span>
            </div>
          </div>
          <NuxtLink :to="`/comparateur?ids=${compareList.join(',')}`" class="btn-primary py-2 text-sm flex-shrink-0">
            Comparer →
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { cars, categories, fuels } from '~/data/cars'
import type { Car } from '~/data/cars'

useHead({ title: 'Catalogue - Guide Auto Tunisie' })

const route = useRoute()

const filters = reactive({
  search: '',
  categories: route.query.category ? [route.query.category as string] : [] as string[],
  fuels: [] as string[],
  transmissions: [] as string[],
  maxPrice: 200000,
})

const currentSort = ref('rating')
const viewMode = ref<'grid' | 'list'>('grid')
const compareList = ref<number[]>([])

const sortOptions = [
  { label: 'Mieux notés', value: 'rating' },
  { label: 'Prix croissant', value: 'price_asc' },
  { label: 'Prix décroissant', value: 'price_desc' },
]

const filteredCars = computed(() => {
  let result = cars.filter(car => {
    const matchSearch = !filters.search || `${car.brand} ${car.model}`.toLowerCase().includes(filters.search.toLowerCase())
    const matchCat = filters.categories.length === 0 || filters.categories.includes(car.category)
    const matchFuel = filters.fuels.length === 0 || filters.fuels.includes(car.fuel)
    const matchTrans = filters.transmissions.length === 0 || filters.transmissions.includes(car.transmission)
    const matchPrice = car.price <= filters.maxPrice
    return matchSearch && matchCat && matchFuel && matchTrans && matchPrice
  })

  if (currentSort.value === 'rating') result = result.sort((a, b) => b.rating - a.rating)
  else if (currentSort.value === 'price_asc') result = result.sort((a, b) => a.price - b.price)
  else if (currentSort.value === 'price_desc') result = result.sort((a, b) => b.price - a.price)

  return result
})

const toggleCompare = (car: Car) => {
  if (compareList.value.includes(car.id)) {
    compareList.value = compareList.value.filter(id => id !== car.id)
  } else if (compareList.value.length < 3) {
    compareList.value.push(car.id)
  }
}

const resetFilters = () => {
  filters.search = ''
  filters.categories = []
  filters.fuels = []
  filters.transmissions = []
  filters.maxPrice = 200000
}

const formatPrice = (p: number) => `${p.toLocaleString('fr-TN')} TND`
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: transform 0.3s ease; }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(100%); }
</style>
