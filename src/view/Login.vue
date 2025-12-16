<script setup lang="ts">
  // COMPONENTS
  import { ArrowLeft } from 'lucide-vue-next';
  import CommonInput from '@/components/common/inputs/CommonInput.vue';
  import CommonButton from '@/components/common/buttons/CommonButton.vue';

  // COMPOSABLE
  import { useAuth } from '@/composables/action/useAuth';

  const { email, password, isLoading, login } = useAuth();

  const handleSubmit = async () => {
    await login();
  }
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-white">
    <div class="w-full max-w-md px-6">
      <div class="rounded-lg bg-white p-8 shadow-lg">
        <!-- Botão de voltar -->
        <div>
          <RouterLink to="/" class="flex gap-1 fustify-center items-center text-purple-600 font-medium mb-6 hover:text-orange-500">
            <ArrowLeft :size="20" />
            Voltar
          </RouterLink>
        </div>

        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl text-center font-bold text-purple-500">Bem-vindo</h1>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Email -->
          <CommonInput 
            v-model="email"
            label="Email"
            placeholder="seu@email.com"
            id="email"
            type="email"
            :required="true"
            icon="User"
          />

          <!-- Senha -->
          <CommonInput 
            v-model="password"
            label="Senha"
            placeholder="********"
            id="password"
            type="password"
            :required="true"
            icon="Lock"
          />

          <!-- Botão -->
          <CommonButton 
            v-model:isLoading="isLoading"
            text="Entrar"
          />
        </form>

        <!-- Footer -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Não tem conta?
            <a href="#" class="font-medium text-purple-600 hover:text-orange-500">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
