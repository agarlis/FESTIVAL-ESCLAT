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
  <main class="bg-white text-black px-4 sm:px-6 md:px-8">

    <section class="max-w-6xl mx-auto">

      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-center py-6 md:py-8"
      >
        {{ t('info.titulo') }}
      </h1>

      <Accordion
        type="single"
        collapsible
        class="w-full flex flex-col gap-4 md:gap-6"
      >

        <AccordionItem
          value="normas"
          class="w-full bg-white border border-[#F22E2E] px-4 md:px-6"
        >
          <AccordionTrigger
            class="w-full italic text-base sm:text-lg md:text-xl font-extralight text-[#F22E2E] text-left"
          >
            {{ t('info.normas') }}
          </AccordionTrigger>

          <AccordionContent
            class="pb-4 md:pb-6 text-sm sm:text-base md:text-lg leading-relaxed text-black"
          >
            {{ t('info.normasTexto') }}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="compra"
          class="w-full bg-white border border-[#F22E2E] px-4 md:px-6"
        >
          <AccordionTrigger
            class="w-full italic text-base sm:text-lg md:text-xl font-extralight text-[#F22E2E] text-left"
          >
            {{ t('info.compra') }}
          </AccordionTrigger>

          <AccordionContent
            class="pb-4 md:pb-6 text-sm sm:text-base md:text-lg leading-relaxed text-black"
          >
            {{ t('info.compraTexto') }}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="recinto"
          class="w-full bg-white border border-[#F22E2E] px-4 md:px-6"
        >
          <AccordionTrigger
            class="w-full italic text-base sm:text-lg md:text-xl font-extralight text-[#F22E2E] text-left"
          >
            {{ t('info.recinto') }}
          </AccordionTrigger>

          <AccordionContent
            class="pb-4 md:pb-6 text-sm sm:text-base md:text-lg leading-relaxed space-y-4 md:space-y-6 text-black"
          >

            <p>
              {{ t('info.recintoTexto1') }}
            </p>

            <p>
              {{ t('info.recintoTexto2') }}
            </p>

            <a
              href="/documentos/mapa-esclat.pdf"
              target="_blank"
              class="inline-block border border-[#F22E2E] px-4 md:px-6 py-2 md:py-3 uppercase text-xs sm:text-sm font-medium hover:bg-[#F22E2E] hover:text-white transition"
            >
              {{ t('info.verMapa') }}
            </a>

          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="pago"
          class="w-full bg-white border border-[#F22E2E] px-4 md:px-6"
        >
          <AccordionTrigger
            class="w-full italic text-base sm:text-lg md:text-xl font-extralight text-[#F22E2E] text-left"
          >
            {{ t('info.pago') }}
          </AccordionTrigger>

          <AccordionContent
            class="pb-4 md:pb-6 text-sm sm:text-base md:text-lg leading-relaxed text-black"
          >
            {{ t('info.pagoTexto') }}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="pulseras"
          class="w-full bg-white border border-[#F22E2E] px-4 md:px-6"
        >
          <AccordionTrigger
            class="w-full italic text-base sm:text-lg md:text-xl font-extralight text-[#F22E2E] text-left"
          >
            {{ t('info.pulseras') }}
          </AccordionTrigger>

          <AccordionContent
            class="pb-4 md:pb-6 text-sm sm:text-base md:text-lg leading-relaxed text-black"
          >
            {{ t('info.pulserasTexto') }}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="espacio en blanco">
        </AccordionItem>

      </Accordion>

    </section>

  </main>
</template>