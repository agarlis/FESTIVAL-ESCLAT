<script setup lang="ts">
import Navbar from '@/components/layout/Navbar.vue'
</script>

<template>
  <header class="bg-white text-black">

    <!-- TOP BAR -->
    <div class="flex items-center justify-between px-10 py-8">

      <!-- REDES -->
      <div class="flex gap-6 text-sm uppercase">
        <span>X</span>
        <span>IG</span>
        <span>TK</span>
      </div>

      <!-- LOGO -->
      <div>
        <h1>ESCLAT</h1>
      </div>

      <!-- IDIOMA -->
      <div class="flex gap-4 text-sm uppercase">
        <span class="font-bold">VAL</span>
        <span>CAST</span>
        <span>ENG</span>
      </div>

    </div>

    <Navbar />

  </header>
</template>