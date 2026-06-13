<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1 bg-gray-50">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
