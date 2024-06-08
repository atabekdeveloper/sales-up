/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateBotTicket,
  fetchDeleteBotTicket,
  fetchEditBotTicket,
  fetchGetBotTickets,
} from './bot-tickets.services';

const useGetBotTicketsQuery = (params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetBotTickets(params),
    queryKey: ['bot-ticket', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateBotTicketMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateBotTicket,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['bot-ticket'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useEditBotTicketMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditBotTicket,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['bot-ticket'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteBotTicketMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteBotTicket,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['bot-ticket'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useCreateBotTicketMutation,
  useDeleteBotTicketMutation,
  useEditBotTicketMutation,
  useGetBotTicketsQuery,
};
