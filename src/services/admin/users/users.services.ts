/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR, SRO, TGetParamsChange, TMessage, TRoleItemTypes } from 'src/services/index.types';

import { TUserChange, TUserItem } from './users.types';

export const fetchGetUsers = async (
  role: TRoleItemTypes,
  params: TGetParamsChange,
): Promise<SR<TUserItem>> => {
  const res = await api.get(`/admin/users?role=${role}`, {
    params: { limit: 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateUser = async (values: TUserChange): Promise<SRO<TUserItem>> => {
  const res = await api.post('/admin/users', values);
  return res.data;
};
export const fetchEditUser = async (values: TUserChange): Promise<SRO<TUserItem>> => {
  const res = await api.put(`/admin/users/${values.id}`, values);
  return res.data;
};
export const fetchDeleteUser = async (id: number): Promise<TMessage> => {
  const res = await api.delete(`/admin/users/${id}`);
  return res.data;
};
