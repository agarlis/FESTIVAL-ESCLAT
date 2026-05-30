<script setup lang="ts">
import { t, textoEvento } from '@/components/data/idiomas'

const props = defineProps<{
  evento: {
    id: number
    slug: string
    titulo: string
    dia: string
    diaSlug: string
    hora: string
    espacio: string
    categoria: string
    categoriaSlug: string
    descripcion: string
    inscripcion: boolean
    imagen?: string
  }
}>()
const emit = defineEmits<{
  (e: 'inscribirse'): void
}>()

const handleInscribirse = (event: MouseEvent) => {
  event.stopPropagation()
  event.preventDefault()
  emit('inscribirse')
}


const coloresDia: Record<string, string> = {
  viernes: 'bg-[#0669BF]',
  sabado: 'bg-[#F22E2E]',
  domingo: 'bg-[#F25EA3]',
}

const coloresTextoDia: Record<string, string> = {
  viernes: 'hover:text-[#0669BF]',
  sabado: 'hover:text-[#F22E2E]',
  domingo: 'hover:text-[#F25EA3]',
}
</script>

<template>
  <article
    :class="`aspect-square p-8 flex flex-col justify-between hover:-translate-y-2 transition ${coloresDia[evento.diaSlug] || 'bg-black'} text-white`"
  >
    <div>
      <p class="text-sm font-bold uppercase">
        {{ evento.hora }} · {{ evento.espacio }}
      </p>

      <h2 class="text-4xl font-black uppercase mt-4">
        {{ textoEvento(evento, 'titulo') }}
      </h2>

      <p class="italic font-extralight mt-2 text-sm">
        {{ textoEvento(evento, 'categoria') }}
      </p>

      <p class="mt-6 text-base leading-relaxed">
        {{ textoEvento(evento, 'descripcion') }}
      </p>
    </div>

    <button
      v-if="evento.inscripcion"
      type="button"
      @click="handleInscribirse"
      :class="[
        'px-4 py-3 uppercase font-bold transition border border-white text-white hover:bg-white',
        coloresTextoDia[evento.diaSlug]
      ]"
    >
      {{ t('programa.inscribirme') }}
    </button>

    <button
      v-else
      type="button"
      :class="[
        'px-4 py-3 uppercase font-bold transition border border-white text-white hover:bg-white',
        coloresTextoDia[evento.diaSlug]
      ]"
    >
      {{ t('programa.verMas') }}
    </button>
  </article>
</template>
