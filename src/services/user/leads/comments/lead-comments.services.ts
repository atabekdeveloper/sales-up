/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamsChange, TMessage } from 'src/services/index.types';

import { TLeadCommentChange, TLeadCommentItem } from './lead-comments.types';

export const fetchGetLeadComments = async (
  id: number,
  params: TGetParamsChange,
): Promise<SR<TLeadCommentItem>> => {
  const res = await api.get(`leads/${id}/comments`, {
    params: { limit: params?.limit || 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateLeadComment = async (
  values: TLeadCommentChange,
): Promise<SRO<TLeadCommentItem>> => {
  const res = await api.post(`leads/${values.id}/comments`, { text: values.text });
  return res.data;
};
export const fetchDeleteLeadComment = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/comments/${id}`);
  return res.data;
};
