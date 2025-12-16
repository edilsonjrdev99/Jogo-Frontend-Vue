<script setup lang="ts">
  import { onMounted } from 'vue';

  // COMPONENT
  import CommonLoader from '@/components/common/CommonLoader.vue';

  // STORE
  import { useAuthStore } from '@/stores/auth/authStore';

  // COMPOSABLE
  import useLoader from '@/composables/useLoader';

  const authStore = useAuthStore();
  const { showLoader, hideLoader } = useLoader();

  onMounted(async () => {
    showLoader('Verificando autenticação...');
    await authStore.checkAuth();
    hideLoader();
  });
</script>

<template>
  <CommonLoader />
  <router-view />
</template>

<style scoped></style>
