import { reactive } from 'vue';
import { useEmailField } from './useEmailField';
import { useFormspree } from './useFormspree';
import { useMockMode } from './useMockMode';

export function useEmailForm() {
  const { email, error, isValid, touch } = useEmailField(false);
  const { send } = useFormspree();
  const { isMock, simulate } = useMockMode();

  const state = reactive({
    loading: false,
    success: false,
    error: ''
  });

  async function submit() {
    touch();
    if (!isValid.value || state.loading) return;

    state.loading = true;
    state.error = '';
    state.success = false;

    try {
      if (isMock) {
        await simulate(1000);

      } else {
        await send(import.meta.env.VITE_FORMSPREE_ENDPOINT_EMAIL, {
          email: email.value
        });
      }

      state.success = true;
      email.value = '';

    } catch (err) {
      state.error = 'Failed sending email ❌';
      console.error('Email form error:', err);

    } finally {
      state.loading = false;
    }
  }

  return { email, error, isValid, state, submit, touch };
}
