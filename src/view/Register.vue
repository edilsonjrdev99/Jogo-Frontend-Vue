<script setup lang="ts">
  // COMPONENTS
  import { ArrowLeft } from 'lucide-vue-next';
  import CommonInput from '@/components/common/inputs/CommonInput.vue';
  import CommonButton from '@/components/common/buttons/CommonButton.vue';

  // COMPOSABLE
  import useUsers from '@/composables/action/users/useUsers';

  const { forms, isLoading, createUser } = useUsers();

  const handleSubmit = async () => {
    await createUser();
  }
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-white">
    <div class="w-full max-w-md px-6">
      <div class="rounded-lg bg-white p-8 shadow-lg">
        <!-- Botão de voltar -->
        <div>
          <RouterLink to="/login" class="flex gap-1 fustify-center items-center text-purple-600 font-medium mb-6 hover:text-orange-500">
            <ArrowLeft :size="20" />
            Voltar
          </RouterLink>
        </div>

        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl text-center font-bold text-purple-500">Cadastre-se</h1>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Nome -->
          <CommonInput
            v-model="forms.name"
            label="Nome"
            placeholder="Seu nome completo"
            id="name"
            type="text"
            :required="true"
            icon="User"
          />

          <!-- Email -->
          <CommonInput
            v-model="forms.email"
            label="Email"
            placeholder="seu@email.com"
            id="email"
            type="email"
            :required="true"
            icon="Mail"
          />

          <!-- Senha -->
          <CommonInput
            v-model="forms.password"
            label="Senha"
            placeholder="********"
            id="password"
            type="password"
            :required="true"
            icon="KeyRound"
          />

          <!-- Confirmar Senha -->
          <CommonInput
            v-model="forms.password_confirmation"
            label="Confirme sua senha"
            placeholder="********"
            id="password_confirmation"
            type="password"
            :required="true"
            icon="KeyRound"
          />

          <!-- Botão -->
          <CommonButton
            v-model:isLoading="isLoading"
            text="Cadastrar"
          />
        </form>

        <!-- Footer -->
        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Já tem conta?
            <RouterLink to="/login" class="font-medium text-purple-600 hover:text-orange-500">Faça login</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
