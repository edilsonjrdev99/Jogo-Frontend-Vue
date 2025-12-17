import { ref } from "vue";
import { useRouter } from 'vue-router';

// TYPE
import type { CreateUserApiRequestType } from "@/types/api/requests/users/usersApiRequestType.type";

// COMPONENT
import { useToast } from 'vue-toastification';

// COMPOSABLE
import useUsersApi from "@/composables/api/users/useUsersApi";

export default function useUsers() {
  /**
   * Função de request para o backend
   */
  const { createUserRequest } = useUsersApi();

  const toast = useToast();
  const router = useRouter();
  const isLoading = ref(false);

  const forms = ref<CreateUserApiRequestType>(getDefaultForms());

  /**
   * Responsável por cadastrar um usuário
   */
  const createUser = () => {
    isLoading.value = true;

    createUserRequest(
      forms.value,
      (response) => {
        isLoading.value = false;
        resetCreateForm();
        toast.success(response.data.message || 'Usuário criado com sucesso.');
        router.push('/login');
      }, // Success
      (error) => {
        toast.error(error.response?.data.message || 'Erro ao criar usuário.');
      } // Error
    );
  }

  /**
   * Responsável por resetar o form de cadastro
   */
  const resetCreateForm = () => {
    forms.value = getDefaultForms();
  }

  /**
   * Responsável por retornar o form de cadastro de usuário default
   * @returns CreateUserApiRequestType - form de criação de usuário
   */
  function getDefaultForms(): CreateUserApiRequestType {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      is_admin: false,
      class: 'warrior'
    }
  }
  
  return {
    forms,
    isLoading,
    createUser,
    resetCreateForm
  }
}