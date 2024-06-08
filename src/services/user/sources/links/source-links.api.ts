/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateSouceLink,
  fetchDeleteSouceLink,
  fetchEditSouceLink,
  fetchGetSouceLinks,
} from './source-links.services';

const useGetSourceLinksQuery = (id: number, params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetSouceLinks(id, params),
    queryKey: ['source-link', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateSourceLinkMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateSouceLink,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['source-link'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditSourceLinkMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditSouceLink,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['source-link'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteSourceLinkMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteSouceLink,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['source-link'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useCreateSourceLinkMutation,
  useDeleteSourceLinkMutation,
  useEditSourceLinkMutation,
  useGetSourceLinksQuery,
};
