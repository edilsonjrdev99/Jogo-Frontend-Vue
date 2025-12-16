// TYPES
import type { SuccessCallback, ErrorCallback } from '@/helpers/apiHelper';

// HELPER
import { httpRequest } from '@/helpers/apiHelper';

export function useHealthApi() {
  const healthTest = (
    onSuccess: SuccessCallback,
    onError: ErrorCallback,
  ) => {
    httpRequest('get', '/health', undefined, undefined, onSuccess, onError);
  }

  return {
    healthTest,
  }
}
