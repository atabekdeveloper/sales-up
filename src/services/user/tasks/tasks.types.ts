export type TUserTaskItem = {
  id: number;
  title: string;
  description: string;
  is_completed: boolean;
  created_at: string;
  updated_at: string;
};
export type TUserTaskChange = {
  id?: number;
  is_completed: boolean;
};
