<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  // COMPONENTS
  import CharGame from '@/components/char/CharGame.vue';
  import CharMovimentGame from '@/components/char/CharMovimentGame.vue';

  // COMPOSABLE
  import useWebSocket from '@/composables/useWebSocket';

  // STORE
  import { useAuthStore } from '@/stores/auth/authStore';

  const authStore = useAuthStore();
  const { moviment, movimentPlayer, usersOnline } = useWebSocket();
  const position = ref<number>(0);
  const isMoviment = ref<boolean>(false);
  const direction = ref<'left' | 'right'>('right');

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      console.log('Seta direita pressionada');
      position.value = position.value + 10;
      isMoviment.value = true;
      moviment(authStore.user.name, position.value);
      setTimeout(() => {
        isMoviment.value = false
      }, 100);
      direction.value = 'right';
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      console.log('Seta esquerda pressionada');
      position.value = position.value - 10;
      isMoviment.value = true;
      moviment(authStore.user.name, position.value);
      setTimeout(() => {
        isMoviment.value = false
      }, 100);
      direction.value = 'left';
    }
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });
</script>

<template>
  <div class="flex justify-center">
    <div class="relative max-w-[1820px] w-full h-[800px] border-4 border-yellow-500">
      <div class="absolute w-full h-[200px] bg-sky-300 bottom-0">
        <CharMovimentGame
          v-if="isMoviment"
          v-for="user in usersOnline"
          :key="user.fd + '-moviment'"
          :direction="direction"
          class="absolute top-[-130px] index-100 scaleX(-1)"
          :style="{
            left: `${movimentPlayer[user.fd]?.['position'] ?? 0}px`,
          }"
        />

        <CharGame
          v-else
          v-for="user in usersOnline"
          :key="user.fd"
          :name="user.name ?? ''"
          class="absolute top-[-130px] index-100"
          :style="{
            left: `${movimentPlayer[user.fd]?.['position'] ?? 0}px`,
          }"
        />
      </div>
      <pre>{{ movimentPlayer }}</pre>
      <pre>{{ direction }}</pre>
    </div>
  </div>
</template>
