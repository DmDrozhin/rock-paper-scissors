// src/composables/useCaptcha.ts
declare global {
  interface Window {
    grecaptcha?: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export function useCaptcha() {
  // Function to get reCAPTCHA token
  async function getToken(action = 'submit'): Promise<string> {
    if (!window.grecaptcha) {
      throw new Error('😡 reCAPTCHA not loaded');
    }

    return await window.grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action });
  }

  return { getToken };
}
