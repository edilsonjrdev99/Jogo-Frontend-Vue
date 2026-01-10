<script setup lang="ts">
  defineProps<{
    name: string;
  }>();
</script>

<template>
  <div>
    <span>{{ name }}</span>
    <svg width="100" height="100" viewBox="0 0 64 64" shape-rendering="crispEdges" class="rpg-skeleton">
      <!-- CRÂNIO -->
      <rect x="22" y="4" width="20" height="18" class="outline"/>
      <rect x="26" y="22" width="12" height="4" class="outline"/>

      <!-- TRONCO -->
      <rect x="24" y="26" width="16" height="18" class="outline"/>

      <!-- OMBROS -->
      <rect x="18" y="26" width="6" height="8" class="outline"/>
      <rect x="40" y="26" width="6" height="8" class="outline"/>

      <!-- BRAÇOS -->
      <rect x="16" y="34" width="6" height="12" class="outline"/>
      <rect x="42" y="34" width="6" height="12" class="outline"/>

      <!-- PERNAS -->
      <rect x="26" y="44" width="6" height="14" class="outline"/>
      <rect x="32" y="44" width="6" height="14" class="outline"/>

      <!-- ESPADA -->
      <rect x="48" y="30" width="2" height="18" class="outline"/>
      <rect x="46" y="28" width="6" height="2" class="outline"/>
      <rect x="47" y="48" width="4" height="2" class="outline"/>

      <!-- FILL -->
      <rect x="24" y="6" width="16" height="14" class="bone"/>
      <rect x="28" y="22" width="8" height="2" class="bone-dark"/>

      <rect x="28" y="12" width="3" height="3" class="eye"/>
      <rect x="33" y="12" width="3" height="3" class="eye"/>

      <rect x="26" y="28" width="12" height="14" class="bone"/>
      <rect x="26" y="30" width="12" height="2" class="rib"/>
      <rect x="26" y="34" width="12" height="2" class="rib"/>
      <rect x="26" y="38" width="12" height="2" class="rib"/>

      <rect x="18" y="36" width="4" height="8" class="bone"/>
      <rect x="42" y="36" width="4" height="8" class="bone"/>

      <rect x="26" y="46" width="6" height="10" class="bone"/>
      <rect x="32" y="46" width="6" height="10" class="bone"/>

      <!-- ESPADA FILL -->
      <rect x="48" y="30" width="2" height="18" class="weapon"/>
      <rect x="46" y="28" width="6" height="2" class="weapon-dark"/>
      <rect x="47" y="48" width="4" height="2" class="weapon-dark"/>
    </svg>

  </div>

</template>

<style lang="css" scoped>
  .rpg-skeleton .outline {
    fill: #000;
  }

  .rpg-skeleton .bone {
    fill: #e6e6e6;
  }

  .rpg-skeleton .eye {
    fill: #000;
  }

  .rpg-skeleton .mouth {
    fill: #333;
  }

  .rpg-skeleton .weapon {
    fill: #8a8a8a;
  }

  .rpg-skeleton .weapon-dark {
    fill: #5c5c5c;
  }
</style>
