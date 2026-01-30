import { reactive, computed } from 'vue';
import { validateEmail, validateMinLength } from '@/utils/validator';

interface ContactForm {
  name: string;
  email: string;
  message: string;
  company: string; // honeypot
}

export type FormState = {
  name: string;
  email: string;
  message: string;
};

export function useContactForm(onSubmit?: (form: FormState) => void) {
  // ---------------- form ----------------
  const form = reactive<ContactForm>({
    name: '',
    email: '',
    message: '',
    company: '' // honeypot
  });

  const touched = reactive({
    name: false,
    email: false,
    message: false
  });

  // ---------------- state ----------------
  const state = reactive({
    loading: false,
    success: false,
    error: '',
    mountedAt: Date.now()
  });

  // ---------------- validation ----------------
  const rawEmailError = computed(() => validateEmail(form.email, true));

  const isNameValid = computed(() => form.name.trim().length >= 3);
  const isEmailValid = computed(() => !rawEmailError.value);
  const isMessageValid = computed(() => form.message.trim().length >= 10);

  const isFormValid = computed(
    () => isNameValid.value && isEmailValid.value && isMessageValid.value
  );

  // ---------------- UI errors ----------------
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

  // ---------------- helpers ----------------
  function touchAll() {
    touched.name = true;
    touched.email = true;
    touched.message = true;
  }

  function resetForm() {
    form.name = '';
    form.email = '';
    form.message = '';
    form.company = '';

    touched.name = false;
    touched.email = false;
    touched.message = false;

    state.mountedAt = Date.now();
  }

  // ---------------- Formspree ----------------
  async function sendToFormspree(payload: FormState) {
    return fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...payload,
        _template: 'table'
      })
    });
  }

  // ---------------- mock mode ----------------
  const isMock =
    import.meta.env.DEV && import.meta.env.VITE_MOCK_FORMS === 'true';

  // ---------------- submit ----------------
  async function submit() {
    if (state.loading) return;

    touchAll();
    state.error = '';
    state.success = false;

    // honeypot → имитируем успех
    if (form.company) {
      state.success = true;
      resetForm();
      return;
    }

    // анти-бот (3 сек)
    if (Date.now() - state.mountedAt < 3000) {
      state.error = 'Too fast 🤖';
      return;
    }

    if (!isFormValid.value) return;

    state.loading = true;

    try {
      // optional hook (analytics, etc.)
      onSubmit?.({
        name: form.name,
        email: form.email,
        message: form.message
      });

      // mock → для теста тостов и лоадера
      if (isMock) {
        await new Promise((r) => setTimeout(r, 600));
        state.success = true;
        resetForm();
        return;
      }

      const response = await sendToFormspree({
        name: form.name,
        email: form.email,
        message: form.message
      });

      if (!response.ok) {
        throw new Error('Formspree error');
      }

      state.success = true;
      resetForm();
    } catch (err) {
      state.error = 'Failed to send message. Please try again later.';
      console.error('Contact form submission error:', err);
    } finally {
      state.loading = false;
    }
  }

  // ---------------- TEST HELPERS ----------------
  // можно дергать вручную, не отправляя форму
  function mockSuccess() {
    state.success = true;
  }

  function mockError(message = 'Mock error ❌') {
    state.error = message;
  }

  return {
    // form
    form,
    touched,

    // state
    state,

    // errors
    nameError,
    emailError,
    messageError,

    // validity
    isFormValid,

    // actions
    submit,

    // test helpers
    mockSuccess,
    mockError
  };
}
