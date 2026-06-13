<template>
  <NuxtLink :to="`/actualites/${article.slug}`" class="card group block">
    <div class="relative overflow-hidden h-48">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <span class="absolute top-3 left-3 badge bg-primary-600 text-white text-xs">{{ article.category }}</span>
    </div>
    <div class="p-5">
      <div class="flex items-center gap-3 text-xs text-gray-400 mb-3">
        <span>{{ formatDate(article.date) }}</span>
        <span>·</span>
        <span>{{ article.readTime }} min de lecture</span>
      </div>
      <h3 class="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
        {{ article.title }}
      </h3>
      <p class="text-sm text-gray-500 line-clamp-2">{{ article.excerpt }}</p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Article } from '~/data/news'

defineProps<{ article: Article }>()

const formatDate = (date: string) => new Date(date).toLocaleDateString('fr-TN', { day: 'numeric', month: 'long', year: 'numeric' })
</script>
