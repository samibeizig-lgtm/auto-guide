<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <div class="mb-6">
      <p class="text-primary-600 font-semibold text-xs tracking-widest uppercase mb-1">Recherche</p>
      <h1 class="text-2xl font-bold text-gray-900">Trouver votre voiture</h1>
    </div>

    <div class="flex flex-col lg:flex-row gap-6">

      <!-- Filtres sidebar -->
      <aside class="lg:w-64 shrink-0">
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-5 lg:sticky lg:top-20">

          <div class="flex items-center justify-between">
            <h2 class="font-semibold text-gray-800 text-sm">Filtres</h2>
            <button v-if="hasFilters" @click="resetFilters" class="text-xs text-primary-500 hover:text-primary-700 font-medium">Effacer tout</button>
          </div>

          <!-- Recherche texte -->
          <div class="relative">
            <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              v-model="searchText"
              type="text"
              placeholder="Marque, modèle..."
              class="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          <!-- Budget -->
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Budget (TND)</label>
            <div class="flex gap-2">
              <input v-model.number="budgetMin" type="number" placeholder="Min" step="5000"
                class="w-1/2 border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary-400" />
              <input v-model.number="budgetMax" type="number" placeholder="Max" step="5000"
                class="w-1/2 border border-gray-200 rounded-lg px-2 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-primary-400" />
            </div>
          </div>

          <!-- Marques -->
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Marque</label>
            <div class="space-y-1 max-h-40 overflow-y-auto pr-1">
              <label v-for="b in availableBrands" :key="b" class="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" :value="b" v-model="selectedBrands"
                  class="rounded border-gray-300 text-primary-500 focus:ring-primary-400" />
                <span class="text-sm text-gray-700 group-hover:text-primary-600">{{ b }}</span>
              </label>
            </div>
          </div>

          <!-- Carburant -->
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Carburant</label>
            <div class="flex flex-wrap gap-1.5">
              <button v-for="f in ['Essence', 'Diesel', 'Hybride', 'Électrique']" :key="f"
                @click="toggleFuel(f)"
                class="text-xs px-2.5 py-1 rounded-lg border transition-colors"
                :class="selectedFuels.includes(f) ? 'bg-primary-500 text-white border-primary-500' : 'border-gray-200 text-gray-600 hover:border-primary-300'"
              >{{ f }}</button>
            </div>
          </div>

          <!-- Catégorie -->
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Catégorie</label>
            <div class="flex flex-wrap gap-1.5">
              <button v-for="c in availableCategories" :key="c"
                @click="toggleCategory(c)"
                class="text-xs px-2.5 py-1 rounded-lg border transition-colors"
                :class="selectedCategories.includes(c) ? 'bg-primary-500 text-white border-primary-500' : 'border-gray-200 text-gray-600 hover:border-primary-300'"
              >{{ c }}</button>
            </div>
          </div>

          <!-- Transmission -->
          <div>
            <label class="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-wide">Boîte</label>
            <div class="flex gap-1.5">
              <button v-for="t in ['Manuelle', 'Automatique']" :key="t"
                @click="toggleTransmission(t)"
                class="text-xs px-2.5 py-1 rounded-lg border transition-colors flex-1"
                :class="selectedTransmissions.includes(t) ? 'bg-primary-500 text-white border-primary-500' : 'border-gray-200 text-gray-600 hover:border-primary-300'"
              >{{ t }}</button>
            </div>
          </div>

        </div>
      </aside>

      <!-- Résultats -->
      <div class="flex-1">

        <!-- Barre résultats -->
        <div class="flex items-center justify-between mb-4">
          <p class="text-sm text-gray-500">
            <span class="font-semibold text-gray-900">{{ filteredCars.length }}</span>
            véhicule{{ filteredCars.length !== 1 ? 's' : '' }} trouvé{{ filteredCars.length !== 1 ? 's' : '' }}
          </p>
          <select v-model="sortBy" class="text-sm border border-gray-200 rounded-xl px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white">
            <option value="price-asc">Prix croissant</option>
            <option value="price-desc">Prix décroissant</option>
            <option value="power-desc">Puissance</option>
            <option value="name-asc">Nom A-Z</option>
          </select>
        </div>

        <!-- Tags filtres actifs -->
        <div v-if="hasFilters" class="flex flex-wrap gap-2 mb-4">
          <span v-for="b in selectedBrands" :key="'b-'+b"
            class="flex items-center gap-1 bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">
            {{ b }}
            <button @click="selectedBrands = selectedBrands.filter(x => x !== b)">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </span>
          <span v-for="f in selectedFuels" :key="'f-'+f"
            class="flex items-center gap-1 bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">
            {{ f }}
            <button @click="selectedFuels = selectedFuels.filter(x => x !== f)">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </span>
          <span v-for="c in selectedCategories" :key="'c-'+c"
            class="flex items-center gap-1 bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">
            {{ c }}
            <button @click="selectedCategories = selectedCategories.filter(x => x !== c)">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </span>
        </div>

        <!-- Grille voitures -->
        <div v-if="filteredCars.length" class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <NuxtLink
            v-for="car in filteredCars"
            :key="car._id"
            :to="`/voitures-neuves/${car._id}`"
            class="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200"
          >
            <div class="relative aspect-[4/3] bg-gray-50 overflow-hidden">
              <img
                :src="car.mainImage ?? `/cars/${car._id?.replace('car-', '')}.webp`"
                :alt="`${car.brand} ${car.model}`"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span class="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full"
                :class="fuelClass(car.fuel)">{{ car.fuel }}</span>
            </div>
            <div class="p-3">
              <p class="text-xs font-bold text-gray-900 uppercase tracking-wide leading-tight mb-1">
                {{ car.brand }} {{ car.model }}
              </p>
              <p class="text-sm font-bold text-primary-600 mb-2">
                {{ formatPrice(car.price) }}
              </p>
              <div class="flex flex-wrap gap-1">
                <span class="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">{{ car.engine }}</span>
                <span class="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">{{ car.power }} ch</span>
                <span class="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded font-medium">{{ car.transmission }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>

        <div v-else class="text-center py-20 text-gray-400">
          <svg class="w-16 h-16 mx-auto mb-4 text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <p class="font-medium text-gray-500">Aucun véhicule ne correspond à votre recherche</p>
          <button @click="resetFilters" class="mt-3 text-sm text-primary-500 hover:text-primary-700 font-medium">Effacer les filtres</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchCars } from '~/composables/useSanity'

useHead({ title: 'Recherche - Tunisiamotors.com' })

const route = useRoute()
const { data: allCars } = await useAsyncData('cars', () => fetchCars())

const searchText = ref(String(route.query.q ?? ''))
const selectedBrands = ref<string[]>(route.query.brand ? [String(route.query.brand)] : [])
const selectedFuels = ref<string[]>([])
const selectedCategories = ref<string[]>([])
const selectedTransmissions = ref<string[]>([])
const budgetMin = ref<number | null>(null)
const budgetMax = ref<number | null>(null)
const sortBy = ref('price-asc')

const cars = computed(() => allCars.value ?? [])

const availableBrands = computed(() =>
  [...new Set(cars.value.map((c: any) => c.brand))].filter(Boolean).sort()
)
const availableCategories = computed(() =>
  [...new Set(cars.value.map((c: any) => c.category))].filter(Boolean).sort()
)

const hasFilters = computed(() =>
  searchText.value || selectedBrands.value.length || selectedFuels.value.length ||
  selectedCategories.value.length || selectedTransmissions.value.length ||
  budgetMin.value || budgetMax.value
)

const filteredCars = computed(() => {
  let list = [...cars.value] as any[]

  if (searchText.value) {
    const q = searchText.value.toLowerCase()
    list = list.filter(c =>
      c.brand?.toLowerCase().includes(q) || c.model?.toLowerCase().includes(q)
    )
  }
  if (selectedBrands.value.length)
    list = list.filter(c => selectedBrands.value.includes(c.brand))
  if (selectedFuels.value.length)
    list = list.filter(c => selectedFuels.value.includes(c.fuel))
  if (selectedCategories.value.length)
    list = list.filter(c => selectedCategories.value.includes(c.category))
  if (selectedTransmissions.value.length)
    list = list.filter(c => selectedTransmissions.value.some(t => c.transmission?.includes(t)))
  if (budgetMin.value)
    list = list.filter(c => c.price >= budgetMin.value!)
  if (budgetMax.value)
    list = list.filter(c => c.price <= budgetMax.value!)

  switch (sortBy.value) {
    case 'price-asc': list.sort((a, b) => a.price - b.price); break
    case 'price-desc': list.sort((a, b) => b.price - a.price); break
    case 'power-desc': list.sort((a, b) => (b.power ?? 0) - (a.power ?? 0)); break
    case 'name-asc': list.sort((a, b) => `${a.brand} ${a.model}`.localeCompare(`${b.brand} ${b.model}`)); break
  }
  return list
})

const toggleFuel = (f: string) => {
  selectedFuels.value = selectedFuels.value.includes(f)
    ? selectedFuels.value.filter(x => x !== f)
    : [...selectedFuels.value, f]
}
const toggleCategory = (c: string) => {
  selectedCategories.value = selectedCategories.value.includes(c)
    ? selectedCategories.value.filter(x => x !== c)
    : [...selectedCategories.value, c]
}
const toggleTransmission = (t: string) => {
  selectedTransmissions.value = selectedTransmissions.value.includes(t)
    ? selectedTransmissions.value.filter(x => x !== t)
    : [...selectedTransmissions.value, t]
}
const resetFilters = () => {
  searchText.value = ''
  selectedBrands.value = []
  selectedFuels.value = []
  selectedCategories.value = []
  selectedTransmissions.value = []
  budgetMin.value = null
  budgetMax.value = null
}

const formatPrice = (p: number) => `${p?.toLocaleString('fr-TN')} TND`
const fuelClass = (fuel: string) => ({
  'bg-green-500 text-white': fuel === 'Hybride',
  'bg-blue-500 text-white': fuel === 'Électrique',
  'bg-orange-500 text-white': fuel === 'Essence',
  'bg-gray-700 text-white': fuel === 'Diesel',
})
</script>
