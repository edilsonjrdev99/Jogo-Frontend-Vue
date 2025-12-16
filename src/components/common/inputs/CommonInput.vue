<script setup lang="ts">
  import { computed } from 'vue';

  // types
  import type { Component } from 'vue';
  import type { CommonInputTypeProps } from '@/types/common/inputs/commonInputType.type';

  // COMPONENTS
  import * as Icons from 'lucide-vue-next';

  const props = defineProps<CommonInputTypeProps>();

  const model = defineModel<string>();

  const iconComponent = computed<Component | null>(() => {
    if (!props.icon) return null;

    return Icons[props.icon] as Component;
  });
</script>

<template>
  <div>
    <label for="password" class="mb-2 block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="relative">
      <div v-if="icon" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <iconComponent :size="20" class="text-purple-600" />
      </div>
      <input
        :id="id"
        v-model="model"
        :type="type ?? 'text'"
        :required="required ?? false"
        :placeholder="placeholder"
        class="w-full rounded-lg border-2 border-purple-200 bg-white px-4 py-3 pl-10 text-slate-800 placeholder-slate-400 transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
      />
    </div>
  </div>
</template>