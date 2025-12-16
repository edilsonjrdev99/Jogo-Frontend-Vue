import { ref } from 'vue';

export const useHome = () => {
  const message = ref('Bem-vindo(a) ao Jogo!');

  return {
    message,
  }
}
