<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-[92vh] flex items-center overflow-hidden">
      <!-- Background image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&q=85"
          alt="Hero background"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <!-- Orange glow -->
        <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl pointer-events-none" />

        <!-- Gear 1 — large, top-right, clockwise orange -->
        <svg
          class="gear-spin absolute -top-16 -right-16 w-80 h-80 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.3 5.7l-2.1 7.9A32 32 0 0 0 33 17l-7.6-3.2-9.2 9.2L19.4 30a32 32 0 0 0-3.4 8.2l-7.9 2.1v13l7.9 2.1A32 32 0 0 0 19.4 64l-3.2 7.6 9.2 9.2L33 77.6a32 32 0 0 0 8.2 3.4l2.1 7.9h13l2.1-7.9A32 32 0 0 0 66.6 77.6l7.6 3.2 9.2-9.2-3.2-7.6a32 32 0 0 0 3.4-8.2l7.9-2.1V40.4l-7.9-2.1A32 32 0 0 0 80.2 30l3.2-7.6-9.2-9.2-7.6 3.2a32 32 0 0 0-8.2-3.4l-2.1-7.9H43.3zM50 34a16 16 0 1 1 0 32 16 16 0 0 1 0-32z"
            fill="#f97316"
            opacity="0.10"
          />
        </svg>

        <!-- Gear 2 — medium, bottom-left, counter-clockwise white -->
        <svg
          class="gear-spin-reverse absolute -bottom-10 -left-10 w-56 h-56 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.3 5.7l-2.1 7.9A32 32 0 0 0 33 17l-7.6-3.2-9.2 9.2L19.4 30a32 32 0 0 0-3.4 8.2l-7.9 2.1v13l7.9 2.1A32 32 0 0 0 19.4 64l-3.2 7.6 9.2 9.2L33 77.6a32 32 0 0 0 8.2 3.4l2.1 7.9h13l2.1-7.9A32 32 0 0 0 66.6 77.6l7.6 3.2 9.2-9.2-3.2-7.6a32 32 0 0 0 3.4-8.2l7.9-2.1V40.4l-7.9-2.1A32 32 0 0 0 80.2 30l3.2-7.6-9.2-9.2-7.6 3.2a32 32 0 0 0-8.2-3.4l-2.1-7.9H43.3zM50 34a16 16 0 1 1 0 32 16 16 0 0 1 0-32z"
            fill="#ffffff"
            opacity="0.08"
          />
        </svg>

        <!-- Gear 3 — small, mid-right, clockwise orange -->
        <svg
          class="gear-spin absolute top-1/2 right-12 w-36 h-36 pointer-events-none"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.3 5.7l-2.1 7.9A32 32 0 0 0 33 17l-7.6-3.2-9.2 9.2L19.4 30a32 32 0 0 0-3.4 8.2l-7.9 2.1v13l7.9 2.1A32 32 0 0 0 19.4 64l-3.2 7.6 9.2 9.2L33 77.6a32 32 0 0 0 8.2 3.4l2.1 7.9h13l2.1-7.9A32 32 0 0 0 66.6 77.6l7.6 3.2 9.2-9.2-3.2-7.6a32 32 0 0 0 3.4-8.2l7.9-2.1V40.4l-7.9-2.1A32 32 0 0 0 80.2 30l3.2-7.6-9.2-9.2-7.6 3.2a32 32 0 0 0-8.2-3.4l-2.1-7.9H43.3zM50 34a16 16 0 1 1 0 32 16 16 0 0 1 0-32z"
            fill="#f97316"
            opacity="0.12"
          />
        </svg>
      </div>

      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div class="max-w-2xl">
          <h1 class="animate-fade-in-up-delay-1 text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-4">
            Trouvez la voiture<br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-orange-300">
              idéale en Tunisie
            </span>
          </h1>

          <!-- Tachometer arc decoration -->
          <div class="relative my-5 h-8 overflow-visible">
            <svg class="absolute left-0 top-0 w-40 h-8 opacity-60" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 28 A76 76 0 0 1 156 28" stroke="#f97316" stroke-width="2.5" stroke-linecap="round" fill="none" />
              <path d="M18 28 A62 62 0 0 1 142 28" stroke="#fdba74" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.5" />
              <circle cx="80" cy="28" r="4" fill="#f97316" />
              <line x1="80" y1="28" x2="136" y2="10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>

          <!-- Animated speed lines -->
          <div class="speed-lines-container mb-6 overflow-hidden h-5 flex flex-col gap-1">
            <div class="speed-line speed-line-1 h-0.5 bg-gradient-to-r from-transparent via-primary-400 to-transparent rounded-full opacity-70" />
            <div class="speed-line speed-line-2 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent rounded-full opacity-50 w-3/4" />
            <div class="speed-line speed-line-3 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent rounded-full opacity-60 w-1/2" />
          </div>

          <p class="animate-fade-in-up-delay-2 text-lg text-gray-300 mb-10 leading-relaxed max-w-xl">
            Catalogue de 30+ modèles, comparateur côte à côte, cotes du marché et actualités — tout pour acheter au meilleur prix.
          </p>
          <div class="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/catalogue" class="btn-primary text-center text-base flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>
              Voir le catalogue
            </NuxtLink>
            <NuxtLink to="/comparateur" class="border-2 border-white/40 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 active:scale-95 transition-all duration-200 text-center text-base flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
              Comparer des modèles
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 flex flex-col items-center gap-2 animate-bounce">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </div>
    </section>

    <!-- Stats band -->
    <section class="bg-gray-900 border-y border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-gray-700">
          <div class="text-center" v-for="stat in stats" :key="stat.label">
            <p class="text-3xl font-bold text-primary-500">{{ stat.display }}</p>
            <p class="text-sm text-gray-400 mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Véhicules populaires -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="flex items-end justify-between mb-10">
        <div>
          <p class="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-2">Selection</p>
          <h2 class="text-3xl font-bold text-gray-900">Véhicules les mieux notés</h2>
        </div>
        <NuxtLink to="/catalogue" class="hidden md:flex items-center gap-1 text-primary-600 font-medium hover:text-primary-700 group">
          Tout voir
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CarCard v-for="car in topCars" :key="car._id" :car="adaptCar(car)" />
      </div>
      <div class="text-center mt-8 md:hidden">
        <NuxtLink to="/catalogue" class="btn-outline">Voir tous les modèles</NuxtLink>
      </div>
    </section>

    <!-- Catégories -->
    <section class="bg-gray-950 py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <p class="text-primary-500 font-semibold text-sm tracking-widest uppercase mb-2">Catégories</p>
          <h2 class="text-3xl font-bold text-white">Quel type de voiture cherchez-vous ?</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink
            v-for="cat in categoryCards"
            :key="cat.name"
            :to="`/catalogue?category=${cat.name}`"
            class="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-primary-500/50 transition-all duration-300"
          >
            <img :src="cat.image" :alt="cat.name" class="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-500 brightness-50 group-hover:brightness-75" />
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <div class="text-white mb-2">
                <component :is="cat.icon" class="w-8 h-8" />
              </div>
              <h3 class="font-bold text-white text-lg">{{ cat.name }}</h3>
              <p class="text-gray-300 text-sm mt-1">{{ cat.count }} modèles</p>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Comparateur CTA -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="relative rounded-3xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80" alt="Comparateur" class="absolute inset-0 w-full h-full object-cover brightness-30" />
        <div class="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-gray-900/80" />
        <div class="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p class="text-primary-400 font-semibold text-sm tracking-widest uppercase mb-3">Outil exclusif</p>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Comparez avant d'acheter</h2>
            <p class="text-gray-300 max-w-lg">
              Analysez côte à côte jusqu'à 3 véhicules : prix, consommation, puissance, équipements. Ne faites plus jamais le mauvais choix.
            </p>
          </div>
          <NuxtLink to="/comparateur" class="flex-shrink-0 bg-primary-600 hover:bg-primary-500 text-white font-bold px-10 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-primary-600/30 active:scale-95 whitespace-nowrap">
            Lancer le comparateur →
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Actualités -->
    <section class="bg-gray-50 py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-10">
          <div>
            <p class="text-primary-600 font-semibold text-sm tracking-widest uppercase mb-2">Actualités</p>
            <h2 class="text-3xl font-bold text-gray-900">Derniers articles</h2>
          </div>
          <NuxtLink to="/actualites" class="hidden md:flex items-center gap-1 text-primary-600 font-medium hover:text-primary-700 group">
            Voir tout
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
          </NuxtLink>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ArticleCard v-for="article in latestArticles" :key="article._id" :article="article" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { fetchCars, fetchArticles } from '~/composables/useSanity'

useHead({ title: 'Tunisiamotors.com - Prix, Catalogue et Comparateur de voitures' })

const { data: allCars } = await useAsyncData('cars', () => fetchCars())
const { data: allArticles } = await useAsyncData('articles', () => fetchArticles())

const topCars = computed(() =>
  (allCars.value ?? [])
    .slice()
    .sort((a: any, b: any) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, 4)
)

const latestArticles = computed(() => (allArticles.value ?? []).slice(0, 3))

// Adapt Sanity car shape to what CarCard expects (id, image)
const adaptCar = (car: any) => ({
  ...car,
  id: car._id,
  image: car.mainImage ?? '',
})

// Stats with counter animation
const stats = ref([
  { label: 'Modèles référencés', display: '0+' },
  { label: 'Marques disponibles', display: '0+' },
  { label: 'Prix en TND', display: '0%' },
  { label: 'Données actualisées', display: '0' },
])

onMounted(() => {
  nextTick(() => {
    const carCount = (allCars.value ?? []).length || 30
    const brandCount = new Set((allCars.value ?? []).map((c: any) => c.brand)).size || 15

    const targets = [
      { value: carCount, suffix: '+' },
      { value: brandCount, suffix: '+' },
      { value: 100, suffix: '%' },
      { value: 2026, suffix: '' },
    ]

    targets.forEach((t, i) => {
      const duration = 1200
      const steps = 40
      const increment = t.value / steps
      let step = 0
      const timer = setInterval(() => {
        step++
        const current = Math.min(Math.round(increment * step), t.value)
        stats.value[i].display = `${current}${t.suffix}`
        if (step >= steps) clearInterval(timer)
      }, duration / steps)
    })
  })
})

const categoryCards = computed(() => {
  const cars = allCars.value ?? []
  return [
    {
      name: 'SUV',
      count: cars.filter((c: any) => c.category === 'SUV').length,
      image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80',
      icon: { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l1 1h1m8-1V8l3 3 3-3v8m0 0l1-1h1v-6l-3-5H9"/></svg>` },
    },
    {
      name: 'Berline',
      count: cars.filter((c: any) => c.category === 'Berline').length,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&q=80',
      icon: { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 17V9a4 4 0 014-4h1l3-3h6l3 3h1a4 4 0 014 4v8"/></svg>` },
    },
    {
      name: 'Citadine',
      count: cars.filter((c: any) => c.category === 'Citadine').length,
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=600&q=80',
      icon: { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 17V9l4-5h10l4 5v8"/></svg>` },
    },
    {
      name: 'Compacte',
      count: cars.filter((c: any) => c.category === 'Compacte').length,
      image: 'https://images.unsplash.com/photo-1471954229671-af4d83d35d5c?w=600&q=80',
      icon: { template: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 17V10l5-6h10l5 6v7"/></svg>` },
    },
  ]
})
</script>

<style scoped>
@keyframes spin-slow {
  to { transform: rotate(360deg); }
}
@keyframes spin-reverse {
  to { transform: rotate(-360deg); }
}
.gear-spin {
  animation: spin-slow 8s linear infinite;
}
.gear-spin-reverse {
  animation: spin-reverse 6s linear infinite;
}

@keyframes slide-right {
  0%   { transform: translateX(-100%); opacity: 0; }
  20%  { opacity: 1; }
  80%  { opacity: 1; }
  100% { transform: translateX(120%); opacity: 0; }
}
.speed-line {
  animation: slide-right 2.2s ease-in-out infinite;
}
.speed-line-1 {
  animation-delay: 0s;
}
.speed-line-2 {
  animation-delay: 0.3s;
}
.speed-line-3 {
  animation-delay: 0.6s;
}
</style>
