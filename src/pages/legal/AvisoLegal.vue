<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <main class="bg-white text-black min-h-screen px-10 py-8">
    <section class="max-w-5xl mx-auto">
      <h1 class="text-5xl font-bold uppercase text-center">
        {{ t('legal.avisoTitulo') }}
      </h1>

      <p class="mt-6 text-lg leading-relaxed">
        {{ t('legal.introAviso') }}
      </p>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">
          {{ t('legal.datosIdentificativos') }}
        </h2>

        <div class="mt-6 space-y-3 text-lg">
          <p><strong>{{ t('legal.titular') }}</strong> ESCLAT Festival</p>
          <p><strong>{{ t('legal.correoContacto') }}</strong> festivalesclat@gmail.com</p>
          <p><strong>{{ t('legal.actividad') }}</strong> {{ t('legal.actividadTexto') }}</p>
          <p><strong>{{ t('legal.ubicacionEvento') }}</strong> {{ t('comun.direccionNaves') }}</p>
        </div>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.usoWeb') }}</h2>
        <p class="mt-6 text-lg leading-relaxed">{{ t('legal.usoWebTexto') }}</p>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.compras') }}</h2>
        <p class="mt-6 text-lg leading-relaxed">{{ t('legal.comprasTexto1') }}</p>
        <p class="mt-4 text-lg leading-relaxed">{{ t('legal.comprasTexto2') }}</p>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.propiedad') }}</h2>
        <p class="mt-6 text-lg leading-relaxed">{{ t('legal.propiedadTexto') }}</p>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.enlaces') }}</h2>
        <p class="mt-6 text-lg leading-relaxed">{{ t('legal.enlacesTexto') }}</p>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.responsabilidad') }}</h2>
        <p class="mt-6 text-lg leading-relaxed">{{ t('legal.responsabilidadTexto') }}</p>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.legislacion') }}</h2>
        <p class="mt-6 text-lg leading-relaxed">{{ t('legal.legislacionTexto') }}</p>
      </section>

      <p class="mt-12 text-sm uppercase tracking-wide">
        {{ t('comun.ultimaActualizacion') }}
      </p>
    </section>
  </main>
</template>
