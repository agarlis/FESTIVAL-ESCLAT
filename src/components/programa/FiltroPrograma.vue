<script setup lang="ts">
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
        ? 'bg-black text-white'
        : 'bg-white text-black'"
      class="px-6 py-3 border border-black font-bold uppercase transition"
    >
      Todos
    </button>

    <button
      type="button"
      @click="setFiltro('concierto')"
      :class="filtroActivo === 'concierto'
        ? 'bg-black text-white'
        : 'bg-white text-black'"
      class="px-6 py-3 border border-black font-bold uppercase transition"
    >
      Conciertos
    </button>

    <button
      type="button"
      @click="setFiltro('taller')"
      :class="filtroActivo === 'taller'
        ? 'bg-black text-white'
        : 'bg-white text-black'"
      class="px-6 py-3 border border-black font-bold uppercase transition"
    >
      Talleres
    </button>

    <button
      type="button"
      @click="setFiltro('charla')"
      :class="filtroActivo === 'charla'
        ? 'bg-black text-white'
        : 'bg-white text-black'"
      class="px-6 py-3 border border-black font-bold uppercase transition"
    >
      Charlas
    </button>
  </section>
</template>
