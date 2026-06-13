<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-8">
      <p class="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-2">Catalogue 2026</p>
      <h1 class="text-3xl font-bold text-gray-900">Choisissez une marque</h1>
    </div>

    <!-- Grille des marques -->
    <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 mb-10">
      <button
        v-for="b in brandList"
        :key="b.name"
        @click="selectedBrand = selectedBrand === b.name ? null : b.name"
        class="flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all duration-200 group"
        :class="selectedBrand === b.name
          ? 'border-primary-500 bg-primary-50 shadow-md'
          : 'border-gray-100 bg-white hover:border-gray-300 hover:shadow-sm'"
      >
        <div class="w-12 h-12 flex items-center justify-center">
          <img
            :src="`/logos/${b.key}.svg`"
            :alt="b.name"
            class="max-w-full max-h-full object-contain rounded-xl"
            @error="(e) => showFallback(e, b)"
          />
        </div>
        <span class="text-xs font-semibold text-center leading-tight" :class="selectedBrand === b.name ? 'text-primary-700' : 'text-gray-700'">
          {{ b.name }}
        </span>
        <span class="text-xs text-gray-400">{{ b.count }}</span>
      </button>

      <!-- Tout afficher -->
      <button
        @click="selectedBrand = null"
        class="flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all duration-200"
        :class="!selectedBrand ? 'border-primary-500 bg-primary-50' : 'border-gray-100 bg-white hover:border-gray-300'"
      >
        <div class="w-12 h-12 flex items-center justify-center">
          <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
          </svg>
        </div>
        <span class="text-xs font-semibold text-gray-700">Toutes</span>
        <span class="text-xs text-gray-400">{{ cars.length }}</span>
      </button>
    </div>

    <!-- Titre section + recherche -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h2 class="text-xl font-bold text-gray-900">
          {{ selectedBrand ? selectedBrand : 'Tous les modèles' }}
          <span class="text-base font-normal text-gray-400 ml-2">{{ filteredCars.length }} modèle{{ filteredCars.length > 1 ? 's' : '' }}</span>
        </h2>
      </div>
      <div class="flex gap-3">
        <div class="relative">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input v-model="search" type="text" placeholder="Rechercher..." class="pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 w-44"/>
        </div>
        <button
          @click="electricOnly = !electricOnly"
          class="flex items-center gap-1.5 px-3 py-2 rounded-lg border text-sm font-medium transition-all"
          :class="electricOnly ? 'bg-green-600 text-white border-green-600' : 'bg-white text-gray-600 border-gray-200 hover:border-green-400'"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          Électrique
        </button>
      </div>
    </div>

    <!-- Grille des modèles -->
    <div v-if="filteredCars.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <CarCard
        v-for="car in filteredCars"
        :key="car.id"
        :car="car"
        :show-compare-btn="true"
        :is-selected="compareList.includes(car.id)"
        @toggle-compare="toggleCompare"
      />
    </div>
    <div v-else class="text-center py-20 text-gray-400">
      <svg class="w-14 h-14 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <p class="font-medium">Aucun modèle trouvé</p>
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
                <button @click="compareList = compareList.filter(i => i !== id)">
                  <svg class="w-3 h-3 ml-1 text-white/60 hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </span>
            </div>
          </div>
          <div class="flex gap-3 flex-shrink-0">
            <button @click="compareList = []" class="text-gray-400 hover:text-white text-sm">Effacer</button>
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

const selectedBrand = ref<string | null>(null)
const search = ref('')
const electricOnly = ref(false)
const compareList = ref<number[]>([])

const brandList = computed(() =>
  brands.map(name => ({
    name,
    key: name.toLowerCase().replace(/\s/g, '-'),
    count: cars.filter(c => c.brand === name).length,
    color: brandData[name]?.color ?? '#374151',
  }))
)

const filteredCars = computed(() => {
  let result = cars
  if (selectedBrand.value) result = result.filter(c => c.brand === selectedBrand.value)
  if (electricOnly.value) result = result.filter(c => c.fuel === 'Électrique')
  if (search.value) {
    const q = search.value.toLowerCase()
    result = result.filter(c => `${c.brand} ${c.model} ${c.category} ${c.fuel}`.toLowerCase().includes(q))
  }
  return result
})

const toggleCompare = (car: Car) => {
  if (compareList.value.includes(car.id)) {
    compareList.value = compareList.value.filter(id => id !== car.id)
  } else if (compareList.value.length < 3) {
    compareList.value.push(car.id)
  }
}

const showFallback = (e: Event, b: { name: string; color: string }) => {
  const img = e.target as HTMLImageElement
  const parent = img.parentElement!
  img.remove()
  parent.innerHTML = `<div style="width:48px;height:48px;border-radius:12px;background:${b.color};display:flex;align-items:center;justify-content:center"><span style="color:white;font-weight:700;font-size:12px">${b.name.slice(0,3).toUpperCase()}</span></div>`
}
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active { transition: transform 0.3s ease; }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(100%); }
</style>
