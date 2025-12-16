<script setup lang="ts">
  // COMPOSABLE
  import { useHome } from '@/composables/useHome';

  const { message } = useHome();
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="rounded-lg bg-white p-8 shadow-lg">
      <h1 class="mb-4 text-3xl font-bold text-gray-800">{{ message }}</h1>
      <p class="text-gray-600 mb-4">Faça login ou cadastre-se!</p>
      <RouterLink to="/login">
        <button class="w-full cursor-pointer rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed">
          Entrar
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped></style>
