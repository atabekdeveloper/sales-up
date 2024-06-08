/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TLeadChange, TLeadItem } from './leads.types';

export const fetchGetLeads = async (params: TGetParamsChange): Promise<SR<TLeadItem>> => {
  const res = await api.get('/leads', {
    params: { limit: params?.limit || 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateLead = async (values: TLeadChange): Promise<SRO<TLeadItem>> => {
  const res = await api.post('/leads', values);
  return res.data;
};
export const fetchEditLead = async (values: TLeadChange): Promise<SRO<TLeadItem>> => {
  const res = await api.put(`/leads/${values.id}`, values);
  return res.data;
};
export const fetchDeleteLead = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/leads/${id}`);
  return res.data;
};
