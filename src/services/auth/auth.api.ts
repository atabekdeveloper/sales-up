import { message } from 'antd';
import { useAuthPersistStore } from 'src/store';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchAuthLogin, fetchAuthLogout, fetchGetAuth } from './auth.services';

const useGetAuthUserQuery = () => {
  const { signOut } = useAuthPersistStore();
  return useQuery({
    queryFn: fetchGetAuth,
    queryKey: ['auth'],
    onError: (err: any) => {
      message.error(err.response.data.message);
      signOut();
    },
  });
};

const useAuthLoginMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchAuthLogin,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['auth'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useAuthLogoutMutation = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useMutation({
    mutationFn: fetchAuthLogout,
    onSuccess: (res) => {
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });

export { useAuthLoginMutation, useAuthLogoutMutation, useGetAuthUserQuery };
