<script setup lang="ts">
  defineProps<{
    name: string;
  }>();
</script>

<template>
  <div class="text-center">
    <span>{{ name }}</span>
    <svg
      width="160"
      height="160"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="crispEdges"
      class="rpg-boss-skeleton"
    >
      <!-- ===== OUTLINE ===== -->

      <!-- Cabeça -->
      <rect x="20" y="4" width="24" height="20" class="outline"/>

      <!-- Corpo (caixa torácica) -->
      <rect x="22" y="26" width="20" height="16" class="outline"/>

      <!-- Ombros -->
      <rect x="14" y="26" width="8" height="10" class="outline"/>
      <rect x="42" y="26" width="8" height="10" class="outline"/>

      <!-- Braços -->
      <rect x="12" y="36" width="6" height="14" class="outline"/>
      <rect x="46" y="36" width="6" height="14" class="outline"/>

      <!-- Pernas -->
      <rect x="24" y="42" width="8" height="16" class="outline"/>
      <rect x="32" y="42" width="8" height="16" class="outline"/>

      <!-- ===== PREENCHIMENTO ===== -->

      <!-- Cabeça -->
      <rect x="22" y="6" width="20" height="16" class="bone"/>

      <!-- Olhos (boss brilhante) -->
      <rect x="26" y="12" width="4" height="4" class="eye-glow"/>
      <rect x="34" y="12" width="4" height="4" class="eye-glow"/>

      <!-- Boca -->
      <rect x="30" y="18" width="4" height="2" class="mouth"/>

      <!-- Corpo (costelas) -->
      <rect x="24" y="28" width="16" height="12" class="bone"/>

      <!-- Costelas -->
      <rect x="24" y="30" width="16" height="2" class="rib"/>
      <rect x="24" y="34" width="16" height="2" class="rib"/>
      <rect x="24" y="38" width="16" height="2" class="rib"/>

      <!-- Braços -->
      <rect x="14" y="38" width="4" height="10" class="bone"/>
      <rect x="46" y="38" width="4" height="10" class="bone"/>

      <!-- Pernas -->
      <rect x="26" y="44" width="6" height="12" class="bone"/>
      <rect x="32" y="44" width="6" height="12" class="bone"/>

      <!-- Joelhos -->
      <rect x="26" y="56" width="6" height="2" class="bone-dark"/>
      <rect x="32" y="56" width="6" height="2" class="bone-dark"/>
    </svg>
  </div>
</template>

<style scoped>
.rpg-boss-skeleton .outline {
  fill: #000;
}

/* Ossos */
.rpg-boss-skeleton .bone {
  fill: #e5e5e5;
}

.rpg-boss-skeleton .bone-dark {
  fill: #bdbdbd;
}

/* Costelas */
.rpg-boss-skeleton .rib {
  fill: #cfcfcf;
}

/* Olhos de boss */
.rpg-boss-skeleton .eye-glow {
  fill: #ff3b3b;
}

/* Boca */
.rpg-boss-skeleton .mouth {
  fill: #333;
}
</style>
