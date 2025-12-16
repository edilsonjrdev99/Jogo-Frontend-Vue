<script setup lang="ts">
  import { computed } from 'vue';

  // COMPOSABLE
  import useLoader from '@/composables/useLoader';

  const { isLoading, loadingText } = useLoader();

  const showLoader = computed(() => isLoading.value);
</script>

<template>
  <Transition name="fade">
    <div
      v-if="showLoader"
      class="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/50 backdrop-blur-md"
    >
      <!-- Spinner -->
      <div class="h-16 w-16 animate-spin rounded-full border-4 border-purple-300 border-t-purple-600"></div>

      <!-- Texto -->
      <p class="text-xl font-semibold text-white">{{ loadingText }}</p>
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
