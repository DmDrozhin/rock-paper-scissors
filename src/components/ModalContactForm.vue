<script setup lang="ts">
  import ModalWindow from '@/components/ModalWindow.vue';
  import ContactForm from '@/components/ContactForm.vue';
  import { modal } from '@/composables/useGlobalModal.ts';

  const { modalData } = modal;
</script>
<template>
  <ModalWindow>
    <template #content>
      <ContactForm />
    </template>
  </ModalWindow>
</template>
