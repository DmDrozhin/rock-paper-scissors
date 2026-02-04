<script setup lang="ts">
  import Header from '@/components/AppHeader.vue';
  import SectionRPS from '@/components/SectionRPS.vue';
  import SectionWhoWeAre from '@/components/SectionWhoWeAre.vue';
  import SectionHowWeWork from './SectionHowWeWork.vue';
  import SectionDropUsLine from './SectionDropUsLine.vue';
  import Footer from '@/components/AppFooter.vue';
</script>

<template>
  <div class="main-component">
    <Header role="banner" />
    <main class="main-component__container" role="main">
      <SectionRPS />
      <SectionWhoWeAre />
      <SectionHowWeWork />
      <SectionDropUsLine />
    </main>
    <Footer role="contentinfo" />
  </div>
</template>

<style lang="scss" scoped>
  .main-component {
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: var(--color-bg-app);
    background-image: url('@/assets/images/grid-vertical.svg'), url('@/assets/images/grid-horizontal.svg');
    background-size: 30%, 30%;
    @include respond-down(sm) {
      background-size: 100%, 100%;
    }
    background-repeat: repeat, repeat;
    background-position: center center;
    &__container {
      max-width: 1440px;
      margin: 0 auto;
    }
  }
</style>
