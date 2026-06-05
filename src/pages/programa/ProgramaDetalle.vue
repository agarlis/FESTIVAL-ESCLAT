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

const colorDia = computed(() => {
  if (!evento) return '#000000'

  if (evento.diaSlug === 'viernes') return '#0669BF'
  if (evento.diaSlug === 'sabado') return '#F22E2E'
  if (evento.diaSlug === 'domingo') return '#F25EA3'

  return '#000000'
})
</script>

<template>
  <main
    v-if="evento"
    class="bg-white text-black min-h-screen px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-10"
  >
    <section class="max-w-6xl mx-auto">

      <!-- VOLVER -->
      <RouterLink
        :to="volverPrograma"
        class="flex items-center gap-2 md:gap-3 uppercase font-bold text-xs sm:text-sm hover:opacity-60 transition"
      >
        <ArrowLeft class="w-5 h-5" />
        {{ t('programa.volver') }}
      </RouterLink>

      <!-- HERO -->
      <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 mt-8 md:mt-10 items-start">

        <!-- IZQUIERDA -->
        <div>

          <p class="italic font-light text-xs sm:text-sm mb-4">
            {{ textoEvento(evento, 'dia') }} · {{ textoEvento(evento, 'categoria') }}
          </p>

          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none"
            :style="{ color: colorDia }"
          >
            {{ textoEvento(evento, 'titulo') }}
          </h1>

          <p class="text-base sm:text-lg leading-relaxed mt-6 md:mt-10 max-w-xl">
            {{ textoEvento(evento, 'descripcion') }}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">

            <div class="bg-white border border-black p-4 md:p-5">
              <Clock3 class="w-5 h-5 mb-3" />

              <p class="text-xs uppercase opacity-60">
                {{ t('programa.hora') }}
              </p>

              <p
                class="font-bold text-lg md:text-xl"
                :style="{ color: colorDia }"
              >
                {{ evento.hora }}
              </p>
            </div>

            <div class="bg-white border border-black p-4 md:p-5">
              <MapPin class="w-5 h-5 mb-3" />

              <p class="text-xs uppercase opacity-60">
                {{ t('programa.espacio') }}
              </p>

              <p
                class="font-bold text-lg md:text-xl"
                :style="{ color: colorDia }"
              >
                {{ evento.espacio }}
              </p>
            </div>

            <div class="bg-white border border-black p-4 md:p-5">
              <CalendarDays class="w-5 h-5 mb-3" />

              <p class="text-xs uppercase opacity-60">
                {{ t('programa.duracion') }}
              </p>

              <p
                class="font-bold text-lg md:text-xl"
                :style="{ color: colorDia }"
              >
                {{ evento.duracion }}
              </p>
            </div>

            <div class="bg-white border border-black p-4 md:p-5">
              <Users class="w-5 h-5 mb-3" />

              <p class="text-xs uppercase opacity-60">
                {{ t('programa.acceso') }}
              </p>

              <p
                class="font-bold text-lg md:text-xl"
                :style="{ color: colorDia }"
              >
                {{
                  evento.inscripcion
                    ? t('programa.aforoLimitado')
                    : t('programa.libreAcceso')
                }}
              </p>
            </div>

          </div>

          <button
            v-if="evento.inscripcion"
            type="button"
            @click="abrirInscripcion"
            class="mt-8 md:mt-10 text-white px-6 md:px-10 py-4 md:py-5 uppercase font-black text-sm md:text-base transition hover:opacity-80"
            :style="{ backgroundColor: colorDia }"
          >
            {{ t('programa.inscribirme') }}
          </button>

        </div>

        <!-- DERECHA -->
        <div class="aspect-4/5 lg:aspect-4/5 overflow-hidden">

          <!-- CONCIERTOS -->
          <img
            v-if="evento.categoriaSlug === 'concierto' && evento.imagen"
            :src="evento.imagen"
            :alt="textoEvento(evento, 'titulo')"
            class="w-full h-full object-contain object-center"
          />
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