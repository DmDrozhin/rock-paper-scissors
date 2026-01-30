export function useFormspree() {
  // ---------------- send ----------------
  async function send(endpoint: string, payload: Record<string, unknown>) {
    // sending data to Formspree
    const response = await fetch(endpoint, {
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

    if (!response.ok) {
      throw new Error('👿 Formspree Error');
    }

    return response;
  }

  return { send };
}
