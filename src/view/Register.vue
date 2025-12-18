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
          <RouterLink to="/login" class="flex gap-1 fustify-center items-center text-lime-800 font-medium mb-6 hover:text-lime-600">
            <ArrowLeft :size="20" />
            Voltar
          </RouterLink>
        </div>

        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl text-center font-bold text-lime-800">Cadastre-se</h1>
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

          <!-- Classe -->
          <p class="mb-4 block text-sm font-medium text-gray-700">Selecione sua classe</p>
          <div class="flex items-center justify-center w-full gap-4">
            <!-- Guerreiro -->
            <label class="cursor-pointer">
              <input
                type="radio"
                name="class"
                value="warrior"
                v-model="forms.class"
                class="sr-only peer"
              >
              <div class="relative rounded-lg border-4 border-lime-200 p-3 transition-all duration-200 hover:border-lime-400 peer-checked:border-lime-800 peer-checked:shadow-lg peer-checked:shadow-lime-300">
                <img src="@/assets/class/guerreiro.png" alt="Guerreiro" class="w-24 h-24 object-contain">
                <p class="text-center mt-2 text-sm font-medium text-gray-700">Guerreiro</p>
              </div>
            </label>

            <!-- Mago -->
            <label class="cursor-pointer">
              <input
                type="radio"
                name="class"
                value="mage"
                v-model="forms.class"
                class="sr-only peer"
              >
              <div class="relative rounded-lg border-4 border-lime-200 p-3 transition-all duration-200 hover:border-lime-400 peer-checked:border-lime-800 peer-checked:shadow-lg peer-checked:shadow-lime-300">
                <img src="@/assets/class/mago.png" alt="Mago" class="w-24 h-24 object-contain">
                <p class="text-center mt-2 text-sm font-medium text-gray-700">Mago</p>
              </div>
            </label>
          </div>

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
            <RouterLink to="/login" class="font-medium text-lime-800 hover:text-lime-600">Faça login</RouterLink>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
