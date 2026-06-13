<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <!-- Header -->
    <div class="mb-10">
      <p class="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-2">Catalogue 2024</p>
      <h1 class="text-3xl font-bold text-gray-900 mb-6">Toutes les voitures disponibles en Tunisie</h1>

      <!-- Barre de recherche + filtre électrique -->
      <div class="flex flex-col sm:flex-row gap-3 max-w-2xl">
        <div class="relative flex-1">
          <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input
            v-model="search"
            type="text"
            placeholder="Rechercher une marque ou un modèle..."
            class="w-full pl-12 pr-10 py-3.5 border border-gray-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
          />
          <button v-if="search" @click="search = ''" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <button
          @click="electricOnly = !electricOnly"
          class="flex items-center gap-2 px-5 py-3.5 rounded-xl border text-sm font-medium transition-all"
          :class="electricOnly ? 'bg-green-600 text-white border-green-600 shadow-sm' : 'bg-white text-gray-600 border-gray-200 hover:border-green-400'"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Électrique uniquement
        </button>
      </div>
    </div>

    <!-- Résultats de recherche -->
    <div v-if="search || electricOnly">
      <p class="text-sm text-gray-500 mb-6">
        {{ searchResults.length }} résultat{{ searchResults.length > 1 ? 's' : '' }}
        <span v-if="search"> pour « {{ search }} »</span>
        <span v-if="electricOnly" class="text-green-600 font-medium"> · Électrique</span>
      </p>
      <div v-if="searchResults.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CarCard
          v-for="car in searchResults"
          :key="car.id"
          :car="car"
          :show-compare-btn="true"
          :is-selected="compareList.includes(car.id)"
          @toggle-compare="toggleCompare"
        />
      </div>
      <div v-else class="text-center py-20 text-gray-400">
        <svg class="w-14 h-14 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        <p class="font-medium">Aucun résultat</p>
      </div>
    </div>

    <!-- Vue par marque -->
    <div v-else class="space-y-16">
      <div v-for="brand in brandsWithCars" :key="brand.name">
        <!-- En-tête marque -->
        <div class="flex items-center gap-5 mb-6">
          <!-- Logo -->
          <div class="w-14 h-14 rounded-2xl border border-gray-100 shadow-sm flex-shrink-0 overflow-hidden">
            <BrandLogo :brand="brand.name" :brand-color="brand.color" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-3 flex-wrap">
              <h2 class="text-xl font-bold text-gray-900">{{ brand.name }}</h2>
              <span class="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full">{{ brand.country }}</span>
              <span
                v-if="brand.hasElectric"
                class="text-xs text-green-700 bg-green-100 px-2.5 py-1 rounded-full flex items-center gap-1"
              >
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                Électrique disponible
              </span>
            </div>
            <p class="text-sm text-gray-400 mt-0.5">{{ brand.cars.length }} modèle{{ brand.cars.length > 1 ? 's' : '' }} · {{ brand.fuelTypes.join(' · ') }}</p>
          </div>
          <div class="h-px flex-1 bg-gray-100 hidden lg:block"></div>
          <p class="hidden lg:block text-sm font-semibold text-gray-900">
            Dès {{ formatPrice(Math.min(...brand.cars.map(c => c.price))) }}
          </p>
        </div>

        <!-- Grille modèles -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <CarCard
            v-for="car in brand.cars"
            :key="car.id"
            :car="car"
            :show-compare-btn="true"
            :is-selected="compareList.includes(car.id)"
            @toggle-compare="toggleCompare"
          />
        </div>
      </div>
    </div>

    <!-- Barre de comparaison -->
    <Transition name="slide-up">
      <div v-if="compareList.length > 0" class="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-700 p-4 z-40">
        <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div class="flex items-center gap-4">
            <span class="text-sm font-medium text-white">
              <span class="text-primary-400 font-bold">{{ compareList.length }}/3</span> sélectionné{{ compareList.length > 1 ? 's' : '' }}
            </span>
            <div class="hidden sm:flex gap-2 flex-wrap">
              <span v-for="id in compareList" :key="id" class="flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-1.5 rounded-full">
                {{ cars.find(c => c.id === id)?.brand }} {{ cars.find(c => c.id === id)?.model }}
                <button @click="compareList = compareList.filter(i => i !== id)" class="text-white/60 hover:text-white ml-1">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </span>
            </div>
          </div>
          <div class="flex gap-3 flex-shrink-0">
            <button @click="compareList = []" class="text-gray-400 hover:text-white text-sm transition-colors">Effacer</button>
            <NuxtLink :to="`/comparateur?ids=${compareList.join(',')}`" class="btn-primary py-2 text-sm">Comparer →</NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { cars, brands } from '~/data/cars'
import { brandData } from '~/data/brands'
import type { Car } from '~/data/cars'

useHead({ title: 'Catalogue - Guide Auto Tunisie' })

const search = ref('')
const electricOnly = ref(false)
const compareList = ref<number[]>([])

const formatPrice = (p: number) => `${p.toLocaleString('fr-TN')} TND`

const searchResults = computed(() => {
  let result = cars
  if (electricOnly.value) result = result.filter(c => c.fuel === 'Électrique')
  if (search.value) {
    const q = search.value.toLowerCase()
    result = result.filter(c => `${c.brand} ${c.model} ${c.category} ${c.fuel}`.toLowerCase().includes(q))
  }
  return result
})

const brandsWithCars = computed(() =>
  brands.map(brand => {
    const brandCars = cars.filter(c => c.brand === brand)
    const fuelTypes = [...new Set(brandCars.map(c => c.fuel))]
    const info = brandData[brand]
    return {
      name: brand,
      cars: brandCars,
      fuelTypes,
      country: info?.country ?? '',
      color: info?.color ?? '#374151',
      hasElectric: brandCars.some(c => c.fuel === 'Électrique'),
    }
  })
)

const toggleCompare = (car: Car) => {
  if (compareList.value.includes(car.id)) {
    compareList.value = compareList.value.filter(id => id !== car.id)
  } else if (compareList.value.length < 3) {
    compareList.value.push(car.id)
  }
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: transform 0.3s ease; }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(100%); }
</style>
