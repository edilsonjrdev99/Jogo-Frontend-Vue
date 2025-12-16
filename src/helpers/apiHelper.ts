import { useAxios } from '@/services/useAxios';

// TYPES
import type { AxiosResponse, AxiosError } from 'axios';
export type SuccessCallback<T = any> = (response: AxiosResponse<T>) => void;
export type ErrorCallback = (error: AxiosError) => void;

export function httpRequest<T = any>(
  method: 'get' | 'post' | 'put' | 'delete' | 'patch',
  url: string,
  id?: string | number,
  data?: any,
  onSuccess?: SuccessCallback<T>,
  onError?: ErrorCallback,
) {
  const { instance } = useAxios();

  const finalUrl = id ? `${url}/${id}` : url;

  const config = {
    method,
    url: finalUrl,
    ...(data && { data }),
  }

  instance(config)
    .then((response) => {
      onSuccess?.(response)
    })
    .catch((error: AxiosError) => {
      onError?.(error)
    })
}
