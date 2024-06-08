/* eslint-disable object-curly-newline */
import { api } from 'src/api';
import { SR } from 'src/services/index.types';

import { TLeadStatusItem } from './lead-statuses.types';

export const fetchGetLeadStatuses = async (): Promise<SR<TLeadStatusItem>> => {
  const res = await api.get('/lead-statuses');
  return res.data;
};
