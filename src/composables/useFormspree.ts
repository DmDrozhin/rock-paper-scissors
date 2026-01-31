import { useCaptcha } from './useCaptcha';

export function useFormspree() {
  // ---------------- captcha ----------------
  const { getToken } = useCaptcha();
  // ---------------- send ----------------
  async function send(endpoint: string, payload: Record<string, unknown>) {
    const captchaToken = await getToken('form_submit');
    // sending data to Formspree
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...payload,
        _template: 'table',
        'g-recaptcha-response': captchaToken
      })
    });

    if (!response.ok) {
      throw new Error('👿 Formspree Error');
    }

    return response;
  }

  return { send };
}
