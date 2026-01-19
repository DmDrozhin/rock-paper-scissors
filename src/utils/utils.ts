/**
 * Создаёт карту из glob-результата вида:
 * { './path/to/file.svg': { default: 'url' }, ... }
 *
 * Возвращает объект { 'file.svg': 'url', ... }
 */
export function createAssetMap(globResult: Record<string, { default: string }>): Record<string, string> {
  return Object.fromEntries(
    Object.entries(globResult).map(([path, module]) => {
      const filename = path.split('/').pop();
      return [filename as string, module.default];
    })
  );
}

/**
 * Возвращает полный путь к иконке в папке assets/images/ui
 */
export function getIconPath(file?: string): string {
  if (!file) {
    return '';
  }
  return new URL(`../assets/images/ui/${file}`, import.meta.url).href;
}
// 👀 Импорт всех изображений из папки assets/images
const images = import.meta.glob('/src/assets/images/**/*', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

// 👀 Возвращает полный путь к изображению в папке assets/images
export function getImagePath(file: string, path?: string): string {
  if (!file) return '';
  const normalizedPath = path?.replace(/^\/|\/$/g, '');
  const key = normalizedPath ? `/src/assets/images/${normalizedPath}/${file}` : `/src/assets/images/${file}`;
  if (!(key in images)) {
    if (import.meta.env.DEV) {
      console.warn(`Image not found: ${key}`);
    }
    return '';
  }
  return images[key] || '';
}

// --- 📞 форматирование телефонов ---
export function formatPhone(num: string): string {
  if (!num) return '';
  // убираем всё кроме цифр
  const digits = num.replace(/\D/g, '');
  // если номер в украинском формате (10 цифр после кода 0)
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
  }
  // если международный (например +380...)
  if (digits.length === 12 && digits.startsWith('380')) {
    return `(${digits.slice(2, 5)}) ${digits.slice(5, 8)}-${digits.slice(8, 10)}-${digits.slice(10)}`;
  }
  return num; // fallback
}
