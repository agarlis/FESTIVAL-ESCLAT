<template>
  <header class="site-header">
    <nav class="site-nav">
      <RouterLink to="/">Inicio</RouterLink>
      <RouterLink to="/artistas">Artistas</RouterLink>
      <RouterLink to="/programa">Programa</RouterLink>
      <RouterLink to="/entradas">Entradas</RouterLink>
      <RouterLink to="/merchandising">Merchandising</RouterLink>
      <RouterLink to="/info">Info</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

