import { TRoleItemTypes } from 'src/services/index.types';

export type TUserItem = {
  id: number;
  name: string;
  phone: string;
  role_id: number;
  role_name: TRoleItemTypes;
  is_completed: boolean;
};
export type TUserChange = {
  id?: number;
  name: string;
  phone: string;
  role_id: number;
  password: string;
};
