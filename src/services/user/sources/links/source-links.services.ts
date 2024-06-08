/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TSourceLinkChange, TSourceLinkItem } from './source-links.types';

export const fetchGetSouceLinks = async (
  id: number,
  params: TGetParamsChange,
): Promise<SR<TSourceLinkItem>> => {
  const res = await api.get(`/sources/${id}/links`, {
    params: { limit: params?.limit || 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateSouceLink = async (
  values: TSourceLinkChange,
): Promise<SRO<TSourceLinkItem>> => {
  const res = await api.post(`/sources/${values.id}/links`, values);
  return res.data;
};
export const fetchEditSouceLink = async (
  values: TSourceLinkChange,
): Promise<SRO<TSourceLinkItem>> => {
  const res = await api.put(`/links/${values.id}`, values);
  return res.data;
};
export const fetchDeleteSouceLink = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/links/${id}`);
  return res.data;
};
