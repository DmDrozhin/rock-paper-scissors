import { useConfirmDialog } from '@vueuse/core';
// Promise-based API for global modals
export const modal = useConfirmDialog<{ source?: string }>();
