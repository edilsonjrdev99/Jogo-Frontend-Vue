import { ref } from 'vue';

// TYPES
import type { WsMessageType } from '@/types/websocket/websocketType.type';
import type { ChatMessageType } from '@/types/websocket/chat/chatMessageType.type';
import type { OnlineUserType } from '@/types/websocket/user/onlineUserType.type';

const movimentPlayer = ref([]);
const socket = ref<WebSocket | null>(null);
const usersOnline = ref<OnlineUserType[]>([]);

export default function useWebSocket() {
  const connected = ref(false);
  const chatMessages = ref<ChatMessageType[]>([]);

  /**
   * Responsável por criar a conexão com o servidor websocket e enviar o usuário conectado
   * @param username @var string - Nome do usuário
  */
  function connect(username: string) {
    socket.value = new WebSocket('ws://localhost:9501');

    socket.value.onopen = () => {
      connected.value = true;

      socket.value?.send(JSON.stringify({
        type: 'set_user',
        data: { name: username }
      }));
    }

    socket.value.onmessage = (event) => {
      const data: WsMessageType = JSON.parse(event.data);

      switch (data.type) {
        case 'users_online':
          usersOnline.value = data.data;
          break;
        case 'chat_update':
          chatMessages.value = data.data;
          break;
        case 'moviment':
          movimentPlayer.value = data.data;
          break;
      }
    }

    socket.value.onclose = () => {
      connected.value = false;
      socket.value = null;
    }
  }

  /**
   * Responsável por desconectar o usuário do servidor websocket
   */
  function disconnect() {
    socket.value?.close();
  }

  /**
   * Responsável por enviar uma mensagem no chat
   * @param name @var string - Nome do usuário
   * @param message @var string - Mensagem do chat
   */
  function sendChatMessage(name: string, message: string) {
    socket.value?.send(JSON.stringify({
      type: 'chat_message',
      data: { name, message }
    }));
  }

  /**
   * Responsável por atualizar a posição do usuário na partida
   * @param name @var string - Nome do usuário
   * @param position @var number - posição do usuário em pixel
   */
  function moviment(name: string, position: number) {
    socket.value?.send(JSON.stringify({
      type: 'moviment',
      data: { name, position }
    }))
  }

  // onUnmounted(() => {
  //   disconnect();
  // })

  return {
    connect,
    disconnect,
    sendChatMessage,
    moviment,
    usersOnline,
    connected,
    chatMessages,
    movimentPlayer
  }
}
