<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
</script>

<template>
<main class="bg-white text-black px-8 py-8">

    <section class="max-w-6xl mx-auto">

      <h1 class="text-5xl font-bold text-center py-8">
        INFORMACIÓN
      </h1>

      <Accordion
  type="single"
  collapsible
  class="w-full flex flex-col gap-6"
>

  <AccordionItem value="normas" class="w-full border border-black px-6">
          <AccordionTrigger class="w-full italic text-xl font-extralight">
            Normas
          </AccordionTrigger>
          <AccordionContent class="pb-6 text-lg leading-relaxed">
            ESCLAT es un espacio seguro, inclusivo y libre de discriminación. No se tolerarán actitudes machistas, LGTBIfóbicas, racistas o violentas. 
            No está permitido acceder con bebidas del exterior, objetos peligrosos, sustancias ilegales ni materiales que puedan comprometer la seguridad del evento.
            Respeta al resto de asistentes, artistas y equipo del festival. Queremos que todo el mundo disfrute de una experiencia creativa, libre y segura.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="compra" class="w-full border border-black px-6">
          <AccordionTrigger class="w-full italic text-xl font-extralight">
            Guía de compra
          </AccordionTrigger>
          <AccordionContent class="pb-6 text-lg leading-relaxed">
            Consigue tu entrada directamente desde la web seleccionando el tipo de acceso que prefieras. 
            Recibirás un correo de confirmación con tu entrada digital y código QR. Guárdalo para acceder al festival.
            Algunas actividades con aforo reducido requerirán inscripción previa aunque el acceso general al festival esté incluido.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="recinto" class="w-full border border-black px-6">
  <AccordionTrigger class="w-full italic text-xl font-extralight">
    Recinto
  </AccordionTrigger>

  <AccordionContent class="pb-6 text-lg leading-relaxed space-y-6">

    <p>
      ESCLAT se celebra en Las Naves, València, un espacio cultural contemporáneo
      adaptado para conciertos, talleres, instalaciones creativas y experiencias audiovisuales.
    </p>

    <p>
      El recinto contará con escenario principal, espacios creativos, zona chill,
      food area y puntos de información.
    </p>

    <a
      href="/documentos/mapa-esclat.pdf"
      target="_blank"
      class="inline-block border border-black px-6 py-3 uppercase text-sm font-medium hover:bg-black hover:text-white transition"
    >
      Ver mapa
    </a>

  </AccordionContent>
</AccordionItem>

        <AccordionItem value="pago" class="w-full border border-black px-6">
          <AccordionTrigger class="w-full italic text-xl font-extralight">
            ¿Cómo se paga el festival?
          </AccordionTrigger>
          <AccordionContent class="pb-6 text-lg leading-relaxed">
            Dentro del festival podrás pagar con tarjeta o métodos de pago digitales. 
            Algunas zonas podrán funcionar mediante sistema cashless vinculado a tu entrada o pulsera.
            Te recomendamos llevar batería en el móvil para acceder fácilmente a tus entradas y pagos digitales.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pulseras" class="w-full border border-black px-6">
          <AccordionTrigger class="w-full italic text-xl font-extralight">
            Pulseras
          </AccordionTrigger>
          <AccordionContent class="pb-6 text-lg leading-relaxed">
            A la llegada recibirás tu pulsera oficial de acceso tras validar tu entrada.
            La pulsera será personal e intransferible y deberás llevarla durante toda tu estancia en el festival.
            Si se pierde o se rompe, acude al punto de información para consultar opciones de sustitución.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="espacio en blanco">
        </AccordionItem>




      </Accordion>

    </section>

  </main>
</template>