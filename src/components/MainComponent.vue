<script setup lang="ts">
  import Header from '@/components/AppHeader.vue';
  import SectionRPS from '@/components/SectionRPS.vue';
  import SectionWhoWeAre from '@/components/SectionWhoWeAre.vue';
  import SectionHowWeWork from './SectionHowWeWork.vue';
  import SectionDropUsLine from './SectionDropUsLine.vue';
  import Footer from '@/components/AppFooter.vue';
  import ModalContactForm from '@/components/ModalContactForm.vue';
</script>

<template>
  <div class="main-component">
    <Header />
    <SectionRPS />
    <SectionWhoWeAre />
    <SectionHowWeWork />
    <SectionDropUsLine />
    <Footer />
    <ModalContactForm />
  </div>
</template>

<style lang="scss" scoped>
  .main-component {
    width: 100%;
  }
</style>
