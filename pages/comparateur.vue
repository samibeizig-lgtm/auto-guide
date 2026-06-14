<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div class="mb-6">
      <h1 class="text-2xl font-bold text-gray-900">Comparateur de véhicules</h1>
      <p class="text-sm text-gray-500 mt-1">Comparez jusqu'à 3 véhicules côte à côte — tous équipements inclus</p>
    </div>

    <!-- Sélection des voitures -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div v-for="(_, idx) in 3" :key="idx" class="card p-4">
        <div v-if="selectedCars[idx]" class="relative">
          <button @click="removeCar(idx)" class="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600 z-10">×</button>
          <img :src="selectedCars[idx]!.image" :alt="`${selectedCars[idx]!.brand} ${selectedCars[idx]!.model}`" class="w-full h-32 object-cover rounded-xl mb-3" />
          <p class="text-xs text-gray-400 font-medium">{{ selectedCars[idx]!.brand }}</p>
          <h3 class="font-bold text-gray-900">{{ selectedCars[idx]!.model }}</h3>
          <p class="text-primary-600 font-bold mt-1">{{ formatPrice(selectedCars[idx]!.price) }}</p>
        </div>
        <div v-else class="h-44 flex flex-col items-center justify-center text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
          <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
          <p class="text-sm font-medium mb-3">Ajouter un véhicule</p>
          <button @click="openSelector(idx)" class="btn-primary text-sm py-1.5 px-4">Choisir</button>
        </div>
      </div>
    </div>

    <!-- Tableau comparatif -->
    <div v-if="activeCars.length >= 2" class="space-y-0 overflow-x-auto">
      <table class="w-full min-w-[600px]">

        <!-- En-tête collant -->
        <thead class="sticky top-0 z-10">
          <tr class="bg-gray-900 text-white">
            <th class="py-4 px-5 text-left text-sm font-semibold w-48 lg:w-64">Critère</th>
            <th v-for="car in activeCars" :key="car.id" class="py-4 px-5 text-center text-sm font-bold">
              <div class="flex flex-col items-center gap-1">
                <span class="text-gray-300 text-xs">{{ car.brand }}</span>
                <span>{{ car.model }}</span>
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          <!-- ① SPECS CHIFFRÉES -->
          <tr class="bg-primary-600 text-white">
            <td colspan="4" class="py-2 px-5 text-xs font-bold uppercase tracking-widest">Spécifications</td>
          </tr>
          <tr v-for="row in specRows" :key="row.key" class="border-b border-gray-100 even:bg-gray-50">
            <td class="py-3 px-5 text-sm font-medium text-gray-600">{{ row.label }}</td>
            <td v-for="car in activeCars" :key="car.id" class="py-3 px-5 text-center text-sm" :class="getSpecClass(row, car)">
              <StarRating v-if="row.key === 'rating'" :rating="(car as any)[row.key]" />
              <span v-else-if="row.key === 'price'">{{ formatPrice((car as any)[row.key]) }}</span>
              <span v-else-if="row.key === 'priceOccasion'">{{ car.priceOccasion ? formatPrice(car.priceOccasion) : '—' }}</span>
              <span v-else-if="row.key === 'consumption'">{{ (car as any)[row.key] }} {{ car.fuel === 'Électrique' ? 'kWh/100km' : 'L/100km' }}</span>
              <span v-else-if="row.key === 'power'">{{ (car as any)[row.key] }} ch</span>
              <span v-else-if="row.key === 'acceleration'">{{ (car as any)[row.key] ? (car as any)[row.key] + ' s' : '—' }}</span>
              <span v-else-if="row.key === 'topSpeed'">{{ (car as any)[row.key] ? (car as any)[row.key] + ' km/h' : '—' }}</span>
              <span v-else-if="row.key === 'trunkVolume'">{{ (car as any)[row.key] ? (car as any)[row.key] + ' L' : '—' }}</span>
              <span v-else>{{ (car as any)[row.key] ?? '—' }}</span>
            </td>
          </tr>

          <!-- ② ÉQUIPEMENTS PAR CATÉGORIE -->
          <template v-for="cat in EQUIPMENT_CATEGORIES" :key="cat.label">
            <tr class="bg-primary-600 text-white">
              <td colspan="4" class="py-2 px-5 text-xs font-bold uppercase tracking-widest">{{ cat.label }}</td>
            </tr>
            <tr v-for="item in cat.items" :key="item.key" class="border-b border-gray-100 even:bg-gray-50">
              <td class="py-2.5 px-5 text-sm text-gray-600">{{ item.label }}</td>
              <td v-for="car in activeCars" :key="car.id" class="py-2.5 px-5 text-center">
                <template v-if="item.type === 'bool'">
                  <span v-if="getEquip(car, item.key) === true" class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                    <svg class="w-3.5 h-3.5 text-green-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  </span>
                  <span v-else-if="getEquip(car, item.key) === false" class="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100">
                    <svg class="w-3.5 h-3.5 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                  </span>
                  <span v-else class="text-gray-300 text-xs">—</span>
                </template>
                <template v-else>
                  <span class="text-sm font-medium" :class="getEquip(car, item.key) ? 'text-gray-800' : 'text-gray-300'">
                    {{ getEquip(car, item.key) || '—' }}
                  </span>
                </template>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <div v-else class="text-center py-20 text-gray-400">
      <svg class="w-16 h-16 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
      <p class="font-semibold text-lg text-gray-600">Sélectionnez au moins 2 véhicules pour comparer</p>
      <p class="text-sm mt-1">Utilisez les boutons "Choisir" ci-dessus ou ajoutez depuis le catalogue</p>
    </div>

    <!-- Modal sélecteur -->
    <div v-if="selectorOpen" class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" @click.self="selectorOpen = false">
      <div class="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col">
        <div class="p-5 border-b border-gray-100 flex items-center justify-between">
          <h3 class="font-bold text-gray-900">Choisir un véhicule</h3>
          <button @click="selectorOpen = false" class="text-gray-400 hover:text-gray-600">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
        <div class="p-4">
          <input v-model="searchQuery" type="text" placeholder="Rechercher par marque ou modèle..." class="w-full border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500" />
        </div>
        <div class="overflow-y-auto flex-1 divide-y divide-gray-50 px-2 pb-2">
          <button v-for="car in availableCars" :key="car.id" @click="selectCar(car)"
            class="w-full flex items-center gap-4 p-3 hover:bg-primary-50 rounded-xl text-left transition-colors">
            <img :src="car.image" :alt="`${car.brand} ${car.model}`" class="w-16 h-12 object-cover rounded-lg flex-shrink-0" />
            <div class="flex-1 min-w-0">
              <p class="font-semibold text-gray-900">{{ car.brand }} {{ car.model }}</p>
              <p class="text-xs text-gray-500">{{ car.category }} · {{ car.fuel }}</p>
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
import { EQUIPMENT_CATEGORIES } from '~/data/equipment'
import type { EquipmentSpec } from '~/data/equipment'

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

const activeCars = computed(() => selectedCars.value.filter(Boolean) as Car[])

const availableCars = computed(() => {
  const selectedIds = activeCars.value.map(c => c.id)
  return cars.filter(c =>
    !selectedIds.includes(c.id) &&
    (!searchQuery.value || `${c.brand} ${c.model}`.toLowerCase().includes(searchQuery.value.toLowerCase()))
  )
})

const openSelector = (idx: number) => { currentSlot.value = idx; searchQuery.value = ''; selectorOpen.value = true }
const selectCar = (car: Car) => { selectedCars.value[currentSlot.value] = car; selectorOpen.value = false }
const removeCar = (idx: number) => { selectedCars.value[idx] = null }
const formatPrice = (p: number) => `${p.toLocaleString('fr-TN')} TND`

const specRows = [
  { key: 'price', label: 'Prix neuf', better: 'min' },
  { key: 'priceOccasion', label: 'Prix occasion', better: 'min' },
  { key: 'rating', label: 'Note globale', better: 'max' },
  { key: 'fuel', label: 'Carburant', better: null },
  { key: 'power', label: 'Puissance (ch)', better: 'max' },
  { key: 'consumption', label: 'Consommation', better: 'min' },
  { key: 'acceleration', label: '0 – 100 km/h', better: 'min' },
  { key: 'topSpeed', label: 'Vitesse max', better: 'max' },
  { key: 'engine', label: 'Motorisation', better: null },
  { key: 'transmission', label: 'Boîte', better: null },
  { key: 'seats', label: 'Places', better: null },
  { key: 'trunkVolume', label: 'Coffre', better: 'max' },
  { key: 'year', label: 'Année', better: null },
]

const getSpecClass = (row: any, car: Car) => {
  if (!row.better) return 'text-gray-700 font-medium'
  const vals = activeCars.value.map(c => (c as any)[row.key]).filter(v => v != null && typeof v === 'number')
  if (vals.length < 2) return 'text-gray-700 font-medium'
  const val = (car as any)[row.key]
  const best = row.better === 'min' ? Math.min(...vals) : Math.max(...vals)
  return val === best ? 'font-bold text-green-600' : 'text-gray-700'
}

// Récupère la valeur d'un équipement standardisé
const getEquip = (car: Car, key: keyof EquipmentSpec) => {
  if (car.equipment && key in car.equipment) return (car.equipment as any)[key]
  return undefined
}
</script>
