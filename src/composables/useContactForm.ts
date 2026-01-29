import { reactive, computed } from 'vue';
import { validateEmail, validateMinLength } from '@/utils/validator';
import { useThrottleFn } from '@vueuse/core';

export function useContactForm(onSubmit?: (form: FormState) => void) {
  const form = reactive({
    name: '',
    email: '',
    message: ''
  });

  const touched = reactive({
    name: false,
    email: false,
    message: false
  });

  // ----- raw validation (no touched) -----
  const rawEmailError = computed(() => validateEmail(form.email, true));

  const isNameValid = computed(() => form.name.trim().length >= 3);
  const isEmailValid = computed(() => !rawEmailError.value);
  const isMessageValid = computed(() => form.message.trim().length >= 10);

  const isFormValid = computed(() => {
    return isNameValid.value && isEmailValid.value && isMessageValid.value;
  });

  // ----- UI errors (with touched) -----
  const nameError = computed(() => {
    if (!touched.name) return '';
    return validateMinLength(form.name, 3, 'Name');
  });

  const emailError = computed(() => {
    if (!touched.email) return '';
    return rawEmailError.value;
  });

  const messageError = computed(() => {
    if (!touched.message) return '';
    return validateMinLength(form.message, 10, 'Message');
  });

  // ----- helpers -----
  function touchAll() {
    touched.name = true;
    touched.email = true;
    touched.message = true;
  }

  const submit = useThrottleFn(() => {
    touchAll();

    if (!isFormValid.value) return;

    onSubmit?.({ ...form });
  }, 3000);

  return {
    // state
    form,
    touched,

    // errors
    nameError,
    emailError,
    messageError,

    // validity
    isFormValid,

    // actions
    submit
  };
}

export type FormState = {
  name: string;
  email: string;
  message: string;
};
