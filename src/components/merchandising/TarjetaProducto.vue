<script setup lang="ts">
import type { PropType } from 'vue'
import { t } from '@/components/data/idiomas'

const props = defineProps({
  producto: {
    type: Object as PropType<{
      id: number
      nombre: string
      precio: string
      imagen: string
      imagenHover?: string
      tallas?: string[]
    }>,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    :to="`/producto/${props.producto.id}`"
    class="block text-center group"
  >
    <div class="relative w-full h-64 mb-6 overflow-hidden">

      <img
        :src="props.producto.imagen"
        :alt="t(`merchandising.productos.${props.producto.id}`)"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />

      <img
        :src="props.producto.imagenHover ?? props.producto.imagen"
        :alt="t(`merchandising.productos.${props.producto.id}`)"
        class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

    </div>

    <h3
      class="text-xl font-black uppercase text-[#F22E2E] transition-all group-hover:underline"
    >
      {{ t(`merchandising.productos.${props.producto.id}`) }}
    </h3>

    <p
      class="italic text-m font-light mt-2 text-black"
    >
      {{ props.producto.precio }}
    </p>

  </RouterLink>
</template>