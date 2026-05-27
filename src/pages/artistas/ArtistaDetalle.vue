<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { artistas } from '@/components/data/artistas'
import { ChevronLeft, ChevronRight, LayoutGrid } from 'lucide-vue-next'
import { actividadesArtista, t, textoArtista } from '@/components/data/idiomas'

const route = useRoute()

const artistaIndex = computed(() => {
  const slug = Number(route.params.slug)

  return artistas.findIndex(artista => artista.id === slug)
})

const artista = computed(() => {
  return artistaIndex.value >= 0 ? artistas[artistaIndex.value] : undefined
})

const anterior = computed(() => {
  return artistaIndex.value > 0 ? artistas[artistaIndex.value - 1] : undefined
})

const siguiente = computed(() => {
  return artistaIndex.value >= 0 && artistaIndex.value < artistas.length - 1
    ? artistas[artistaIndex.value + 1]
    : undefined
})
</script>

<template>
  <section
    v-if="artista"
    class="bg-white text-black min-h-screen px-14 py-10"
  >
    <!-- NAV TOP -->
    <div class="flex items-center justify-between mb-20">

      <!-- volver a artistas -->
      <RouterLink
        to="/artistas"
        class="hover:opacity-60 transition"
      >
        <LayoutGrid class="w-8 h-8" />
      </RouterLink>

      <!-- flechas -->
      <div class="flex gap-4">
        <RouterLink
          v-if="anterior"
          :to="`/artistas/${anterior.id}`"
          class="hover:opacity-60 transition"
        >
          <ChevronLeft class="w-10 h-10" />
        </RouterLink>

        <RouterLink
          v-if="siguiente"
          :to="`/artistas/${siguiente.id}`"
          class="hover:opacity-60 transition"
        >
          <ChevronRight class="w-10 h-10" />
        </RouterLink>
      </div>

    </div>

    <!-- CONTENIDO -->
    <div class="grid grid-cols-3 gap-8 items-start">

      <!-- IMAGEN -->
      <div>
        <img
          :src="artista.imagen"
          :alt="artista.nombre"
          class="w-full h-auto object-contain"
        />
      </div>

      <!-- TEXTO -->
      <div>
        <h2 class="text-5xl font-black uppercase mb-4">
          {{ artista.nombre }}
        </h2>

        <p class="italic font-extralight text-black uppercase mb-6">
          {{ artista.dia }}
        </p>

        <p class="text-lg font-medium text-black mb-4">
          {{ textoArtista(artista, 'disciplina') }}
        </p>

        <p class="text-lg text-black mb-8">
          {{ textoArtista(artista, 'bio') }}
        </p>

        <div>
          <h3 class="text-2xl font-black uppercase mb-4">
            {{ t('artistas.actividades') }}
          </h3>

          <ul class="space-y-2 font-light">
            <li
              v-for="actividad in actividadesArtista(artista)"
              :key="actividad"
            >
              • {{ actividad }}
            </li>
          </ul>
        </div>
      </div>

      <!-- SPOTIFY -->
      <div v-if="artista.spotifyEmbed" class="h-full">
        <iframe
          :src="artista.spotifyEmbed"
          width="100%"
          height="352"
          frameborder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          class="rounded-xl"
        />
      </div>

    </div>

    <!-- YOUTUBE -->
    <div
      v-if="artista.youtubeEmbed"
      class="mt-20"
    >
      <iframe
        width="100%"
        height="600"
        :src="artista.youtubeEmbed"
        :title="t('artistas.videoYoutube')"
        frameborder="0"
        allowfullscreen
        class="rounded-xl"
      />
    </div>

  </section>
</template>
