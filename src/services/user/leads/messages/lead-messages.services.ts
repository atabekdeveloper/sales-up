/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO } from 'src/services/index.types';

import { TLeadMessageChange, TLeadMessageItem } from './lead-messages.types';

export const fetchGetLeadMessages = async (id: number): Promise<SR<TLeadMessageItem>> => {
  const res = await api.get(`/telegraph-chats/${id}/messages`);
  return res.data;
};
export const fetchCreateLeadMessage = async (
  values: TLeadMessageChange,
): Promise<SRO<TLeadMessageItem>> => {
  const res = await api.post(`/telegraph-chats/${values.id}/messages`, values, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};
