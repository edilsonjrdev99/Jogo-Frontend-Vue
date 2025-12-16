import { ref } from 'vue';

export const useAuth = () => {
  const email = ref('');
  const password = ref('');
  const isLoading = ref(false);

  const login = async () => {
    isLoading.value = true;

    setTimeout(() => {
      console.log('Login realizado com sucesso!');
      isLoading.value = false;
      resetForm();
    }, 3000);
  }

  const resetForm = () => {
    email.value = ''
    password.value = ''
  }

  return {
    email,
    password,
    isLoading,
    login,
    resetForm,
  }
}
