<template>
  <div>
    <!-- Hero -->
    <section class="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-900 text-white py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-3xl">
          <span class="badge bg-primary-600/30 text-primary-300 mb-4">🇹🇳 Le guide auto de référence en Tunisie</span>
          <h1 class="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            Trouvez la voiture idéale<br />
            <span class="text-primary-400">aux meilleurs prix</span>
          </h1>
          <p class="text-lg text-gray-300 mb-8 max-w-2xl">
            Catalogue complet, comparateur de véhicules, cotes officielles et actualités automobile. Tout pour prendre la bonne décision avant votre achat.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/catalogue" class="btn-primary text-center">
              Voir le catalogue →
            </NuxtLink>
            <NuxtLink to="/comparateur" class="btn-outline border-white text-white hover:bg-white/10 text-center">
              Comparer des modèles
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-white border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center" v-for="stat in stats" :key="stat.label">
            <p class="text-3xl font-bold text-primary-600">{{ stat.value }}</p>
            <p class="text-sm text-gray-500 mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Véhicules populaires -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Véhicules populaires</h2>
          <p class="text-gray-500 mt-1">Les modèles les mieux notés sur le marché tunisien</p>
        </div>
        <NuxtLink to="/catalogue" class="hidden md:block text-primary-600 font-medium hover:text-primary-700">
          Voir tout →
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CarCard v-for="car in topCars" :key="car.id" :car="car" />
      </div>
      <div class="text-center mt-8 md:hidden">
        <NuxtLink to="/catalogue" class="btn-outline">Voir tous les modèles</NuxtLink>
      </div>
    </section>

    <!-- Categories -->
    <section class="bg-gray-100 py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Parcourir par catégorie</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <NuxtLink
            v-for="cat in categoryCards"
            :key="cat.name"
            :to="`/catalogue?category=${cat.name}`"
            class="card p-6 text-center hover:border-primary-200 group"
          >
            <div class="text-4xl mb-3">{{ cat.icon }}</div>
            <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{{ cat.name }}</h3>
            <p class="text-sm text-gray-500 mt-1">{{ cat.count }} modèles</p>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Comparateur CTA -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 class="text-2xl md:text-3xl font-bold mb-3">Comparez avant d'acheter</h2>
            <p class="text-primary-100 max-w-xl">
              Notre comparateur vous permet d'analyser côte à côte jusqu'à 3 véhicules sur tous leurs critères : prix, consommation, équipements et plus encore.
            </p>
          </div>
          <NuxtLink to="/comparateur" class="flex-shrink-0 bg-white text-primary-600 font-bold px-8 py-4 rounded-xl hover:bg-primary-50 transition-colors">
            Lancer le comparateur
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Actualités -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">Dernières actualités</h2>
          <p class="text-gray-500 mt-1">Conseils, essais et analyses du marché tunisien</p>
        </div>
        <NuxtLink to="/actualites" class="hidden md:block text-primary-600 font-medium hover:text-primary-700">
          Voir tout →
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ArticleCard v-for="article in latestArticles" :key="article.id" :article="article" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { cars } from '~/data/cars'
import { articles } from '~/data/news'

useHead({ title: 'Guide Auto Tunisie - Prix, Catalogue et Comparateur de voitures' })

const topCars = cars.slice().sort((a, b) => b.rating - a.rating).slice(0, 4)
const latestArticles = articles.slice(0, 3)

const stats = [
  { value: '8+', label: 'Marques référencées' },
  { value: '20+', label: 'Modèles disponibles' },
  { value: '100%', label: 'Prix en TND' },
  { value: 'Live', label: 'Mis à jour régulièrement' },
]

const categoryCards = [
  { name: 'SUV', icon: '🚙', count: cars.filter(c => c.category === 'SUV').length },
  { name: 'Berline', icon: '🚗', count: cars.filter(c => c.category === 'Berline').length },
  { name: 'Citadine', icon: '🚘', count: cars.filter(c => c.category === 'Citadine').length },
  { name: 'Compacte', icon: '🚖', count: cars.filter(c => c.category === 'Compacte').length },
]
</script>
