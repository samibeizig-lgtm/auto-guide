<template>
  <div class="w-full h-full bg-white flex items-center justify-center p-2">
    <img
      v-if="!failed"
      :src="logoUrl"
      :alt="brand"
      class="w-full h-full object-contain"
      @error="failed = true"
    />
    <span
      v-else
      class="font-bold text-sm select-none"
      :style="{ color: brandColor ?? '#374151' }"
    >
      {{ brand.slice(0, 3).toUpperCase() }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  brand: string
  brandColor?: string
}>()

const failed = ref(false)

const logoMap: Record<string, string> = {
  Toyota:     '/logos/toyota.svg',
  Volkswagen: '/logos/volkswagen.svg',
  Dacia:      '/logos/dacia.svg',
  Hyundai:    '/logos/hyundai.svg',
  Renault:    '/logos/renault.svg',
  Kia:        '/logos/kia.svg',
  Peugeot:    '/logos/peugeot.svg',
  Suzuki:     '/logos/suzuki.svg',
  Chery:      '/logos/chery.svg',
  MG:         '/logos/mg.svg',
  Fiat:       '/logos/fiat.svg',
  Seat:       '/logos/seat.svg',
  Skoda:      '/logos/skoda.svg',
  Ford:       '/logos/ford.svg',
  BMW:        '/logos/bmw.png',
  Mercedes:   '/logos/mercedes.svg',
  Nissan:     '/logos/nissan.svg',
  Mitsubishi: '/logos/mitsubishi.svg',
  BYD:        '/logos/byd.svg',
}

const logoUrl = computed(() => logoMap[props.brand] ?? '')
</script>
