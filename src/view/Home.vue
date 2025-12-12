<script setup lang="ts">
import { useHome } from '@/composables/useHome'

const { message } = useHome()
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="rounded-lg bg-white p-8 shadow-lg">
      <h1 class="mb-4 text-3xl font-bold text-gray-800">{{ message }}</h1>
      <p class="text-gray-600">Seu projeto Vue está pronto para começar!</p>
    </div>
  </div>
</template>

<style scoped></style>
