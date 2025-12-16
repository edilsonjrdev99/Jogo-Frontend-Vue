<script setup lang="ts">
  // COMPONENTS
  import { User, Lock, ArrowLeft } from 'lucide-vue-next';

  // COMPOSABLE
  import { useAuth } from '@/composables/action/useAuth';
  import { useHealthApi } from '@/composables/api/useHealthApi';

  const { email, password, isLoading, login } = useAuth();
  const { healthTest } = useHealthApi();

  const handleSubmit = async () => {
    healthTest(
      (response) => { console.log(response) },
      (error) => { console.log(error) }
    );

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
          <div>
            <label for="email" class="mb-2 block text-sm font-medium text-gray-700">Email</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <User :size="20" class="text-purple-600" />
              </div>
              <input
                id="email"
                v-model="email"
                type="email"
                required
                placeholder="seu@email.com"
                class="w-full rounded-lg border-2 border-purple-200 bg-white px-4 py-3 pl-10 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
          </div>

          <!-- Senha -->
          <div>
            <label for="password" class="mb-2 block text-sm font-medium text-gray-700">Senha</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Lock :size="20" class="text-purple-600" />
              </div>
              <input
                id="password"
                v-model="password"
                type="password"
                required
                placeholder="********"
                class="w-full rounded-lg border-2 border-purple-200 bg-white px-4 py-3 pl-10 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </div>
          </div>

          <!-- Botão -->
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full cursor-pointer rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-orange-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ isLoading ? 'Carregando...' : 'Entrar' }}
          </button>
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
