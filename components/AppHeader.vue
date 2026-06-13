<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-2">
          <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <span class="font-bold text-xl text-gray-900">Guide Auto <span class="text-primary-600">Tunisie</span></span>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-8">
          <NuxtLink to="/catalogue" class="text-gray-600 hover:text-primary-600 font-medium transition-colors" active-class="text-primary-600">Catalogue</NuxtLink>
          <NuxtLink to="/comparateur" class="text-gray-600 hover:text-primary-600 font-medium transition-colors" active-class="text-primary-600">Comparateur</NuxtLink>
          <NuxtLink to="/prix" class="text-gray-600 hover:text-primary-600 font-medium transition-colors" active-class="text-primary-600">Prix & Cotes</NuxtLink>
          <NuxtLink to="/actualites" class="text-gray-600 hover:text-primary-600 font-medium transition-colors" active-class="text-primary-600">Actualités</NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <NuxtLink to="/comparateur" class="hidden md:flex btn-primary text-sm py-2 px-4 items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Comparer
          </NuxtLink>
          <button class="md:hidden p-2 text-gray-600" @click="menuOpen = !menuOpen">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="menuOpen" class="md:hidden border-t border-gray-100 py-3 space-y-1">
        <NuxtLink to="/catalogue" class="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg" @click="menuOpen = false">Catalogue</NuxtLink>
        <NuxtLink to="/comparateur" class="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg" @click="menuOpen = false">Comparateur</NuxtLink>
        <NuxtLink to="/prix" class="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg" @click="menuOpen = false">Prix & Cotes</NuxtLink>
        <NuxtLink to="/actualites" class="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg" @click="menuOpen = false">Actualités</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
</script>
