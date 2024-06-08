import { api } from 'src/api';
import { SR, SRO, TGetParamsChange } from 'src/services/index.types';

import { TLeadNotificationChange, TLeadNotificationItem } from './lead-notifications.types';

export const fetchGetLeadNotifications = async (
  params: TGetParamsChange,
): Promise<SR<TLeadNotificationItem>> => {
  const res = await api.get('/notifications', {
    params: { limit: params?.limit || 10, page: params.page },
  });
  return res.data;
};
export const fetchCreateLeadNotification = async (
  values: TLeadNotificationChange,
): Promise<SRO<TLeadNotificationItem>> => {
  const res = await api.post('/notifications', values);
  return res.data;
};
