<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { productos } from '@/components/data/merchandising'
import { t } from '@/components/data/idiomas'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const route = useRoute()
const router = useRouter()

const producto = productos.find(
  p => p.id === Number(route.params.id)
)

const cantidad = ref(1)

const sumar = () => {
  cantidad.value++
}

const restar = () => {
  if (cantidad.value > 1) cantidad.value--
}

const imagenSeleccionada = ref(
  producto?.galeria?.[0]?.imagen || producto?.variantes?.[0]?.imagen || producto?.imagen || ''
)

const colorSeleccionado = ref(
  producto?.variantes?.[0]?.color || producto?.galeria?.[0]?.color || ''
)

const seleccionarColor = (variante: any) => {
  colorSeleccionado.value = variante.color
  imagenSeleccionada.value = variante.imagen
}

const seleccionarImagen = (item: any) => {
  imagenSeleccionada.value = item.imagen
  colorSeleccionado.value = item.color
}

const tallaSeleccionada = ref('')

const leerCarrito = () => {
  const guardado = localStorage.getItem('carrito')

  if (!guardado) {
    return []
  }

  try {
    const parsed = JSON.parse(guardado)

    return Array.isArray(parsed) ? parsed : [parsed]
  } catch {
    return []
  }
}

const añadirCarrito = () => {
  if (!producto) {
    return
  }

  const carritoActual = leerCarrito()

  carritoActual.push({
  producto,
  cantidad: cantidad.value,
  talla: tallaSeleccionada.value,
  color: colorSeleccionado.value,
})

  localStorage.setItem('carrito', JSON.stringify(carritoActual))

  router.push('/carrito')
}
</script>

<template>
  <main class="bg-white text-black px-4 sm:px-6 md:px-8 py-8 md:py-16">

    <section
      v-if="producto"
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20"
    >

      <!-- GALERÍA -->
<div>

  <img
    :src="imagenSeleccionada"
    :alt="t(`merchandising.productos.${producto.id}`)"
    class="w-full h-90 sm:h-90 md:h-130 lg:h-120 object-cover"
  />

  <div class="grid grid-cols-4 gap-3 md:gap-6 mt-4 md:mt-6">

    <template v-if="producto.galeria">

  <img
    v-for="item in producto.galeria"
    :key="item.imagen"
    :src="item.imagen"
    @click="seleccionarImagen(item)"
    class="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover cursor-pointer transition-opacity hover:opacity-80"
  />

</template>

<template v-else-if="producto.variantes">

  <img
    v-for="variante in producto.variantes"
    :key="variante.color"
    :src="variante.imagen"
    @click="seleccionarColor(variante)"
    class="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover cursor-pointer transition-opacity hover:opacity-80"
  />

</template>

    <template v-else>

      <img
        :src="producto.imagen"
        @click="imagenSeleccionada = producto.imagen"
        class="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover cursor-pointer transition-opacity hover:opacity-80"
      />

      <img
        :src="producto.imagenHover"
        @click="imagenSeleccionada = producto.imagenHover"
        class="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover cursor-pointer transition-opacity hover:opacity-80"
      />

    </template>

  </div>

</div>

      <!-- INFO -->
      <div>

        <h1 class="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight mb-6 md:mb-8 text-black">
          {{ t(`merchandising.productos.${producto.id}`) }}
        </h1>

        <p class="text-2xl sm:text-3xl italic font-light mb-6 md:mb-10 text-black">
          {{ producto.precio }}
        </p>

        <!-- TALLA -->
        <div
          v-if="producto.tallas"
          class="mb-10"
        >
          <p class="uppercase text-sm mb-4">
            {{ t('merchandising.talla') }}
          </p>

          <div class="flex gap-3 flex-wrap">

            <button
              v-for="talla in producto.tallas"
              :key="talla"
              @click="tallaSeleccionada = talla"
              :class="[
                'border px-4 md:px-6 py-2 md:py-3 text-sm md:text-base transition',
                tallaSeleccionada === talla
                  ? 'bg-[#F22E2E] text-white border-[#F22E2E]'
                  : 'bg-white text-[#F22E2E] border-[#F22E2E] hover:bg-[#F22E2E] hover:text-white'
              ]"
            >
              {{ talla }}
            </button>

          </div>
        </div>


        <div
          v-if="producto.variantes"
          class="mb-10"
        >
          <p class="uppercase text-sm mb-4">
            Color
          </p>

          <div class="flex gap-3 flex-wrap">

            <button
              v-for="variante in producto.variantes"
              :key="variante.color"
              @click="seleccionarColor(variante)"
              :class="[
                'border px-4 md:px-6 py-2 md:py-3 text-sm md:text-base transition',
                colorSeleccionado === variante.color
                  ? 'bg-[#F22E2E] text-white border-[#F22E2E]'
                  : 'bg-white text-[#F22E2E] border-[#F22E2E] hover:bg-[#F22E2E] hover:text-white'
              ]"
            >
              {{ variante.color }}
            </button>

          </div>
        </div>

        <!-- CANTIDAD -->
        <div class="mb-10">

          <p class="uppercase text-sm mb-4">
            {{ t('merchandising.cantidad') }}
          </p>

          <div class="flex border border-[#F22E2E] w-fit text-[#F22E2E] text-sm md:text-base">

            <button
              @click="restar"
              class="px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl hover:bg-[#F22E2E] hover:text-white transition"
            >
              -
            </button>

            <span class="px-5 md:px-8 py-3 md:py-4">
              {{ cantidad }}
            </span>

            <button
              @click="sumar"
              class="px-4 md:px-6 py-3 md:py-4 text-lg md:text-xl hover:bg-[#F22E2E] hover:text-white transition"
            >
              +
            </button>

          </div>

        </div>

        <!-- BOTÓN -->
        <button
          @click="añadirCarrito"
          class="w-full border border-[#F22E2E] bg-[#F22E2E] text-white py-4 md:py-5 uppercase font-semibold text-sm md:text-base hover:bg-white hover:text-[#F22E2E] transition mb-12"
        >
          {{ t('merchandising.anadir') }}
        </button>

        <!-- DESCRIPCIÓN -->
        <div class="space-y-4 md:space-y-6 mb-10 md:mb-12 italic text-base md:text-lg leading-relaxed font-light">

          <p>
            {{ t('merchandising.descripcion1') }}
          </p>

          <p>
            {{ t('merchandising.descripcion2') }}
          </p>

        </div>

        <!-- ACORDEÓN -->
        <Accordion
          type="single"
          collapsible
          class="flex flex-col gap-2 md:gap-4"
        >

          <AccordionItem
            value="material"
            class="px-2 md:px-4 text-[#F22E2E]"
          >
            <AccordionTrigger>
              {{ t('merchandising.material') }}
            </AccordionTrigger>

            <AccordionContent class="text-black">
              {{ t('merchandising.materialTexto') }}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="envio"
            class="px-2 md:px-4 text-[#F22E2E]"
          >
            <AccordionTrigger>
              {{ t('merchandising.envio') }}
            </AccordionTrigger>

            <AccordionContent class="text-black">
              {{ t('merchandising.envioTexto') }}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="cuidados"
            class="px-2 md:px-4 text-[#F22E2E]"
          >
            <AccordionTrigger>
              {{ t('merchandising.cuidados') }}
            </AccordionTrigger>

            <AccordionContent class="text-black">
              {{ t('merchandising.cuidadosTexto') }}
            </AccordionContent>
          </AccordionItem>

        </Accordion>

      </div>

    </section>

  </main>
</template>