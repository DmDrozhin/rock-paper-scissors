<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { computed, ref } from 'vue';
import Header from '@/components/AppHeader.vue'
import SectionRPS from '@/components/SectionRPS.vue'
import SectionWhoWeAre from '@/components/SectionWhoWeAre.vue'

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
  <div class="main-component">
    <Header />
    <SectionRPS />
    <SectionWhoWeAre />
  </div>
</template>

<style lang="scss" scoped>
.main-component {
  outline: 0.5px dotted rgb(255, 47, 85);
  // height: 100vh;
  width: 100%;
}
</style>

