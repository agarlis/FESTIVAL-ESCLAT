<script setup lang="ts">
import { ref } from 'vue'
import { t } from '@/components/data/idiomas'

const parsePrecio = (precio: string) => {
  const limpio = precio.replace('€', '').replace('.', '').replace(',', '.').trim()

  return Number(limpio)
}

const formatearPrecio = (precio: number) => {
  return `${precio.toFixed(2).replace('.', ',')}€`
}

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

const carrito = ref(leerCarrito())

const guardarCarrito = () => {
  localStorage.setItem('carrito', JSON.stringify(carrito.value))
}

const sumarCantidad = (index: number) => {
  carrito.value[index].cantidad += 1
  guardarCarrito()
}

const restarCantidad = (index: number) => {
  if (carrito.value[index].cantidad <= 1) {
    eliminarProducto(index)
    return
  }

  carrito.value[index].cantidad -= 1
  guardarCarrito()
}

const eliminarProducto = (index: number) => {
  carrito.value.splice(index, 1)
  guardarCarrito()
}

const nombreItem = (item: any) => {
  if (item.producto?.imagen) {
    return t(`merchandising.productos.${item.producto.id}`)
  }

  const entradaId = item.producto?.id > 100
    ? item.producto.id - 100
    : item.producto?.id

  return `${t('comun.entrada')} ${t(`entradas.tarjetas.${entradaId}.titulo`)}`
}

const colorEntrada = (item: any) => {
  return item.producto?.color || '#000000'
}

</script>

<template>
  <main class="bg-white text-black min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-16">

    <section class="max-w-6xl mx-auto">

      <h1 class="text-3xl sm:text-4xl md:text-5xl font-black mb-6 md:mb-8 text-[#F22E2E]">
        {{ t('carrito.titulo') }}
      </h1>

      <!-- CABECERA SOLO ESCRITORIO -->
      <div
        v-if="carrito.length"
        class="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] gap-6 items-center border-b border-[#F22E2E] pb-4 text-sm uppercase tracking-wide text-black"
      >
        <span>{{ t('comun.producto') }}</span>
        <span class="text-center">{{ t('comun.cantidad') }}</span>
        <span class="text-center">{{ t('comun.precio') }}</span>
        <span class="text-right">{{ t('comun.total') }}</span>
      </div>

      <div
        v-if="carrito.length"
        class="space-y-6 mt-6"
      >

        <div
          v-for="(item, index) in carrito"
          :key="`${item.producto?.id || index}-${item.talla || 'sin-talla'}-${index}`"
          class="border-b border-[#F22E2E] pb-6"
        >

          <!-- ESCRITORIO -->
          <div class="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] gap-6 items-center">

            <div class="flex gap-6 items-center">

              <img
                v-if="item.producto.imagen"
                :src="item.producto.imagen"
                class="w-28 h-28 object-cover"
              />

              <div
                v-else-if="item.producto.color === 'abono'"
                class="w-28 h-28 border-2 border-[#F22E2E] bg-white text-[#F22E2E] flex flex-col items-center justify-center font-black uppercase text-center"
              >
                <span class="text-xs">ABONO</span>
              </div>

              <div
                v-else-if="item.producto.color === 'vip'"
                class="w-28 h-28 border-2 border-[#0669BF] bg-white text-[#0669BF] flex flex-col items-center justify-center font-black uppercase text-center"
              >
                <span class="text-xs">VIP</span>
              </div>

              <div
                v-else
                class="w-28 h-28 flex flex-col items-center justify-center text-white font-black uppercase text-center"
                :style="{ backgroundColor: colorEntrada(item) }"
              >
                <span class="text-xs">ENTRADA</span>
              </div>

              <div>

                <h2 class="font-black uppercase text-[#F22E2E]">
                  {{ nombreItem(item) }}
                </h2>

                <p
                  v-if="item.talla"
                  class="text-sm mt-1"
                >
                  {{ t('comun.talla') }}: {{ item.talla }}
                </p>

              </div>

            </div>

            <div class="flex items-center justify-center gap-3">

              <button
                @click="restarCantidad(index)"
                class="border border-[#F22E2E] text-[#F22E2E] px-3 py-1 hover:bg-[#F22E2E] hover:text-white transition"
              >
                -
              </button>

              <span class="min-w-8 text-center">
                {{ item.cantidad }}
              </span>

              <button
                @click="sumarCantidad(index)"
                class="border border-[#F22E2E] text-[#F22E2E] px-3 py-1 hover:bg-[#F22E2E] hover:text-white transition"
              >
                +
              </button>

            </div>

            <p class="text-center text-lg italic text-black">
              {{ item.producto.precio }}
            </p>

            <div class="flex flex-col items-end gap-3">

              <p class="text-right text-lg italic text-[#F22E2E]">
                {{ formatearPrecio(parsePrecio(item.producto.precio) * item.cantidad) }}
              </p>

              <button
                @click="eliminarProducto(index)"
                class="uppercase text-sm underline text-[#F22E2E] hover:opacity-70 transition"
              >
                {{ t('comun.eliminar') }}
              </button>

            </div>

          </div>

          <!-- MÓVIL -->
          <div class="md:hidden">

            <div class="flex gap-4">

              <img
                v-if="item.producto.imagen"
                :src="item.producto.imagen"
                class="w-24 h-24 object-cover"
              />

              <div
                v-else
                class="w-24 h-24 flex items-center justify-center text-white font-black uppercase text-center"
                :style="{ backgroundColor: colorEntrada(item) }"
              >
                <span class="text-xs">ENTRADA</span>
              </div>

              <div class="flex-1">

                <h2 class="font-black uppercase text-[#F22E2E] text-sm">
                  {{ nombreItem(item) }}
                </h2>

                <p
                  v-if="item.talla"
                  class="text-sm mt-1"
                >
                  {{ t('comun.talla') }}: {{ item.talla }}
                </p>

                <p class="italic mt-2">
                  {{ item.producto.precio }}
                </p>

              </div>

            </div>

            <div class="flex justify-between items-center mt-4">

              <div class="flex items-center gap-3">

                <button
                  @click="restarCantidad(index)"
                  class="border border-[#F22E2E] text-[#F22E2E] px-3 py-1"
                >
                  -
                </button>

                <span>{{ item.cantidad }}</span>

                <button
                  @click="sumarCantidad(index)"
                  class="border border-[#F22E2E] text-[#F22E2E] px-3 py-1"
                >
                  +
                </button>

              </div>

              <p class=" italic text-[#F22E2E]">
                {{ formatearPrecio(parsePrecio(item.producto.precio) * item.cantidad) }}
              </p>

            </div>

            <button
              @click="eliminarProducto(index)"
              class="mt-4 uppercase text-sm underline text-[#F22E2E]"
            >
              {{ t('comun.eliminar') }}
            </button>

          </div>

        </div>

      </div>

      <div
        v-else
        class="border border-[#F22E2E] px-6 md:px-8 py-8 md:py-10"
      >
        <p class="text-base md:text-lg mb-6">
          {{ t('carrito.vacio') }}
        </p>

        <RouterLink
          to="/merchandising"
          class="uppercase underline text-[#F22E2E] hover:opacity-70 transition"
        >
          {{ t('carrito.seguir') }}
        </RouterLink>
      </div>

      <div
        v-if="carrito.length"
        class="flex flex-col md:flex-row gap-6 justify-between items-center mt-10 md:mt-16"
      >

        <RouterLink
          to="/merchandising"
          class="uppercase underline text-[#F22E2E] hover:opacity-70 transition"
        >
          {{ t('carrito.seguir') }}
        </RouterLink>

        <RouterLink
          to="/checkout"
          class="w-full md:w-auto text-center border border-[#F22E2E] bg-[#F22E2E] text-white px-8 md:px-10 py-4 md:py-5 uppercase hover:bg-white hover:text-[#F22E2E] transition"
        >
          {{ t('carrito.tramitar') }}
        </RouterLink>

      </div>

    </section>

  </main>
</template>