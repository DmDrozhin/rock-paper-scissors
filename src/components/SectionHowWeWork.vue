<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
  import { HOW_WE_WORK } from '@/data/data.ts';
  import { getUiIcon } from '@/utils/utils.ts';
</script>

<template>
  <div class="section-how-we-work">
    <h2 class="section-how-we-work__title">{{ HOW_WE_WORK.title }}</h2>
    <div class="section-how-we-work__assertion" v-html="HOW_WE_WORK.description"></div>
    <div class="section-how-we-work__cards" v-if="HOW_WE_WORK.cards.length">
      <!--CARD -->
      <div class="card" v-for="(card, index) in HOW_WE_WORK.cards" :key="index">
        <div class="card__image-circle" v-if="card.img">
          <img v-if="card.img" :src="getUiIcon(card.img)" :alt="card.title" class="card__img" />
        </div>
        <div class="card__title">{{ card.title }}</div>
      </div>
      <!--END CARD-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .section-how-we-work {
    padding: var(--space-xxl) var(--space-lg);
    text-align: center;
    @include respond-down(sm) {
      padding: var(--space-xxl) var(--space-md);
    }
    &__title {
      margin-bottom: var(--space-xl);
    }
    &__assertion {
      margin-bottom: var(--space-xxl);
    }
    &__cards {
      max-width: 1000px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xxl); // xl - 32px
      justify-content: space-between;
      padding: 0 var(--space-xxl); // xxl - 40px
      @include respond-down(md) {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-lg); // lg - 24px
      }
      @include respond-down(sm) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0 var(--space-md); // md - 16px
      }
    }
    .card {
      margin: 0 auto;
      width: 100%;
      max-width: 150px;
      // outline: 1px dashed rgba(150, 150, 150, 0.432);
      border-radius: var(--radius-lg);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-lg);
      &__title {
        text-align: center;
        font-family: var(--font-body);
        font-weight: 600;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.05em;
        color: var(--color-text-light);
        @include respond-down(sm) {
          font-size: 20px;
          line-height: 24px;
          font-weight: 500;
        }
      }
      &__image-circle {
        position: relative;
        $size: 100px;
        width: $size;
        height: $size;
        border-radius: 50%;
        background-color: var(--color-bg-dark);
        display: grid;
        place-content: center;
        overflow: hidden;
        padding: var(--space-sm);
        &::before {
          content: '';
          position: absolute;
          width: calc($size);
          height: calc($size);
          border-radius: 50%;
          background-color: var(--color-primary);
          z-index: 0;
          overflow: hidden;
          opacity: 0.12;
        }
      }
    }
  }
</style>
