<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
  import Button from '@/components/BaseButton.vue';
  import { HEADER, META } from '@/data/data.ts';
  import logo from '@/assets/images/RPS_logo.svg';
</script>

<template>
  <header class="app-header">
    <div class="app-header__container">
      <a href="#" v-ripple class="app-header__logo">
        <img :src="logo" :alt="`${META.name} Logo`" />
      </a>
      <Button :options="{ title: HEADER.button }" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .app-header {
    width: 100%;
    min-height: 50px;
    padding: var(--space-lg) 0;
    outline: 1px solid rgb(204, 225, 171);
    &__logo {
      display: flex;
      align-items: center;
      img {
        height: 70px;
      }
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
