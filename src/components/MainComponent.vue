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
    <main role="main">
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
    background-image: url('@/assets/images/grid-vertical.svg'), url('@/assets/images/grid-horizontal.svg');
    background-size: contain, contain;
    background-color: var(--color-bg-app);
  }
</style>
