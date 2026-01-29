<script setup lang="ts">
  import ModalWindow from '@/components/ModalWindow.vue';
  import ContactForm from '@/components/ContactForm.vue';
</script>

<template>
  <ModalWindow>
    <template #content>
      <ContactForm />
    </template>
  </ModalWindow>
</template>
