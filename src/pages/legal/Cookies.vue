<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <main class="bg-white text-black min-h-screen px-10 py-8">

    <section class="max-w-5xl mx-auto">

      <h1 class="text-5xl font-bold uppercase text-center text-[#F22E2E]">
        {{ t('legal.cookiesTitulo') }}
      </h1>

      <p class="mt-6 text-lg leading-relaxed">
        {{ t('legal.cookiesIntro') }}
      </p>

      <!-- QUÉ SON LAS COOKIES -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.queCookies') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.queCookiesTexto') }}
        </p>

      </section>

      <!-- QUÉ UTILIZAMOS -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.queUsamos') }}
        </h2>

        <div class="mt-6 space-y-6 text-lg leading-relaxed">

          <p>
            <strong class="text-[#F22E2E]">
              {{ t('legal.almacenamiento') }}
            </strong>
            {{ t('legal.almacenamientoTexto') }}
          </p>

          <p>
            <strong class="text-[#F22E2E]">
              {{ t('legal.terceros') }}
            </strong>
            {{ t('legal.tercerosTexto') }}
          </p>

          <p>
            <strong class="text-[#F22E2E]">
              {{ t('legal.analiticas') }}
            </strong>
            {{ t('legal.analiticasTexto') }}
          </p>

        </div>

      </section>

      <!-- TABLA -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.tabla') }}
        </h2>

        <div class="mt-6 overflow-x-auto">

          <table class="w-full border border-[#F22E2E] text-left">

            <thead class="bg-[#F22E2E] text-white">

              <tr>
                <th class="p-4 border border-[#F22E2E]">
                  {{ t('legal.tecnologia') }}
                </th>

                <th class="p-4 border border-[#F22E2E]">
                  {{ t('legal.titular') }}
                </th>

                <th class="p-4 border border-[#F22E2E]">
                  {{ t('legal.finalidad') }}
                </th>

                <th class="p-4 border border-[#F22E2E]">
                  {{ t('legal.duracion') }}
                </th>
              </tr>

            </thead>

            <tbody>

              <tr>

                <td class="p-4 border border-[#F22E2E]">
                  localStorage carrito
                </td>

                <td class="p-4 border border-[#F22E2E]">
                  ESCLAT Festival
                </td>

                <td class="p-4 border border-[#F22E2E]">
                  {{ t('legal.recordarCarrito') }}
                </td>

                <td class="p-4 border border-[#F22E2E]">
                  {{ t('legal.hastaBorrar') }}
                </td>

              </tr>

              <tr>

                <td class="p-4 border border-[#F22E2E]">
                  Google Maps
                </td>

                <td class="p-4 border border-[#F22E2E]">
                  Google
                </td>

                <td class="p-4 border border-[#F22E2E]">
                  {{ t('legal.mostrarMapa') }}
                </td>

                <td class="p-4 border border-[#F22E2E]">
                  {{ t('legal.segunGoogle') }}
                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </section>

      <!-- CONFIGURAR -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('legal.configurar') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.configurarTexto') }}
        </p>

      </section>

      <!-- CONTACTO -->
      <section class="mt-12 border-t border-[#F22E2E] pt-8">

        <h2 class="text-3xl font-bold uppercase text-[#F22E2E]">
          {{ t('comun.contacto') }}
        </h2>

        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.contactoCookies') }}

          <a
            href="mailto:festivalesclat@gmail.com"
            class="text-[#F22E2E] underline hover:opacity-70"
          >
            festivalesclat@gmail.com
          </a>
        </p>

      </section>

      <p class="mt-12 text-sm uppercase tracking-wide text-[#F22E2E]">
        {{ t('comun.ultimaActualizacion') }}
      </p>

    </section>

  </main>
</template>