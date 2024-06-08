/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TSourceChange, TSourceItem } from './sources.types';

export const fetchGetSources = async (params: TGetParamsChange): Promise<SR<TSourceItem>> => {
  const res = await api.get('/sources', {
    params: { limit: params?.limit || 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateSource = async (values: TSourceChange): Promise<SRO<TSourceItem>> => {
  const res = await api.post('/sources', values);
  return res.data;
};
export const fetchEditSource = async (values: TSourceChange): Promise<SRO<TSourceItem>> => {
  const res = await api.put(`/sources/${values.id}`, values);
  return res.data;
};
export const fetchDeleteSource = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/sources/${id}`);
  return res.data;
};
