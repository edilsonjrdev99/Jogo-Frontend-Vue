import { ref } from 'vue';

const isLoading = ref(false);
const loadingText = ref('Carregando...');

export default function useLoader() {
  /**
   * Mostra o loader com texto personalizado
   * @param text Texto do Loader
   */
  const showLoader = (text?: string) => {
    loadingText.value = text || 'Carregando...';
    isLoading.value   = true;
  };

  /**
   * Esconde o loader
   */
  const hideLoader = () => {
    isLoading.value   = false;
    loadingText.value = 'Carregando...';
  };

  return {
    isLoading,
    loadingText,
    showLoader,
    hideLoader,
  };
}
