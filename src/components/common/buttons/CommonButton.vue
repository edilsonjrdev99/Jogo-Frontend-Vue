<script setup lang="ts">  
  // TYPES
  import type { CommonButtonTypePropsTypes } from '@/types/common/buttons/commonButtonType.type';

  defineProps<CommonButtonTypePropsTypes>();

  const isLoading = defineModel<boolean>('isLoading');
</script>

<template>
  <button
    :type="type ?? 'submit'"
    :disabled="isLoading"
    class="
    w-full cursor-pointer rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {{ isLoading ? 'Carregando...' : text }}
  </button>
</template>