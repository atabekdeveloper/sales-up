/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamItem, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TBotPaymentCardChange, TBotPaymentCardItem } from './bot-payment-cards.types';

export const fetchGetBotPaymentCards = async (
  params: TGetParamsChange,
): Promise<SR<TBotPaymentCardItem>> => {
  const res = await api.get('/payment-cards', {
    params: { limit: params?.limit || 10, page: params.page },
  });
  return res.data;
};
export const fetchGetBotPaymentCardTypes = async (): Promise<SR<TGetParamItem>> => {
  const res = await api.get('/payment-card-types');
  return res.data;
};
export const fetchCreateBotPaymentCard = async (
  values: TBotPaymentCardChange,
): Promise<SRO<TBotPaymentCardItem>> => {
  const res = await api.post('/payment-cards', values);
  return res.data;
};
export const fetchDeleteBotPaymentCard = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/payment-cards/${id}`);
  return res.data;
};
