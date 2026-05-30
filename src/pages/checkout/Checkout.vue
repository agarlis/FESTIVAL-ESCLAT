<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { t } from '@/components/data/idiomas'

const router = useRouter()

const form = ref({
  email: '',
  nombre: '',
  apellidos: '',
  direccion: '',
  codigoPostal: '',
  telefono: '',
  numeroTarjeta: '',
  mmAa: '',
  cvv: '',
})

const errors = ref<Record<string, string>>({})

const parsePrecio = (precio?: string) => {
  if (!precio) {
    return 0
  }

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

const totalItems = computed(() => {
  return carrito.value.reduce((sum, item) => sum + (item.cantidad || 0), 0)
})

const totalPrecio = computed(() => {
  return carrito.value.reduce((sum, item) => {
    return sum + parsePrecio(item.producto?.precio) * (item.cantidad || 0)
  }, 0)
})

const validarFormulario = () => {
  errors.value = {}

  const campos = [
    ['email', t('checkout.email')],
    ['nombre', t('checkout.nombre')],
    ['apellidos', t('checkout.apellidos')],
    ['direccion', t('checkout.direccion')],
    ['codigoPostal', t('checkout.codigoPostal')],
    ['telefono', t('checkout.telefono')],
    ['numeroTarjeta', t('checkout.numeroTarjeta')],
    ['mmAa', 'MM/AA'],
    ['cvv', 'CVV'],
  ]

  campos.forEach(([campo, etiqueta]) => {
    if (!form.value[campo as keyof typeof form.value]) {
      errors.value[campo as string] = `${etiqueta} ${t('checkout.campoObligatorio')}`
    }
  })

  return Object.keys(errors.value).length === 0
}

const formatoFecha = (valor: string) => {
  const soloDigitos = valor.replace(/\D/g, '').slice(0, 4)

  if (soloDigitos.length <= 2) {
    return soloDigitos
  }

  return `${soloDigitos.slice(0, 2)}/${soloDigitos.slice(2, 4)}`
}

const formatoCvv = (valor: string) => {
  return valor.replace(/\D/g, '').slice(0, 3)
}

const finalizarCompra = () => {
  if (!validarFormulario()) {
    return
  }

  localStorage.removeItem('carrito')
  router.push('/merchandising')
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
</script>

<template>
  <main class="bg-white min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 py-6 md:py-8">

    <section class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">

      <!-- FORM -->
      <div>

        <h2 class="text-2xl sm:text-3xl font-bold mb-8 md:mb-10 text-[#F22E2E]">
          {{ t('checkout.contacto') }}
        </h2>

        <div class="space-y-4 mb-8">

          <Input
            v-model="form.email"
            :placeholder="t('checkout.email')"
            class="italic border border-[#F22E2E] rounded-none bg-white h-11 md:h-12"
          />
          <p
            v-if="errors.email"
            class="text-sm text-[#F22E2E]"
          >
            {{ errors.email }}
          </p>

          <Input
            v-model="form.nombre"
            :placeholder="t('checkout.nombre')"
            class="italic border border-[#F22E2E] rounded-none bg-white h-11 md:h-12"
          />
          <p
            v-if="errors.nombre"
            class="text-sm text-[#F22E2E]"
          >
            {{ errors.nombre }}
          </p>

          <Input
            v-model="form.apellidos"
            :placeholder="t('checkout.apellidos')"
            class="italic border border-[#F22E2E] rounded-none bg-white h-11 md:h-12"
          />
          <p
            v-if="errors.apellidos"
            class="text-sm text-[#F22E2E]"
          >
            {{ errors.apellidos }}
          </p>

          <Input
            v-model="form.direccion"
            :placeholder="t('checkout.direccion')"
            class="italic border border-[#F22E2E] rounded-none bg-white h-11 md:h-12"
          />
          <p
            v-if="errors.direccion"
            class="text-sm text-[#F22E2E]"
          >
            {{ errors.direccion }}
          </p>

          <Input
            v-model="form.codigoPostal"
            :placeholder="t('checkout.codigoPostal')"
            class="italic border border-[#F22E2E] rounded-none bg-white h-11 md:h-12"
          />
          <p
            v-if="errors.codigoPostal"
            class="text-sm text-[#F22E2E]"
          >
            {{ errors.codigoPostal }}
          </p>

          <Input
            v-model="form.telefono"
            :placeholder="t('checkout.telefono')"
            class="italic border border-[#F22E2E] rounded-none bg-white h-11 md:h-12"
          />
          <p
            v-if="errors.telefono"
            class="text-sm text-[#F22E2E]"
          >
            {{ errors.telefono }}
          </p>

        </div>

        <h2 class="text-2xl sm:text-3xl font-bold mb-6 text-[#F22E2E]">
          {{ t('checkout.pago') }}
        </h2>

        <div class="space-y-4 mb-8">

          <Input
            v-model="form.numeroTarjeta"
            :placeholder="t('checkout.numeroTarjeta')"
            class="italic border border-[#F22E2E] rounded-none bg-white h-11 md:h-12"
          />
          <p
            v-if="errors.numeroTarjeta"
            class="text-sm text-[#F22E2E]"
          >
            {{ errors.numeroTarjeta }}
          </p>

          <Input
            :model-value="formatoFecha(form.mmAa)"
            @update:modelValue="value => form.mmAa = formatoFecha(String(value))"
            placeholder="MM/AA"
            class="italic border border-[#F22E2E] rounded-none bg-white h-11 md:h-12"
          />
          <p
            v-if="errors.mmAa"
            class="text-sm text-[#F22E2E]"
          >
            {{ errors.mmAa }}
          </p>

          <Input
            :model-value="formatoCvv(form.cvv)"
            @update:modelValue="value => form.cvv = formatoCvv(String(value))"
            placeholder="CVV"
            class="italic border border-[#F22E2E] rounded-none bg-white h-11 md:h-12"
          />
          <p
            v-if="errors.cvv"
            class="text-sm text-[#F22E2E]"
          >
            {{ errors.cvv }}
          </p>

        </div>

        <p
          v-if="Object.keys(errors).length"
          class="text-sm text-red-600 mb-4"
        >
          {{ t('checkout.rellena') }}
        </p>

        <Button
          @click="finalizarCompra"
          class="w-full sm:w-auto rounded-none border border-[#F22E2E] bg-white text-[#F22E2E] hover:bg-[#F22E2E] hover:text-white px-6 md:px-8 py-3 md:py-4 uppercase font-semibold shadow-none"
        >
          {{ t('checkout.pagar') }}
        </Button>

      </div>

      <!-- RESUMEN -->
      <div class="bg-[#F22E2E] p-5 sm:p-8 md:p-10 rounded-none">

        <h2 class="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 text-white">
          {{ t('checkout.resumen') }}
        </h2>

        <div
          v-if="carrito.length"
          class="space-y-6"
        >

          <!-- CABECERA -->
          <div class="hidden md:grid grid-cols-[2fr_1fr_1fr] gap-4 text-sm uppercase tracking-wide border-b pb-4 text-white">
            <span>{{ t('comun.producto') }}</span>
            <span class="text-center">{{ t('comun.cantidad') }}</span>
            <span class="text-right">{{ t('comun.precio') }}</span>
          </div>

          <!-- PRODUCTOS -->
          <div
            v-for="(item, index) in carrito"
            :key="`${item.producto?.id || index}-${item.talla || 'sin-talla'}-${index}`"
          >

            <!-- ESCRITORIO -->
            <div class="hidden md:grid grid-cols-[2fr_1fr_1fr] gap-4 items-center">

              <div>
                <p class="font-semibold uppercase text-white">
                  {{ item.producto ? nombreItem(item) : t('comun.producto') }}
                </p>

                <p
                  v-if="item.talla"
                  class="text-sm text-white mt-1"
                >
                  {{ t('comun.talla') }}: {{ item.talla }}
                </p>
              </div>

              <p class="text-center text-white">
                {{ item.cantidad || 0 }}
              </p>

              <div class="text-right">
                <p class="italic text-white">
                  {{ item.producto?.precio || '0,00€' }}
                </p>

                <p class="text-sm text-white">
                  {{ formatearPrecio(parsePrecio(item.producto?.precio) * (item.cantidad || 0)) }}
                </p>
              </div>

            </div>

            <!-- MÓVIL -->
            <div class="md:hidden">

              <p class="font-semibold uppercase text-white">
                {{ item.producto ? nombreItem(item) : t('comun.producto') }}
              </p>

              <p
                v-if="item.talla"
                class="text-sm text-white mt-1"
              >
                {{ t('comun.talla') }}: {{ item.talla }}
              </p>

              <div class="flex justify-between mt-3 text-white">

                <span>
                  {{ t('comun.cantidad') }}: {{ item.cantidad || 0 }}
                </span>

                <span>
                  {{ formatearPrecio(parsePrecio(item.producto?.precio) * (item.cantidad || 0)) }}
                </span>

              </div>

            </div>

          </div>

          <!-- TOTAL -->
          <div class="border-t pt-6 mt-6">

            <div class="flex justify-between text-sm uppercase tracking-wide mb-2 text-white">
              <span>{{ t('checkout.productos') }}</span>
              <span>{{ totalItems }}</span>
            </div>

            <div class="flex justify-between text-xl sm:text-2xl font-bold text-white">
              <span>{{ t('comun.total') }}</span>
              <span>{{ formatearPrecio(totalPrecio) }}</span>
            </div>

          </div>

        </div>

        <div
          v-else
          class="text-white"
        >
          {{ t('checkout.carritoVacio') }}
        </div>

      </div>

    </section>

  </main>
</template>