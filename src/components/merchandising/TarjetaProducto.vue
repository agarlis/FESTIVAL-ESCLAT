<script setup lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
import { t } from '@/components/data/idiomas'

const props = defineProps({
  producto: {
    type: Object as PropType<{
      id: number
      nombre: string
      precio: string
      imagen?: string
      imagenHover?: string
      variantes?: { color: string; imagen: string }[]
      galeria?: { color: string; imagen: string }[]
      tallas?: string[]
    }>,
    required: true,
  },
})

const imagenPrincipal = computed(
  () =>
    props.producto.imagen ??
    props.producto.variantes?.[0]?.imagen ??
    props.producto.galeria?.[0]?.imagen ??
    ''
)

const imagenHover = computed(
  () =>
    props.producto.imagenHover ??
    props.producto.galeria?.[1]?.imagen ??
    props.producto.variantes?.[1]?.imagen ??
    props.producto.variantes?.[0]?.imagen ??
    props.producto.galeria?.[0]?.imagen ??
    props.producto.imagen ??
    ''
)
</script>

<template>
  <RouterLink
    :to="`/producto/${props.producto.id}`"
    class="block text-center group px-2"
  >
    <div class="relative w-full h-70 sm:h-70 md:h-64 mb-4 md:mb-6 overflow-hidden">

      <img
        :src="imagenPrincipal"
        :alt="t(`merchandising.productos.${props.producto.id}`)"
        class="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
      />

      <img
        :src="imagenHover"
        :alt="t(`merchandising.productos.${props.producto.id}`)"
        class="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

    </div>

    <h3
      class="text-lg sm:text-xl font-black uppercase text-[#F22E2E] transition-all group-hover:underline leading-tight"
    >
      {{ t(`merchandising.productos.${props.producto.id}`) }}
    </h3>

    <p
      class="italic text-sm sm:text-base font-light mt-2 text-black"
    >
      {{ props.producto.precio }}
    </p>

  </RouterLink>
</template>