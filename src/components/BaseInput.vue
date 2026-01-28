<script setup lang="ts">
  interface Props {
    modelValue: string;
    label?: string;
    placeholder?: string;
    type?: string;
    name?: string;
    icon?: string;
    error?: string;
    maxlength?: number;
    disabled?: boolean;
  }

  withDefaults(defineProps<Props>(), {
    type: 'text',
    maxlength: 254,
    disabled: false
  });

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'blur'): void;
    (e: 'focus'): void;
  }>();
</script>

<template>
  <div class="base-input" :class="{ 'base-input--error': error, 'base-input--disabled': disabled }">
    <label v-if="label" class="base-input__label" :for="name">
      {{ label }}
    </label>

    <div class="base-input__control">
      <img v-if="icon" class="base-input__icon" :src="icon" alt="" aria-hidden="true" />

      <input
        class="base-input__input"
        :id="name"
        :name="name"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :maxlength="maxlength"
        :disabled="disabled"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        @blur="emit('blur')"
        @focus="emit('focus')" />
    </div>

    <div v-if="error" class="base-input__error">
      {{ error }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .base-input {
    width: 280px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    position: relative;
    &__label {
      font-size: 14px;
      color: var(--color-text-muted);
    }

    &__control {
      height: 56px;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 0 var(--space-lg);
      background-color: var(--input-bg-light);
      border-radius: var(--radius-md);
      transition: var(--transition-base);
    }

    &__icon {
      width: 26px;
      opacity: 0.5;
      transition: var(--transition-base);
    }

    &:focus-within &__icon {
      opacity: 1;
    }

    &__input {
      width: 100%;
      height: 100%;
      border: none;
      background: transparent;
      font-family: Orbitron, sans-serif;
      font-size: 20px;

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
