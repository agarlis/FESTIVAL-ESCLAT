<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { t, textoEvento } from '@/components/data/idiomas'

const props = defineProps({
  abierto: Boolean,
  evento: Object
})

const emit = defineEmits(['cerrar'])
const router = useRouter()

const hoverBoton = ref(false)

const confirmarInscripcion = () => {
  emit('cerrar')
  router.push({ name: 'programa' })
}

const colorModal = () => {
  const evento = props.evento as any

  if (evento?.diaSlug === 'viernes') return '#0669BF'
  if (evento?.diaSlug === 'sabado') return '#F22E2E'
  if (evento?.diaSlug === 'domingo') return '#F25EA3'

  return '#000000'
}
</script>

<template>
  <Dialog
    :open="abierto"
    @update:open="emit('cerrar')"
  >
    <DialogContent
      class="w-[95vw] sm:w-full sm:max-w-xl rounded-none shadow-none border-none text-white p-4 sm:p-6"
      :style="{ backgroundColor: colorModal() }"
    >
      <DialogHeader>

        <DialogTitle
          class="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white"
        >
          {{ t('programa.inscripcion') }}
        </DialogTitle>

        <DialogDescription
          class="italic text-sm sm:text-base text-white/90"
        >
          {{
            evento
              ? `${textoEvento(evento, 'titulo')} · ${textoEvento(evento, 'dia')}`
              : ''
          }}
        </DialogDescription>

      </DialogHeader>

      <div class="space-y-4 sm:space-y-6 mt-4">

        <div class="space-y-2">
          <Label class="text-white text-sm sm:text-base">
            {{ t('programa.nombreCompleto') }}
          </Label>

          <Input
            class="h-11 sm:h-12 rounded-none border-white bg-transparent text-white placeholder:text-white/60 focus-visible:ring-white"
            :placeholder="t('programa.nombrePlaceholder')"
          />
        </div>

        <div class="space-y-2">
          <Label class="text-white text-sm sm:text-base">
            {{ t('programa.correo') }}
          </Label>

          <Input
            type="email"
            placeholder="correo@email.com"
            class="h-11 sm:h-12 rounded-none border-white bg-transparent text-white placeholder:text-white/60 focus-visible:ring-white"
          />
        </div>

        <Button
          class="w-full h-11 sm:h-12 rounded-none border border-white uppercase font-bold transition-all duration-200 text-sm sm:text-base"
          :style="{
            backgroundColor: hoverBoton ? colorModal() : '#FFFFFF',
            color: hoverBoton ? '#FFFFFF' : colorModal()
          }"
          @mouseenter="hoverBoton = true"
          @mouseleave="hoverBoton = false"
          @click="confirmarInscripcion"
        >
          {{ t('programa.confirmar') }}
        </Button>

      </div>

    </DialogContent>
  </Dialog>
</template>