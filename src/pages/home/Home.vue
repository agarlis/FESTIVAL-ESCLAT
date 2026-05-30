<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { t } from '@/components/data/idiomas'
</script>

<template>
  <main class="bg-white text-black">

    <!-- BIENVENIDA -->
    <section class="max-w-5xl mx-auto px-8 py-8 text-center">

      <h1 class="text-5xl font-bold mb-4 text-[#F22E2E]">
        {{ t('home.titulo') }}
      </h1>

      <p class="text-xl mb-12 italic">
        {{ t('home.subtitulo') }}
      </p>

      <div class="text-xl mx-auto text-left leading-relaxed">
        <p>
          {{ t('home.descripcion') }}
        </p>
      </div>

    </section>

    <!-- VIDEO -->
    <section class="max-w-6xl mx-auto px-24">

      <div
        class="w-full h-150 bg-black flex items-center justify-center"
      >
        <p class="text-white text-2xl font-black uppercase tracking-wider">
          Video ESCLAT
        </p>
      </div>

    </section>

    <!-- FECHA -->
    <section class="text-center py-8">

      <h2 class="text-3xl font-bold text-[#F22E2E]">
        {{ t('home.fecha') }}
      </h2>

      <p class="text-xl italic">
        {{ t('home.ubicacion') }}
      </p>

    </section>

    <!-- NEWSLETTER -->
    <section class="max-w-2xl mx-auto px-8 py-8 text-center">

      <h2 class="text-3xl font-bold mb-12 text-[#F22E2E]">
        {{ t('home.newsletter') }}
      </h2>

      <form class="flex flex-col gap-6">

        <Input
          type="text"
          :placeholder="t('home.nombre')"
          class="border-[#F22E2E] rounded-none h-14 italic shadow-none focus-visible:ring-[#F22E2E]"
        />

        <Input
          type="email"
          :placeholder="t('home.correo')"
          class="border-[#F22E2E] rounded-none h-14 italic shadow-none focus-visible:ring-[#F22E2E]"
        />

        <div class="flex items-center justify-center gap-3">

          <Checkbox
            id="privacidad"
            class="border-[#F22E2E] data-[state=checked]:bg-[#F22E2E] data-[state=checked]:border-[#F22E2E]"
          />

          <Label
            for="privacidad"
            class="text-sm cursor-pointer"
          >
            {{ t('home.privacidad') }}
          </Label>

        </div>

        <Button
          type="submit"
          class="mx-auto rounded-none border border-[#F22E2E] bg-[#F22E2E] text-white hover:bg-white hover:text-[#F22E2E] px-8 py-4 uppercase font-semibold shadow-none"
        >
          {{ t('home.enviar') }}
        </Button>

      </form>

    </section>

  </main>
</template>