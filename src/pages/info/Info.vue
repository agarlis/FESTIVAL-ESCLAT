<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { t } from '@/components/data/idiomas'
</script>

<template>
<main class="bg-white text-black px-8">

    <section class="max-w-6xl mx-auto">

      <h1 class="text-5xl font-bold text-center py-8">
        {{ t('info.titulo') }}
      </h1>

      <Accordion
  type="single"
  collapsible
  class="w-full flex flex-col gap-6"
>

  <AccordionItem value="normas" class="w-full border border-black px-6">
          <AccordionTrigger class="w-full italic text-xl font-extralight">
            {{ t('info.normas') }}
          </AccordionTrigger>
          <AccordionContent class="pb-6 text-lg leading-relaxed">
            {{ t('info.normasTexto') }}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="compra" class="w-full border border-black px-6">
          <AccordionTrigger class="w-full italic text-xl font-extralight">
            {{ t('info.compra') }}
          </AccordionTrigger>
          <AccordionContent class="pb-6 text-lg leading-relaxed">
            {{ t('info.compraTexto') }}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="recinto" class="w-full border border-black px-6">
  <AccordionTrigger class="w-full italic text-xl font-extralight">
    {{ t('info.recinto') }}
  </AccordionTrigger>

  <AccordionContent class="pb-6 text-lg leading-relaxed space-y-6">

    <p>
      {{ t('info.recintoTexto1') }}
    </p>

    <p>
      {{ t('info.recintoTexto2') }}
    </p>

    <a
      href="/documentos/mapa-esclat.pdf"
      target="_blank"
      class="inline-block border border-black px-6 py-3 uppercase text-sm font-medium hover:bg-black hover:text-white transition"
    >
      {{ t('info.verMapa') }}
    </a>

  </AccordionContent>
</AccordionItem>

        <AccordionItem value="pago" class="w-full border border-black px-6">
          <AccordionTrigger class="w-full italic text-xl font-extralight">
            {{ t('info.pago') }}
          </AccordionTrigger>
          <AccordionContent class="pb-6 text-lg leading-relaxed">
            {{ t('info.pagoTexto') }}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pulseras" class="w-full border border-black px-6">
          <AccordionTrigger class="w-full italic text-xl font-extralight">
            {{ t('info.pulseras') }}
          </AccordionTrigger>
          <AccordionContent class="pb-6 text-lg leading-relaxed">
            {{ t('info.pulserasTexto') }}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="espacio en blanco">
        </AccordionItem>




      </Accordion>

    </section>

  </main>
</template>
