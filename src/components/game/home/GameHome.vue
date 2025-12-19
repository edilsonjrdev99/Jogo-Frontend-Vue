<script setup lang="ts">
  // COMPONENT
  import CommonButton from '@/components/common/buttons/CommonButton.vue';
</script>

<template>
  <div class="flex justify-center items-center flex-col gap-3 m-4">
    <RouterLink to="/game/inventory">
      <CommonButton 
        text="Ver inventário"
        type="button"
        size="sm"
      />
    </RouterLink>

    <RouterLink to="/game/shop">
      <CommonButton 
        text="Ir ao Mercado"
        type="button"
        size="sm"
      />
    </RouterLink>
  </div>
</template>