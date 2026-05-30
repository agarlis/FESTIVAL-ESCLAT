<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <main class="bg-white text-black min-h-screen px-10 py-8">

    <section class="max-w-5xl mx-auto">

      <h1 class="text-5xl font-bold uppercase text-center text-[#F22E2E]">
        {{ t('legal.datosTitulo') }}
      </h1>

      <p class="mt-6 text-lg leading-relaxed">
        {{ t('legal.datosIntro') }}
      </p>

      <!-- RESPONSABLE -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.responsableTratamiento') }}
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
              {{ t('legal.ubicacionEvento') }}
            </strong>
            {{ t('comun.direccionNaves') }}
          </p>

        </div>

      </section>

      <!-- DATOS QUE TRATAMOS -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.datosTratamos') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('checkout.nombre') }},
          {{ t('checkout.email') }},
          {{ t('checkout.telefono') }},
          {{ t('checkout.direccion') }},
          {{ t('checkout.codigoPostal') }},
          {{ t('comun.producto') }},
          {{ t('comun.precio') }}
          y datos necesarios para entradas, compras e inscripciones.
        </p>

      </section>

      <!-- FINALIDADES -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.finalidades') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.comprasTexto1') }}
          {{ t('legal.comprasTexto2') }}
        </p>

      </section>

      <!-- RESTO DE APARTADOS -->
      <section
        v-for="clave in [
          'baseJuridica',
          'conservacion',
          'destinatarios',
          'derechos',
          'seguridad',
          'menores',
          'cambios'
        ]"
        :key="clave"
        class="mt-12 border-t border-[#F22E2E] pt-8"
      >

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t(`legal.${clave}`) }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t(`legal.${clave}Texto`) }}
        </p>

      </section>

      <p class="mt-12 text-sm uppercase tracking-wide text-[#F22E2E]">
        {{ t('comun.ultimaActualizacion') }}
      </p>

    </section>

  </main>
</template>