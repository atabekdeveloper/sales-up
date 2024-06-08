/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TAdminTaskChange, TAdminTaskItem, TAdminTasksAddedUsers } from './tasks.types';

export const fetchGetAdminTasks = async (params: TGetParamsChange): Promise<SR<TAdminTaskItem>> => {
  const res = await api.get('/admin/tasks', {
    params: { limit: 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateAdminTask = async (
  values: TAdminTaskChange,
): Promise<SRO<TAdminTaskItem>> => {
  const res = await api.post('/admin/tasks', values);
  return res.data;
};
export const fetchAdminTaskAddedUsers = async (
  values: TAdminTasksAddedUsers,
): Promise<SRO<null>> => {
  const res = await api.post(`/admin/tasks/${values.id}/users`, { user_ids: values.user_ids });
  return res.data;
};
export const fetchEditAdminTask = async (
  values: TAdminTaskChange,
): Promise<SRO<TAdminTaskItem>> => {
  const res = await api.put(`/admin/tasks/${values.id}`, values);
  return res.data;
};
export const fetchDeleteAdminTask = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/tasks/${id}`);
  return res.data;
};
