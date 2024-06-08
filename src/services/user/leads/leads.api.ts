/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchCreateLead, fetchDeleteLead, fetchEditLead, fetchGetLeads } from './leads.services';

const useGetLeadsQuery = (params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetLeads(params),
    queryKey: ['lead', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateLeadMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateLead,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['lead'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditLeadMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditLead,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['lead'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteLeadMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteLead,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['lead'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useCreateLeadMutation, useDeleteLeadMutation, useEditLeadMutation, useGetLeadsQuery };
