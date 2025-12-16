import type { AxiosInstance } from 'axios';

import axios from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export function useAxios() {
  return {
    instance: axiosInstance,
  }
}
