<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <!-- Titre -->
    <div class="mb-6">
      <p class="text-primary-600 font-semibold text-xs tracking-widest uppercase mb-1">Voitures neuves 2026</p>
      <h1 class="text-2xl font-bold text-gray-900">Choisissez une marque</h1>
    </div>

    <!-- Grille logos marques -->
    <div v-if="!selectedBrand" class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
      <button
        v-for="b in brandList"
        :key="b.name"
        @click="selectedBrand = b.name"
        class="flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 bg-white hover:border-primary-300 hover:shadow-md transition-all duration-200 group"
      >
        <div class="w-16 h-16 flex items-center justify-center">

          <BrandLogo :brand="b.name" :brand-color="b.color" :sanity-logo="b.logo" />
        </div>
        <span class="text-xs font-semibold text-gray-700 text-center leading-tight group-hover:text-primary-600">{{ b.name }}</span>
        <span class="text-xs text-gray-400">{{ b.count }} modèle{{ b.count > 1 ? 's' : '' }}</span>
      </button>
    </div>

    <!-- Vue modèles d'une marque -->
    <div v-else>
      <!-- En-tête -->
      <div class="flex items-center gap-4 mb-6">
        <button @click="selectedBrand = null" class="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
          Toutes les marques
        </button>
        <div class="w-px h-5 bg-gray-200" />
        <div class="flex items-center gap-3">
          <div class="w-10 h-10">
            <BrandLogo :brand="selectedBrand" :sanity-logo="brandList.find(b => b.name === selectedBrand)?.logo ?? undefined" />
          </div>
          <h2 class="text-xl font-bold text-gray-900 uppercase tracking-wide">{{ selectedBrand }}</h2>
        </div>
      </div>

      <!-- Grille 2 colonnes style automobile.tn -->
      <div class="grid grid-cols-2 gap-4 sm:gap-6">
        <NuxtLink
          v-for="car in brandCars"
          :key="car.id"
          :to="`/catalogue/${car._id}`"
          class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200"
        >
          <div class="relative aspect-[4/3] bg-gray-50 overflow-hidden">
            <img
              :src="carImage(car)"
              :alt="`${car.brand} ${car.model}`"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span
              class="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
              :class="fuelClass(car.fuel)"
            >{{ car.fuel }}</span>
          </div>

          <div class="p-3">
            <p class="text-xs font-bold text-gray-900 uppercase tracking-wide leading-tight mb-1">
              {{ car.brand }} {{ car.model }}
            </p>
            <p class="text-sm font-bold text-primary-600 mb-2">
              à partir de <span class="text-base">{{ formatPrice(car.price) }}</span>
            </p>
            <div class="flex flex-wrap gap-1">
              <span class="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">{{ car.engine }}</span>
              <span class="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">{{ car.power }} ch</span>
              <span class="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">{{ car.transmission }}</span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div v-if="brandCars.length === 0" class="text-center py-20 text-gray-400">
        <p class="font-medium">Aucun modèle disponible pour cette marque</p>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { fetchBrands, fetchCars } from '~/composables/useSanity'

useHead({ title: 'Voitures neuves - Tunisiamotors.com' })

const { data: allBrands } = await useAsyncData('brands', () => fetchBrands())
const { data: allCars } = await useAsyncData('cars', () => fetchCars())

const selectedBrand = ref<string | null>(null)

const brandList = computed(() =>
  (allBrands.value ?? []).map((b: any) => ({
    name: b.name,
    color: b.color ?? '#374151',
    logo: b.logo ?? null,
    count: (allCars.value ?? []).filter((c: any) => c.brand === b.name).length,
  }))
)

const brandCars = computed(() =>
  selectedBrand.value ? (allCars.value ?? []).filter((c: any) => c.brand === selectedBrand.value) : []
)

const carImage = (car: any) => car.mainImage ?? `/cars/${car._id?.replace('car-', '')}.webp`

const formatPrice = (price: number) => `${price.toLocaleString('fr-TN')} TND`

const fuelClass = (fuel: string) => ({
  'bg-green-500 text-white': fuel === 'Hybride',
  'bg-blue-500 text-white': fuel === 'Électrique',
  'bg-orange-500 text-white': fuel === 'Essence',
  'bg-gray-700 text-white': fuel === 'Diesel',
})
</script>
