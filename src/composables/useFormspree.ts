// src/composables/useFormspree.ts
import { useCaptcha } from './useCaptcha';

export function useFormspree() {
  // Get reCAPTCHA token function
  const { getToken } = useCaptcha();

  // 🚀 Function to send form data to Formspree
  async function send(endpoint: string, payload: Record<string, unknown>) {
    const captchaToken = await getToken('form_submit');

    // Prepare form data
    const formData = new FormData();

    // Append payload fields
    Object.entries(payload).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    // required by Formspree
    formData.append('g-recaptcha-response', captchaToken);
    formData.append('_template', 'table');

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json'
        // ❌ НЕ ставим Content-Type — браузер сам поставит boundary
      },
      body: formData
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('Formspree response:', text);
      throw new Error('👿 Formspree Error');
    }

    return response;
  }

  return { send };
}
