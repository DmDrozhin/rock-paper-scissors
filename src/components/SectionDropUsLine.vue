<script setup lang="ts">
  import { DROP_US_A_LINE } from '@/data/data.ts';
  import Button from '@/components/BaseButton.vue';
  import { getUiIcon } from '@/utils/utils.ts';
  import { modal } from '@/composables/useGlobalModal.ts';

  const image = getUiIcon(DROP_US_A_LINE.img);
</script>

<template>
  <div class="section-drop-us-line">
    <h2 class="section-drop-us-line__title">{{ DROP_US_A_LINE.title }}</h2>
    <div class="section-drop-us-line__assertion" v-html="DROP_US_A_LINE.description"></div>
    <Button
      class="section-drop-us-line__button"
      :options="{ title: DROP_US_A_LINE.button.title, class: 'wide', area_label: DROP_US_A_LINE.button.area_label }"
      @click="modal.reveal({ source: 'drop-us-line' })" />
    <div class="section-drop-us-line__image-container">
      <img class="section-drop-us-line__image" v-if="image" :src="image" :alt="DROP_US_A_LINE.title" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .section-drop-us-line {
    outline: 1px dotted rgba(241, 104, 12, 0.479);
    text-align: center;
    padding: var(--space-xxl) var(--space-lg);
    @include respond-down(sm) {
      padding: var(--space-xxl) var(--space-md);
    }
    &__title {
      margin-bottom: var(--space-xl);
    }
    &__assertion {
      font-size: 28px;
      max-width: 476px;
      margin: 0 auto;
      margin-bottom: var(--space-xxl);
    }
    &__button {
      margin: 0 auto;
      margin-bottom: var(--space-sm);
    }
    &__image-container {
      // outline: 1px dashed rgba(150, 150, 150, 0.491);
      position: relative;
      margin: 0 auto;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        $size: clamp(200px, 40vw, 450px); // or 250
        $blur: clamp(60px, 10vw, 120px);
        width: $size;
        height: $size;
        border-radius: 50%;
        background: radial-gradient(50% 50% at 50% 50%, #fec40e 100%, rgba(254, 196, 14, 0) 100%);
        opacity: 0.5;
        filter: blur($blur);
        z-index: 0;
      }
    }

    &__image {
      width: 100%;
      max-height: 730px;
      object-fit: contain;
      z-index: 1;
    }
  }
</style>
