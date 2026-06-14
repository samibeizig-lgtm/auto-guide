<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Comparateur de véhicules</h1>
      <p class="text-gray-500 mt-2">Comparez jusqu'à 3 véhicules côte à côte</p>
    </div>

    <!-- Sélection des voitures -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      <div v-for="(slot, idx) in 3" :key="idx" class="card p-4">
        <div v-if="selectedCars[idx]" class="relative">
          <button @click="removeCar(idx)" class="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600 z-10">×</button>
          <img :src="selectedCars[idx]!.image" :alt="`${selectedCars[idx]!.brand} ${selectedCars[idx]!.model}`" class="w-full h-36 object-cover rounded-xl mb-3" />
          <h3 class="font-bold text-gray-900">{{ selectedCars[idx]!.brand }} {{ selectedCars[idx]!.model }}</h3>
          <p class="text-primary-600 font-semibold">{{ formatPrice(selectedCars[idx]!.price) }}</p>
        </div>
        <div v-else class="h-48 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
          <svg class="w-10 h-10 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          <p class="text-sm font-medium">Ajouter un véhicule</p>
          <button @click="openSelector(idx)" class="mt-3 btn-primary text-sm py-1.5 px-4">Choisir</button>
        </div>
      </div>
    </div>

    <!-- Tableau comparatif -->
    <div v-if="selectedCars.filter(Boolean).length >= 2" class="card overflow-hidden mb-10">
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-50 border-b border-gray-100">
              <th class="text-left py-4 px-6 text-sm font-semibold text-gray-500 w-1/4">Critère</th>
              <th v-for="car in selectedCars.filter(Boolean)" :key="car!.id" class="py-4 px-6 text-center text-sm font-semibold text-gray-900">
                {{ car!.brand }} {{ car!.model }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-for="row in comparisonRows" :key="row.key" :class="row.highlight ? 'bg-primary-50/30' : 'bg-white'">
              <td class="py-3 px-6 text-sm font-medium text-gray-600">{{ row.label }}</td>
              <td
                v-for="car in selectedCars.filter(Boolean)"
                :key="car!.id"
                class="py-3 px-6 text-center text-sm"
                :class="getBestClass(row, car!)"
              >
                <span v-if="row.key === 'rating'">
                  <StarRating :rating="(car as any)[row.key]" />
                </span>
                <span v-else-if="row.key === 'price'">{{ formatPrice((car as any)[row.key]) }}</span>
                <span v-else-if="row.key === 'priceOccasion'">{{ car!.priceOccasion ? formatPrice(car!.priceOccasion) : '—' }}</span>
                <span v-else-if="row.key === 'consumption'">{{ (car as any)[row.key] }} L/100km</span>
                <span v-else-if="row.key === 'power'">{{ (car as any)[row.key] }} ch</span>
                <span v-else>{{ (car as any)[row.key] }}</span>
              </td>
            </tr>
            <tr class="bg-gray-50 border-t border-gray-100">
              <td class="py-4 px-6 text-sm font-semibold text-gray-700">Équipements</td>
              <td v-for="car in selectedCars.filter(Boolean)" :key="car!.id" class="py-4 px-6">
                <ul class="space-y-1">
                  <li v-for="f in car!.features" :key="f" class="text-xs text-gray-600 flex items-center gap-1">
                    <svg class="w-3 h-3 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    {{ f }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div v-else-if="selectedCars.filter(Boolean).length === 0" class="text-center py-20 text-gray-400">
      <svg class="w-20 h-20 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
      <p class="font-medium text-lg">Sélectionnez au moins 2 véhicules pour comparer</p>
      <p class="text-sm mt-2">Utilisez les boutons "Choisir" ci-dessus ou ajoutez depuis le catalogue</p>
    </div>

    <!-- Sélecteur modal -->
    <div v-if="selectorOpen" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="selectorOpen = false">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <div class="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-900">Choisir un véhicule</h3>
          <button @click="selectorOpen = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="p-4">
          <input v-model="searchQuery" type="text" placeholder="Rechercher..." class="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div class="overflow-y-auto flex-1 divide-y divide-gray-50 px-2 pb-2">
          <button
            v-for="car in availableCars"
            :key="car.id"
            @click="selectCar(car)"
            class="w-full flex items-center gap-4 p-3 hover:bg-primary-50 rounded-xl text-left transition-colors"
          >
            <img :src="car.image" :alt="`${car.brand} ${car.model}`" class="w-16 h-12 object-cover rounded-lg flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-gray-900">{{ car.brand }} {{ car.model }}</p>
              <p class="text-sm text-gray-500">{{ car.category }} · {{ car.fuel }}</p>
            </div>
            <p class="text-primary-600 font-bold text-sm flex-shrink-0">{{ formatPrice(car.price) }}</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cars } from '~/data/cars'
import type { Car } from '~/data/cars'

useHead({ title: 'Comparateur - Tunisiamotors.com' })

const route = useRoute()

const selectedCars = ref<(Car | null)[]>([null, null, null])
const selectorOpen = ref(false)
const currentSlot = ref(0)
const searchQuery = ref('')

onMounted(() => {
  if (route.query.ids) {
    const ids = (route.query.ids as string).split(',').map(Number)
    ids.forEach((id, i) => {
      if (i < 3) selectedCars.value[i] = cars.find(c => c.id === id) ?? null
    })
  }
})

const availableCars = computed(() => {
  const selectedIds = selectedCars.value.filter(Boolean).map(c => c!.id)
  return cars.filter(c =>
    !selectedIds.includes(c.id) &&
    (!searchQuery.value || `${c.brand} ${c.model}`.toLowerCase().includes(searchQuery.value.toLowerCase()))
  )
})

const openSelector = (idx: number) => {
  currentSlot.value = idx
  searchQuery.value = ''
  selectorOpen.value = true
}

const selectCar = (car: Car) => {
  selectedCars.value[currentSlot.value] = car
  selectorOpen.value = false
}

const removeCar = (idx: number) => {
  selectedCars.value[idx] = null
}

const formatPrice = (p: number) => `${p.toLocaleString('fr-TN')} TND`

const comparisonRows = [
  { key: 'price', label: 'Prix neuf', better: 'min', highlight: true },
  { key: 'priceOccasion', label: 'Prix occasion', better: 'min' },
  { key: 'rating', label: 'Note', better: 'max', highlight: true },
  { key: 'fuel', label: 'Carburant', better: null },
  { key: 'consumption', label: 'Consommation', better: 'min', highlight: true },
  { key: 'power', label: 'Puissance', better: 'max' },
  { key: 'engine', label: 'Moteur', better: null },
  { key: 'transmission', label: 'Boîte', better: null },
  { key: 'seats', label: 'Places', better: null },
  { key: 'year', label: 'Année', better: null },
]

const getBestClass = (row: any, car: Car) => {
  if (!row.better) return 'text-gray-700'
  const vals = selectedCars.value.filter(Boolean).map(c => (c as any)[row.key]).filter(v => v != null)
  if (vals.length < 2) return 'text-gray-700'
  const val = (car as any)[row.key]
  const best = row.better === 'min' ? Math.min(...vals) : Math.max(...vals)
  return val === best ? 'font-bold text-green-600' : 'text-gray-700'
}
</script>
