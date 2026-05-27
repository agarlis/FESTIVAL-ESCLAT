<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { eventos } from '@/components/data/eventos'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import InscripcionModal from '@/components/programa/InscripciónModelo.vue'
import FiltroPrograma from '@/components/programa/FiltroPrograma.vue'
import TarjetaEvento from '@/components/programa/TarjetaEvento.vue'

const route = useRoute()
const router = useRouter()

const dias = ['todos', 'viernes', 'sabado', 'domingo'] as const
const filtros = ['todos', 'concierto', 'taller', 'charla'] as const

type Dia = typeof dias[number]
type Filtro = typeof filtros[number]

const obtenerQueryValida = <T extends string>(
  valor: unknown,
  opciones: readonly T[],
  valorPorDefecto: T,
) => {
  return typeof valor === 'string' && opciones.includes(valor as T)
    ? valor as T
    : valorPorDefecto
}

const diaActivo = ref<Dia>(obtenerQueryValida(route.query.dia, dias, 'todos'))
const filtroActivo = ref<Filtro>(obtenerQueryValida(route.query.filtro, filtros, 'todos'))

const queryPrograma = computed(() => ({
  ...(diaActivo.value !== 'todos' ? { dia: diaActivo.value } : {}),
  ...(filtroActivo.value !== 'todos' ? { filtro: filtroActivo.value } : {}),
}))

watch([diaActivo, filtroActivo], () => {
  router.replace({
    name: 'programa',
    query: queryPrograma.value,
  })
})

watch(
  () => route.query,
  (query) => {
    diaActivo.value = obtenerQueryValida(query.dia, dias, 'todos')
    filtroActivo.value = obtenerQueryValida(query.filtro, filtros, 'todos')
  },
)

const eventosFiltrados = computed(() => {
  return eventos.filter((evento) => {
    const coincideDia =
      diaActivo.value === 'todos'
        ? true
        : evento.diaSlug === diaActivo.value

    const coincideCategoria =
      filtroActivo.value === 'todos'
        ? true
        : evento.categoriaSlug === filtroActivo.value

    return coincideDia && coincideCategoria
  })
})

const modalAbierto = ref(false)
const eventoSeleccionado = ref<(typeof eventos)[number]>()

const abrirInscripcion = (evento: (typeof eventos)[number]) => {
  eventoSeleccionado.value = evento
  modalAbierto.value = true
}


</script>

<template>
  <main class="bg-white text-black min-h-screen px-10 py-8">

    <!-- TITULO -->
    <section class="text-center">
      <h1 class="text-5xl font-bold">
        PROGRAMA
      </h1>
    </section>

    <!-- DIAS -->
    <section class="flex justify-center gap-6 py-8 flex-wrap">

      <button
        @click="diaActivo = 'todos'"
        :class="diaActivo === 'todos'
          ? 'bg-black text-white'
          : 'bg-white text-black'"
        class="px-10 py-4 border border-black font-black uppercase transition hover:bg-black hover:text-white"
      >
        Todos
      </button>

      <button
        @click="diaActivo = 'viernes'"
        :class="diaActivo === 'viernes'
          ? 'bg-black text-white'
          : 'bg-white text-black'"
        class="px-10 py-4 border border-black font-black uppercase transition hover:bg-black hover:text-white"
      >
        Viernes 23
      </button>

      <button
        @click="diaActivo = 'sabado'"
        :class="diaActivo === 'sabado'
          ? 'bg-black text-white'
          : 'bg-white text-black'"
        class="px-10 py-4 border border-black font-black uppercase transition hover:bg-black hover:text-white"
      >
        Sábado 24
      </button>

      <button
        @click="diaActivo = 'domingo'"
        :class="diaActivo === 'domingo'
          ? 'bg-black text-white'
          : 'bg-white text-black'"
        class="px-10 py-4 border border-black font-black uppercase transition hover:bg-black hover:text-white"
      >
        Domingo 25
      </button>

    </section>

    <!-- FILTROS -->
    <FiltroPrograma
      :filtroActivo="filtroActivo"
      @update:filtroActivo="filtroActivo = $event"
    />

    <!-- EVENTOS -->
    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-8">

      <RouterLink
        v-for="evento in eventosFiltrados"
        :key="evento.id"
        :to="{
          name: 'programa-detalle',
          params: { slug: evento.slug },
          query: queryPrograma,
        }"
      >
        <TarjetaEvento
          :evento="evento"
          @inscribirse="abrirInscripcion(evento)"
        />
      </RouterLink>

    </section>

  </main>

  <InscripcionModal
  :abierto="modalAbierto"
  :evento="eventoSeleccionado"
  @cerrar="modalAbierto = false"
/>
</template>
