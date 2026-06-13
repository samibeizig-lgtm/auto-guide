<template>
  <footer class="bg-gray-900 text-gray-400 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span class="font-bold text-lg text-white">Guide Auto Tunisie</span>
          </div>
          <p class="text-sm leading-relaxed mb-4">
            Votre référence automobile en Tunisie. Catalogues, comparateurs, prix et actualités pour vous aider à faire le meilleur choix.
          </p>
          <p class="text-xs">© {{ new Date().getFullYear() }} Guide Auto Tunisie. Tous droits réservés.</p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/catalogue" class="hover:text-primary-400 transition-colors">Catalogue</NuxtLink></li>
            <li><NuxtLink to="/comparateur" class="hover:text-primary-400 transition-colors">Comparateur</NuxtLink></li>
            <li><NuxtLink to="/prix" class="hover:text-primary-400 transition-colors">Prix & Cotes</NuxtLink></li>
            <li><NuxtLink to="/actualites" class="hover:text-primary-400 transition-colors">Actualités</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Catégories</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/catalogue?category=SUV" class="hover:text-primary-400 transition-colors">SUV</NuxtLink></li>
            <li><NuxtLink to="/catalogue?category=Berline" class="hover:text-primary-400 transition-colors">Berlines</NuxtLink></li>
            <li><NuxtLink to="/catalogue?category=Citadine" class="hover:text-primary-400 transition-colors">Citadines</NuxtLink></li>
            <li><NuxtLink to="/catalogue?category=Compacte" class="hover:text-primary-400 transition-colors">Compactes</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
