import { ref, onUnmounted } from 'vue';

type OnlineUser = {
  fd: number
  name?: string
}

type WsMessage =
  | { type: 'users_online'; data: OnlineUser[] }
  | { type: 'set_user'; data: { name: string } }

export default function useWebSocket() {
  const socket = ref<WebSocket | null>(null);
  const usersOnline = ref<OnlineUser[]>([]);
  const connected = ref(false);

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
      const data: WsMessage = JSON.parse(event.data);

      if (data.type === 'users_online') {
        usersOnline.value = data.data;
      }
    }

    socket.value.onclose = () => {
      connected.value = false;
      socket.value = null;
    }
  }

  function disconnect() {
    socket.value?.close();
  }

  onUnmounted(() => {
    disconnect();
  })

  return {
    connect,
    disconnect,
    usersOnline,
    connected
  }
}
