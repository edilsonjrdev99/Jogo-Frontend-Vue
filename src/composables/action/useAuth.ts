import { ref } from 'vue';

// COMPOSABLE
import useAuthApi from '@/composables/api/auth/useAuthApi';

export const useAuth = () => {
  /**
   * Função de request para o backend
   */
  const { loginRequest } = useAuthApi();

  const email = ref('');
  const password = ref('');
  const isLoading = ref(false);

  /**
   * Responsável por fazer o login do usuário
   */
  const login = async () => {
    isLoading.value = true;
    
    const payload = { email: email.value, password: password.value };

    loginRequest(
      payload,
      (response) => {
        console.log(response.data.message);
        isLoading.value = false;
        resetLoginForm();
      }, // Success
      (error) => {
        console.log(error);
        isLoading.value = false;
      } // Error
    );
  }

  /**
   * Responsável por resetar o form de login
   */
  const resetLoginForm = () => {
    email.value = ''
    password.value = ''
  }

  return {
    email,
    password,
    isLoading,
    login,
    resetLoginForm,
  }
}
