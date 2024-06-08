import { api } from 'src/api';
import { SR, SRO, TMessage } from 'src/services/index.types';

import { TCompanyChange, TCompanyItem } from './company.types';

export const fetchGetCompany = async (): Promise<SR<TCompanyItem>> => {
  const res = await api.get('/telegraph-bots');
  return res.data;
};
export const fetchCreateCompany = async (values: TCompanyChange): Promise<SRO<TCompanyItem>> => {
  const res = await api.post('/telegraph-bots', values);
  return res.data;
};
export const fetchEditCompany = async (values: TCompanyChange): Promise<SRO<TCompanyItem>> => {
  const res = await api.put(`/telegraph-bots/${values.token}`, values);
  return res.data;
};
export const fetchDeleteCompany = async (token: string): Promise<TMessage> => {
  const res = await api.delete(`/telegraph-bots/${token}`);
  return res.data;
};
