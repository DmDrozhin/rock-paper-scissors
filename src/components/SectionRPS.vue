<script setup lang="ts">
  import { RPS } from '@/data/data.ts';
  import icon from '@/assets/images/cardboard_airplane_wt.svg';
  import { modal } from '@/composables/useGlobalModal.ts';
</script>

<template>
  <div class="section-rps">
    <h1 class="section-rps__title">{{ RPS.title }}</h1>
    <div class="section-rps__description description" v-html="RPS.description"></div>
    <div class="trigger-box">
      <button
        v-ripple
        class="trigger-box__button"
        :aria-label="RPS.button.aria_label"
        @click="modal.reveal({ source: 'rock paper scissors' })">
        <img v-if="icon" :src="icon" alt="Rock Paper Scissors Icon" />
        <span>{{ RPS.button.title }}</span>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .section-rps {
    outline: 1px dashed rgba(115, 239, 239, 0.345);
    padding: var(--space-xxl) var(--space-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xxl);
    // &__title {}
    &__description {
      max-width: 700px;
      text-align: center;
    }
  }
  .trigger-box {
    position: relative;
    width: 100%;
    max-width: 320px;
    min-height: 350px;
    display: grid;
    place-content: center;
    z-index: 1;
    &::before {
      content: '';
      position: absolute;
      $size: 200px;
      width: $size;
      height: $size;
      left: calc(50% - $size / 2);
      top: calc(50% - $size / 2);
      border-radius: 50%;
      background: radial-gradient(50% 50% at 50% 50%, #fec40e 39%, rgba(254, 196, 14, 0) 100%);
      filter: blur(120px);
      z-index: 0;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url('@/assets/images/RPS_logo.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      opacity: 0.4;
      z-index: -1;
    }

    &__button {
      // display: none !important;
      $size: 200px;
      width: $size;
      height: $size;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-sm);
      padding: var(--space-md);
      background-color: var(--color-secondary);
      transition: var(--transition-base);
      &:hover {
        box-shadow:
          0px 0px 64px #fec40e,
          0px 0px 32px #fec40e,
          0px 0px 16px #fec40e,
          0px 0px 8px #fec40e,
          0px 0px 4px #fec40e;
      }
      img {
        width: 44px;
      }
      span {
        padding: 0 var(--space-md);
        font-family: 'Orbitron', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
        letter-spacing: 0.05em;
        color: var(--color-text-light);
        -webkit-text-stroke: 1px rgba(254, 196, 14, 0.29);
      }
    }
  }
</style>

<style lang="scss"></style>
