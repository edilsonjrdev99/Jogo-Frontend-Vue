<script setup lang="ts">
  import { onMounted, ref } from 'vue';

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

  onMounted(() => {
    connect(authStore.user.name);
  });

  const show = ref<boolean>(false);
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
  </div>
</template>