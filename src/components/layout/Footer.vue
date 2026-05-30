<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <footer class="bg-white text-black px-10 py-8">

    <!-- SPONSORS -->
    <div class="flex flex-wrap justify-center items-center gap-8 mb-16 max-w-6xl mx-auto">

      <span class="text-xs font-semibold">
        Organiza:
      </span>

      <img
        src="@/assets/logos/Logo 1.svg"
        alt="Esclat"
        class="max-h-8 w-auto"
      />

      <img
        src="@/assets/logos/Logo 2.svg"
        alt="Ajuntament de València i Las Naves"
        class="max-h-7 w-auto"
      />

      <span class="text-xs font-semibold  ml-6">
        Colabora:
      </span>

      <img
        src="@/assets/logos/Logo 3.svg"
        alt="Diputació de València"
        class="max-h-8 w-auto"
      />

      <img
        src="@/assets/logos/Logo 4.svg"
        alt="IVAJ"
        class="max-h-6 w-auto"
      />

      <img
        src="@/assets/logos/Logo 5.svg"
        alt="Coca-Cola"
        class="max-h-8 w-auto"
      />

      <img
        src="@/assets/logos/Logo 6.svg"
        alt="Turia"
        class="max-h-10 w-auto"
      />

    </div>

    <!-- LEGAL -->
    <div class="flex justify-center gap-10 text-sm mb-8">

      <RouterLink
        to="/aviso-legal"
        class="hover:text-[#F22E2E] transition"
      >
        {{ t('footer.avisoLegal') }}
      </RouterLink>

      <RouterLink
        to="/proteccion-datos"
        class="hover:text-[#F22E2E] transition"
      >
        {{ t('footer.proteccionDatos') }}
      </RouterLink>

      <RouterLink
        to="/cookies"
        class="hover:text-[#F22E2E] transition"
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