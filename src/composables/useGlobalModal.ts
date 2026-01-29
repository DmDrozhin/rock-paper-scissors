import { useConfirmDialog } from '@vueuse/core';

export const modal = useConfirmDialog<{
  source?: string;
}>();
