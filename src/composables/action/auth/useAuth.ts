import { ref } from 'vue';
import { useRouter } from 'vue-router';

// COMPONENT
import { useToast } from 'vue-toastification';

// COMPOSABLE
import useAuthApi from '@/composables/api/auth/useAuthApi';

export default function useAuth() {
  /**
   * Função de request para o backend
   */
  const { loginRequest, logoutRequest, meRequest } = useAuthApi();
  
  const toast  = useToast();
  const router = useRouter();

  const email     = ref('');
  const password  = ref('');
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
        toast.success(response.data.message || 'Login realizado com sucesso.');
        isLoading.value = false;
        resetLoginForm();
        router.push('/game');
      }, // Success
      () => {
        toast.error('Credenciais inválidas.');
        isLoading.value = false;
      } // Error
    );
  }

  /**
   * Responsável por fazer o logout do user
   */
  const logout = async () => {
    logoutRequest(
      (response) => {
        router.push('/login');
        toast.success(response.data.message || 'Logout realizado com sucesso.');
      }, // Success
      () => {
        toast.error('Erro ao tentar fazer logout.');
      } // Error
    );
  }

  /**
   * Responsável por listar as informações do usuário logado
   */
  const me = async () => {
    meRequest(
      () => {}, // Success
      () => {
        toast.error('Erro ao tentar buscar as informações do usuário logado.');
      }
    );
  }

  /**
   * Responsável por verificar se o usuário está autenticado
   * Retorna uma Promise que resolve com true se autenticado, false se não
   */
  const checkAuth = (): Promise<boolean> => {
    return new Promise((resolve) => {
      meRequest(
        () => {
          resolve(true);
        }, // Success - usuário autenticado
        () => {
          resolve(false);
        } // Error - usuário não autenticado
      );
    });
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
    logout,
    me,
    checkAuth,
    resetLoginForm,
  }
}
