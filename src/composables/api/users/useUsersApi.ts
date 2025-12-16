// TYPES
import type { SuccessCallback, ErrorCallback } from "@/helpers/apiHelper";
import type { CreateUserApiRequestType } from "@/types/api/requests/users/usersApiRequestType.type";

// COMPOSABLE
import { httpRequest } from "@/helpers/apiHelper";

export default function useUsersApi() {
  /**
   * Responsável por fazer a request de cadastro de usuário POST /users
   * @param payload CreateUserApiRequestType - Parload de cadastro de usuário
   * @param onSuccess Callback de sucesso
   * @param onError Callback de erro
   */
  const createUserRequest = (
    payload: CreateUserApiRequestType,
    onSuccess: SuccessCallback,
    onError: ErrorCallback
  ) => {
    httpRequest(
      'post',
      '/users',
      undefined,
      payload,
      onSuccess,
      onError
    );
  }

  return {
    createUserRequest
  };
}