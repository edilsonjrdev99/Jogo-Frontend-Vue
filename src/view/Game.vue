<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';

  import TopMenu from '@/components/menus/TopMenu.vue';
  import TopMenuMobile from '@/components/menus/TopMenuMobile.vue';
  import CommonPopup from '@/components/common/popups/CommonPopup.vue';
  import CommonButton from '@/components/common/buttons/CommonButton.vue';
  import CommonInput from '@/components/common/inputs/CommonInput.vue';

  // STORE
  import { useAuthStore } from '@/stores/auth/authStore';

  // COMPOSABLES
  import useDevice from '@/composables/useDevice';
  import useWebSocket from '@/composables/useWebSocket';

  const authStore = useAuthStore();
  const { isMobile } = useDevice();
  const { connect, usersOnline, connected, chatMessages, sendChatMessage } = useWebSocket();
  const awaitFirstValidationConnectedUser = ref<boolean>(false);
  const showOnlineUsers = ref<boolean>(false);
  const showChat = ref<boolean>(false);
  const textMessageChat = ref<string>('');

  onMounted(() => {
    connect(authStore.user.name);
  });


  function userReconect() {
    connect(authStore.user.name);
  }

  function sendMessage() {
    sendChatMessage(authStore.user.name, textMessageChat.value);
    textMessageChat.value = '';
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
      @click="showOnlineUsers = true"
    />

    <CommonButton 
      text="Bate-papo"
      type="button"
      size="x-sm"
      class="absolute bottom-10 left-10"
      :disabled="!connected"
      @click="showChat = true"
    />

    <!-- Popup de usuários online -->
    <CommonPopup :show="showOnlineUsers" @close="showOnlineUsers = false">
      <div v-for="user in usersOnline" class="text-x1 text-amber-300">
        {{ user.name }}
      </div>
    </CommonPopup>

    <!-- Popup do chat -->
    <CommonPopup :show="showChat" @close="showChat = false" v-if="chatMessages">
      <div v-for="chat in chatMessages" class="text-x1 text-amber-300 mb-3">
        {{ chat.user }} - {{ chat.time }}:  {{ chat.message }}
      </div>

      <div class="flex justify-center flex-col gap-3">
        <CommonInput 
          v-model="textMessageChat"
          label="" 
          placeholder="Digite sua mensagem..." 
          id="message" 
          type="text"
          icon="MessageCircle" 
        />
  
        <CommonButton 
          text="Enviar"
          type="button"
          size="x-sm"
          @click="sendMessage"
        />
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