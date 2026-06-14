<template>
  <header class="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <NuxtLink to="/" class="flex items-center">
          <img src="/logo-site.jpg" alt="Tunisiamotors.com" class="h-9 sm:h-10 w-auto" />
        </NuxtLink>

        <nav class="hidden md:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
            active-class="text-primary-600 bg-primary-50 hover:bg-primary-50 hover:text-primary-600"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <!-- Barre recherche desktop -->
        <form @submit.prevent="goSearch" class="hidden md:flex items-center bg-gray-100 rounded-xl px-3 py-1.5 gap-2 w-48 lg:w-64 focus-within:ring-2 focus-within:ring-primary-400 focus-within:bg-white transition-all">
          <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <input v-model="searchQ" type="text" placeholder="Rechercher..." class="bg-transparent text-sm outline-none w-full text-gray-700 placeholder-gray-400" />
        </form>

        <div class="flex items-center gap-3">
          <NuxtLink to="/comparateur" class="hidden md:flex btn-primary text-sm py-2 px-4 items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Comparer
          </NuxtLink>
          <button class="md:hidden p-2 rounded-lg text-gray-600" @click="menuOpen = !menuOpen">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!menuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <Transition name="dropdown">
        <div v-if="menuOpen" class="md:hidden border-t border-gray-100 py-3 space-y-1">
          <form @submit.prevent="goSearch" class="mx-3 mb-2 flex items-center bg-gray-100 rounded-xl px-3 py-2 gap-2">
            <svg class="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input v-model="searchQ" type="text" placeholder="Rechercher un véhicule..." class="bg-transparent text-sm outline-none w-full text-gray-700 placeholder-gray-400" />
          </form>
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block px-3 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium"
            @click="menuOpen = false"
          >
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
const menuOpen = ref(false)
const searchQ = ref('')
const router = useRouter()
const goSearch = () => {
  if (searchQ.value.trim()) {
    router.push(`/recherche?q=${encodeURIComponent(searchQ.value.trim())}`)
    searchQ.value = ''
    menuOpen.value = false
  }
}

const navLinks = [
  { to: '/voitures-neuves', label: 'Voitures neuves' },
  { to: '/recherche', label: 'Recherche' },
  { to: '/prix', label: 'Prix & Cotes' },
  { to: '/credit', label: 'Crédit auto' },
  { to: '/actualites', label: 'Actualités' },
]
</script>

<style scoped>
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.2s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
