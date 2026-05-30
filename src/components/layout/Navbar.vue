<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <nav class="border-t border-b border-black px-4 sm:px-6 md:px-10 py-4 md:py-5">
    <div
      class="flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-x-8 md:gap-12 uppercase text-xs sm:text-sm"
    >
      <RouterLink
        to="/entradas"
        class="hover:text-[#F22E2E] hover:underline transition"
      >
        {{ t('nav.entradas') }}
      </RouterLink>

      <RouterLink
        to="/artistas"
        class="hover:text-[#F22E2E] hover:underline transition"
      >
        {{ t('nav.artistas') }}
      </RouterLink>

      <RouterLink
        to="/programa"
        class="hover:text-[#F22E2E] hover:underline transition"
      >
        {{ t('nav.programa') }}
      </RouterLink>

      <RouterLink
        to="/merchandising"
        class="hover:text-[#F22E2E] hover:underline transition"
      >
        {{ t('nav.merchandising') }}
      </RouterLink>

      <RouterLink
        to="/info"
        class="hover:text-[#F22E2E] hover:underline transition"
      >
        {{ t('nav.info') }}
      </RouterLink>
    </div>
  </nav>
</template>
