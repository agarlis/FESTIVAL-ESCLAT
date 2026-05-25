<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { productos } from '@/components/data/merchandising'

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
          :alt="producto.nombre"
          class="w-full h-175 object-cover"
        />

        <div class="flex gap-6 mt-6">

          <img
            :src="producto.imagen"
            @click="imagenSeleccionada = producto.imagen"
            class="w-32 h-32 object-cover "
          />

          <img
            :src="producto.imagenHover"
            @click="imagenSeleccionada = producto.imagenHover"
            class="w-32 h-32 object-cover"
          />

        </div>

      </div>

      <!-- INFO -->
      <div>

        <h1 class="text-5xl font-black uppercase leading-tight mb-8">
          {{ producto.nombre }}
        </h1>

        <p class="text-3xl italic font-light mb-10">
          {{ producto.precio }}
        </p>
<!-- TALLA -->
        <div
  v-if="producto.tallas"
  class="mb-10"
>
  <p class="uppercase text-sm mb-4">
    Talla
  </p>

  <div class="flex gap-3 flex-wrap">

    <button
      v-for="talla in producto.tallas"
      :key="talla"
      @click="tallaSeleccionada = talla"
      :class="[
        'border border-black px-6 py-3 transition',
        tallaSeleccionada === talla
          ? 'bg-black text-white'
          : 'bg-white text-black hover:bg-black hover:text-white'
      ]"
    >
      {{ talla }}
    </button>

  </div>
</div>

        <!-- CANTIDAD -->
        <div class="mb-10">
          <p class="uppercase text-sm mb-4">
            Cantidad
          </p>

          <div class="flex border border-black w-fit">

            <button
              @click="restar"
              class="px-6 py-4 text-xl"
            >
              -
            </button>

            <span class="px-8 py-4">
              {{ cantidad }}
            </span>

            <button
              @click="sumar"
              class="px-6 py-4 text-xl"
            >
              +
            </button>

          </div>
        </div>

        <!-- BOTÓN -->
        <button
          @click="añadirCarrito"
          class="w-full border border-black py-5 uppercase font-semibold hover:bg-black hover:text-white transition mb-12"
        >
          Añadir al carrito
        </button>

        <!-- DESCRIPCIÓN -->
        <div class="space-y-6 mb-12 italic text-lg leading-relaxed font-light">

          <p>
            Producto oficial ESCLAT diseñado como edición especial del festival.
          </p>

          <p>
            Una pieza exclusiva pensada para amantes de la música, creatividad y cultura contemporánea.
          </p>

        </div>

        <!-- ACORDEÓN -->
        <Accordion
          type="single"
          collapsible
          class="flex flex-col gap-4"
        >

          <AccordionItem value="material">
            <AccordionTrigger>
              Material
            </AccordionTrigger>
            <AccordionContent>
              Materiales premium seleccionados para merchandising oficial ESCLAT.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="envio">
            <AccordionTrigger>
              Envío
            </AccordionTrigger>
            <AccordionContent>
              Entrega estimada entre 3 y 7 días laborables.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="cuidados">
            <AccordionTrigger>
              Cuidados
            </AccordionTrigger>
            <AccordionContent>
              Seguir instrucciones específicas según el tipo de producto.
            </AccordionContent>
          </AccordionItem>

        </Accordion>

      </div>

    </section>

  </main>
</template>