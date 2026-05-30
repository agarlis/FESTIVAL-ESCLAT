<script setup lang="ts">
import { t } from '@/components/data/idiomas'

const props = defineProps({
  filtroActivo: { type: String, default: 'todos' }
})
const emit = defineEmits(['update:filtroActivo'])

const setFiltro = (valor: string) => {
  emit('update:filtroActivo', valor)
}
</script>

<template>
  <section class="flex flex-wrap justify-center gap-4">
    <button
      type="button"
      @click="setFiltro('todos')"
      :class="filtroActivo === 'todos'
          ? 'bg-[#F22E2E] text-white'
          : 'bg-white text-[#F22E2E]'"
      class="px-6 py-3 border border-[#F22E2E] font-bold uppercase transition"
    >
      {{ t('programa.todos') }}
    </button>

    <button
      type="button"
      @click="setFiltro('concierto')"
      :class="filtroActivo === 'concierto'
          ? 'bg-[#F22E2E] text-white'
          : 'bg-white text-[#F22E2E]'"
      class="px-6 py-3 border border-[#F22E2E] font-bold uppercase transition"
    >
      {{ t('programa.conciertos') }}
    </button>

    <button
      type="button"
      @click="setFiltro('taller')"
      :class="filtroActivo === 'taller'
          ? 'bg-[#F22E2E] text-white'
          : 'bg-white text-[#F22E2E]'"
      class="px-6 py-3 border border-[#F22E2E] font-bold uppercase transition"
    >
      {{ t('programa.talleres') }}
    </button>

    <button
      type="button"
      @click="setFiltro('charla')"
      :class="filtroActivo === 'charla'
          ? 'bg-[#F22E2E] text-white'
          : 'bg-white text-[#F22E2E]'"
      class="px-6 py-3 border border-[#F22E2E] font-bold uppercase transition"
    >
      {{ t('programa.charlas') }}
    </button>
  </section>
</template>
