<script setup lang="ts">
  import { computed } from 'vue';
  import icon from '@/assets/images/cardboard_airplane.svg';

  interface Button {
    label: string;
    title: string;
    icon?: string;
    icon_alt?: string;
  }

  interface Props {
    options?: Partial<Button>;
  }
  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });

  const defaultOptions: Button = {
    label: 'Base Button',
    title: 'Button',
    icon: icon,
    icon_alt: 'Button Icon'
  };
  const mainOptions = computed(() => ({
    ...defaultOptions,
    ...props.options
  }));
</script>

<template>
  <button class="button base" v-ripple :aria-label="mainOptions.label" @click="$emit('click')">
    {{ mainOptions.title }}
    <img v-if="mainOptions.icon" :src="mainOptions.icon" :alt="mainOptions.icon_alt" />
  </button>
</template>

<style lang="scss" scoped>
  .button {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    border-radius: var(--radius-md);
    background-color: var(--color-primary);
    text-transform: uppercase;
    color: var(--color-text-dark);
    transition: var(--transition-base);
    &:hover {
      background-color: color-mix(in srgb, var(--color-primary), black 15%);
    }
    &.base {
      min-height: 56px;
      padding: 0 var(--space-md);
      font-family: Orbitron, sans-serif;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
    }
  }
</style>
