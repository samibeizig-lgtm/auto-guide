<template>
  <div
    class="w-full h-full flex items-center justify-center rounded-xl overflow-hidden"
    :style="{ backgroundColor: failed ? brandColor : 'white' }"
  >
    <img
      v-if="!failed"
      :src="logoUrl"
      :alt="brand"
      class="w-10 h-10 object-contain"
      @error="failed = true"
    />
    <span v-else class="font-bold text-white text-lg select-none">
      {{ brand.slice(0, 2).toUpperCase() }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  brand: string
  brandColor?: string
}>()

const failed = ref(false)

const domainMap: Record<string, string> = {
  Toyota: 'toyota.com',
  Volkswagen: 'volkswagen.com',
  Dacia: 'dacia.com',
  Hyundai: 'hyundai.com',
  Renault: 'renault.com',
  Kia: 'kia.com',
  Peugeot: 'peugeot.com',
  Suzuki: 'suzuki.com',
  Chery: 'chery.com',
  MG: 'mgmotor.com',
  Fiat: 'fiat.com',
  Seat: 'seat.com',
  Skoda: 'skoda-auto.com',
  Ford: 'ford.com',
  BMW: 'bmw.com',
  Mercedes: 'mercedes-benz.com',
  Nissan: 'nissan-global.com',
  Mitsubishi: 'mitsubishi-motors.com',
  BYD: 'byd.com',
}

const logoUrl = computed(() => {
  const domain = domainMap[props.brand]
  return domain ? `https://logo.clearbit.com/${domain}` : ''
})
</script>
