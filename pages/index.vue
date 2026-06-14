<template>
  <div>

    <!-- ===== HERO ===== -->
    <section class="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">

      <!-- Grille de points décorative -->
      <div class="absolute inset-0 pointer-events-none"
        style="background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px); background-size: 32px 32px; opacity: 0.5" />

      <!-- Dégradé orangé bas-gauche -->
      <div class="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)" />
      <!-- Dégradé orangé haut-droite -->
      <div class="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style="background: radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)" />

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <!-- Texte gauche -->
          <div>
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-black text-gray-950 leading-[1.05] tracking-tight mb-6">
              Le guide auto<br />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">de référence</span><br />
              en Tunisie
            </h1>

            <p class="text-lg text-gray-500 mb-10 leading-relaxed max-w-lg">
              Comparez les prix, explorez les fiches techniques et estimez la valeur de votre véhicule — tout en un seul endroit.
            </p>

            <div class="flex flex-col sm:flex-row gap-3">
              <NuxtLink to="/voitures-neuves"
                class="inline-flex items-center justify-center gap-2 bg-gray-950 hover:bg-gray-800 text-white font-semibold px-6 py-3.5 rounded-2xl transition-all duration-200 active:scale-95">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
                Voir le catalogue
              </NuxtLink>
              <NuxtLink to="/recherche"
                class="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-gray-400 text-gray-700 font-semibold px-6 py-3.5 rounded-2xl transition-all duration-200 active:scale-95 bg-white">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                Recherche avancée
              </NuxtLink>
            </div>

            <!-- Stats inline -->
            <div class="flex gap-8 mt-12 pt-8 border-t border-gray-100">
              <div v-for="s in quickStats" :key="s.label">
                <p class="text-2xl font-black text-gray-950">{{ s.value }}</p>
                <p class="text-xs text-gray-400 mt-0.5">{{ s.label }}</p>
              </div>
            </div>
          </div>

          <!-- Visuel droite -->
          <div class="relative hidden lg:flex justify-center items-center">

            <!-- Carte principale -->
            <div class="relative bg-gray-950 rounded-3xl overflow-hidden w-full max-w-sm shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=85"
                alt="Voiture"
                class="w-full h-56 object-cover opacity-90"
              />
              <div class="p-5">
                <div class="flex items-center justify-between mb-3">
                  <div>
                    <p class="text-white font-bold text-lg">BMW Série 5</p>
                    <p class="text-gray-400 text-sm">Berline · 2024</p>
                  </div>
                  <span class="bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-xl">Neuf</span>
                </div>
                <div class="flex gap-3 mb-4">
                  <div class="flex-1 bg-white/5 rounded-xl p-2.5 text-center">
                    <p class="text-white font-bold text-sm">340 ch</p>
                    <p class="text-gray-500 text-[10px]">Puissance</p>
                  </div>
                  <div class="flex-1 bg-white/5 rounded-xl p-2.5 text-center">
                    <p class="text-white font-bold text-sm">5.3 s</p>
                    <p class="text-gray-500 text-[10px]">0–100 km/h</p>
                  </div>
                  <div class="flex-1 bg-white/5 rounded-xl p-2.5 text-center">
                    <p class="text-white font-bold text-sm">250+</p>
                    <p class="text-gray-500 text-[10px]">km/h max</p>
                  </div>
                </div>
                <div class="flex items-center justify-between">
                  <p class="text-orange-400 font-black text-xl">385 000 TND</p>
                  <NuxtLink to="/voitures-neuves" class="text-xs bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-xl font-medium transition-colors">Voir →</NuxtLink>
                </div>
              </div>
            </div>

            <!-- Badge flottant cote -->
            <div class="absolute -top-4 -right-4 bg-white border border-gray-100 shadow-xl rounded-2xl px-4 py-3">
              <p class="text-xs text-gray-400 mb-0.5">Cote occasion</p>
              <p class="text-gray-950 font-black text-lg">−32%</p>
            </div>

            <!-- Badge flottant crédit -->
            <div class="absolute -bottom-4 -left-4 bg-orange-500 text-white shadow-xl rounded-2xl px-4 py-3">
              <p class="text-xs text-orange-100 mb-0.5">Mensualité estimée</p>
              <p class="font-black text-lg">4 200 TND/mois</p>
            </div>

          </div>
        </div>
      </div>

      <!-- Scroll down -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-300">
        <div class="w-px h-8 bg-gradient-to-b from-transparent to-gray-300" />
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </div>
    </section>

    <!-- ===== BANDE MARQUES ===== -->
    <section class="bg-gray-950 py-10 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 mb-6">
        <p class="text-gray-500 text-xs font-semibold uppercase tracking-widest">Marques disponibles</p>
      </div>
      <div class="flex gap-5 items-center px-8 overflow-x-auto pb-2">
        <NuxtLink
          v-for="b in brandList" :key="b.name"
          to="/voitures-neuves"
          class="flex-shrink-0 flex flex-col items-center gap-2 group cursor-pointer">
          <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 shadow-sm group-hover:scale-110 group-hover:shadow-lg transition-all duration-200">
            <img v-if="b.logo" :src="b.logo" :alt="b.name" class="w-full h-full object-contain" />
            <BrandLogo v-else :brand="b.name" :brand-color="b.color" />
          </div>
          <span class="text-gray-400 group-hover:text-white text-[10px] font-medium transition-colors">{{ b.name }}</span>
        </NuxtLink>
      </div>
    </section>

    <!-- ===== VOITURES POPULAIRES ===== -->
    <section class="bg-white py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2">Sélection</p>
            <h2 class="text-3xl font-black text-gray-950 tracking-tight">Modèles les mieux notés</h2>
          </div>
          <NuxtLink to="/voitures-neuves" class="hidden md:flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-900 group">
            Tout voir
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <NuxtLink
            v-for="car in topCars"
            :key="car._id"
            :to="`/catalogue/${car._id}`"
            class="group bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div class="aspect-[4/3] overflow-hidden bg-gray-100">
              <img
                :src="car.mainImage ?? carFallbackImage(car)"
                :alt="`${car.brand} ${car.model}`"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                @error="(e: any) => e.target.src = carFallbackImage(car)"
              />
            </div>
            <div class="p-4">
              <p class="text-[10px] text-gray-400 font-semibold uppercase tracking-wide mb-0.5">{{ car.brand }}</p>
              <p class="font-black text-gray-950">{{ car.model }}</p>
              <div class="flex items-center justify-between mt-3">
                <p class="text-orange-500 font-bold text-sm">{{ formatPrice(car.price) }}</p>
                <span class="text-[10px] bg-gray-900 text-white px-2 py-0.5 rounded-full font-medium">{{ car.fuel }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== 3 OUTILS ===== -->
    <section class="bg-gray-50 py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-14">
          <p class="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2">Outils</p>
          <h2 class="text-3xl font-black text-gray-950 tracking-tight">Tout ce qu'il vous faut</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">

          <NuxtLink to="/comparateur" class="group relative bg-white rounded-3xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="absolute -top-8 -right-8 w-28 h-28 bg-orange-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div class="relative">
              <div class="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              </div>
              <h3 class="text-xl font-black text-gray-950 mb-2">Comparateur</h3>
              <p class="text-gray-400 text-sm leading-relaxed">Comparez jusqu'à 3 véhicules côte à côte sur 60+ critères.</p>
              <p class="mt-5 text-orange-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Comparer <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/prix" class="group relative bg-gray-950 rounded-3xl p-7 border border-gray-800 hover:border-orange-500 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="absolute -top-8 -right-8 w-28 h-28 bg-orange-500/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div class="relative">
              <div class="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <h3 class="text-xl font-black text-white mb-2">Cote Occasion</h3>
              <p class="text-gray-400 text-sm leading-relaxed">Estimez le prix d'une voiture d'occasion selon l'âge et le kilométrage.</p>
              <p class="mt-5 text-orange-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Estimer <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </p>
            </div>
          </NuxtLink>

          <NuxtLink to="/credit" class="group relative bg-white rounded-3xl p-7 border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div class="absolute -top-8 -right-8 w-28 h-28 bg-orange-50 rounded-full group-hover:scale-150 transition-transform duration-500" />
            <div class="relative">
              <div class="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-5">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 class="text-xl font-black text-gray-950 mb-2">Crédit Auto</h3>
              <p class="text-gray-400 text-sm leading-relaxed">Calculez vos mensualités selon les taux bancaires tunisiens.</p>
              <p class="mt-5 text-orange-500 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Simuler <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </p>
            </div>
          </NuxtLink>

        </div>
      </div>
    </section>

    <!-- ===== CATÉGORIES ===== -->
    <section class="bg-white py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2">Explorer</p>
            <h2 class="text-3xl font-black text-gray-950 tracking-tight">Par type de carrosserie</h2>
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <NuxtLink
            v-for="cat in categoryCards"
            :key="cat.name"
            :to="`/recherche?category=${cat.name}`"
            class="group relative rounded-2xl overflow-hidden bg-gray-950 aspect-[4/3] flex flex-col justify-end p-5"
          >
            <img :src="cat.image" :alt="cat.name"
              class="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500" />
            <div class="relative">
              <h3 class="font-black text-white text-lg">{{ cat.name }}</h3>
              <p class="text-gray-400 text-xs mt-0.5">{{ cat.count }} modèle{{ cat.count > 1 ? 's' : '' }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===== ACTUALITÉS ===== -->
    <section v-if="latestArticles.length" class="bg-gray-50 py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-12">
          <div>
            <p class="text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2">Actualités</p>
            <h2 class="text-3xl font-black text-gray-950 tracking-tight">Derniers articles</h2>
          </div>
          <NuxtLink to="/actualites" class="hidden md:flex items-center gap-1 text-sm font-semibold text-gray-500 hover:text-gray-900 group">
            Voir tout
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ArticleCard v-for="article in latestArticles" :key="article._id ?? article.id" :article="article" />
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { fetchCars, fetchBrands, fetchArticles } from '~/composables/useSanity'
import { brandData } from '~/data/brands'

useHead({ title: 'Tunisiamotors.com - Catalogue, Prix et Comparateur auto en Tunisie' })

const { data: allCars } = await useAsyncData('cars', () => fetchCars())
const { data: allBrands } = await useAsyncData('brands', () => fetchBrands())
const { data: allArticles } = await useAsyncData('articles', () => fetchArticles())

const topCars = computed(() =>
  (allCars.value ?? [])
    .slice()
    .sort((a: any, b: any) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 4)
)

const latestArticles = computed(() => (allArticles.value ?? []).slice(0, 3))

const brandList = computed(() =>
  (allBrands.value ?? []).slice(0, 16).map((b: any) => ({
    name: b.name,
    color: b.color ?? brandData[b.name]?.color ?? '#374151',
    logo: b.logo ?? null,
  }))
)

const quickStats = computed(() => [
  { value: `${(allCars.value ?? []).length}+`, label: 'Modèles' },
  { value: `${new Set((allCars.value ?? []).map((c: any) => c.brand)).size}+`, label: 'Marques' },
  { value: '100%', label: 'Prix TND' },
])

const categoryCards = computed(() => {
  const cars = allCars.value ?? []
  return [
    { name: 'SUV', count: cars.filter((c: any) => c.category === 'SUV').length, image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80' },
    { name: 'Berline', count: cars.filter((c: any) => c.category === 'Berline').length, image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80' },
    { name: 'Citadine', count: cars.filter((c: any) => c.category === 'Citadine').length, image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=600&q=80' },
    { name: 'Compacte', count: cars.filter((c: any) => c.category === 'Compacte').length, image: 'https://images.unsplash.com/photo-1471954229671-af4d83d35d5c?w=600&q=80' },
  ]
})

const formatPrice = (p: number) => `${p?.toLocaleString('fr-TN')} TND`

// Photos par marque (Unsplash) pour les modèles sans photo dans Sanity
const brandPhotoMap: Record<string, string> = {
  BMW: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80',
  Mercedes: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80',
  Audi: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80',
  Toyota: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80',
  Volkswagen: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=600&q=80',
  Hyundai: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80',
  Kia: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80',
  Renault: 'https://images.unsplash.com/photo-1471444928139-48c5bf5173f8?w=600&q=80',
  Peugeot: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=600&q=80',
  Dacia: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&q=80',
  Citroën: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80',
  BYD: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
  MG: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&q=80',
  Chery: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80',
  Suzuki: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&q=80',
}

const carFallbackImage = (car: any) => {
  if (brandPhotoMap[car.brand]) return brandPhotoMap[car.brand]
  if (car.category === 'SUV') return 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80'
  if (car.category === 'Berline') return 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80'
  return 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80'
}
</script>
