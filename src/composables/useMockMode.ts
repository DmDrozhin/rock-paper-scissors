export function useMockMode() {
  // Check if mock mode is enabled
  const isMock = import.meta.env.DEV && import.meta.env.VITE_MOCK_FORMS === 'true';
  // Simulate a delay for mock submissions
  async function simulate(delay = 500) {
    await new Promise((r) => setTimeout(r, delay));
  }
  return { isMock, simulate };
}
