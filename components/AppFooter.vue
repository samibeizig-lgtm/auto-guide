<template>
  <footer class="bg-gray-900 text-gray-400 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="mb-4">
            <img src="/logo-site.jpg" alt="Tunisiamotors.com" class="h-10 w-auto brightness-0 invert" />
          </div>
          <p class="text-sm leading-relaxed mb-4">
            Votre référence automobile en Tunisie. Voitures neuves, comparateurs, prix et actualités pour vous aider à faire le meilleur choix.
          </p>
          <p class="text-xs">© {{ new Date().getFullYear() }} Tunisiamotors.com. Tous droits réservés.</p>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Navigation</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/voitures-neuves" class="hover:text-primary-400 transition-colors">Voitures neuves</NuxtLink></li>
            <li><NuxtLink to="/comparateur" class="hover:text-primary-400 transition-colors">Comparateur</NuxtLink></li>
            <li><NuxtLink to="/prix" class="hover:text-primary-400 transition-colors">Prix & Cotes</NuxtLink></li>
            <li><NuxtLink to="/credit" class="hover:text-primary-400 transition-colors">Crédit auto</NuxtLink></li>
            <li><NuxtLink to="/actualites" class="hover:text-primary-400 transition-colors">Actualités</NuxtLink></li>
            <li><NuxtLink to="/informations-utiles" class="hover:text-primary-400 transition-colors">Informations utiles</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">Catégories</h3>
          <ul class="space-y-2 text-sm">
            <li><NuxtLink to="/voitures-neuves?category=SUV" class="hover:text-primary-400 transition-colors">SUV</NuxtLink></li>
            <li><NuxtLink to="/voitures-neuves?category=Berline" class="hover:text-primary-400 transition-colors">Berlines</NuxtLink></li>
            <li><NuxtLink to="/voitures-neuves?category=Citadine" class="hover:text-primary-400 transition-colors">Citadines</NuxtLink></li>
            <li><NuxtLink to="/voitures-neuves?category=Compacte" class="hover:text-primary-400 transition-colors">Compactes</NuxtLink></li>
            <li><NuxtLink to="/voitures-neuves?category=Électrique" class="hover:text-primary-400 transition-colors">Électriques</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
