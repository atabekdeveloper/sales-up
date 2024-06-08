/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';
import { TGetParamsChange } from 'src/services/index.types';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchEditOrder, fetchGetOrders, fetchGetOrderStatuses } from './orders.services';
import { TOrderParams } from './orders.types';

const useGetOrdersQuery = (params: TGetParamsChange & TOrderParams) =>
  useQuery({
    queryFn: () => fetchGetOrders(params),
    queryKey: ['order', ...Object.values(params)],
    onError: (err: any) => message.error(err.response.data.message),
  });
const useGetOrderStatusesQuery = () =>
  useQuery({
    queryFn: fetchGetOrderStatuses,
    queryKey: ['order-status'],
    onError: (err: any) => message.error(err.response.data.message),
  });

const useEditOrderMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: fetchEditOrder,
    onSuccess: (res) => {
      client.invalidateQueries({ queryKey: ['order'] });
      message.success(res.message);
    },
    onError: (err: any) => message.error(err.response.data.message),
  });
};

export { useEditOrderMutation, useGetOrdersQuery, useGetOrderStatusesQuery };
