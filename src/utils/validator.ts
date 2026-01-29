export function validateEmail(value: string, required?: boolean): string {
  if (required && !value) return 'Email is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return 'Enter a valid email';
  }
  return '';
}
export function validateRequired(value: string, label = 'Field'): string {
  if (!value.trim()) return `${label} is required`;
  return '';
}

export function validateMinLength(value: string, min: number, label = 'Field'): string {
  if (value.trim().length < min) {
    return `${label} must be at least ${min} characters`;
  }
  return '';
}
