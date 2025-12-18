<script setup lang="ts">
  import { computed } from 'vue';
  
  // TYPE
  import type { CreateUserApiRequestType } from '@/types/api/requests/users/usersApiRequestType.type';
  
  // COMPONENTS
  import CommonButton from '@/components/common/buttons/CommonButton.vue';
  import { Coins } from 'lucide-vue-next';

  // COMPOSABLE
  import useAuth from '@/composables/action/auth/useAuth';

  import warriorImage from '@/assets/class/guerreiro.png';
  import mageImage from '@/assets/class/mago.png';

  const { isLoading, logout } = useAuth();

  const props = defineProps<{
    user: CreateUserApiRequestType;
    connected: boolean;
  }>();

  const isConnected = computed<string>(() => {
    if(props.connected) return 'Conectado';

    return 'Desconectado';
  });

  async function handleSubmit() {
    await logout();
  }
</script>

<template>
  <nav v-if="user" class="relative p-6 h-[150px] rpg-menu">
    <!-- Elementos decorativos nos cantos -->
    <div class="corner-decoration corner-top-left"></div>
    <div class="corner-decoration corner-top-right"></div>
    <div class="corner-decoration corner-bottom-left"></div>
    <div class="corner-decoration corner-bottom-right"></div>

    <div class="flex justify-between items-center">
      <!-- Informações do usuário -->
      <div class="flex items-center gap-4 w-[400px]">
        <div>
          <img
            :src="user.class == 'warrior' ? warriorImage : mageImage"
            alt="Perfil do usuário"
            class="w-[100px] h-[100px] rounded-full border-4 border-yellow-500 shadow-lg"
          >
        </div>
        <div class="text-amber-100 drop-shadow-lg">
          <div class="flex items-center gap-3">
            <p class="text-xl text-amber-300">{{ user.name }}</p>
          </div>

          <div class="flex gap-3 items-center mt-2">
            <Coins :size="24" class="text-yellow-400" />
            <span class="text-lg font-semibold">{{ user.cash }}</span>
            <span class="text-gray-300">|</span>
            <span class="text-lg">Exp: <span class="text-green-400 font-semibold">{{ user.exp }}</span></span>
          </div>
        </div>
      </div>

      <!-- Itens -->
      <div class="w-full text-center text-amber-100 text-xl drop-shadow-lg">
        <span>Classe: {{ user.class == 'warrior' ? 'Guerreiro' : 'Mago' }} | </span>
        <span v-if="isConnected">Status: {{ isConnected }}</span>
      </div>

      <!-- Botões -->
      <div class="relative flex gap-3 z-10">
        <CommonButton
          v-model:isLoading="isLoading"
          text="Sair"
          textLoading="Saindo..."
          size="x-sm"
          @click="handleSubmit"
        />
      </div>
    </div>
  </nav>
</template>

<style scoped>
.rpg-menu {
  background-color: #4a2f1f;
  
  /* Bordas */
  border-top: 4px solid #2d1810;
  border-bottom: 6px solid #1a0f08;
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.5),
    0 4px 8px rgba(0, 0, 0, 0.6);

  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 100vw;
}

/* Elementos decorativos nos cantos */
.corner-decoration {
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 5;
}

.corner-top-left {
  top: 0;
  left: 0;
  border-top: 2px solid #d4af37;
  border-left: 2px solid #d4af37;
}

.corner-top-right {
  top: 0;
  right: 0;
  border-top: 2px solid #d4af37;
  border-right: 2px solid #d4af37;
}

.corner-bottom-left {
  bottom: 0;
  left: 0;
  border-bottom: 2px solid #d4af37;
  border-left: 2px solid #d4af37;
}

.corner-bottom-right {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid #d4af37;
  border-right: 2px solid #d4af37;
}
</style>