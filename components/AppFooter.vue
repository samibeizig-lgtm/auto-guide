<template>
  <footer class="bg-gray-900 text-gray-400 mt-20">

    <!-- Bande logo : fond blanc à gauche, courbe convexe vers le noir à droite -->
    <div class="relative bg-gray-900" style="height:90px">
      <svg class="absolute inset-0 w-full h-full" viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Vague en S juste après le logo (~320px) -->
        <path d="M0,0 L320,0 C390,0 250,90 320,90 L0,90 Z" fill="white"/>
      </svg>
      <div class="relative z-10 h-full flex items-center px-8">
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
