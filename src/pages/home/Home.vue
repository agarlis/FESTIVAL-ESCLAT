<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
</script>

<template>
  <main class="bg-white text-black">

    <!-- BIENVENIDA -->
    <section class="max-w-5xl mx-auto px-8 py-8 text-center">

      <h1 class="text-5xl font-bold mb-4">
        BIENVENIDOS A ESCLAT!
      </h1>

      <p class="text-xl mb-12">
        Festival de música, pensamiento y creatividad
      </p>

      <div class="text-xl mx-auto text-left leading-relaxed">
        <p>
          <strong>ESCLAT</strong> es una explosión de creatividad, música y cultura.
          Un festival donde diferentes disciplinas artísticas convergen en un espacio
          inclusivo, vibrante y seguro para todas las personas. Música, comunidad y
          cultura valenciana se unen para crear una experiencia única llena de
          expresión, conexión y energía.
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
        Del 23 al 25 de octubre 2026
      </h2>

      <p class="text-1xl italic">
        Las Naves, València, España
      </p>

    </section>

    <!-- NEWSLETTER -->
<section class="max-w-2xl mx-auto px-8 py-8 text-center">

  <h2 class="text-3xl font-bold mb-12">
    Suscríbete
  </h2>

  <form class="flex flex-col gap-6">

    <Input
      type="text"
      placeholder="Nombre"
      class="border-black rounded-none h-14 italic shadow-none"
    />

    <Input
      type="email"
      placeholder="Correo electrónico"
      class="border-black rounded-none h-14 italic shadow-none"
    />

    <div class="flex items-center justify-center gap-3">

      <Checkbox id="privacidad" />

      <Label for="privacidad" class="text-sm cursor-pointer">
        Acepto la política de privacidad
      </Label>

    </div>

    <Button
      type="submit"
      class="mx-auto rounded-none border border-black bg-white text-black hover:bg-black hover:text-white px-8 py-4 uppercase font-semibold shadow-none"
    >
      Enviar
    </Button>

  </form>

</section>

  </main>
</template>