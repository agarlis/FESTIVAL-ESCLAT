<script setup lang="ts">
import { ref } from 'vue'



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

</script>

<template>
  <main class="bg-white text-black min-h-screen px-12 py-16">

    <section class="max-w-6xl mx-auto">

      <h1 class="text-5xl font-black mb-8">
        Tu carrito
      </h1>

      <div
        v-if="carrito.length"
        class="mb-10"
      >
      </div>

      <div
        v-if="carrito.length"
        class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-6 items-center border-b pb-4 text-sm uppercase tracking-wide"
      >
        <span>Producto</span>
        <span class="text-center">Cantidad</span>
        <span class="text-center">Precio</span>
        <span class="text-right">Total</span>
      </div>

      <div
        v-if="carrito.length"
        class="space-y-6 mt-6"
      >
        <div
          v-for="(item, index) in carrito"
          :key="`${item.producto?.id || index}-${item.talla || 'sin-talla'}-${index}`"
          class="grid grid-cols-[2fr_1fr_1fr_1fr] gap-6 items-center border-b pb-6"
        >
          <div class="flex gap-6 items-center">
            <img
              :src="item.producto.imagen"
              class="w-28 h-28 object-cover"
            />

            <div>
              <h2 class="font-black uppercase">
                {{ item.producto.nombre }}
              </h2>

              <p v-if="item.talla" class="text-sm mt-1">
                Talla: {{ item.talla }}
              </p>
            </div>
          </div>

          <div class="flex items-center justify-center gap-3">
            <button
              @click="restarCantidad(index)"
              class="border border-black px-3 py-1"
            >
              -
            </button>

            <span class="min-w-8 text-center">
              {{ item.cantidad }}
            </span>

            <button
              @click="sumarCantidad(index)"
              class="border border-black px-3 py-1"
            >
              +
            </button>
          </div>

          <p class="text-center text-lg italic">
            {{ item.producto.precio }}
          </p>

          <div class="flex flex-col items-end gap-3">
            <p class="text-right text-lg italic">
              {{ formatearPrecio(parsePrecio(item.producto.precio) * item.cantidad) }}
            </p>

            <button
              @click="eliminarProducto(index)"
              class="uppercase text-sm underline hover:opacity-70 transition"
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>

      <div
        v-else
        class="border border-black px-8 py-10"
      >
        <p class="text-lg mb-6">
          Todavía no has añadido nada a tu carrito.
        </p>

        <RouterLink
          to="/merchandising"
          class="uppercase underline hover:opacity-70 transition"
        >
          Seguir en la compra
        </RouterLink>
      </div>

      <div
        v-if="carrito.length"
        class="flex justify-between items-center mt-16"
      >
        <RouterLink
          to="/merchandising"
          class="uppercase underline hover:opacity-70 transition"
        >
          Seguir en la compra
        </RouterLink>

        <RouterLink
          to="/checkout"
          class="border border-black px-10 py-5 uppercase hover:bg-black hover:text-white transition"
        >
          Tramitar pedido
        </RouterLink>
      </div>

    </section>

  </main>
</template>
