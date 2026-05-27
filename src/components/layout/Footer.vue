<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <footer class="bg-white text-black px-10 py-8">

    <!-- SPONSORS -->
<div class="grid grid-cols-3 gap-x-20 gap-y-12 justify-center mb-16 max-w-4xl mx-auto">

  <div class="flex justify-center items-center h-16">
    <img
      src="@/assets/logos/Logo 1.svg"
      alt="Esclat"
      class="max-h-12 w-auto"
      a=""
    />
  </div>

  <div class="flex justify-center items-center h-16">
  <img
    src="@/assets/logos/Logo 2.svg"
    alt="Ajuntament de València i Las Naves"
    class="max-h-8 w-auto"
  />
  </div>

  <div class="flex justify-center items-center h-16">
    <img
      src="@/assets/logos/Logo 3.svg"
      alt="Diputació de València"
      class="max-h-8 w-auto"
    />
  </div>

  <div class="flex justify-center items-center h-16">
    <img
      src="@/assets/logos/Logo 4.svg"
      alt="IVAJ"
      class="max-h-8 w-auto"
    />
  </div>

  <div class="flex justify-center items-center h-16">
    <img
      src="@/assets/logos/Logo 5.svg"
      alt="Coca-Cola"
      class="max-h-8 w-auto"
    />
  </div>

  <div class="flex justify-center items-center h-16">
    <img
      src="@/assets/logos/Logo 6.svg"
      alt="Turia"
      class="max-h-14 w-auto"
    />
  </div>

</div>

    <!-- LEGAL -->
    <div class="flex justify-center gap-10 text-sm mb-8">

      <RouterLink
        to="/aviso-legal"
        class="hover:opacity-60 transition"
      >
        {{ t('footer.avisoLegal') }}
      </RouterLink>

      <RouterLink
        to="/proteccion-datos"
        class="hover:opacity-60 transition"
      >
        {{ t('footer.proteccionDatos') }}
      </RouterLink>

      <RouterLink
        to="/cookies"
        class="hover:opacity-60 transition"
      >
        {{ t('footer.cookies') }}
      </RouterLink>

    </div>

    <!-- COPYRIGHT -->
    <div class="text-center text-xs opacity-60">
      {{ t('footer.copyright') }}
    </div>

  </footer>
</template>
