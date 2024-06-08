import { TRoleItemTypes } from '../index.types';

export type TAuthLogin = {
  phone: string;
  password: string;
};
export type TAuthLoginGet = {
  user_role_name: TRoleItemTypes;
  access_token: string;
};
export type TAuthUserItem = {
  id: number;
  name: string;
  phone: string;
  role_id: number;
  role_name: TRoleItemTypes;
};
