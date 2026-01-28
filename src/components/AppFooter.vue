<script setup lang="ts">
  import { reactive, computed } from 'vue';
  import { FOOTER } from '@/data/data.ts';
  import logo from '@/assets/images/RPS_logo.svg';
  import Button from '@/components/BaseButton.vue';
  import BaseInput from '@/components/BaseInput.vue';
  import { getUiIcon } from '@/utils/utils.ts';
  import { validateEmail } from '@/utils/validator.ts';
  import { useThrottleFn } from '@vueuse/core';

  const user = reactive<{ email: string }>({
    email: ''
  });
  const touched = reactive({
    email: false
  });
  const emailError = computed(() => {
    if (!touched.email) return '';
    return validateEmail(user.email, false);
  });

  const isFormValid = computed(() => !emailError.value);

  const isButtonDisabled = computed(() => {
    return !user.email || !!emailError.value;
  });

  function markTouched(field: 'email') {
    touched[field] = true;
  }

  const submit = useThrottleFn(() => {
    touched.email = true;

    if (!isFormValid.value) return;

    // sending email
    console.log('Submit email:', user.email);
  }, 3000);
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__wrapper">
      <div class="app-footer__logo">
        <img :src="logo" alt="web site logo" width="100" />
        <div class="app-footer__assertion" v-html="FOOTER.description"></div>
      </div>
      <div class="app-footer__actions">
        <form class="app-footer__form" @submit.prevent="submit">
          <BaseInput
            v-model="user.email"
            label=""
            name="email"
            type="email"
            :placeholder="FOOTER.input.placeholder"
            :icon="getUiIcon(FOOTER.input.icon)"
            :error="emailError"
            @blur="markTouched('email')" />
          <Button
            @click="submit"
            :options="{ title: FOOTER.button.title, type: 'submit' }"
            :disabled="isButtonDisabled" />
        </form>
        <div class="app-footer__socials">
          <a
            class="social-link"
            :href="FOOTER.socials.linkedin.link"
            target="_blank"
            rel="noopener noreferrer"
            v-ripple
            v-if="FOOTER.socials.linkedin">
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
    outline: 1px dotted rgb(142, 140, 240);
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
