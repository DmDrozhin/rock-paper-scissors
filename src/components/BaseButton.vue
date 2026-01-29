<script setup lang="ts">
  import { computed } from 'vue';
  import icon from '@/assets/images/cardboard_airplane.svg';

  export interface ButtonOptions {
    title: string;
    label?: string;
    icon?: string;
    icon_alt?: string;
    class?: string;
    type?: 'button' | 'submit' | 'reset';
  }

  interface Props {
    options?: Partial<ButtonOptions>;
    disabled?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    options: () => ({}),
    disabled: false
  });
  const emit = defineEmits<{
    (e: 'click'): void;
  }>();
  function onClick() {
    if (props.disabled) return;
    emit('click');
  }

  const defaultOptions: ButtonOptions = {
    label: 'Base Button',
    title: 'Button',
    icon: icon,
    icon_alt: 'Button Icon',
    class: 'base',
    type: 'button'
  };
  const mainOptions = computed(() => ({
    ...defaultOptions,
    ...props.options
  }));
</script>

<template>
  <button
    v-ripple
    class="button"
    @click="onClick"
    :class="mainOptions.class"
    :aria-label="mainOptions.label"
    :type="mainOptions.type"
    :disabled="disabled">
    {{ mainOptions.title }}
    <img v-if="mainOptions.icon" :src="mainOptions.icon" :alt="mainOptions.icon_alt" />
  </button>
</template>

<style lang="scss" scoped>
  .button {
    height: fit-content;
    min-height: 56px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-sm);
    border-radius: var(--radius-md);
    background-color: var(--color-primary);
    text-transform: uppercase;
    color: var(--color-text-dark);
    transition: var(--transition-base);
    font-family: Orbitron, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    &:hover {
      background-color: color-mix(in srgb, var(--color-primary), black 15%);
    }
    &.base {
      padding: 0 var(--space-md);
    }
    &.wide {
      padding: 0 var(--space-xxl);
    }
    &:disabled {
      background-color: var(--color-disabled);
      pointer-events: none;
      cursor: not-allowed;
    }
  }
</style>
