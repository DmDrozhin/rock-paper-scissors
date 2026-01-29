<script setup lang="ts">
  import { useThrottleFn } from '@vueuse/core';
  import { FOOTER } from '@/data/data';
  import logo from '@/assets/images/RPS_logo.svg';
  import BaseInput from '@/components/BaseInput.vue';
  import Button from '@/components/BaseButton.vue';
  import { getUiIcon } from '@/utils/utils';
  import { useEmailField } from '@/composables/useEmailField';

  const { email, error, isValid, touch } = useEmailField(false);

  const submit = useThrottleFn(() => {
    touch();
    if (!isValid.value) return;

    console.log('Submit email:', email.value);
  }, 3000);
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__wrapper">
      <div class="app-footer__logo">
        <a v-if="logo" href="#top" aria-label="home link">
          <img :src="logo" alt="web site logo" width="100" />
        </a>
        <div class="app-footer__assertion" v-html="FOOTER.description"></div>
      </div>
      <div class="app-footer__actions">
        <form class="app-footer__form" @submit.prevent="submit">
          <BaseInput
            v-model="email"
            name="email"
            type="email"
            :placeholder="FOOTER.input.placeholder"
            :icon="getUiIcon(FOOTER.input.icon)"
            :icon_size="FOOTER.input.icon_size"
            :error="error"
            @blur="touch" />
          <Button
            :options="{ title: FOOTER.button.title, type: 'submit', area_label: FOOTER.button.area_label }"
            :disabled="!isValid" />
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
            <img :src="getUiIcon(FOOTER.socials.linkedin.icon)" :alt="FOOTER.socials.linkedin.alt" width="32" />
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
    outline: 1px dotted rgba(142, 140, 240, 0.482);
    padding: var(--space-xxl) 0;
    &__wrapper {
      max-width: 1100px;
      margin: 0 auto;
      padding: var(--space-lg);
      display: flex;
      justify-content: space-between;
      gap: var(--space-xl);
    }
    &__assertion {
      max-width: 324px;
      margin-top: var(--space-xl);
      font-family: var(--font-header);
      font-weight: 500;
      font-size: 20px;
      line-height: 140%;
      letter-spacing: 1px;
      color: var(--color-text-light);
    }
    &__actions {
      max-width: 450px;
    }
    &__form {
      display: flex;
      gap: var(--space-md);
      height: fit-content;
      margin-bottom: 76px;
    }
    &__socials {
      display: flex;
      gap: var(--space-md);
    }
    .social-link {
      overflow: hidden;
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
