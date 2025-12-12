import { ref } from 'vue'

export const useHome = () => {
  const message = ref('Bem-vindo ao Front Jogo!')

  return {
    message,
  }
}
