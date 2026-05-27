<script setup lang="ts">
import { t } from '@/components/data/idiomas'
</script>

<template>
  <main class="bg-white text-black min-h-screen px-10 py-8">
    <section class="max-w-5xl mx-auto">
      <h1 class="text-5xl font-bold uppercase text-center">
        {{ t('legal.cookiesTitulo') }}
      </h1>

      <p class="mt-6 text-lg leading-relaxed">
        {{ t('legal.cookiesIntro') }}
      </p>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.queCookies') }}</h2>
        <p class="mt-6 text-lg leading-relaxed">{{ t('legal.queCookiesTexto') }}</p>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.queUsamos') }}</h2>

        <div class="mt-6 space-y-6 text-lg leading-relaxed">
          <p><strong>{{ t('legal.almacenamiento') }}</strong> {{ t('legal.almacenamientoTexto') }}</p>
          <p><strong>{{ t('legal.terceros') }}</strong> {{ t('legal.tercerosTexto') }}</p>
          <p><strong>{{ t('legal.analiticas') }}</strong> {{ t('legal.analiticasTexto') }}</p>
        </div>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.tabla') }}</h2>

        <div class="mt-6 overflow-x-auto">
          <table class="w-full border border-black text-left">
            <thead class="bg-black text-white">
              <tr>
                <th class="p-4 border border-black">{{ t('legal.tecnologia') }}</th>
                <th class="p-4 border border-black">{{ t('legal.titular') }}</th>
                <th class="p-4 border border-black">{{ t('legal.finalidad') }}</th>
                <th class="p-4 border border-black">{{ t('legal.duracion') }}</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="p-4 border border-black">localStorage carrito</td>
                <td class="p-4 border border-black">ESCLAT Festival</td>
                <td class="p-4 border border-black">{{ t('legal.recordarCarrito') }}</td>
                <td class="p-4 border border-black">{{ t('legal.hastaBorrar') }}</td>
              </tr>

              <tr>
                <td class="p-4 border border-black">Google Maps</td>
                <td class="p-4 border border-black">Google</td>
                <td class="p-4 border border-black">{{ t('legal.mostrarMapa') }}</td>
                <td class="p-4 border border-black">{{ t('legal.segunGoogle') }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('legal.configurar') }}</h2>
        <p class="mt-6 text-lg leading-relaxed">{{ t('legal.configurarTexto') }}</p>
      </section>

      <section class="mt-12 border-t border-black pt-8">
        <h2 class="text-3xl font-bold uppercase">{{ t('comun.contacto') }}</h2>
        <p class="mt-6 text-lg leading-relaxed">
          {{ t('legal.contactoCookies') }}
          <a href="mailto:festivalesclat@gmail.com" class="underline hover:opacity-70">
            festivalesclat@gmail.com
          </a>.
        </p>
      </section>

      <p class="mt-12 text-sm uppercase tracking-wide">
        {{ t('comun.ultimaActualizacion') }}
      </p>
    </section>
  </main>
</template>
