<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
  import Button from '@/components/BaseButton.vue';
  import { HEADER, META } from '@/data/data.ts';
  import logo from '@/assets/images/RPS_logo.svg';
  import { modal } from '@/composables/useGlobalModal.ts';
</script>

<template>
  <header class="app-header" id="top">
    <div class="app-header__container">
      <img v-if="logo" class="app-header__logo" :src="logo" :alt="`${META.name} Logo`" />
      <Button
        :options="{ title: HEADER.button, area_label: HEADER.area_label }"
        @click="modal.reveal({ source: 'app header' })" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .app-header {
    width: 100%;
    min-height: 50px;
    padding: var(--space-lg) 0;
    outline: 1px solid rgba(204, 225, 171, 0.484);
    &__logo {
      height: 70px;
    }
    &__container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
    }
  }
</style>
