<script setup lang="ts">
  const props = defineProps<{
    show: boolean;
    minWidth?: boolean;
  }>();

  const minWidthClass = props.minWidth ? 'min-h-[400px]' : '';

  const emit = defineEmits<{
    close: [];
  }>();

  function handleOverlayClick() {
    emit('close');
  }
</script>

<template>
  <Teleport to="body">
    <Transition name="popup">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click="handleOverlayClick"
      >
        <!-- Fundo escuro -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

        <!-- Popup -->
        <div
          class="relative rpg-popup w-full max-w-[400px] max-h-[600px] md:max-w-[600px] md:max-h-[600px] overflow-auto"
          :class="minWidthClass"
          @click.stop
        >
          <!-- Elementos decorativos nos cantos -->
          <div class="corner-decoration corner-top-left"></div>
          <div class="corner-decoration corner-top-right"></div>
          <div class="corner-decoration corner-bottom-left"></div>
          <div class="corner-decoration corner-bottom-right"></div>

          <!-- Conteúdo do slot -->
          <div class="p-6">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.rpg-popup {
  background-color: #4a2f1f;

  /* Bordas */
  border: 4px solid #2d1810;
  box-shadow:
    inset 0 2px 4px rgba(255, 255, 255, 0.1),
    inset 0 -2px 4px rgba(0, 0, 0, 0.5),
    0 8px 16px rgba(0, 0, 0, 0.8);

  position: relative;
  overflow: hidden;
}

/* Elementos decorativos nos cantos */
.corner-decoration {
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 5;
}

.corner-top-left {
  top: 0;
  left: 0;
  border-top: 2px solid #d4af37;
  border-left: 2px solid #d4af37;
}

.corner-top-right {
  top: 0;
  right: 0;
  border-top: 2px solid #d4af37;
  border-right: 2px solid #d4af37;
}

.corner-bottom-left {
  bottom: 0;
  left: 0;
  border-bottom: 2px solid #d4af37;
  border-left: 2px solid #d4af37;
}

.corner-bottom-right {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid #d4af37;
  border-right: 2px solid #d4af37;
}

/* Animações */
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}

.popup-enter-active .rpg-popup,
.popup-leave-active .rpg-popup {
  transition: all 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-from .rpg-popup,
.popup-leave-to .rpg-popup {
  transform: scale(0.9);
  opacity: 0;
}
</style>
