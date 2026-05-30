<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <footer class="bg-white text-black px-4 sm:px-6 md:px-10 py-8">

    <!-- SPONSORS -->
    <div
      class="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 mb-12 md:mb-16 max-w-6xl mx-auto"
    >

      <span class="text-[10px] sm:text-xs font-semibold">
        Organiza:
      </span>

      <img
        src="@/assets/logos/Logo 1.svg"
        alt="Esclat"
        class="h-5 sm:h-6 md:h-8 w-auto"
      />

      <img
        src="@/assets/logos/Logo 2.svg"
        alt="Ajuntament de València i Las Naves"
        class="h-4 sm:h-5 md:h-7 w-auto"
      />

      <span class="text-[10px] sm:text-xs font-semibold sm:ml-4 md:ml-6">
        Colabora:
      </span>

      <img
        src="@/assets/logos/Logo 3.svg"
        alt="Diputació de València"
        class="h-5 sm:h-6 md:h-8 w-auto"
      />

      <img
        src="@/assets/logos/Logo 4.svg"
        alt="IVAJ"
        class="h-4 sm:h-5 md:h-6 w-auto"
      />

      <img
        src="@/assets/logos/Logo 5.svg"
        alt="Coca-Cola"
        class="h-5 sm:h-6 md:h-8 w-auto"
      />

      <img
        src="@/assets/logos/Logo 6.svg"
        alt="Turia"
        class="h-6 sm:h-8 md:h-10 w-auto"
      />

    </div>

    <!-- LEGAL -->
    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-10 text-xs sm:text-sm mb-6 md:mb-8"
    >

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
    <div class="text-center text-[10px] sm:text-xs opacity-60">
      {{ t('footer.copyright') }}
    </div>

  </footer>
</template>