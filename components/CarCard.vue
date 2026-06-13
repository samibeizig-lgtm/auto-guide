<template>
  <div class="card group cursor-pointer" @click="$router.push(`/catalogue/${car.id}`)">
    <div class="relative overflow-hidden h-44">
      <img
        :src="car.image"
        :alt="`${car.brand} ${car.model}`"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div class="absolute top-3 left-3 flex gap-1.5">
        <span class="badge bg-white/90 text-gray-700 text-xs font-medium py-0.5 px-2">{{ car.category }}</span>
        <span class="badge text-xs font-medium py-0.5 px-2" :class="fuelClass">{{ car.fuel }}</span>
      </div>
      <div v-if="showCompareBtn" class="absolute top-3 right-3">
        <button
          class="w-7 h-7 rounded-full flex items-center justify-center transition-all shadow"
          :class="isSelected ? 'bg-primary-600 text-white' : 'bg-white/90 text-gray-500 hover:bg-primary-50'"
          @click.stop="$emit('toggleCompare', car)"
          :title="isSelected ? 'Retirer' : 'Comparer'"
        >
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
      </div>
      <div class="absolute bottom-3 left-3">
        <StarRating :rating="car.rating" />
      </div>
    </div>

    <div class="p-4">
      <p class="text-xs text-gray-400 font-medium mb-0.5">{{ car.brand }}</p>
      <h3 class="font-bold text-gray-900 text-base mb-3">{{ car.model }} <span class="text-gray-400 font-normal text-sm">{{ car.year }}</span></h3>

      <!-- Specs résumé -->
      <div class="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-gray-50">
        <div class="text-center">
          <p class="text-xs text-gray-400 mb-0.5">Moteur</p>
          <p class="text-xs font-semibold text-gray-700">{{ car.engine }}</p>
        </div>
        <div class="text-center border-x border-gray-100">
          <p class="text-xs text-gray-400 mb-0.5">Puissance</p>
          <p class="text-xs font-semibold text-gray-700">{{ car.power }} ch</p>
        </div>
        <div class="text-center">
          <p class="text-xs text-gray-400 mb-0.5">{{ car.fuel === 'Électrique' ? 'Autonomie' : 'Consom.' }}</p>
          <p class="text-xs font-semibold text-gray-700">{{ car.fuel === 'Électrique' ? `~${Math.round(car.power * 1.8)} km` : `${car.consumption}L` }}</p>
        </div>
      </div>

      <!-- Prix -->
      <div class="flex items-end justify-between">
        <div>
          <p class="text-xs text-gray-400 mb-0.5">Prix neuf</p>
          <p class="text-xl font-bold text-primary-600">{{ formatPrice(car.price) }}</p>
        </div>
        <span class="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-lg font-medium">{{ car.transmission }}</span>
      </div>

      <button class="mt-3 w-full text-center text-sm font-medium text-primary-600 hover:text-primary-700 py-2 rounded-lg hover:bg-primary-50 transition-colors border border-primary-100">
        Voir les détails →
      </button>
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

defineEmits<{ toggleCompare: [car: Car] }>()

const formatPrice = (price: number) => `${price.toLocaleString('fr-TN')} TND`

const fuelClass = computed(() => ({
  'bg-green-500/90 text-white': props.car.fuel === 'Hybride',
  'bg-blue-500/90 text-white': props.car.fuel === 'Électrique',
  'bg-orange-500/90 text-white': props.car.fuel === 'Essence',
  'bg-gray-600/90 text-white': props.car.fuel === 'Diesel',
}))
</script>
