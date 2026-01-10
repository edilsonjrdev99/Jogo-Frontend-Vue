<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  // COMPONENTS
  import CharGame from '@/components/characters/char/CharGame.vue';
  import BossSkeleton from '@/components/characters/boss/BossSkeleton.vue';
  import MobsSkeletonWarrior from '@/components/characters/mobs/skeletons/MobsSkeletonWarrior.vue';
  import MobsSkeletonArcher from '@/components/characters/mobs/skeletons/MobsSkeletonArcher.vue';
  import MobsSkeletonLancer from '@/components/characters/mobs/skeletons/MobsSkeletonLancer.vue';

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
    <div class="relative max-w-[1820px] w-full h-[800px] bg-sky-500 border-4 border-yellow-500 overflow-hidden">
      <div class="absolute w-full h-[200px] bg-lime-700 border-t-4 border-amber-900 bottom-0">

        <CharGame
          v-for="user in usersOnline"
          :key="user.fd"
          :name="user.name ?? ''"
          class="absolute top-[-90px] index-100"
          :style="{
            left: `${movimentPlayer[user.fd]?.['position'] ?? 0}px`,
          }"
        />

        <MobsSkeletonWarrior
          name="Esqueleto Guerreiro"
          class="absolute top-[-100px] right-[650px] index-100"
        />

        <MobsSkeletonArcher
          name="Esqueleto Arqueiro"
          class="absolute top-[-100px] right-[450px] index-100"
        />

        <MobsSkeletonLancer
          name="Esqueleto Lanceiro"
          class="absolute top-[-100px] right-[250px] index-100"
        />

        <BossSkeleton
          name="Esqueleto"
          class="absolute top-[-130px] right-[0] index-100"
        />
      </div>

      <img src="@/assets/game/nuvem.png" alt="nuvem" class="w-[500px] absolute right-0 clouds" />
      <pre>{{ movimentPlayer }}</pre>
      <pre>{{ direction }}</pre>
    </div>
  </div>
</template>

<style lang="css" scoped>
  .clouds {
    animation: clouds-animation 15s infinite linear;
  }

  @keyframes clouds-animation {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(-1820px);
    }
  }
</style>
