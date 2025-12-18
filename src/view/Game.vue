<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';

  import TopMenu from '@/components/menus/TopMenu.vue';
  import TopMenuMobile from '@/components/menus/TopMenuMobile.vue';
  import CommonPopup from '@/components/common/popups/CommonPopup.vue';
  import CommonButton from '@/components/common/buttons/CommonButton.vue';

  // STORE
  import { useAuthStore } from '@/stores/auth/authStore';

  // COMPOSABLES
  import useDevice from '@/composables/useDevice';
  import useWebSocket from '@/composables/useWebSocket';

  const authStore = useAuthStore();
  const { isMobile } = useDevice();
  const { connect, usersOnline, connected } = useWebSocket();
  const show = ref<boolean>(false);
  const awaitFirstValidationConnectedUser = ref<boolean>(false);

  onMounted(() => {
    connect(authStore.user.name);
  });


  function userReconect() {
    connect(authStore.user.name);
  }

  // Aguarda a primeira validação do websocket de usuário conectado ao servidor
  watch(connected, (newVal) => {
    if(newVal) {
      awaitFirstValidationConnectedUser.value = true;
    }
  });
</script>

<template>
  <div class="relative min-h-screen bg-gray-100">
    <!-- Menu Mobile -->
    <TopMenuMobile v-if="isMobile" />

    <!-- Menu Desktop -->
    <TopMenu 
      v-else 
      :user="authStore.user"
      :connected="connected"
    />

    <!-- Dados do usuário -->
    <pre class="mb-4 rounded bg-gray-100 p-4 text-sm">{{ authStore.user }}</pre>

    <!-- Botão de usuários online -->
    <CommonButton 
      text="Pessoas"
      type="button"
      size="x-sm"
      class="absolute bottom-10 right-10"
      :disabled="!connected"
      @click="show = true"
    />

    <!-- Popup de usuários online -->
    <CommonPopup :show="show" @close="show = false">
      <!-- Usuários online -->
      <div v-for="user in usersOnline" class="text-x1 text-amber-300">
        {{ user.name }}
      </div>
    </CommonPopup>

    <!-- Popup de informação ausente -->
    <CommonPopup :show="!connected && awaitFirstValidationConnectedUser">
      <div class="flex justify-center items-center flex-col gap-3 text-x1 text-amber-300">
        <p>Parece que você ficou um tempo inativo e acabou sendo desconectado, clique aqui para conectar novamente.</p>

        <CommonButton 
          text="Reconectar"
          type="button"
          size="x-sm"
          @click="userReconect"
        />
      </div>
    </CommonPopup>
  </div>
</template>