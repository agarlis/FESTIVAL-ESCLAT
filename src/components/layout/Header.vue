<script setup lang="ts">
import Navbar from './Navbar.vue'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  Instagram,
  Twitter,
  Music2,
  ShoppingBag
} from 'lucide-vue-next'
import { cambiarIdioma, idiomaActivo, idiomas, t } from '@/components/data/idiomas'

const route = useRoute()

const mostrarCarrito = computed(() => {
  return route.path.startsWith('/entradas') ||
    route.path.startsWith('/merchandising') ||
    route.path.startsWith('/producto')
})
</script>

<template>
  <header class="bg-white text-black">

    <!-- TOP HEADER -->
    <div class="flex items-center justify-between px-10 py-8">

      <!-- REDES -->
      <div class="flex items-center gap-6">

        <a href="https://www.instagram.com/festivalesclat/">
          <Instagram
            class="w-5 h-5 cursor-pointer hover:opacity-60 transition"
          />
        </a>

        <a href="https://x.com/festivalesclat">
          <Twitter
            class="w-5 h-5 cursor-pointer hover:opacity-60 transition"
          />
        </a>

        <a href="https://www.tiktok.com/@festivalesclat">
          <Music2
            class="w-5 h-5 cursor-pointer hover:opacity-60 transition"
          />
        </a>

      </div>

      <!-- LOGO -->
      <div>
        <RouterLink to="/">
          <img
            src="@/assets/logos/Logo 1.svg"
            alt="ESCLAT"
            class="h-16 w-auto cursor-pointer hover:opacity-80 transition"
          />
        </RouterLink>
      </div>

      <!-- DERECHA -->
      <div class="flex items-center gap-6">

        <!-- IDIOMAS -->
        <div class="flex items-center gap-4 text-sm uppercase tracking-wide">
          <button
            v-for="idioma in idiomas"
            :key="idioma.codigo"
            type="button"
            :aria-label="`${t('comun.cambiarIdioma')} ${idioma.nombre}`"
            :class="idiomaActivo === idioma.codigo ? 'font-black underline' : 'hover:opacity-60'"
            class="transition"
            @click="cambiarIdioma(idioma.codigo)"
          >
            {{ idioma.etiqueta }}
          </button>
        </div>

        <!-- CARRITO -->
        <RouterLink
          v-if="mostrarCarrito"
          to="/carrito"
        >
          <ShoppingBag
            class="w-5 h-5 cursor-pointer hover:opacity-60 transition"
          />
        </RouterLink>

      </div>

    </div>

    <Navbar />

  </header>
</template>
