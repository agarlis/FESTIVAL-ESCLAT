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
  <main>
    <section class="px-4 sm:px-6 md:px-8 lg:px-10 text-center pb-10 md:pb-16">

        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-bold py-6 md:py-8"
        >
          {{ t('artistas.titulo') }}
        </h1>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
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
          class="mt-8 md:mt-12"
          @update:current-page="currentPage = $event"
        />
      </section>
  </main>
</template>