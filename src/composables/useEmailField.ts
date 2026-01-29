import { ref, computed } from 'vue';
import { validateEmail } from '@/utils/validator';

export function useEmailField(required = false) {
  const email = ref('');
  const touched = ref(false);

  const rawError = computed(() => validateEmail(email.value, required));

  const error = computed(() => {
    if (!touched.value) return '';
    return rawError.value;
  });

  const isValid = computed(() => !rawError.value);

  function touch() {
    touched.value = true;
  }

  function reset() {
    email.value = '';
    touched.value = false;
  }

  return {
    email,
    error,
    isValid,
    touch,
    reset
  };
}
