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

const imagenSeleccionada = ref(producto?.imagen)

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
  })

  localStorage.setItem('carrito', JSON.stringify(carritoActual))

  router.push('/carrito')
}
</script>

<template>
  <main class="bg-white text-black px-8 py-16">

    <section
      v-if="producto"
      class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20"
    >

      <!-- GALERÍA -->
      <div>

        <img
          :src="imagenSeleccionada"
          :alt="t(`merchandising.productos.${producto.id}`)"
          class="w-full h-175 object-cover"
        />

        <div class="flex gap-6 mt-6">

          <img
            :src="producto.imagen"
            @click="imagenSeleccionada = producto.imagen"
            class="w-32 h-32 object-cover cursor-pointer transition-opacity hover:opacity-80"
          />

          <img
            :src="producto.imagenHover"
            @click="imagenSeleccionada = producto.imagenHover"
            class="w-32 h-32 object-cover cursor-pointer transition-opacity hover:opacity-80"
          />

        </div>

      </div>

      <!-- INFO -->
      <div>

        <h1 class="text-5xl font-black uppercase leading-tight mb-8 text-[#F22E2E]">
          {{ t(`merchandising.productos.${producto.id}`) }}
        </h1>

        <p class="text-3xl italic font-light mb-10 text-black">
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
                'border px-6 py-3 transition',
                tallaSeleccionada === talla
                  ? 'bg-[#F22E2E] text-white border-[#F22E2E]'
                  : 'bg-white text-[#F22E2E] border-[#F22E2E] hover:bg-[#F22E2E] hover:text-white'
              ]"
            >
              {{ talla }}
            </button>

          </div>
        </div>

        <!-- CANTIDAD -->
        <div class="mb-10">

          <p class="uppercase text-sm mb-4">
            {{ t('merchandising.cantidad') }}
          </p>

          <div class="flex border border-[#F22E2E] w-fit text-[#F22E2E]">

            <button
              @click="restar"
              class="px-6 py-4 text-xl hover:bg-[#F22E2E] hover:text-white transition"
            >
              -
            </button>

            <span class="px-8 py-4">
              {{ cantidad }}
            </span>

            <button
              @click="sumar"
              class="px-6 py-4 text-xl hover:bg-[#F22E2E] hover:text-white transition"
            >
              +
            </button>

          </div>

        </div>

        <!-- BOTÓN -->
        <button
          @click="añadirCarrito"
          class="w-full border border-[#F22E2E] bg-[#F22E2E] text-white py-5 uppercase font-semibold hover:bg-white hover:text-[#F22E2E] transition mb-12"
        >
          {{ t('merchandising.anadir') }}
        </button>

        <!-- DESCRIPCIÓN -->
        <div class="space-y-6 mb-12 italic text-lg leading-relaxed font-light">

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
          class="flex flex-col gap-4"
        >

          <AccordionItem
            value="material"
            class="px-4 text-[#F22E2E]"
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
            class="px-4 text-[#F22E2E]"
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
            class="px-4 text-[#F22E2E]"
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