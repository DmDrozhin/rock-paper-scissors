<script setup lang="ts">
  import { modal } from '@/composables/useGlobalModal';
  import ModalWindow from '@/components/ModalWindow.vue';
  import ContactForm from '@/components/ContactForm.vue';
</script>

<template>
  <ModalWindow>
    <template #content>
      <ContactForm v-if="modal.isRevealed.value" />
    </template>
  </ModalWindow>
</template>
