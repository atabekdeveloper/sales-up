/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchAdminTaskAddedUsers,
  fetchCreateAdminTask,
  fetchDeleteAdminTask,
  fetchEditAdminTask,
  fetchGetAdminTasks,
} from './tasks.services';

const useGetAdminTasksQuery = (params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetAdminTasks(params),
    queryKey: ['admin-task', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateAdminTaskMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateAdminTask,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['admin-task'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};
const useAdminTaskAddedUsersMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchAdminTaskAddedUsers,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['admin-task'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditAdminTaskMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditAdminTask,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['admin-task'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteAdminTaskMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteAdminTask,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['admin-task'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useAdminTaskAddedUsersMutation,
  useCreateAdminTaskMutation,
  useDeleteAdminTaskMutation,
  useEditAdminTaskMutation,
  useGetAdminTasksQuery,
};
