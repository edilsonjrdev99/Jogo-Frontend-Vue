<script setup lang="ts">
  // COMPONENT
  import CommonButton from '@/components/common/buttons/CommonButton.vue';

  // COMPOSABLE
  import useAuth from '@/composables/action/auth/useAuth';

  const { isLoading, logout } = useAuth();

  async function handleSubmit() {
    await logout();
  }
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100">
    <div class="rounded-lg bg-white p-8 shadow-lg">
      <h1 class="mb-4 text-3xl font-bold text-gray-800">Bem-vindo(a)</h1>
      <p class="text-gray-600 mb-4">Faça login ou cadastre-se para poder jogar o game!</p>
        <CommonButton 
          v-model:isLoading="isLoading"
          text="Deslogar"
          @click="handleSubmit"
        />
    </div>
  </div>
</template>