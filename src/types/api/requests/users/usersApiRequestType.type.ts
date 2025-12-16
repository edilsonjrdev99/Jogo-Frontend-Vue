export interface CreateUserApiRequestType {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  is_admin: boolean;
}