import { defineStore } from 'pinia';
import { ref } from 'vue';
import useAuthApi from '@/composables/api/auth/useAuthApi';

export const useAuthStore = defineStore('auth', () => {
  const { meRequest } = useAuthApi();

  // Estado
  const user            = ref<any>(null);
  const isAuthenticated = ref(false);
  const isChecking      = ref(false);

  /**
   * Verifica se o usuário está autenticado e armazena o estado
   */
  const checkAuth = async (): Promise<boolean> => {
    isChecking.value = true;

    return new Promise((resolve) => {
      meRequest(
        (response) => {
          // Sucesso - usuário autenticado
          user.value            = response.data.data;
          isAuthenticated.value = true;
          isChecking.value      = false;
          resolve(true);
        },
        () => {
          // Erro - usuário não autenticado
          user.value            = null;
          isAuthenticated.value = false;
          isChecking.value      = false;
          resolve(false);
        }
      );
    });
  };

  /**
   * Limpa o estado de autenticação
   */
  const clearAuth = () => {
    user.value = null;
    isAuthenticated.value = false;
  };

  return {
    user,
    isAuthenticated,
    isChecking,
    checkAuth,
    clearAuth,
  };
});
