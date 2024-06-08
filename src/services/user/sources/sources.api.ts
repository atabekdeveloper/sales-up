/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateSource,
  fetchDeleteSource,
  fetchEditSource,
  fetchGetSources,
} from './sources.services';

const useGetSourcesQuery = (params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetSources(params),
    queryKey: ['source', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateSourceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateSource,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['source'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditSourceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditSource,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['source'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteSourceMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteSource,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['source'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useCreateSourceMutation,
  useDeleteSourceMutation,
  useEditSourceMutation,
  useGetSourcesQuery,
};
