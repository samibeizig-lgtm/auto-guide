<template>
  <footer class="bg-gray-900 text-gray-400 mt-20">

    <!-- Bande logo fond blanc avec courbure -->
    <div class="relative bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-center">
        <NuxtLink to="/">
          <img src="/logo-site.jpg" alt="Tunisiamotors.com" class="h-12 w-auto" />
        </NuxtLink>
      </div>
      <!-- Courbure bas -->
      <svg class="w-full block" style="margin-bottom:-1px" viewBox="0 0 1440 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 C360,48 1080,48 1440,0 L1440,48 L0,48 Z" fill="#111827"/>
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

        <div>
          <p class="text-sm leading-relaxed">
            Votre référence automobile en Tunisie. Voitures neuves, comparateurs, prix et actualités pour vous aider à faire le meilleur choix.
          </p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/voitures-neuves" class="hover:text-orange-400 transition-colors">Voitures neuves</NuxtLink></li>
            <li><NuxtLink to="/comparateur" class="hover:text-orange-400 transition-colors">Comparateur</NuxtLink></li>
            <li><NuxtLink to="/prix" class="hover:text-orange-400 transition-colors">Prix & Cotes</NuxtLink></li>
            <li><NuxtLink to="/credit" class="hover:text-orange-400 transition-colors">Crédit auto</NuxtLink></li>
            <li><NuxtLink to="/actualites" class="hover:text-orange-400 transition-colors">Actualités</NuxtLink></li>
            <li><NuxtLink to="/informations-utiles" class="hover:text-orange-400 transition-colors">Informations utiles</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Catégories</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/voitures-neuves?category=SUV" class="hover:text-orange-400 transition-colors">SUV</NuxtLink></li>
            <li><NuxtLink to="/voitures-neuves?category=Berline" class="hover:text-orange-400 transition-colors">Berlines</NuxtLink></li>
            <li><NuxtLink to="/voitures-neuves?category=Citadine" class="hover:text-orange-400 transition-colors">Citadines</NuxtLink></li>
            <li><NuxtLink to="/voitures-neuves?category=Compacte" class="hover:text-orange-400 transition-colors">Compactes</NuxtLink></li>
            <li><NuxtLink to="/voitures-neuves?category=Électrique" class="hover:text-orange-400 transition-colors">Électriques</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-6 text-center text-xs">
        © {{ new Date().getFullYear() }} Tunisiamotors.com. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>
