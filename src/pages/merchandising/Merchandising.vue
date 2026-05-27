<script setup lang="ts">
import TarjetaProducto from '@/components/merchandising/TarjetaProducto.vue'
import { productos } from '@/components/data/merchandising'
import { t } from '@/components/data/idiomas'
</script>

<template>
  <main class="bg-white text-black px-8">

    <section class="max-w-7xl mx-auto">

      <h1 class="text-5xl font-bold text-center py-8">
        {{ t('merchandising.titulo') }}
      </h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

        <TarjetaProducto
          v-for="producto in productos"
          :key="producto.id"
          :producto="producto"
        />

      </div>

    </section>

  </main>
</template>
