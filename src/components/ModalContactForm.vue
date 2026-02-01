<script setup lang="ts">
  import { modal } from '@/composables/useGlobalModal';
  import ModalWindow from '@/components/ModalWindow.vue';
  import ContactForm from '@/components/ContactForm.vue';
</script>

<template>
  <ModalWindow :options="{ customClass: 'w-630', hasCloseButton: true }">
    <template #content>
      <ContactForm v-if="modal.isRevealed.value" />
    </template>
  </ModalWindow>
</template>
