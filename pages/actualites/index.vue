<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Actualités & Guides</h1>
      <p class="text-gray-500 mt-2">Conseils d'achat, essais, analyses du marché automobile tunisien</p>
    </div>

    <!-- Catégories -->
    <div class="flex flex-wrap gap-3 mb-8">
      <button
        v-for="cat in ['Tous', ...articleCategories]"
        :key="cat"
        @click="activeCategory = cat"
        class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
        :class="activeCategory === cat ? 'bg-primary-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Article à la une -->
    <div v-if="featuredArticle" class="card mb-10 overflow-hidden">
      <NuxtLink :to="`/actualites/${featuredArticle.slug}`" class="group block md:flex">
        <div class="md:w-1/2 overflow-hidden">
          <img :src="featuredArticle.image" :alt="featuredArticle.title" class="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <div class="md:w-1/2 p-8 flex flex-col justify-center">
          <span class="badge bg-primary-600 text-white text-xs mb-4 w-fit">{{ featuredArticle.category }}</span>
          <h2 class="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-4">{{ featuredArticle.title }}</h2>
          <p class="text-gray-500 mb-6 line-clamp-3">{{ featuredArticle.excerpt }}</p>
          <div class="flex items-center gap-4 text-sm text-gray-400">
            <span>{{ featuredArticle.author }}</span>
            <span>·</span>
            <span>{{ formatDate(featuredArticle.date) }}</span>
            <span>·</span>
            <span>{{ featuredArticle.readTime }} min</span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Grille d'articles -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ArticleCard v-for="article in otherArticles" :key="article.id" :article="article" />
    </div>

    <div v-if="filteredArticles.length === 0" class="text-center py-20 text-gray-400">
      <p>Aucun article dans cette catégorie pour le moment.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { articles, articleCategories } from '~/data/news'

useHead({ title: 'Actualités - Guide Auto Tunisie' })

const activeCategory = ref('Tous')

const filteredArticles = computed(() =>
  activeCategory.value === 'Tous' ? articles : articles.filter(a => a.category === activeCategory.value)
)

const featuredArticle = computed(() => filteredArticles.value[0])
const otherArticles = computed(() => filteredArticles.value.slice(1))

const formatDate = (date: string) => new Date(date).toLocaleDateString('fr-TN', { day: 'numeric', month: 'long', year: 'numeric' })
</script>
