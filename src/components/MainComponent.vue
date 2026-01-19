<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { computed, ref } from 'vue';
import Header from '@/components/AppHeader.vue'

interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({})
});

const defaultOptions: Record<string, unknown> = {};
const mainOptions = computed(() => ({
  ...props.options,
  ...defaultOptions
}));
</script>

<template>
  <div class="main-component">
    <Header />
  </div>
</template>

<style lang="scss" scoped>
.main-component {
  outline: 1px solid rgb(255, 47, 85);
  width: 100%;
  min-height: 600px;
}
</style>

<style lang="scss">
</style>
