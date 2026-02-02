<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { WHO_WE_ARE } from '@/data/data.ts';
  import Button from '@/components/BaseButton.vue';
  import { getUiIcon } from '@/utils/utils.ts';
  import { modal } from '@/composables/useGlobalModal.ts';

  interface Props {
    options?: Record<string, unknown>;
  }

  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });

  const defaultOptions: Record<string, unknown> = {};
  const mainOptions = computed(() => ({
    ...props.options,
    ...defaultOptions
  }));
</script>

<template>
  <div class="section-who-we-are">
    <h2 class="section-who-we-are__title">{{ WHO_WE_ARE.title }}</h2>
    <div class="section-who-we-are__assertion assertion">{{ WHO_WE_ARE.description }}</div>
    <div class="section-who-we-are__cards" v-if="WHO_WE_ARE.cards.length">
      <!--CARD -->
      <div class="card" v-for="(card, index) in WHO_WE_ARE.cards" :key="index">
        <div class="card__image-circle" v-if="card.img">
          <img
            v-if="card.img"
            class="card__img"
            :src="getUiIcon(card.img)"
            :alt="card.title"
            :width="card.img_size"
            :height="card.img_size" />
        </div>
        <h3 class="card__title">{{ card.title }}</h3>
        <ul class="card__list" v-if="card.list?.length">
          <li v-for="(item, idx) in card.list" :key="idx" class="card__list-item">
            {{ item }}
          </li>
        </ul>
      </div>
      <!--END CARD-->
    </div>
    <div class="section-who-we-are__remark remark">{{ WHO_WE_ARE.remark }}</div>
    <Button
      class="section-who-we-are__button"
      :options="{ title: WHO_WE_ARE.button.title, area_label: WHO_WE_ARE.button.area_label, class: 'wide' }"
      @click="modal.reveal({ source: 'who we are' })" />
  </div>
</template>

<style lang="scss" scoped>
  .section-who-we-are {
    // outline: 1px dotted rgba(241, 163, 193, 0.505);
    position: relative;
    padding: var(--space-xxl) var(--space-lg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--space-xxl);
    overflow: hidden;
    @include respond-down(sm) {
      padding: var(--space-xxl) var(--space-md);
    }
    &__title {
      text-align: center;
    }
    &__assertion {
      max-width: 600px;
      text-align: center;
    }
    &__cards {
      display: flex;
      justify-content: center;
      gap: var(--space-xl);
      @include respond-down(xl) {
        // gap: var(--space-md);
      }
      @include respond-down(lg) {
        flex-wrap: wrap;
      }
      @include respond-down(sm) {
        gap: var(--space-xl);
      }
    }
    .card {
      width: 100%;
      max-width: 325px;
      // outline: 1px dotted rgba(200, 200, 200, 0.491);
      border-radius: var(--radius-lg);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-xl);
      &__title {
        text-align: center;
      }
      &__list {
        align-self: flex-start;
        list-style-type: disc;
        padding-left: var(--space-xl);
      }
      &__list-item {
        color: var(--color-text-light);
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.05em;
        margin-bottom: var(--space-xs);
        @include respond-down(lg) {
          // font-size: 18px;
          // line-height: 24px;
        }
        &:last-child {
          margin-bottom: 0;
        }
        &::marker {
          font-size: 10px;
        }
      }
      &__image-circle {
        position: relative;
        $size: 200px;
        width: $size;
        height: $size;
        border-radius: 50%;
        display: grid;
        place-content: center;
        border: 1px dotted #1d1f23;
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
    &__remark {
      text-align: center;
    }
    &__button {
      margin-top: var(--space-lg);
    }
    @mixin gradient-ellipse {
      content: '';
      position: absolute;
      width: 20px;
      height: 740px;
      top: 0;
      border-radius: 50%;
      background: #ffe593;
      box-shadow:
        0px 0px 60px #fec40e,
        0px 0px 396px #fec40e,
        0px 0px 231px #fec40e,
        0px 0px 115px #fec40e,
        0px 0px 33px #fec40e,
        0px 0px 16px #fec40e;
      transition: all 0.3s ease-in-out;
      @include respond-down(lg) {
        top: 10%;
        height: 80%;
        bottom: 10%;
      }
      @include respond-down(md) {
        width: 15px;
        top: 10%;
        height: 80%;
        bottom: 10%;
      }
      @include respond-down(sm) {
        width: 8px;
      }
    }
    &::before {
      @include gradient-ellipse;
      left: -10px;
    }
    &::after {
      @include gradient-ellipse;
      right: -10px;
    }
  }
</style>
