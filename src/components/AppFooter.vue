<script setup lang="ts">
  import { computed, watch } from 'vue';
  import { useThrottleFn } from '@vueuse/core';

  import { FOOTER } from '@/data/data';

  import BaseInput from '@/components/BaseInput.vue';
  import Button from '@/components/BaseButton.vue';
  import UiOverlayLoader from '@/components/UiOverlayLoader.vue';

  import { getUiIcon } from '@/utils/utils';
  import { useToastStore } from '@/stores/toast';
  import { useEmailForm } from '@/composables/useEmailForm';

  import logo from '@/assets/images/RPS_logo.svg';

  const toast = useToastStore();

  const { submit, email, error, isValid, touch, state } = useEmailForm();

  const throttledSubmit = useThrottleFn(submit, 2000);

  const errorMessage = computed(() => {
    return error.value && !state.success ? error.value : '';
  });

  // 👀 watch for error or success to show the toast
  watch(
    () => state.error,
    (error) => {
      if (error) {
        toast.show('Error sending message', 'error');
      }
    }
  );
  watch(
    () => state.success,
    (success, prev) => {
      if (success && !prev) {
        toast.show('Email sent successfully', 'success');
      }
    }
  );
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__wrapper">
      <div class="app-footer__logo logo-block">
        <a class="logo-block__link" v-if="logo" href="#top" aria-label="home link">
          <img class="logo-block__image" :src="logo" alt="web site logo" width="100" />
        </a>
        <div class="logo-block__text" v-html="FOOTER.description"></div>
      </div>
      <div class="app-footer__actions">
        <form class="app-footer__form" @submit.prevent="throttledSubmit">
          <UiOverlayLoader v-if="state.loading" />
          <BaseInput
            v-model="email"
            name="email"
            type="email"
            :placeholder="FOOTER.input.placeholder"
            :icon="getUiIcon(FOOTER.input.icon)"
            :icon_size="FOOTER.input.icon_size"
            :error="errorMessage"
            @blur="touch" />
          <Button
            :options="{ title: FOOTER.button.title, type: 'submit', area_label: FOOTER.button.area_label }"
            :disabled="!isValid"
            :class="'no-shrink'" />
        </form>
        <div class="app-footer__socials">
          <a
            v-if="FOOTER.socials.linkedin"
            v-ripple
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
            :href="FOOTER.socials.linkedin.link"
            :aria-label="FOOTER.socials.linkedin.alt">
            <img
              class="social-link__icon linkedin"
              :src="getUiIcon(FOOTER.socials.linkedin.icon)"
              :alt="FOOTER.socials.linkedin.alt" />
          </a>
          <a
            v-if="FOOTER.socials.whatsup"
            v-ripple
            class="social-link"
            target="_blank"
            rel="noopener noreferrer"
            :href="FOOTER.socials.whatsup.link"
            :aria-label="FOOTER.socials.whatsup.alt">
            <img
              class="social-link__icon whatsup"
              :src="getUiIcon(FOOTER.socials.whatsup.icon)"
              :alt="FOOTER.socials.whatsup.alt"
              width="100" />
          </a>
        </div>
      </div>
    </div>
    <div class="app-footer__bottom">
      {{ FOOTER.copyright }}
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .app-footer {
    padding: var(--space-xxl) var(--space-lg);
    @include respond-down(sm) {
      padding: var(--space-xxl) var(--space-md);
    }
    &__wrapper {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      column-gap: var(--space-xxl);
      row-gap: var(--space-xl);
      transition: all 0.3s ease-in-out;
      @include respond-down(md) {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }
    .logo-block {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
      @include respond-down(md) {
        flex-direction: row;
      }
      &__link {
        display: inline-block;
      }
      &__image {
        max-width: 100px;
      }
      &__text {
        max-width: 324px;
        font-family: var(--font-header);
        font-weight: 500;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: 1px;
        color: var(--color-text-light);
        text-align: left;
      }
    }
    &__actions {
      width: 100%;
      max-width: 450px;
      margin-bottom: 40px;
    }
    &__form {
      position: relative;
      display: flex;
      gap: var(--space-md);
      height: fit-content;
      margin-bottom: 76px;
      @include respond-down(sm) {
        flex-direction: column;
        gap: var(--space-lg);
      }
    }
    &__socials {
      display: flex;
      align-items: center;
      gap: var(--space-xl);
      @include respond-down(sm) {
        justify-content: center;
      }
    }
    .social-link {
      &__icon {
        width: 32px;
        height: 32px;
        transition: all 0.3s ease-in-out;
        &.linkedin {
          @include respond-down(sm) {
            width: 46px;
            height: 46px;
          }
        }
        &.whatsup {
          width: 34px;
          height: 36px;
          @include respond-down(sm) {
            width: 50px;
            height: 52px;
          }
        }
      }
    }
    &__bottom {
      padding: var(--space-md);
      margin-top: var(--space-xl);
      font-family: var(--font-body);
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: var(--color-text-light);
      opacity: 0.8;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    }
  }
</style>
