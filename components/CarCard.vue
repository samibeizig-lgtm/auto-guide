<template>
  <div class="card group cursor-pointer" @click="$router.push(`/catalogue/${car.id}`)">
    <div class="relative overflow-hidden h-48">
      <img
        :src="car.image"
        :alt="`${car.brand} ${car.model}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute top-3 left-3 flex gap-2">
        <span class="badge bg-white text-gray-700 shadow-sm text-xs">{{ car.category }}</span>
        <span class="badge text-xs" :class="fuelClass">{{ car.fuel }}</span>
      </div>
      <div v-if="showCompareBtn" class="absolute top-3 right-3">
        <button
          class="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          :class="isSelected ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 hover:bg-primary-50'"
          @click.stop="$emit('toggleCompare', car)"
          :title="isSelected ? 'Retirer de la comparaison' : 'Ajouter à la comparaison'"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
      </div>
    </div>
    <div class="p-4">
      <div class="flex items-start justify-between mb-1">
        <div>
          <p class="text-xs text-gray-500 font-medium">{{ car.brand }}</p>
          <h3 class="font-bold text-lg text-gray-900">{{ car.model }} <span class="text-gray-400 font-normal text-sm">{{ car.year }}</span></h3>
        </div>
        <StarRating :rating="car.rating" />
      </div>
      <p class="text-sm text-gray-500 mb-3">{{ car.engine }} · {{ car.power }} ch · {{ car.transmission }}</p>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-2xl font-bold text-primary-600">{{ formatPrice(car.price) }}</p>
          <p class="text-xs text-gray-400">Prix neuf</p>
        </div>
        <div class="text-right" v-if="car.priceOccasion">
          <p class="text-base font-semibold text-gray-600">{{ formatPrice(car.priceOccasion) }}</p>
          <p class="text-xs text-gray-400">Occasion</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Car } from '~/data/cars'

const props = defineProps<{
  car: Car
  showCompareBtn?: boolean
  isSelected?: boolean
}>()

defineEmits<{
  toggleCompare: [car: Car]
}>()

const formatPrice = (price: number) => `${price.toLocaleString('fr-TN')} TND`

const fuelClass = computed(() => ({
  'bg-green-100 text-green-700': props.car.fuel === 'Hybride',
  'bg-blue-100 text-blue-700': props.car.fuel === 'Électrique',
  'bg-orange-100 text-orange-700': props.car.fuel === 'Essence',
  'bg-gray-100 text-gray-700': props.car.fuel === 'Diesel',
}))
</script>
