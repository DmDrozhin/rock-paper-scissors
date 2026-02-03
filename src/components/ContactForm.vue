<script setup lang="ts">
  import { watch } from 'vue';
  import { modal } from '@/composables/useGlobalModal';
  import { CONTACT_FORM } from '@/data/data';
  import { getUiIcon } from '@/utils/utils';
  import { useContactForm } from '@/composables/useContactForm';
  import { useToastStore } from '@/stores/toast';

  import BaseInput from '@/components/BaseInput.vue';
  import BaseButton from '@/components/BaseButton.vue';
  import BaseTextArea from '@/components/BaseTextArea.vue';
  import UiOverlayLoader from '@/components/UiOverlayLoader.vue';

  const toast = useToastStore();

  const {
    // form
    form,
    touched,
    // state
    state,
    // errors
    nameError,
    emailError,
    messageError,
    // validity
    isFormValid,
    // actions
    submit
  } = useContactForm((form) => {
    // 👌 Confirm the modal for successful submission and close it
    modal.confirm(form);
    // 👍 Show success toast
    toast.show('Message sent successfully', 'success');
  });

  // 👀 watch for error and show 👎 error toast
  watch(
    () => state.error,
    (error) => {
      if (error) {
        toast.show('Error sending message', 'error');
      }
    }
  );
</script>

<template>
  <form @submit.prevent="submit" class="contact-form">
    <UiOverlayLoader v-if="state.loading" />
    <div class="contact-form__container">
      <div class="header">
        <h2 class="header__title">{{ CONTACT_FORM.title }}</h2>
        <div class="header__description" v-html="CONTACT_FORM.description"></div>
      </div>
      <BaseInput
        v-model="form.name"
        label=""
        :placeholder="CONTACT_FORM.fields.name.placeholder"
        :name="CONTACT_FORM.fields.name.name"
        :type="CONTACT_FORM.fields.name.type"
        :icon="getUiIcon(CONTACT_FORM.fields.name.icon)"
        :icon_size="CONTACT_FORM.fields.name.icon_size"
        :error="nameError"
        @blur="touched.name = true" />
      <BaseInput
        v-model="form.email"
        label=""
        :placeholder="CONTACT_FORM.fields.email.placeholder"
        :name="CONTACT_FORM.fields.email.name"
        :type="CONTACT_FORM.fields.email.type"
        :icon="getUiIcon(CONTACT_FORM.fields.email.icon)"
        :icon_size="CONTACT_FORM.fields.email.icon_size"
        :error="emailError"
        @blur="touched.email = true" />
      <BaseTextArea
        v-model="form.message"
        :placeholder="CONTACT_FORM.fields.message.placeholder"
        :icon="getUiIcon(CONTACT_FORM.fields.message.icon)"
        :icon_size="CONTACT_FORM.fields.message.icon_size"
        :name="CONTACT_FORM.fields.message.name"
        label=""
        :error="messageError"
        @blur="touched.message = true" />
      <div class="contact-form__actions">
        <BaseButton
          :options="{
            title: CONTACT_FORM.button.title,
            type: CONTACT_FORM.button.type,
            area_label: CONTACT_FORM.button.aria_label,
            class: 'block'
          }"
          :disabled="!isFormValid" />
        <div class="contact-form__error-message" v-if="state.error">{{ state.error }}</div>
      </div>
    </div>
  </form>
</template>
<style lang="scss" scoped>
  .contact-form {
    position: relative;
    padding: var(--space-xl);
    position: relative;
    overflow: hidden;

    background-image: url('../assets/images/form-bg.svg');
    background-repeat: no-repeat;
    background-size: contain;

    background-color: var(--color-secondary);
    border-radius: var(--radius-md);

    $shadow-color: #fec60e54;
    box-shadow:
      // 0px 0px 40px $shadow-color,
      // 0px 0px 27px $shadow-color,
      0px 0px 10px $shadow-color,
      0px 0px 13px $shadow-color,
      0px 0px 5px $shadow-color,
      0px 0px 2px $shadow-color;

    @include respond-down(sm) {
      padding: var(--space-lg);
      border-radius: 0;
      box-shadow: none;
      border: none;
      min-height: 100dvh;
    }
    &::before {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      $size: 700px;
      width: $size;
      height: $size;
      border-radius: 50%;
      transform-origin: bottom right;
      transform: translate(50%, 50%);
      background: radial-gradient(50% 50% at 50% 50%, #fec40e 40%, rgba(254, 196, 14, 0) 100%);
      filter: blur(120px);
      pointer-events: none;
      z-index: 0;
    }
    &:after {
      content: '';
      position: absolute;
      right: var(--space-md);
      bottom: calc(var(--space-md) + env(safe-area-inset-bottom));
      $size: 70px;
      width: $size;
      height: $size;
      background-image: url('../assets/images/RPS_logo.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      pointer-events: none;
      z-index: 1;
    }
    &__container {
      width: 100%;
      max-width: 420px;
      margin: 0 auto;
      margin-bottom: var(--space-xxl);
      display: flex;
      flex-direction: column;
      gap: calc(var(--space-lg) + 2px);
      z-index: 2;
    }
    &__actions {
      width: 100%;
      position: relative;
      margin-bottom: var(--space-lg);
    }
    &__error-message {
      position: absolute;
      left: 0;
      bottom: calc(-1 * var(--space-lg));
      margin-top: var(--space-sm);
      font-size: 14px;
      color: var(--color-danger);
      text-align: center;
    }
    @media (max-height: 500px) and (orientation: landscape) {
      padding: var(--space-md); // Reduce padding for very short screens in landscape mode
      .header__title {
        margin-top: var(--space-md); // Reduce top margin for the title
      }
    }
  }
  .header {
    &__title {
      margin-bottom: var(--space-lg);
      margin-top: var(--space-xxl);
      font-family: 'Jost';
      font-style: normal;
      font-weight: 600;
      font-size: 52px;
      line-height: 56px;
      letter-spacing: 0.05em;
      color: var(--color-text-light);
      @include respond-down(sm) {
        font-size: 42px;
        line-height: 42px;
      }
    }
    &__description {
      font-family: 'Jost';
      font-style: normal;
      font-weight: 400;
      font-size: 22px;
      line-height: 32px;
      letter-spacing: 0.05em;
      color: var(--color-text-light);
    }
  }
</style>
