/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateCompany,
  fetchDeleteCompany,
  fetchEditCompany,
  fetchGetCompany,
} from './company.services';

const useGetCompanyQuery = () =>
  useQuery({
    queryFn: fetchGetCompany,
    queryKey: ['company'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateCompanyMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateCompany,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['company'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditCompanyMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditCompany,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['company'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteCompanyMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteCompany,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['company'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useCreateCompanyMutation,
  useDeleteCompanyMutation,
  useEditCompanyMutation,
  useGetCompanyQuery,
};
