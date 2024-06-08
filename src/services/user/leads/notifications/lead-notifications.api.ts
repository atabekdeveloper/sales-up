/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  fetchCreateLeadNotification,
  fetchGetLeadNotifications,
} from './lead-notifications.services';

const useGetLeadNotificationsQuery = (params: TGetParamsChange) =>
  useQuery({
    queryFn: () => fetchGetLeadNotifications(params),
    queryKey: ['lead-notification', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useCreateLeadNotificationMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchCreateLeadNotification,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['lead-notification'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useCreateLeadNotificationMutation, useGetLeadNotificationsQuery };
