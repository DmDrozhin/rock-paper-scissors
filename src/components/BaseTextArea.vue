<script setup lang="ts">
  interface Props {
    modelValue: string;
    label?: string;
    placeholder?: string;
    name?: string;
    icon?: string;
    icon_size?: number;
    error?: string;
    maxlength?: number;
    rows?: number;
    disabled?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    maxlength: 500,
    rows: 3,
    disabled: false
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'blur'): void;
    (e: 'focus'): void;
  }>();
</script>

<template>
  <div class="base-textarea" :class="{ 'base-textarea--error': error, 'base-textarea--disabled': disabled }">
    <label v-if="label" class="base-textarea__label" :for="name">
      {{ label }}
    </label>

    <div class="base-textarea__control">
      <img
        v-if="icon"
        class="base-textarea__icon"
        :src="icon"
        alt="textarea icon"
        aria-hidden="true"
        :width="icon_size" />

      <textarea
        class="base-textarea__input"
        :id="name"
        :name="name"
        :rows="rows"
        :value="modelValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
        @blur="emit('blur')"
        @focus="emit('focus')" />
    </div>

    <div v-if="error" class="base-textarea__error">
      {{ error }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .base-textarea {
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: relative;

    &__label {
      font-size: 14px;
      color: var(--color-text-muted);
    }

    &__control {
      display: flex;
      gap: 12px;
      padding: var(--space-md) var(--space-lg);
      background-color: var(--input-bg-light);
      border-radius: var(--radius-md);
      transition: var(--transition-base);
      align-items: flex-start;
    }

    &__icon {
      margin-top: 6px;
      opacity: 0.5;
      transition: var(--transition-base);
    }

    &:focus-within &__icon {
      opacity: 1;
    }

    &__input {
      width: 100%;
      border: none;
      max-height: 128px;
      background: transparent;
      resize: vertical;
      font-family: Orbitron, sans-serif;
      font-size: 18px;
      line-height: 1.4;
      min-height: 80px;

      &::placeholder {
        color: var(--color-text-muted);
      }
    }

    &__error {
      font-size: 12px;
      color: var(--color-danger);
      position: absolute;
      left: 0;
      bottom: -20px;
    }

    &--error &__control {
      box-shadow: 0 0 0 1px var(--color-danger);
    }

    &--disabled {
      opacity: 0.6;
      pointer-events: none;
    }
  }
</style>
