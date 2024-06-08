/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchEditUserTask, fetchGetUserTasks } from './tasks.services';

const useGetUserTasksQuery = (params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetUserTasks(params),
    queryKey: ['user-task', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useEditUserTaskMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditUserTask,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user-task'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useEditUserTaskMutation, useGetUserTasksQuery };
