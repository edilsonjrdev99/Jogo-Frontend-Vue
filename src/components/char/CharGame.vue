<script setup lang="ts">
  defineProps<{
    name: string;
  }>();
</script>

<template>
  <div class="text-center">
    <span>{{ name }}</span>
    <svg
      width="128"
      height="128"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      shape-rendering="crispEdges"
      class="rpg-chibi"
    >
      <!-- ===== OUTLINE ===== -->

      <!-- Cabeça -->
      <rect x="24" y="6" width="16" height="16" class="outline"/>

      <!-- Corpo -->
      <rect x="26" y="22" width="12" height="14" class="outline"/>

      <!-- Braço esquerdo -->
      <rect x="20" y="24" width="6" height="10" class="outline"/>

      <!-- Braço direito -->
      <rect x="38" y="24" width="6" height="10" class="outline"/>

      <!-- Pernas -->
      <rect x="26" y="36" width="6" height="12" class="outline"/>
      <rect x="32" y="36" width="6" height="12" class="outline"/>

      <!-- ===== PREENCHIMENTO ===== -->

      <!-- Cabeça -->
      <rect x="26" y="8" width="12" height="12" class="skin"/>

      <!-- Olhos -->
      <rect x="28" y="12" width="2" height="2" class="eye"/>
      <rect x="34" y="12" width="2" height="2" class="eye"/>

      <!-- Boca -->
      <rect x="31" y="16" width="2" height="1" class="mouth"/>

      <!-- Cabelo base -->
      <rect x="26" y="8" width="12" height="4" class="hair"/>

      <!-- Cabelo sombra -->
      <rect x="26" y="10" width="12" height="2" class="hair-dark"/>

      <!-- Corpo -->
      <rect x="28" y="24" width="8" height="10" class="armor"/>

      <!-- Braços -->
      <rect x="22" y="26" width="4" height="8" class="skin"/>
      <rect x="38" y="26" width="4" height="8" class="skin"/>

      <!-- Pernas -->
      <rect x="28" y="38" width="4" height="8" class="pants"/>
      <rect x="32" y="38" width="4" height="8" class="pants"/>

      <!-- Botas -->
      <rect x="28" y="46" width="4" height="4" class="boot"/>
      <rect x="32" y="46" width="4" height="4" class="boot"/>
    </svg>
  </div>
</template>

<style lang="css" scoped>
.rpg-chibi .outline   { fill: #000; }

.rpg-chibi .skin      { fill: #f2c9a0; }
.rpg-chibi .eye       { fill: #000; }
.rpg-chibi .mouth     { fill: #7a2e2e; }

.rpg-chibi .hair      { fill: #6b3e26; }
.rpg-chibi .hair-dark { fill: #4a2918; }

.rpg-chibi .armor     { fill: #4f7cc7; }
.rpg-chibi .pants     { fill: #3e5f3e; }
.rpg-chibi .boot      { fill: #1c1c1c; }
</style>
