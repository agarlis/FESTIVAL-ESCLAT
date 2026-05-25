<script setup lang="ts">
import type { PropType } from 'vue'

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
        :alt="props.producto.nombre"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />

      <img
        :src="props.producto.imagenHover ?? props.producto.imagen"
        :alt="props.producto.nombre"
        class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

    </div>

    <h3 class="text-xl font-black uppercase transition-all group-hover:underline">
      {{ props.producto.nombre }}
    </h3>

    <p class="italic text-m font-light mt-2">
      {{ props.producto.precio }}
    </p>
  </RouterLink>
</template>