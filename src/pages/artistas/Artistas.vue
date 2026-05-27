<script setup lang="ts">
import { computed, ref } from 'vue'
import TarjetaArtista from '@/components/artistas/TarjetaArtista.vue'
import Pagination from '@/components/ui/pagination'
import { artistas } from '@/components/data/artistas'
import { t } from '@/components/data/idiomas'

const perPage = 6
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(artistas.length / perPage))

const artistasPaginados = computed(() => {
  const start = (currentPage.value - 1) * perPage

  return artistas.slice(start, start + perPage)
})
</script>

<template>
  <section class="px-10 text-center pb-16">
    <h1 class="text-5xl font-bold py-8">
      {{ t('artistas.titulo') }}
    </h1>

    <div class="grid grid-cols-3 gap-8">
      <TarjetaArtista
        v-for="artista in artistasPaginados"
        :key="artista.id"
        :artista="artista"
      />
    </div>

    <Pagination
      v-if="totalPages > 1"
      :current-page="currentPage"
      :total-pages="totalPages"
      class="mt-12"
      @update:current-page="currentPage = $event"
    />
  </section>
</template>
