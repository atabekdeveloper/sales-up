/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TBotTicketChange, TBotTicketItem } from './bot-tickets.types';

export const fetchGetBotTickets = async (params: TGetParamsChange): Promise<SR<TBotTicketItem>> => {
  const res = await api.get('/tickets', {
    params: { limit: params?.limit || 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateBotTicket = async (
  values: TBotTicketChange,
): Promise<SRO<TBotTicketItem>> => {
  const res = await api.post('/tickets', values);
  return res.data;
};
export const fetchEditBotTicket = async (
  values: TBotTicketChange,
): Promise<SRO<TBotTicketItem>> => {
  const res = await api.put(`/tickets/${values.id}`, values);
  return res.data;
};
export const fetchDeleteBotTicket = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/tickets/${id}`);
  return res.data;
};
