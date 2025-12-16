// TYPES
import type { SuccessCallback, ErrorCallback } from "@/helpers/apiHelper";
import type { AuthApiRequestType } from "@/types/api/requests/auth/authApiRequestType.type";

// HELPER
import { httpRequest } from "@/helpers/apiHelper";

export default function useAuthApi() {
  /**
   * Responsável por fazer a request de login de usuário - POST /auth/users/login
   * @param payload AuthApiRequestType - payload de login
   * @param onSuccess Callback de sucesso
   * @param onError Callback de erro
   */
  const loginRequest = (
    payload: AuthApiRequestType,
    onSuccess: SuccessCallback,
    onError: ErrorCallback
  ) => {
    httpRequest(
      'post',
      '/auth/users/login',
      undefined,
      payload,
      onSuccess,
      onError
    );
  }

  /**
   * Responsável por fazer a request de logout de usuário POST /auth/users/login
   * @param onSuccess Callback de sucesso
   * @param onError Callback de erro
   */
  const logoutRequest = (
    onSuccess: SuccessCallback,
    onError: ErrorCallback
  ) => {
    httpRequest(
      'post',
      '/auth/users/logout',
      undefined,
      undefined,
      onSuccess,
      onError
    );
  }

  /**
   * Responsável por fazer a request que lista os dados do usuário autenticado GET /auth/users/me
   * @param onSuccess Callback de sucesso
   * @param onError Callback de erro
   */
  const meRequest = (
    onSuccess: SuccessCallback,
    onError: ErrorCallback
  ) => {
    httpRequest(
      'get',
      '/auth/users/me',
      undefined,
      undefined,
      onSuccess,
      onError
    );
  }
  
  return {
    loginRequest,
    logoutRequest,
    meRequest
  }
}