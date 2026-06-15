<template>
  <footer class="bg-gray-900 text-gray-400 mt-20">

    <!-- Bande logo : fond blanc à gauche, courbe vers le noir à droite -->
    <div class="relative overflow-hidden bg-gray-900">
      <!-- Zone blanche avec courbe SVG sur le bord droit -->
      <div class="absolute inset-0 bg-white" style="clip-path: ellipse(38% 100% at 0% 50%);" />
      <!-- SVG courbe de transition -->
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 L520,0 Q580,0 600,50 Q620,100 680,100 L0,100 Z" fill="white"/>
      </svg>
      <!-- Logo -->
      <div class="relative z-10 max-w-7xl mx-auto px-8 py-6">
        <NuxtLink to="/">
          <img src="/logo-site.jpg" alt="Tunisiamotors.com" class="h-11 w-auto" />
        </NuxtLink>
      </div>
    </div>

    <!-- Contenu footer -->
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
