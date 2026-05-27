<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { eventos } from '@/components/data/eventos'
import InscripcionModal from '@/components/programa/InscripciónModelo.vue'
import { ArrowLeft, Clock3, MapPin, Users, CalendarDays } from 'lucide-vue-next'
import { t, textoEvento } from '@/components/data/idiomas'

const route = useRoute()

const evento = eventos.find(
  e => e.slug === route.params.slug
)

const volverPrograma = computed(() => ({
  name: 'programa',
  query: route.query,
}))

const modalAbierto = ref(false)

const abrirInscripcion = () => {
  modalAbierto.value = true
}
</script>

<template>
  <main
    v-if="evento"
    class="bg-white text-black min-h-screen px-10 py-10"
  >
    <section class="max-w-6xl mx-auto">

      <!-- volver -->
      <RouterLink
        :to="volverPrograma"
        class="flex items-center gap-3 uppercase font-bold text-sm hover:opacity-60 transition"
      >
        <ArrowLeft class="w-5 h-5" />
        {{ t('programa.volver') }}
      </RouterLink>

      <!-- hero -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10 items-start">

        <!-- izquierda -->
        <div>

          <p class="italic font-light text-sm mb-4">
            {{ textoEvento(evento, 'dia') }} · {{ textoEvento(evento, 'categoria') }}
          </p>

          <h1 class="text-7xl font-black uppercase leading-none">
            {{ textoEvento(evento, 'titulo') }}
          </h1>

          <p class="text-lg leading-relaxed mt-10 max-w-xl">
            {{ textoEvento(evento, 'descripcion') }}
          </p>

          <div class="grid grid-cols-2 gap-6 mt-12">

            <div class="border border-black p-5">
              <Clock3 class="w-5 h-5 mb-3" />
              <p class="text-xs uppercase opacity-60">{{ t('programa.hora') }}</p>
              <p class="font-bold text-xl">{{ evento.hora }}</p>
            </div>

            <div class="border border-black p-5">
              <MapPin class="w-5 h-5 mb-3" />
              <p class="text-xs uppercase opacity-60">{{ t('programa.espacio') }}</p>
              <p class="font-bold text-xl">{{ evento.espacio }}</p>
            </div>

            <div class="border border-black p-5">
              <CalendarDays class="w-5 h-5 mb-3" />
              <p class="text-xs uppercase opacity-60">{{ t('programa.duracion') }}</p>
              <p class="font-bold text-xl">{{ evento.duracion }}</p>
            </div>

            <div class="border border-black p-5">
              <Users class="w-5 h-5 mb-3" />
              <p class="text-xs uppercase opacity-60">{{ t('programa.acceso') }}</p>
              <p class="font-bold text-xl">
                {{ evento.inscripcion ? t('programa.aforoLimitado') : t('programa.libreAcceso') }}
              </p>
            </div>

          </div>

          <button
            v-if="evento.inscripcion"
            type="button"
            @click="abrirInscripcion"
            class="mt-10 bg-black text-white px-10 py-5 uppercase font-black hover:opacity-80 transition"
          >
            {{ t('programa.inscribirme') }}
          </button>

        </div>

        <!-- derecha -->
        <div class="aspect-4/5 overflow-hidden">

        <!-- CONCIERTOS -->
        <img
            v-if="evento.categoriaSlug === 'concierto' && evento.imagen"
            :src="evento.imagen"
            :alt="textoEvento(evento, 'titulo')"
            class="w-full h-full object-contain object-center"
        />
        
        <!-- fallback -->
        <div
            v-else
            class="w-full h-full bg-black flex items-center justify-center"
        >
            <h2 class="text-white text-5xl font-black uppercase text-center px-10">
            {{ textoEvento(evento, 'titulo') }}
            </h2>
        </div>

        </div>

      </section>

    </section>
  </main>

  <InscripcionModal
    :abierto="modalAbierto"
    :evento="evento"
    @cerrar="modalAbierto = false"
  />
</template>
