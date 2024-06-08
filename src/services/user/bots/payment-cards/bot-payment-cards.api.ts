/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateBotPaymentCard,
  fetchDeleteBotPaymentCard,
  fetchGetBotPaymentCards,
  fetchGetBotPaymentCardTypes,
} from './bot-payment-cards.services';

const useGetBotPaymentCardsQuery = (params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetBotPaymentCards(params),
    queryKey: ['bot-payment-card', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useGetBotPaymentCardTypesQuery = () =>
  useQuery({
    queryFn: fetchGetBotPaymentCardTypes,
    queryKey: ['bot-payment-card-types'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateBotPaymentCardMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateBotPaymentCard,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['bot-payment-card'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

const useDeleteBotPaymentCardMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchDeleteBotPaymentCard,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['bot-payment-card'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export {
  useCreateBotPaymentCardMutation,
  useDeleteBotPaymentCardMutation,
  useGetBotPaymentCardsQuery,
  useGetBotPaymentCardTypesQuery,
};
