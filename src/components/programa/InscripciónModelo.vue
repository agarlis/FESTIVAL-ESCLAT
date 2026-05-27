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
import { t, textoEvento } from '@/components/data/idiomas'

defineProps({
  abierto: Boolean,
  evento: Object
})

const emit = defineEmits(['cerrar'])
const router = useRouter()

const confirmarInscripcion = () => {
  emit('cerrar')
  router.push({ name: 'programa' })
}
</script>

<template>
  <Dialog
    :open="abierto"
    @update:open="emit('cerrar')"
  >
    <DialogContent class="sm:max-w-xl rounded-none shadow-none">

      <DialogHeader>
        <DialogTitle class="text-4xl font-black uppercase">
          {{ t('programa.inscripcion') }}
        </DialogTitle>

        <DialogDescription class="text-black italic">
          {{ evento ? `${textoEvento(evento, 'titulo')} · ${textoEvento(evento, 'dia')}` : '' }}
        </DialogDescription>
      </DialogHeader>

      <div class="space-y-6 mt-4 ">

        <div class="space-y-2">
          <Label>{{ t('programa.nombreCompleto') }}</Label>
          <Input class="italic font-extralight rounded-none border-black" :placeholder="t('programa.nombrePlaceholder')" />
        </div>

        <div class="space-y-2">
          <Label>{{ t('programa.correo') }}</Label>
          <Input class="italic font-extralight rounded-none border-black"
            type="email"
            placeholder="correo@email.com"
          />
        </div>

        <Button
          class="w-full border-none rounded-none bg-black text-white hover:bg-black/80 uppercase font-bold"
          @click="confirmarInscripcion"
        >
          {{ t('programa.confirmar') }}
        </Button>

      </div>

    </DialogContent>
  </Dialog>
</template>
