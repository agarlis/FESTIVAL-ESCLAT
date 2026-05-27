<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { entradas, type Entrada } from '@/components/data/entradas'

const router = useRouter()

const entradaAccesibleSeleccionada = ref(entradas[0]?.id ?? 1)

const parsePrecio = (precio: string) => {
  const limpio = precio.replace('€', '').replace('.', '').replace(',', '.').trim()

  return Number(limpio)
}

const formatearPrecio = (precio: number) => {
  return `${precio.toFixed(2).replace('.', ',')}€`
}

const entradasAccesibles = computed(() => {
  return entradas.map((entrada) => ({
    ...entrada,
    id: entrada.id + 100,
    nombre: `${entrada.nombre} accesible`,
    precio: formatearPrecio(parsePrecio(entrada.precio) / 2),
    precioOriginal: entrada.precio,
  }))
})

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

const comprarEntrada = (entrada: Entrada) => {
  const carritoActual = leerCarrito()

  carritoActual.push({
    producto: {
      id: entrada.id,
      nombre: entrada.nombre,
      precio: entrada.precio,
    },
    cantidad: 1,
  })

  localStorage.setItem('carrito', JSON.stringify(carritoActual))
  router.push('/carrito')
}

const comprarEntradaAccesible = () => {
  const entrada = entradasAccesibles.value.find(
    item => item.id === entradaAccesibleSeleccionada.value + 100
  )

  if (!entrada) {
    return
  }

  const carritoActual = leerCarrito()

  carritoActual.push({
    producto: {
      id: entrada.id,
      nombre: entrada.nombre,
      precio: entrada.precio,
    },
    cantidad: 1,
    acreditacion: 'discapacidad',
  })

  localStorage.setItem('carrito', JSON.stringify(carritoActual))
  router.push('/carrito')
}
</script>

<template>
  <main class="bg-white text-black min-h-screen px-10 py-8">

    <!-- TITULO -->
    <section class="text-center">
      <h1 class="text-5xl font-bold">
        ENTRADAS
      </h1>
    </section>

    <!-- TIPOS DE ENTRADA -->
    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-8">

      <article
        v-for="entrada in entradas"
        :key="entrada.id"
        class="aspect-square bg-black text-white p-8 flex flex-col justify-between hover:-translate-y-2 transition"
      >
        <div>
          <p class="italic font-light text-sm">
            {{ entrada.tipo }}
          </p>

          <h2 class="text-4xl font-black uppercase mt-4">
            {{ entrada.titulo }}
          </h2>

          <p class="mt-6 text-base">
            {{ entrada.descripcion }}
          </p>
        </div>

        <div>
          <p class="text-4xl font-black mb-4">
            {{ entrada.precio }}
          </p>

          <button
            type="button"
            @click="comprarEntrada(entrada)"
            class="w-full border border-white py-4 uppercase font-bold hover:bg-white hover:text-black transition"
          >
            Comprar entrada
          </button>
        </div>
      </article>

      <!-- ACCESIBLE -->
      <article class="aspect-square bg-black text-white p-8 flex flex-col justify-between hover:-translate-y-2 transition">
        <div>
          <p class="italic font-light text-sm">
            Acceso inclusivo ♿
          </p>

          <h2 class="text-4xl font-black uppercase mt-4">
            Accesible
          </h2>

          <p class="mt-6 text-base leading-relaxed">
            50% de descuento con acreditación válida para personas con discapacidad.
          </p>
        </div>

        <div>
          <p class="text-4xl font-black mb-4">
            -50% DE CUALQUIER ENTRADA
          </p>

          <select
            v-model="entradaAccesibleSeleccionada"
            class="w-full rounded-none border border-white bg-black text-white px-4 py-4 mb-4 italic font-light"
          >
            <option
              v-for="entrada in entradas"
              :key="`accesible-${entrada.id}`"
              :value="entrada.id"
            >
              {{ entrada.titulo }} - {{ formatearPrecio(parsePrecio(entrada.precio) / 2) }}
            </option>
          </select>

          <button
            type="button"
            @click="comprarEntradaAccesible"
            class="w-full border border-white py-4 uppercase font-bold hover:bg-white hover:text-black transition rounded-none"
          >
            Comprar entrada
          </button>
        </div>
      </article>

    </section>

    <!-- INSCRIPCIONES Y CONTACTO -->
    <section class="mt-24 border-t border-black pt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <p class="italic font-light text-sm">
          Reservas gratuitas
        </p>

        <h2 class="text-4xl font-bold uppercase mt-3">
          Actividades con inscripción
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          Algunos talleres y charlas tienen aforo limitado y requieren inscripción previa gratuita.
          Puedes reservar tu plaza directamente desde la página de programa.
        </p>

        <RouterLink
          to="/programa?filtro=taller"
          class="inline-block mt-8 border border-black px-8 py-4 uppercase font-bold hover:bg-black hover:text-white transition"
        >
          Ver actividades
        </RouterLink>
      </div>

      <div class="border border-black p-8 flex flex-col justify-between">
        <div>
          <p class="italic font-light text-sm">
            Dudas y accesibilidad
          </p>

          <h2 class="text-4xl font-bold uppercase mt-3">
            Contacto
          </h2>
        </div>

        <a
          href="mailto:festivalesclat@gmail.com"
          class="text-xl font-bold transition"
        >
          festivalesclat@gmail.com
        </a>
        <p class="text-xl font-bold transition">
          963 910 477
        </p>
      </div>
    </section>

    <!-- MAPA -->
    <section class="mt-24 border-t border-black">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 py-8">
        <div>
          <p class="italic font-light text-sm">
            Ubicación
          </p>

          <h2 class="text-4xl font-bold uppercase mt-3">
            Las Naves
          </h2>

          <p class="mt-4 text-lg">
            Carrer de Joan Verdeguer, 16, València
          </p>
        </div>
      </div>
      <iframe
        title="Mapa de Las Naves Valencia"
        src="https://maps.google.com/maps?q=Las%20Naves%20Valencia&t=&z=15&ie=UTF8&iwloc=&output=embed"
        class="w-full h-130 "
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </section>

  </main>
</template>
