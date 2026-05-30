<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <main class="bg-white text-black min-h-screen px-10 py-8">

    <section class="max-w-5xl mx-auto">

      <h1 class="text-5xl font-bold uppercase text-center text-[#F22E2E]">
        {{ t('legal.avisoTitulo') }}
      </h1>

      <p class="mt-6 text-lg leading-relaxed">
        {{ t('legal.introAviso') }}
      </p>

      <!-- DATOS IDENTIFICATIVOS -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.datosIdentificativos') }}
        </h2>

        <div class="mt-6 space-y-3 text-lg">

          <p>
            <strong class="text-[#F22E2E]">
              {{ t('legal.titular') }}
            </strong>
            ESCLAT Festival
          </p>

          <p>
            <strong class="text-[#F22E2E]">
              {{ t('legal.correoContacto') }}
            </strong>
            festivalesclat@gmail.com
          </p>

          <p>
            <strong class="text-[#F22E2E]">
              {{ t('legal.actividad') }}
            </strong>
            {{ t('legal.actividadTexto') }}
          </p>

          <p>
            <strong class="text-[#F22E2E]">
              {{ t('legal.ubicacionEvento') }}
            </strong>
            {{ t('comun.direccionNaves') }}
          </p>

        </div>

      </section>

      <!-- USO WEB -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.usoWeb') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.usoWebTexto') }}
        </p>

      </section>

      <!-- COMPRAS -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.compras') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.comprasTexto1') }}
        </p>

        <p class="mt-4 text-lg leading-relaxed">
          {{ t('legal.comprasTexto2') }}
        </p>

      </section>

      <!-- PROPIEDAD -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.propiedad') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.propiedadTexto') }}
        </p>

      </section>

      <!-- ENLACES -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.enlaces') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.enlacesTexto') }}
        </p>

      </section>

      <!-- RESPONSABILIDAD -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.responsabilidad') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.responsabilidadTexto') }}
        </p>

      </section>

      <!-- LEGISLACIÓN -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.legislacion') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.legislacionTexto') }}
        </p>

      </section>

      <p class="mt-12 text-sm uppercase tracking-wide text-[#F22E2E]">
        {{ t('comun.ultimaActualizacion') }}
      </p>

    </section>

  </main>
</template>