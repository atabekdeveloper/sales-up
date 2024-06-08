/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange, TRoleItemTypes } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchCreateUser, fetchDeleteUser, fetchEditUser, fetchGetUsers } from './users.services';

const useGetUsersQuery = (role: TRoleItemTypes, params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetUsers(role, params),
    queryKey: ['user', role, ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateUser,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditUser,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteUserMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteUser,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['user'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useCreateUserMutation, useDeleteUserMutation, useEditUserMutation, useGetUsersQuery };
