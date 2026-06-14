<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <div class="mb-8">
      <p class="text-primary-600 font-semibold text-xs tracking-widest uppercase mb-1">Estimation</p>
      <h1 class="text-2xl font-bold text-gray-900">Cote & Estimation de prix</h1>
      <p class="text-gray-500 text-sm mt-1">Estimez la valeur de votre véhicule d'occasion selon les données du marché tunisien</p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">

      <!-- Formulaire -->
      <div class="lg:col-span-2 space-y-5">

        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-4">
          <h2 class="font-semibold text-gray-800 text-sm uppercase tracking-wide">Votre véhicule</h2>

          <!-- Marque -->
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1.5">Marque</label>
            <select v-model="selectedBrand" @change="selectedModel = ''; selectedYear = null"
              class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white">
              <option value="">Choisir une marque</option>
              <option v-for="b in availableBrands" :key="b" :value="b">{{ b }}</option>
            </select>
          </div>

          <!-- Modèle -->
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1.5">Modèle</label>
            <select v-model="selectedModel" @change="selectedYear = null" :disabled="!selectedBrand"
              class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white disabled:opacity-50 disabled:cursor-not-allowed">
              <option value="">Choisir un modèle</option>
              <option v-for="m in availableModels" :key="m" :value="m">{{ m }}</option>
            </select>
          </div>

          <!-- Année -->
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1.5">Année d'immatriculation</label>
            <select v-model="selectedYear" :disabled="!selectedModel"
              class="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 bg-white disabled:opacity-50 disabled:cursor-not-allowed">
              <option :value="null">Choisir une année</option>
              <option v-for="y in availableYears" :key="y" :value="y">{{ y }}</option>
            </select>
          </div>

          <!-- Kilométrage -->
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1.5">
              Kilométrage : <span class="text-primary-600 font-bold">{{ kilometrage.toLocaleString('fr-TN') }} km</span>
            </label>
            <input v-model.number="kilometrage" type="range" min="0" max="300000" step="5000"
              class="w-full accent-primary-500" :disabled="!selectedYear" />
            <div class="flex justify-between text-xs text-gray-400 mt-1">
              <span>0 km</span>
              <span>300 000 km</span>
            </div>
            <div class="flex gap-2 mt-2 flex-wrap">
              <button v-for="k in [30000, 60000, 100000, 150000, 200000]" :key="k"
                @click="kilometrage = k" :disabled="!selectedYear"
                class="text-xs px-2 py-1 rounded-lg border transition-colors disabled:opacity-40"
                :class="kilometrage === k ? 'bg-primary-500 text-white border-primary-500' : 'border-gray-200 text-gray-600 hover:border-primary-300'">
                {{ k / 1000 }}k
              </button>
            </div>
          </div>

          <!-- État -->
          <div>
            <label class="block text-xs font-medium text-gray-600 mb-2">État général</label>
            <div class="grid grid-cols-3 gap-2">
              <button v-for="e in etats" :key="e.value"
                @click="etat = e.value" :disabled="!selectedYear"
                class="flex flex-col items-center gap-1 p-2 rounded-xl border text-xs font-medium transition-all disabled:opacity-40"
                :class="etat === e.value ? 'bg-primary-500 text-white border-primary-500' : 'border-gray-200 text-gray-600 hover:border-primary-300'">
                <span class="text-base">{{ e.icon }}</span>
                {{ e.label }}
              </button>
            </div>
          </div>
        </div>

      </div>

      <!-- Résultat -->
      <div class="lg:col-span-3 space-y-4">

        <!-- État vide -->
        <div v-if="!estimation" class="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-12 text-center">
          <svg class="w-16 h-16 mx-auto text-gray-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <p class="text-gray-500 font-medium">Sélectionnez une marque, un modèle, une année et un kilométrage pour obtenir une estimation</p>
        </div>

        <!-- Résultat -->
        <template v-else>

          <!-- Prix estimé -->
          <div class="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
            <div class="flex items-center gap-3 mb-4">
              <img v-if="estimation.image" :src="estimation.image" :alt="estimation.model" class="w-16 h-12 object-cover rounded-lg" />
              <div class="w-16 h-12 bg-white/10 rounded-lg flex items-center justify-center" v-else>
                <svg class="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM3 9l1-5h16l1 5M3 9h18M3 9l-1 4h20l-1-4"/></svg>
              </div>
              <div>
                <p class="font-bold text-lg">{{ estimation.brand }} {{ estimation.model }}</p>
                <p class="text-gray-400 text-sm">{{ selectedYear }} · {{ kilometrage.toLocaleString('fr-TN') }} km · {{ etatLabel }}</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 mt-4">
              <div class="text-center">
                <p class="text-xs text-gray-400 mb-1">Prix bas</p>
                <p class="text-lg font-bold text-orange-300">{{ formatPrice(estimation.low) }}</p>
              </div>
              <div class="text-center border-x border-white/10">
                <p class="text-xs text-gray-400 mb-1">Estimation</p>
                <p class="text-2xl font-bold text-primary-400">{{ formatPrice(estimation.mid) }}</p>
              </div>
              <div class="text-center">
                <p class="text-xs text-gray-400 mb-1">Prix haut</p>
                <p class="text-lg font-bold text-green-400">{{ formatPrice(estimation.high) }}</p>
              </div>
            </div>
          </div>

          <!-- Détail calcul -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 space-y-3">
            <h3 class="font-semibold text-gray-800 text-sm">Détail de l'estimation</h3>
            <div class="flex justify-between items-center py-2 border-b border-gray-50">
              <span class="text-sm text-gray-600">Prix neuf (2026)</span>
              <span class="font-semibold">{{ formatPrice(estimation.priceNeuf) }}</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-50">
              <span class="text-sm text-gray-600">Dépréciation annuelle ({{ ageVehicule }} an{{ ageVehicule > 1 ? 's' : '' }})</span>
              <span class="font-semibold text-red-500">− {{ formatPrice(estimation.depreciationAge) }}</span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-50">
              <span class="text-sm text-gray-600">Correction kilométrage</span>
              <span class="font-semibold" :class="estimation.depreciationKm >= 0 ? 'text-red-500' : 'text-green-600'">
                {{ estimation.depreciationKm >= 0 ? '−' : '+' }} {{ formatPrice(Math.abs(estimation.depreciationKm)) }}
              </span>
            </div>
            <div class="flex justify-between items-center py-2 border-b border-gray-50">
              <span class="text-sm text-gray-600">Correction état ({{ etatLabel }})</span>
              <span class="font-semibold" :class="estimation.bonusEtat >= 0 ? 'text-green-600' : 'text-red-500'">
                {{ estimation.bonusEtat >= 0 ? '+' : '−' }} {{ formatPrice(Math.abs(estimation.bonusEtat)) }}
              </span>
            </div>
            <div class="flex justify-between items-center pt-2">
              <span class="text-sm font-bold text-gray-900">Valeur estimée</span>
              <span class="text-lg font-bold text-primary-600">{{ formatPrice(estimation.mid) }}</span>
            </div>
          </div>

          <!-- Barre dépréciation -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div class="flex justify-between text-xs text-gray-500 mb-2">
              <span>Valeur résiduelle</span>
              <span class="font-semibold text-primary-600">{{ Math.round((estimation.mid / estimation.priceNeuf) * 100) }}%</span>
            </div>
            <div class="h-3 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-primary-500 to-orange-400 rounded-full transition-all duration-700"
                :style="{ width: Math.round((estimation.mid / estimation.priceNeuf) * 100) + '%' }" />
            </div>
            <div class="flex justify-between text-xs text-gray-400 mt-1">
              <span>0%</span>
              <span>Prix neuf</span>
            </div>
          </div>

          <!-- Lien annonces réelles -->
          <a :href="annoncesUrl" target="_blank" rel="noopener"
            class="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-primary-500 text-primary-600 font-semibold text-sm hover:bg-primary-50 transition-colors">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            Voir les annonces sur tayara.tn
          </a>

          <p class="text-xs text-gray-400 leading-relaxed">
            * Estimation basée sur les prix de référence 2024-2026 et la dépréciation moyenne du marché tunisien. Prix réel peut varier selon l'historique d'entretien, les options et la demande locale.
          </p>

        </template>
      </div>
    </div>

    <!-- Tableau des prix neuf -->
    <div class="mt-12">
      <h2 class="text-xl font-bold text-gray-900 mb-6">Prix neuf 2026 — tous modèles</h2>
      <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-gray-50 border-b border-gray-100">
              <tr>
                <th class="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase">Véhicule</th>
                <th class="text-center px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Carburant</th>
                <th class="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Prix neuf</th>
                <th class="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Cote 3 ans / 60k km</th>
                <th class="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Cote 5 ans / 100k km</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-50">
              <tr v-for="car in tableRef" :key="`${car.brand}-${car.model}`" class="hover:bg-gray-50 transition-colors">
                <td class="px-5 py-3">
                  <p class="font-semibold text-gray-900">{{ car.brand }} {{ car.model }}</p>
                  <p class="text-xs text-gray-400">{{ car.category }} · {{ car.years[car.years.length-1] }}–{{ car.years[0] }}</p>
                </td>
                <td class="px-4 py-3 text-center">
                  <span class="text-xs font-medium px-2 py-0.5 rounded-full"
                    :class="car.category === 'Électrique' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'">
                    {{ car.category === 'Électrique' ? 'Électrique' : 'Thermique' }}
                  </span>
                </td>
                <td class="px-4 py-3 text-right font-bold text-primary-600">{{ formatPrice(car.priceRef) }}</td>
                <td class="px-4 py-3 text-right text-gray-600">{{ formatPrice(estimateCote(car.priceRef, 3, 60000, 'bon')) }}</td>
                <td class="px-4 py-3 text-right text-gray-600">{{ formatPrice(estimateCote(car.priceRef, 5, 100000, 'bon')) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { usedCarsReference, usedCarBrands, getModelsForBrand, getCarRef } from '~/data/used-cars-reference'
import { fetchCars } from '~/composables/useSanity'

useHead({ title: 'Prix & Cotes - Tunisiamotors.com' })

const { data: sanityCars } = await useAsyncData('cars', () => fetchCars())

const selectedBrand = ref('')
const selectedModel = ref('')
const selectedYear = ref<number | null>(null)
const kilometrage = ref(60000)
const etat = ref('bon')

const etats = [
  { value: 'excellent', label: 'Excellent', icon: '⭐' },
  { value: 'bon', label: 'Bon', icon: '👍' },
  { value: 'correct', label: 'Correct', icon: '👌' },
]

const etatLabel = computed(() => etats.find(e => e.value === etat.value)?.label ?? '')
const currentYear = new Date().getFullYear()

const availableBrands = computed(() => usedCarBrands)
const availableModels = computed(() => selectedBrand.value ? getModelsForBrand(selectedBrand.value) : [])
const availableYears = computed(() => {
  if (!selectedBrand.value || !selectedModel.value) return []
  const ref = getCarRef(selectedBrand.value, selectedModel.value)
  return ref ? ref.years.slice().sort((a, b) => b - a) : []
})

const ageVehicule = computed(() => selectedYear.value ? Math.max(0, currentYear - selectedYear.value) : 0)

const depreciationRate = (age: number) => {
  if (age <= 0) return 0
  let total = 0
  for (let i = 1; i <= age; i++) {
    if (i === 1) total += 0.15
    else if (i === 2) total += 0.10
    else if (i === 3) total += 0.08
    else if (i <= 7) total += 0.07
    else total += 0.05
  }
  return Math.min(total, 0.85)
}

const estimateCote = (priceNeuf: number, age: number, km: number, state: string) => {
  const kmDiff = km - age * 15000
  const kmRate = (kmDiff / 5000) * 0.005
  const stateBonus: Record<string, number> = { excellent: 0.05, bon: 0, correct: -0.07 }
  const base = priceNeuf * (1 - depreciationRate(age))
  const afterKm = base * (1 - kmRate)
  const afterState = afterKm * (1 + (stateBonus[state] ?? 0))
  return Math.max(Math.round(afterState / 100) * 100, priceNeuf * 0.05)
}

// Prix de référence : Sanity en priorité, sinon dataset local
const getRefPrice = (brand: string, model: string) => {
  const sanity = (sanityCars.value ?? []).find((c: any) => c.brand === brand && c.model === model)
  if (sanity?.price) return sanity.price
  return getCarRef(brand, model)?.priceRef ?? 0
}

// Image depuis Sanity si dispo
const getCarImage = (brand: string, model: string) => {
  const sanity = (sanityCars.value ?? []).find((c: any) => c.brand === brand && c.model === model)
  return sanity?.mainImage ?? null
}

// Lien annonces réelles
const annoncesUrl = computed(() => {
  if (!selectedBrand.value || !selectedModel.value) return 'https://www.autoprix.tn'
  const q = encodeURIComponent(`${selectedBrand.value} ${selectedModel.value}`)
  return `https://www.tayara.tn/ads/k/${q}`
})

const estimation = computed(() => {
  if (!selectedBrand.value || !selectedModel.value || !selectedYear.value) return null
  const priceNeuf = getRefPrice(selectedBrand.value, selectedModel.value)
  if (!priceNeuf) return null

  const age = ageVehicule.value
  const avgKm = age * 15000
  const kmDiff = kilometrage.value - avgKm
  const stateBonus: Record<string, number> = { excellent: 0.05, bon: 0, correct: -0.07 }

  const base = priceNeuf * (1 - depreciationRate(age))
  const depreciationAge = priceNeuf - base
  const kmCorr = base * (kmDiff / 5000) * 0.005
  const stateVal = (base - kmCorr) * (stateBonus[etat.value] ?? 0)
  const mid = Math.max(Math.round((base - kmCorr + stateVal) / 100) * 100, priceNeuf * 0.05)

  return {
    brand: selectedBrand.value,
    model: selectedModel.value,
    image: getCarImage(selectedBrand.value, selectedModel.value),
    priceNeuf,
    mid,
    low: Math.round(mid * 0.92 / 100) * 100,
    high: Math.round(mid * 1.08 / 100) * 100,
    depreciationAge: Math.round(depreciationAge),
    depreciationKm: Math.round(kmCorr),
    bonusEtat: Math.round(-stateVal),
  }
})

// Tableau de référence : utilise le dataset complet
const tableRef = computed(() => usedCarsReference.slice().sort((a, b) => a.brand.localeCompare(b.brand)))

const formatPrice = (p: number) => `${Math.round(p).toLocaleString('fr-TN')} TND`
</script>
