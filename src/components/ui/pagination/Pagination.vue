<script setup lang="ts">
import { computed } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'

interface Props {
  currentPage: number
  totalPages: number
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (event: 'update:currentPage', page: number): void
}>()

const pageNumbers = computed(() =>
  Array.from({ length: props.totalPages }, (_, index) => index + 1),
)

const goToPage = (page: number) => {
  if (page < 1 || page > props.totalPages || page === props.currentPage) {
    return
  }

  emit('update:currentPage', page)
}
</script>

<template>
  <div class="flex items-center justify-center gap-3">
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === 1"
      class="rounded-none border-black text-black hover:bg-black hover:text-white"
      @click="goToPage(currentPage - 1)"
    >
      <ChevronLeft class="w-4 h-4" />
      Anterior
    </Button>

    <div class="flex items-center gap-2">
      <Button
        v-for="page in pageNumbers"
        :key="page"
        :variant="page === currentPage ? 'default' : 'outline'"
        size="sm"
        :class="page === currentPage
          ? 'rounded-none border border-black bg-black text-white hover:bg-black/90'
          : 'rounded-none border border-black text-black hover:bg-black hover:text-white'"
        @click="goToPage(page)"
      >
        {{ page }}
      </Button>
    </div>

    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === totalPages"
      class="rounded-none border-black text-black hover:bg-black hover:text-white"
      @click="goToPage(currentPage + 1)"
    >
      Siguiente
      <ChevronRight class="w-4 h-4" />
    </Button>
  </div>
</template>
