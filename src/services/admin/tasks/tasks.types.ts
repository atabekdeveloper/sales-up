import { TUserItem } from '../users/users.types';

export type TAdminTaskItem = {
  id: number;
  title: string;
  description: string;
  users: TUserItem[];
  created_at: string;
  updated_at: string;
};
export type TAdminTaskChange = {
  id?: number;
  title: string;
  description: string;
};
export type TAdminTasksAddedUsers = {
  id?: number;
  user_ids?: number[];
};
