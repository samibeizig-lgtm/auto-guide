<template>
  <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

    <div class="mb-10">
      <p class="text-xs font-bold text-primary-600 uppercase tracking-widest mb-2">Guide pratique</p>
      <h1 class="text-3xl font-bold text-gray-900 mb-3">Informations utiles</h1>
      <p class="text-gray-500 text-base">Tout ce qu'il faut savoir pour acheter, immatriculer et entretenir votre véhicule en Tunisie.</p>
    </div>

    <!-- Navigation rapide -->
    <div class="flex flex-wrap gap-2 mb-10">
      <a v-for="section in sections" :key="section.id" :href="`#${section.id}`"
        class="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-primary-400 hover:text-primary-600 transition-colors">
        {{ section.label }}
      </a>
    </div>

    <!-- 1. Vignette -->
    <section id="vignette" class="mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
        <span class="w-8 h-8 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"/></svg>
        </span>
        Taxe de circulation (Vignette)
      </h2>
      <p class="text-sm text-gray-500 mb-4 ml-10">Renouvelable chaque année. Le montant dépend de la puissance fiscale et de l'âge du véhicule.</p>

      <div class="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
        <table class="w-full text-sm">
          <thead class="bg-gray-50">
            <tr>
              <th class="py-3 px-4 text-left font-semibold text-gray-700">Puissance fiscale</th>
              <th class="py-3 px-4 text-right font-semibold text-gray-700">Véhicule ≤ 10 ans</th>
              <th class="py-3 px-4 text-right font-semibold text-gray-700">Véhicule 11–20 ans</th>
              <th class="py-3 px-4 text-right font-semibold text-gray-700">Véhicule > 20 ans</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr v-for="row in vignetteTable" :key="row.cv" class="hover:bg-gray-50/50">
              <td class="py-3 px-4">
                <span class="inline-flex items-center gap-1.5 font-semibold text-gray-900">
                  <span class="w-7 h-7 rounded-lg bg-primary-100 text-primary-700 text-xs font-bold flex items-center justify-center">{{ row.cv }}</span>
                  {{ row.label }}
                </span>
              </td>
              <td class="py-3 px-4 text-right font-semibold text-gray-900">{{ row.new }} TND</td>
              <td class="py-3 px-4 text-right text-gray-600">{{ row.old }} TND</td>
              <td class="py-3 px-4 text-right text-green-600 font-medium">Exonéré</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-amber-600 mt-2 ml-1 font-medium">⚠️ Valeurs indicatives — veuillez vérifier les tarifs exacts auprès de la Direction Régionale du Transport (DRT) ou sur le site officiel du Ministère des Finances.</p>
    </section>

    <!-- 2. Immatriculation (Carte grise) -->
    <section id="immatriculation" class="mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
        <span class="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
        </span>
        Immatriculation — Carte grise
      </h2>
      <p class="text-sm text-gray-500 mb-5 ml-10">Documents nécessaires pour l'immatriculation d'un véhicule neuf en Tunisie.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="block in immatriculationDocs" :key="block.title" class="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <h3 class="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
            <span class="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold" :class="block.color">{{ block.num }}</span>
            {{ block.title }}
          </h3>
          <ul class="space-y-2">
            <li v-for="doc in block.docs" :key="doc" class="flex items-start gap-2 text-sm text-gray-600">
              <svg class="w-4 h-4 text-primary-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              {{ doc }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3. Dossier FCR / Mutation -->
    <section id="fcr" class="mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
        <span class="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"/></svg>
        </span>
        Mutation de propriété (Cession véhicule)
      </h2>
      <p class="text-sm text-gray-500 mb-5 ml-10">Transfert de carte grise lors de l'achat d'un véhicule d'occasion entre particuliers.</p>

      <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm mb-4">
        <h3 class="font-semibold text-gray-900 mb-4">Documents requis pour la mutation</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          <div v-for="doc in mutationDocs" :key="doc" class="flex items-start gap-2 text-sm text-gray-600">
            <svg class="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
            {{ doc }}
          </div>
        </div>
      </div>

      <div class="bg-amber-50 border border-amber-100 rounded-2xl p-5">
        <h3 class="font-semibold text-amber-900 mb-2 flex items-center gap-2">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>
          Points importants
        </h3>
        <ul class="space-y-1.5 text-sm text-amber-800">
          <li>• La mutation doit être effectuée dans les <strong>3 mois</strong> suivant la vente</li>
          <li>• Le vendeur reste responsable légalement jusqu'à la mutation complète</li>
          <li>• Un certificat de non-gage (quitus fiscal) est obligatoire</li>
          <li>• Des droits de mutation sont applicables selon la wilaya</li>
        </ul>
      </div>
    </section>

    <!-- 4. Contrôle technique -->
    <section id="controle-technique" class="mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
        <span class="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </span>
        Contrôle technique
      </h2>
      <p class="text-sm text-gray-500 mb-5 ml-10">Visite technique obligatoire pour maintenir votre véhicule en circulation légale.</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div v-for="ct in controleTechnique" :key="ct.type" class="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
          <div class="w-10 h-10 rounded-xl mb-3 flex items-center justify-center" :class="ct.bg">
            <svg class="w-5 h-5" :class="ct.icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="ct.path"/></svg>
          </div>
          <h3 class="font-bold text-gray-900 mb-1 text-sm">{{ ct.type }}</h3>
          <p class="text-2xl font-bold mb-1" :class="ct.icon">{{ ct.frequency }}</p>
          <p class="text-xs text-gray-500">{{ ct.note }}</p>
        </div>
      </div>
    </section>

    <!-- 5. Assurance -->
    <section id="assurance" class="mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
        <span class="w-8 h-8 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        </span>
        Assurance automobile
      </h2>
      <p class="text-sm text-gray-500 mb-5 ml-10">L'assurance responsabilité civile (RC) est obligatoire en Tunisie pour tout véhicule en circulation.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="plan in assurancePlans" :key="plan.name" class="bg-white border rounded-2xl p-5 shadow-sm" :class="plan.featured ? 'border-primary-300 ring-1 ring-primary-200' : 'border-gray-100'">
          <div class="flex items-center justify-between mb-3">
            <h3 class="font-bold text-gray-900">{{ plan.name }}</h3>
            <span v-if="plan.featured" class="text-[10px] bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full font-bold">Recommandé</span>
            <span v-if="plan.required" class="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">Obligatoire</span>
          </div>
          <ul class="space-y-1.5">
            <li v-for="item in plan.covers" :key="item" class="flex items-start gap-2 text-sm text-gray-600">
              <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6. Financement rapide -->
    <section id="financement" class="mb-12">
      <h2 class="text-xl font-bold text-gray-900 mb-1 flex items-center gap-2">
        <span class="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
          <svg class="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
        </span>
        Règles de financement
      </h2>
      <p class="text-sm text-gray-500 mb-5 ml-10">En Tunisie, le montant finançable est plafonné selon la puissance fiscale du véhicule.</p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <div v-for="rule in financementRules" :key="rule.cv" class="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm text-center">
          <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{{ rule.cv }}</p>
          <p class="text-4xl font-black mb-1" :class="rule.color">{{ rule.pct }}%</p>
          <p class="text-xs text-gray-500">du prix financé au maximum</p>
          <p class="text-xs font-medium text-gray-700 mt-2">Apport minimum : <span :class="rule.color" class="font-bold">{{ 100 - rule.pct }}%</span></p>
        </div>
      </div>

      <NuxtLink to="/credit" class="inline-flex items-center gap-2 btn-primary text-sm py-2.5 px-5">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
        Simuler mon crédit auto
      </NuxtLink>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Informations utiles — Tunisiamotors.com' })

const sections = [
  { id: 'vignette', label: 'Vignette' },
  { id: 'immatriculation', label: 'Immatriculation' },
  { id: 'fcr', label: 'Mutation / FCR' },
  { id: 'controle-technique', label: 'Contrôle technique' },
  { id: 'assurance', label: 'Assurance' },
  { id: 'financement', label: 'Financement' },
]

const vignetteTable = [
  { cv: '≤4', label: '4 CV et moins',  new: 50,  old: 30 },
  { cv: '5',  label: '5 CV',           new: 85,  old: 50 },
  { cv: '6',  label: '6 CV',           new: 130, old: 80 },
  { cv: '7',  label: '7 CV',           new: 180, old: 110 },
  { cv: '8',  label: '8 CV',           new: 235, old: 140 },
  { cv: '9',  label: '9 CV',           new: 295, old: 175 },
  { cv: '10', label: '10 CV',          new: 360, old: 215 },
  { cv: '11', label: '11 CV',          new: 440, old: 265 },
  { cv: '≥12',label: '12 CV et plus',  new: 550, old: 330 },
]

const immatriculationDocs = [
  {
    num: 'A', title: 'Documents du véhicule', color: 'bg-primary-500',
    docs: [
      'Facture du concessionnaire (originale)',
      'Certificat de conformité (COC)',
      'Certificat de dédouanement (pour véhicules importés)',
      'Quitus fiscal du vendeur (si occasion)',
    ],
  },
  {
    num: 'B', title: "Documents du propriétaire", color: 'bg-blue-500',
    docs: [
      'CIN tunisienne (originale + copie)',
      'Justificatif de domicile récent (moins de 3 mois)',
      'Photos d\'identité (2 exemplaires)',
      'Formulaire de demande de carte grise rempli',
    ],
  },
  {
    num: 'C', title: 'Documents de contrôle', color: 'bg-green-500',
    docs: [
      'Attestation d\'assurance (RC minimum)',
      'Vignette fiscale acquittée',
      'Procès-verbal de visite technique (véhicules occasion)',
    ],
  },
  {
    num: 'D', title: 'Où déposer le dossier ?', color: 'bg-amber-500',
    docs: [
      'Direction régionale du Transport (DRT) de votre gouvernorat',
      'Bureau des immatriculations (Tunis : rue de Rome)',
      'Possibilité de mandater un concessionnaire ou un transitaire',
    ],
  },
]

const mutationDocs = [
  'Carte grise originale (ancien propriétaire)',
  'Carte d\'identité nationale (vendeur + acheteur)',
  'Contrat de vente signé et légalisé',
  'Certificat de non-gage (quitus fiscal)',
  'Attestation de contrôle technique valide',
  'Attestation d\'assurance RC au nom de l\'acheteur',
  'Vignette fiscale à jour',
  'Photos d\'identité de l\'acheteur (2 exemplaires)',
  'Justificatif de domicile de l\'acheteur',
  'Formulaire de mutation (disponible à la DRT)',
]

const controleTechnique = [
  {
    type: 'Véhicule neuf',
    frequency: '4 ans',
    note: 'Première visite technique à la 4ème année d\'immatriculation',
    bg: 'bg-green-50',
    icon: 'text-green-600',
    path: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    type: 'Véhicule 4–10 ans',
    frequency: '2 ans',
    note: 'Tous les 2 ans entre la 4ème et la 10ème année',
    bg: 'bg-blue-50',
    icon: 'text-blue-600',
    path: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  },
  {
    type: 'Véhicule > 10 ans',
    frequency: '1 an',
    note: 'Annuellement au-delà de 10 ans d\'immatriculation',
    bg: 'bg-orange-50',
    icon: 'text-orange-600',
    path: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

const assurancePlans = [
  {
    name: 'Responsabilité Civile (RC)',
    required: true,
    featured: false,
    covers: [
      'Dommages corporels aux tiers',
      'Dommages matériels aux tiers',
      'Défense pénale et recours',
    ],
  },
  {
    name: 'Tous Risques',
    required: false,
    featured: true,
    covers: [
      'Tout ce que couvre la RC',
      'Dommages à votre propre véhicule',
      'Vol, incendie, bris de glace',
      'Catastrophes naturelles',
      'Assistance 24h/24',
    ],
  },
]

const financementRules = [
  { cv: '≤ 4 CV (populaires)',  pct: 80, color: 'text-green-600' },
  { cv: '5 à 8 CV (standards)', pct: 60, color: 'text-primary-600' },
  { cv: '≥ 9 CV (premium)',     pct: 30, color: 'text-orange-600' },
]
</script>
