<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { entradas, type Entrada } from '@/components/data/entradas'
import { t } from '@/components/data/idiomas'

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

      color:
        entrada.id === 1
          ? '#0669BF'
          : entrada.id === 2
          ? '#F22E2E'
          : entrada.id === 3
          ? '#F25EA3'
          : entrada.id === 4
          ? 'abono'
          : 'vip',
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
      color: '#F2D022',
    },
    cantidad: 1,
    acreditacion: 'discapacidad',
  })

  localStorage.setItem('carrito', JSON.stringify(carritoActual))
  router.push('/carrito')
}

</script>

<template>
  <main class="bg-white text-black min-h-screen px-4 sm:px-6 md:px-10 py-6 md:py-8">

    <!-- TITULO -->
    <section class="text-center">
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold">
        {{ t('entradas.titulo') }}
      </h1>
    </section>

    <!-- TIPOS DE ENTRADA -->
    <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 py-8">

      <article
        v-for="entrada in entradas"
        :key="entrada.id"
        class="aspect-auto md:aspect-square p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 transition min-h-95"
        :class="{
          'bg-[#0669BF] text-white': entrada.id === 1,
          'bg-[#F22E2E] text-white': entrada.id === 2,
          'bg-[#F25EA3] text-white': entrada.id === 3,
          'bg-white border border-[#F22E2E] text-[#F22E2E]': entrada.id === 4,
          'bg-white border border-[#0669BF] text-[#0669BF]': entrada.id === 5,
        }"
      >
        <div>
          <p class="italic font-light text-sm">
            {{ t(`entradas.tarjetas.${entrada.id}.tipo`) }}
          </p>

          <h2 class="text-3xl md:text-4xl font-black uppercase mt-4">
            {{ t(`entradas.tarjetas.${entrada.id}.titulo`) }}
          </h2>

          <p class="mt-6 text-base">
            {{ t(`entradas.tarjetas.${entrada.id}.descripcion`) }}
          </p>
        </div>

        <div>
          <p class="text-3xl md:text-4xl font-black mb-4">
            {{ entrada.precio }}
          </p>

          <button
  type="button"
  @click="comprarEntrada(entrada)"
  class="w-full py-4 uppercase font-bold transition"
  :class="{
    'border border-white hover:bg-white hover:text-[#0669BF]': entrada.id === 1,
    'border border-white hover:bg-white hover:text-[#F22E2E]': entrada.id === 2,
    'border border-white hover:bg-white hover:text-[#F25EA3]': entrada.id === 3,
    'bg-[#F22E2E] text-white border border-[#F22E2E] hover:bg-white hover:text-[#F22E2E]': entrada.id === 4,
    'bg-[#0669BF] text-white border border-[#0669BF] hover:bg-white hover:text-[#0669BF]': entrada.id === 5,
  }"
>
  {{ t('entradas.comprar') }}
</button>
        </div>
      </article>

      <!-- ACCESIBLE -->
      <article class="aspect-auto md:aspect-square bg-[#F2D022] text-white p-6 md:p-8 flex flex-col justify-between hover:-translate-y-2 transition min-h-95">
        <div>
          <p class="italic font-light text-sm">
            {{ t('entradas.accesibleTipo') }}
          </p>

          <h2 class="text-4xl font-black uppercase mt-4">
            {{ t('entradas.accesibleTitulo') }}
          </h2>

          <p class="mt-6 text-base leading-relaxed">
            {{ t('entradas.accesibleDescripcion') }}
          </p>
        </div>

        <div>
          <p class="text-4xl font-black mb-4">
            {{ t('entradas.accesiblePrecio') }}
          </p>

          <select
            v-model="entradaAccesibleSeleccionada"
            class="w-full rounded-none border border-white bg-[#F2D022] text-white px-4 py-4 mb-4 italic font-light"
          >
            <option
              v-for="entrada in entradas"
              :key="`accesible-${entrada.id}`"
              :value="entrada.id"
            >
              {{ t(`entradas.tarjetas.${entrada.id}.titulo`) }} - {{ formatearPrecio(parsePrecio(entrada.precio) / 2) }}
            </option>
          </select>

          <button
            type="button"
            @click="comprarEntradaAccesible"
            class="w-full border border-white py-4 uppercase font-bold hover:bg-white hover:text-[#F2D022] transition rounded-none"
          >
            {{ t('entradas.comprar') }}
          </button>
        </div>
      </article>

    </section>

    <!-- INSCRIPCIONES Y CONTACTO -->
    <section class="mt-16 md:mt-24 border-t border-black pt-10 md:pt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
      <div>
        <p class="italic font-light text-sm">
          {{ t('entradas.reservas') }}
        </p>

        <h2 class="text-3xl md:text-4xl font-bold uppercase mt-3 text-[#F22E2E]">
          {{ t('entradas.actividadesTitulo') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('entradas.actividadesDescripcion') }}
        </p>

        <RouterLink
          to="/programa?filtro=taller"
          class="inline-block mt-8 bg-white border border-[#F22E2E] text-[#F22E2E] px-8 py-4 uppercase font-bold hover:bg-[#F22E2E] hover:border-[#F22E2E] hover:text-white transition"
        >
          {{ t('entradas.verActividades') }}
        </RouterLink>
      </div>

      <div class="bg-white border border-[#F22E2E] p-6 md:p-8 flex flex-col justify-between">
        <div>
          <p class="italic font-light text-sm">
            {{ t('entradas.contactoIntro') }}
          </p>

          <h2 class="text-3xl md:text-4xl font-bold uppercase mt-3">
            {{ t('comun.contacto') }}
          </h2>
        </div>

        <a
          href="mailto:festivalesclat@gmail.com"
          class="text-lg md:text-xl font-bold transition"
        >
          festivalesclat@gmail.com
        </a>
        <p class="text-lg md:text-xl font-bold transition">
          963 910 477
        </p>
      </div>
    </section>

    <!-- MAPA -->
    <section class="mt-16 md:mt-24 border-t border-black">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 py-8">
        <div>
          <p class="italic font-light text-sm">
            {{ t('comun.ubicacion') }}
          </p>

          <h2 class="text-3xl md:text-4xl font-bold uppercase mt-3 text-[#F22E2E]">
            Las Naves
          </h2>

          <p class="mt-4 text-lg">
            {{ t('comun.direccionNaves') }}
          </p>
        </div>
      </div>
      <iframe
        :title="t('entradas.mapaTitulo')"
        src="https://maps.google.com/maps?q=Las%20Naves%20Valencia&t=&z=15&ie=UTF8&iwloc=&output=embed"
        class="w-full h-75 md:h-125"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </section>

  </main>
</template>
