/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamsChange } from 'src/services/index.types';

import { TUserTaskChange, TUserTaskItem } from './tasks.types';

export const fetchGetUserTasks = async (params: TGetParamsChange): Promise<SR<TUserTaskItem>> => {
  const res = await api.get('/tasks', {
    params: { limit: 10, page: params.page },
  });
  return res.data;
};
export const fetchEditUserTask = async (values: TUserTaskChange): Promise<SRO<TUserTaskItem>> => {
  const res = await api.patch(`/tasks/${values.id}`, { is_completed: values.is_completed });
  return res.data;
};
