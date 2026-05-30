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
    <div class="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-6 md:py-8 gap-6 md:gap-0">

      <!-- REDES -->
      <div class="flex items-center gap-4 md:gap-6 order-2 md:order-1">

        <a href="https://www.instagram.com/festivalesclat/">
          <Instagram
            class="w-5 h-5 cursor-pointer hover:text-[#F22E2E] transition"
          />
        </a>

        <a href="https://x.com/festivalesclat">
          <Twitter
            class="w-5 h-5 cursor-pointer hover:text-[#F22E2E] transition"
          />
        </a>

        <a href="https://www.tiktok.com/@festivalesclat">
          <Music2
            class="w-5 h-5 cursor-pointer hover:text-[#F22E2E] transition"
          />
        </a>

      </div>

      <!-- LOGO -->
      <div class="order-1 md:order-2">
        <RouterLink to="/">
          <img
            src="@/assets/logos/Logo 1.svg"
            alt="ESCLAT"
            class="h-12 sm:h-14 md:h-16 w-auto cursor-pointer hover:opacity-80 transition"
          />
        </RouterLink>
      </div>

      <!-- DERECHA -->
      <div class="flex items-center gap-4 md:gap-6 order-3">

        <!-- IDIOMAS -->
        <div class="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm uppercase">
          <button
            v-for="idioma in idiomas"
            :key="idioma.codigo"
            type="button"
            :aria-label="`${t('comun.cambiarIdioma')} ${idioma.nombre}`"
            :class="idiomaActivo === idioma.codigo ? 'font-black underline text-[#F22E2E]' : ''"
            class="transition hover:text-[#F22E2E]"
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
            class="w-5 h-5 cursor-pointer hover:text-[#F22E2E] transition"
          />
        </RouterLink>

      </div>

    </div>

    <Navbar />

  </header>
</template>