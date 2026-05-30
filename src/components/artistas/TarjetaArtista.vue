<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { PropType } from 'vue'

const props = defineProps({
  artista: {
    type: Object as PropType<{
      id: number
      nombre: string
      disciplina: string
      bio: string
      actividades: string[]
      imagen: string
    }>,
    required: true,
  },
})
</script>

<template>
  <RouterLink
    :to="`/artistas/${artista.id}`"
    class="group relative block overflow-hidden"
  >
    <!-- IMAGEN -->
    <img
      :src="artista.imagen"
      :alt="artista.nombre"
      class="w-full h-125 object-top object-cover transition duration-500 hover:scale-110"
    />

    <!-- OVERLAY -->
    <div
      class="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#F22E2E] transition duration-300 flex items-center justify-center p-6 pointer-events-none z-10"
      style="width:100%;height:100%;"
    >
      <h3 class="text-white text-3xl font-black uppercase text-center">
        {{ artista.nombre }}
      </h3>
    </div>
  </RouterLink>
</template>