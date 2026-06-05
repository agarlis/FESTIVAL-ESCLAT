<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { t } from '@/components/data/idiomas'

import videoEsclat from '@/assets/videos/videoEsclat.mp4'
</script>

<template>
  <main class="bg-white text-black">

    <!-- BIENVENIDA -->
    <section class="max-w-5xl mx-auto px-6 md:px-8 py-8 md:py-12 text-center">

      <h1
        class=" text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-[#F22E2E]"
      >
        {{ t('home.titulo') }}
      </h1>

      <p
        class="text-base sm:text-lg md:text-xl mb-8 md:mb-12 italic"
      >
        {{ t('home.subtitulo') }}
      </p>

      <div
        class="text-base sm:text-lg md:text-xl mx-auto text-left leading-relaxed"
      >
        <p>
          {{ t('home.descripcion') }}
        </p>
      </div>

    </section>

    <!-- VIDEO -->
    <section class="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">

      <video
        class="w-full object-contain"
        controls
        autoplay
        muted
        loop
      >
        <source :src="videoEsclat" type="video/mp4" />
      </video>

    </section>

    <!-- FECHA -->
    <section class="text-center py-8 md:py-12 px-6">

      <h2
        class="text-2xl sm:text-3xl font-bold text-[#F22E2E]"
      >
        {{ t('home.fecha') }}
      </h2>

      <p
        class="text-base sm:text-lg md:text-xl italic mt-2"
      >
        {{ t('home.ubicacion') }}
      </p>

    </section>

    <!-- NEWSLETTER -->
    <section
      class="max-w-2xl mx-auto px-6 md:px-8 py-8 md:py-12 text-center"
    >

      <h2
        class="text-2xl sm:text-3xl font-bold mb-8 md:mb-12 text-[#F22E2E]"
      >
        {{ t('home.newsletter') }}
      </h2>

      <form class="flex flex-col gap-5 md:gap-6">

        <Input
          type="text"
          :placeholder="t('home.nombre')"
          class="bg-white border-[#F22E2E] rounded-none h-12 md:h-14 italic shadow-none focus-visible:ring-[#F22E2E]"
        />

        <Input
          type="email"
          :placeholder="t('home.correo')"
          class="bg-white border-[#F22E2E] rounded-none h-12 md:h-14 italic shadow-none focus-visible:ring-[#F22E2E]"
        />

        <div
          class="flex items-start sm:items-center justify-center gap-3 text-left"
        >

          <Checkbox
            id="privacidad"
            class="bg-white border-[#F22E2E] data-[state=checked]:bg-[#F22E2E] data-[state=checked]:border-[#F22E2E] mt-1 sm:mt-0"
          />

          <Label
            for="privacidad"
            class="text-xs sm:text-sm cursor-pointer leading-relaxed"
          >
            {{ t('home.privacidad') }}
          </Label>

        </div>

        <Button
          type="submit"
          class="mx-auto w-full sm:w-auto rounded-none border border-[#F22E2E] bg-[#F22E2E] text-white hover:bg-white hover:text-[#F22E2E] px-8 py-4 uppercase font-semibold shadow-none"
        >
          {{ t('home.enviar') }}
        </Button>

      </form>

    </section>

  </main>
</template>