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

    <!-- ANTERIOR -->
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === 1"
      class="rounded-none border-[#F22E2E] bg-white text-[#F22E2E] hover:bg-[#F22E2E] hover:border-[#F22E2E] hover:text-white"
      @click="goToPage(currentPage - 1)"
    >
      <ChevronLeft class="w-4 h-4" />
      Anterior
    </Button>

    <!-- PAGINAS -->
    <div class="flex items-center gap-2">
      <Button
        v-for="page in pageNumbers"
        :key="page"
        variant="outline"
        size="sm"
        :class="
          page === currentPage
            ? 'rounded-none border-[#F22E2E] bg-[#F22E2E] text-white hover:bg-[#F22E2E] hover:border-[#F22E2E] hover:text-white'
            : 'rounded-none border-[#F22E2E] bg-white text-[#F22E2E] hover:bg-[#F22E2E] hover:border-[#F22E2E] hover:text-white'
        "
        @click="goToPage(page)"
      >
        {{ page }}
      </Button>
    </div>

    <!-- SIGUIENTE -->
    <Button
      variant="outline"
      size="sm"
      :disabled="currentPage === totalPages"
      class="rounded-none border-[#F22E2E] bg-white text-[#F22E2E] hover:bg-[#F22E2E] hover:border-[#F22E2E] hover:text-white"
      @click="goToPage(currentPage + 1)"
    >
      Siguiente
      <ChevronRight class="w-4 h-4" />
    </Button>

  </div>
</template>