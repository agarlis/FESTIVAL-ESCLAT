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

      <h1 class="text-5xl font-bold mb-4">
        {{ t('home.titulo') }}
      </h1>

      <p class="text-xl mb-12">
        {{ t('home.subtitulo') }}
      </p>

      <div class="text-xl mx-auto text-left leading-relaxed">
        <p>
          {{ t('home.descripcion') }}
        </p>
      </div>

    </section>


    <!-- VIDEO PLACEHOLDER -->
    <section class="max-w-6xl mx-auto px-24">
      
      <div class="w-full h-150 bg-black"></div>

    </section>

    <!-- FECHA -->
    <section class="text-center py-8">

      <h2 class="text-3xl font-bold">
        {{ t('home.fecha') }}
      </h2>

      <p class="text-1xl italic">
        {{ t('home.ubicacion') }}
      </p>

    </section>

    <!-- NEWSLETTER -->
<section class="max-w-2xl mx-auto px-8 py-8 text-center">

  <h2 class="text-3xl font-bold mb-12">
    {{ t('home.newsletter') }}
  </h2>

  <form class="flex flex-col gap-6">

    <Input
      type="text"
      :placeholder="t('home.nombre')"
      class="border-black rounded-none h-14 italic shadow-none"
    />

    <Input
      type="email"
      :placeholder="t('home.correo')"
      class="border-black rounded-none h-14 italic shadow-none"
    />

    <div class="flex items-center justify-center gap-3">

      <Checkbox id="privacidad" />

      <Label for="privacidad" class="text-sm cursor-pointer">
        {{ t('home.privacidad') }}
      </Label>

    </div>

    <Button
      type="submit"
      class="mx-auto rounded-none border border-black bg-white text-black hover:bg-black hover:text-white px-8 py-4 uppercase font-semibold shadow-none"
    >
      {{ t('home.enviar') }}
    </Button>

  </form>

</section>

  </main>
</template>
