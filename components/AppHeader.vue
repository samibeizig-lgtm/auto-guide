<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="isTransparent ? 'bg-transparent' : 'bg-white shadow-sm border-b border-gray-100'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center gap-2.5 group">
          <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center group-hover:bg-primary-500 transition-colors shadow-sm">
            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-6a1 1 0 00-.293-.707l-3-3A1 1 0 0016 4H3z"/>
            </svg>
          </div>
          <div>
            <span class="font-bold text-lg leading-none" :class="isTransparent ? 'text-white' : 'text-gray-900'">Guide Auto</span>
            <span class="block text-xs font-medium text-primary-500 leading-none mt-0.5">Tunisie</span>
          </div>
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            :class="isTransparent
              ? 'text-white/80 hover:text-white hover:bg-white/10'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'"
            active-class="!text-primary-600 !bg-primary-50"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="flex items-center gap-3">
          <NuxtLink to="/comparateur" class="hidden md:flex btn-primary text-sm py-2 px-4 items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Comparer
          </NuxtLink>
          <button
            class="md:hidden p-2 rounded-lg"
            :class="isTransparent ? 'text-white' : 'text-gray-600'"
            @click="menuOpen = !menuOpen"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <Transition name="dropdown">
        <div v-if="menuOpen" class="md:hidden border-t border-gray-100 py-3 space-y-1 bg-white">
          <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="block px-3 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium" @click="menuOpen = false">
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/comparateur" class="block mx-3 mt-2 btn-primary text-center text-sm py-2.5" @click="menuOpen = false">
            Comparer des véhicules
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)
const scrolled = ref(false)

const isHome = computed(() => route.path === '/')
const isTransparent = computed(() => isHome.value && !scrolled.value)

const navLinks = [
  { to: '/catalogue', label: 'Catalogue' },
  { to: '/prix', label: 'Prix & Cotes' },
  { to: '/actualites', label: 'Actualités' },
]

onMounted(() => {
  const onScroll = () => { scrolled.value = window.scrollY > 60 }
  window.addEventListener('scroll', onScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
})
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.2s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
