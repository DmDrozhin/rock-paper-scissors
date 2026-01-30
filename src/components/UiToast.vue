<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useToastStore } from '@/stores/toast';

  const toastStore = useToastStore();
  const { visible, message, type } = storeToRefs(toastStore);
</script>

<template>
  <transition name="fade-slide">
    <div v-if="visible" class="toast body-text" :class="type">
      {{ message }}
    </div>
  </transition>
</template>

<style lang="scss" scoped>
  .toast {
    position: fixed;
    top: var(--space-xxl);
    right: 0;
    padding: 12px 24px;
    border-radius: var(--radius-lg) 0 0 var(--radius-lg);
    z-index: 9999;
    &.error {
      background: var(--color-danger);
    }
    &.info {
      background: var(--color-info);
    }
    &.success {
      background: var(--color-primary);
      color: var(--color-text-dark);
    }
  }

  .fade-slide-enter-active {
    transition: all 0.3s ease-in;
  }
  .fade-slide-leave-active {
    transition: all 0.5s ease-out;
  }
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateX(150px);
  }
</style>
