<script setup lang="ts">
  import { watch } from 'vue';
  import { modal } from '@/composables/useGlobalModal';
  import { useScrollLock, onKeyStroke } from '@vueuse/core';

  interface ModalOptions {
    customClass?: string;
    hasCloseButton?: boolean;
  }
  withDefaults(
    defineProps<{
      options?: ModalOptions;
    }>(),
    {
      options: () => ({ hasCloseButton: true })
    }
  );

  const { isRevealed, cancel } = modal;

  useScrollLock(document.body);

  onKeyStroke('Escape', () => {
    if (isRevealed.value) cancel();
  });
  watch(isRevealed, (open) => {
    document.body.style.overflow = open ? 'hidden' : '';
  });
</script>

<template>
  <teleport to="body">
    <transition name="modal-fade">
      <div v-if="isRevealed" class="overlay-layer" :class="options.customClass" @click.self="cancel()">
        <div class="modal-block">
          <button v-if="options.hasCloseButton" class="modal-block__close-button" @click="cancel()">×</button>
          <slot name="content" />
        </div>
      </div>
    </transition>
  </teleport>
</template>

<style lang="scss">
  .overlay-layer {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: grid;
    place-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: var(--space-md);
  }

  .modal-block {
    position: relative;
    width: fit-content;
    border-radius: var(--radius-lg);
    box-shadow: var(--space-md);
    &.paddings-md {
      padding: var(--space-md);
    }
    &.paddings-lg {
      padding: var(--space-lg);
    }
    &__close-button {
      $size: 32px;
      width: $size;
      height: $size;
      font-size: 24px;
      line-height: 1;
      border-radius: 50%;
      box-shadow: var(--shadow-sm);
      position: absolute;
      top: var(--space-sm);
      right: var(--space-sm);
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--color-text-light);
      z-index: 100;
      &:hover {
        background-color: var(--color-bg-light);
      }
    }
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .modal-fade-enter-from,
  .modal-fade-leave-to {
    opacity: 0;
  }
</style>
