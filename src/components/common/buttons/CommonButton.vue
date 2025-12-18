<script setup lang="ts">  
  import { computed } from 'vue';

  // TYPES
  import type { CommonButtonSizes, CommonButtonTypePropsTypes } from '@/types/common/buttons/commonButtonType.type';

  const props = defineProps<CommonButtonTypePropsTypes>();
  const isLoading = defineModel<boolean>('isLoading');

  const sizeClass = computed(() => {
    const sizes: Record<CommonButtonSizes, string> = {
      'x-sm': 'w-[100px]',
      'sm': 'w-[300px]',
      'md': 'w-[400px]',
      'lg': 'w-[500px]'
    }

    return props.size ? sizes[props.size] : 'w-full';
  });
</script>

<template>
  <button
    :type="type ?? 'submit'"
    :disabled="isLoading"
    class="cursor-pointer rounded-lg bg-lime-800 px-4 py-3 font-semibold text-amber-100 transition-colors hover:bg-lime-600 disabled:opacity-50 disabled:cursor-not-allowed"
    :class="sizeClass"
  >
    {{ isLoading ? textLoading || 'Carregando...' : text }}
  </button>
</template>