import { api } from 'src/api';
import { SR } from 'src/services/index.types';

import { TRoleItem } from './roles.types';

export const fetchGetRoles = async (): Promise<SR<TRoleItem>> => {
  const res = await api.get('/admin/roles');
  return res.data;
};
