<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
  import { DROP_US_A_LINE } from '@/data/data.ts';
  import Button from '@/components/BaseButton.vue';
  import { getUiIcon } from '@/utils/utils.ts';
</script>

<template>
  <div class="section-drop-us-line">
    <h2 class="section-drop-us-line__title">{{ DROP_US_A_LINE.title }}</h2>
    <div class="section-drop-us-line__assertion" v-html="DROP_US_A_LINE.description"></div>
    <Button class="section-drop-us-line__button" :options="{ title: DROP_US_A_LINE.button.title, class: 'wide' }" />
    <div class="section-drop-us-line__image-container">
      <img class="section-drop-us-line__image" :src="getUiIcon(DROP_US_A_LINE.img as any)" :alt="DROP_US_A_LINE.title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .section-drop-us-line {
    outline: 1px dotted rgb(241, 104, 12);
    text-align: center;
    padding: var(--space-xxl) var(--space-lg);
    &__title {
      margin-bottom: var(--space-xl);
    }
    &__assertion {
      margin-bottom: var(--space-xxl);
      font-size: 28px;
    }
    &__button {
      margin: 0 auto;
      margin-bottom: var(--space-xs);
    }
    &__image-container {
      position: relative;
      margin: 0 auto;
      outline: 1px dashed rgb(150, 150, 150);
      width: fit-content;
      height: 730px;
      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        $size: 450px;
        width: $size;
        height: $size;
        border-radius: 50%;
        background: radial-gradient(50% 50% at 50% 50%, #fec40e 100%, rgba(254, 196, 14, 0) 100%);
        opacity: 0.5;
        filter: blur(120px);
        z-index: 0;
      }
    }
    &__image {
      position: relative;
      z-index: 1;
      max-width: 100%;
      height: auto;
    }
  }
</style>
