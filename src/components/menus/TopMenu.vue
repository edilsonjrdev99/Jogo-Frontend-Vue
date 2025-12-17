<script setup lang="ts">
  // COMPONENT
  import CommonButton from '@/components/common/buttons/CommonButton.vue';

  // COMPOSABLE
  import useAuth from '@/composables/action/auth/useAuth';

  import warriorImage from '@/assets/class/guerreiro.png';
  import mageImage from '@/assets/class/mago.png';

  const { isLoading, logout } = useAuth();

  defineProps<{ 
    userName: string;
    userClass: string; 
  }>();

  async function handleSubmit() {
    await logout();
  }
</script>

<template>
  <nav class="flex justify-between items-center p-4 bg-purple-200 h-[150px]">
    <div class="flex justify-center items-center gap-3">
      <img 
        :src="userClass == 'warrior' ? warriorImage : mageImage" 
        alt="Perfil do usuário" 
        class="w-[100px] h-[100px] rounded-full"
      >
      <span>Olá! Como vai, {{ userName }}?</span>
    </div>

    <div>
      Itens
    </div>

    <div>
      <CommonButton 
        v-model:isLoading="isLoading"
        text="Sair"
        textLoading="Saindo..."
        size="x-sm"
        @click="handleSubmit"
      />
    </div>
  </nav>
</template>