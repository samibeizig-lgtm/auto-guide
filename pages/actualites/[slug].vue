<template>
  <div v-if="article" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="mb-6">
      <NuxtLink to="/actualites" class="text-sm text-primary-600 hover:underline">← Retour aux actualités</NuxtLink>
    </div>

    <div class="mb-6">
      <span class="badge bg-primary-600 text-white text-sm mb-4 inline-block">{{ article.category }}</span>
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ article.title }}</h1>
      <div class="flex items-center gap-4 text-sm text-gray-400">
        <span class="font-medium text-gray-600">{{ article.author }}</span>
        <span>·</span>
        <span>{{ formatDate(article.date) }}</span>
        <span>·</span>
        <span>{{ article.readTime }} min de lecture</span>
      </div>
    </div>

    <div class="rounded-2xl overflow-hidden h-80 mb-10">
      <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
    </div>

    <div class="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-primary-600" v-html="renderedContent" />

    <div class="mt-10 pt-8 border-t border-gray-100">
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in article.tags" :key="tag" class="badge bg-gray-100 text-gray-600 text-sm">{{ tag }}</span>
      </div>
    </div>

    <!-- Autres articles -->
    <div class="mt-12">
      <h2 class="text-xl font-bold text-gray-900 mb-6">À lire également</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ArticleCard v-for="other in otherArticles" :key="other.id" :article="other" />
      </div>
    </div>
  </div>

  <div v-else class="text-center py-20">
    <p class="text-gray-500">Article introuvable</p>
    <NuxtLink to="/actualites" class="btn-primary mt-4 inline-block">Retour aux actualités</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { articles } from '~/data/news'

const route = useRoute()
const article = computed(() => articles.find(a => a.slug === route.params.slug))

useHead(() => ({
  title: article.value ? `${article.value.title} - Guide Auto Tunisie` : 'Guide Auto Tunisie',
}))

const formatDate = (date: string) => new Date(date).toLocaleDateString('fr-TN', { day: 'numeric', month: 'long', year: 'numeric' })

const renderedContent = computed(() => {
  if (!article.value) return ''
  return article.value.content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>')
})

const otherArticles = computed(() =>
  articles.filter(a => a.slug !== route.params.slug).slice(0, 2)
)
</script>
