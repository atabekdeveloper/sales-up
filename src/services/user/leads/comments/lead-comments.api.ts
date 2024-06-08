/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateLeadComment,
  fetchDeleteLeadComment,
  fetchGetLeadComments,
} from './lead-comments.services';

const useGetLeadCommentsQuery = (id: number, params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetLeadComments(id, params),
    queryKey: ['lead-comment', id, ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateLeadCommentMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateLeadComment,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['lead-comment'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteLeadCommentMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteLeadComment,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['lead-comment'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useCreateLeadCommentMutation, useDeleteLeadCommentMutation, useGetLeadCommentsQuery };
