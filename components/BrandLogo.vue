<template>
  <div class="w-full h-full flex items-center justify-center bg-white p-1.5">
    <img
      v-if="logoUrl && !failed"
      :src="logoUrl"
      :alt="brand"
      class="w-full h-full object-contain"
      @error="failed = true"
    />
    <span v-else class="font-bold text-sm select-none" :style="{ color: brandColor ?? '#374151' }">
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
  Toyota:      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Toyota.svg/200px-Toyota.svg.png',
  Volkswagen:  'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png',
  Dacia:       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/New_Dacia_Logo.svg/200px-New_Dacia_Logo.svg.png',
  Hyundai:     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png',
  Renault:     'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Renault_2021_Text.svg/200px-Renault_2021_Text.svg.png',
  Kia:         'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kia-logo.svg/200px-Kia-logo.svg.png',
  Peugeot:     'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Peugeot_2021_Logo.svg/200px-Peugeot_2021_Logo.svg.png',
  Suzuki:      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Suzuki_logo_2.svg/200px-Suzuki_logo_2.svg.png',
  Chery:       'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Chery_logo.svg/200px-Chery_logo.svg.png',
  MG:          'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/MG_Motor_logo.svg/200px-MG_Motor_logo.svg.png',
  Fiat:        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Fiat_Logo.svg/200px-Fiat_Logo.svg.png',
  Seat:        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/SEAT_logo.svg/200px-SEAT_logo.svg.png',
  Skoda:       'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Skoda_auto_logo.svg/200px-Skoda_auto_logo.svg.png',
  Ford:        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/200px-Ford_logo_flat.svg.png',
  BMW:         'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png',
  Mercedes:    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/200px-Mercedes-Logo.svg.png',
  Nissan:      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Nissan_2020_logo.svg/200px-Nissan_2020_logo.svg.png',
  Mitsubishi:  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Mitsubishi_logo.svg/200px-Mitsubishi_logo.svg.png',
  BYD:         'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/BYD_Auto_logo.svg/200px-BYD_Auto_logo.svg.png',
}

const logoUrl = computed(() => logoMap[props.brand] ?? '')
</script>
