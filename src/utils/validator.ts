export function validateEmail(value: string, required?: boolean): string {
  if (required && !value) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Enter a valid email';
  }
  return '';
}
