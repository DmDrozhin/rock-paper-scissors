<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { computed, ref } from 'vue';
import Button from '@/components/BaseButton.vue'
import { HEADER } from '@/data/data.ts';

interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({})
});

const defaultOptions: Record<string, unknown> = {};
const mainOptions = computed(() => ({
  ...defaultOptions,
  ...props.options
}));
</script>

<template>
  <header class="app-header">
    <div class="app-header__container">
      <img src="" alt="">
      <Button :options="{ title: HEADER.button}" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.app-header {
  width: 100%;
  min-height: 50px;
  &__container {
    outline: 1px solid greenyellow;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
  }
}
</style>

<style lang="scss">
</style>
