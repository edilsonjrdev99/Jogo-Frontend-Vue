<script setup lang="ts">
  import TopMenu from '@/components/menus/TopMenu.vue';
  import TopMenuMobile from '@/components/menus/TopMenuMobile.vue';

  // STORE
  import { useAuthStore } from '@/stores/auth/authStore';

  // COMPOSABLE
  import useDevice from '@/composables/useDevice';

  const authStore = useAuthStore();
  const { isMobile } = useDevice();
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Menu Mobile -->
    <TopMenuMobile v-if="isMobile" />

    <!-- Menu Desktop -->
    <TopMenu 
      v-else 
      :user="authStore.user"
    />

    <!-- Dados do usuário -->
    <pre class="mb-4 rounded bg-gray-100 p-4 text-sm">{{ authStore.user }}</pre>
  </div>
</template>