export type UserClass = 'warrior' | 'mage';

export interface CreateUserApiRequestType {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  is_admin: boolean;
  class: UserClass;
  exp: number;
  cash: number;
}