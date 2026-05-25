<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

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
    ['email', 'Correo electrónico'],
    ['nombre', 'Nombre'],
    ['apellidos', 'Apellidos'],
    ['direccion', 'Dirección'],
    ['codigoPostal', 'Código postal'],
    ['telefono', 'Teléfono'],
    ['numeroTarjeta', 'Número de tarjeta'],
    ['mmAa', 'MM/AA'],
    ['cvv', 'CVV'],
  ]

  campos.forEach(([campo, etiqueta]) => {
    if (!form.value[campo as keyof typeof form.value]) {
      errors.value[campo as string] = `${etiqueta} es obligatorio.`
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
</script>

<template>
  <main class="bg-white min-h-screen px-12 py-16">

    <section class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

      <!-- FORM -->
      <div>

        <h2 class="text-3xl font-bold mb-10">
          Contacto
        </h2>

        <div class="space-y-4 mb-8">
          <Input v-model="form.email" placeholder="Correo electrónico" class="italic border border-black rounded-none bg-white h-12" />
          <p v-if="errors.email" class="text-sm text-red-600">
            {{ errors.email }}
          </p>

          <Input v-model="form.nombre" placeholder="Nombre" class="italic border border-black rounded-none bg-white h-12" />
          <p v-if="errors.nombre" class="text-sm text-red-600">
            {{ errors.nombre }}
          </p>

          <Input v-model="form.apellidos" placeholder="Apellidos" class="italic border border-black rounded-none bg-white h-12" />
          <p v-if="errors.apellidos" class="text-sm text-red-600">
            {{ errors.apellidos }}
          </p>

          <Input v-model="form.direccion" placeholder="Dirección" class="italic border border-black rounded-none bg-white h-12" />
          <p v-if="errors.direccion" class="text-sm text-red-600">
            {{ errors.direccion }}
          </p>

          <Input v-model="form.codigoPostal" placeholder="Código postal" class="italic border border-black rounded-none bg-white h-12" />
          <p v-if="errors.codigoPostal" class="text-sm text-red-600">
            {{ errors.codigoPostal }}
          </p>

          <Input v-model="form.telefono" placeholder="Teléfono" class="italic border border-black rounded-none bg-white h-12" />
          <p v-if="errors.telefono" class="text-sm text-red-600">
            {{ errors.telefono }}
          </p>
        </div>

        <h2 class="text-3xl font-bold mb-6">
          Pago
        </h2>

        <div class="space-y-4 mb-8">
          <Input v-model="form.numeroTarjeta" placeholder="Número tarjeta" class="italic border border-black rounded-none bg-white h-12" />
          <p v-if="errors.numeroTarjeta" class="text-sm text-red-600">
            {{ errors.numeroTarjeta }}
          </p>

          <Input
            :model-value="formatoFecha(form.mmAa)"
            @update:modelValue="value => form.mmAa = formatoFecha(String(value))"
            placeholder="MM/AA"
            class="italic border border-black rounded-none bg-white h-12"
          />
          <p v-if="errors.mmAa" class="text-sm text-red-600">
            {{ errors.mmAa }}
          </p>

          <Input
            :model-value="formatoCvv(form.cvv)"
            @update:modelValue="value => form.cvv = formatoCvv(String(value))"
            placeholder="CVV"
            class="italic border border-black rounded-none bg-white h-12"
          />
          <p v-if="errors.cvv" class="text-sm text-red-600">
            {{ errors.cvv }}
          </p>
        </div>

        <p
          v-if="Object.keys(errors).length"
          class="text-sm text-red-600 mb-4"
        >
          Rellena todos los campos para continuar con el pago.
        </p>

        <Button
          @click="finalizarCompra"
          class="mx-auto rounded-none border border-black bg-white text-black hover:bg-black hover:text-white px-8 py-4 uppercase font-semibold shadow-none"
        >
          Pagar ahora
        </Button>

      </div>

      <!-- RESUMEN -->
      <div class="bg-gray-50 p-10 rounded-lg">
        <h2 class="text-3xl font-bold mb-8">
          Resumen de compra
        </h2>

        <div
          v-if="carrito.length"
          class="space-y-6"
        >
          <div class="grid grid-cols-[2fr_1fr_1fr] gap-4 text-sm uppercase tracking-wide border-b pb-4">
            <span>Producto</span>
            <span class="text-center">Cantidad</span>
            <span class="text-right">Precio</span>
          </div>

          <div
            v-for="(item, index) in carrito"
            :key="`${item.producto?.id || index}-${item.talla || 'sin-talla'}-${index}`"
            class="grid grid-cols-[2fr_1fr_1fr] gap-4 items-center"
          >
            <div>
              <p class="font-semibold uppercase">
                {{ item.producto?.nombre || 'Producto' }}
              </p>
              <p v-if="item.talla" class="text-sm text-gray-600 mt-1">
                Talla: {{ item.talla }}
              </p>
            </div>

            <p class="text-center">
              {{ item.cantidad || 0 }}
            </p>

            <div class="text-right">
              <p class="italic">
                {{ item.producto?.precio || '0,00€' }}
              </p>
              <p class="text-sm text-gray-600">
                {{ formatearPrecio(parsePrecio(item.producto?.precio) * (item.cantidad || 0)) }}
              </p>
            </div>
          </div>

          <div class="border-t pt-6 mt-6">
            <div class="flex justify-between text-sm uppercase tracking-wide mb-2">
              <span>Productos</span>
              <span>{{ totalItems }}</span>
            </div>

            <div class="flex justify-between text-2xl font-bold">
              <span>Total</span>
              <span>{{ formatearPrecio(totalPrecio) }}</span>
            </div>
          </div>
        </div>

        <div
          v-else
          class="text-gray-600"
        >
          No hay productos en el carrito.
        </div>
      </div>

    </section>

  </main>
</template>