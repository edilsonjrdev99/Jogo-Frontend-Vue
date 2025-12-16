import { ref } from "vue";

// TYPE
import type { CreateUserApiRequestType } from "@/types/api/requests/users/usersApiRequestType.type";

// COMPOSABLE
import useUsersApi from "@/composables/api/users/useUsersApi";

export default function useUsers() {
  /**
   * Função de request para o backend
   */
  const { createUserRequest } = useUsersApi();

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
        console.log(response.data);
        isLoading.value = false;
        resetCreateForm();
      }, // Success
      (error) => {
        console.log(error.response?.data);
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
  function getDefaultForms() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      is_admin: false
    }
  }
  
  return {
    forms,
    isLoading,
    createUser,
    resetCreateForm
  }
}