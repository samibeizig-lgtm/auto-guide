<template>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

    <div class="mb-8">
      <p class="text-primary-600 font-semibold text-xs tracking-widest uppercase mb-1">Financement</p>
      <h1 class="text-2xl font-bold text-gray-900">Calculateur de crédit auto</h1>
      <p class="text-gray-500 text-sm mt-1">Estimez vos mensualités selon les conditions bancaires tunisiennes</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

      <!-- Formulaire -->
      <div class="space-y-5">

        <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
          <h2 class="font-semibold text-gray-800 text-sm uppercase tracking-wide">Votre véhicule</h2>

          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1.5">Prix du véhicule (TND)</label>
            <input
              v-model.number="prix"
              type="number"
              min="0"
              step="1000"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="ex: 120 000"
            />
          </div>

          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1.5">Apport initial (TND)</label>
            <input
              v-model.number="apport"
              type="number"
              min="0"
              step="1000"
              class="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent"
              placeholder="ex: 20 000"
            />
            <p class="text-xs text-gray-400 mt-1">{{ apportPct }}% du prix · max financé {{ 100 - apportPct }}%</p>
          </div>

          <!-- Règle selon CV -->
          <div v-if="regleLabel" class="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2.5">
            <svg class="w-4 h-4 text-amber-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-xs text-amber-700">{{ regleLabel }}</p>
          </div>
        </div>

        <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-4">
          <h2 class="font-semibold text-gray-800 text-sm uppercase tracking-wide">Conditions du crédit</h2>

          <div>
            <label class="block text-xs font-medium text-gray-600 mb-2">Durée : <span class="text-primary-600 font-bold">{{ duree }} mois</span></label>
            <input
              v-model.number="duree"
              type="range"
              min="12"
              max="84"
              step="12"
              class="w-full accent-primary-500"
            />
            <div class="flex justify-between text-xs text-gray-400 mt-1">
              <span>12 mois</span>
              <span>84 mois</span>
            </div>
            <div class="flex gap-2 mt-2 flex-wrap">
              <button
                v-for="d in [24, 36, 48, 60, 72, 84]"
                :key="d"
                @click="duree = d"
                class="text-xs px-2.5 py-1 rounded-lg border transition-colors"
                :class="duree === d ? 'bg-primary-500 text-white border-primary-500' : 'border-gray-200 text-gray-600 hover:border-primary-300'"
              >{{ d }}m</button>
            </div>
          </div>

          <div>
            <label class="block text-xs font-medium text-gray-600 mb-1.5">
              Taux d'intérêt annuel : <span class="text-primary-600 font-bold">{{ taux }}%</span>
            </label>
            <input
              v-model.number="taux"
              type="range"
              min="6"
              max="16"
              step="0.5"
              class="w-full accent-primary-500"
            />
            <div class="flex justify-between text-xs text-gray-400 mt-1">
              <span>6%</span>
              <span>16%</span>
            </div>
            <div class="flex gap-2 mt-2 flex-wrap">
              <button
                v-for="t in tauxPresets"
                :key="t.label"
                @click="taux = t.value"
                class="text-xs px-2.5 py-1 rounded-lg border transition-colors"
                :class="taux === t.value ? 'bg-primary-500 text-white border-primary-500' : 'border-gray-200 text-gray-600 hover:border-primary-300'"
              >{{ t.label }}</button>
            </div>
          </div>
        </div>

      </div>

      <!-- Résultats -->
      <div class="space-y-4">

        <!-- Mensualité principale -->
        <div class="bg-primary-500 rounded-2xl p-6 text-white text-center shadow-lg">
          <p class="text-sm font-medium opacity-80 mb-1">Mensualité estimée</p>
          <p class="text-4xl font-bold mb-1">{{ formatPrice(mensualite) }}</p>
          <p class="text-xs opacity-70">pendant {{ duree }} mois</p>
        </div>

        <!-- Récap chiffres -->
        <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-3">
          <div class="flex justify-between items-center py-2 border-b border-gray-50">
            <span class="text-sm text-gray-600">Prix du véhicule</span>
            <span class="font-semibold text-gray-900">{{ formatPrice(prix) }}</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-gray-50">
            <span class="text-sm text-gray-600">Apport initial</span>
            <span class="font-semibold text-green-600">− {{ formatPrice(apport) }}</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-gray-50">
            <span class="text-sm text-gray-600">Montant financé</span>
            <span class="font-semibold text-gray-900">{{ formatPrice(montantFinance) }}</span>
          </div>
          <div class="flex justify-between items-center py-2 border-b border-gray-50">
            <span class="text-sm text-gray-600">Coût du crédit</span>
            <span class="font-semibold text-orange-500">+ {{ formatPrice(coutCredit) }}</span>
          </div>
          <div class="flex justify-between items-center py-2">
            <span class="text-sm font-semibold text-gray-800">Coût total</span>
            <span class="font-bold text-gray-900 text-lg">{{ formatPrice(coutTotal) }}</span>
          </div>
        </div>

        <!-- Barres visuelles -->
        <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <p class="text-xs font-medium text-gray-600 mb-3 uppercase tracking-wide">Répartition du coût</p>
          <div class="space-y-2">
            <div>
              <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>Prix véhicule</span>
                <span>{{ prixPct }}%</span>
              </div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-primary-500 rounded-full transition-all duration-500" :style="{ width: prixPct + '%' }" />
              </div>
            </div>
            <div>
              <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>Intérêts</span>
                <span>{{ interetsPct }}%</span>
              </div>
              <div class="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-orange-400 rounded-full transition-all duration-500" :style="{ width: interetsPct + '%' }" />
              </div>
            </div>
          </div>
        </div>

        <!-- Note légale -->
        <p class="text-xs text-gray-400 leading-relaxed">
          * Simulation indicative basée sur un crédit à taux fixe. Les taux réels varient selon la banque, votre profil et les conditions en vigueur. Consultez votre conseiller bancaire pour une offre personnalisée.
        </p>

      </div>
    </div>

    <!-- Tableau d'amortissement -->
    <div class="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div class="flex items-center justify-between p-5 border-b border-gray-100">
        <h2 class="font-semibold text-gray-800">Tableau d'amortissement</h2>
        <button @click="showTable = !showTable" class="text-xs text-primary-500 font-medium hover:text-primary-700">
          {{ showTable ? 'Masquer' : 'Afficher' }}
        </button>
      </div>
      <div v-if="showTable" class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Mois</th>
              <th class="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Mensualité</th>
              <th class="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Capital</th>
              <th class="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Intérêts</th>
              <th class="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Reste dû</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-for="row in amortissement" :key="row.mois" class="hover:bg-gray-50">
              <td class="px-4 py-2.5 text-gray-600">{{ row.mois }}</td>
              <td class="px-4 py-2.5 text-right font-medium">{{ formatPrice(row.mensualite) }}</td>
              <td class="px-4 py-2.5 text-right text-green-600">{{ formatPrice(row.capital) }}</td>
              <td class="px-4 py-2.5 text-right text-orange-500">{{ formatPrice(row.interets) }}</td>
              <td class="px-4 py-2.5 text-right text-gray-700">{{ formatPrice(row.resteDu) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Calculateur de crédit auto - Tunisiamotors.com' })

const route = useRoute()

const cv = Number(route.query.cv) || 0
const maxFinancementPct = cv <= 4 ? 80 : cv <= 8 ? 60 : cv > 0 ? 30 : 80

const prix = ref(Number(route.query.prix) || 100000)
const apport = ref(
  route.query.apport
    ? Number(route.query.apport)
    : Math.round((Number(route.query.prix) || 100000) * (1 - maxFinancementPct / 100))
)
const duree = ref(60)
const taux = ref(9)
const showTable = ref(false)

const regleLabel = computed(() => {
  if (!route.query.cv) return null
  if (cv <= 4) return `Véhicule ≤ 4 CV : financement jusqu'à 80% autorisé`
  if (cv <= 8) return `Véhicule ${cv} CV (5-8 CV) : financement jusqu'à 60% autorisé`
  return `Véhicule ${cv} CV (≥ 9 CV) : financement jusqu'à 30% autorisé`
})

const tauxPresets = [
  { label: 'BNA 8.5%', value: 8.5 },
  { label: 'STB 9%', value: 9 },
  { label: 'BH 9.5%', value: 9.5 },
  { label: 'Attijari 10%', value: 10 },
]

const montantFinance = computed(() => Math.max(0, prix.value - apport.value))

const mensualite = computed(() => {
  const P = montantFinance.value
  const r = taux.value / 100 / 12
  const n = duree.value
  if (P <= 0 || n <= 0) return 0
  if (r === 0) return P / n
  return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
})

const coutTotal = computed(() => mensualite.value * duree.value + apport.value)
const coutCredit = computed(() => mensualite.value * duree.value - montantFinance.value)

const apportPct = computed(() =>
  prix.value > 0 ? Math.round((apport.value / prix.value) * 100) : 0
)
const prixPct = computed(() =>
  coutTotal.value > 0 ? Math.round((prix.value / coutTotal.value) * 100) : 100
)
const interetsPct = computed(() => 100 - prixPct.value)

const amortissement = computed(() => {
  const rows = []
  let resteDu = montantFinance.value
  const r = taux.value / 100 / 12
  const m = mensualite.value
  for (let i = 1; i <= duree.value; i++) {
    const interets = resteDu * r
    const capital = m - interets
    resteDu = Math.max(0, resteDu - capital)
    rows.push({
      mois: i,
      mensualite: Math.round(m),
      capital: Math.round(capital),
      interets: Math.round(interets),
      resteDu: Math.round(resteDu),
    })
  }
  return rows
})

const formatPrice = (n: number) =>
  `${Math.round(n).toLocaleString('fr-TN')} TND`
</script>
