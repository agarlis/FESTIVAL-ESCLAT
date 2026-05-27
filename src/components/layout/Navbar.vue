<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <nav class="border-t border-b border-black px-10 py-5">
    <div class="flex justify-center gap-12 uppercase text-sm">
      <RouterLink to="/entradas" class="hover:underline">
        {{ t('nav.entradas') }}
      </RouterLink>

      <RouterLink to="/artistas" class="hover:underline">
        {{ t('nav.artistas') }}
      </RouterLink>

      <RouterLink to="/programa" class="hover:underline">
        {{ t('nav.programa') }}
      </RouterLink>

      <RouterLink to="/merchandising" class="hover:underline">
        {{ t('nav.merchandising') }}
      </RouterLink>

      <RouterLink to="/info" class="hover:underline">
        {{ t('nav.info') }}
      </RouterLink>
    </div>
  </nav>
</template>
