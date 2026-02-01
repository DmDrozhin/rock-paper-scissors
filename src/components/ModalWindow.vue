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
      options: () => ({ hasCloseButton: true, customClass: '' })
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
      <div v-if="isRevealed" class="overlay-layer" @click.self="cancel()">
        <div class="modal-block" :class="options.customClass">
          <button
            v-if="options.hasCloseButton"
            class="modal-block__close-button"
            @click="cancel()"
            aria-label="Close modal">
            ×
          </button>
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.6);
    padding: var(--space-lg);

    overflow-y: auto;

    @include respond-down(sm) {
      padding: 0;
      align-items: flex-start;
    }
  }
  .modal-block {
    position: relative;

    width: 100%;

    &.w-630 {
      max-width: 630px;
    }
    @include respond-down(sm) {
      min-height: 100vh;
    }

    &__close-button {
      position: absolute;
      top: var(--space-sm);
      right: var(--space-sm);
      $size: 32px;
      width: $size;
      height: $size;
      font-size: 24px;
      line-height: 1;
      border-radius: 50%;
      box-shadow: var(--shadow-sm);
      background: transparent;
      border: none;
      cursor: pointer;
      color: var(--color-text-light);
      z-index: 101;
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
